const assert = require('assert');
const lib = require('./functionsLib.js');

const { extractEvenNumbers,
  extractOddNumbers,
  computeSum,
  reverse,
  selectEverySecondElement,
  generateReverseFibonacci,
  extractGreatestNumber,
  extractSmallestNumber,
  computeAverage,
  mapLengths,
  countOddNumbers,
  countEvenNumbers,
  countNumbersGreaterThan,
  countNumbersLesserThan ,
  findIndex,
  extractDigits,
  findUnique,
  findUnion,
  findIntersection,
  isSubset,
  zip,
  findDifference,
  partition, 
  isAscending,
  isDescending,
  rotate } = lib;


//Tests for selecting odd numbers :
assert.deepEqual(extractOddNumbers([]), []);//empty array
assert.deepEqual(extractOddNumbers([1]), [1]);//one odd element
assert.deepEqual(extractOddNumbers([2]), []);//one even element
assert.deepEqual(extractOddNumbers([1,2]), [1]);//one even and one odd element
assert.deepEqual(extractOddNumbers([-1,-2]), [-1]);//one even and one odd negative number
assert.deepEqual(extractOddNumbers([-1,-2,3,6,0,9]), [-1,3,9]);//multiple mislaneous numbers

//Tests for selecting even numbers :
assert.deepEqual(extractEvenNumbers([]), []);//empty array
assert.deepEqual(extractEvenNumbers([1]), []);//one odd element
assert.deepEqual(extractEvenNumbers([2]), [2]);//one even element
assert.deepEqual(extractEvenNumbers([1,2]), [2]);//one even and one odd element
assert.deepEqual(extractEvenNumbers([-1,-2]), [-2]);//one even and one odd negative number
assert.deepEqual(extractEvenNumbers([-1,-2,3,6,0,9]), [-2,6,0]);//multiple mislaneous numbers 

//Tests for calculating sum of all elements of array :
assert.equal(computeSum([]), 0);//empty array 
assert.equal(computeSum([1,2]), 3);//both positive numbers
assert.equal(computeSum([-2,2]), 0);//one positive and one negative number
assert.equal(computeSum([-2,-2]), -4);//both negative numbers

//Tests for reversing elements of array :
assert.deepEqual(reverse([]), []);//empty array
assert.deepEqual(reverse([1,2]), [2,1]);//integral array
assert.deepEqual(reverse(["a","b"]), ["b","a"]);//string array
assert.deepEqual(reverse(["a",3,"b"]), ["b",3,"a"]);//mislaneous array

//Tests for selecting every second element of array :
assert.deepEqual(selectEverySecondElement([]), []);//empty array
assert.deepEqual(selectEverySecondElement([1,2,3]), [1,3]);//integral array
assert.deepEqual(selectEverySecondElement(["a","b","c"]), ["a","c"]);//strings array
assert.deepEqual(selectEverySecondElement([1,"a","b",4,5]), [1,"b",5]);//mislaneous array

//Tests for generating reverse fibonacci series :
assert.deepEqual(generateReverseFibonacci(0), []);
assert.deepEqual(generateReverseFibonacci(1), [0]);
assert.deepEqual(generateReverseFibonacci(5), [3,2,1,1,0]);
assert.deepEqual(generateReverseFibonacci(8), [13,8,5,3,2,1,1,0]);

//Tests for finding greatest number of array :
assert.equal(extractGreatestNumber([]), );//empty array
assert.equal(extractGreatestNumber([1,2.5,10]), 10);//positive numbers
assert.equal(extractGreatestNumber([-1.5,-2,-10]), -1.5);//negative numbers
assert.equal(extractGreatestNumber([10,12.5,-5,-1.5,3.5]), 12.5);//mislaneous 

//Tests for finding smallest number of array :
assert.equal(extractSmallestNumber([]), );//empty array
assert.equal(extractSmallestNumber([1.5,2,10]), 1.5);//postive numbers
assert.equal(extractSmallestNumber([-10,-2,-5.5]), -10);//negative numbers
assert.equal(extractSmallestNumber([-10,2,-2,5,-5.5]), -10);//mislaneous

//Tests for calculating average of all elements of array :
assert.equal(computeAverage([]), 0);//numbers
assert.equal(computeAverage([1,2,3]), 2);//positive numbers
assert.equal(computeAverage([-60,-60,-60]), -60);//negative numbers
assert.equal(computeAverage([-60,60,-60,60]), 0);//negative numbers

//Tests for mapping lenghts of all elements of array : 
assert.deepEqual(mapLengths(["a","be"]), [1,2]);
assert.deepEqual(mapLengths(["","programming"]), [0,11]);
assert.deepEqual(mapLengths(["mary","had","a","little","lamb"]), [4,3,1,6,4]);

//Tests for counting odd numbers present in array : 
assert.equal(countOddNumbers([]), 0);//empty array
assert.equal(countOddNumbers([1]), 1);//one odd element
assert.equal(countOddNumbers([2]), 0);//one even element
assert.equal(countOddNumbers([1,2]), 1);//one odd and one even element
assert.equal(countOddNumbers([-3,-2,0,-10,-7,1,2]), 3);//one odd and one even element

assert.equal(countEvenNumbers([]), 0);//empty array
assert.equal(countEvenNumbers([1]), 0);//one odd element
assert.equal(countEvenNumbers([2]), 1);//one even element
assert.equal(countEvenNumbers([1,2]), 1);//one odd and one even element
assert.equal(countEvenNumbers([-3,-2,0,-10,-7,1,2]), 4);//multiple mislaneous elements including negatives 

assert.equal(countNumbersGreaterThan([3,4,5,6,1],4), 2);
assert.equal(countNumbersGreaterThan([33,44,5,6,1],0), 5);
assert.equal(countNumbersGreaterThan([],0), 0);
assert.equal(countNumbersGreaterThan([],8), 0);

assert.equal(countNumbersLesserThan([3,4,5,6,1],4), 2);
assert.equal(countNumbersLesserThan([33,44,5,6,1],0), 0);
assert.equal(countNumbersLesserThan([],0), 0);
assert.equal(countNumbersLesserThan([1,2,3,10,11],8), 3);

assert.equal(findIndex([3,4,5,6,1],0), -1);
assert.equal(findIndex([3,4,5,6,1,4],4), 1);
assert.equal(findIndex([],0), -1);
assert.equal(findIndex([],"a"), -1);
assert.equal(findIndex(["a","b","c","d"],"c"), 2);
assert.equal(findIndex(["a","b","c","d"],"z"), -1);

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


assert.equal(isAscending([1,2,3]), true);
assert.equal(isAscending([3,2,1]), false);


assert.equal(isDescending([1,2,3]), false);
assert.equal(isDescending([3,2,1]), true);


assert.deepEqual(rotate([1,2,3,4], 2), [4,1,2,3]);
assert.deepEqual(rotate(["a","b","c","d","e"],1), ["c","d","e","a","b"]);


