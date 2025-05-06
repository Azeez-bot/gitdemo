import{test,expect} from '@playwright/test'
test('Section7',async({page})=>{
    const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products= page.locator("//div[@class='card-body']");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("//input[@id='userEmail']").fill(email)
   await page.locator("//input[@id='userPassword']").fill("Iamking@000")
   await page.locator("//input[@id='login']").click();
   await page.locator("//div[@class='card-body']//b").first().waitFor();
   const titles = await page.locator("//div[@class='card-body']//b").allTextContents();
   const count=await products.count();
   for(let i=0;i<count;i++){
    if(await products.nth(i).locator("//b").textContent()===productName){
        await products.nth(i).locator("//button[text()=' Add To Cart']").click();
    }
   }
   await page.locator("//button[@routerlink='/dashboard/cart']").click();
   await page.locator("//ul/li").first().waitFor();
   const productdisplayed=await page.locator("//h3[text()='"+productName+"']").isVisible();
   expect(productdisplayed).toBeTruthy();
   await page.locator("//button[text()='Checkout']").click();
   await page.locator("//input[@placeholder='Select Country']").pressSequentially("Ind");
   const drp=await page.locator("//section[contains(@class,'ta-results')]");
   await drp.waitFor();
   const btCount=await page.locator("//section[contains(@class,'ta-results')]/button").count();
   for(let i=0;i<btCount;i++){
    const text = await drp.locator("//button").nth(i).textContent();
    if(text===" India"){
        await drp.locator("//button").nth(i).click();
        break;
    }
   }
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator("//h1[@class='hero-primary']")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  // const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
})