import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};
describe("output 테스트", () => {
  test("입력 안내 문구 출력 테스트", async () => {
    // given
    const log = [
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    ];
    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      )
    );
  });
});
