const fizzBuzz = require('./fizzBuzz');


test('Array is of size 100', () => {
  let fb = fizzBuzz();
  expect(fb.length === 100);
})

test('Index 2 returns Fizz', () => {
  let fb = fizzBuzz();
  expect(fb[2]).toBe("Fizz");
});

test('Index 4 returns Buzz', () => {
  let fb = fizzBuzz();
  expect(fb[4]).toBe("Buzz");
});

test('Index 14 returns FizzBuzz', () => {
  let fb = fizzBuzz();
  expect(fb[14]).toBe("FizzBuzz");
});