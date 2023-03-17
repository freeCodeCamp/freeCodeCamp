describe('Add Portfolio Item', () => {
  before(() => {
    cy.login();
  });

  it('should be possible to add a portfolio item', () => {
    cy.visit('/settings');
    cy.contains('Add a new portfolio Item').click();

    cy.get('.help-block').contains('A title is required');
    cy.get('[id$="title"]').type('This is a portfolio item');
    cy.get('button').filter(':disabled').should('have.length.gt', 0);

    cy.get('[id$="url"]').type('This is a portfolio item');
    cy.get('.help-block').contains('URL must start with http or https');
    cy.get('[id$="url"]').clear().type('http://google.com');

    cy.get('[id$="image"]').type('hello');
    cy.get('.help-block').contains('URL must start with http or https');
    cy.get('[id$="image"]')
      .clear()
      .type(
        'https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
      );

    cy.get('[id$="description"]').type(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus velit, vel accumsan lorem facilisis ac. Maecenas vitae ultrices dolor. Fusce in lobortis arcu, vel congue risus. Sed id neque nec nibh hendrerit bibendum. Integer venenatie.'
    );
    cy.get('.help-block').contains(
      'There is a maximum limit of 288 characters, you have 40 left'
    );

    cy.get('[id$="description"]').type(
      'Lorem ipsum dolor sit amet, consecteturs.'
    );
    cy.get('.help-block').contains(
      'There is a maximum limit of 288 characters, you have 0 left'
    );
    cy.get('button').filter(':disabled').should('have.length.gt', 0);

    cy.get('[id$="description"]').type('{backspace}');
    cy.get('button[type=submit]').contains('Save this portfolio item').click();
  });
});
