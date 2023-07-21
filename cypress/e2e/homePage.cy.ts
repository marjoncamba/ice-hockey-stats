describe("Home Page", () => {
  it("contains Hello World", () => {
    cy.visit("http://localhost:3000");

    cy.get("h1").contains("Hello World");
  });
});
