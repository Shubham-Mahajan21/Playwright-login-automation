import { test, expect } from '@playwright/test';
import path from 'path';

test('valid login', async ({ page }) => {
  const filePath = 'file://' + path.resolve('index.html');

  await page.goto(filePath);
  await page.waitForTimeout(1000);

  await page.fill('#username', 'admin');
  await page.waitForTimeout(1000);

  await page.fill('#password', 'Password123');
  await page.waitForTimeout(1000);

  await page.click('button');
  await page.waitForTimeout(1000);

  await expect(page.locator('#message')).toHaveText('Login successful');
});