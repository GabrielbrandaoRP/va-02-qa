import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que estou na página de login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("digito um usuário e senha cadastrados", () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.orangehrm-login-button').click()
})

Then("devo realizar o login com sucesso", () => {
    cy.contains('h6', 'Dashboard').should('be.visible')
    cy.log("✔️ Login concluído com sucesso!")
})


When("digito um usuário correto e uma senha incorreta", () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('GodOfWarGOAT')
    cy.get('.orangehrm-login-button').click()
})

Then("devo ver uma mensagem de erro de credenciais inválidas", () => {
    cy.contains('Invalid credentials').should('be.visible')
})


When("digito um usuário inexistente e uma senha qualquer", () => {
    cy.get('input[name="username"]').type('Hexatombe')
    cy.get('input[name="password"]').type('OrdemParanormal')
    cy.get('.orangehrm-login-button').click()
})

Then("devo ver uma mensagem informando que o usuário não existe", () => {
    cy.contains('Invalid credentials').should('be.visible')
})
