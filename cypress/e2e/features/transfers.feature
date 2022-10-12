Feature: Transfers between two accounts

    Feature transfer will work depending on the user credentials.

    Scenario: Success Transfer between two account numbers
        Given A web browser is at the bank-demo login page
        When The user logged in with the username "Bank-Admin" and password "Demo-Access1"
        And The user goes to the transfer between accounts page
        And The user clicks on the dropdown and selects the account name "Mary Johnson" 
        And The user clicks on the debit from list and selects the account number "EBQ12123423456"
        And The user clicks on the credit to list and selects the account number "EBQ11123412345"
        And The user enters the amount "100"
        And The user enters the description text "Admin user triggered auto transfer with amount 100" 
        And The user clicks on the continue button
        And The user clicks on the confirm button
        Then A success message "Transfer has been executed successfully."