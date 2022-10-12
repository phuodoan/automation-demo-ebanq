/// <reference types="cypress-xpath" />
import iTransaction from "../interfaces/itransactions"

Cypress.Commands.add("selectAccountName", (fullName) => {
  //click on select user drop down list
  cy.xpath(iTransaction.frmSelectUser).click().within(() => {
    cy.xpath(`.//span[text()[contains(.,"${fullName}")]]`).click().wait(500)// wait to load the debit and credit info for this account
  })
})

//select DebitCard
Cypress.Commands.add("selectDebitCard", (debitFrom) => {
  //click on the debit card drop down list
  cy.xpath(iTransaction.lstAccountFrom).click({ timeout: 50 }).then(() => {
    //select the debit card that user want to select
    cy.xpath(`.//span[text()[contains(.,"${debitFrom}")]]`).first().click()
  })
})

//select CreditCard
Cypress.Commands.add("selectCrediCard", (crebitTo) => {
  //click on the credit card dropdown list
  cy.xpath(iTransaction.lstAccountTo).click({ timeout: 50 }).then(() => {
    //select the credit card that user want to select
    cy.xpath(`.//span[text()[contains(.,"${crebitTo}")]]`).first().click()
  })
})

//Enter Amount transfer
Cypress.Commands.add("enterAmount", (amount) => {
  cy.xpath(iTransaction.txtAmount).clear().type(amount)
})

//Enter the Description
Cypress.Commands.add("enterDescription", (description) => {
  cy.xpath(iTransaction.txtDescription).clear().type(description)
})

//Click on the Submit button
Cypress.Commands.add("clickSubmitButton", () => {
  cy.xpath(iTransaction.btnSubmit).click()
})