# JavaScript Notes

- Standard lines for taking notes
- Insert link here for something I know


## Exercise Notes
* [reverseString](./EXERCISES/reverseString)
  - In this exercise, I reversed a string in JavaScript
  - This was done in two ways:
    - Iterating from the last index to the first of the input string, building
      a return string from blank.
    - Using built in JavaScript functions
      ``` javascript
      const reverseString = function(inputString)
      {

        let splitString = inputString.split("");
        let reversedArray = splitString.reverse();
        let joinedArray = reversedArray.join("");
        return joinedArray;
      }
      ```
      - We were able to use .reverse() on splitString because the return of
        inputString.split("") was an array
      - Our argument for join() is "" because the default for join
        concatenates characters with a ',' in between characters.

* [repeatString](./EXERCISES/repeatString)
  - In this exercise, we repeated a string
  - We had to mitigate against negative inputs, and throw an error if it was
    negative. 

* [sumAll](./EXERCISES/sumAll)
  - In this exercise, I implemented a function that takes 2 integers and
  returns the sum of every number between (and including) them. 
    - Before writing the code, I considered the following edge cases:
      - The arguments keyword
      - Checking against ---> arguments.length !=2
      - That both types are numbers
      - If either number is negative 
      - If the numbers are equal
  - Then I utilized a for-loop that would increment our return value (sum=0)
    by 1 and then add it to the smallest parameter (minParameter =
    Math.min(argumetns[0],arguments[1]) to get our return value.

* [leapYears](./EXERCISES/leapYears)
  - In this exercise, I nested three if-statements, each testing the input
    value to check if it complies with the arithmetic rules of leap year
    calculation.
      - Though, I used nested if-statements, I also could have used
        comparison operators to test the input year in one line of code:

      ```
      return inputYear % 4 === 0 && (inputYear%100 !== 0 || year % 400 ==0)
      ```
* [tempConversion](./EXERCISES/tempConversion)
  - With this exercise, I successfully converted celsius to fahrenheit and
    vice versa using the formulae found on Google.
  - I also used the Math.round function to ensure that the return statement
    would be rounded to only one decimal place, like so:
    ```
    return (Math.round(f*10)/10);
    ```
