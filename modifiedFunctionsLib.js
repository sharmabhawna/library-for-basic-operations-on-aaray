const extractOddNumbers = function(numbers) {
  return numbers.filter(function(n){ return n % 2 });
}

exports.extractOddNumbers = extractOddNumbers;
