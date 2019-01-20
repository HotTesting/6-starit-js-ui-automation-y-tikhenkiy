import {expect} from "chai";

describe('WDIO', function () {
    it('contactus form is existing', function(){
        browser.url('/customer-service-s-0');

        const contact_us_box = $('#box-contact-us');
        expect(contact_us_box.isVisible()).to.be.true;
        browser.pause(1000);

    })

    it('should fill contacus form & click send button', function(){
        browser.url('/customer-service-s-0');
        
        const acc_name = $("input[name=name]");
        const contact_form = $("form[name='contact_form']");
        const acc_email = contact_form.$("input[name=email]");
        const subject = $("input[name=subject]");
        const message = $("textarea");

        acc_name.addValue('Test Testovych');
        acc_email.addValue('test2@test.test');
        subject.addValue('test subject');
        message.addValue('test test test');

        browser.click("button[name=send]");
        browser.pause(1000);

        let alert;
        alert=browser.isVisible("#notices div[class='alert alert-success']");
        expect(alert).to.be.true;
        
    })

})