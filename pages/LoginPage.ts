


import {Page} from '@playwright/test';

export class LoginPage{
   page: Page;

    constructor(page: Page){
        this.page=page;
    }

    //Locators
    emailInput='#input-email'
    passwordInput='#input-password'
    loginButton='input[type="submit"]'
    // Locator for error message
errorMessage = "//div[contains(@class,'alert-danger')]";



    
    //Action methods

    async enterEmail(email: string){
        await this.page.fill(this.emailInput,email);
    }

    async enterPassword(password: string){
        await this.page.fill(this.passwordInput,password);
    }

    async clickLogin(){
        await this.page.click(this.loginButton);
    }

    // Action method to get error message
async getloginErrorMessage() {
    const errorText = await this.page.locator(this.errorMessage).textContent();
    return errorText?.trim();
}
}