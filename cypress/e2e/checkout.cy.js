/// <reference types = "cypress" />

import { gerarUsuarioFaker } from '../support/utils/usuarioFaker';

describe('Fluxo completo de compra na Automation Exercise', () => {
  const usuario = gerarUsuarioFaker();

  beforeEach(() => {
    cy.visit('/')
  });

  it('Executar todo o fluxo de compra -- Caminho Feliz', () => {
    cy.contains('Home').should('exist');
    for (let i = 0; i < 3; i++) {
      cy.selecionarProduto(i);
    }

    cy.contains('Cart').click();
    cy.get('.breadcrumb').should('contain', 'Shopping Cart');

    cy.contains('Proceed To Checkout').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.preencherCadastro(usuario.nome, usuario.sobrenome, usuario.email);

    cy.get('#id_gender1').check();
    cy.get('#password').type(usuario.senha, { log: false });

    cy.detalhesConta(usuario.nome, usuario.sobrenome, usuario.endereco, usuario.estado, usuario.cidade,
      usuario.cep, usuario.telefone);

    cy.finalizarPedido(usuario.nome, usuario.sobrenome);
    cy.get('.col-sm-9 > p').should('contain', 'Congratulations! Your order has been confirmed!')

  });

});