// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//     // Open WebSite    
// await page.goto('https://flexipill-ui-new-staging.vercel.app')
// // Verify the URL is same
// await expect(page).toHaveURL('https://flexipill-ui-new-staging.vercel.app');
// await page.waitForTimeout(2000)
   
// //click on login buttton
// await page.getByRole('link', { name: 'Login' }).click();
// await page.waitForTimeout(2000)


//  // For entering Number
//  const numberInput = page.getByPlaceholder('Enter your number', { exact: true });
//   await expect(numberInput).toBeVisible();
//   await numberInput.fill('1111111111');
//   await page.waitForTimeout(2000)

//   // Continue Button
//   const continueButton = page.getByRole('button', { name: 'Continue' });
//    await expect(continueButton).toBeVisible();
//    await continueButton.click()
//    await page.waitForTimeout(2000)

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

// // Go to profile
//   await page.getByRole('link', { name: 'Profile' }).click();
//   await page.waitForTimeout(1000)
//   //click on manage patient.
//   await page.getByText('Manage Patients').click();
//   await page.waitForTimeout(1000)
//   // Add Patient details
//   await page.getByRole('button', { name: '+ Add Patient' }).click();
//   await page.getByLabel('Name *').click();
//   await page.getByLabel('Name *').fill('Random Test User');
//   await page.waitForTimeout(2000)
//   // Add patient Age and Gender
//   await page.getByLabel('Age *').click();
//   await page.getByLabel('Age *').fill('23');
//   await page.getByLabel('Male', { exact: true }).check();
//   await page.waitForTimeout(2000)

//   // click on save button
//   await page.getByRole('button', { name: 'Save' }).click();

//   // click on Manage Address
//   await page.getByText('Manage Address').click();

//   // add address Details
//   await page.getByRole('button', { name: '+ Add Address' }).click();
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Name *').click();
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Name *').fill('Random');
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Phone number *').click();
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Phone number *').fill('1111111111');
//   await page.waitForTimeout(1000)
//   await page.getByLabel('House No. / Building *').click();
//   await page.waitForTimeout(1000)
//   await page.getByLabel('House No. / Building *').fill('745');
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Locality *').click();
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Locality *').fill('HSR Layout');
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Pincode *').click();
//   await page.waitForTimeout(1000)
//   await page.getByLabel('Pincode *').fill('125001');
//   await page.getByRole('group', { name: 'Address Type' }).click();
//   await page.getByText('Home', { exact: true }).click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(3000)

// });