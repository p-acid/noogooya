import { BaseballPlayer } from "@/consts/kbo-rosters";
import { getKoreanAge } from "./get-korean-age";
import {
  PLAYER_HAND_LABELS,
  PLAYER_POSITION_LABELS,
} from "@/consts/player-attributes";

type GuessResult = {
  label: string;
  value: string;
  isCorrect: boolean;
};

function getUpDownIcon(guess: number, answer: number): string {
  if (guess > answer) return "▼";
  if (guess < answer) return "▲";
  return "";
}

export function getGuessResults(
  guess: BaseballPlayer,
  answer: BaseballPlayer,
): GuessResult[] {
  const guessAge = getKoreanAge(guess.birth);
  const answerAge = getKoreanAge(answer.birth);

  return [
    {
      label: "소속팀",
      value: guess.team.split(" ").join("\n"),
      isCorrect: guess.team === answer.team,
    },
    {
      label: "포지션",
      value: PLAYER_POSITION_LABELS[guess.position] ?? guess.position,
      isCorrect: guess.position === answer.position,
    },
    {
      label: "투타",
      value: PLAYER_HAND_LABELS[guess.hand] ?? guess.hand,
      isCorrect: guess.hand === answer.hand,
    },
    {
      label: "등번호",
      value: `#${guess.backNumber}${
        guess.backNumber !== answer.backNumber
          ? ` ${getUpDownIcon(Number(guess.backNumber), Number(answer.backNumber))}`
          : ""
      }`,
      isCorrect: guess.backNumber === answer.backNumber,
    },
    {
      label: "나이",
      value: `${guessAge}세${
        guess.birth !== answer.birth
          ? ` ${getUpDownIcon(guessAge, answerAge)}`
          : ""
      }`,
      isCorrect: guess.birth === answer.birth,
    },
  ];
}
