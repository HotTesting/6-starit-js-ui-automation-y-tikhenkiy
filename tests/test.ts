import {expect} from "chai";

describe('WDIO', function () {
    xit('Should be alive', function () {
        browser.url('/')
        console.log('--Test passed!')
    }
      
    ) 

    xit('should allert incorrect pass', function () {
        
        browser.url('/create_account')
               
        const acc_firstname = $('input[name=firstname]');
        const acc_lastname = $('input[name=lastname]');
        const acc_email = $("//div[@class='form-group col-md-6 required']//input[@name='email']");
        const acc_pass = $("//div[@class='form-group col-md-6 required']//input[@name='password']");
        const acc_confirmpass = $('input[name=confirmed_password]');
        const acc_countrycode = $('select[name=country_code]')
            
        acc_firstname.addValue('test');
        acc_lastname.addValue('testovych');
        acc_countrycode.selectByValue('GB');
        acc_email.setValue('test12@test.test');
        acc_pass.setValue('123123');
        acc_confirmpass.setValue('023123');
    
        browser.click("button[name=create_account]");

        browser.pause(1000);

        let isAlertExsit = browser.isExisting("//div[@id='notices']/div[@class='alert alert-danger']");
        expect(isAlertExsit).to.be.true;


    }
      
    )

})