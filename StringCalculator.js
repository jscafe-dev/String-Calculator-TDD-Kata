class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
    const delimiter = /,|\n/;
    const numberArray = numbers.split(delimiter).map(Number);
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
