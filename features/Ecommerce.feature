Feature:Ecommerce validation
@Afoo
Scenario: Placing the Order
Given login into ecommerce application with valid username "anshika@gmail.com" and password "Iamking@000"
When Add "ZARA COAT 3" to cart
Then Verify "ZARA COAT 3" is displayed in the cart
When Enter valid credentials and place the Order
Then verify order is present in the orderHistory

