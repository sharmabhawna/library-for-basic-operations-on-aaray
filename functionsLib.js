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




exports.selectEvenNumber = selectEvenNumber;
exports.selectOddNumber = selectOddNumber;
exports.calculateSumOfArrayElements = calculateSumOfArrayElements;
exports.reverseArrayElements = reverseArrayElements;
exports.selectEverySecondElement = selectEverySecondElement;
exports.generateReverseFibonacci = generateReverseFibonacci;

