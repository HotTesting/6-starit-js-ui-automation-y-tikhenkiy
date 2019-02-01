import {expect} from "chai";
import { productDetails } from "../pageObjects/productDetails";
import { checkout } from "../pageObjects/checkout";

var faker = require('faker');

describe('Product', function(){
        it.only('should be ordered with page object', function(){
            browser.url("/rubber-ducks-c-1/subcategory-c-2/green-duck-p-2"); //goto green duck details page
            productDetails.addToCart(); //add green duck to shopping cart
            
            checkout.open(); //goto shopping cart page
            const clientFirstName = faker.name.firstName();
            const clientLastName = faker.name.lastName();
                    
            checkout.proceedOrderWith({  //fill all of required fields
                firstName: clientFirstName,
                lastName: clientLastName,
                address1: faker.address.streetAddress(),
                email: faker.internet.email(clientFirstName,clientLastName),
                phone: faker.phone.phoneNumber(),
                city: faker.address.city(),
                postalCode: faker.address.zipCode()

            })

            checkout.saveChanges(); //click on the save change button
        })
    })