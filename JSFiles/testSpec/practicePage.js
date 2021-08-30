"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_1 = require("../pageObjects/loginPage");
describe('Testing the url', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.website;
    }));
    it('The url should match', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.getURL.then(data => {
            expect(data).toBe("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        });
    }));
    it('The title should match', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.getTitle.then(data => {
            expect(data).toBe("Protractor practice website - Registration");
        });
    }));
}));
describe('Check if the elements or DOM is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.website;
    }));
    it('Check if the login details exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        expect(yield loginPage.loginDetails.isDisplayed()).toBeTruthy();
    }));
    it('Check if the username exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        expect(yield loginPage.username.isDisplayed()).toBeTruthy();
    }));
    it('Check if the password exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        expect(yield loginPage.password.isDisplayed()).toBeTruthy();
    }));
    it('Check if the username description exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        expect(yield loginPage.usernameDescription.isDisplayed()).toBeTruthy();
    }));
    it('Check if the login button exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        expect(yield loginPage.loginButton.isDisplayed()).toBeTruthy();
    }));
}));
describe('Check the Login button functionality', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.website;
    }));
    it('When none of the inputs have any values, the login button is disabled', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        expect(yield loginPage.loginButton.getAttribute('disabled')).toBeTruthy();
    }));
    it('When all the input has values, the login button is enabled', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.usernameInput.sendKeys('Hazrul');
        yield loginPage.passwordInput.sendKeys('Hazrul');
        yield loginPage.usernameDescriptionInput.sendKeys('Hazrul');
        expect(yield loginPage.loginButton.getAttribute('disabled')).toBeFalsy();
    }));
}));
describe('Check the login functionality', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.website;
    }));
    it('Wrong details', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.usernameInput.sendKeys('WrongTest');
        yield loginPage.passwordInput.sendKeys('WrongTest');
        yield loginPage.usernameDescriptionInput.sendKeys('WrongTest');
        yield loginPage.loginButton.click();
        expect(yield loginPage.errorDetails.isDisplayed()).toBeTruthy();
    }));
    it('Correct details', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.usernameInput.sendKeys('angular');
        yield loginPage.passwordInput.sendKeys('password');
        yield loginPage.usernameDescriptionInput.sendKeys('test1');
        yield loginPage.loginButton.click();
        expect(yield loginPage.home.getText()).toBe('Home');
    }));
}));
describe('Testing the logout functionality', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.website;
    }));
    it('When the logout button is pressed, page will return to login', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginPage = new loginPage_1.LoginPage();
        yield loginPage.usernameInput.sendKeys('angular');
        yield loginPage.passwordInput.sendKeys('password');
        yield loginPage.usernameDescriptionInput.sendKeys('test1');
        yield loginPage.loginButton.click();
        yield loginPage.logOutButton.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("login");
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2VQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvcHJhY3RpY2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9DO0FBQ3BDLHdEQUFrRDtBQUVsRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBUyxFQUFFO0lBRW5DLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDakIsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7UUFDL0IsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFBO0lBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO1FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFBO1FBQy9CLE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQywwRUFBMEUsQ0FBQyxDQUFBO1FBQ2pHLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7UUFDcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7UUFDL0IsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUE7UUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRSxHQUFTLEVBQUU7SUFFN0QsVUFBVSxDQUFDLEdBQVEsRUFBRTtRQUNqQixJQUFJLFNB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