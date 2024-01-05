describe('Add Portfolio Item', () => {
  beforeEach(() => {
    cy.task('seed');
    cy.login();
  });

  it('should be possible to add a portfolio item', () => {
    cy.visit('/settings');
    cy.get('[data-cy="add-portfolio"]')
      .contains('Add a new portfolio Item')
      .click();

    cy.get('[data-cy="validation-message"]').contains('A title is required');
    cy.get('[data-cy="portfolio-title"]').type('This is a portfolio item');
    cy.get('button')
      .contains('Save this portfolio item')
      .should('not.be.disabled');

    cy.get('[data-cy="portfolio-url"]').type('This is a portfolio item');
    cy.get('[data-cy="validation-message"]').contains(
      'URL must start with http or https'
    );
    cy.get('[data-cy="portfolio-url"]').clear().type('http://google.com');

    cy.get('[data-cy="portfolio-image"]').type('hello');
    cy.get('[data-cy="validation-message"]').contains(
      'URL must start with http or https'
    );
    cy.get('[data-cy="portfolio-image"]')
      .clear()
      .type(
        'https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
      );

    cy.get('[data-cy="portfolio-description"]').type(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus velit, vel accumsan lorem facilisis ac. Maecenas vitae ultrices dolor. Fusce in lobortis arcu, vel congue risus. Sed id neque nec nibh hendrerit bibendum. Integer venenatie.'
    );
    cy.get('[data-cy="validation-message"]').contains(
      'There is a maximum limit of 288 characters, you have 40 left'
    );

    cy.get('[data-cy="portfolio-description"]').type(
      'Lorem ipsum dolor sit amet, consecteturs.'
    );
    cy.get('[data-cy="validation-message"]').contains(
      'There is a maximum limit of 288 characters, you have 0 left'
    );

    cy.get('button')
      .contains('Save this portfolio item')
      .should('not.be.disabled');

    cy.get('[data-cy="portfolio-description"]').type('{backspace}');
    cy.get('button[type=submit]').contains('Save this portfolio item').click();
  });
});
