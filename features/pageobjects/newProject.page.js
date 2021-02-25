class NewProjectPage {

    get inputProjectName () { return $('#new_project_dialog_content_name_input') }

    get dropdownProjectPrivacy () {
        return $('.ProjectCreationPrivacyDropdown-selectedPrivacyButton')
    }

    get btnDefaultViewProject (viewType) {
        return $(`img[src*='${viewType}.svg']`)
    }

    get itemProjectPrivacy (item) {
        return $(`//span[contains(text(),'${item}') and @class='MenuItem-label']`)
    }
    
    get btnCreateBlankProject () {
        return $('.BlankProjectForm-submitButton');
    }

    async createNewProject(projectName, privacy, viewType) {
        await (await this.inputProjectName).setValue(projectName);
        await (await this.selectProjectPrivacy(privacy))
        await (await this.btnDefaultViewProject(viewType)).click();
        this.clickCreateProject();
    }

    async selectProjectPrivacy (privacy) {
        await (await this.dropdownProjectPrivacy).click();
        await (await this.itemProjectPrivacy(privacy)).click();
    }

    async clickCreateProject () {
        await (await this.btnCreateBlankProject).click();
    }
}

module.exports = new NewProjectPage();