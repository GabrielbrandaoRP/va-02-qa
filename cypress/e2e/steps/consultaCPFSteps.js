/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que eu estou na pagina de consulta de CPF da Receita Federal', () => {
    cy.visit('https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp');
});

When('eu insiro o CPF e a data de nascimento', () => {
    cy.log('Inserindo o CPF e a data de nascimento');
    cy.get('[data-test="cpf"]').type(Cypress.env('cpf'));
    cy.get('[data-test="birthday"]').type(Cypress.env('birthday'));
    cy.get('#anchor-tc').check({ force: true });
});

And('clico no botão de Consultar', () => {
    cy.log('Clicando no botão de login');
    cy.get('[data-test="login-button"]').click();
});

Then('eu devo ser redirecionado para a página de Exibicao da consulta', () => {
    cy.log('Verificando se foi redirecionado para a página de Exibica da consulta');
    cy.get('[data-test="title"]').should('be.visible');
});