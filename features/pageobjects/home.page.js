const Page = require('./page');

class HomePage extends Page {

    get pageName () { return $('.TopbarPageHeaderStructure-title') }
    get btnNewProject () { return $('.AddItemSquircle') }
    get btnCreateNewProject (projectType) { return $(`div[title='${projectType}']`) }

    async createNewProject (projectType) {
        await (await this.btnCreateNewProject(projectType)).click();
    }

}

module.exports = new HomePage();