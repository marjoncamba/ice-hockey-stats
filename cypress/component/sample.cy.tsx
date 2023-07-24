import { Sample } from "@/components/sample";

describe("Sample.cy.tsx", () => {
  it("should have Hello World", () => {
    cy.mount(<Sample />);
    cy.get("h5").contains("Hello World");
  });
});
