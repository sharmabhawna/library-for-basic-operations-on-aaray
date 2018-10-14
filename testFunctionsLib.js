const lib = require('./functionsLib.js');
const assert = require('assert');


const selectEvenNumber = lib.selectEvenNumber;
const selectOddNumber = lib.selectOddNumber;

assert.deepEqual(selectOddNumber([]), []);
assert.deepEqual(selectOddNumber([1]), [1]);
assert.deepEqual(selectOddNumber([2]), []);
assert.deepEqual(selectOddNumber([1,2]), [1]);
assert.deepEqual(selectEvenNumber([]), []);
assert.deepEqual(selectEvenNumber([1]), []);
assert.deepEqual(selectEvenNumber([2]), [2]);
assert.deepEqual(selectEvenNumber([1,2]), [2]);

