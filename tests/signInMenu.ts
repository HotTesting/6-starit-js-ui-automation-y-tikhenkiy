import {expect} from "chai";

describe('Some test for Account dropdown menu', function () {
    before(function() {
        browser.url('/');
        browser.click('ul li[class="account dropdown"]');
        browser.pause(1000);
      });
    
    it('should check is Account dropdown menu visible', function(){
        
        const dropDown = $('form[name=login_form]');
        expect(dropDown.isVisible()).to.be.true;
              
    })
    
    it('should Log in client from Account dropdown menu', function(){
        
                   
        const acc_email = $("div input[name='email']");
        const acc_pass = $("div input[name='password']");
        
        acc_email.setValue("test2@test.test");
        acc_pass.setValue("123123"); 
        
        browser.click("button[name='login']");
        browser.pause(1000);
        const contentBar = $("#content");
        const noticesBar = contentBar.$("#notices div");
        const alertContent =noticesBar.getText();
        expect(alertContent).is.contain("You are now logged in as");
    })

})