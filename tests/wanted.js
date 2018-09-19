var testData = require('../test-assets/testData')
var addValidWarrant = require('../test-assets/addValidWarrant')
var addInvalidWarrant = require('../test-assets/addInvalidWarrant')
var modifyWarrantValid = require('../test-assets/modifyWarrantValid')
var modifyWarrantInvalid = require('../test-assets/modifyWarrantInvalid')
var cancelWarrant = require('../test-assets/cancelWarrant')
var WantedQueries = ''

module.exports = {
    beforeEach: browser => {
        WantedQueries = browser.page.wantedTest();
        WantedQueries.navigate()

    },

    after: browser => {
        browser.end()
    },

    'Add warrant for Harry': browser => {
        testData.warrantInfo.forEach(test => {
            addValidWarrant(WantedQueries, test)
        });
        browser.refresh()
    },

    'Invalid entries': browser => {
        testData.invalidWarrantInfo.forEach(test => {
            addInvalidWarrant(WantedQueries, test)
        });
    },

    'Modify warrant (valid)': browser => {
        testData.modifyWarrantInfo.forEach(test => {
            modifyWarrantValid(WantedQueries, test)
        });
        browser.refresh()
    },

    'Modify warrant (invalid)': browser => {
        testData.invalidModifyInfo.forEach(test => {
            modifyWarrantInvalid(WantedQueries, test)
        });
    },

    'Cancel warrant': browser => {
        testData.cancelInfo.forEach(test => {
            cancelWarrant(WantedQueries, test)
        });
    },
}


