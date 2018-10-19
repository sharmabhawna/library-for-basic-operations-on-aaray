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
  let greaterNumbers = partitionArray(array,number)[1];
  return greaterNumbers.length;
}

const countElementsLesserThanGivenNumber = function(array, number){
  let lesserNumbers = partitionArray(array,number)[0];
  if(lesserNumbers.includes(number)){
    return lesserNumbers.length-1;
  }
  return lesserNumbers.length;
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

const zipArrays = function(firstArray, secondArray){
  let result = [];
  for(let index = 0; index < secondArray.length; index++){
    result[index] = [firstArray[index],secondArray[index]];
  }
  return result;
}

const partitionArray = function(array,number){
  let result = [];
  let segregatedNumbers = { greaterNumbers : [], lesserNumbers : [] };
  for(let index = 0; index < array.length; index++){
    let key = "greaterNumbers";
    if(array[index] <= number){
      key = "lesserNumbers";
    }
    segregatedNumbers[key].push(array[index]);
  }
  result.push(segregatedNumbers["lesserNumbers"]);
  result.push(segregatedNumbers["greaterNumbers"]);
  return result;
}

const ascendingSort = function(numbers){
  for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length-i; j++){
      if(numbers[j] > numbers[j+1]){
        let temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
  }
  return numbers;
}

const descendingSort = function(numbers){
  for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length-i; j++){
      if(numbers[j] < numbers[j+1]){
        let temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
  }
  return numbers;
}

const rotate = function(elements, element){
  let result = [];
  let index = findIndex(elements, element);
  for(let i = index+1; i < elements.length; i++){
    result.push(elements[i]);
  }
  for(let j = 0; j <= index; j++){
    result.push(elements[j]);
  }
  return result;
}

exports.selectEvenNumbers = selectEvenNumbers;
exports.selectOddNumbers = selectOddNumbers;
exports.calculateSum = calculateSum;
exports.reverse = reverse;
exports.selectEverySecondElement = selectEverySecondElement;
exports.generateReverseFibonacci = generateReverseFibonacci;
exports.findGreatestNumber = findGreatestNumber;
exports.findLowestNumber = findLowestNumber;
exports.calculateAverage = calculateAverage;
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
exports.ascendingSort = ascendingSort;
exports.descendingSort = descendingSort;
exports.rotate = rotate;
