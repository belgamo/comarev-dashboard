describe('Password recovery flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText('Esqueceu sua senha?').click();
  });

  it('successfully sends an e-mail to reset the password', () => {
    cy.findByRole('textbox', { name: /endereço de email/i }).type(
      'admin@example.com'
    );

    cy.findByRole('button', { name: /recuperar senha/i }).click();

    const toastClass = '.Toastify__toast-body';
    cy.get(toastClass)
      .should('be.visible')
      .should('have.text', 'E-mail de recuperação enviado com sucesso!');
  });

  it('fails to send an e-mail to a non-registered user', () => {
    cy.findByRole('textbox', { name: /endereço de email/i }).type(
      'test@example.com'
    );

    cy.findByRole('button', { name: /recuperar senha/i }).click();

    const toastClass = '.Toastify__toast-body';

    cy.get(toastClass)
      .should('be.visible')
      .should(
        'have.text',
        'Não foi possível enviar o e-mail de recuperação, por favor tente novamente mais tarde!'
      );
  });
});
