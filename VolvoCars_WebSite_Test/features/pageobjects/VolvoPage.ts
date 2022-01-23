class VolvoPage {

    get watchBtn(){return $('#Video-1 > section > div > div > div > button')}
    get acceptBtn(){return $('div.optanon-alert-box-button.optanon-button-allow > div > button')}
    get volvoSafetyPage(){return $('//*[@id="nav:topNavCarMenu"]')}
    get storyVideo(){return $('//*[@id="Video-1"]')}
    get moviePlayer(){return $('//*[@id="movie_player"]')}
    get menuBtn(){return $('//*[@id="sitenav-sidenav-toggle"]/em')}
    get navPanel(){return $('//*[@id="nav:sideNavigation"]')}
    get ourCarsBtn(){return $('//*[@id="nav:topNavCarMenu"]/em')}
    get ourCarsPage(){return $('//*[@id="vcc-site-nav"]/div/div/div[1]/div/div[1]/div')}

    async Open(path)
    {
        await browser.url(path)
        await browser.deleteCookies()
        await browser.maximizeWindow()
    }

    async clickOnWatchBtn()
    {
        try{
            await this.watchBtn.waitForClickable();
            await this.watchBtn.click();
        }
        catch(err)
        {
            err.message = 'Error while clicking on Watch Button'
            throw err;
        }
    }

    async acceptCookies()
    {
        try{
            await this.acceptBtn.waitForClickable();
            await this.acceptBtn.click();
        }
        catch(err)
        {
            err.message = 'Error while clicking on Accept Cookies Button'
            throw err;
        }
    }
}

export default new VolvoPage