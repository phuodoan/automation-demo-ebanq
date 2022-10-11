import iHomePage from "../interfaces/ihomepage";

Cypress.Commands.add('verifyLoginSuccess',()=>{
    //check the profile page is exist
    cy.get(iHomePage.linkProfilePage).should("exist")
})

Cypress.Commands.add('verifyConfirmationTransferInfo',(fullName, amount, description)=>{
    cy.get('app-confirmation-data-view').within(()=>{
        //header info
        cy.get('div.sub-heading').should("contain.text","Transfer Details")
        //account name
        cy.get(`span[title="${fullName}"]`).should("be.visible")
        //amount transfer
        cy.get(`span[title="${amount} EUR"]`).should("be.visible")
        //description transfer
        cy.contains(`${description} ${amount}`).should("be.visible")
    })
})

Cypress.Commands.add('verifyTransactionSuccess', (msgSuccess)=>{
    cy.get('app-transfer-modal-success').within(()=>{
        //success icon
         cy.get('div.icon.success').should('be.visible')
         //success message
         cy.contains(msgSuccess).should("be.visible")
       })
})