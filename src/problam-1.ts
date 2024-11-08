  const sumArray = (numbers: number[]): number => {
    return numbers.reduce(
      (firstNumber, currentNumber) => firstNumber + currentNumber,
      0
    );
  };
  const sumNumber = sumArray([1, 2, 3, 4, 5]);
  //console.log(sumNumber);