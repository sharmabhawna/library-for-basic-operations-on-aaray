const extractOddNumbers = function(numbers) {
  return numbers.filter(function(n){ return n % 2 });
}

const extractEvenNumbers = function(numbers) {
  return numbers.filter(function(n){ return n % 2 == 0 });
}

const computeSum = function(numbers){
  return numbers.reduce(function(n1,n2){ return n1 + n2 },0);
}

const reverse = function(elements){
  return elements.reduce(function(n1,n2){ return [n2].concat(n1) },[]);
}

exports.extractOddNumbers = extractOddNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
exports.computeSum = computeSum;
exports.reverse = reverse;
