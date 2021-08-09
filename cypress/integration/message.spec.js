describe('Note ', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3003')
    cy.contains('Welcome')
  })
  it('messages can be opened', function () {
    cy.visit('http://localhost:3003')
    cy.contains('messages').click()
    cy.contains('Messages')
  })
})