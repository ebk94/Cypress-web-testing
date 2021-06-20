/// <reference types="cypress"/>

it('google test', function(){
	cy.visit("https://google.com")
	cy.get('.gLFyf').type('Скриптонит{enter}')
	//cy.wait(4000)
	//cy.contains('Видео').click()
})

it.only('login test', function(){
	cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
	cy.get('#txtUsername').type('Admin')
	cy.get('#txtPassword').type('admin123')
	cy.get('#btnLogin').click()
	cy.get('#menu_admin_viewAdminModule > b').click()
	//cy.get('#btnAdd').click()
	//cy.get('#systemUser_userType').select('Admin')
	//cy.get('#systemUser_employeeName_empName').type('Paul Collings')
	//cy.get('#systemUser_userName').type('batyr.kz')
	//cy.get('#systemUser_status').select('Enabled')
	//cy.get('#systemUser_password').type('admin123qweasdzxc')
	//cy.get('#systemUser_confirmPassword').type('admin123qweasdzxc')
	//cy.get('#btnSave').click()

	cy.get('#ohrmList_chkSelectRecord_69').click()
	cy.get('#btnDelete').click()
	cy.get('#dialogDeleteBtn').click()

})