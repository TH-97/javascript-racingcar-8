export function mergeSort(array) {
  if (array.length === 1) return array;
  const { sortedLeft, sortedRight } = divideArray(array);

  return merge(sortedLeft, sortedRight);
}
function divideArray(array) {
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return { sortedLeft, sortedRight };
}
function merge(left, right) {
  const sortedArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}
