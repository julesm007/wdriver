const { $ } = require('@wdio/globals')
const Page = require('./page')

class DropdownPage extends Page {
    get dropdown1 () {
        return $('#dropdown')
    }

    get option1 () {
        return $('#dropdown > option:nth-child(2)')
    }

    get option2 () {
        return $('#dropdown > option:nth-child(3)')
    }

    open () {
        return super.open('dropdown')
    }
}

module.exports = new DropdownPage()