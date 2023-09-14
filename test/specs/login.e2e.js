const { expect } = require('chai')

const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Login and Logout tests', () => {
    	it('should login with valid credentials, verify success message, then logout', async () => {
			// testing credentials, usually wouldn't hard code them in a specific test
			const testUsername = 'tomsmith'
			const testPassword = 'SuperSecretPassword!'

			// Login and verify via success message
			await LoginPage.open()
			await LoginPage.inputUsername.setValue(testUsername)
			await LoginPage.inputPassword.setValue(testPassword)
			await LoginPage.btnSubmit.click()
			
			expect(await (await SecurePage.flashAlert).isExisting()).to.be.true
			expect(await (await SecurePage.flashAlert).getText()).contain(
        	'You logged into a secure area!')

			// Logout and verify success message
			await SecurePage.logout()
			expect(await (await LoginPage.flashAlert).isExisting()).to.be.true
			expect(await (await LoginPage.flashAlert).getText()).contain('You logged out of the secure area!')
    	})
})
