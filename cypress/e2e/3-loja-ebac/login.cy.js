/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    
    it('Deve realizar o login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('mateus.teste@teste.com.br')
        cy.get('#password').type('testeebac123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, mateus.teste (não é mateus.teste? Sair)')

    })
    
})