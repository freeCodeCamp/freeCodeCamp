describe('Header to heading element redirect', () => {
  const basePath = '/learn/responsive-web-design/applied-visual-design';

  it(`should redirect from ${basePath}/adjust-the-size-of-a-header-versus-a-paragraph-tag to ${basePath}/adjust-the-size-of-a-heading-element-versus-a-paragraph-element`, () => {
    cy.visit(`${basePath}/adjust-the-size-of-a-header-versus-a-paragraph-tag`);

    cy.location().should(loc => {
      expect(loc.pathname).to.eq(
        `${basePath}/adjust-the-size-of-a-heading-element-versus-a-paragraph-element`
      );
    });
  });
});
