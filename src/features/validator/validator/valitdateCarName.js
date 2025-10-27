import { ERROR_MESSAGE } from "../../../shard/index.js";

export function valitdateCarName(input) {
  if (isEmpty(input)) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  if (checkCarNameLength(input)) throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
  if (checkDuplicateNames(input)) throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
}

function isEmpty(input) {
  return input.trim() === "";
}

function checkCarNameLength(input) {
  const carNameArray = input.split(",");
  return carNameArray.some((car) => car.length > 5);
}

function checkDuplicateNames(input) {
  const names = input.split(",");
  const nameSet = new Set(names);
  return nameSet.size !== names.length;
}
