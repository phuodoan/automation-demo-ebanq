const username = "Bank-Admin";
const password = "Demo-Access1"
// seems there is a bug that the drop down can filter by full name "Mary Johson"
//get transfer info from a json file
const data= require("../datasets/transfer-info.json")
const msgSuccess= "Transfer has been executed successfully. "

describe('Transfers Between 2 Accounts', () => {
  it('User can transfer successfull between 2 accounts on the desktop view', {
    viewportHeight: 800,
    viewportWidth: 1280,
  }, () => {
    //1. log in to web application 
    cy.visit('/log-in')
    cy.login(username, password)
    //check the homepage is open
    cy.verifyLoginSuccess()

    //2. navigate to the transfer betweens 2 accounts page
    cy.visit('/transfer/admin/transfer-between-accounts')

    //3. click on the dropdown under `Select the user`
    //4. select the account (Mary Johson)
    cy.selectAccountName(data["tranfer-accounts"][0].fullName)

    //5. click on `Debit from`
    //6.select an account number
    cy.selectDebitCard(data["tranfer-accounts"][0].debitFrom)

    //7.Click on 'Debit To'
    //8.Select an account number
    cy.selectCrediCard(data["tranfer-accounts"][0].crebitTo)

    //9.Input amount of money need to transfer
    cy.enterAmount(data["tranfer-accounts"][0].amount)

    //10. Input the description
    cy.enterDescription(data["tranfer-accounts"][0].description, data["tranfer-accounts"][0].amount)
    
    //11. Click on Continute button
    cy.clickSubmitButton()
    //verfy the transfer detail
    cy.verifyConfirmationTransferInfo(data["tranfer-accounts"][0].fullName, data["tranfer-accounts"][0].amount,
                                      data["tranfer-accounts"][0].description )
   
     //12. click on Confirm button 
     cy.clickSubmitButton()
    
     //13.Verify the success message is present
     cy.verifyTransactionSuccess(msgSuccess)
  })
})
