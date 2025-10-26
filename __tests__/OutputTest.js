import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};
describe("output 테스트", () => {
  test("입력 안내 문구 출력 테스트", async () => {
    // given
    const inputs = ["pobi,javaj", "1"];
    const log =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
  test("시도할 횟수 문구 출력 테스트", async () => {
    // given
    const inputs = ["pobi,javaj", "1"];
    mockQuestions(inputs);
    const log = "시도할 횟수는 몇 회인가요?";
    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
