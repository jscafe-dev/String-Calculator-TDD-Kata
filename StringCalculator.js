class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    let numberString = numbers;

    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));
      numberString = numbers.substring(delimiterEnd + 1);
    }

    return numberString
      .split(delimiter)
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
