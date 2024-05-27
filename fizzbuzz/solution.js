// Write a program that outputs the numbers from 1 to 100. For numbers that are multiples of 3, print "number - Fizz". 
// For numbers that are multiples of 5, print "number - Buzz". For numbers that are multiples of both 3 and 5, print "number - FizzBuzz". 
// If a number is not divisible by either 3 or 5, simply print the number itself. 
module.exports = {fizzbuzz};

function fizzbuzz(i){
        if(i % 3 == 0 && i % 5 == 0){
            return `${i} - FizzBuzz`;
        } else if (i % 3 == 0){
            return `${i} - Fizz`;
        } else if (i % 5 == 0){
            return `${i} - Buzz`;
        } else (i % 3 !== 0 && i % 5 !== 0);{
            return `${i}`;
        }    
}

console.log(fizzbuzz(22));