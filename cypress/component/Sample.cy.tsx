import Sample from "@/components/Sample";

describe("Sample.cy.tsx", () => {
  it("renders", () => {
    cy.mount(<Sample />);
  });
});
