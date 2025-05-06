const {Given,Then,And,When}=require('@cucumber/cucumber')
const{expect}=require('@playwright/test');
const playwright = require('playwright');
const {POManager} = require('../../Pageobjects/POManager');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Given('login into ecommerce application with valid username {string} and password {string}',{ timeout: 60 * 1000 },  async function (username, password) {
  this.poManager = new POManager(this.page);
  //js file- Login js, DashboardPage
   const products = this.page.locator(".card-body");
   const loginPage = this.poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(username,password);
  });

When('Add {string} to cart',{ timeout: 60 * 1000 }, async function (productName) {
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.page.locator("//div[@class='card-body']//b").first().waitFor();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
  });

Then('Verify {string} is displayed in the cart',{ timeout: 60 * 1000 }, async function (productName) {
  const cartPage = this.poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.Checkout();
  });  

When('Enter valid credentials and place the Order',{ timeout: 60 * 1000 },async function () {
  const ordersReviewPage =this.poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind","India");
  this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
 console.log(this.orderId);
 await this.dashboardPage.navigateToOrders();
  });  

Then('verify order is present in the orderHistory',{ timeout: 60 * 1000 },async function () {
  const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(this.orderId);
  expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  this.page.close();
  });  

  Given('a login to Ecommerce2 application with {string} and {string}', {timeout: 100 * 1000}, async function (username,password) {
        
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
      const userName = this.page .locator('#username');
      const signIn = this.page .locator("#signInBtn");
      const cardTitles =  this.page .locator(".card-body a");
      await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await this.page.title());
      //css 
     await userName.fill("rahulshetty");
     await this.page .locator("[type='password']").fill("learning");
     await signIn.click();   
    });


    Then('Verify Error message is displayed', async function () {
      await expect(this.page .locator("[style*='block']")).toContainText('Incorrect');

    })
