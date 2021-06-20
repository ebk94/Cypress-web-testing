/// <reference types="cypress"/>

it('search customers', function(){
	cy.visit('https://admin-demo.nopcommerce.com/')
	cy.get('#Email').clear()
	cy.get('#Email').type('admin@yourstore.com')
	cy.get('#Password').clear()
	cy.get('#Password').type('admin')
	cy.get('.button-1').click()
	cy.get('.fa').click()
	cy.get(':nth-child(4) > [href="#"] > p').click()
	cy.get('.menu-open > .nav > :nth-child(1) > .nav-link > p').click()
	cy.get('#SearchEmail').type('brenda_lindgren@nopCommerce.com')
	cy.get('#search-customers').click()

})

// to run: npx cypress open