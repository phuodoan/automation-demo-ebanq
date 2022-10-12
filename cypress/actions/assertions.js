/// <reference types="cypress-xpath" />

Cypress.Commands.add('verifyConfirmationTransferInfo', (fullName, amount, description) => {
    cy.xpath('//app-confirmation-data-view').within(() => {
        //header info
        cy.xpath('.//div.sub-heading').should("contain.text", "Transfer Details")
        //account name
        cy.xpath(`//span[@title="${fullName}"]`).should("be.visible")
        //amount transfer
        cy.xpath(`//span[@title="${amount} EUR"]`).should("be.visible")
        //description transfer
        cy.contains(`${description} ${amount}`).should("be.visible")
    })
})

Cypress.Commands.add('verifyTransactionSuccess', (msgSuccess) => {
    cy.xpath('//app-transfer-modal-success').within(() => {
        //success icon
        cy.xpath('.//div[contains(@class, "icon success")]').should('be.visible')
        //success message
        cy.xpath(`.//div[text()[contains(.,"${msgSuccess}")]]`).should('be.visible')
    })
})