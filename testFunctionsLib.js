const lib = require('./functionsLib.js');
const assert = require('assert');


let { selectEvenNumber } = lib;
let { selectOddNumber } = lib;
let { calculateSumOfArrayElements } = lib;
let { reverseArrayElements } = lib;
let { selectEverySecondElement } = lib;
let { generateReverseFibonacci } = lib;
let { findGreatestArrayElement } = lib;
let { findLowestArrayElement } = lib;
let { calculateAverageOfArrayElements } = lib;

assert.deepEqual(selectOddNumber([]), []);
assert.deepEqual(selectOddNumber([1]), [1]);
assert.deepEqual(selectOddNumber([2]), []);
assert.deepEqual(selectOddNumber([1,2]), [1]);
assert.deepEqual(selectEvenNumber([]), []);
assert.deepEqual(selectEvenNumber([1]), []);
assert.deepEqual(selectEvenNumber([2]), [2]);
assert.deepEqual(selectEvenNumber([1,2]), [2]);

assert.equal(calculateSumOfArrayElements([1,2]), 3);
assert.equal(calculateSumOfArrayElements([-2,2]), 0);
assert.equal(calculateSumOfArrayElements(["a",1]), "a1");
assert.equal(calculateSumOfArrayElements(["a","b"]), "ab");

assert.deepEqual(reverseArrayElements([1,2]), [2,1]);
assert.deepEqual(reverseArrayElements(["a","b"]), ["b","a"]);

assert.deepEqual(selectEverySecondElement([1,2,3]), [1,3]);
assert.deepEqual(selectEverySecondElement(["a","b","c"]), ["a","c"]);

assert.deepEqual(generateReverseFibonacci(5), [3,2,1,1,0]);
assert.deepEqual(generateReverseFibonacci(8), [13,8,5,3,2,1,1,0]);

assert.equal(findGreatestArrayElement([1,2,10]), 10);
assert.equal(findGreatestArrayElement([10,2,5]), 10);

assert.equal(findLowestArrayElement([1,2,10]), 1);
assert.equal(findLowestArrayElement([10,2,5]), 2);

assert.equal(calculateAverageOfArrayElements([1,2,3]), 2);
assert.equal(calculateAverageOfArrayElements([60,60,60]), 60);


