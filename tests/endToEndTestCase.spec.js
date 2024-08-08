import { test, expect } from '@playwright/test';

test('placeorder', async ({ page }) => {
 page.setDefaultTimeout(60000);
     // Open WebSite    
     const URL = await page.goto('https://flexipill-ui-new-staging.vercel.app')
     //Verigy the URL is same 
   await expect(page).toHaveURL('https://flexipill-ui-new-staging.vercel.app');
   //click on login buttton
   await page.getByRole('link', { name: 'Login' }).click();
   await page.waitForTimeout(1000)
     // For entering Number
     const numberInput = page.getByPlaceholder('Enter your number', { exact: true });
     await expect(numberInput).toBeVisible();
     await numberInput.fill('1111111111');
     await page.waitForTimeout(1000)
     // Continue Button
     const continueButton = page.getByRole('button', { name: 'Continue' });
      await expect(continueButton).toBeVisible();
      await continueButton.click()
      await page.waitForTimeout(1000)
   // For Entering OTP
   await page.getByRole('textbox').first().click();
   await page.getByRole('textbox').first().fill('1');
   await page.getByRole('textbox').nth(1).fill('1');
   await page.getByRole('textbox').nth(2).fill('1');
   await page.getByRole('textbox').nth(3).fill('1');
   // Verify that the OTP was entered correctly
 await expect(page.getByRole('textbox').first()).toHaveValue('1');
 await expect(page.getByRole('textbox').nth(1)).toHaveValue('1');
 await expect(page.getByRole('textbox').nth(2)).toHaveValue('1');
 await expect(page.getByRole('textbox').nth(3)).toHaveValue('1');
 await page.waitForTimeout(2000)
    //Locator for manualy clicking Submit button.
    //await page.click("//p[@class='login-modal_submitText__zQ9_t']")

    // Search Bar for Seaching Medicine
    await page.getByPlaceholder('Search your Medicines').click();
  await page.getByPlaceholder('Search your Medicines').fill("Thiroace-12.5mcg tab 100's");
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2000)
    
    // for scrolling by passing x and y cordinates
    await page.evaluate(() => window.scrollBy(0, 200))
    await page.waitForTimeout(2000)

    //Add to Cart button
     await page.click("(//button[@type='button'])[1]")
    // wait command
    await page.waitForTimeout(2000)

    //dropdown button
    await page.click("(//div[@class='AddToCartDropdown_arrow__pFEjt open-dropdown'])[1]")
    await page.waitForTimeout(2000);

    //Scroll to particular element and increse the Quantity 
    const element = await page.$("//div[normalize-space()='20']"); 
    element.scrollIntoViewIfNeeded();
    element.click()
    await page.waitForTimeout(2000);

    //Go to Cart
    await page.getByRole('button', { name: '1' }).click();
    await expect(page).toHaveURL(' https://flexipill-ui-new-staging.vercel.app/cart');
    await page.waitForTimeout(2000);

    //Click on View Coupon to see all coupons
    await page.click("text='View all coupons >>'")
    await page.waitForTimeout(2000)

    //Scroll to Particular coupon
    const elementTwo = page.getByText('TestDisc5');
    await expect(elementTwo).toBeVisible();
    await elementTwo.scrollIntoViewIfNeeded();
   
   // Apply the coupon
   await page.click("(//div[@class='coupon-card_coupon-card-apply__28qnu'])[7]")
    await page.waitForTimeout(2000);
    //Scroll to COD and Choose Payment method as COD
    const COD =  page.getByText('Cash on delivery (COD)'); //Cash on delivery (COD)
    await expect(COD).toBeVisible();
    await COD.scrollIntoViewIfNeeded();
    await COD.click()
    await page.waitForTimeout(1000);
    // Click on Place order Button
     await page.getByText('Place Order').click()
   
    });


    // test('cancelOrder', async ({ page }) => {

    //  page.setDefaultTimeout(60000);
    //     // Open WebSite    
    //    const URL = await page.goto('https://flexipill-ui-new-staging.vercel.app')
    //       //Verigy the URL is same 
    //     await expect(page).toHaveURL('https://flexipill-ui-new-staging.vercel.app');
    //     //click on login buttton
    //     await page.getByRole('link', { name: 'Login' }).click();
    //     await page.waitForTimeout(1000)
    //       // For entering Number
    //       const numberInput = page.getByPlaceholder('Enter your number', { exact: true });
    //       await expect(numberInput).toBeVisible();
    //       await numberInput.fill('1111111111');
    //       await page.waitForTimeout(1000)
    //       // Continue Button
    //       const continueButton = page.getByRole('button', { name: 'Continue' });
    //        await expect(continueButton).toBeVisible();
    //        await continueButton.click()
    //        await page.waitForTimeout(1000)
    //     // For Entering OTP
    //     await page.getByRole('textbox').first().click();
    //     await page.getByRole('textbox').first().fill('1');
    //     await page.getByRole('textbox').nth(1).fill('1');
    //     await page.getByRole('textbox').nth(2).fill('1');
    //     await page.getByRole('textbox').nth(3).fill('1');
    //     // Verify that the OTP was entered correctly
    //   await expect(page.getByRole('textbox').first()).toHaveValue('1');
    //   await expect(page.getByRole('textbox').nth(1)).toHaveValue('1');
    //   await expect(page.getByRole('textbox').nth(2)).toHaveValue('1');
    //   await expect(page.getByRole('textbox').nth(3)).toHaveValue('1');
    //   await page.waitForTimeout(2000)
    //   await page.getByRole('link', { name: 'Profile' }).click();
    //   await page.click("(//div[@class='my-orders_order_details__info_cont__qAMR5'])[1]");      
    //   await page.waitForTimeout(2000)
    //   const cancelOrderButton = await page.$("//button[normalize-space()='Cancel Order']"); 
    //   cancelOrderButton.scrollIntoViewIfNeeded();
    //   cancelOrderButton.click()
    // await page.waitForTimeout(2000);
    // await page.click("//button[normalize-space()='Yes, Cancel']")
    // await page.waitForTimeout(2000);
    // await page.click("//span[normalize-space()='Just trying the App']")
    // await page.waitForTimeout(2000);
    // await page.click("//button[normalize-space()='Confirm']")
//
   // })