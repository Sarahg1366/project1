import { test, expect } from '@playwright/test';

const { test1 } = require('@playwright/test');



test('getting page source', async ({ page }) => {

await page.goto('https://dev-unientwww.euwest01.umbraco.io/blog/blog-test-2/');

await page.getByLabel('User name').fill('unienttest');

await page.getByLabel('Password').fill('Unient1234');

await page.getByLabel('Password').press('Enter');

await page.locator("//a[@class='navbar-brand']").isVisible();

 // Retrieve the HTML source code

 const html = await page.content();


 // Print the HTML source code to the console

 console.log(html);


 await page.close();

  const Keywords = page.locator("html/head/meta[@name='keywords']");
  await expect(Keywords).toHaveAttribute("content","IT Outsourcing, Offshore IT outsourcing, software technology outsourcing, software project outsourcing, business outsourcing, business technology outsourcing, software team outsourcing, technology experts outsourcing, hiring IT team, innovation outsourcing.");
  
  //await page.keyboard.press('Control+a');
  //await page.pause();
    //await expect(Keywords).toHaveAttribute("content","Scale faster and smarter and gain access to a premium global talent pool with our fully customisable offshore team solutions: Employer of Record and Managed Resources.");
  //await page.getByLabel('Line wrap').check();
  //await page.pause();
  //await page.getByRole('cell', { name: '<html lang="en">' }).click();
  //await page.pause();
  //await page.getByText('Line wrap <!doctype html> <html lang="en"> <head> <script src="https://www.googl').press('Control+f');
  //await page.pause();
 
 // await page.getByText('Line wrap <!doctype html> <html lang="en"> <head> <script src="https://www.googl').press('Control+f');
  //await page.getByRole('cell', { name: '<html lang="en">' }).click();
  //await page.getByText('Line wrap <!doctype html> <html lang="en"> <head> <script src="https://www.googl').press('Control+f');
  //await page.getByText('Line wrap').click();
  //await page.getByText('Line wrap').click();
});