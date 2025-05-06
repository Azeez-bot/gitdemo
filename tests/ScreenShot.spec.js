import {test,expect} from '@playwright/test'

test('shot',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.getByPlaceholder("Hide/Show Example").screenshot({path:'partialScreenshot.png'});
})

test('ScreenShot testing',async({page})=>{
    await page.goto("https://www.google.com/");
    await page.screenshot({path:'screenshot.png'});
    expect(await page.screenshot()).toMatchSnapshot('screenshot.png');

})
