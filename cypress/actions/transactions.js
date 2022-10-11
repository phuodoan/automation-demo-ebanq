import iTransaction from "../interfaces/itransactions"

Cypress.Commands.add("selectAccountName", (fullName) => {
  //click on select user drop down list
  cy.get(iTransaction.frmSelectUser).click().within(()=>{
    cy.contains(fullName).first().click().wait(500)// wait to load the debit and credit info for this account
  })
})

//select DebitCard
Cypress.Commands.add("selectDebitCard", (debitFrom) => {
  //click on the debit card drop down list
  cy.get(iTransaction.lstAccountFrom).click({ timeout: 50 }).then(() => {
    //select the debit card that user want to select
    cy.contains(debitFrom).first().click().wait(100)
  })
})

//select CreditCard
Cypress.Commands.add("selectCrediCard", (crebitTo) => {
  //click on the credit card dropdown list
  cy.get(iTransaction.lstAccountTo).click({ timeout: 50 }).then(() => {
    //select the credit card that user want to select
    cy.contains(crebitTo).first().click().wait(100)
  })
})

//Enter Amount transfer
Cypress.Commands.add("enterAmount", (amount) => {
  cy.get(iTransaction.txtAmount).clear().type(amount)
})

//Enter the Description
Cypress.Commands.add("enterDescription", (description, amount) => {
  cy.get(iTransaction.txtDescription).clear().type(`${description} ${amount}`)
})

//Click on the Submit button
Cypress.Commands.add("clickSubmitButton", () => {
  cy.get(iTransaction.btnSubmit).click()
})