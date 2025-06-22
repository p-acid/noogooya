"use client";

import { BaseballPlayer } from "@/consts/kbo-rosters";
import { GuessResult } from "./guess-result";
import { useGuessResult } from "../contexts/guess-result-context";

interface GuessResultListProps {
  answer: BaseballPlayer;
}

export function GuessResultList({ answer }: GuessResultListProps) {
  const { list } = useGuessResult();

  return (
    <>
      {[...list].reverse().map((guess) => (
        <GuessResult
          key={Object.values(guess).join("-")}
          guess={guess}
          answer={answer}
        />
      ))}
    </>
  );
}
