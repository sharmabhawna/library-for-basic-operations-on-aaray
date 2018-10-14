const segregateEvenOdd = function(numberType, numbers){
  let evenOddNumbers = { evenNumbers : [], oddNumbers : [] }
  let selectKey = { true : "evenNumbers", false : "oddNumbers" };
  for(let index = 0; index < numbers.length; index++){
     let key = selectKey[isEven(numbers[index])];
    evenOddNumbers[key].push(numbers[index]);
  }
  let requiredKey = numberType + "Numbers";
  return evenOddNumbers[requiredKey];
}

const isEven = function(number){
  return (number % 2 == 0);
}

const selectEvenNumber = function(numbers){
  return segregateEvenOdd("even" , numbers);
}

const selectOddNumber = function(numbers){
  return segregateEvenOdd("odd" , numbers);
}

const calculateSumOfArrayElements = function(numbers){
  let sum = numbers[0];
  for(let index = 1; index < numbers.length; index++){
    sum = sum + numbers[index];
  }
  return sum;
}

const reverseArrayElements = function(numbers){
  let result = [];
  for(let index = numbers.length-1; index >= 0; index--){
    result.push(numbers[index]);
  }
  return result;
}

const selectEverySecondElement = function(numbers){
  let result = [];
  for(let index = 0; index < numbers.length; index++){
    if(isEven(index)){
      result.push(numbers[index]);
    }
  }
  return result;
}

const generateFibonacci = function(length){
  let firstNum = 0;
  let secondNum = 1;
  let result = [firstNum,secondNum];
  for(let count = 3; count <= length; count++){
    let nextNum = firstNum + secondNum;
    result.push(nextNum);
    firstNum = secondNum;
    secondNum = nextNum;
  }
  return result;
}
 
const generateReverseFibonacci = function(length){
  let fibonacci = generateFibonacci(length);
  return reverseArrayElements(fibonacci);
}

const findGreatestArrayElement = function(numbers){
  let greatestNumber = numbers[0];
  for(let index = 1; index < numbers.length; index++){
    if(numbers[index] > greatestNumber){
      greatestNumber = numbers[index];
    }
  }
  return greatestNumber;
}

const findLowestArrayElement = function(numbers){
  let lowestNumber = numbers[0];
  for(let index = 1; index < numbers.length; index++){
    if(numbers[index] < lowestNumber){
      lowestNumber = numbers[index];
    }
  }
  return lowestNumber;
}

const calculateAverageOfArrayElements = function(numbers){
  let sum = calculateSumOfArrayElements(numbers);
  let numberOfElements = numbers.length;
  return sum/numberOfElements;
}

const mappingLengths = function(stringArray){
  let result = [];
  for(let index = 0; index < stringArray.length; index++){
    result.push(stringArray[index].length);
  }
  return result;
}

const countOddNumbers = function(numbers){
  oddNumbers = selectOddNumbers(numbers);
  return oddNumbers.length;
}

const countEvenNumbers = function(numbers){
  evenNumbers = selectEvenNumbers(numbers);
  return evenNumbers.length;
}

const countElementsGreaterThanGivenNumber = function(array, number){
  let count = 0;
  for(let index = 0; index < array.length; index++){
    if(array[index] > number){
      count++;
    }
  }
  return count;
}

const findIndex = function(array, element){
  let result = "could not find";
  for(let index = 0; index < array.length; index++){
    if(array[index] == element){
      result = index;
    }
    if(result != "could not find"){
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
    digits.push(digit);
  }
  return reverseArrayElements(digits);
}

exports.selectEvenNumbers = selectEvenNumbers;
exports.selectOddNumbers = selectOddNumbers;
exports.calculateSumOfArrayElements = calculateSumOfArrayElements;
exports.reverseArrayElements = reverseArrayElements;
exports.selectEverySecondElement = selectEverySecondElement;
exports.generateReverseFibonacci = generateReverseFibonacci;
exports.findGreatestArrayElement = findGreatestArrayElement;
exports.findLowestArrayElement = findLowestArrayElement;
exports.calculateAverageOfArrayElements = calculateAverageOfArrayElements;
exports.mappingLengths = mappingLengths;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.countElementsGreaterThanGivenNumber = countElementsGreaterThanGivenNumber;
exports.findIndex = findIndex;
exports.extractDigits = extractDigits;
