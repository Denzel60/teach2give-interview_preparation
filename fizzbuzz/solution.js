// Write a program that outputs the numbers from 1 to 100. For numbers that are multiples of 3, print "number - Fizz". 
// For numbers that are multiples of 5, print "number - Buzz". For numbers that are multiples of both 3 and 5, print "number - FizzBuzz". 
// If a number is not divisible by either 3 or 5, simply print the number itself. 

for(let i=1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} - FizzBuzz`)
    } else if (i % 3 == 0){
        console.log(`${i} - Fizz`)
    } else if (i % 5 == 0){
        console.log(`${i} - Buzz`)
    } else {
        console.log(`${i}`)
    }
}