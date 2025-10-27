import { mergeSort } from "../lib/mergeSort.js";
import { canMove } from "../lib/canMove.js";

export class Race {
  constructor(carNameArray) {
    this.carNameArray = carNameArray;
    this.state = new Array(carNameArray.length).fill("");
  }

  palyRound(randomNumberArray) {
    for (let i = 0; i < randomNumberArray.length; i++) {
      if (canMove(randomNumberArray[i])) this.state[i] += "-";
    }
  }
  getState() {
    return this.state;
  }
  getFinalWinner() {
    const map = new Map();

    for (let i = 0; i < this.state.length; i++) {
      if (!map.has(this.state[i].length)) map.set(this.state[i].length, []);
      map.get(this.state[i].length).push(this.carNameArray[i]);
    }
    const keysArray = [...map.keys()];

    const sortedArray = mergeSort(keysArray);

    const winnerArray = map.get(sortedArray[sortedArray.length - 1]);

    return winnerArray;
  }
}
