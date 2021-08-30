import { $, $$, browser, by, element, ElementFinder } from 'protractor'

export class LoginPage {

    website : any = browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
    getURL : any = browser.getCurrentUrl()
    getTitle : any = browser.getTitle()
    loginDetails : ElementFinder = $("div.jumbotron div.container div div.ng-scope div[class*='alert-info']")
    username : ElementFinder = $("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(1)")
    password : ElementFinder = $("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(2)")
    usernameDescription : ElementFinder = $("div.form-group.ng-scope div")
    loginButton : ElementFinder = $("div.form-actions button")
    usernameInput : ElementFinder = $("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(1) input#username")
    passwordInput  : ElementFinder = $("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(2) input#password")
    usernameDescriptionInput  : ElementFinder = $("div.form-group.ng-scope div input#formly_1_input_username_0")
    errorDetails : ElementFinder = $("div.alert.alert-danger.ng-binding.ng-scope")
    home: ElementFinder = $("div.jumbotron div.container div.ng-scope h1.ng-scope")
    logOutButton : ElementFinder = element(by.linkText("Logout"))
}