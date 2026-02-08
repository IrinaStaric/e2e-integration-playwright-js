export class LoginPage {
    constructor(page) {
      this.page = page;
  
      this.emailInput = page.locator('#email');
      this.passwordInput = page.locator('input[type="password"]');
      this.loginButton = page.getByRole('button', { name: /^log in$/i });
      this.heading = page.getByRole('heading', { name: /log in to your swap account/i });
    }
  
    async open() {
      await this.page.goto('/');
    }
  
    async submit(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  