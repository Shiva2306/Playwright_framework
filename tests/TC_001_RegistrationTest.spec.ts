

import {expect, test} from '@playwright/test';  
import {HomePage} from '../pages/HomePage'; 
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomdatagenerator';
import { TestConfig } from '../test.config';

test('TC_001_RegistrationTest', async ({page})=>{   

    await page.goto(TestConfig.appUrl);

    let homePage = new HomePage(page);    
    await homePage.clickOnMyAccount();
        await homePage.clickOnRegister();

        let registrationPage = new RegistrationPage(page);
           let fn=RandomDataUtil.getFirstName();
           let ln=RandomDataUtil.getlastName(); 
           let email=RandomDataUtil.getEmail();
             // let telephone=RandomDataUtil.getPhoneNumber(); 
                let phone= RandomDataUtil.getRandomNumeric(10);

               
            let pass=RandomDataUtil.getPassword();
            //let pass=RandomDataUtil.getPassword();
           //let pass2= RandomDataUtil.getRandomPassword(10)

        await registrationPage.enterFirstName(fn);
        await registrationPage.enterLastName(ln);
        await registrationPage.enterEmail(email);
        await registrationPage.enterTelephone(phone);
        await registrationPage.enterPassword(pass);
        await registrationPage.enterConfirmPassword(pass);
        await registrationPage.clickOnSubscribe();
        await registrationPage.clickOnCheckbox();
        await registrationPage.clickOnContinue();

const successMsg = await registrationPage.getSuccessMessage();
     expect(successMsg).toContain('Your Account Has Been Created!');
});