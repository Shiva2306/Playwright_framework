


import {Page} from '@playwright/test';

export class RegistrationPage{
   page: Page;

    constructor(page: Page){
        this.page=page;
    }
    
      firstname='//input[@id="input-firstname"]';
      lastname='//input[@id="input-lastname"]'; 
      email='//input[@id="input-email"]';
      telephone='//input[@id="input-telephone"]';
        password='//input[@id="input-password"]';
        confirmpassword='//input[@id="input-confirm"]';
        subscribeYes='//input[@name="newsletter" and @value="1"]';
        checkbox='//input[@type="checkbox"]';
        continueButton='//input[@value="Continue"]';  
       successMessage = "h1:has-text('Your Account Has Been Created!')";

      
        //Action methods
    async enterFirstName(fname:string){
        await this.page.fill(this.firstname,fname); 
   
    }

    async enterLastName(lname:string){
        await this.page.fill(this.lastname,lname);

}

    async enterEmail(email:string){
        await this.page.fill(this.email,email);
    } 
    
    async enterTelephone(telephone:string){
        await this.page.fill(this.telephone,telephone);
    }   

    async enterPassword(password:string){
        await this.page.fill(this.password,password);
    }   

    async enterConfirmPassword(password:string){    
        await this.page.fill(this.confirmpassword,password);
    }

    async clickOnSubscribe(){
        await this.page.click(this.subscribeYes);
    }           

    async clickOnCheckbox(){
        await this.page.click(this.checkbox);
    }   

    async clickOnContinue(){
        await this.page.click(this.continueButton);
        await this.page.waitForTimeout(5000);
    }

    
// Action method
async getSuccessMessage() {
    return await this.page.locator(this.successMessage).textContent();
}

}    

