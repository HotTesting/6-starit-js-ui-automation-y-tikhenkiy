import {expect} from "chai";

describe('"Contact us" form', function () {

    before(function() {
        browser.url('/');
        browser.pause(1000);
        
      });
    
    it('should be existing', function(){
        
        browser.click('.customer-service');
        browser.pause(1000);
        const contact_us_box = $('#box-contact-us');
        expect(contact_us_box.isVisible()).to.be.true;
        

    })

    it('should fill contacus form & click send button', function(){
                
        const senderName = $("input[name=name]");
        const contactUsForm = $("form[name='contact_form']");
        const senderEmail = contactUsForm.$("input[name=email]");
        const messageSubject = $("input[name=subject]");
        const messageContent = contactUsForm.$("textarea");

        senderName.setValue('Test Testovych');
        senderEmail.setValue('test2@test.test');
        messageSubject.setValue('test subject');
        messageContent.setValue('test test test');

        browser.click("button[name=send]");
        browser.pause(1000);

        const isAlertSuccessVisible = browser.isVisible("#notices div[class='alert alert-success']");
        expect(isAlertSuccessVisible).to.be.true;
        
    })

})