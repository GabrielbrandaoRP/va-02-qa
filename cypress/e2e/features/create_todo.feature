Feature: Criar tarefas no TodoMVC

  Como usuário do sistema TodoMVC
  Quero adicionar novas tarefas
  Para organizar minha lista de afazeres

  Scenario: Criar uma nova tarefa com sucesso
    Given que estou na página do TodoMVC
    When eu digito "Comprar pão" no campo de nova tarefa
    And pressiono Enter
    Then a tarefa "Comprar pão" deve aparecer na lista

  Scenario: Tentar criar tarefa vazia (erro proposital)
    Given que estou na página do TodoMVC
    When eu pressiono Enter sem digitar nada
    Then nenhuma tarefa deve ser adicionada
