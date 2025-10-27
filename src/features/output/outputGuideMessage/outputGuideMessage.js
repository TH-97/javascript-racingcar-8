import { Console } from "@woowacourse/mission-utils";
import { INFORM_MESSAGE } from "../../../shard/index.js";

export function outputGuideMessage() {
  Console.print(INFORM_MESSAGE.ENTER_CAR_NAMES);
}

export function outputAttemptMessage() {
  Console.print(INFORM_MESSAGE.ENTER_ATTEMPTS);
}

export function outputResultMessage() {
  Console.print(`\n${INFORM_MESSAGE.RACE_RESULTS}`);
}
export function outputWinnerMessage(winnerArray) {
  var winnerMessage = `${INFORM_MESSAGE.FINAL_WINNER} : `;
  for (let i = 0; i < winnerArray.length; i++) {
    if (i === winnerArray.length - 1) {
      winnerMessage = winnerMessage + `${winnerArray[i]}`;
      Console.print(winnerMessage);
      return;
    }
    winnerMessage += `${winnerArray[i]}, `;
  }
}
