import {expect} from "chai";

describe('Some test for Contact us form ', function () {
    it('contactus form is existing', function(){
        browser.url('/customer-service-s-0');

        const contact_us_box = $('#box-contact-us');
        browser.pause(1000);
        expect(contact_us_box.isVisible()).to.be.true;
        

    })

    it('should fill contacus form & click send button', function(){
                
        const acc_name = $("input[name=name]");
        const contact_form = $("form[name='contact_form']");
        const acc_email = contact_form.$("input[name=email]");
        const subject = $("input[name=subject]");
        const message = contact_form.$("tesxtarea");

        acc_name.setValue('Test Testovych');
        acc_email.setValue('test2@test.test');
        subject.setValue('test subject');
        message.setValue('test test test');

        browser.click("button[name=send]");
        browser.pause(1000);

        const isAlertSuccessVisible = browser.isVisible("#notices div[class='alert alert-success']");
        expect(isAlertSuccessVisible).to.be.true;
        
    })

})