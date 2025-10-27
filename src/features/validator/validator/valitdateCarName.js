export function valitdateCarName(input) {
  if (isEmpty(input)) throw new Error("[ERROR] 입력값이 공백입니다");
  if (checkCarNameLength(input))
    throw new Error("[ERROR] 차의 이름은 5자 이하만 가능");
  if (checkDuplicateNames(input)) throw new Error("[ERROR] 중복된 이름 불가능");
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
