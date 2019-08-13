---
title: Dna Pairing
---

# Dna Pairing


---
## Problem Explanation

*   You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

*   Another way to interpret the problem: there are four potential characters that exist in DNA: "A", "T", "G", and "C". "A" and "T" are always paired together, and "G" and "C" are always paired together.  
This problem presents you with an input, e.g. "ATCGA". Each of those five characters are missing their pairs.  
E.g. the first character "A" needs to be paired with "T" to give the array element ["A", "T"].  
The second character "T" needs to be paired with "A" to give the array element ["T", "A"].  
The number of elements in the final output equals the number of characters in the input.

This problem does not involve rearranging the input into different combinations or permutations.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>Array.push()</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>String.split()</a>


---
## Hints

### Hint 1

*   There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.

### Hint 2

*   I would recommend using a switch, as it makes things a lot smoother.

### Hint 3

*   The result must be an array of arrays, so keep that in mind when pushing things.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
```

#### Code Explanation

*   The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
*   Since we have to the original and the pair, I decided to take all four cases instead of the base two.
*   Create an empty array and use the `search` function to push the right values to the array and return them.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch' target='_blank' rel='nofollow'>Switch Statements</a>
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");
```

#### Code Explanation

*   First define an object with all pair possibilities, this allows us to easily find by key or value.
*   Split `str` into a characters array so we can use each letter to find its pair.
*   Use the map function to map each character in the array to an array with the character and its matching pair, creating a 2D array.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map' target='_blank' rel='nofollow'>Array.prototype.map()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors' target='_blank' rel='nofollow'>Property accessors</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>Arrow functions</a>
</details>

