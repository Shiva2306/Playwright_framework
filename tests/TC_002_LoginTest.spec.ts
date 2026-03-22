

import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { MyAccountPage } from '../pages/MyAccountPage';

test('TC_002_LoginTest', async ({page})=>{

    await page.goto(TestConfig.appUrl);

   let hp = new HomePage(page);
   await hp.clickOnMyAccount();
   await hp.clickOnLogin();

    let lp = new LoginPage(page);
    await lp.enterEmail(TestConfig.email);
    await lp.enterPassword(TestConfig.password);
    await lp.clickLogin();

     let myAccountPage = new MyAccountPage(page);
    const status = await myAccountPage.isMyAccountPageExists();

     expect(status).toBeTruthy();
});


