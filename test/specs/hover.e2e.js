const { expect } = require('chai')

const HoverPage = require('../pageobjects/hover.page')

describe('Navigate to each User Profile', () => {
    it('should access each User Profile page and verify content and URL for each user', async () => {
        const user1URL = 'users/1'
        const user2URL = 'users/2'
        const user3URL = 'users/3'

        // Verify URL and body content of user 1
        await HoverPage.open()
        await HoverPage.user1Hover.click()
        await HoverPage.user1ProfileLink.click()
        
        let userProfileURL = browser.getUrl()
        expect(await (await userProfileURL)).contain(user1URL)
        expect(await (await HoverPage.bodyContent).getText()).contain(
        	'Not Found')

        // Verify URL and body content of user 2
        await HoverPage.open()
        await HoverPage.user2Hover.click()
        await HoverPage.user2ProfileLink.click()

        userProfileURL = browser.getUrl()
        expect(await (await userProfileURL)).contain(user2URL)
        expect(await (await HoverPage.bodyContent).getText()).contain(
            'Not Found')

        // Verify URL and body content of user 3
        await HoverPage.open()
        await HoverPage.user3Hover.click()
        await HoverPage.user3ProfileLink.click()

        userProfileURL = browser.getUrl()
        expect(await (await userProfileURL)).contain(user3URL)
        expect(await (await HoverPage.bodyContent).getText()).contain(
            'Not Found')
    })
})
