# 🧪 Projeto de Testes Automatizados - Fluxo de Compra (Automation Exercise)

Este projeto tem como objetivo a automação de testes do fluxo completo de compra no site [Automation Exercise](https://automationexercise.com), utilizando o framework **Cypress** com apoio da biblioteca **Faker** para geração dinâmica de dados.

---

## 🚀 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/)
- JavaScript (ES6+)
- Node.js

---

## 📂 Estrutura do Projeto
projeto-checkout-cypress/
│
├── cypress/
│ ├── e2e/
│ │ └── checkout.cy.js # Teste principal de fluxo de compra
│ ├── support/
│ │ ├── commands.js # Comandos customizados do Cypress
│ │ └── utils/
│ │ └── usuarioFaker.js # Função utilitária de geração de usuários com Faker
│
├── cypress.config.js # Configuração do Cypress (inclui baseUrl)
├── package.json # Dependências e scripts do projeto
└── README.md # Documentação do projeto (este arquivo)
---

## 🧠 Funcionalidades Testadas

- Acesso ao site e verificação da home
- Seleção e adição de 3 produtos ao carrinho
- Acesso ao carrinho e início do checkout
- Cadastro de novo usuário com dados dinâmicos
- Preenchimento de dados de entrega e pagamento
- Finalização da compra e validação de sucesso

---

## 🔧 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/lucasosses/projeto-checkout-cypress
cd projeto-checkout-cypress

---

### 2. Instale as dependências

npm install

### 3. Execute os testes

npx cypress open     # Para abrir o Test Runner interativo
npx cypress run      # Para executar os testes via terminal (modo headless)

## 🧪 Exemplo de comando customizado

    Cypress.Commands.add('selecionarProduto', (index) => {
        cy.get('.product-image-wrapper').eq(index).within(() => {
            cy.contains('Add to cart').click();
        });
        cy.contains('Continue Shopping').click();
    });

## 📌 Observações

    O projeto usa dados gerados automaticamente a cada execução (com Faker).

    Os testes focam em um cenário feliz (happy path).

    Futuramente será implementado o padrão Page Object Model (POM) para maior escalabilidade.

## 🧑‍💻 Autor

Desenvolvido com dedicação por Lucas Osses
Em transição de carreira para QA | Estudando automação com Cypress
📃 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
