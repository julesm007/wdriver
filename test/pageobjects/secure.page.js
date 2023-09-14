const { $ } = require('@wdio/globals')
const Page = require('./page')

class SecurePage extends Page {
    get flashAlert () {
        return $('#flash')
    }

    get btnLogout () {
        return $('aria/Logout')
    }

    async logout () {
        await this.btnLogout.click()
    }

    get flashAlert () {
        return $('#flash')
    }
}

module.exports = new SecurePage()
