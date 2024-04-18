import { test, expect } from '@playwright/test';
import mysql from 'mysql2';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.beforeAll(() => {
  const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'db'
  });
  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to MySQL: ", error);
      return;
    }
    console.log("Success connecting to MySQL");
  });
});