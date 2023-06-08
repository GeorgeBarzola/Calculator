
it('should calculate the monthly rate correctly', () => {
  expect(calculateMonthlyPayment({amount: 30000, years: 20, rate:7})).toEqual("232.59");
  expect(calculateMonthlyPayment({amount: 0, years: 50, rate:10})).toEqual("0.00");
});

it("should return a result with 2 decimal places", () => {
  expect(calculateMonthlyPayment({amount: 12000, years: 5, rate:8})).toMatch(/.\d\d$/);
});

it("should throw an error when given invalid input", () => {
  expect(() => {calculateMonthlyPayment("nope")}).toThrow();
  expect(() => {calculateMonthlyPayment("")}).toThrow();
  expect(() => {calculateMonthlyPayment(undefined)}).toThrow();
  expect(() => {calculateMonthlyPayment(null)}).toThrow();
});