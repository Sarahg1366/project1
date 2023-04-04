import { test, expect } from '@playwright/test';
//import {expect, jest, test} from '@jest/globals';



//test('Keywords_Main', async ({ page }) => {
  //await page.goto('view-source:https://stage-unientwww.euwest01.umbraco.io/');
   //await page.keyboard.press('Control+U');

  
//Check keywords in Landing page
test('Keywords_Main', async ({ page }) => {
  await page.goto('https://stage-unientwww.euwest01.umbraco.io/');
  await page.getByLabel('User name').click();
  await page.getByLabel('User name').fill('unienttest');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Unient1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Accept All' }).click();//
  //await page.getByText('Loading... Teams Infotech Creatives BPO About Us Blog Your Versatile Partner for')//.press('Control+u');
  //const keyboard = page.getByText('Loading... Teams Infotech Creatives BPO About Us Blog Your Versatile Partner for');
  await page.goto('view-source:https://stage-unientwww.euwest01.umbraco.io/');
  //await page.pause();
  (await page.content()).includes("keyword"); 
  //page.keyboard.press("Control+U");

   // await page.keyboard.press('Control+U');
    //await page.pause();
   const Keywords = page.locator('/html/body/table/tbody/tr[130]/td[2]/span[5]/text()');
   await expect(Keywords).toHaveAttribute("content","Unient, bpo company, outsource company, bpo company philippines, bpo outsource, one outsource, offshoring australia, outsourcing philippines, outsourced bpo, bpo companies");

    //Check kywords in Teams 
    //await page.goto('https://stage-unientwww.euwest01.umbraco.io/teams/');
    //expect(page.locator("//meta[@name='keywords']")).valueOf('remote team, employer of record, offshore team, offshore development team, dedicated offshore team, global employer of record, employer of record services, hire offshore staff, hire offshore developers, building teams remotely');
});
//
//Check kywords in Teams 
 // test('Teams page', async ({ page }) => {
  // await page.goto('https://stage-unientwww.euwest01.umbraco.io/teams/');
  // await page.getByLabel('User name').click();
  // await page.getByLabel('User name').fill('unienttest');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('Unient1234');
  // await page.getByRole('button', { name: 'Log in' }).click();
  // await page.getByRole('button', { name: 'Accept All' }).click();
  // await page.getByText('Flexible High Quality Offshore Team Solution').press('Control+u');
  // expect(page.locator("//meta[@name='keywords']")).valueOf('remote team, employer of record, offshore team, offshore development team, dedicated offshore team, global employer of record, employer of record services, hire offshore staff, hire offshore developers, building teams remotely');
   
//});

