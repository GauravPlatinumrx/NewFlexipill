
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/staging',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL:
      process.env.PRODUCTION_URL || 'https://flexipill-ui-staging.vercel.app/',
    trace: 'on-first-retry',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});