import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import { expect } from 'chai';
import InventoryPage from '../pageobjects/inventory.page.js';
import LoginPage from '../pageobjects/login.page.js';

Given(/^user is on login page$/, async() => {
    await LoginPage.open()
});

When(/^user logins with username and password$/, async() => {
    await LoginPage.login('standard_user', 'secret_sauce')
});

Then(/^user is navigated to the Inventory page$/, async() => {
    const currentUrl = await browser.getUrl()
    expect(currentUrl).to.contain('/inventory.html')

    expect(await InventoryPage.title.getText()).to.contain('Product')
    
    const inventoryList = await InventoryPage.items
    expect(inventoryList.length).to.eq(6)
});
