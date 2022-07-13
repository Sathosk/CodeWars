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

//////// 28-04-2022 7kyu
//////// Bingo ( Or Not )

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// function bingo(array) {
//   let bingo = 'BINGO'.split('')
  
//   let newArr = array.map(number => (number+9).toString(36).toUpperCase())

//   return bingo.map(letter => newArr.includes(letter)).includes(false) ? 'LOSE' : 'WIN';
// }

function bingo(array) {
  return [2, 9, 14, 7, 15].every(n => array.includes(n)) ? 'WIN' : 'LOSE';
}

//////// 29-04-2022 6kyu
//////// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  let arrayDeNumero = x.split(' ')
                       .map(palavra => palavra.split('')
                                              .map(letra => letra.toLowerCase().charCodeAt() - 96))
                       .map(arrayNumero => arrayNumero.reduce((acumulador, atual) => acumulador + atual), 0);

  return x.split(' ')[arrayDeNumero.indexOf(Math.max(...arrayDeNumero))];
} 

//////// 30-04-2022 6kyu
//////// Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  return text.toLowerCase()
             .split('')
             .filter((element, index, array) => array.indexOf(element) !== index && array.lastIndexOf(element) === index)
             .length;
}

//////// 01-05-2022 6kyu
//////// Where is my parent!?(cry)

// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {
	return dancingBrigade.toLowerCase()
                       .split('')
                       .sort()
                       .map((element, index, array) => array.indexOf(element) === index ? element.toUpperCase() : element)
                       .join('')
}

//////// 02-05-2022 8kyu
//////// Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
  return (n < 0) || (m < 0) ? 0 : n * m;
}

//////// 03-05-2022 6kyu
//////// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Very smart solution
// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }

function findOdd(a) {
  return a.filter((number, index, array) => {
    let counter = 0;

    if (array.indexOf(number) === index) {
      for (i=0; i<array.length; i++) {
        array[i] === number ? counter++ : counter;
      }

      return counter % 2 !== 0;
    }
  })[0]
}

//////// 04-05-2022 8kyu
//////// Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  return (flower1+flower2) % 2 !== 0;
}

//////// 04-05-2022 7kyu
//////// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

//////// 05-05-2022 7kyu
//////// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  return s.split(' ')
          .reduce((acc, curr) => curr.length < acc ? acc = curr.length : acc, 10);
  //return s.split(' ').map(word => word.length).sort((a, b) => a - b)[0]
}

//////// 06-05-2022 7kyu
//////// Delete occurrences of an element if it occurs more than n times

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
  let newArr = [];

  return newArr;
}

//////// 06-05-2022 6kyu
//////// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them)..

function solution(number){
  let counter = 0;
  
  for (i=0; i<number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i;
    } 
  }
  return counter;
}

//////// 07-05-2022 7kyu
//////// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  return (a+b).toString(2)
}

//////// 08-05-2022 7kyu
//////// Reversed Sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let arr = [];
  for (i=n; i>0; i--) {
    arr.push(i)
  };
  return arr;
};

//////// 09-05-2022 7kyu
//////// Remove the minimum

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let newArr = [...numbers]
  newArr.splice(numbers.indexOf(Math.min.apply(null, numbers)), 1);
  return newArr;
}

//////// 10-05-2022 6kyu
//////// Run-length encoding

// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]

var runLengthEncoding = function(str){
  let arr = [], sum = 1;

  for (i=0; i<str.length; i++) {
    if (str[i] === str[i+1]) {
      sum++
    } else {
      arr.push([sum, str[i]])
      sum = 1;
    }

  }

  return arr
}

//////// 11-05-2022 8kyu
//////// Plural

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
  return n !== 1;
}


//////// 11-05-2022 8kyu
//////// Sum without highest and lowest number

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0

function sumArray(array) {
  if (array && array.length >= 3) {
    return array.filter((el, index, array) => { 

      const minValue = Math.min.apply(null, array)
      const maxValue = Math.max.apply(null, array)

      return ((minValue !== el || array.indexOf(minValue) !== index) &&
              (maxValue !== el || array.indexOf(maxValue) !== index)
      )
    }).reduce((sum, cur) => sum + cur)
  } else { return 0}
}

//////// 12-05-2022 8kyu
//////// You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.includes(x);
}

//////// 13-05-2022 6kyu
//////// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  const smileArray = [':)', ':-)', ':~)', ':D', ':-D', ':~D', ';)', ';-)', ';~)', ';D', ';-D', ';~D']

  return arr.reduce((acc, curr) => {
    if (smileArray.includes(curr)) {
      acc++
    } 

    return acc
  }, 0)
}


//////// 15-05-2022 8kyu
//////// Is he gonna survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
  return dragons * 2 <= bullets;
}
  
//////// 16-05-2022 6kyu
//////// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newArr = [];
  let lowerCaseStr = string.toLowerCase()

  for (let i=0; i<string.length;i++) {
    if (!newArr.includes(lowerCaseStr[i]) && alphabet.includes(lowerCaseStr[i])) {
      newArr.push(lowerCaseStr[i])
    }
  }

  return newArr.length === 26
}

//////// 17-05-2022 7kyu
//////// Ghostbusters (whitespace removal)

// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");
// Should return:

// "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

function ghostBusters(building) {
  return building.includes(' ') ? building.replace(/ /g, '') : "You just wanted my autograph didn't you?";
}

//////// 18-05-2022 7kyu
//////// Ones and Zeros

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

//////// 19-05-2022 7kyu
//////// Consecutive strings

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  if (k < 1 || k > strarr.length) return ''

  let biggestWord = '';

  for (let i=0; i<=strarr.length-k; i++) {
    let newStr = strarr[i] 

    for (let j=1; j<k; j++) {
      if (i > strarr.length - k) {return}
      newStr = newStr + strarr[i+j] 
    }
    console.log(newStr)
    if (newStr.length > biggestWord.length) biggestWord = newStr;
  }

  return biggestWord;
}

//////// 20-05-2022 6kyu
//////// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let newArr = [];

  for(let i=0; i<a.length; i++) {

    if (!b.includes(a[i])) {
      newArr.push(a[i])
    }
  }

  return newArr;
}

//////// 21-05-2022 8kyu
//////// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  let newStr = '';

  for (let i=0; i<str.length; i++) {
    newStr = newStr + str[i] + str[i]
  }

  return newStr;
}

//////// 22-05-2022 8kyu
//////// Find the first non-consecutive number

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return

function firstNonConsecutive (arr) {
  let number = arr[0];

  for (let i=1; i<arr.length; i++) {
    if (arr[i]-1 !== number) {
      return arr[i]
    } else {
      if (i+1 === arr.length) {return null}
      number = arr[i];
    }
  }
}

//////// 23-05-2022 6kyu
//////// Bouncing Balls

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  if ((h > 0) && (bounce > 0 && bounce < 1) && (window < h)) {
    let counter = 1;
    let bounceHeight = h * bounce;
    
    while (bounceHeight > window) {
      counter += 2;
      bounceHeight = bounceHeight * bounce;
    }

    return counter;
  }

  return -1;
}

//////// 23-05-2022 6kyu
//////// Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// function likes(names) {
//   if (names.length === 0) {
//     return 'no one likes this'
//   } 

//   else if (names.length <= 3) {
//     if (names.length === 1) {
//       return `${names[0]} likes this`
//     } 

//     else if (names.length === 2) {
//       return `${names[0]} and ${names[1]} like this`
//     }

//     return `${names[0]}, ${names[1]} and ${names[2]} likes this`
//   }
  
//   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// }

function likes(names) {
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

//////// 24-05-2022 8kyu
//////// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r' ? name + ' plays banjo' : name + ' does not play banjo'
}

//////// 25-05-2022 6kyu
//////// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

//////// 26-05-2022 6kyu
//////// Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  if (typeof iterable === 'string') {iterable = iterable.split('')}
  return iterable.filter((element, i, array) => {
    return array[i+1] === element ? false : true;
  })
}

//////// 27-05-2022 8kyu
//////// Count Odd Numbers below n

// DESCRIPTION:
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

function oddCount(n){
  return Math.floor(n/2);
}

//////// 28-05-2022 6kyu
//////// Money, Money, Money

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    let yearProfit = principal * interest;
    let yearTax = yearProfit * tax;

    principal += yearProfit - yearTax;
    years++
  }

  return years;
}

//////// 29-05-2022 7kyu
//////// The highest profit wins!

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples(Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)]; // fix me!
}

//////// 30-05-2022 8kyu
//////// Returning Strings

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// Make sure you type the exact thing I wrote or the program may not execute properly

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

//////// 01-06-2022 8kyu
//////// MakeUpperCase

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

//////// 02-06-2022 8kyu
//////// Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return  fuelLeft * mpg >= distanceToPump;
}

//////// 01-07-2022 8kyu
//////// Thinkful - Logic Drills: Traffic light

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  let trafficLight = {
    green: 'yellow',
    yellow: 'red',
    red: 'green'
  }

  return trafficLight[current]
}

//////// 02-07-2022 6kyu
//////// Mexican Wave

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

function wave(str){
  let waveArr = [];

  for (let i=0; i<str.length; i++) {
      if (str[i] !== ' ') {
        waveArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1, str.length))
      }
  }

  return waveArr
}

//////// 03-07-2022 8kyu
//////// Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

//////// 04-07-2022 6kyu
//////// Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let counter = 0;

   while (String(num).length > 1) {
    num = String(num).split('').reduce((acc, curr) => curr * acc)
    counter++
   }

   return counter;
}

//////// 05-07-2022 8kyu
//////// Sentence Smash

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  return words.join(' ');
}

//////// 06-07-2022 6kyu
//////// Build Tower

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
  let pyramid = [];

  for (let i=nFloors; i>0; i--) {
    pyramid.unshift(' '.repeat(nFloors - i) + 
                    '*'.repeat(i*2-1) + 
                    ' '.repeat(nFloors - i))
  }

  return pyramid;
}

//////// 07-07-2022 8kyu
//////// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  let newArr = [];
  
  for (let i=0; i<arr.length; i++) {
    if (i%2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

//////// 08-07-2022 5kyu
//////// Deep comparison of objects

// Comparing objects is not an easy task in JavaScript. The comparison operator only returns true if both variables point to the same object, that's why two objects with the same properties and values are different for JavaScript, like this:

// var a = { name: 'Joe' };
// var b = { name: 'Joe' };
// a == b;  //-> false
// Sometimes it's really useful to detect when two objects have the same values.

// Your task is to develop the deepCompare function to test if two objects have the same properties and values. Remember that an object can contain other objects. The function should also be able to correctly compare simple values, like strings and numbers (without using type coercion, please).

// To make things simpler, it will only have to deal with simple values and objects and arrays containing strings, booleans and numbers, without taking into account regular expressions, dates and functions.

function deepCompare(o1, o2) {
  //check if both elements same data type
  if (typeof o1 !== typeof o2) {return false}

  //check for primitives equality
  if (typeof o1 !== 'object' || o1 === null) {
    if (Number.isNaN(o1) === true) {
      return Number.isNaN(o2);
    }

    return o1 === o2;
  }

  //check for array and callback each element for comparison
  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) {return false}

    for (let i=0; i<o1.length; i++) {
      
      if (!deepCompare(o1[i], o2[i])) {
        return false
      }
    }

    return true
  }

  // If two objects, sort property and transform in array
  if (typeof o1 === 'object') {
    let arrA = Object.entries(o1).sort()
    let arrB = Object.entries(o2).sort()

    if (arrA.length !== arrB.length) {return false}

    if (!deepCompare(arrA, arrB)) {
      return false
    }
  }

  return true;
};

//////// 09-07-2022 6kyu
//////// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  return words.split(' ')
              .map((el, i, array) => {return array.filter(el => el.includes(i+1))})
              .join(' ');
}

//////// 10-07-2022 8kyu
//////// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  return x.reduce((acc, curr) => curr * acc)
}

//////// 11-07-2022 8kyu
//////// Function 3 - multiplying two numbers

// Implement a function which multiplies two numbers.

function multiply(a,b) {
  return a*b;
}

//////// 11-07-2022 8kyu
//////// What is between?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let arr = [];

  for (let i=a; i<=b; i++) {
    arr.push(i);
  }

  return arr;
}

//////// 12-07-2022 6kyu
//////// Write Number in Expanded Form

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let currentN = String(num);
  if (currentN.length === 1) return currentN;

  let expandedForm = '';

  while (currentN.length > 1) {
    let divisor = '1' + '0'.repeat(currentN.length-1);
    let remainder = +currentN % +divisor;
    let decimal = +currentN - remainder;
    
    String(remainder).length > 1 ? 
    expandedForm += `${decimal} + `: 
    expandedForm += `${decimal}`;

    currentN = String(remainder);
  }

  return currentN === '0' ? expandedForm : expandedForm + ` + ${currentN}`;
}

//////// 13-07-2022 6kyu
//////// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, cur) => cur + acc) / classPoints.length < yourPoints;
}

