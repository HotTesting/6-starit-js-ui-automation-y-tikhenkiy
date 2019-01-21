import {expect} from "chai";

describe('Some test for Account dropdown menu', function () {
    it('should check is Account dropdown menu visible', function(){
        browser.url("/");
        browser.pause(1000);
        const dropDown = $('ul li[class="account dropdown"]');
        expect(dropDown.isVisible()).to.be.true;
      
        
    })
    
    it('should Log in client from Account dropdown menu', function(){
        
        browser.click('ul li[class="account dropdown"]');           
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