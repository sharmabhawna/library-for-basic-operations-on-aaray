const isEven = function (number) { return number % 2 == 0 } ;

const isOdd = function (number) { return number % 2 } ;

const extractEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}

const extractOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

const add = function(firstNum, secondNum) {
  return firstNum + secondNum;
}

const computeSum = function(numbers){
  return numbers.reduce( add , 0);
}

const insertAtStart = function (array, element) {
  array.unshift(element);
  return array ;
}

const reverse = function(elements){
  return elements.reduce( insertAtStart, []);
}

const extractEveryNthElement = function(state, element) {
  let { index, count, elements } = state;
  if( index % count == 0){
    elements.push(element);
  }
    index = index + 1;
  return { index, count , elements };
}

const extractEverySecondElement = function(elements){
  let state = { index : 0, count : 2, elements : [] };
  return elements.reduce(extractEveryNthElement, state).elements;
}

const generateFibonacci = function(length){
  let result = [];
  let firstNum = -1;
  let secondNum = 1;
  for(let count = 0; count < length; count++){
    let nextNum = firstNum + secondNum;
    result.push(nextNum);
    firstNum = secondNum;
    secondNum = nextNum;
  }
  return result;
}

const generateReverseFibonacci = function(length){
  let fibonacci = generateFibonacci(length);
  return reverse(fibonacci);
}

const extractGreaterNumber = function(accumulator, currentValue) {
  if(accumulator > currentValue){ return accumulator };
  return currentValue;
}

const extractGreatestNumber = function(numbers) {
  if(numbers.length == 0) { return 0 };
  return numbers.reduce(extractGreaterNumber);
}

const extractLesserNumber = function(accumulator, currentValue) {
  if(accumulator < currentValue) { return accumulator };
  return currentValue;
}

const extractSmallestNumber = function(numbers){
  if(numbers.length == 0) { return 0 };
  return numbers.reduce(extractLesserNumber);
}

const computeAverage = function(numbers){
  let sum = computeSum(numbers);
  if(sum == 0){
    return 0;
  }
  let numberOfElements = numbers.length;
  return sum/numberOfElements;
}

const mapLengths = function(stringsArray){
  return stringsArray.map( function (string) { return string.length } );
}

const countOddNumbers = function(numbers){
  oddNumbers = extractOddNumbers(numbers);
  return oddNumbers.length;
}

const countEvenNumbers = function(numbers){
  evenNumbers = extractEvenNumbers(numbers);
  return evenNumbers.length;
}

const countNumbersGreaterThan = function(array, number){
  let greaterNumbers = partition(array,number)[1];
  return greaterNumbers.length;
}

const countNumbersLesserThan = function(array, number){
  let lesserNumbers = partition(array,number)[0];
  if(lesserNumbers.includes(number)){
    return lesserNumbers.length-1;
  }
  return lesserNumbers.length;
}

const findEveryIndex = function(stats, currentElement) {
  let {currentIndex, index, element } = stats;
  currentIndex = currentIndex + 1;
  if(element == currentElement){
    index.push(currentIndex);
  }
  return { currentIndex, index, element }
}

const findFirstIndex = function(array, element){
  let stats = { currentIndex : -1, index : [], element : element };
  let  indexes = array.reduce(findEveryIndex, stats).index;
  if(indexes.length == 0){
    return -1;
  }
  return indexes[0];
}

const extractDigits = function(number){
  let digits = [];
  while(number > 0){
    let digit = number % 10;
    number = Math.floor(number / 10);
    digits.unshift(digit);
  }
  return digits;
}

const extractUniqueElements = function(array, element) 
  if(!array.includes(element)){
    array.push(element);
  }
    return array;
}

const findUnique = function(elements){
  return elements.reduce(extractUniqueElements, []);
}

const insertAtEnd = function(array, element){
  array.push(element);
  return array;
}

const findUnion = function(firstArray, secondArray){
  let joinedArray = secondArray.reduce( insertAtEnd, firstArray);
  return findUnique(joinedArray);
}

const extractIdenticalElements = function(accumulator, element) {
  let { array, identicalElements } = accumulator;
  if(array.includes(element)){
    identicalElements.push(element);
  }
  return { array, identicalElements };
}

extractDifferentElements = function(accumulator, element) {
  let { array, differentElements } = accumulator;
  if(!array.includes(element)){
    differentElements.push(element);
  }
  return { array, differentElements };
}

const findIntersection = function(firstArray, secondArray){
  let initialValue = { array : firstArray, identicalElements : [] };
  return  secondArray.reduce(extractIdenticalElements, initialValue).identicalElements;
}

const findDifference = function(firstArray, secondArray){
  let initialValue = { array : secondArray, differentElements : [] };
  return findUnique(firstArray.reduce(extractDifferentElements, initialValue).differentElements);
}

const isSubset = function(superSet, subSet){
  for(let index = 0; index < subSet.length; index++){
    if(!superSet.includes(subSet[index])){
      return false;
    }
  }
  return true;
}

const zip = function(firstArray, secondArray){
  let result = [];
  let length = firstArray.length;
  if(secondArray.length < length){
    length = secondArray.length;
  }
  for(let index = 0; index < length; index++){
    result[index] = [firstArray[index],secondArray[index]];
  }
  return result;
}

const partition = function(array,number){
  let result = [[],[]];
  for(let index = 0; index < array.length; index++){
    let requiredIndex = 1;
    if(array[index] <= number){
      requiredIndex = 0;
    }
    result[requiredIndex].push(array[index]);
  }
  return result;
}

const isAscending = function(array){
  for(let index = 0; index < array.length; index++){
    if(array[index] > array[index+1]){
      return false;
    }
  }
  return true;
}
  
const isDescending = function(array){
  for(let index = 0; index < array.length; index++){
    if(array[index] < array[index+1]){
      return false;
    }
  }
  return true;
}

const rotate = function(elements, index){
  let result = [];
  for(let i = index+1; i < elements.length; i++){
    result.push(elements[i]);
  }
  for(let j = 0; j <= index; j++){
    result.push(elements[j]);
  }
  return result;
}

exports.extractEvenNumbers = extractEvenNumbers;
exports.extractOddNumbers = extractOddNumbers;
exports.computeSum = computeSum;
exports.reverse = reverse;
exports.extractEverySecondElement = extractEverySecondElement;
exports.generateReverseFibonacci = generateReverseFibonacci;
exports.extractGreatestNumber = extractGreatestNumber;
exports.extractSmallestNumber = extractSmallestNumber;
exports.computeAverage = computeAverage;
exports.mapLengths = mapLengths;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.countNumbersGreaterThan = countNumbersGreaterThan;
exports.countNumbersLesserThan = countNumbersLesserThan;
exports.findFirstIndex = findFirstIndex;
exports.extractDigits = extractDigits;
exports.findUnique = findUnique;
exports.findUnion = findUnion;
exports.findIntersection = findIntersection;
exports.findDifference = findDifference;
exports.isSubset = isSubset;
exports.zip = zip;
exports.partition = partition;
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.rotate = rotate;
