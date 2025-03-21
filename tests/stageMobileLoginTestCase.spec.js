import { test, expect, chromium } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
test('Test 1 (Numeric Characters)', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(20000);

  console.log('Mobile Login Test Cases Started');
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
      await allowButton.waitFor({ state: 'visible', timeout: 5000 });
      // Click the button if it's visible within the timeout
      await allowButton.click();
      console.log('Allow button clicked.');
    } catch (error) {
      // Handle the case where the button does not appear within the timeout
      console.log(
        'Allow button not visible within 5 seconds, proceeding to the next step.'
      );
    }
    // Click on Profile button
    await contextPage.locator('a').filter({ hasText: 'Profile' }).click();
    await contextPage.waitForTimeout(1000);

    // Enter Mobile Number
    await contextPage
      .getByRole('textbox', { name: 'Enter your phone number' })
      .fill('8667456454');
    await contextPage.waitForTimeout(1000);
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
  } catch (error) {
    console.error('Test 1 failed:', error);
  } finally {
    await browser.close();
  }
});

test('Test 2 (Alphabet Characters)', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(20000);

  console.log('Mobile Login Test Cases Started');
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
      await allowButton.waitFor({ state: 'visible', timeout: 5000 });
      // Click the button if it's visible within the timeout
      await allowButton.click();
      console.log('Allow button clicked.');
    } catch (error) {
      // Handle the case where the button does not appear within the timeout
      console.log(
        'Allow button not visible within 5 seconds, proceeding to the next step.'
      );
    }
    // Click on Profile button
    await contextPage.locator('a').filter({ hasText: 'Profile' }).click();
    await contextPage.waitForTimeout(1000);
    // Enter Mobile Number
    await contextPage
      .getByRole('textbox', { name: 'Enter your phone number' })
      .fill('ABCDEFGHIJ');
    await contextPage.waitForTimeout(1000);
    const isDisabled = await contextPage
      .getByRole('button', { name: 'Get OTP' })
      .isDisabled();
    expect(isDisabled).toBeTruthy();
  } catch (error) {
    console.error('Test 1 failed:', error);
  } finally {
    await browser.close();
  }
});

test('Test 3 (Special Characters)', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(20000);

  console.log('Mobile Login Test Cases Started');
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
      await allowButton.waitFor({ state: 'visible', timeout: 5000 });
      // Click the button if it's visible within the timeout
      await allowButton.click();
      console.log('Allow button clicked.');
    } catch (error) {
      // Handle the case where the button does not appear within the timeout
      console.log(
        'Allow button not visible within 5 seconds, proceeding to the next step.'
      );
    }
    // Click on Profile button
    await contextPage.locator('a').filter({ hasText: 'Profile' }).click();
    await contextPage.waitForTimeout(1000);

    // Enter Mobile Number
    await contextPage
      .getByRole('textbox', { name: 'Enter your phone number' })
      .fill('8667456#@4@');
      await contextPage.waitForTimeout(1000);
      const isDisabled = await contextPage
        .getByRole('button', { name: 'Get OTP' })
        .isDisabled();
      expect(isDisabled).toBeTruthy();
  } catch (error) {
    console.error('Test 1 failed:', error);
  } finally {
    await browser.close();
  }
});


test('Test 3 (White spaces)', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(20000);

  console.log('Mobile Login Test Cases Started');
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
      await allowButton.waitFor({ state: 'visible', timeout: 5000 });
      // Click the button if it's visible within the timeout
      await allowButton.click();
      console.log('Allow button clicked.');
    } catch (error) {
      // Handle the case where the button does not appear within the timeout
      console.log(
        'Allow button not visible within 5 seconds, proceeding to the next step.'
      );
    }
    // Click on Profile button
    await contextPage.locator('a').filter({ hasText: 'Profile' }).click();
    await contextPage.waitForTimeout(1000);

    // Enter Mobile Number
    await contextPage
      .getByRole('textbox', { name: 'Enter your phone number' })
      .fill('          ');
      await contextPage.waitForTimeout(1000);
      const isDisabled = await contextPage
        .getByRole('button', { name: 'Get OTP' })
        .isDisabled();
      expect(isDisabled).toBeTruthy();
  } catch (error) {
    console.error('Test 1 failed:', error);
  } finally {
    await browser.close();
  }
});

test('Test 3 (AlphaNumeric Characters)', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(20000);

  console.log('Mobile Login Test Cases Started');
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
      await allowButton.waitFor({ state: 'visible', timeout: 5000 });
      // Click the button if it's visible within the timeout
      await allowButton.click();
      console.log('Allow button clicked.');
    } catch (error) {
      // Handle the case where the button does not appear within the timeout
      console.log(
        'Allow button not visible within 5 seconds, proceeding to the next step.'
      );
    }
    // Click on Profile button
    await contextPage.locator('a').filter({ hasText: 'Profile' }).click();
    await contextPage.waitForTimeout(1000);

    // Enter Mobile Number
    await contextPage
      .getByRole('textbox', { name: 'Enter your phone number' })
      .fill('ABD70983de');
      await contextPage.waitForTimeout(1000);
      const isDisabled = await contextPage
        .getByRole('button', { name: 'Get OTP' })
        .isDisabled();
      expect(isDisabled).toBeTruthy();
  } catch (error) {
    console.error('Test 1 failed:', error);
  } finally {
    await browser.close();
  }
});

