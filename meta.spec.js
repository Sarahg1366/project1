import { test, expect } from '@playwright/test';

//This is to check Meta description- Landing page
test("Landing page", async ({ page }) => {
  await page.goto("https://www.unient.biz/teams");
  await page.getByRole("button", { name: "Accept All" }).click();
  //await page.goto('view-source:https://www.unient.biz/teams/');
  //await page.keyboard.press('Control+F');
  //async function keyPress(page, char) {
  // await page.keyboard.press(char);
  //}
  //keyPress(page, 'Control');
  // keyPress(page, 'f');
  const MetaDescription1 = page.locator("meta[name='description']");
  await expect(MetaDescription1).toHaveAttribute("content","Scale faster and smarter and gain access to a premium global talent pool with our fully customisable offshore team solutions: Employer of Record and Managed Resources.",
 );
  //Infotech page
 //await page.goto("https://www.unient.biz/infotech/");
 //const MetaDescription2 = page.locator("meta[name='description']");
 //await expect(MetaDescription2).toHaveAttribute("content","We design & deliver tech-enabled solutions that give startups, small to medium businesses & global enterprises a competitive edge in — no matter the industry.",);

 //Creatives page
 test("Creatives page", async ({ page }) => {
  await page.goto("https://www.unient.biz/creatives/");
  await page.getByRole("button", { name: "Accept All" }).click();
  const MetaDescription = page.locator("meta[name='description']");
  await expect(MetaDescription).toHaveAttribute("content","We offer a full suite of design & digital marketing &amp; communications solutions to help businesses create meaningful connections, tell stories and drive conversions.",);
});

 //BPO page
 await page.goto("https://www.unient.biz/bpo/");{
 const MetaDescription4 = page.locator("meta[name='description']");
 await expect(MetaDescription4).toHaveAttribute("content","The Unient advantage: operational excellence with a human approach. We create exceptional customer experiences, streamline processes & enhance productivity.",);
});
 
 //About Us page
 await page.goto("https://www.unient.biz/about-us/");{
 const MetaDescription5 = page.locator("meta[name='description']");
 await expect(MetaDescription5).toHaveAttribute("content","We create value and deliver results. Unient, formerly known as Entrinsic Technology, maintains service fulfilment capabilities in the Philippines, Singapore & India.",);
});

 //Blog page
 await page.goto("https://www.unient.biz/blog/");{
 const MetaDescription6 = page.locator("meta[name='description']");
 await expect(MetaDescription6).toHaveAttribute("content","Explore articles, industry insights, the latest trends & other resources about outsourcing, offshoring, remote staffing, management, leadership & innovation",);

});

//await page.goto('https://www.unient.biz/teams/');
///await page.getByLabel('User name').click();
//wait page.getByLabel('User name').fill('unienttest');
//await page.getByLabel('Password').click();
//await page.getByLabel('Password').fill('Unient1234');
//await page.getByRole('button', { name: 'Log in' }).click();
//await page.getByRole('button', { name: 'Accept All' }).click();
//await page.goto("view-source:https://www.unient.biz/teams/");
//const MetaDescription = page.locator("meta[name='description']");
//await expect(MetaDescription).toHaveAttribute("content","Scale faster and smarter and gain access to a premium global talent pool with our fully customisable offshore team solutions: Employer of Record and Managed Resources.",

//test.only('test', async ({ page }) => {
 // await page.goto('https://stage-unientwww.euwest01.umbraco.io/');
 // await page.getByLabel('User name').click();
 // await page.getByLabel('User name').fill('unienttest');
 // await page.getByLabel('Password').click();
 // await page.getByLabel('Password').fill('Unient1234');
 // await page.getByRole('button', { name: 'Log in' }).click();
 // await page.getByRole('button', { name: 'Accept All' }).click();
 // await page.getByText('Loading... Teams Infotech Creatives BPO About Us Blog Your Versatile Partner for').press('Control+u');
//const Keywords = page.locator("meta[name='keywords']");
  //await expect(Keywords).toHaveAttribute("content","Unient,bpo company,outsource company,bpo company philippines,bpo outsource,one outsource,offshoring australia,outsourcing philippines,outsourced bpo,bpo companies.");

  //);

  

//});

