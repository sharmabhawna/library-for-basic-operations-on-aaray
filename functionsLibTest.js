const assert = require('assert');
const lib = require('./functionsLib.js');

const { extractEvenNumbers,
  extractOddNumbers,
  computeSum,
  reverse,
  extractEverySecondElement,
  generateReverseFibonacci,
  extractGreatestNumber,
  extractSmallestNumber,
  computeAverage,
  mapLengths,
  countOddNumbers,
  countEvenNumbers,
  countNumbersGreaterThan,
  countNumbersLesserThan ,
  findFirstIndex,
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
assert.equal(computeSum([1]), 1);//one element array 
assert.equal(computeSum([1,2]), 3);//both positive numbers
assert.equal(computeSum([-2,2]), 0);//one positive and one negative number
assert.equal(computeSum([-2,-2]), -4);//both negative numbers

//Tests for reversing elements of array :
assert.deepEqual(reverse([]), []);//empty array
assert.deepEqual(reverse([1]), [1]);//one element array
assert.deepEqual(reverse([1,1]), [1,1]);//two identical elements array
assert.deepEqual(reverse([1,2]), [2,1]);//integral array
assert.deepEqual(reverse(["a","b"]), ["b","a"]);//string array
assert.deepEqual(reverse(["a",3,"b"]), ["b",3,"a"]);//mislaneous array

//Tests for extracting every second element of array :
assert.deepEqual(extractEverySecondElement([]), []);//empty array
assert.deepEqual(extractEverySecondElement([1]), [1]);//one element array
assert.deepEqual(extractEverySecondElement([1,2]), [1]);//two elements array
assert.deepEqual(extractEverySecondElement([1,2,3]), [1,3]);//integral array
assert.deepEqual(extractEverySecondElement(["a","b","c"]), ["a","c"]);//strings array
assert.deepEqual(extractEverySecondElement([1,"a","b",4,5]), [1,"b",5]);//mislaneous array

//Tests for generating reverse fibonacci series :
assert.deepEqual(generateReverseFibonacci(0), []);
assert.deepEqual(generateReverseFibonacci(1), [0]);
assert.deepEqual(generateReverseFibonacci(5), [3,2,1,1,0]);
assert.deepEqual(generateReverseFibonacci(8), [13,8,5,3,2,1,1,0]);

//Tests for finding greatest number of array :
assert.equal(extractGreatestNumber([]), 0);//empty array
assert.equal(extractGreatestNumber([12]), 12);//one element array
assert.equal(extractGreatestNumber([2,5]), 5);//two elements array
assert.equal(extractGreatestNumber([1,2.5,10]), 10);//positive numbers
assert.equal(extractGreatestNumber([-1.5,-2,-10]), -1.5);//negative numbers
assert.equal(extractGreatestNumber([10,12.5,-5,-1.5,3.5]), 12.5);//mislaneous 

//Tests for finding smallest number of array :
assert.equal(extractSmallestNumber([]), 0);//empty array
assert.equal(extractSmallestNumber([12]), 12);//one element array
assert.equal(extractSmallestNumber([2,5]), 2);//two elements array
assert.equal(extractSmallestNumber([1.5,2,10]), 1.5);//postive numbers
assert.equal(extractSmallestNumber([-10,-2,-5.5]), -10);//negative numbers
assert.equal(extractSmallestNumber([-10,2,-2,5,-5.5]), -10);//mislaneous

//Tests for calculating average of all elements of array :
assert.equal(computeAverage([]), 0);//empty array
assert.equal(computeAverage([1,2,3]), 2);//positive numbers
assert.equal(computeAverage([-60,-60,-60]), -60);//negative numbers
assert.equal(computeAverage([-60,60,-60,60]), 0);//negative numbers

//Tests for mapping lenghts of all elements of array : 
assert.deepEqual(mapLengths([]), []);//empty array
assert.deepEqual(mapLengths([""]), [0]);//one empty string element
assert.deepEqual(mapLengths(["", ""]), [0,0]);//two empty string elements
assert.deepEqual(mapLengths(["a"]), [1]);//one non-empty string element
assert.deepEqual(mapLengths(["a","be"]), [1,2]);//two non-empty string element
assert.deepEqual(mapLengths(["","programming"]), [0,11]);//one empty string and one non-empty string elements
assert.deepEqual(mapLengths(["mary","had","a","little","lamb"]), [4,3,1,6,4]);//multiple non-empty string elements

//Tests for counting odd numbers present in array : 
assert.equal(countOddNumbers([]), 0);//empty array
assert.equal(countOddNumbers([1]), 1);//one odd element
assert.equal(countOddNumbers([2]), 0);//one even element
assert.equal(countOddNumbers([1,2]), 1);//one odd and one even element
assert.equal(countOddNumbers([-1,-2]), 1);//one odd and one even negative number 
assert.equal(countOddNumbers([-3,-2,0,-10,-7,1,2]), 3);//multiple mislaneous numbers

//Tests for counting even numbers present in array : 
assert.equal(countEvenNumbers([]), 0);//empty array
assert.equal(countEvenNumbers([1]), 0);//one odd element
assert.equal(countEvenNumbers([2]), 1);//one even element
assert.equal(countEvenNumbers([1,2]), 1);//one odd and one even element
assert.equal(countEvenNumbers([-1,-2]), 1);//one odd and one even negative number
assert.equal(countEvenNumbers([-3,-2,0,-10,-7,1,2]), 4);//multiple mislaneous numbers 

//Tests for counting numbers greater than a threshold :
assert.equal(countNumbersGreaterThan([],0), 0);//empty array and zero as threshold 
assert.equal(countNumbersGreaterThan([],8), 0);//empty array and non-zero threshold 
assert.equal(countNumbersGreaterThan([3,4,5,6,1],4), 2);//non-empty array and threshold is an element of array
assert.equal(countNumbersGreaterThan([33,44,5,6,1],0), 5);//non-empty array and threshold is not an element of array

//Tests for counting numbers lesser than a threshold :
assert.equal(countNumbersLesserThan([],0), 0);//empty array and zero as threshold 
assert.equal(countNumbersLesserThan([],8), 0);//empty array and non-zero threshold 
assert.equal(countNumbersLesserThan([3,4,5,6,1],4), 2);//non-empty array and threshold is an element of array
assert.equal(countNumbersLesserThan([33,44,5,6,1],0), 0);//non-empty array and threshold is not an element of array

//Tests for finding index of an element in an array :
assert.equal(findFirstIndex([],0), -1);//empty array and integral element 
assert.equal(findFirstIndex([],"a"), -1);//empty array and string element
assert.equal(findFirstIndex([3,4,5,6,1],0), -1);//element(integral) is not present in array
assert.equal(findFirstIndex(["a","b","c","d"],"z"), -1);//element(string) is not present in array
assert.equal(findFirstIndex([3,4,5,6,1,4],4), 1);//element(integral) is present in array
assert.equal(findFirstIndex(["a","b","c","d"],"c"), 2);//element(string) is present in array

//Tests for extracting digits of a numbers into an array :
assert.deepEqual(extractDigits(), []);//number is not given
assert.deepEqual(extractDigits(1), [1]);//one digit number 
assert.deepEqual(extractDigits(12), [1,2]);//two digits number 
assert.deepEqual(extractDigits(12345), [1,2,3,4,5]);//mutiple digits number

//Tests for finding unique elements :
assert.deepEqual(findUnique([]), []);//empty array
assert.deepEqual(findUnique([1]), [1]);//one element 
assert.deepEqual(findUnique([1,1]), [1]);//two identical elements
assert.deepEqual(findUnique([1,2]), [1,2]);//two distinct elements
assert.deepEqual(findUnique([1,1,1]), [1]);//three identical elements
assert.deepEqual(findUnique([1,2,1]), [1,2]);//one distinct and two identical elements
assert.deepEqual(findUnique([1,2,3]), [1,2,3]);//three distinct elements
assert.deepEqual(findUnique([1,2,1,2]), [1,2]);//two pairs of identical elements

assert.deepEqual(findUnique([""]), [""]);//empty string array
assert.deepEqual(findUnique(["a"]), ["a"]);//one element 
assert.deepEqual(findUnique(["a","a"]), ["a"]);//two identical elements
assert.deepEqual(findUnique(["a","b"]), ["a","b"]);//two distinct elements
assert.deepEqual(findUnique(["a","a","a"]), ["a"]);//three identical elements
assert.deepEqual(findUnique(["a","b","a"]), ["a","b"]);//one distinct and two identical elements
assert.deepEqual(findUnique(["a","b","c"]), ["a","b","c"]);//three distinct elements
assert.deepEqual(findUnique(["a","b","a","b"]), ["a","b"]);//two pairs of identical elements

//Tests for finding union of two sets : 
assert.deepEqual(findUnion([],[]), []);//both arrays empty
assert.deepEqual(findUnion([1],[]), [1]);//second array empty
assert.deepEqual(findUnion([],[1]), [1]);//first array empty
assert.deepEqual(findUnion([1],[1]), [1]);//both arrays with one element(identical)
assert.deepEqual(findUnion([2],[1,2]), [2,1]);//first array with one element of second array
assert.deepEqual(findUnion([1,2],[2]), [1,2]);//second array with one element of first array
assert.deepEqual(findUnion([1,2],[1,2]), [1,2]);//both identical arrays with two elements
assert.deepEqual(findUnion([1,2],[3,4]), [1,2,3,4]);//both distinct arrays with two elements
assert.deepEqual(findUnion([1,2,2,3],[1,3]),[1,2,3]);
assert.deepEqual(findUnion([1,2,2,3],[1,2]),[1,2,3]);

assert.deepEqual(findUnion([""],[]), [""]);//first array with empty string and second array empty
assert.deepEqual(findUnion([],[""]), [""]);//second array with empty string and first array empty
assert.deepEqual(findUnion([""],[""]), [""]);//both arrays with empty string
assert.deepEqual(findUnion(["a"],[]), ["a"]);//first array with non-empty string and second array empty
assert.deepEqual(findUnion([],["a"]), ["a"]);//second array with non-empty string and first array empty
assert.deepEqual(findUnion(["a"],["a"]), ["a"]);//both arrays with non-empty string
assert.deepEqual(findUnion(["b"],["a","b"]), ["b","a"]);//first array with one element of second array(string type)
assert.deepEqual(findUnion(["a","b"],["b"]), ["a","b"]);//second array with one element of first array(string type)
assert.deepEqual(findUnion(["a","b"],["a","b"]), ["a","b"]);//both identical arrays with two elements(string type)
assert.deepEqual(findUnion(["a","b"],["c","d"]), ["a","b","c","d"]);//both distinct arrays with two elements(string type)

//Tests for finding intersection of two arrays : 
assert.deepEqual(findIntersection([],[]), []);//both arrays empty
assert.deepEqual(findIntersection([1],[]), []);//second array empty
assert.deepEqual(findIntersection([],[1]), []);//first array empty
assert.deepEqual(findIntersection([1],[1]), [1]);//both arrays with one element(identical)
assert.deepEqual(findIntersection([2],[1,2]), [2]);//first array with one element of second array
assert.deepEqual(findIntersection([1,2],[2]), [2]);//second array with one element of first array
assert.deepEqual(findIntersection([1,2],[1,2]), [1,2]);//both identical arrays with two elements
assert.deepEqual(findIntersection([1,2],[3,4]), []);//both distinct arrays with two elements
assert.deepEqual(findIntersection([1,2,2,3],[1,3]),[1,3]);
assert.deepEqual(findIntersection([1,2,2,3],[1,2]),[1,2]);

assert.deepEqual(findIntersection([""],[]), []);//first array with empty string and second array empty
assert.deepEqual(findIntersection([],[""]), []);//second array with empty string and first array empty
assert.deepEqual(findIntersection([""],[""]), [""]);//both arrays with empty string
assert.deepEqual(findIntersection(["a"],[]), []);//first array with non-empty string and second array empty
assert.deepEqual(findIntersection([],["a"]), []);//second array with non-empty string and first array empty
assert.deepEqual(findIntersection(["a"],["a"]), ["a"]);//both arrays with non-empty string
assert.deepEqual(findIntersection(["b"],["a","b"]), ["b"]);//first array with one element of second array(string type)
assert.deepEqual(findIntersection(["a","b"],["b"]), ["b"]);//second array with one element of first array(string type)
assert.deepEqual(findIntersection(["a","b"],["a","b"]), ["a","b"]);//both identical arrays with two elements(string type)
assert.deepEqual(findIntersection(["a","b"],["c","d"]), []);//both distinct arrays with two elements(string type)

//Tests for finding difference of two arrays :
assert.deepEqual(findDifference([],[]), []);//both arrays empty
assert.deepEqual(findDifference([1],[1]), []);//second array empty
assert.deepEqual(findDifference([],[1]), []);//first array empty
assert.deepEqual(findDifference([1],[1]), []);//both arrays with one element(identical)
assert.deepEqual(findDifference([2],[1,2]), []);//first array with one element of second array
assert.deepEqual(findDifference([1,2],[2]), [1]);//second array with one element of first array
assert.deepEqual(findDifference([1,2],[1,2]), []);//both identical arrays with two elements
assert.deepEqual(findDifference([1,2],[3,4]), [1,2]);//both distinct arrays with two elements
assert.deepEqual(findDifference([1,2,3,3],[1,2]), [3]);
assert.deepEqual(findDifference([1,2,3,3],[1,3]), [2]);
assert.deepEqual(findDifference([1,2,3,3],[3,4]), [1,2]);

assert.deepEqual(findDifference([""],[]), [""]);//first array with empty string and second array empty
assert.deepEqual(findDifference([],[""]), []);//second array with empty string and first array empty
assert.deepEqual(findDifference([""],[""]), []);//both arrays with empty string
assert.deepEqual(findDifference(["a"],[]), ["a"]);//first array with non-empty string and second array empty
assert.deepEqual(findDifference([],["a"]), []);//second array with non-empty string and first array empty
assert.deepEqual(findDifference(["a"],["a"]), []);//both arrays with non-empty string
assert.deepEqual(findDifference(["b"],["a","b"]), []);//first array with one element of second array(string type)
assert.deepEqual(findDifference(["a","b"],["b"]), ["a"]);//second array with one element of first array(string type)
assert.deepEqual(findDifference(["a","b"],["a","b"]), []);//both identical arrays with two elements(string type)
assert.deepEqual(findDifference(["a","b"],["c","d"]), ["a","b"]);//both distinct arrays with two elements(string type)

//Tests for finding whether an array is proper subset of another :
assert.equal(isSubset([],[]), true);//both arrays empty
assert.equal(isSubset([],["a"]), false);//first array empty
assert.equal(isSubset(["a"],[]), true);//second array empty
assert.equal(isSubset(["a",1],["a",1]), true);//both arrays identical
assert.equal(isSubset([1,2,3,4],[1,4,5]), false);//all the elements of second array are not present in first array
assert.equal(isSubset([1,2,3,4],[1,4]), true);//all the elements of second array are present in first array

//Tests for creating a new array by joining elements of same index of two arrays :
assert.deepEqual(zip([],[]), []);//both arrays empty
assert.deepEqual(zip([],[1]), []);//first array empty
assert.deepEqual(zip([1],[]), []);//second array empty
assert.deepEqual(zip([1],[2,3]), [[1,2]]);//first array has less elements
assert.deepEqual(zip([1,2],[3]), [[1,3]]);//second array has less elements
assert.deepEqual(zip([1,2],[3,4]), [[1,3],[2,4]]);//both arrays have same number of elements
assert.deepEqual(zip(["a","b","c"],["i","l"]), [["a","i"],["b","l"]]);//arrays of strings

//Tests for creating partition of an array into greater and lesser number arrays :
assert.deepEqual(partition([],5), [[],[]]);//both partitions empty
assert.deepEqual(partition([1,2,3,4,5],10), [[1,2,3,4,5], []]);//right partition empty
assert.deepEqual(partition([1,2,3,4,5],0), [[], [1,2,3,4,5]]);//left partition empty
assert.deepEqual(partition([1,2,3,4,5],3), [[1,2,3],[4,5]]);//no partition empty
assert.deepEqual(partition([11,29,3,40,5,9],10), [[3,5,9],[11,29,40]]);

//Tests for checking whether an array is in ascending order :
assert.equal(isAscending([]), true);
assert.equal(isAscending([1,1,1]), true);
assert.equal(isAscending([2,1,3]), false);
assert.equal(isAscending([1,2,3]), true);
assert.equal(isAscending([3,2,1]), false);

//Tests for checking whether an array is in descending order :
assert.equal(isDescending([]), true);
assert.equal(isDescending([1,1,1]), true);
assert.equal(isDescending([3,1,2]), false);
assert.equal(isDescending([3,2,1]), true);
assert.equal(isDescending([1,2,3]), false);

assert.deepEqual(rotate([1,2,3,4], 2), [3,4,1,2]);
assert.deepEqual(rotate(["a","b","c","d","e"],1), ["b", "c", "d", "e", "a"]);
