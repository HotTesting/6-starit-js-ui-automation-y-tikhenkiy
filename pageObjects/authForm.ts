class AuthForm{

    login(clientSigninEmail: string, clientSigninPass: string){
        //login logic code
        const clientSigninEmailInput = "input[type = 'email']";
        const clientSigninPassInput = "input[type = 'password']";
        browser.waitForVisible(clientSigninEmailInput, 5000);
        browser.waitForVisible(clientSigninPassInput, 5000);
        $(clientSigninEmailInput).setValue(clientSigninEmail);
        $(clientSigninPassInput).setValue(clientSigninPass);


    }

    registration(accountDetails: ICreateAccountData){
        this.typeFirstName(accountDetails.firstName);
        this.typeLastName(accountDetails.lastName);
        this.typeEmail(accountDetails.email);
        this.typeDesiredPass(accountDetails.desiredPass);
        this.typeConfirmPass(accountDetails.confirmPass);
    }

    recoveryPass(emailAddress: string):any {
        //recoveryPass logic code
        const emailAddressInput = "(//input[@type = 'email'])[2]";
        browser.waitForVisible(emailAddressInput, 5000);
        $(emailAddressInput).setValue(emailAddress);
    }
    typeFirstName(firstName: string):any {
        const firstNameInput = 'input[name=firstname]';
        browser.waitForVisible(firstNameInput, 5000);
        $(firstNameInput).setValue(firstName);
    };

    typeLastName(lastName: string): any {
        const lastNameInput = 'input[name="lastname"]';
        browser.waitForVisible(lastNameInput, 5000);
        $(lastNameInput).setValue(lastName);
    };

    typeEmail(email: string): any{
        // const emailInput = '(//input[@name="email"])[2]';
        // browser.waitForVisible(emailInput, 5000);
        // $(emailInput).setValue(email);
        const emailInput = '(//input[@name="email"])[2]';
        browser.waitForVisible(emailInput, 5000);
        $(emailInput).click()
        //$(emailInput).clearElement()
        browser.pause(1000)
        $(emailInput).setValue(email);
    }
    typeDesiredPass(desiredPass: string): any{
        const desiredPassInput = '(//input[@name="password"])[2]';
        browser.waitForVisible(desiredPassInput, 5000);
        $(desiredPassInput).setValue(desiredPass);
    }

    typeConfirmPass(confirmPass: string): any{
        const confirmPassInput = 'input[name=confirmed_password]';
        browser.waitForVisible(confirmPassInput, 5000);
        $(confirmPassInput).setValue(confirmPass);
    }


}
export interface ICreateAccountData {
    firstName: string
    lastName: string
    email: string
    desiredPass: string
    confirmPass:string
}

export const authForm = new AuthForm()