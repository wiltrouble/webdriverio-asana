const { Given, When, Then } = require('@cucumber/cucumber');

const LoginAsana = require('../pageobjects/loginAsana.page');

const pages = {
    login: LoginAsana
}

Given(/^I open Asana Login page$/, async page => { 
    await pages[page].open()
});




