/* global cy expect */

const locations = {
  donate: '/donate'
};

describe('Donation page', function() {
  it('renders', function() {
    cy.visit(locations.donate);
    cy.contains('h1', 'Become a Supporter');
  });

  it('has 3 strip buttons and one paypal button', function() {
    cy.document().then(document => {
      const stripeButtons = document.querySelectorAll(`#confirm-donation-btn`);
      expect(stripeButtons).to.have.length(3);
      const PaypalButtons = document.querySelectorAll(`.paypal-buttons`);
      expect(PaypalButtons).to.have.length(1);
    });
  });
});
