/// <reference types="cypress"/>

it('cypress test', function(){
	cy.visit('https://cypress.io')
	cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(2) > :nth-child(3) > .Link-sc-5cc5in-0').click()

})
