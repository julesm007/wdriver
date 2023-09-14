const { expect } = require('chai')

const DropdownPage = require('../pageobjects/dropdown.page')

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1
}

describe('Dropdown tests', () => {
    it('should select a random option from a select', async () => {
        const randomSelection = getRandomNumber()

        await DropdownPage.open()
        await DropdownPage.dropdown1.click()
        await DropdownPage.dropdown1.selectByIndex(randomSelection)

        if (randomSelection === 1) { 
            expect(await (await DropdownPage.option1).isSelected()).to.be.true 
        } else if (randomSelection === 2) {
            expect(await (await DropdownPage.option2).isSelected()).to.be.true 
        }
    })
})
