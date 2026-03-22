
import { Page } from '@playwright/test';

export class SearchPage {

    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // ================= ACTION METHODS =================

    async enterSearchText(product: string){
        await this.page.getByPlaceholder('Search').fill(product);
    }

    async clickSearch(){
        await this.page.locator('button.btn.btn-default.btn-lg').click();
    }

    // Reusable method
    async searchProduct(product: string){
        await this.enterSearchText(product);
        await this.clickSearch();
    }

    

    async isProductDisplayed(){
        const products = this.page.locator('div.product-thumb h4 a');
        return await products.count() > 0;
    }

    // async getAllProductNames(){
    //     return await this.page.locator('div.product-thumb h4 a').allTextContents();
    // }

    async getNoResultsMessage(){
        return await this.page
            .getByText('There is no product that matches the search criteria.')
            .textContent();
    }
}