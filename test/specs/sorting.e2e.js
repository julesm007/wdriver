const { expect } = require('chai')

const SortingPage = require('../pageobjects/sorting.page')

// Function that compares two arrays
function arrayCompare (array1, array2) {
	return array1.every((value, index) => value == array2[index])
}

// JS sort ASC for validation
function jsArraySortASC (array1) {
	return array1.sort(function(a, b) { return a - b })
}

// JS sort DESC for validation
function jsArraySortDESC (array1) {
	return array1.reverse(function(a, b) { return a - b })
}

describe('Sort table by each provided Header field and check Action options', () => {
    it.skip('Sort by Last Name Descending then Ascending', async () => {
		const header = 'Last Name'
		SortingPage.open()

		// Sort ASC
		await SortingPage.lastNameHeader.click()
		const sortedASC = SortingPage.lastNameSorted

		// Sort DESC
		await SortingPage.lastNameHeader.click()
		const sortedDESC = SortingPage.lastNameSorted

		// Verify sort order by comparing JS-sort vs. web app table sort in UI
		// Asecending
		expect(arrayCompare(sortedASC, jsArraySortASC(sortedASC))).to.be.true
		// Descending
		expect(arrayCompare(sortedDESC, jsArraySortDESC(sortedDESC))).to.be.true
    })

	// Would continue with each header that is sortable, following same flow as the above
	// ...
	// ...
})
