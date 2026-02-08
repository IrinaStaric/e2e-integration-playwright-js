import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
test('should not log in with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    const testEmail = process.env.USER_EMAIL;
    const testPassword = process.env.INVALID_PASSWORD;
  
    await loginPage.open();
    await loginPage.submit(testEmail, testPassword);
  
    await expect(page).toHaveURL('/');
  });


