import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
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
    const log = "시도할 횟수는 몇 회인가요?";
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
  test("실행 결과 출력 테스트", async () => {
    // given
    const inputs = ["pobi", "1"];
    const log = "pobi : ";
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([1]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
  test("동률 테스트", async () => {
    // given
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("동률 테스트2", async () => {
    // given
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : ", "woni : ", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([3, 3]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
