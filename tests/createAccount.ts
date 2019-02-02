import {expect} from "chai";
import { authForm } from "../pageObjects/authForm";
var faker = require('faker');

describe('"Create account" form', function () {
    before(function() {
        browser.url('/');
        browser.pause(1000); //wait untill page is loaded
      }); 

     //defining variables with client personal data
        const clientFirstName = faker.name.firstName();
        const clientLastName = faker.name.lastName();
        const genClientPass = faker.internet.password(8);


    it('should be visible allert about incorrect pass', function () {
        
        browser.click('ul li[class="account dropdown"]');
        browser.click('(//li[@class="text-center"])[1]');
        browser.pause(1000); //wait untill page is loaded
        
        
        authForm.registration({
            firstName: clientFirstName,
            lastName: clientLastName,
            email: faker.internet.email(clientFirstName, clientLastName),
            desiredPass: genClientPass,
            confirmPass: faker.internet.password(8)         
        })
  
        browser.click("button[name=create_account]");

        browser.pause(1000);//wait untill page is loaded
        let isAlertExsit = browser.isExisting("//div[@id='notices']/div[@class='alert alert-danger']");
        expect(isAlertExsit, 'alert "The passwords did not match" should be visible for user').to.be.true;

    })

   xit('should register new client account', function(){
        /*
        function randEmailLocalpart(n){  
            return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 15)) );
          }
        */
        
        // $(clientFirstName).setValue(faker.name.firstName());
        // $(clientLastName).setValue(faker.name.lastName());
        // $(clientCountryCode).selectByValue("GB");
        // $(clientEmail).setValue(faker.internet.email($(clientFirstName).getValue(),$(clientLastName).getValue()));
        // $(clientPass).setValue(genClientPass);
        // $(clientConfirmPass).setValue(genClientPass);

        browser.click("button[name=create_account]");

        browser.pause(1000);//wait untill page is loaded

        const isAlertSuccessVisible = browser.isVisible("#notices div[class='alert alert-success']");//the same as this short (".alert-success");
        expect(isAlertSuccessVisible, 'alert "Your customer account has been created" should be visible for user').to.be.true;
    })
})