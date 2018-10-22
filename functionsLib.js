const isEven = function (number) { return number % 2 == 0 } ;

const isOdd = function (number) { return number % 2 } ;

const extractEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}

const extractOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

const computeSum = function(numbers){
  return numbers.reduce( function (num1, num2) { return num1 + num2 }, 0 );
}

const reverse = function(elements){
  return elements.reduce( function (array, element) { array.unshift(element); return array }, [] );
}

const selectEveryNthElement = function(state, element) {
  let { index, count, elements } = state;
  if( index % count == 0){
    elements.push(element);
  }
    index = index + 1;
  return { index, count , elements };
}

const selectEverySecondElement = function(elements){
  return elements.reduce(selectEveryNthElement, { index : 0, count : 2, elements : [] } ).elements;
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

const extractGreatestNumber = function(numbers){
  let greatestNumber = numbers[0];
  for(let index = 1; index < numbers.length; index++){
    if(numbers[index] > greatestNumber){
      greatestNumber = numbers[index];
    }
  }
  return greatestNumber;
}

const extractSmallestNumber = function(numbers){
  let lowestNumber = numbers[0];
  for(let index = 1; index < numbers.length; index++){
    if(numbers[index] < lowestNumber){
      lowestNumber = numbers[index];
    }
  }
  return lowestNumber;
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
  let result = [];
  for(let index = 0; index < stringsArray.length; index++){
    result.push(stringsArray[index].length);
  }
  return result;
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


const findIndex = function(array, element){
  let result = -1;
  for(let index = 0; index < array.length; index++){
    if(array[index] == element){
      result = index;
    }
    if(result != -1){
      return result;
    }
  }
  return result;
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

const findUnique = function(elements){
  let uniqueElements = [];
  for(let index = 0; index < elements.length; index++){
    let hasElement = uniqueElements.includes(elements[index]);
    if(!hasElement){
      uniqueElements.push(elements[index]);
    }
  }
  return uniqueElements;
}

const findUnion = function(firstArray, secondArray){
  for(let index = 0; index < secondArray.length; index++){
    firstArray.push(secondArray[index]);
  }
  return findUnique(firstArray);
}

const findIntersection = function(firstArray, secondArray){
  let commonElements = [];
  for(let index = 0; index < firstArray.length; index++){
    if(secondArray.includes(firstArray[index])){
      commonElements.push(firstArray[index]);
    }
  }
  return findUnique(commonElements);
}

const findDifference = function(firstArray, secondArray){
  let result = [];
  for(let index = 0; index < firstArray.length; index++){
    if(!secondArray.includes(firstArray[index])){
      result.push(firstArray[index]);
    }
  }
  return findUnique(result);
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
exports.selectEverySecondElement = selectEverySecondElement;
exports.generateReverseFibonacci = generateReverseFibonacci;
exports.extractGreatestNumber = extractGreatestNumber;
exports.extractSmallestNumber = extractSmallestNumber;
exports.computeAverage = computeAverage;
exports.mapLengths = mapLengths;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.countNumbersGreaterThan = countNumbersGreaterThan;
exports.countNumbersLesserThan = countNumbersLesserThan;
exports.findIndex = findIndex;
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
