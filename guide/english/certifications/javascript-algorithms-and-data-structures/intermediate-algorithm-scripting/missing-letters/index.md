---
title: Missing Letters
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You will create a program that will find the missing letter from a string and return it. If there is no missing letter, the program should return undefined. There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. Also, the letters are always provided in order so there is no need to sort them.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>String global object</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933' target='_blank' rel='nofollow'>JS String Prototype CharCodeAt</a>
*   <a>String.fromCharCode</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You will need to convert from character to ASCII code using the two methods provided in the description.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function fearNotLetter(str) {

      for(var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);

        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {

          /* if current character has escaped one character find previous char and return */
          return String.fromCharCode(code - 1);
        }  
      }
      return undefined;
    }

    // test here
    fearNotLetter("abce");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnD/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   This solutions makes use of a `for` loop.
*   Code of encountered character is stored in **code**.
*   It is checked if code of current character is the expected one (no characters are skipped) by using the logic - `code of current character = code of first character + number of iterations`.
*   If a character is missing, the missing character is found and the final string is returned.
*   `undefined` is returned if there is no missing character in the string.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a>String.length</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    // Adding this solution for the sake of avoiding using 'for' and 'while' loops.
    // See the explanation for reference as to why. It's worth the effort.

    function fearNotLetter(str) {
      var compare = str.charCodeAt(0), missing;

      str.split('').map(function(letter,index) {
        if (str.charCodeAt(index) == compare) {
          ++compare;
        } else {
          missing = String.fromCharCode(compare);
        }
      });

      return missing;
    }

    // test here
    fearNotLetter("abce");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnE/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
*   We turn the string to an array in order to map through it instead of using `for` and `while` loops.
*   As we `map` through our letters' character codes, we go comparing with the one that should be in that position.
*   If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
*   If not, the missing letter will be assigned to the `missing` variable, which will be returned after the map is finished.
*   If there are no missing characters, return `undefined`.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>JS String Prototype Split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294' target='_blank' rel='nofollow'>JS Array Prototype Map</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Simplified Advanced Code Solution:

    function fearNotLetter(str) {
      for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
          return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
      }
    }

### Code Explanation:

* Loop over the string
* Check if the difference in char codes between adjacent characters in the string is more than 1 (chack ASCII table)
* Return the missing character ( +1 from where the gap was detected)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function fearNotLetter(str) {
      var allChars = '';
      var notChars = new RegExp('[^'+str+']','g');

      for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

      return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
    }

    // test here
    fearNotLetter("abce");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnG/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   A new string **allChars** is created.
*   Create a regular expression **notChars** which selects everything except **str**.
*   The `for` loop is used to add all the letters in the range to **allChars**.
*   `match()` is used to strip off the **str** letters from the newly created string and it is returned.
*   If there are no missing characters, return `undefined`.

#### Relevant Links

*   <a>JS Regex Resources</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-ternary-operator/15973' target='_blank' rel='nofollow'>JS Ternary</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941' target='_blank' rel='nofollow'>JS String Prototype Match</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>JS Array Prototype Join</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Declarative / Functional Code Solution:

```javascript
const onlyLetters = str => str.replace(/[^a-zA-Z]/g, '');
const alphabetize = str => str.split('').sort().join('');
const toLowerCase = str => str.toLowerCase();
const fromCharCode = code => String.fromCharCode(code);
const charCode = char => char.charCodeAt(0);
const excludes = (str, char) => !str.includes(char);
const first = str => str[0];
const last = str => str[str.length - 1];
const defined = f => f || undefined;

const range = (start, end) => 
  Array(end - start + 1)
    .fill()
    .map((_, i) => start + i);

const charRange = str => 
  range(
    charCode(first(str)),
    charCode(last(str))
  ).map(fromCharCode);

const missing = str =>
  charRange(str)
    .reduce((acc, c) =>
      excludes(str, c) ? acc + c : acc, '');

const compose = (...fns) => args => fns.reduceRight((arg, fn) => fn(arg), args);

const sanitize = compose(alphabetize, toLowerCase, onlyLetters);

const fearNotLetter = compose(defined, missing, sanitize);

console.log(fearNotLetter('abCdf'));
// e
console.log(fearNotLetter('th3 qu1ck br0wn f0x jump3d 0ve7 th3 1azy d0g'));
// ilos
console.log(fearNotLetter('what does the fox say?'));
// bcgijklmnpqruv
console.log(fearNotLetter('hifged'));
// undefined
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='GENERATE_HERE' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:
This is obviously more code than the other solutions, however, it's more robust since it can handle any string, and also includes many helpful functions that can be used in multiple tests, not just this one.

At the top are declarative functions, some of which convert native JavaScript imperative functions to declarative.

*   **onlyLetters** uses regex to remove any characters from a string that are not letters.
*   **alphabetize** splits a string into an array, sorts it, and turns it back into a string.
*   **toLowerCase** is a declarative way to call String.prototype.toLowerCase()
*   **fromCharCode** is a declarative way to call String.fromCharCode().
*   **charCode** returns the charCode of a given character.
*   **excludes** is a helper function to return the opposite of includes().
*   **first** and **last** are declarative functions which can be used for both Strings and Arrays!
*   **defined** returns what is passed if it's truthy and undefined if it isn't.
*   **range** returns an array that consists of all the numbers between and including start to end.

The next two functions leverage the above functions.

*   **charRange** creates a range using the first and last charCodes of an alphabetized string, and then maps them back into letters again.
*   **missing** reduces the charRange into a string that only contains letters excluded from the passed string.

Finally, we put it all together using **compose**. The tl;dr is that compose calls each function from right to left using the output of each function as the input of the next function. See the links below to learn more about function composition.

Our first composed function is **sanitize**. It filters out non-letters, converts to lowercase, and alphabetizes. It's worth pointing out that we can change the order of these functions in compose() and we will still get the same result.

Because of the way that composition works, we can compose composed functions together!

**fearNotLetter** takes the result of the three functions of sanitize and passes it to missing, and then the output of missing is passed to defined. Unlike the previous compose(), we cannot change the order because missing() needs a sanitized string to work properly.

You might wonder why we don't have **missing** return undefined, since that is what the test requires. The problem with that is that it changes the type (from String to undefined). What if, in the future, we want to do something else to the missing letters. Maybe convert them to uppercase, or format them in some other way. If that function expects a string and we pass it undefined, it will throw an error.

While we could make all our string functions safe by always checking to see if the passed value is a String, this is not ideal in functional code. There are better ways to do this, but they are out of scope of this explanation.

So, *only because this test requires it*, we add the **defined** function at the very end of our composition (on the left). Normally, we wouldn't want to change the type from String to undefined, and instead just return an empty string when no missing characters are found. We could avoid this unsafe approach by separating **defined** like this:

```javascript
const findMissing = compose(missing, sanitize);
const fearNotLetter = compose(defined, findMissing);
```

This isolates the requirement of this test (fearNotLetter) to return undefined, and now we can use **findMissing** safely elsewhere. Notice that we're composing yet again because of the right-to-left nature of compose.

You might be asking yourself why we have to write composed functions from right-to-left. There is another function called **pipe** (or **sequence**) which works exactly like compose, but goes from left-to-right. If you're curious why compose is right-to-left, check the link below.

Imperative code can be shorter, as evidenced by the other solutions. But, it can also be less flexible and harder to debug.

Here is this solution, written imperatively:

```javascript
const fearNotLetter = str => {
  const sanitized = str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
  const start = sanitized.charCodeAt(0);
  const end = sanitized.charCodeAt(sanitized.length - 1);
  const range = Array(end - start + 1).fill().map((_, i) => String.fromCharCode((start + i)));
  const missing = range.reduce((acc, c) => sanitized.includes(c) ? acc : acc + c, '');
  return missing || undefined;
}
```

As evidenced by the other imperative solutions, there are simpler ways of accomplishing roughly the same thing. This code is also more difficult to read and thus it's harder to figure out what's going on (commonly called "reason about").

Writing pure functions declaratively is a fundamental part of functional programming. It helps you break down your logic into discrete functions that each do one thing. Even if you don't use **compose**, writing code this way has many benefits.

For example, we now have a bunch of functions that we can reuse in many different ways, including future tests in this course! The only function that is specific to this test is **fearNotLetter** (assuming we separated **findMissing** as explained above), and the other functions can be used in many ways and composed together.

As you can see from the tests, this version of **fearNotLetter** can handle any string, in any order, with any mix of letters, cases, numbers, spaces, etc. The other solutions only work if the string contains only lowercase letters and is alphabetical. If you don't pass a string that follows *exactly* those rules, the other solutions will fail.

That said, you could use just our **sanitize** function and pass its output to one of the other solutions to make them reliable.

#### Relevant Links

*   <a href='https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5' target='_blank' rel='nofollow'>Functional Programming in Javascript</a>
*   <a href='https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj' target='_blank' rel='nofollow'>Using Functional Composition In JavaScript</a>
*   <a href='https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84' target='_blank' rel='nofollow'>Fun Fun Function Functional Programming Series</a>
*   <a href='https://www.coreycleary.me/why-is-compose-right-to-left/' target='_blank' rel='nofollow'>Why Is Compose Right To Left?</a>


## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
