import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { config } from 'process';


//Load JSON test data logindata.json

const jsonPath="testdata/logindata.json";
const jsonTestData=DataProvider.getTestDataFromJson(jsonPath);


for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven`, async({page})=>{

        //const config = new TestConfig(); // create instance
        //await page.goto(config.appUrl);    // getting appURL from test.config.ts file
       
            await page.goto(TestConfig.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickOnMyAccount();
        await homePage.clickOnLogin();

        const loginPage = new LoginPage(page);
        //await loginPage.login(data.email, data.password);
        loginPage.enterEmail(data.email);
        loginPage.enterPassword(data.password);
        loginPage.clickLogin(); 

        if(data.expected.toLowerCase()==='success')
        {
          //  const myAccountPage=new MyAccountPage(page);
        //   await myAccountPage.isMyAccountPageExists();
            await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();        }
        else{
            const errorMessage=await loginPage.getloginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })

}

//This code reads login data from a JSON file and stores it in jsonTestData.
//  Then, it loops through each data set and runs the same login test multiple times with different inputs (data-driven testing).
//  For each entry, it opens the site, performs login using the given email and password, and checks the result. 
// If login is expected to succeed, it verifies the “My Account” page is visible; otherwise, it checks for an error message.