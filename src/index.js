function receiveNumbers(arrayA, arrayB) {
  const outputArray = [];
  let occurencesCount = 0;

  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j <= arrayB.length; j++) {
      if (arrayA[i] === arrayB[j]) occurencesCount++;
    }

    const checkPrimeNumber = isPrime(occurencesCount);

    if (!checkPrimeNumber) outputArray.push(arrayA[i]);

    occurencesCount = 0;
  }

  return outputArray;
}

function isPrime(num) {
  for (let i = 2, squareRoot = Math.sqrt(num); i <= squareRoot; i++)
    if (num % i === 0) return false;
  return num > 1;
}

receiveNumbers(
  [2, 3, 9, 2, 5, 1, 3, 7, 10],
  [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]
);

module.exports = {
  receiveNumbers,
  isPrime
};
