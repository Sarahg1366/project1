import { test, expect } from '@playwright/test';

//This is to check Meta description- Landing page
test.only('Landing page', async ({ page }) => {
  await page.goto('https://www.unient.biz/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.locator(("//meta[@name='description']")).toContainText('Empower your organisation to function onshore and offshore as one enterprise by using our versatile range of services and regional service delivery');


});

//This is to check Meta description- Teams page
test('Teams', async ({ page }) => {
  await page.goto('https://www.unient.biz/teams/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  page.locator(("//meta[@name='description']")).hasText('Scale faster and smarter and gain access to a premium global talent pool with our fully customisable offshore team solutions: Employer of Record and Managed Resources.');
 
  
});

//This is to check Meta description - Creatives page
test('Creatives', async ({ page }) => {
  await page.goto('https://www.unient.biz/creatives/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  //page.locator(("//meta[@name='description']")).valueOf('We design & deliver tech-enabled solutions that give startups, small to medium businesses & global enterprises a competitive edge in — no matter the industry')
  //await expect(page.locator("//meta[@name='description']")).toContainText('We offer a full suite of design & digital marketing & communications solutions to help businesses create meaningful connections, tell stories and drive conversions.')
  await expect(page.locator("//meta[@name='description']")).valueOf('We offer a full suite of design & digital marketing & communications solutions to help businesses create meaningful connections, tell stories and drive conversions.');
  
});


// This is to check keywords in staging envi
test('test', async ({ page }) => {
  await page.goto('https://stage-unientwww.euwest01.umbraco.io/');
  await page.getByLabel('User name').click();
  await page.getByLabel('User name').fill('unienttest');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Unient1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByText('Loading... Teams Infotech Creatives BPO About Us Blog Your Versatile Partner for').press('Control+u');
  await expect(page.locator("//meta[@name='keywords']")).valueOf('Unient, bpo company, outsource company, bpo company philippines, bpo outsource, one outsource, offshoring australia, outsourcing philippines, outsourced bpo, bpo companies.');
 
});