/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve realizar o login', () => {
        cy.get('#username').type('mateus.teste@teste.com.br')
        cy.get('#password').type('testeebac123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, mateus.teste (não é mateus.teste? Sair)')

    });

    it('Deve exibir mensagem de erro ao errar usuário', () => {
        cy.get('#username').type('mateus.testando@teste.com.br')
        cy.get('#password').type('testeebac123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir erro na senha', () => {
        cy.get('#username').type('mateus.teste@teste.com.br')
        cy.get('#password').type('testandoebac123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail')
    });
    
})