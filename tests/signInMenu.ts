import {expect} from "chai";

describe('"Sign In" menu', function () {
    before(function() {
        browser.url('/');
        browser.pause(1000); //wait untill page is loaded
      });
    
    it('should be visible to user, after click on "Sign In" button in main navigation menu', function(){
        
        const signInButton =$('ul li[class="account dropdown"]');
        const dropDown = $('form[name=login_form]');

        signInButton.click();
        browser.pause(1000); // wait until "SignIn" block is shown to user
        expect(dropDown.isVisible()).to.be.true;
              
    })
    
    it('should be able to log in user after valid credential are provided', function(){
        
                   
        const clientEmail = $("div input[name='email']");
        const clientPass = $("div input[name='password']");
        
        clientEmail.setValue("test2@test.test");
        clientPass.setValue("123123"); 
        
        browser.click("button[name='login']");
        browser.pause(1000);
        const contentBar = $("#content");
        const noticesBar = contentBar.$("#notices div");
        const alertContent =noticesBar.getText();
        expect(alertContent).to.contain("You are now logged in as");
    })

})