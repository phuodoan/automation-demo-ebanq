import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Given("A web browser is at the bank-demo login page",()=>{
    cy.viewport(1024,768)
    cy.visit('/log-in')
  })
  When("The user logged in with the username {string} and password {string}",(username, password)=>{
    cy.login(username, password)
  })
  When("The user goes to the transfer between accounts page",()=>{
    cy.visit('/transfer/admin/transfer-between-accounts')
  })
  When("The user clicks on the dropdown and selects the account name {string}",(fullName)=>{
    cy.selectAccountName(fullName)
  })
  When("The user clicks on the debit from list and selects the account number {string}",(debitFrom)=>{
    cy.selectDebitCard(debitFrom)
  })
  When("The user clicks on the credit to list and selects the account number {string}",(crebitTo)=>{
    cy.selectCrediCard(crebitTo)
  })
  When("The user enters the amount {string}",(amount)=>{
    cy.enterAmount(amount)
  })
  When("The user enters the description text {string}",(description)=>{
    cy.enterDescription(description)
  })
  When("The user clicks on the continue button",()=>{
    cy.clickSubmitButton()
  })
  When("The user clicks on the confirm button",()=>{
    cy.clickSubmitButton()
  })
  Then("A success message {string}",(msgSuccess)=>{
    cy.verifyTransactionSuccess(msgSuccess)
  })