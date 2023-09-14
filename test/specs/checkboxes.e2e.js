const { expect } = require('chai')

const CheckboxPage = require('../pageobjects/checkbox.page')

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1
}

function isEven(num) {
    if (num % 2 === 0) { return true }
}

describe('Checking checkboxes a random number of times', () => {
    it('should verify initial state of checkboxes', async () => {
        await CheckboxPage.open()

        // Checkbox 1 should be unchecked by default
        // Checkbox 2 should be checked by default
        expect(await (await CheckboxPage.checkbox1).isSelected()).to.be.false
        expect(await (await CheckboxPage.checkbox2).isSelected()).to.be.true
    })

    it('should click two checkboxes a random amount of time then verify checked states', async () => {
        const checkbox1RandomNum = getRandomNumber()
        const checkbox2RandomNum = getRandomNumber()

        await CheckboxPage.open()

        for (i=0; i<checkbox1RandomNum; i++) {
            await CheckboxPage.checkbox1.click()
        }

        for (i=0; i<checkbox2RandomNum; i++) {
            await CheckboxPage.checkbox2.click()
        }
        
        // Check final state of checkboxes
        // Checkbox 1
        if (isEven(checkbox1RandomNum)) {
            expect(await (await CheckboxPage.checkbox1).isSelected()).to.be.false
        } else {
            expect(await (await CheckboxPage.checkbox1).isSelected()).to.be.true
        }

        // Checkbox 2
        if (isEven(checkbox2RandomNum)) {
            expect(await (await CheckboxPage.checkbox2).isSelected()).to.be.true
        } else {
            expect(await (await CheckboxPage.checkbox2).isSelected()).to.be.false
        }
    })
})
