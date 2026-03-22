import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { TestConfig } from '../test.config';


test('TC_005_SearchProduct_Negative @regression', async ({ page }) => {

    await page.goto(TestConfig.appUrl);

    const searchPage = new SearchPage(page);
    await searchPage.searchProduct('InvalidProduct123');

    // Validation
    const message = await searchPage.getNoResultsMessage();
     expect(message).toContain('no product');
});