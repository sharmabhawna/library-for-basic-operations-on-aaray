const segregateEvenOdd = function(numbers){
  let segregatedNumbers = { evenNumbers : [], oddNumbers : [] }
  let selectKey = { true : "evenNumbers", false : "oddNumbers" };
  
  for(let index = 0; index < numbers.length; index++){
    let key = selectKey[isEven(numbers[index])];
    segregatedNumbers[key].push(numbers[index]);
  }
  
  return segregatedNumbers;
}

const isEven = function(number){
  return (number % 2 == 0);
}

const extractEvenNumbers = function(numbers){
  return segregateEvenOdd(numbers)["evenNumbers"];
}

const extractOddNumbers = function(numbers){
  return segregateEvenOdd(numbers)["oddNumbers"];
}

const computeSum = function(numbers){
  let sum = 0;
  for(let index = 0; index < numbers.length; index++){
    sum = sum + numbers[index];
  }
  return sum;
}


const reverse = function(elements){
  let result = [];
  for(let index = elements.length-1; index >= 0; index--){
    result.push(elements[index]);
  }
  return result;
}

const selectEverySecondElement = function(elements){
  let result = [];
  for(let index = 0; index < elements.length; index+=2){
      result.push(elements[index]);
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
  for(let index = 0; index < secondArray.length; index++){
    result[index] = [firstArray[index],secondArray[index]];
  }
  return result;
}

const partition = function(array,number){
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
  let result = [];
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
exports.ascendingSort = ascendingSort;
exports.descendingSort = descendingSort;
exports.rotate = rotate;
