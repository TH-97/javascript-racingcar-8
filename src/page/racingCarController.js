import { inputValues } from "../features/input/index.js";
import {
  outputGuideMessage,
  outputAttemptMessage,
  outputRaceResult,
  outputResultMessage,
  outputWinnerMessage,
} from "../features/output/index.js";
import {
  valitdateCarName,
  valitdateAttemptCount,
} from "../features/validator/index.js";
import { getRandomNumberArray } from "../features/getRandomNumberArray/index.js";
import { Race } from "../entites/race/index.js";
import { Console } from "@woowacourse/mission-utils";

export default async function racingCarController() {
  outputGuideMessage();
  const inputCarName = await inputValues();

  await valitdateCarName(inputCarName);
  await outputAttemptMessage();
  const carNameArray = await splitInput(inputCarName);

  const attemptCount = await inputValues();

  await valitdateAttemptCount(attemptCount);

  const race = new Race(carNameArray);
  outputResultMessage();
  for (let i = 0; i < attemptCount; i++) {
    const randomNumberArray = getRandomNumberArray(carNameArray.length);
    race.palyRound(randomNumberArray);
    const stateArray = race.getState();
    outputRaceResult(stateArray, carNameArray);
    Console.print("");
  }
  const winnerArray = await race.getFinalWinner();
  outputWinnerMessage(winnerArray);
}

function splitInput(input) {
  return input.split(",");
}
