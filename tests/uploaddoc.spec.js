// import { test, expect } from '@playwright/test';


//     test('test2', async ({ page }) => {
//         // Open WebSite    
//         await page.goto('https://flexipill-ui-new-staging.vercel.app')
//         //click on login buttton
//         await page.click("//a[normalize-space()='Login']")
//         // For entering Number
//         await page.fill("//input[@placeholder='Enter your number']", "1111111111")
//         //Continue Button
//         await page.click("text='Continue'");
//         // another locator for Contnue Button
//         //await page.click("//p[@class='MuiTypography-root MuiTypography-body1 platinumrx-1bx7d16']")
//         // For Entering OTP
//         await page.getByRole('textbox').first().click();
//         await page.getByRole('textbox').first().fill('1');
//         await page.getByRole('textbox').nth(1).fill('1');
//         await page.getByRole('textbox').nth(2).fill('1');
//         await page.getByRole('textbox').nth(3).fill('1');
//         //Locator for manualy clicking Submit button.
//         //await page.click("//p[@class='login-modal_submitText__zQ9_t']")
//         // Search Bar for Seaching Medicine
//         await page.fill("//input[@placeholder='Search your Medicines']","Thiroace-12.5mcg tab 100's")
//         await page.waitForTimeout(2000);
//         //Click on Search button in Search Bar
//         await page.click("//button[@class='Searchbar_searchBtnLanding__HdOMy']")
//         await page.waitForTimeout(2000);
//         // for scrolling by passing x and y cordinates
//         await page.evaluate(() => window.scrollBy(0, 200))
//         //Add to Cart
//          await page.click("(//button[@type='button'])[1]")
//         // wait command
//         await page.waitForTimeout(2000)
//         //dropdown button
//         await page.click("(//div[@class='AddToCartDropdown_arrow__pFEjt open-dropdown'])[1]")
//         await page.waitForTimeout(2000);
//         //Scroll to particular element and increse the Quantity 
//         const element = await page.$("//div[normalize-space()='15']"); 
//         element.scrollIntoViewIfNeeded();
//         element.click()
//         await page.waitForTimeout(2000);
//         await page.getByRole('button', { name: '1' }).click();
//         await page.waitForTimeout(2000);


//         await page.getByRole('button', { name: 'Upload Now' }).click();
//         await page.waitForTimeout(2000);
//        // await page.locator('label').filter({ hasText: 'Upload Photo/PDF' }).click();
//     await page.waitForTimeout(2000);
//    await page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight platinumrx-1ab2xsx']")
//    .setInputFiles('tests/uploadfiles/Screenshot 2024-07-31 120443.png')


//     // const fileInput = await page.$("input[type='file']");
//     // await fileInput.setInputFiles('C://Users//spurge//Desktop//Screenshot 2024-08-05 125934.png');




//         await page.click("text='View all coupons >>'")
//         const elementTwo = page.getByText('TestDisc5'); 


    
//         await expect(elementTwo).toBeVisible();
//         await elementTwo.scrollIntoViewIfNeeded();
//        await page.waitForTimeout(2000);
//        await page.click("(//div[@class='coupon-card_coupon-card-apply__28qnu'])[7]")
//         await page.waitForTimeout(2000);
//         const COD =  page.getByText('Cash on delivery (COD)'); //Cash on delivery (COD)
//         await expect(COD).toBeVisible();
//         await COD.scrollIntoViewIfNeeded();
//         await COD.click()
//         await page.waitForTimeout(2000);
//          await page.getByText('Place Order').click()
       
//         });





