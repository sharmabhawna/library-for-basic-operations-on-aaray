const extractOddNumbers = function(numbers) {
  return numbers.filter(function(n){ return n % 2 });
}

const extractEvenNumbers = function(numbers) {
  return numbers.filter(function(n){ return n % 2 == 0 });

}

exports.extractOddNumbers = extractOddNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
