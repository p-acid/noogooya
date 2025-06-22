import { KBO_ROSTERS } from "@/consts/kbo-rosters";
import { GuessResultProvider } from "./src/contexts/guess-result-context";
import { GameDescription } from "./src/ui/game-description";
import { GuessForm } from "./src/ui/guess-form";
import { GuessResultList } from "./src/ui/guess-result-list";
import { getRandomInt } from "@/utils/get-random-int";

export default function Home() {
  const answer = KBO_ROSTERS[getRandomInt(0, KBO_ROSTERS.length - 1)];

  return (
    <main className="flex flex-col gap-10 pt-12">
      <GuessResultProvider>
        <GuessForm />
        <GuessResultList answer={answer} />
      </GuessResultProvider>
      <GameDescription />
    </main>
  );
}
