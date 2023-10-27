import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 2, 3, 4, 5, -9]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
