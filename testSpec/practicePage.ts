import { browser } from "protractor"
import {LoginPage} from "../pageObjects/loginPage"

describe('Testing the url', async () => {
    
    beforeEach(async() => {
        let loginPage = new LoginPage()
        await loginPage.website
    })

    it('The url should match', async () => {
        let loginPage = new LoginPage()
        await loginPage.getURL.then(data => {
            expect(data).toBe("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        })
    })

    it('The title should match', async () => {
        let loginPage = new LoginPage()
        await loginPage.getTitle.then(data => {
            expect(data).toBe("Protractor practice website - Registration")
        })
    })    

})

describe('Check if the elements or DOM is displayed', async () => {
    
    beforeEach(async() => {
        let loginPage = new LoginPage()
        await loginPage.website
    })

    it('Check if the login details exist', async () => {
        let loginPage = new LoginPage()
        expect(await loginPage.loginDetails.isDisplayed()).toBeTruthy()
    })

    it('Check if the username exist', async () => {
        let loginPage = new LoginPage()
        expect(await loginPage.username.isDisplayed()).toBeTruthy()
    })

    it('Check if the password exist', async () => {
        let loginPage = new LoginPage()
        expect(await loginPage.password.isDisplayed()).toBeTruthy()
    })

    it('Check if the username description exist', async () => {
        let loginPage = new LoginPage()
        expect(await loginPage.usernameDescription.isDisplayed()).toBeTruthy()
    })

    it('Check if the login button exist', async () => {
        let loginPage = new LoginPage()
        expect(await loginPage.loginButton.isDisplayed()).toBeTruthy()
    })

})

describe('Check the Login button functionality', async () => {
    
    beforeEach(async() => {
        let loginPage = new LoginPage()
        await loginPage.website
    })

    it('When none of the inputs have any values, the login button is disabled', async () => {
        let loginPage = new LoginPage()
        expect( await loginPage.loginButton.getAttribute('disabled')).toBeTruthy()
    })

    it('When all the input has values, the login button is enabled', async () => {
        let loginPage = new LoginPage()
        await loginPage.usernameInput.sendKeys('Hazrul')
        await loginPage.passwordInput.sendKeys('Hazrul')
        await loginPage.usernameDescriptionInput.sendKeys('Hazrul')
        expect( await loginPage.loginButton.getAttribute('disabled')).toBeFalsy()
    })

})

describe('Check the login functionality', async () => {
    
    beforeEach(async() => {
        let loginPage = new LoginPage()
        await loginPage.website
    })

    it('Wrong details', async () => {
        let loginPage = new LoginPage()
        await loginPage.usernameInput.sendKeys('WrongTest')
        await loginPage.passwordInput.sendKeys('WrongTest')
        await loginPage.usernameDescriptionInput.sendKeys('WrongTest')
        await loginPage.loginButton.click()
        expect(await loginPage.errorDetails.isDisplayed()).toBeTruthy()
    })

    it('Correct details', async () => {
        let loginPage = new LoginPage()
        await loginPage.usernameInput.sendKeys('angular')
        await loginPage.passwordInput.sendKeys('password')
        await loginPage.usernameDescriptionInput.sendKeys('test1')
        await loginPage.loginButton.click()
        expect(await loginPage.home.getText()).toBe('Home')
    })

})

describe('Testing the logout functionality', async () => {
        
    beforeEach(async() => {
        let loginPage = new LoginPage()
        await loginPage.website
    })

    it('When the logout button is pressed, page will return to login', async () => {
        let loginPage = new LoginPage()
        await loginPage.usernameInput.sendKeys('angular')
        await loginPage.passwordInput.sendKeys('password')
        await loginPage.usernameDescriptionInput.sendKeys('test1')
        await loginPage.loginButton.click()
        await loginPage.logOutButton.click()
        expect(await browser.getCurrentUrl()).toContain("login")
    })
})



