import {expect} from "chai";

describe('WDIO', function () {
    it('Should be alive', function () {
        browser.url('/')
    }
      
    ) 

    it('should be allert about incorrect pass', function () {
        
        browser.click('ul li[class="account dropdown"]');
        browser.click('(//li[@class="text-center"])[1]');
        browser.pause(1000);
               
        const clientFirstName = $('input[name=firstname]');
        const clientLastName = $('input[name=lastname]');
        const clientEmail = $("(//input[@name='email'])[2]"); //the same as $("//div[@class='form-group col-md-6 required']//input[@name='email']");
        const clientPass = $("//div[@class='form-group col-md-6 required']//input[@name='password']");
        const clientConfirmPass = $('input[name=confirmed_password]');
        const clientCountryCode = $('select[name=country_code]');
            
        clientFirstName.addValue('test');
        clientLastName.addValue('testovych');
        clientCountryCode.selectByValue('GB');
        clientEmail.setValue('test12@test.test');
        clientPass.setValue('123123');
        clientConfirmPass.setValue('023123');
    
        browser.click("button[name=create_account]");

        browser.pause(1000);

        let isAlertExsit = browser.isExisting("//div[@id='notices']/div[@class='alert alert-danger']");
        expect(isAlertExsit).to.be.true;

    })

    it('should register new account', function(){
        
        function randEmailLocalpart(n){  
            return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 15)) );
          }
        
        const clientFirstName = $('input[name=firstname]');
        const clientLastName = $('input[name=lastname]');
        const clientEmail = $("(//input[@name='email'])[2]"); 
        const clientPass = $("(//input[@name='password'])[2]");
        const clientPassConfirm = $('input[name=confirmed_password]');
        const clientCountryCode = $('select[name=country_code]');

        clientFirstName.addValue("test");
        clientLastName.addValue("testovych");
        clientCountryCode.selectByValue("GB");
        clientEmail.setValue(randEmailLocalpart(7)+"@test.test");
        clientPass.setValue("123123");
        clientPassConfirm.setValue("123123")

        browser.pause(4000);

        browser.click("button[name=create_account]");

        browser.pause(1000);

        const isAlertSuccessVisible = browser.isVisible("#notices div[class='alert alert-success']");
        expect(isAlertSuccessVisible).to.be.true;

    })
      
    

})