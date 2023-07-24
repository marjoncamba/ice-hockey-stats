import { GameCard } from "@/components/game-card";

describe("game-card.cy.tsx", () => {
  const homeTeamId = "FHC";
  const awayTeamId = "BIF";
  const gameId = 12771;

  it("shoud have correct href value", () => {
    cy.mount(
      <GameCard
        awayTeamId={awayTeamId}
        homeTeamId={homeTeamId}
        gameId={gameId}
      />
    );
    cy.get('[data-cy="gameCard"]')
      .should("have.attr", "href")
      .then((href) => expect(href).eq(`/games/${gameId}`));
  });

  it("should display home team logo", () => {
    cy.mount(
      <GameCard
        awayTeamId={awayTeamId}
        homeTeamId={homeTeamId}
        gameId={gameId}
      />
    );
    cy.get('[data-cy="homeTeamLogo"]')
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
  });

  it("should display away team logo", () => {
    cy.mount(
      <GameCard
        awayTeamId={awayTeamId}
        homeTeamId={homeTeamId}
        gameId={gameId}
      />
    );
    cy.get('[data-cy="homeTeamLogo"]')
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
  });

  it("should have VS text", () => {
    cy.mount(
      <GameCard
        awayTeamId={awayTeamId}
        homeTeamId={homeTeamId}
        gameId={gameId}
      />
    );
    cy.get('[data-cy="versus-text"]').contains("VS");
  });
});
