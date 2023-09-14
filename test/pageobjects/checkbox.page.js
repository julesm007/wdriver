const { $ } = require('@wdio/globals')
const Page = require('./page')

class CheckboxPage extends Page {
    get checkbox1 () {
        return $('#checkboxes > input:nth-child(1)')
    }

    get checkbox2 () {
        return $('#checkboxes > input:nth-child(3)')
    }

    open () {
        return super.open('checkboxes')
    }
}

module.exports = new CheckboxPage()