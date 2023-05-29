beforeEach(()=>{
  cy.visit('/')
})
describe('Login page', () => {
  it('Successfully login', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })
  it('logins error on empty login', () => {
    cy.login(null, 'test')
    cy.get('#mail').then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
  it('logins error on empty password', () => {
    cy.login('test@test.com', null)
    cy.get('#pass').then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })  
  })
})
describe('Add books activity', () => {
  beforeEach(() =>{
    cy.login('test@test.com', 'test')
  })
  it('Add new book', () => {
    cy.addNewBook('Hunters','Adventures','Brown and Smith')
    cy.contains('Hunters').should('be.visible')
  })
  it('Add new book favorite', () => {
    cy.addNewBook('Hunters 2','Adventures','Brown and Smith', true)
    cy.get('h4').click()
    cy.contains('Hunters 2').should('be.visible')
  })
  it('Add new book and then it becomes favorite', () => {
    
    cy.contains('Add to favorite').click()
    cy.get('h4').click()
    cy.contains('Hunters').should('be.visible')
    
  })
})
