describe('Invite new employee', () => {
  describe('when the user is a manager', () => {
    const manager = 'manager@example.com';
    const password = '123456';

    beforeEach(() => {
      cy.visit('/');
      cy.get('#email').type(manager);
      cy.get('#password').type(password);
      cy.get('[type=submit]').click();
      cy.contains('Convidar novo empregado').click();
    });

    it('Invite new employee option must be visible', () => {
      cy.contains('Convidar novo empregado').should('be.visible');
    });

    it('should display error message when trying to submit with empty input', () => {
      cy.get('button[aria-label="Enviar e-mail"]').click();
      cy.contains('Campo obrigatório').should('be.visible');
    });
  });

  describe('when the user is not a manager', () => {
    it('Invite new employee option must not exist', () => {
      cy.login('admin@example.com', '123456');
      cy.contains('Convidar novo empregado').should('not.exist');
    });
  });
});
