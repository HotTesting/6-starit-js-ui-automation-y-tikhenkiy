class Checkout{
    open(){
        browser.url("/checkout");
    }
    proceedOrderWith(customerDetails: ICustomerDetails): any{
        this.typeFirstName(customerDetails.firstName);
        this.typeLastName(customerDetails.lastName);
        this.typeAddress1(customerDetails.address1);
        this.typeEmail(customerDetails.email);
        this.typePhone(customerDetails.phone);
        this.typeCity(customerDetails.city);
        this.typePostalCode(customerDetails.postalCode);

    }

    saveChanges(): any{
        const saveCustomerBtn = 'button[name="save_customer_details"]';
        browser.waitForEnabled(saveCustomerBtn);
        $(saveCustomerBtn).click();
    };

    typeFirstName(firstName: string):any {
        const firstNameInput = 'input[name="firstname"]';
        browser.waitForVisible(firstNameInput, 5000);
        $(firstNameInput).setValue(firstName);

    };
    typeLastName(lastName: string): any {
        const lastNameInput = 'input[name="lastname"]';
        browser.waitForVisible(lastNameInput, 5000);
        $(lastNameInput).setValue(lastName);
    };
    typeAddress1(Address1: string): any{
        const Address1Input = 'input[name="address1"]';
        browser.waitForVisible(Address1Input, 5000);
        $(Address1Input).setValue(Address1);
    };
    typeEmail(email: string): any{
        const emailInput = 'input[name="email"]';
        browser.waitForVisible(emailInput, 5000);
        $(emailInput).setValue(email);
    };
    typePhone(phone: string): any {
        const phoneInput = 'input[name="phone"]';
        browser.waitForVisible(phoneInput, 5000);
        $(phoneInput).setValue(phone);
    };
    typeCity(city: string): any{
        const cityInput = 'input[name="phone"]';
        browser.waitForVisible(cityInput, 5000);
        $(cityInput).setValue(city);
    };
    typePostalCode(postalCode: string): any{
        const postalCodeInput = 'input[name="phone"]';
        browser.waitForVisible(postalCodeInput, 5000);
        $(postalCodeInput).setValue(postalCode);
    };
}
export interface ICustomerDetails {
    firstName: string
    lastName: string
    address1: string
    email: string
    phone: string
    city: string
    postalCode: string
    

    address2?: string
    country?: string
}

export const checkout = new Checkout()