Feature: Test Login Functionality

Scenario: check login with valid credentials

Given user is on login page
When user logins with username and password
Then user is navigated to the Inventory page