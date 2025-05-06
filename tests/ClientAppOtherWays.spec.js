import {test,expect} from '@playwright/test'

test('Part-2 ---Unique Locators usage',async({page})=>{
        const email = "anshika@gmail.com";
       const productName = 'ZARA COAT 3';
       const products= page.locator("//div[@class='card-body']");
       await page.goto("https://rahulshettyacademy.com/client");
       await page.getByPlaceholder("email@example.com").fill(email)
       await page.getByPlaceholder("enter your passsword").fill("Iamking@000")
       await page.getByRole('button',{name:'login'}).click();
       await page.locator("//div[@class='card-body']//b").first().waitFor();
       await page.locator("//div[@class='card-body']").filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:'Add To Cart'}).click();
       await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
       await page.locator("div li").first().waitFor();
       await expect(page.getByText("ZARA COAT 3")).toBeVisible();
       await page.getByRole("button",{name :"Checkout"}).click();
       await page.getByPlaceholder("Select Country").pressSequentially("ind");
       await page.getByRole("button",{name :"India"}).nth(1).click();
       await page.getByText("PLACE ORDER").click();
       await expect(page.getByText("Thankyou for the order.")).toBeVisible();
     
    })

    test('Calender Validation',async({page})=>{
        const monthNumber = "6";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber,date,year]; 
        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        await page.locator("//div[@class='react-date-picker__inputGroup']").click();


    })