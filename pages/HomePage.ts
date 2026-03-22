

//3 components in pom - constructor, Locators, methods

import {Page} from '@playwright/test';

export class HomePage{
   page: Page;

    constructor(page: Page){
        this.page=page;
    }
    
    
    //Locators
      myaccount ='//span[text()="My Account"]';
      register= '//a[text()="Register"]';
      login='//a[text()="Login"]';


    //Action methods

    async clickOnMyAccount(){
        await this.page.click(this.myaccount);
        await this.page.waitForTimeout(2000);
    }

    async clickOnRegister(){
        this.page.click(this.register);
        await this.page.waitForTimeout(2000);
    }

    async clickOnLogin(){
        this.page.click(this.login);
        await this.page.waitForTimeout(2000);   
    }

}