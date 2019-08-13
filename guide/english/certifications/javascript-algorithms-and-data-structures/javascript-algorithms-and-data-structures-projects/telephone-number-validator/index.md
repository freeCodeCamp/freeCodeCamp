---
title: Telephone Number Validator
---

# Telephone Number Validator

---
## Problem Explanation

The task is not that hard to understand, implementing it is the hardest part. You have a to validate a US phone number. This means there is a certain amount of numbers required, while you don't need to put the country code, you will still need the area code and use one of the few formats allowed.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp' target='_blank' rel='nofollow'>RegExp</a>
*   <a href='http://regexpal.com/' target='_blank' rel='nofollow'>regexpal.com</a>
*   <a href='https://regex101.com/#javascript' target='_blank' rel='nofollow'>regex101.com/</a>


---
## Hints

### Hint 1

There is no way around it, you will need to brush up your regular expressions skills.


### Hint 2

Try using a site from the previous list to test the regex live while you create it.


### Hint 3

Start by trying to get it to validate each format from the example, each one should take a new line, once you get to select them all, then add examples that should not be selected and make sure they are not selected.


### Hint 4
 Think through what you are trying to solve in a step by step fashion. Below are the different Booleans you could set up. Once you have these set up, you can create small regex tests for each variable.
 This will lead to a much longer solution than those contained in the spoilers. However it will be easier to decipher and generate.

```js
// Set up your Booleans here
let hasTenDigits = false;
let hasElevenDigits = false;
let startsWithOne = false;
let hasPermittedCharsOnly = false;
let hasCorrectParentheses = false;

// Write regular expressions here so that the Booleans contain the correct values
// INSERT CODE WITH REGEX HERE

// Use the Booleans to return true or false, without needing to string together one complex regular expression
if (!hasTenDigits && !hasElevenDigits) {
  return false;
} else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
  return false;
} else if (hasElevenDigits && !startsWithOne) {
  return false;
} else {
  return true;
}
```
 

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");
```


#### Code Explanation

*   `^` denotes the beginning of the string.
*   `(1\s?)?` allows for "1" or "1 " if there is one.
*   `\d{n}` checks for exactly n number of digits so `\d{3}` checks for three digits.
*   `x|y` checks for either x OR y so `(\(\d{3}\)|\d{3})` checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
*   `[\s\-]?` checks for spaces or dashes between the groups of digits.
*   `$` denotes the end of the string. In this case the beginning `^` and end of the string `$` are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 3").
*   Lastly we use `regex.test(str)` to test if the string adheres to the regular expression, it returns `true` or `false`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test' target='_blank' rel='nofollow'>Regex.test()</a>

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions' target='_blank' rel='nofollow'>Regular Expression Guide</a>

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function telephoneCheck(str) {
  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return re.test(str);
}
telephoneCheck("555-555-5555");
```


#### Code Explanation

This is an example of a very comprehensive and robust solution to validating US phone numbers client side. In such cases it might be much better and easier to implement this library <a href='https://github.com/googlei18n/libphonenumber' target='_blank' rel='nofollow'>libphonenumber</a>.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test' target='_blank' rel='nofollow'>Regex.test()</a>
*   <a href='https://github.com/googlei18n/libphonenumber' target='_blank' rel='nofollow'>libphonenumber</a>

</details>
