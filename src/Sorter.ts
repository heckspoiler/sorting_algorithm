interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  sort(): void {
    const { length } = this; // this is the same as const length = this.collection.length

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
