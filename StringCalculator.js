class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    const delimiter = /,|\n/;
    const numberArray = numbers.split(delimiter).map(Number);

    const negatives = numberArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
