Feature: Greeting

@Error
Scenario Outline: Say hello		
Given a login to Ecommerce2 application with "<username>" and "<password>"
Then Verify Error message is displayed
 Examples:
| username    	    | 	password    |
| anshika@gmail.com | Iamking@000   |
| hello@123.com     | Iamking@000   |
       
       
