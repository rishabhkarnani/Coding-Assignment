// JavaScript source code
// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO

function checkIfYExists(str) {                                          // Define a function to check if 'y' is in a string.
    if (str.includes('y')) {                                            // Check if the string contains the letter 'y'.
        console.log("YES");                                             // If 'y' is found, print "YES"
    } else {
        console.log("NO");                                              // If 'y' is not found, print "NO".
    }
}
checkIfYExists('Rishabh')                                               // Output is No

// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach
// function getFactorial(num) {
// logic
// return the value;
// }
function factorial(num) {                                               // Define a function
    let result = 1;                                                     // Initialize result to 1
    for (let i = 1; i <= num; i++) {                                    // Loop from 1 to num to calculate the product
        result *= i;                                                    // Multiply result by i on each iteration
    }
    return result;                                                      // Return the factorial of num
}
console.log(factorial(9));                                              // Print the result and output is 362880

//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];

// function getHighestAverageStudent() { // return string
// returns the student name with highest average marks
// }

let studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 80, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] },
  ];
  
  function getHighestAverageStudent() {
    let highestAverage = 0;
    let highestAverageStudent = "";
  
    for (let student of studentList) {
      let average = student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length;
      if (average > highestAverage) {
        highestAverage = average;
        highestAverageStudent = student.name;
      }
    }
  
    return highestAverageStudent;
  }
  
  console.log(getHighestAverageStudent());  // This will print the name of the student with the highest average marks
  
//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4

function getMostFrequent(numbers) {
    let counts = {};                                                    // Holds frequency of each number
    let maxFreq = 0;                                                    // Highest frequency found
    let mostFreqNum;                                                    // Number with the highest frequency

    for (let num of numbers) {                                          // Loop to populate counts and determine most frequent number
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxFreq) {
            maxFreq = counts[num];
            mostFreqNum = num;
        }
    }
    return mostFreqNum;                                                 // Return the number that appears most frequently
}
console.log(getMostFrequent([20, 4, -10, 4, 11, 20, 4, 2]));          // Print the result and ouput is 4

//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]
// aba abba  abca  acca a

function findUniqueNumber(numbers) {
    let frequencyMap = {};                                              // Object to store the frequency of each number

    for (let num of numbers) {                                          // First pass: Count occurrences of each number
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    for (let num in frequencyMap) {                                     // Second pass: Find the number that occurs only once
        if (frequencyMap[num] === 1) {
            return num;                                                 // Return the unique number
        }
    }
    return null;                                                        // Return null if there is no unique number
}

console.log(findUniqueNumber([20, 20, 11, 4, 11, 20, 2, 4]));           // Print the result and output is 2


//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array
// ['abc', 'aba', 'ccc', 'dca', 'a']
// ['aba', 'ccc', 'a']
function getPalindromes(strings) {                                      //Define a function to filter
    return strings.filter(str => str === str.split('').reverse().join(''));
}
console.log(getPalindromes(['abc', 'aba', 'ccc', 'dca', 'a']));      // Print the result and outputs is ['aba', 'ccc', 'a']

