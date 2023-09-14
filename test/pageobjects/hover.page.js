const { $ } = require('@wdio/globals')
const Page = require('./page')

class HoverPage extends Page {
    get user1Hover () {
        return $('//div[2]/div/div/div[1]')
    }

    get user2Hover () {
        return $('//div[2]/div/div/div[2]')
    }

    get user3Hover () {
        return $('//div[2]/div/div/div[3]')
    }

    get user1ProfileLink () {
        return $('//div[2]/div/div/div[1]/div/a')
    }

    get user2ProfileLink () {
        return $('//div[2]/div/div/div[2]/div/a')
    }

    get user3ProfileLink () {
        return $('//div[2]/div/div/div[3]/div/a')
    }

    get bodyContent () {
        return $('body > h1:nth-child(1)')
    }

    open () {
        return super.open('hovers')
    }
}

module.exports = new HoverPage()