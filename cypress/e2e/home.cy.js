// cypress/integration/headerLinks.spec.js

describe("Testing Home Page Links", () => {
  it("should visit the home page and check the 'Products' page link", () => {
    // Visit the home page
    cy.visit("http://localhost:3000/");

    // Find the "Products" link in the header and click it
    cy.get('a[href="/products"]').first().should("contain", "Products").click();

    // Verify that the URL changes to "/products" and the correct page is displayed
    cy.url().should("include", "/products");
  });
  it("should visit the home page and check the 'Contact' page link", () => {
    // Visit the home page
    cy.visit("http://localhost:3000/");

    // Find the "Products" link in the header and click it
    cy.get('a[href="/contact"]').first().should("contain", "Contact").click();

    // Verify that the URL changes to "/products" and the correct page is displayed
    cy.url().should("include", "/contact");
  });
  it("should visit the home page and click the 'View All Charlotte Cars' link", () => {
    // Visit the home page
    cy.visit("http://localhost:3000/");

    // Find the "View All Charlotte Cars" link and click it
    cy.get("article.car-details-heading")
      .contains("View All Charlotte Cars")
      .click();

    // Verify that the URL changes to "/products" and the correct page is displayed
    cy.url().should("include", "/products");
  });
  it("should visit the home page and click the slider button once", () => {
    // Visit the home page
    cy.visit("http://localhost:3000/");

    // Find the slider button and click it
    cy.get(".react-multiple-carousel__arrow").click();
  });
});
