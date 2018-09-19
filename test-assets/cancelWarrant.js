module.exports = (pageObjects, entries) => {
    pageObjects
        .click('.bm-burger-button')
        .waitForElementVisible('p[name="cancelOption"]', 1000)
        .click('p[name="cancelOption"]')
        .setValue('@Warrant', entries.Warrant)
        .setValue('@Reason', entries.Reason)
        .setValue('@Cancel', entries.Cancel)
        .click('@submitBtn')
    pageObjects
        .expect.element('@results').text.to.contain(entries.results)
}