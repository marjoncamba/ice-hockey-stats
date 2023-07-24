import { GameCard } from "@/components/game-card";

export default function Home() {
  return (
    <>
      <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <GameCard awayTeamId="BIF" homeTeamId="FHC" gameId={12771} />
          <GameCard awayTeamId="BIF" homeTeamId="FBK" gameId={12915} />
          <GameCard awayTeamId="FHC" homeTeamId="IKO" gameId={12939} />
        </div>
      </section>
    </>
  );
}
