
Feature: As an Engr. Candidate,I need to automate http://www.way2automation.com/angularjs-protractor/webtables/ so I can show my awesome automation skills


  Scenario Outline: Add a user and validate the user has been added to the table
    Given User is on the homepage
    When user clicks Add User
    And enters <Firstname>,<Lastname>,<Username>,<Password>,<Radio>,<Role>,<E-mail>,<Cellphone>
    Then <Username> has to be successfully added to the table
    
    
    Examples: 
      | Firstname  | Lastname|Username|Password|Radio			 |Role |E-mail|Cellphone|
      | Martin 		 |Luther   |Marty   |Marty   |Company AAA|Admin|Marty@xyz.com|898789|
      #| Garry      |Harry    |Gari    |Gari32  |Company BBB|Sales Team|Gary@xyz.com|968144|

   
  Scenario: Delete user User Name: novak and validate user has been delete
		Given User is on the homepage
    When user clicks x button for username novak
    Then novak should be deleted
     