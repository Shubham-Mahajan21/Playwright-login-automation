import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {

  const filePath = 'file:///C:/Users/shubh/Desktop/login-automation/login-automation/index.html';

  await page.goto(filePath);
 await page.waitForTimeout(1000);
  await page.fill('#username', 'admin');
   await page.waitForTimeout(1000);
  await page.fill('#password', 'wrongpass');
   await page.waitForTimeout(1000);

  await page.click('button');
   await page.waitForTimeout(1000);

  await expect(page.locator('#message'))
    .toHaveText('Invalid username or password');
     await page.waitForTimeout(5000);

});