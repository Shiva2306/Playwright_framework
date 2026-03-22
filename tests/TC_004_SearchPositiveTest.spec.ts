import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { TestConfig } from '../test.config';

test('TC_004_SearchProduct_Positive @sanity', async ({ page }) => {

    await page.goto(TestConfig.appUrl);

    const homePage = new HomePage(page);

    //  Search product from header
    const searchPage = new SearchPage(page);
    await searchPage.searchProduct('iPhone');

    // Validation
    const isProductVisible = await searchPage.isProductDisplayed();
     expect(isProductVisible).toBeTruthy();
});