import { BaseballPlayer, KBO_ROSTERS } from "@/consts/kbo-rosters";
import { GuessResult } from "./guess-result";

const GUESS_EXAMPLE = KBO_ROSTERS.find(
  (player) => player.name === "양현종",
) as BaseballPlayer;
const ANSWER_EXAMPLE = KBO_ROSTERS.find(
  (player) => player.name === "류현진",
) as BaseballPlayer;

export function GameDescription() {
  return (
    <div className="text-base-content flex flex-col gap-8 tracking-tight">
      <p>
        누구야는 KBO 선수 중 누구인지 추리하는 게임입니다. 규칙은 다음과
        같습니다.
      </p>

      <ul className="flex list-disc flex-col gap-2">
        <li>
          사용자는 총 8번의 기회 안에 현역 KBO 선수 중 한 명을 맞춰야 합니다.
        </li>
        <li>
          한 번의 추측마다, 선택한 선수가 정답이 아닐 경우, 정답과의 유사도를
          기준으로 힌트가 제공됩니다.
        </li>
        <li>
          {
            "예를 들어, 정답이 '류현진' 선수이고 사용자가 '양현종' 선수를 추측했다고 가정하면, 다음과 같은 형태로 피드백이 제공됩니다."
          }
        </li>
      </ul>

      <GuessResult guess={GUESS_EXAMPLE} answer={ANSWER_EXAMPLE} />

      <ul className="flex list-disc flex-col gap-3">
        <li>결과를 해석하면 다음과 같습니다.</li>

        <ul className="ml-6 flex list-disc flex-col gap-2">
          <li>
            두 선수는 현재 기준 같은 팀 소속이 아니며 등번호와 나이가 다르기에
            틀렸다는 것을 회색 표시를 통해 알 수 있습니다.
          </li>
          <li>
            또한, 포지션과 투타는 각각 선발 투수와, 좌투로 일치하기에 초록색으로
            표시되고 있습니다.
          </li>
          <li>
            등번호와 나이는 일치하지 않았지만, 업다운을 통해 현재 추측한
            선수보다 크고 작음을 알 수 있습니다.
          </li>
        </ul>
      </ul>

      <p className="text-zinc-500">
        *2025년 06월 22일 기준으로 현역인 선수만 포함되어 있습니다.
      </p>
    </div>
  );
}
