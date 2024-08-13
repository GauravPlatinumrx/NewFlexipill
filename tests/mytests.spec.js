import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://flexipill-ui-new-staging.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your number', { exact: true }).fill('1111111111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByText('Cash on delivery (COD)').click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByRole('link', { name: 'Order Created Order ID : 22254 Thiroace-12.5mcg tab 100\'s x 20 Placed On: 13/08/2024 Expected Delivery: 17/08/2024 Re-Order Patient Name: dadasd Total : ₹' }).click();
  await page.getByRole('button', { name: 'Cancel Order' }).click();
  await page.getByRole('button', { name: 'Yes, Cancel' }).click();
  await page.getByText('Just trying the App').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});