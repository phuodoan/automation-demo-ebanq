import iLoginPage from "../interfaces/iloginpage";

Cypress.Commands.add('login',(usename, password)=>{
     //enter email
     cy.get(iLoginPage.txtEmail).clear().type(usename)
     //enter password
     cy.get(iLoginPage.txtPassword).clear().type(password)
     //click Submit button
     cy.get(iLoginPage.btnSubmit).click()
})