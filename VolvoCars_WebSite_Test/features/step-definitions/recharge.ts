import { Given,When,Then } from "@wdio/cucumber-framework";

When(/^I click Recharge$/, async () => {
	let ele = await $('//*[@id="ProductListCarousel-1"]/section/div[1]/div/div/div/div[3]/div[1]/a')
    await ele.click()
});

Then(/^Verify Recharge page is opened$/, async () => {
    await expect(browser).toHaveUrl('https://www.volvocars.com/intl/v/cars/recharge')
});
