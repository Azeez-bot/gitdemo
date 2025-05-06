const{test,expect}=require('@playwright/test');
const{customtest}=require('../Utils/test-base')
const {POManager} = require('../Pageobjects/POManager');
const dataSet=JSON.parse(JSON.stringify(require('../Utils/placeorderTestData.json')));

for(const data of dataSet){
test(`Section 4 Part-2 ${data.productName}`,async({page})=>{
    // await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const poManager = new POManager(page);
    const products = page.locator(".card-body");
    
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
    await page.locator("//div[@class='card-body']//b").first().waitFor();

    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
 })
};

// customtest(`Section 4 Part-2`,async({page,testDataForOrder})=>{
//   // await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//   const poManager = new POManager(page);
//   const products = page.locator(".card-body");
  
//   const loginPage = poManager.getLoginPage();
//   await loginPage.goTo();
//   await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
//   await page.locator("//div[@class='card-body']//b").first().waitFor();

//   const dashboardPage=poManager.getDashboardPage();
//   await dashboardPage.searchProductAddCart(testDataForOrder.productName);
//   await dashboardPage.navigateToCart();

//   const cartPage = poManager.getCartPage();
//   await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
//   await cartPage.Checkout();
// })

