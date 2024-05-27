const {fizzbuzz} = require('./solution');

describe ("Fizz", () => {
    test('FizzBuzz for 3 should return "Fizz"', () => {
      expect(fizzbuzz(3)).toBe('3 - Fizz');
    });
      
    test('FizzBuzz for 5 should return "Buzz"', () => {
      expect(fizzbuzz(5)).toBe('5 - Buzz');
    });
      
    test('FizzBuzz for 15 should return "FizzBuzz"', () => {
      expect(fizzbuzz(15)).toBe('15 - FizzBuzz');
    });

    test('FizzBuzz for 22 should return "nothing"', () => {
        expect(fizzbuzz(22)).toBe('22');
    });
});

