import {test,expect} from '@playwright/test'

test('@Smoke Section 9 Part-1',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.getByPlaceholder("Hide/Show Example").isVisible();
    await page.getByRole('button',{name:'Hide'}).click();
    await page.getByPlaceholder("Hide/Show Example").isHidden(); 
    page.on('dialog',dialog=>dialog.message());
    await page.getByRole('button',{name:'Alert'}).click();
    await page.getByRole('button',{name:'Mouse Hover'}).hover();
    const frameLocator=await page.frameLocator("#courses-iframe");
    await frameLocator.locator("li a[href*='lifetime-access']:visible").click();
    const textBox=await frameLocator.locator(".text h2").textContent();
    console.log(textBox.split(" ")[1])
})