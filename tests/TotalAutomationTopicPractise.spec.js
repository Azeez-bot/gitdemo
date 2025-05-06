import {test,expect} from '@playwright/test'
const {POManagerCopy}=require('../pageobjectTotalAutomationPractise/POManagerCopy');

test('Total Practise',async({browser})=>{
    const context = await browser.newContext();
    const page =  await context.newPage();
    const poManagerCopy = new POManagerCopy(page);
    const login=poManagerCopy.getLoginPageAccess()
    await login.valid_login("https://rahulshettyacademy.com/AutomationPractice/");

    //1.-------------------------Inputing Text (Case-1)
    const inputtingText=poManagerCopy.getInputPageAccess();
    await inputtingText.inputting();

   //  await page.getByPlaceholder("Type to Select Countries").pressSequentially("Ind");
   //  await page.locator("//ul//li[@class='ui-menu-item']").first().waitFor();
   //  await page.getByRole("listitem").filter({hasText:'British Indian Ocean Territory'}).click();
    //-------------------------(Case-2)
    //await page.getByRole("listitem").getByText("India").nth(2).click();
    // const options=await page.locator("//ul//li[@class='ui-menu-item']");
    // const count=await options.count();
    // for(let i=0;i<count;i++){
    //     if(await page.locator("//ul//li[@class='ui-menu-item']/div").nth(i).textContent==="India"){
    //         await page.locator("//ul//li[@class='ui-menu-item']/div").nth(i).click();
    //     }
    // }
    //2. ---------------------------------------------------Handling of Select Dropdown
       await page.locator("//select[@id='dropdown-class-example']").selectOption("Option1");

    //3. ---------------------------------------------------Handling of checkbox    
       await page.locator("//input[@id='checkBoxOption2']").check();
      
    //4. --------------------------------------------------Handling of Radio Buttons
       await page.locator("//input[@value='radio1']").check()

    //5. --------------------------------------------------Window Handling
       const windowOpenBtn=await page.getByRole('button',{name:'Open Window'});   
       const [newWindow]=await Promise.all(
        [
           context.waitForEvent('page'),
           windowOpenBtn.click()
        ])
        expect(await newWindow.getByText("Access all our Courses")).toBeVisible();
    //6. -------------------------------------------------Tab Handling 
       const PageHandling=await page.getByText("Open Tab");
       const [newpage]=await Promise.all([
        context.waitForEvent('page'),
        await PageHandling.click()        
       ])

    //7. ------------------------------------------------Alert Handling
    page.on('dialog', async (dialog) => {
        console.log('Alert message:', dialog.message()); // 👉 Gets the alert text
        await dialog.accept();
      });
    await page.getByRole('button',{name:'Alert'}).click();

    //8. -----------------------------------------------Table Handling
    const table= page.locator("//div[@class='tableFixHead']/table/tbody/tr/td[4]");
    let sum=0;
    const count = await table.count();
    for(let i=0;i<count;i++){
        const price= await table.nth(i).innerText();
        sum+=Number(price);
    }
    console.log(sum);
    // const prices = page.locator(".tableFixHead td:nth-child(4)");
    // const count = await prices.count();

    // let sum = 0;
    // for (let i = 0; i < count; i++) {
    //     const priceText = await prices.nth(i).innerText();
    //     sum += Number(priceText);
    // }

    // console.log("Total sum of prices: ", sum);
})