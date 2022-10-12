/// <reference types="cypress-xpath" />
import iLoginPage from "../interfaces/iloginpage";
import iHomePage from "../interfaces/ihomepage";

Cypress.Commands.add('login',(usename, password)=>{
     //enter email
     cy.xpath(iLoginPage.txtEmail).clear().type(usename, {timeout:100})
     //enter password
     cy.xpath(iLoginPage.txtPassword).clear().type(password, {timeout:100})
     //click Submit button
     cy.xpath(iLoginPage.btnSubmit).click()
     // check homapge is shown
     cy.xpath(iHomePage.linkProfilePage).should("exist")
})