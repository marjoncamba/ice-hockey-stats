import { SiteHeader } from "@/components/site-header";

describe("site-header.cy.tsx", () => {
  it("should have Hello World", () => {
    const siteName: string = "Ice Hockey Recaps";
    cy.mount(<SiteHeader siteName={siteName} />);
    cy.get("h1").contains(siteName);
  });
});
