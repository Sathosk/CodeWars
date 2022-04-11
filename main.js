///////// 18-03-2022 8kyu
/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2] */

function powersOfTwo(n){
    let arr = [];
    
    for (let i=0; i<=n; i++) {
      arr.push(Math.pow(2, i));
    }
    
    return arr;
  }

///////// 19-03-2022 8kyu
/* Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her? */

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

//////// 20-03-2022 8kyu
/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"*/

function highAndLow(numbers) {
  numbers = numbers.split(' ').sort((a, b) => a-b);
  return numbers[numbers.length - 1] + ' ' + numbers[0];
}

//////// 21-03-2022 8kyu
//////// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//////// 21-03-2022 7kyu
//////// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  const smallestNumber = Math.min(a, b),
        biggestNumber = Math.max(a, b);
  let result = 0;

  for (let i=smallestNumber; i<=biggestNumber; i++) {
    result += i; 
  }

  return output;
}

//////// 21-03-2022 7kyu
//////// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	return [...s].map((element, i) => {
    i++;
    const str = element.repeat(i).toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }).join('-');
}

//////// 22-03-2022 8kyu
//////// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation = num => num * (1 + num) / 2;

//////// 23-03-2022 6kyu
//////// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(string){
  return string.split(' ').map(element => element.length >= 5 ? element.split('').reverse().join('') : element).join(' ');
}
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//           spinWords( "This is a test") => returns "This is a test" 
//           spinWords( "This is another test" )=> returns "This is rehtona test"


//////// 24-03-2022 6kyu
//////// Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let arr = str.split('');
   (arr.length % 2 !== 0) ? arr.push('_') : arr;
   for (let i=2; i<=arr.length; i++) {
     if (i % 3 === 0) {
       arr.splice(i-1, 0, '.')
     }
   }
   return arr.length === 0 ? arr = [] : arr.join('').split('.');
}


//////// 25-03-2022 6kyu
//////// Is a number prime?
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  console.log(limit)
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//////// 26-03-2022 8kyu
//////// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(num) {
  return (-num);
}

//////// 03-04-2022 8kyu
//////// Convert a Number to a String!
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

function numberToString(num) {
  // return String(num);
  // return num.toString();
  return "" + num;
}

//////// 03-04-2022 8kyu
//////// Convert a Number to a String!
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}

//////// 04-04-2022 8kyu
//////// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split('').reverse().join('');
}

//////// 04-04-2022 8kyu
//////// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.map(element => element > 0 ? element : 0).reduce((acc, curr) => acc += curr, 0);
}

//////// 05-04-2022 8kyu
//////// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  return num <= 0 ? num : -num;
}

//////// 06-04-2022 8kyu
//////// String repeat

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n);
}

//////// 07-04-2022 8kyu
//////// Remove First and Last Character
// Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str){
  return str.slice(1, -1);
 };


//////// 08-04-2022 7kyu
//////// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).
 
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  let vowelArray = ['a', 'e', 'i', 'o', 'u']
  
  for (let i=0; i<str.length; i++) {
    if (vowelArray.includes(str[i])) {
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}

//////// 10-04-2022 8kyu
//////// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a-b)[0] 
  }
}


//////// 10-04-2022 5kyu
//////// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  let arr = url.split('.');
  if (arr.includes('www')) {
    return arr[1];
  } else if (arr[0].split('//').includes('www')) {
    return arr[1];
  } else if (arr[0].includes('//')) {
    return arr[0].split('//')[1];
  } else {
    return arr[0];
  }
}
