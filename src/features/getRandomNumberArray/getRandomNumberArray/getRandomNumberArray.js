import { Random } from "@woowacourse/mission-utils";
export function getRandomNumberArray(length) {
  const randomNumberArray = [];
  for (let i = 0; i < length; i++)
    randomNumberArray.push(Random.pickNumberInRange(0, 9));
  return randomNumberArray;
}
