"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
class LoginPage {
    constructor() {
        this.website = protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        this.getURL = protractor_1.browser.getCurrentUrl();
        this.getTitle = protractor_1.browser.getTitle();
        this.loginDetails = protractor_1.$("div.jumbotron div.container div div.ng-scope div[class*='alert-info']");
        this.username = protractor_1.$("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(1)");
        this.password = protractor_1.$("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(2)");
        this.usernameDescription = protractor_1.$("div.form-group.ng-scope div");
        this.loginButton = protractor_1.$("div.form-actions button");
        this.usernameInput = protractor_1.$("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(1) input#username");
        this.passwordInput = protractor_1.$("div.jumbotron div.container div div.ng-scope form[name='form'] div:nth-child(2) input#password");
        this.usernameDescriptionInput = protractor_1.$("div.form-group.ng-scope div input#formly_1_input_username_0");
        this.errorDetails = protractor_1.$("div.alert.alert-danger.ng-binding.ng-scope");
        this.home = protractor_1.$("div.jumbotron div.container div.ng-scope h1.ng-scope");
        this.logOutButton = protractor_1.element(protractor_1.by.linkText("Logout"));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1RTtBQUV2RSxNQUFhLFNBQVM7SUFBdEI7UUFFSSxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMEVBQTBFLENBQUMsQ0FBQTtRQUN2RyxXQUFNLEdBQVMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN0QyxhQUFRLEdBQVMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNuQyxpQkFBWSxHQUFtQixjQUFDLENBQUMsdUVBQXVFLENBQUMsQ0FBQTtRQUN6RyxhQUFRLEdBQW1CLGNBQUMsQ0FBQyxpRkFBaUYsQ0FBQyxDQUFBO1FBQy9HLGFBQVEsR0FBbUIsY0FBQyxDQUFDLGlGQUFpRixDQUFDLENBQUE7UUFDL0csd0JBQW1CLEdBQW1CLGNBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1FBQ3RFLGdCQUFXLEdBQW1CLGNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQzFELGtCQUFhLEdBQW1CLGNBQUMsQ0FBQyxnR0FBZ0csQ0FBQyxDQUFBO1FBQ25JLGtCQUFhLEdBQW9CLGNBQUMsQ0FBQyxnR0FBZ0csQ0FBQyxDQUFBO1FBQ3BJLDZCQUF3QixHQUFvQixjQUFDLENBQUMsNkRBQTZELENBQUMsQ0FBQTtRQUM1RyxpQkFBWSxHQUFtQixjQUFDLENBQUMsNENBQTRDLENBQUMsQ0FBQTtRQUM5RSxTQUFJLEdBQWtCLGNBQUMsQ0FBQyxzREFBc0QsQ0FBQyxDQUFBO1FBQy9FLGlCQUFZLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7Q0FBQTtBQWhCRCw4QkFnQkMifQ==