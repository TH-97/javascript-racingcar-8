import { mergeSort } from "../src/entites/race/lib/mergeSort.js";

describe("mergeSort", () => {
  test("한 개 요소 배열 처리", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test("정렬되지 않은 배열 정렬", () => {
    const arr = [5, 3, 8, 4, 2];
    const sorted = [2, 3, 4, 5, 8];
    expect(mergeSort(arr)).toEqual(sorted);
  });

  test("중복 요소 처리", () => {
    const arr = [3, 1, 3, 2];
    const sorted = [1, 2, 3, 3];
    expect(mergeSort(arr)).toEqual(sorted);
  });

  test("이미 정렬된 배열", () => {
    const arr = [1, 2, 3, 4];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4]);
  });
});
