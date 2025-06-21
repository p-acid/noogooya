import { BaseballPlayer } from "@/consts/kbo-rosters";
import { cn } from "@/utils/cn";
import { getGuessResults } from "@/utils/get-guess-result";

interface GuessResultProps {
  guess: BaseballPlayer;
  answer: BaseballPlayer;
}

export function GuessResult({ guess, answer }: GuessResultProps) {
  const infoList = getGuessResults(guess, answer);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <p className="text-center text-base font-bold">{guess.name}</p>
      <div className="flex gap-3">
        {infoList.map(({ label, value, isCorrect }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <div
              className={cn(
                "text-base-content flex size-16 items-center justify-center rounded-2xl bg-zinc-500 text-center text-base leading-4.5 font-bold tracking-tighter whitespace-pre",
                {
                  "bg-success": isCorrect,
                },
              )}
            >
              {value}
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
