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


//////// 11-04-2022 5kyu
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

//////// 12-04-2022 8kyu
//////// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  return numbers.reduce((acc, curr) => Math.pow(curr, 2) + acc, 0);
}

//////// 13-04-2022 8kyu
//////// Remove String Spaces

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return newStr = x.replace(/\s+/g, '')
}

//////// 14-04-2022 8kyu
//////// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let i = 0;
  arrayOfSheep.forEach(el => el ? i++ : i)
  return i;
}

//////// 15-04-2022 8kyu
//////// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time*0.5);
}

//////// 16-04-2022 8kyu
//////// Century From Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  let yearDivided = year/100;
  let roundedCentury = Math.floor(yearDivided);
  return yearDivided > roundedCentury ? roundedCentury + 1 : roundedCentury;
}

//////// 17-04-2022 8kyu
//////// Convert a String to a Number!

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

var stringToNumber = function(str){
  return +str;
}

//////// 18-04-2022 7kyu
//////// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  return nums ? nums.sort((a, b) => a - b) : [];
}

//////// 19-04-2022 7kyu
//////// Narcissistic Numbers

// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

function isNarcissistic(n){
  let arrayN = [...String(n)].map(el => Number(el) ** [...String(n)].length)
                             .reduce((acc, cur) => acc + cur, 0);
                             
  return arrayN === n ? true : false;
}

//////// 20-04-2022 7kyu
//////// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return +num.toString().split('').map(el => el ** 2).join('');
}

//////// 21-04-2022 7kyu
//////// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  return name.split(' ').map(el => el[0].toUpperCase()).join('.')
}

//////// 22-04-2022 7kyu
//////// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//////// 23-04-2022 7kyu
//////// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  return s.length % 2 === 0 ? s.slice(s.length/2-1, s.length/2+1) : s[Math.ceil(s.length/2-1)]
}

//////// 24-04-2022 7kyu
//////// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return Number(String(n).split('').sort((a, b) => b - a).join(''))
}

//////// 25-04-2022 7kyu
//////// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter(el => typeof el === 'number')
}

//////// 26-04-2022 6kyu
//////// Replace With Alphabet Position

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return text.replace(/[^a-zA-Z]/g, '')
             .split('')
             .map(el => alphabet.indexOf(el.toLowerCase()) + 1)
             .join(' ')
}

//////// 27-04-2022 6kyu
//////// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {

  return (pin.length !== 4 && pin.length !== 6) ? false : pin.search(/[^0-9]/g) === -1 ? true : false;

  // if(pin.length !== 4 && pin.length !== 6) {
  //   return false;
  // } else {
  //   return pin.search(/[^0-9]/g) === -1 ? true : false
  // }
}