import {expect} from "chai";
import { join } from "path";
var faker = require('faker');

describe('"Create account" form', function () {
    before(function() {
        browser.url('/');
        browser.pause(1000); //wait untill page is loaded
      }); 

      //defining selectors
        const clientFirstName = $('input[name=firstname]');
        const clientLastName = $('input[name=lastname]');
        const clientEmail = $("(//input[@name='email'])[2]"); //the same as $("//div[@class='form-group col-md-6 required']//input[@name='email']");
        const clientPass = $("//div[@class='form-group col-md-6 required']//input[@name='password']");
        const clientConfirmPass = $('input[name=confirmed_password]');
        const clientCountryCode = $('select[name=country_code]');
        const genClientPass = faker.internet.password(8);


    it('should be visible allert about incorrect pass', function () {
        
        browser.click('ul li[class="account dropdown"]');
        browser.click('(//li[@class="text-center"])[1]');
        browser.pause(1000); //wait untill page is loaded
               
        clientFirstName.addValue(faker.name.firstName());
        clientLastName.addValue(faker.name.lastName());
        clientCountryCode.selectByValue('GB');
        clientEmail.setValue(faker.internet.email(clientFirstName.getValue(),clientLastName.getValue()));
        clientPass.setValue(faker.internet.password(8));
        clientConfirmPass.setValue(faker.internet.password(8));
        
        //console.log('first name: ', clientFirstName.getValue());
        //console.log('last name: ', clientLastName.getValue());
        //console.log('email: ', clientEmail.getValue());
        //console.log('Pass: ', clientPass.getValue());
        //console.log('Confirm Pass: ', clientConfirmPass.getValue());

        browser.click("button[name=create_account]");

        browser.pause(1000);//wait untill page is loaded
        let isAlertExsit = browser.isExisting("//div[@id='notices']/div[@class='alert alert-danger']");
        expect(isAlertExsit, 'alert "The passwords did not match" should be visible for user').to.be.true;

    })

    it('should register new client account', function(){
        /*
        function randEmailLocalpart(n){  
            return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 15)) );
          }
        */
        
        clientFirstName.setValue(faker.name.firstName());
        clientLastName.setValue(faker.name.lastName());
        clientCountryCode.selectByValue("GB");
        clientEmail.setValue(faker.internet.email(clientFirstName.getValue(),clientLastName.getValue()));
        clientPass.setValue(genClientPass);
        clientConfirmPass.setValue(genClientPass);

        browser.click("button[name=create_account]");

        browser.pause(1000);//wait untill page is loaded

        const isAlertSuccessVisible = browser.isVisible("#notices div[class='alert alert-success']");//the same as this short (".alert-success");
        expect(isAlertSuccessVisible, 'alert "Your customer account has been created" should be visible for user').to.be.true;
    })
})