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

    confirmOrder(): any{
        
        browser.waitUntil(
            function(){
                return (browser.getAttribute('button[name="confirm_order"]', "disabled")==null);
            }, 5000, "Confirm order button should become enabled to click, make sure that all required fields are filled"
        );
        // const confirmOrderButton = 'button[name = "confirm_order"]';
        // browser.waitForEnabled(confirmOrderButton, 8000);
        $('button[name = "confirm_order"]').click();
    };

    shippingAddress(shippingAddressDetails: IDifferentShippingAddress): any{
        browser.waitUntil(
            function(){
                return (browser.getAttribute('h3 input[name = "different_shipping_address"]', 'checked')!=null);
            }, 5000, "Different Shipping Address checkbox should be checked, make sure that required condition is fulfilled!"
        );
        this.typeShippingFisrtName(shippingAddressDetails.firstName);
        this.typeShippingLastName(shippingAddressDetails.lastName);
        this.typeShippingAdress1(shippingAddressDetails.address1);
        this.typeShippingCity(shippingAddressDetails.city);
        this.typeShippingPostalCode(shippingAddressDetails.postalCode);
        
    }

    typeShippingPostalCode(shippingPostalCode: string): any {
        const shippingPostalCodeInput = 'input[name="shipping_address[postcode]"]';
        browser.waitForVisible(shippingPostalCodeInput, 5000);
        $(shippingPostalCodeInput).setValue(shippingPostalCode);
        
    }

    typeShippingCity(shippingCity: string): any {
        const shippingCityInput = 'input[name="shipping_address[city]"]';
        browser.waitForVisible(shippingCityInput, 5000);
        $(shippingCityInput).setValue(shippingCity);
    }

    typeShippingAdress1(shippingAddress1: string): any {
        const shippingAddress1Input = 'input[name="shipping_address[address1]"]';
        browser.waitForVisible(shippingAddress1Input, 5000);
        $(shippingAddress1Input).setValue(shippingAddress1);
    }

    typeShippingFisrtName(shippingfirstName: string): any {
        const shippingFirstNameInput = 'input[name="shipping_address[firstname]"]';
        browser.waitForVisible(shippingFirstNameInput, 5000);
        $(shippingFirstNameInput).setValue(shippingfirstName);
    }

    typeShippingLastName(shippingLastName: string): any {
        const shippingLastNameInput = 'input[name="shipping_address[lastname]"]';
        browser.waitForVisible(shippingLastNameInput, 5000);
        $(shippingLastNameInput).setValue(shippingLastName);

    }

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
        const cityInput = 'input[name="city"]';
        browser.waitForVisible(cityInput, 5000);
        $(cityInput).setValue(city);
    };
    typePostalCode(postalCode: string): any{
        const postalCodeInput = 'input[name="postcode"]';
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
export interface IDifferentShippingAddress {
    firstName: string
    lastName: string
    address1: string
    postalCode: string
    city: string
    
    phone?: string
    address2?: string
    country?: string
    company?: string
}

export const checkout = new Checkout()