import { test, expect, chromium } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
test('Test 1', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    deviceScaleFactor: 1,
  });
  test.setTimeout(80000);

  console.log('stage Mobile Reorder Test Cases Started');
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
    await contextPage.waitForTimeout(1000);
    //click on Profile buttton
    await contextPage.getByRole('link', { name: 'Profile' }).click();
    await contextPage.waitForTimeout(2000);
    //click on Manage Patient
    await contextPage.getByRole('heading', { name: 'Manage Patients' }).click();
    const patientDetails = contextPage.locator(
      "//div[contains(@class,'card-container')]"
    );
    await contextPage.waitForTimeout(1000);
    if (await patientDetails.isVisible()) {
      await contextPage.getByTestId('MoreHorizIcon').click();
      await contextPage.getByRole('menuitem', { name: 'Delete' }).click();
      console.log('Deleted Patient Details');
      await contextPage.waitForTimeout(1000);
    } else {
      console.log('Patient details are not Visible');
    }
    await contextPage.waitForTimeout(2000);
    await contextPage.getByRole('navigation').getByRole('img').click();

    await contextPage.getByRole('heading', { name: 'Manage Address' }).click();
    const addressDetails = contextPage.locator(
      "//div[@class='card-container']"
    );
    await contextPage.waitForTimeout(1000);
    if (await addressDetails.isVisible()) {
      await contextPage.getByTestId('MoreHorizIcon').click();
      await contextPage.getByRole('menuitem', { name: 'Delete' }).click();
      console.log('Deleted Address Details');
      await contextPage.waitForTimeout(1000);
    } else {
      console.log('Address details are not Visible');
    }
    await contextPage.getByRole('link', { name: 'Orders' }).click();
    await contextPage.waitForTimeout(1000);
    await contextPage
      .locator("(//button[@type='button'][normalize-space()='Reorder'])[1]")
      .click();
    await contextPage.waitForTimeout(1000);

    const iframeTwo = contextPage.frameLocator('iframe[name="webpush-onsite"]');
    const allowButtonTwo = iframeTwo.getByRole('button', { name: 'Allow' });
    try {
      // Wait for up to 5 seconds for the button to become visible
      await allowButtonTwo.waitFor({ state: 'visible', timeout: 5000 });
      // Click the button if it's visible within the timeout
      await allowButtonTwo.click();
      console.log('Allow button clicked.');
    } catch (error) {
      // Handle the case where the button does not appear within the timeout
      console.log(
        'Allow button not visible within 5 seconds, proceeding to the next step.'
      );
    }
    if (
      await contextPage
        .locator('button', { hasText: 'Address Details' })
        .isVisible()
    ) {
      console.log('Adding patient and address details...');

      // Click on "Address Details"
      await contextPage
        .getByRole('button', { name: 'Address Details' })
        .click();

      // Add Patient Details
      await contextPage.getByLabel('Someone Else').check();
      await contextPage.waitForTimeout(1000);

      await contextPage.getByPlaceholder("Patient's Name").click();
      await contextPage.getByPlaceholder("Patient's Name").fill('random');
      await contextPage.getByPlaceholder("Patient's Age").click();
      await contextPage.getByPlaceholder("Patient's Age").fill('25');
      await contextPage
        .getByRole('button', { name: 'Male', exact: true })
        .click();
      await contextPage.waitForTimeout(1000);
      await contextPage.getByRole('button', { name: 'Save' }).click();

      // Add Address Details
      await contextPage.getByPlaceholder('Your Name').click();
      await contextPage.getByPlaceholder('Your Name').fill('tester');
      await contextPage.getByPlaceholder('Pincode').click();
      await contextPage.getByPlaceholder('Pincode').fill('560102');
      await contextPage.waitForTimeout(1000);
      await contextPage.getByPlaceholder('Phone Number').click();
      await contextPage.getByPlaceholder('Phone Number').fill('6967969667');
      await contextPage.waitForTimeout(1000);
      await contextPage.getByPlaceholder('House number, floor').click();
      await contextPage
        .getByPlaceholder('House number, floor')
        .fill('abc random');
      await contextPage.waitForTimeout(1000);
      await contextPage.getByPlaceholder('Locality').click();
      await contextPage.getByPlaceholder('Locality').fill('testing');
      await contextPage.waitForTimeout(1000);
      await contextPage.getByRole('button', { name: 'Home' }).click();
      await contextPage.waitForTimeout(1000);
      await contextPage.getByRole('button', { name: 'Save' }).click();
      await contextPage.waitForTimeout(1000);

      console.log('Patient and address details added successfully.');
    } else {
      await contextPage
        .getByRole('button', { name: 'Confirm Address' })
        .click();
      console.log(
        '"Address Details" button not found. Proceeding to confirm address...'
      );
    }

    await contextPage.getByRole('button', { name: 'Proceed' }).click();
    await contextPage.waitForTimeout(1000);
    // Check if 'COD (Cash on Delivery)' button is present
    const codButton = contextPage.getByText('COD (Cash on Delivery)');
    const partialCodButton = contextPage.getByText('COD (Partial Payment)');

    if (await codButton.isVisible()) {
      console.log('COD (Cash on Delivery) selected');
      await codButton.click();
      await contextPage.waitForTimeout(1000);
      await contextPage.getByRole('button', { name: 'Yes' }).click();
      await contextPage.waitForTimeout(1000);

      try {
        await contextPage
          .locator('button', { hasText: 'Yes Proceed' })
          .waitFor({
            state: 'visible',
            timeout: 5000,
          });
        await contextPage.getByRole('button', { name: 'Yes Proceed' }).click();
      } catch (error) {
        console.log(
          "'Yes Proceed' button not visible within 5 seconds, moving to the next step."
        );
      }

      await contextPage.waitForTimeout(1000);
    } else if (await partialCodButton.isVisible()) {
      console.log('COD (Partial Payment) selected');
      await partialCodButton.click();
      await contextPage.getByText('Pay 10% now to confirm order').click();
      await contextPage.waitForTimeout(1000);

      try {
        await contextPage
          .locator('button', { hasText: 'Yes Proceed' })
          .waitFor({
            state: 'visible',
            timeout: 5000,
          });
        await contextPage.getByRole('button', { name: 'Yes Proceed' }).click();
      } catch (error) {
        console.log(
          "'Yes Proceed' button not visible within 5 seconds, moving to the next step."
        );
      }

      await contextPage.waitForTimeout(1000);
      await contextPage.getByLabel('Net Banking').check();
      await contextPage.getByRole('button', { name: 'PAY ₹' }).click();
      await contextPage.waitForTimeout(1000);
      await contextPage.getByText('Success').click();
      await contextPage.getByRole('button', { name: 'Submit' }).click();
      await contextPage.waitForTimeout(5000);

      // Handle Notification Pop-up
      const iframeThree = contextPage.frameLocator(
        'iframe[name="webpush-onsite"]'
      );
      const allowButtonThree = iframeThree.getByRole('button', {
        name: 'Allow',
      });

      try {
        await allowButtonThree.waitFor({ state: 'visible', timeout: 5000 });
        await allowButtonThree.click();
        console.log('Allow button clicked.');
      } catch (error) {
        console.log(
          'Allow button not visible within 5 seconds, proceeding to the next step.'
        );
      }
    } else {
      console.log(
        "Neither 'COD (Cash on Delivery)' nor 'COD (Partial Payment)' options are available."
      );
    }

    await contextPage.getByRole('button', { name: 'After 7 Days' }).click();
    await contextPage.getByRole('button', { name: 'Confirm' }).click();
    console.log('Stage Mobile Reorder Test Case End Successfully');
  } catch (error) {
    console.error('Test 1 failed:', error);
  } finally {
    await browser.close();
  }
});
