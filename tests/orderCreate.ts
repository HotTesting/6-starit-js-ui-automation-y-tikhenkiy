import {expect} from "chai";
import { productDetails } from "../pageObjects/productDetails";
import { checkout } from "../pageObjects/checkout";

import * as faker from "faker";
import { confirmation } from "../pageObjects/confirmation";

describe('Product', function(){
     beforeEach(function(){
        
        browser.url("/rubber-ducks-c-1/subcategory-c-2/green-duck-p-2"); //goto green duck details page
        productDetails.addToCart(); //add green duck to shopping cart
        checkout.open(); //goto shopping cart page
    }); 
    
    afterEach(function(){
            browser.deleteCookie();
        }

    );

    const clientFirstName = faker.name.firstName();
    const clientLastName = faker.name.lastName();

    it('should be ordered with PO', function(){
                    
                checkout.proceedOrderWith({  //fill all of required fields
                firstName: clientFirstName,
                lastName: clientLastName,
                address1: faker.address.streetAddress(),
                email: faker.internet.email(clientFirstName,clientLastName),
                phone: faker.phone.phoneNumber('#########'),
                city: faker.address.city(),
                postalCode: faker.address.zipCode('######')
            })

            checkout.saveChanges(); //click on the save change button
            checkout.confirmOrder(); //click on the Confirm Oder button
            
            expect(confirmation.isLoaded()).to.equal(true, "Expected that confirmation page appears");
            expect(confirmation.confirmationTitle()).to.match(/Your order #.* is successfully completed!/);
        });

        it("should be ordered with different shipping Address by PO", function(){
                   
            checkout.proceedOrderWith({
                firstName: clientFirstName,
                lastName: clientLastName,
                address1: faker.address.streetAddress(),
                email: faker.internet.email(clientFirstName, clientLastName),
                phone: faker.phone.phoneNumber('#########'),
                city: faker.address.city(),
                postalCode: faker.address.zipCode('######')
            });

            browser.pause(1000);
            browser.click('h3 input[name="different_shipping_address"]')
            
            checkout.shippingAddress({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                address1: faker.address.streetAddress(),
                postalCode: faker.address.zipCode('######'),
                city: faker.address.city()
            });

            checkout.saveChanges(); //click on the save change button
            checkout.confirmOrder(); //click on the Confirm Oder button

            expect(confirmation.isLoaded()).to.equal(true, "Expected that confirmation page appears");
            expect(confirmation.confirmationTitle()).to.match(/Your order #.* is successfully completed!/);
        });

    })