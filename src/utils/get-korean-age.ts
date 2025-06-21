import dayjs from "dayjs";

/**
 * 문자열 생년월일을 받아 한국식 만나이를 반환합니다.
 * @param birthDate 생년월일 (예: "2000-06-21")
 * @returns 한국식 만나이 (만 나이)
 */
export function getKoreanAge(birthDate: string): number {
  const birth = dayjs(birthDate);
  const today = dayjs();

  let age = today.year() - birth.year();

  // 생일이 아직 안 지났으면 1살 빼기
  if (
    today.month() < birth.month() ||
    (today.month() === birth.month() && today.date() < birth.date())
  ) {
    age -= 1;
  }

  return age;
}
