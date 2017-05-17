$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginandLogout.feature");
formatter.feature({
  "line": 1,
  "name": "As a user,",
  "description": "I want to be able to Login",
  "id": "as-a-user,",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Login",
  "description": "",
  "id": "as-a-user,;login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "am on the Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my username and password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the Home Page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.am_on_the_Landing_Page()"
});
formatter.result({
  "duration": 19485660670,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_enter_my_username_and_password()"
});
formatter.result({
  "duration": 1587444983,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_click_Login_button()"
});
formatter.result({
  "duration": 1934415863,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_should_see_the_Home_Page()"
});
formatter.result({
  "duration": 54482988,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login and Logout",
  "description": "",
  "id": "as-a-user,;login-and-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "am on the Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter my username and password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click logout",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be on the Landing Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.am_on_the_Landing_Page()"
});
formatter.result({
  "duration": 988957094,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_enter_my_username_and_password()"
});
formatter.result({
  "duration": 429695395,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_click_Login_button()"
});
formatter.result({
  "duration": 1174652517,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_should_see_the_Home_Page()"
});
formatter.result({
  "duration": 59501386,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_click_logout()"
});
formatter.result({
  "duration": 241136522,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.i_should_be_on_the_Landing_Page()"
});
formatter.result({
  "duration": 1280335192,
  "status": "passed"
});
});