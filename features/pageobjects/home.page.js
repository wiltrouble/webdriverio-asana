const Page = require('./page');

class HomePage extends Page {

    get pageName () { return $('.TopbarPageHeaderStructure-title') }

    async verifyIfPageIsLoaded () {
        await (await this.pageName).getText();
    }

}

module.exports = new HomePage();