import {expect} from "chai";
import { productDetails } from "../pageObjects/productDetails";
import { checkout } from "../pageObjects/checkout";
import { OrderDetailsBuilder } from "../src/customerBuilder";
var faker = require('faker');

describe('Product', function(){
        it.only('should be ordered with page object', function(){
            browser.url("/rubber-ducks-c-1/subcategory-c-2/green-duck-p-2");
            productDetails.addToCart();

            checkout.open();
            checkout.typeFirstName(faker.name.firstName());
            
            

        })
    })