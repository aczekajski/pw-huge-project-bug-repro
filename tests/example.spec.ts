import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const bb = await page.locator('body').boundingBox();
  console.log('bounding box', bb);

  // Expect a title "to contain" a substring.
  await expect(page.locator('header')).toHaveScreenshot('header.png');
});
