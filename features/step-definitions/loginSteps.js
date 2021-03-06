const { Given, When, Then } = require('@cucumber/cucumber');

const LoginAsana = require('../pageobjects/loginAsana.page');
const HomePage = require('../pageobjects/home.page');

const pages = {
    login: LoginAsana
}

Given(/^I open Asana (\w+) page$/, async page => { 
    await pages[page].open()
});

When(/^I login$/, async () => {
    await LoginAsana.login("ui.automation2021@gmail.com", "Automation1234");
});

Then(/^I should be logged in (\w+) page$/, async (pageName) => {
    await expect(HomePage.pageName).toHaveTextContaining(pageName);
})

Given(/^I loged in Asana page$/, async () => { 
    await pages["login"].open();
    await LoginAsana.login("ui.automation2021@gmail.com", "Automation1234")
})