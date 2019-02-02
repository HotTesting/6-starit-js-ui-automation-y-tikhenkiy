class AuthForm{

    login(){
        //login logic code
    }

    registration(accountDetails: ICreateAccountData){
        this.typeFirstName(accountDetails.firstName);
        this.typeLastName(accountDetails.lastName);
        this.typeEmail(accountDetails.email);
        this.typeDesiredPass(accountDetails.desiredPass);
        this.typeConfirmPass(accountDetails.confirmPass);
    }

    recoveryPass(){
        //recoveryPass logic code
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
        const emailInput = '(//input[@name="email"])[2]';
        browser.waitForVisible(emailInput, 5000);
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