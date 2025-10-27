import { Console } from "@woowacourse/mission-utils";

export function outputGuideMessage() {
  Console.print(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
}

export function outputAttemptMessage() {
  Console.print("시도할 횟수는 몇 회인가요?");
}

export function outputResultMessage() {
  Console.print("\n실행 결과");
}
export function outputWinnerMessage(winnerArray) {
  // Console.print("");
  var winnerMessage = "최종 우승자 : ";
  for (let i = 0; i < winnerArray.length; i++) {
    if (i === winnerArray.length - 1) {
      winnerMessage = winnerMessage + `${winnerArray[i]}`;
      Console.print(winnerMessage);
      return;
    }
    winnerMessage += `${winnerArray[i]}, `;
  }
}
