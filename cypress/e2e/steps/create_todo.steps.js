import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página do TodoMVC", () => {
  cy.visit("https://todomvc.com/examples/react/");
});

When("eu digito {string} no campo de nova tarefa", (tarefa) => {
  cy.get(".new-todo").type(tarefa);
});

When("pressiono Enter", () => {
  cy.get(".new-todo").type("{enter}");
});

Then("a tarefa {string} deve aparecer na lista", (tarefa) => {
  cy.get(".todo-list li").should("contain.text", tarefa);
});

When("eu pressiono Enter sem digitar nada", () => {
  cy.get(".new-todo").type("{enter}");
});

Then("nenhuma tarefa deve ser adicionada", () => {
  cy.get(".todo-list li").should("have.length", 0);
});
