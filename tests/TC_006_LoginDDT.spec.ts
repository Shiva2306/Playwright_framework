import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';

// Load CSV test data
const csvPath = "testdata/logindata2.csv";
const testData = DataProvider.getTestDataFromCsv(csvPath);

//This code reads login data (email, password, expected result) from a CSV file and stores it in testData.
//  Then, it loops through each row and runs the same login test multiple times with different data (data-driven testing).
//  For each row, it opens the website, performs login using the given credentials, and checks the result. 
// If login is expected to succeed, it verifies the “My Account” page is visible; otherwise, it checks for an error message.

for (const data of testData) {

    test(`Login Test 2 with CSV Data: ${data.testName} @datadriven`, async ({ page }) => {

        await page.goto(TestConfig.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickOnMyAccount();
        await homePage.clickOnLogin();

        const loginPage = new LoginPage(page);

        await loginPage.enterEmail(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLogin();

         await page.waitForLoadState('networkidle') 
         //waits until all network requests (like API calls, images, scripts) are finished and the page becomes idle.
         //  It helps ensure the page is fully loaded before performing assertions.
         //  This is useful after actions like login or navigation in dynamic applications. 

        if (data.expected.toLowerCase() === 'success') {

        
            await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();

        } else {

            const errorMessage = await loginPage.getloginErrorMessage();
             expect(errorMessage).toContain('Warning: No match');

        }
    });

}