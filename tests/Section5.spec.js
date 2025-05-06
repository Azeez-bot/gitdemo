const{test,expect}=require('@playwright/test');

test('Section5 Part-1',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username=await page.$("//input[@id='username']");
    const password=await page.$("//input[@id='password']");
    const drp=await page.locator("//select[@class='form-control']");
    await drp.selectOption("Consultant");
    await page.pause();
    await page.locator("//span[@class='radiotextsty' and text()=' User']").click();
    expect(await page.locator("//span[@class='radiotextsty' and text()=' User']")).toBeChecked();
    await page.locator("//button[@id='okayBtn']").click();
    await page.locator("//input[@id='terms']").check();
    expect(await page.locator("//input[@id='terms']")).toBeChecked();
    expect(await page.locator("//input[@id='terms']").isChecked()).toBeTruthy();
    await page.locator("//input[@id='terms']").uncheck();
    expect(await page.locator("//input[@id='terms']").isChecked()).toBeFalsy();
})
test('Section5 Part-2 @Child windows hadl', async ({browser})=>
    {
        const context = await browser.newContext();
        const page =  await context.newPage();
        const userName = page.locator('#username');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");
     
        const [newPage]=await Promise.all(
       [
          context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
          documentLink.click(),
       
       ])//new page is opened
       
     
       const  text = await newPage.locator(".red").textContent();
        const arrayText = text.split("@")
        const domain =  arrayText[1].split(" ")[0]
        //console.log(domain);
        await page.locator("#username").fill(domain);
        console.log(await page.locator("#username").textContent());
       /*expect(await userName.textContent()).toEqual("rahulshettyacademy.com")*/
    })