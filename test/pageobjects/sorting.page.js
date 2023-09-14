const { $ } = require('@wdio/globals')
const Page = require('./page')

class SortingPage extends Page {
    // page elements
    get lastNameHeader () {
        return $('#table1 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1) > span:nth-child(1)')
    }

    get lastNameSorted () {
        const headers = []
        const expectedLength = 4
        let i
        for (i=1; i<=expectedLength; i++) {
            headers.push(browser.$(`//table[@id="table1"]/tbody/tr[${i}]/td[1]/text()`))
        }
        
        return headers
    }

    open () {
        return super.open('tables')
    }
}

module.exports = new SortingPage()