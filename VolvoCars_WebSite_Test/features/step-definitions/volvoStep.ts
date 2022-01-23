import { Given,When,Then } from "@wdio/cucumber-framework";
import VolvoPage from "../pageobjects/VolvoPage";

Given(/^I launch chrome browser$/, () => {
	return true;
});

When(/^I enter url$/, async () => {
	await VolvoPage.Open('https://www.volvocars.com/intl/v/car-safety/a-million-more')
	await VolvoPage.acceptCookies();
});

Then(/^Verify Volvo safety page is displayed$/, async () => {
	expect(await VolvoPage.volvoSafetyPage.isDisplayed())
})


Then(/^Verify Story Video is displayed$/, async () => {
	expect(await VolvoPage.storyVideo.isDisplayed())
});


Given(/^I navigate to Volvo page$/, async () => {
	await VolvoPage.Open('https://www.volvocars.com/intl/v/car-safety/a-million-more')
	await VolvoPage.acceptCookies();
});

When(/^I click on Watch Story Button$/, async () => {
	const elem = await $('//*[@id="Video-1"]');
    await elem.scrollIntoView();
	await VolvoPage.clickOnWatchBtn()
});

Then(/^Verify story video is playing$/, async () => {
	expect(await VolvoPage.moviePlayer.isDisplayed())
});


When(/^I click on Menu Button$/, async () => {
	await VolvoPage.menuBtn.click()
});

Then(/^Verify Menu Navigation panel is displayed$/, async () => {
	expect(await VolvoPage.navPanel.isDisplayed())
});


When(/^I click on Our Cars$/, async () => {
	await VolvoPage.ourCarsBtn.click()
});

Then(/^Verify Our Cars is opened$/, async () => {
	expect(await VolvoPage.ourCarsPage.isDisplayed())
});





