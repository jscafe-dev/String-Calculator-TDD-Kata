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

    const numberArray = numberString.split(delimiter).map(Number);

    const negatives = numberArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numberString
      .split(delimiter)
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
