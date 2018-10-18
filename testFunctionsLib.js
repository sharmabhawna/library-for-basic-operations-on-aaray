const lib = require('./functionsLib.js');
const assert = require('assert');


let { selectEvenNumbers } = lib;
let { selectOddNumbers } = lib;
let { calculateSumOfArrayElements } = lib;
let { reverseArrayElements } = lib;
let { selectEverySecondElement } = lib;
let { generateReverseFibonacci } = lib;
let { findGreatestArrayElement } = lib;
let { findLowestArrayElement } = lib;
let { calculateAverageOfArrayElements } = lib;
let { mappingLengths } = lib;
let { countOddNumbers } = lib;
let { countEvenNumbers } = lib;
let { countElementsGreaterThanGivenNumber } = lib;
let { countElementsLesserThanGivenNumber} = lib;
let { findIndex } = lib;
let { extractDigits } = lib;
let { findUnique } = lib;
let { findUnion } = lib;
let { findIntersection } = lib;
let { isSubset } = lib;
let { zipArrays } = lib;
let { findDifference } = lib;
let { countElementsLesserThanGivenNumber} = lib;
let { partitionArray } = lib;

assert.deepEqual(selectOddNumbers([]), []);
assert.deepEqual(selectOddNumbers([1]), [1]);
assert.deepEqual(selectOddNumbers([2]), []);
assert.deepEqual(selectOddNumbers([1,2]), [1]);
assert.deepEqual(selectEvenNumbers([]), []);
assert.deepEqual(selectEvenNumbers([1]), []);
assert.deepEqual(selectEvenNumbers([2]), [2]);
assert.deepEqual(selectEvenNumbers([1,2]), [2]);

assert.equal(calculateSumOfArrayElements([1,2]), 3);
assert.equal(calculateSumOfArrayElements([-2,2]), 0);
assert.equal(calculateSumOfArrayElements(["a",1]), "a1");
assert.equal(calculateSumOfArrayElements(["a","b"]), "ab");

assert.deepEqual(reverseArrayElements([1,2]), [2,1]);
assert.deepEqual(reverseArrayElements(["a","b"]), ["b","a"]);

assert.deepEqual(selectEverySecondElement([1,2,3]), [1,3]);
assert.deepEqual(selectEverySecondElement(["a","b","c"]), ["a","c"]);

assert.deepEqual(generateReverseFibonacci(1), [0]);
assert.deepEqual(generateReverseFibonacci(5), [3,2,1,1,0]);
assert.deepEqual(generateReverseFibonacci(8), [13,8,5,3,2,1,1,0]);

assert.equal(findGreatestArrayElement([1,2,10]), 10);
assert.equal(findGreatestArrayElement([10,2,5]), 10);

assert.equal(findLowestArrayElement([1,2,10]), 1);
assert.equal(findLowestArrayElement([10,2,5]), 2);

assert.equal(calculateAverageOfArrayElements([1,2,3]), 2);
assert.equal(calculateAverageOfArrayElements([60,60,60]), 60);

assert.deepEqual(mappingLengths(["a","be"]), [1,2]);
assert.deepEqual(mappingLengths(["","programming"]), [0,11]);
assert.deepEqual(mappingLengths(["mary","had","a","little","lamb"]), [4,3,1,6,4]);

assert.equal(countOddNumbers([]), 0);
assert.equal(countOddNumbers([1]), 1);
assert.equal(countOddNumbers([2]), 0);
assert.equal(countOddNumbers([1,2]), 1);


assert.equal(countEvenNumbers([]), 0);
assert.equal(countEvenNumbers([1]), 0);
assert.equal(countEvenNumbers([2]), 1);
assert.equal(countEvenNumbers([1,2]), 1);

assert.equal(countElementsGreaterThanGivenNumber([3,4,5,6,1],4), 2);
assert.equal(countElementsGreaterThanGivenNumber([33,44,5,6,1],0), 5);
assert.equal(countElementsGreaterThanGivenNumber([],0), 0);
assert.equal(countElementsGreaterThanGivenNumber([],8), 0);

assert.equal(countElementsLesserThanGivenNumber([3,4,5,6,1],4), 2);
assert.equal(countElementsLesserThanGivenNumber([33,44,5,6,1],0), 0);
assert.equal(countElementsLesserThanGivenNumber([],0), 0);
assert.equal(countElementsLesserThanGivenNumber([1,2,3,10,11],8), 3);

assert.equal(findIndex([3,4,5,6,1],0), "could not find");
assert.equal(findIndex([3,4,5,6,1],4), 1);
assert.equal(findIndex([],0), "could not find");
assert.equal(findIndex([],"a"), "could not find");
assert.equal(findIndex(["a","b","c","d"],"c"), 2);
assert.equal(findIndex(["a","b","c","d"],"z"), "could not find");

assert.deepEqual(extractDigits(12345), [1,2,3,4,5]);
assert.deepEqual(extractDigits(), []);

assert.deepEqual(findUnique([]), []);
assert.deepEqual(findUnique([1]), [1]);
assert.deepEqual(findUnique([1,1]), [1]);
assert.deepEqual(findUnique([1,2]), [1,2]);
assert.deepEqual(findUnique([1,2,1]), [1,2]);
assert.deepEqual(findUnique([1,2,3]), [1,2,3]);
assert.deepEqual(findUnique([1,2,1,2]), [1,2]);
assert.deepEqual(findUnique([""]), [""]);
assert.deepEqual(findUnique(["a"]), ["a"]);
assert.deepEqual(findUnique(["a","a"]), ["a"]);
assert.deepEqual(findUnique(["a","b"]), ["a","b"]);
assert.deepEqual(findUnique(["a","b","a"]), ["a","b"]);
assert.deepEqual(findUnique(["a","b","c"]), ["a","b","c"]);
assert.deepEqual(findUnique(["a","b","a","b"]), ["a","b"]);

assert.deepEqual(findUnion([],[]), []);
assert.deepEqual(findUnion([1],[]), [1]);
assert.deepEqual(findUnion([],[1]), [1]);
assert.deepEqual(findUnion([1],[1]), [1]);
assert.deepEqual(findUnion([1,2],[2]), [1,2]);
assert.deepEqual(findUnion([1,2],[1,2]), [1,2]);
assert.deepEqual(findUnion([2],[1,2]), [2,1]);
assert.deepEqual(findUnion([1,2],[3,4]), [1,2,3,4]);
assert.deepEqual(findUnion([""],[]), [""]);
assert.deepEqual(findUnion([],[""]), [""]);
assert.deepEqual(findUnion([""],[""]), [""]);
assert.deepEqual(findUnion(["a"],[]), ["a"]);
assert.deepEqual(findUnion([],["a"]), ["a"]);
assert.deepEqual(findUnion(["a"],["a"]), ["a"]);
assert.deepEqual(findUnion(["a","b"],["b"]), ["a","b"]);
assert.deepEqual(findUnion(["a","b"],["a","b"]), ["a","b"]);
assert.deepEqual(findUnion(["b"],["a","b"]), ["b","a"]);
assert.deepEqual(findUnion(["a","b"],["c","d"]), ["a","b","c","d"]);

assert.deepEqual(findIntersection([],[]), []);
assert.deepEqual(findIntersection([1],[]), []);
assert.deepEqual(findIntersection([],[1]), []);
assert.deepEqual(findIntersection([1],[1]), [1]);
assert.deepEqual(findIntersection([1,2],[2]), [2]);
assert.deepEqual(findIntersection([1,2],[1,2]), [1,2]);
assert.deepEqual(findIntersection([2],[1,2]), [2]);
assert.deepEqual(findIntersection([1,2],[3,4]), []);
assert.deepEqual(findIntersection([""],[]), []);
assert.deepEqual(findIntersection([],[""]), []);
assert.deepEqual(findIntersection([""],[""]), [""]);
assert.deepEqual(findIntersection(["a"],[]), []);
assert.deepEqual(findIntersection([],["a"]), []);
assert.deepEqual(findIntersection(["a"],["a"]), ["a"]);
assert.deepEqual(findIntersection(["a","b"],["b"]), ["b"]);
assert.deepEqual(findIntersection(["a","b"],["a","b"]), ["a","b"]);
assert.deepEqual(findIntersection(["b"],["a","b"]), ["b"]);
assert.deepEqual(findIntersection([1,2,2,3],[1,3]),[1,3]);
assert.deepEqual(findIntersection([1,2,2,3],[1,2,3,3]),[1,2,3]);

assert.deepEqual(findDifference([1,2,3,3],[1,2]), [3]);
assert.deepEqual(findDifference([1,2,3,3],[3,4]), [1,2]);

assert.equal(isSubset([1,2,3,4],[1,4]), true);
assert.equal(isSubset([],[]), true);
assert.equal(isSubset(["a"],[]), true);

assert.deepEqual(zip([1,2],[3,4]), [[1,3],[2,4]]);
assert.deepEqual(zip(["a","b","c"],["i","l"]), [["a","i"],["b","l"]]);

assert.deepEqual(partition([1,2,3,4,5],3), [[1,2,3],[4,5]]);
assert.deepEqual(partition([11,29,3,40,5,9],10), [[3,5,9],[11,29,40]]);

assert.deepEqual(ascendingSort([3,1,5,2]), [1,2,3,5]);
assert.deepEqual(ascendingSort([9,5,0,3,1]), [0,1,3,5,9]);
assert.deepEqual(ascendingSort([-9,5,0,-3,1]), [-9,-3,0,1,5]);

assert.deepEqual(descendingSort([3,1,5,2]), [5,3,2,1]);
assert.deepEqual(descendingSort([9,5,0,3,1]), [9,5,3,1,0]);
assert.deepEqual(descendingSort([-9,5,0,-3,1]), [5,1,0,-3,-9]);
