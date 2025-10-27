import { ERROR_MESSAGE } from "../../../shard/index.js";

export function valitdateAttemptCount(attemptCount) {
  if (!/^\d+$/.test(attemptCount)) throw new Error(ERROR_MESSAGE.POSITIVE_ONLY);
}
