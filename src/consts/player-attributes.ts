import { BaseballPlayer } from "./kbo-rosters";

export const PLAYER_POSITION_LABELS: Record<string, string> = {
  "1B": "1루수",
  "2B": "2루수",
  "3B": "3루수",
  SS: "유격수",
  C: "포수",
  LF: "좌익수",
  CF: "중견수",
  RF: "우익수",
  DH: "지명",
  SP: "선발",
  RP: "구원",
  CP: "마무리",
  OF: "외야수",
  IF: "내야수",
  "SP/RP": "선발/구원",
} as const;

export const PLAYER_HAND_LABELS: Record<BaseballPlayer["hand"], string> = {
  LHH: "좌타",
  RHH: "우타",
  LHP: "좌투",
  RHP: "우투",
  SHH: "스위치",
} as const;
