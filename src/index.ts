import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 2, 3, 4, 5, -9]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
  'jöjklöadfsjköldsfjklödafsjklödafsjklfsd'
);
charactersCollection.sort();
console.log(charactersCollection.data);
