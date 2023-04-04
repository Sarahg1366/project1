import { test, expect } from '@playwright/test';

test('Landing page', async ({ page }) => {
  await page.goto('https://www.unient.biz/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  const Title = page.locator("title");
  await expect(Title).toHaveAttribute("title","Unient | Your Versatile Partner for Better Offshoring");
});