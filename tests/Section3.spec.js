const{test,expect}=require('@playwright/test');

test('Section 3',async({ page })=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.waitForTimeout(5000);
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(5000);
    await page.goForward()
    await page.waitForTimeout(5000);
console.log("I love you 1 time");
console.log("I love you n times");
    
})

test('Section 3,part-2 Validating usage of getTitle and getUrl',async({page})=>{
   await page.goto("https://demoblaze.com/index.html");
   const title=page.title();
   console.log("The title of the page is"+title);
   await expect(page).toHaveTitle('STORE');
   const pageurl=page.url();
   console.log("The Url of page is "+pageurl)
   await expect(page).toHaveURL('https://demoblaze.com/index.html')
   await page.close()
})
test('Section 3,part-3 Validating usage of type and fill ',async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.click("//a[@id='login2']");
    await page.locator("//input[@id='loginusername']").fill("pavanol")
    await page.fill("//input[@id='loginpassword']","test@123")
    await page.click("//button[text()='Log in']")
    const lgout=await page.locator("//a[text()='Log out']")
    await expect(lgout).toBeVisible();
    await page.close()
 })

 test('Section 3,part-3 Validating usage of Webelements ',async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.click("//a[@id='login2']");
    await page.locator("//input[@id='loginusername']").fill("pavanol")
    await page.fill("//input[@id='loginpassword']","test@123")
    const ll=await page.click("//button[text()='Log in']")
    console.log('innerHTML : ',await page.click("//button[text()='Log in']").i)
    await page.click("//button[text()='Log in']")
    const text=await page.$$("//div[@id='tbodyid']/descendant::div[@class='card-block']/child::h4/a")

    for(const te of text){
        const linktext=await te.innerText();
        console.log(linktext)
    }

    await page.close()
 })

 test('Section 3,part-4 Ecommerce account set up',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/auth/login")
    await page.getByText("Register here").click();
    await page.locator("//input[@id='firstName']").fill("Abb");
    await page.locator("//input[@id='lastName']").fill("Jabb");
    await page.locator("//input[@id='userEmail']").fill("AbbJabb@gmail.com");
    await page.locator("//input[@value='Male']").check();
    await page.locator("//*[@id='userPassword']").fill("AbbSen")
    await page.locator("//*[@id='confirmPassword']").fill("AbbSen")
    await page.locator("//input[@value='Rgister']").click();
 })