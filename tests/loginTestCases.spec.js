// import { test, expect } from '@playwright/test';
// test.describe('My independent tests', () => {
// test('Test 1', async ({ page }) => {
// // Open WebSite    
// await page.goto('https://flexipill-ui-new-staging.vercel.app')
// // Verify the URL is same
// await expect(page).toHaveURL('https://flexipill-ui-new-staging.vercel.app');
// await page.waitForTimeout(1000)
// //click on login buttton
// await page.getByRole('link', { name: 'Login' }).click();
// await page.waitForTimeout(1000)

//  // For entering Number
//  const numberInput = page.getByPlaceholder('Enter your number', { exact: true });
//   await expect(numberInput).toBeVisible();
//   await numberInput.fill('1111111111');
//   await page.waitForTimeout(1000)

//   // Continue Button
//   const continueButton = page.getByRole('button', { name: 'Continue' });
//    await expect(continueButton).toBeVisible();
//    await continueButton.click()
//    await page.waitForTimeout(1000)
// // For Entering OTP
// await page.getByRole('textbox').first().click();
// await page.waitForTimeout(1000)
// await page.getByRole('textbox').first().fill('1');
// await page.getByRole('textbox').nth(1).fill('1');
// await page.getByRole('textbox').nth(2).fill('1');
// await page.getByRole('textbox').nth(3).fill('1');

// // Verify that the OTP was entered correctly
// await expect(page.getByRole('textbox').first()).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(1)).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(2)).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(3)).toHaveValue('1');


// });

// test('Test 2', async ({ page }) => {
// // Open WebSite    
// await page.goto('https://flexipill-ui-new-staging.vercel.app')

// await expect(page).toHaveURL('https://flexipill-ui-new-staging.vercel.app');
// //click on login buttton
// await page.getByRole('link', { name: 'Login' }).click();

//  // For entering Number

//   // For entering Number
//   const numberInput = page.getByPlaceholder('Enter your number', { exact: true });
//   await expect(numberInput).toBeVisible();
//   await numberInput.fill('111111111');

//   // Continue Button
//   const continueButton = page.getByRole('button', { name: 'Continue' });
//    await expect(continueButton).toBeVisible();
//    await continueButton.click()
// // For Entering OTP
// await page.getByRole('textbox').first().click();
// await page.getByRole('textbox').first().fill('1');
// await page.getByRole('textbox').nth(1).fill('1');
// await page.getByRole('textbox').nth(2).fill('1');
// await page.getByRole('textbox').nth(3).fill('1');

// // Verify that the OTP was entered correctly
// await expect(page.getByRole('textbox').first()).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(1)).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(2)).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(3)).toHaveValue('1');

// });


// test('Test 3', async ({ page }) => {
//   // Open WebSite    
//   await page.goto('https://flexipill-ui-new-staging.vercel.app')

//   await expect(page).toHaveURL('https://flexipill-ui-new-staging.vercel.app');
//   //click on login buttton
//   await page.getByRole('link', { name: 'Login' }).click();
  
//    // For entering Number

//     // For entering Number
//     const numberInput = page.getByPlaceholder('Enter your number', { exact: true });
//     await expect(numberInput).toBeVisible();
//     await numberInput.fill('111111  111');

//     // Continue Button
//     const continueButton = page.getByRole('button', { name: 'Continue' });
//      await expect(continueButton).toBeVisible();
//      await continueButton.click()
//   // For Entering OTP
//   await page.getByRole('textbox').first().click();
//   await page.getByRole('textbox').first().fill('1');
//   await page.getByRole('textbox').nth(1).fill('1');
//   await page.getByRole('textbox').nth(2).fill('1');
//   await page.getByRole('textbox').nth(3).fill('1');

//   // Verify that the OTP was entered correctly
// await expect(page.getByRole('textbox').first()).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(1)).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(2)).toHaveValue('1');
// await expect(page.getByRole('textbox').nth(3)).toHaveValue('1');
  
//   });


//   test('Test 4', async ({ page }) => {
//     // Open WebSite    
//     await page.goto('https://flexipill-ui-new-staging.vercel.app')

//     await expect(page).toHaveURL('https://flexipill-ui-new-staging.vercel.app');
//     //click on login buttton
//     await page.getByRole('link', { name: 'Login' }).click();
    
//      // For entering Number

//       // For entering Number
//       const numberInput = page.getByPlaceholder('Enter your number', { exact: true });
//       await expect(numberInput).toBeVisible();
//       await numberInput.fill('111111acx111');

//       // Continue Button
//       const continueButton = page.getByRole('button', { name: 'Continue' });
//        await expect(continueButton).toBeVisible();
//        await continueButton.click()
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
    
//     });
// })