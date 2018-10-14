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


exports.selectEvenNumber = selectEvenNumber;
exports.selectOddNumber = selectOddNumber;
