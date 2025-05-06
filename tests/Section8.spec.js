
import{test,expect} from '@playwright/test'
test.describe.configure({mode:'parallel'})
test('@Smoke Section8 Part-1 ---Unique Locators usage',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:'iphone X'}).getByRole("button").click();
    await page.goBack()
})

test('@Smoke Section8 Part-2 ---Unique Locators usage',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.getByPlaceholder("Type to Select Countries").pressSequentially("Ind");
    await page.locator("//ul//li[@class='ui-menu-item']").first().waitFor();
    const options=await page.locator("//ul//li[@class='ui-menu-item']");
    const count=await options.count();
    for(let i=0;i<count;i++){
        if(await page.locator("//ul//li[@class='ui-menu-item']/div").nth(i).textContent==="India"){
            await page.locator("//ul//li[@class='ui-menu-item']/div").nth(i).click();
        }

    }
    await page.locator("//select[@id='dropdown-class-example']").selectOption("Option1");
    //await page.getByLabel("Option2").click();
    await page.getByRole('button',{name:'Home'}).click();
    await page.goBack();
    await page.getByText(" Radio3").click();
})
