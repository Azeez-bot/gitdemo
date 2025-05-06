import{test,expect} from '@playwright/test'
test('Section6',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username=await page.locator("//input[@id='username']");
    const password=await page.locator("//input[@id='password']");
    const login=await page.locator("//input[@id='signInBtn']")
    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await login.click();
    await page.locator("//div[@class='card-body']/child::h4/a").first().waitFor();
    const cardtitle=await page.locator("//div[@class='card-body']/child::h4/a").allTextContents();
    console.log(cardtitle)
    await page.getByText("Category 1").click();
    await page.goBack();
    console.log(await page.locator("//div[@class='card-body']/child::h4/a").first().textContent())
    await page.locator("//div[@class='card-body']/child::h4/a/ancestor::div[@class='card-body']/following-sibling::div/child::button[text()='Add ']").first().click();
    await page.getByText(" Checkout ( 1 )").click();
    await page.getByText("Checkout").click();
    
    await page.locator("//input[@id='country']").pressSequentially("India");
    await page.locator("//li/a[text()='India']").click();
    await page.locator("//input[@value='Purchase']").click();
    await page.locator("//div[contains(@class,'alert alert-success')]").isVisible();
    const sucessMSG=page.locator("//div[contains(@class,'alert alert-success')]").innerText();
    expect(await sucessMSG).toContain("Success!");
    page.close();

})