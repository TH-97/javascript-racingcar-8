import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};
describe("input 테스트", () => {
  test("자동차 이름 입력 공백 예외 테스트", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("자동차 이름 입력 중복 예외 테스트", async () => {
    // given
    const inputs = ["asd,asd"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("자동차 이름 입력 5자 초과시 예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("시도할 횟수 입력 예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaj", "ㅁ"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
