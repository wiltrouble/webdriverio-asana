const { Given, When, Then } = require('@cucumber/cucumber');

const HomePage = require('../pageobjects/home.page');

// 
When(/^I create a new Blank project with the following information$/, async () => {
    await HomePage.clickNewProject();
})


Then(/^the project should be created$/, async () => {
    await console.log("validations")
})