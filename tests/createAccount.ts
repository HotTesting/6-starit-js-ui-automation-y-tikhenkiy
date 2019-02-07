import {expect} from "chai";
import { authForm } from "../pageObjects/authForm";
import * as faker from "faker";

describe('"Sign In" form', function () {
    
    beforeEach(function() {
        browser.url('/');
        browser.pause(1000); //wait untill page is loaded 
        browser.click('li[class="account dropdown"]');
    });
    
   
        
    //defining variables with client personal data
        const clientFirstName = faker.name.firstName();
        const clientLastName = faker.name.lastName();
        const genClientPass = faker.internet.password(8);


    it('should be visible allert about incorrect pass', function () {
        browser.click('(//li[@class="text-center"])[1]');
        
        browser.pause(1000); //wait untill page is loaded
        
        
        authForm.registration({
            firstName: clientFirstName,
            lastName: clientLastName,
            email: faker.internet.email(clientFirstName, clientLastName),
            desiredPass: genClientPass,
            confirmPass: faker.internet.password(8)         
        })
        // console.log(clientFirstName+' '+clientLastName);
        // console.log(faker.internet.email(clientFirstName,clientLastName));
        browser.click("button[name=create_account]");

        browser.pause(500);//wait untill page is loaded
        let isAlertExsit = browser.isExisting("//div[@id='notices']/div[@class='alert alert-danger']");
        expect(isAlertExsit, 'alert "The passwords did not match" should be visible for user').to.be.true;

    })

    it('should register new client account', function(){
        browser.click('(//li[@class="text-center"])[1]');
        browser.pause(1000); //wait untill page is loaded
        authForm.registration({
            firstName: clientFirstName,
            lastName: clientLastName,
            email: faker.internet.email(clientFirstName, clientLastName),
            desiredPass: genClientPass,
            confirmPass: genClientPass         
        })
        
        // console.log(clientFirstName+' '+clientLastName);
        // console.log(faker.internet.email(clientFirstName,clientLastName));
        browser.click("button[name=create_account]");

        browser.pause(500);//wait untill page is loaded

        const isAlertSuccessVisible = browser.isVisible("#notices div[class='alert alert-success']");//the same as this short (".alert-success");
        expect(isAlertSuccessVisible, 'alert "Your customer account has been created" should be visible for user').to.be.true;
    })

    it('should reset password for exisitng client ', function(){
        
        const logoutMenu = browser.getText('(//ul[@class="dropdown-menu"])[3]/li[3]');
        
        if(logoutMenu == 'Logout'){
            browser.url('http://ip-5236.sunline.net.ua:38015/logout');
            browser.click('li[class="account dropdown"]');
        }
        
        browser.click('(//li[@class="text-center"])[2]');

        authForm.recoveryPass('test2@test.test');
        browser.click('button[name = "reset_password"]');

        browser.pause(500);//wait untill page is loaded

        const isAlertSuccessVisible= browser.isVisible('#notices');
        expect(isAlertSuccessVisible, 'alert "An email with instructions has been sent to your email address" should be visible for user').to.be.true;
        
    })
})