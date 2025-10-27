import { Console } from "@woowacourse/mission-utils";

export function outputRaceResult(stateArray, carNameArray) {
  for (let i = 0; i < stateArray.length; i++) {
    Console.print(`${carNameArray[i]} : ${stateArray[i]}`);
  }
}
