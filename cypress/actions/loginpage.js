import iLoginPage from "../interfaces/iloginpage";
import iHomePage from "../interfaces/ihomepage";

Cypress.Commands.add('login',(usename, password)=>{
     //enter email
     cy.get(iLoginPage.txtEmail).clear().type(usename, {timeout:100})
     //enter password
     cy.get(iLoginPage.txtPassword).clear().type(password, {timeout:100})
     //click Submit button
     cy.get(iLoginPage.btnSubmit).click()
     // check homapge is shown
     cy.get(iHomePage.linkProfilePage).should("exist")
})