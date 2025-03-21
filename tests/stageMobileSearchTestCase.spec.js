import { test, expect, chromium } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
test('Test 1 (Search only Medicine Name with alphabet) ', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(30000);

  console.log('stage Mobile Search Test Cases Started');

  // Use the page from the context
  const contextPage = await context.newPage();
  await contextPage.goto('https://flexipill-ui-staging.vercel.app/');

  // Verify the URL
  await expect(contextPage).toHaveURL(
    'https://flexipill-ui-staging.vercel.app/'
  );
  // remove notification pop up
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
    .fill('9797979797');
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
  await contextPage.waitForTimeout(1000);
  await contextPage.getByRole('link', { name: 'Home' }).click();
  await contextPage.getByPlaceholder('Search your Medicines').click();
  await contextPage.waitForTimeout(1000);
  await contextPage.getByPlaceholder('Search your Medicines').fill('lupin');
  await contextPage.waitForTimeout(1000);
  await contextPage.getByRole('button', { name: 'See more results' }).click();
  await contextPage.waitForTimeout(3000);
  await expect(contextPage).toHaveURL(
    'https://flexipill-ui-staging.vercel.app/product-listing/lupin'
  );
  await contextPage.close();
  console.log('stage Mobile Search Test Cases Ended');
});

test('Test 2 (Search only Medicine Name with Numeric Characters) ', async ({
  page,
}) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(30000);

  console.log('stage Mobile Search Test - 2 Cases Started');

  // Use the page from the context
  const contextPage = await context.newPage();
  await contextPage.goto('https://flexipill-ui-staging.vercel.app/');

  // Verify the URL
  await expect(contextPage).toHaveURL(
    'https://flexipill-ui-staging.vercel.app/'
  );
  // remove notification pop up
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
    .fill('9797979797');
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
  await contextPage.getByRole('link', { name: 'Home' }).click();
  await contextPage.getByPlaceholder('Search your Medicines').click();
  await contextPage.waitForTimeout(1000);
  await contextPage.getByPlaceholder('Search your Medicines').fill('56');
  await contextPage.waitForTimeout(1000);
  await contextPage.getByRole('button', { name: 'See more results' }).click();
  await contextPage.waitForTimeout(3000);
  await expect(contextPage).toHaveURL(
    'https://flexipill-ui-staging.vercel.app/product-listing/56'
  );
  await contextPage.close();
  console.log('stage Mobile Search Test - 2 Cases Ended');
});

test('Test 3 (Search only Medicine Name with AlphaNumeric Characters) ', async ({
  page,
}) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(30000);

  console.log('Stage Mobile Search Test - 3 Cases Started');

  // Use the page from the context
  const contextPage = await context.newPage();
  await contextPage.goto('https://flexipill-ui-staging.vercel.app/');

  // Verify the URL
  await expect(contextPage).toHaveURL(
    'https://flexipill-ui-staging.vercel.app/'
  );
  // remove notification pop up
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
    .fill('9797979797');
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
  await contextPage.getByRole('link', { name: 'Home' }).click();
  await contextPage.getByPlaceholder('Search your Medicines').click();
  await contextPage.waitForTimeout(1000);
  await contextPage.getByPlaceholder('Search your Medicines').fill('Dolo 56');
  await contextPage.waitForTimeout(1000);
  await contextPage.getByRole('button', { name: 'See more results' }).click();
  await contextPage.waitForTimeout(3000);
  await expect(contextPage).toHaveURL(
    'https://flexipill-ui-staging.vercel.app/product-listing/Dolo%2056'
  );
  await contextPage.close();
  console.log('Stage Mobile Search Test - 3 Cases Ended');
});

test('Test 4 (Search only Medicine Name with Special Characters) ', async ({
  page,
}) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(30000);

  console.log('Stage Mobile Search Test - 4 Cases Started');

  // Use the page from the context
  const contextPage = await context.newPage();
  await contextPage.goto('https://flexipill-ui-staging.vercel.app/');

  // Verify the URL
  await expect(contextPage).toHaveURL(
    'https://flexipill-ui-staging.vercel.app/'
  );
  // remove notification pop up
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
    .fill('9797979797');
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
  await contextPage.getByRole('link', { name: 'Home' }).click();
  await contextPage.getByPlaceholder('Search your Medicines').click();
  await contextPage.waitForTimeout(1000);
  await contextPage.getByPlaceholder('Search your Medicines').fill('#%');
  await contextPage.waitForTimeout(1000);
  const noMatchesLocator = contextPage.getByText(
    'Oops! No matches found for $%'
  );
  if (await noMatchesLocator.isVisible()) {
    console.log('No matches found for the search. Ending the test.');
    await contextPage.close();
  }
  console.log('Search completed successfully.');
  await contextPage.close();
});