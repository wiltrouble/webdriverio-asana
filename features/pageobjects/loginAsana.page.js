const Page = require('./page');

class LoginAsanaPage extends Page{

    get inputEmailAddress () { return $('.LoginEmailPasswordForm-emailInput'); }
    get inputPassword () { return $('.LoginEmailPasswordForm-passwordInput'); }
    get btnSubmit () { return $('.LoginEmailPasswordForm-logInButton') }

    async login (emailAddress, password) {
        await (await this.inputEmailAddress).setValue(emailAddress);
        await (await this.inputPassword).setValue(password);
        this.clickLoginBtn();
    }

    async clickLoginBtn() {
        await (await this.btnSubmit).click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginAsanaPage();