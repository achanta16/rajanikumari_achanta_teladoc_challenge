$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adduser.feature");
formatter.feature({
  "line": 2,
  "name": "As an Engr. Candidate,I need to automate http://www.way2automation.com/angularjs-protractor/webtables/ so I can show my awesome automation skills",
  "description": "",
  "id": "as-an-engr.-candidate,i-need-to-automate-http://www.way2automation.com/angularjs-protractor/webtables/-so-i-can-show-my-awesome-automation-skills",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Add a user and validate the user has been added to the table",
  "description": "",
  "id": "as-an-engr.-candidate,i-need-to-automate-http://www.way2automation.com/angularjs-protractor/webtables/-so-i-can-show-my-awesome-automation-skills;add-a-user-and-validate-the-user-has-been-added-to-the-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks Add User",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enters \u003cFirstname\u003e,\u003cLastname\u003e,\u003cUsername\u003e,\u003cPassword\u003e,\u003cRadio\u003e,\u003cRole\u003e,\u003cE-mail\u003e,\u003cCellphone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\u003cUsername\u003e has to be successfully added to the table",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "as-an-engr.-candidate,i-need-to-automate-http://www.way2automation.com/angularjs-protractor/webtables/-so-i-can-show-my-awesome-automation-skills;add-a-user-and-validate-the-user-has-been-added-to-the-table;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Username",
        "Password",
        "Radio",
        "Role",
        "E-mail",
        "Cellphone"
      ],
      "line": 13,
      "id": "as-an-engr.-candidate,i-need-to-automate-http://www.way2automation.com/angularjs-protractor/webtables/-so-i-can-show-my-awesome-automation-skills;add-a-user-and-validate-the-user-has-been-added-to-the-table;;1"
    },
    {
      "cells": [
        "Martin",
        "Luther",
        "Marty",
        "Marty",
        "Company AAA",
        "Admin",
        "Marty@xyz.com",
        "898789"
      ],
      "line": 14,
      "id": "as-an-engr.-candidate,i-need-to-automate-http://www.way2automation.com/angularjs-protractor/webtables/-so-i-can-show-my-awesome-automation-skills;add-a-user-and-validate-the-user-has-been-added-to-the-table;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Add a user and validate the user has been added to the table",
  "description": "",
  "id": "as-an-engr.-candidate,i-need-to-automate-http://www.way2automation.com/angularjs-protractor/webtables/-so-i-can-show-my-awesome-automation-skills;add-a-user-and-validate-the-user-has-been-added-to-the-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks Add User",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enters Martin,Luther,Marty,Marty,Company AAA,Admin,Marty@xyz.com,898789",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Marty has to be successfully added to the table",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 4789236700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_add_user()"
});
formatter.result({
  "duration": 240852300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Martin",
      "offset": 7
    },
    {
      "val": "Luther",
      "offset": 14
    },
    {
      "val": "Marty",
      "offset": 21
    },
    {
      "val": "Marty",
      "offset": 27
    },
    {
      "val": "Company AAA",
      "offset": 33
    },
    {
      "val": "Admin",
      "offset": 45
    },
    {
      "val": "Marty@xyz.com",
      "offset": 51
    },
    {
      "val": "898789",
      "offset": 65
    }
  ],
  "location": "StepDefinition.enters_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1323429000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marty",
      "offset": 0
    }
  ],
  "location": "StepDefinition.has_to_be_successfully_added_to_the_table(String)"
});
formatter.result({
  "duration": 56613600,
  "status": "passed"
});
formatter.after({
  "duration": 402971400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#| Garry      |Harry    |Gari    |Gari32  |Company BBB|Sales Team|Gary@xyz.com|968144|"
    }
  ],
  "line": 18,
  "name": "Delete user User Name: novak and validate user has been delete",
  "description": "",
  "id": "as-an-engr.-candidate,i-need-to-automate-http://www.way2automation.com/angularjs-protractor/webtables/-so-i-can-show-my-awesome-automation-skills;delete-user-user-name:-novak-and-validate-user-has-been-delete",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user clicks x button for username novak",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "novak should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 3526876500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_x_button_for_username_novak()"
});
formatter.result({
  "duration": 251021100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.novak_should_be_deleted()"
});
formatter.result({
  "duration": 10074878900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[text()\u003d\u0027novak\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DXJLZM2\u0027, ip: \u002710.0.0.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\achantr\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:59011}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 862b5344fefa6a5942fb233093dc2f8f\n*** Element info: {Using\u003dxpath, value\u003d//td[text()\u003d\u0027novak\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat StepDefinitions.StepDefinition.novak_should_be_deleted(StepDefinition.java:73)\r\n\tat ✽.Then novak should be deleted(adduser.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 268035600,
  "status": "passed"
});
});