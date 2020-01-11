const { receiveNumbers, isPrime } = require("../index");

test("check task recruit", () => {
  const receiveNumbersTest = receiveNumbers(
    [2, 3, 9, 2, 5, 1, 3, 7, 10],
    [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]
  );

  expect(receiveNumbersTest).toStrictEqual([2, 9, 2, 5, 7, 10]);
});

describe("check prime number", () => {
  it("check if provided number is not a prime number", () => {
    const checkPrimeNumber = isPrime(123);

    expect(checkPrimeNumber).toStrictEqual(false);
  });

  it("check if number one is not a prime number", () => {
    const checkPrimeNumber = isPrime(1);

    expect(checkPrimeNumber).toStrictEqual(false);
  });

  it("check if provided number is a prime number", () => {
    const checkPrimeNumber = isPrime(2);

    expect(checkPrimeNumber).toStrictEqual(true);
  });

  it("check if provided big number is a prime number", () => {
    const checkPrimeNumber = isPrime(127);

    expect(checkPrimeNumber).toStrictEqual(true);
  });
});
