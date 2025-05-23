// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selecionarProduto', (index) => {
    cy.get('.product-image-wrapper').eq(index).within(() => {
        cy.contains('Add to cart').click();
    });
    cy.contains('Continue Shopping').click();
})

Cypress.Commands.add('preencherCadastro', (nome, sobrenome, email) => {
    cy.get('input[data-qa="signup-name"]').type(`${nome} ${sobrenome}`);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, endereco, estado, cidade, cep, telefone) => {
    cy.get('#days').select('10');
    cy.get('#months').select('June');
    cy.get('#years').select('1993');

    // Endereço
    cy.get('[data-qa="first_name"]').type(nome);
    cy.get('[data-qa="last_name"]').type(sobrenome);
    cy.get('[data-qa="address"]').type(endereco);
    cy.get('#country').select('United States');
    cy.get('[data-qa="state"]').type(estado);
    cy.get('[data-qa="city"]').type(cidade);
    cy.get('[data-qa="zipcode"]').type(cep);
    cy.get('[data-qa="mobile_number"]').type(telefone);
    cy.get('button[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click()
})

Cypress.Commands.add('finalizarPedido', (nome, sobrenome) => {
    // Redirecionado ao carrinho automaticamente
    cy.contains('Cart').click();
    cy.contains('Proceed To Checkout').click();

    // Confirma endereço e adiciona comentário
    cy.get('textarea[name="message"]').type('Por favor, entregar no período da tarde.');
    cy.contains('Place Order').click();

    // Preenche dados do cartão fictício
    cy.get('input[name="name_on_card"]').type(`${nome} ${sobrenome}`);
    cy.get('input[name="card_number"]').type('4111111111111111');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2027');
    cy.contains('Pay and Confirm Order').click()
})