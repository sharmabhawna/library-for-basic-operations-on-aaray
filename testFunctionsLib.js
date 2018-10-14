const lib = require('./functionsLib.js');
const assert = require('assert');


let { selectEvenNumber } = lib;
let { selectOddNumber } = lib;
let { calculateSumOfArrayElements } = lib;
let { reverseArrayElements } = lib;
let { selectEverySecondElement } = lib;

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


