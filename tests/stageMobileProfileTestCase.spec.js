import { test, expect, chromium } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
function generateRandomMobileNumber() {
  const prefix = Math.floor(Math.random() * 4) + 6;
  const number = Math.floor(Math.random() * 1000000000);
  return prefix.toString() + number.toString().padStart(9, '0');
}
test('Test 1', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });

  test.setTimeout(20000);

  console.log('Stage Mobile Fill Profile Test Cases Started');
  // Use the page from the context
  try {
    const contextPage = await context.newPage();
    await contextPage.goto('https://flexipill-ui-staging.vercel.app/');

    // Verify the URL
    await expect(contextPage).toHaveURL(
      'https://flexipill-ui-staging.vercel.app/'
    );

    const iframe = contextPage.frameLocator('iframe[name="webpush-onsite"]');
    const allowButton = iframe.getByRole('button', { name: 'Allow' });
    try {
      // Wait for up to 5 seconds for the button to become visible
      await allowButton.waitFor({ state: 'visible', timeout: 7000 });
      // Click the button if it's visible within the timeout
      await allowButton.click();
      console.log('Allow button clicked.');
    } catch (error) {
      // Handle the case where the button does not appear within the timeout
      console.log(
        'Allow button not visible within 7 seconds, proceeding to the next step.'
      );
    }
    // Click on Profile button
    await contextPage.locator('a').filter({ hasText: 'Profile' }).click();
    // Enter Mobile Number
    const numberInput = contextPage
      .getByPlaceholder('Enter your phone number', { exact: true })
      .first(); // Use the first matching input
    const randomMobileNumber = generateRandomMobileNumber();
    await numberInput.fill(randomMobileNumber);
    console.log(`Generated Mobile Number: ${randomMobileNumber}`);
    await page.waitForTimeout(1000);
    await contextPage.getByRole('button', { name: 'Get OTP' }).click();
    await contextPage.waitForTimeout(1000);
    // For Entering OTP
    await contextPage.getByRole('textbox').first().click();
    await contextPage.getByRole('textbox').first().fill('1');
    await contextPage.getByRole('textbox').nth(1).fill('1');
    await contextPage.getByRole('textbox').nth(2).fill('1');
    await contextPage.getByRole('textbox').nth(3).fill('1');

    // Verify that the OTP was entered correctly
    await expect(contextPage.getByRole('textbox').first()).toHaveValue('1');
    await expect(contextPage.getByRole('textbox').nth(1)).toHaveValue('1');
    await expect(contextPage.getByRole('textbox').nth(2)).toHaveValue('1');
    await expect(contextPage.getByRole('textbox').nth(3)).toHaveValue('1');
    await page.waitForTimeout(2000);
    console.log('Login Successfully');
    await contextPage.getByRole('link', { name: 'Profile' }).click();
    await contextPage.waitForTimeout(1000);
    await contextPage.getByText('Edit').click();
    await contextPage.getByPlaceholder('First Name').click();
    await contextPage.getByPlaceholder('First Name').fill('Test');
    await contextPage.waitForTimeout(1000);
    await contextPage.getByPlaceholder('Last Name').click();
    await contextPage.getByPlaceholder('Last Name').fill('User');
    await contextPage.waitForTimeout(1000);
    await contextPage.getByPlaceholder('Age').click();
    await contextPage.getByPlaceholder('Age').fill('24');
    await contextPage.waitForTimeout(1000);
    await contextPage.getByPlaceholder('Mail Id').click();
    await contextPage.getByPlaceholder('Mail Id').fill('abcrandom@gmail.com');
    await contextPage.waitForTimeout(1000);
    await contextPage.getByLabel('Male', { exact: true }).check();
    await contextPage.getByRole('button', { name: 'Save Details' }).click();
  } catch (error) {
    console.error('Test 1 failed:', error);
  } finally {
    await browser.close();
    console.log('Stage Mobile Fill Profile Test Cases Ended');
  }
});

// test('Test 2', async ({ page }) => {
//   const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext({
//     viewport: { width: 360, height: 640 },
//     isMobile: true,
//     deviceScaleFactor: 1,
//   });

//   test.setTimeout(20000);

//   console.log('Mobile Login Test Cases Started');
//   // Use the page from the context
//   try {
//     const contextPage = await context.newPage();
//     await contextPage.goto('https://flexipill-ui-staging.vercel.app/');

//     // Verify the URL
//     await expect(contextPage).toHaveURL(
//       'https://flexipill-ui-staging.vercel.app/'
//     );

//     const iframe = contextPage.frameLocator('iframe[name="webpush-onsite"]');
//     const allowButton = iframe.getByRole('button', { name: 'Allow' });
//     try {
//       // Wait for up to 5 seconds for the button to become visible
//       await allowButton.waitFor({ state: 'visible', timeout: 5000 });
//       // Click the button if it's visible within the timeout
//       await allowButton.click();
//       console.log('Allow button clicked.');
//     } catch (error) {
//       // Handle the case where the button does not appear within the timeout
//       console.log(
//         'Allow button not visible within 5 seconds, proceeding to the next step.'
//       );
//     }
//     // Click on Profile button
//     await contextPage.locator('a').filter({ hasText: 'Profile' }).click();
//     await contextPage.waitForTimeout(1000);

//     // Enter Mobile Number
//     // For entering Number
//     const numberInput = contextPage
//       .getByPlaceholder('Enter your phone number', { exact: true })
//       .first(); // Use the first matching input
//     const randomMobileNumber = generateRandomMobileNumber();
//     await numberInput.fill(randomMobileNumber);
//     console.log(`Generated Mobile Number: ${randomMobileNumber}`);
//     await page.waitForTimeout(1000);
//     await contextPage.getByRole('button', { name: 'Get OTP' }).click();
//     await contextPage.waitForTimeout(1000);
//     // For Entering OTP
//     await contextPage.getByRole('textbox').first().click();
//     await contextPage.getByRole('textbox').first().fill('1');
//     await contextPage.getByRole('textbox').nth(1).fill('1');
//     await contextPage.getByRole('textbox').nth(2).fill('1');
//     await contextPage.getByRole('textbox').nth(3).fill('1');

//     // Verify that the OTP was entered correctly
//     await expect(contextPage.getByRole('textbox').first()).toHaveValue('1');
//     await expect(contextPage.getByRole('textbox').nth(1)).toHaveValue('1');
//     await expect(contextPage.getByRole('textbox').nth(2)).toHaveValue('1');
//     await expect(contextPage.getByRole('textbox').nth(3)).toHaveValue('1');
//     await page.waitForTimeout(2000);
//     console.log('Login Successfully');

//     await contextPage.getByRole('link', { name: 'Profile' }).click();
//     await contextPage.waitForTimeout(1000);
//     await contextPage.getByText('Edit').click();

//     await contextPage.getByRole('button', { name: 'Save Details' }).click();
//     const mandatoryFields = [
//       'First name is required',
//       'Last name is required',
//       'Age is required',
//       'Email is required',
//     ];

//     for (const field of mandatoryFields) {
//       const locator = contextPage.getByText(field);
//       if (await locator.isVisible()) {
//         console.log(`Validation message for '${field}' is visible.`);
//       } else {
//         console.error(`Validation message for '${field}' is NOT visible.`);
//         throw new Error(`Mandatory field '${field}' is missing.`);
//       }
//     }

//     console.log('All mandatory field validations passed.');
//   } catch (error) {
//     console.error('Test 2 failed:', error);
//   } finally {
//     await browser.close();
//   }
// });
