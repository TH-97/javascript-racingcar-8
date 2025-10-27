export function valitdateAttemptCount(attemptCount) {
  if (!/^\d+$/.test(attemptCount)) throw new Error("[ERROR] 양수만 입력 가능");
}
