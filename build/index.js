'use strict';
class Sorter {
  constructor(collection) {
    this.collection = collection;
  }
  sort() {
    const { length } = this.collection; // this is the same as const length = this.collection.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; (j = length - 1 - i - 1); j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}
const sorter = new Sorter([10, 3, 5, -10]);
sorter.sort();
console.log(sorter.collection);
