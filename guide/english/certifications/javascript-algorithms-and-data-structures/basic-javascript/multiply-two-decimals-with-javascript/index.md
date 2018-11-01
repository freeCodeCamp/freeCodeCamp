---
title: Multiply Two Decimals with JavaScript
---
## Multiply Two Decimals with JavaScript

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-decimals-with-javascript/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
JavaScript uses the * symbol for multiplication. Multiplying decimals is the same as multiplying whole numbers except you are working with decimal numbers now so you must include the decimal point and the number that follows the decimal in your equation.

For example, if you were to multiply 3 by 5 then you could simply type:
```Javascript
var product = 3 * 5; // product is 15.
``` 
But if you want to multiply 3.0 and 5.0 you would type:
```Javascript
var product = 3.0 * 5.0; // product is 15. 

// Note: JavaScript automatically removes the decimal places because 3.0*5.0=15.0 which is a whole number.
```
Now if we were to multiply 3.4 by 5.7, the product would be a decimal number.
```Javascript
var product = 3.4 * 5.7; // product 19.38.
```

### Hint 1
Think about what decimal number, when multiplied by 2.0, would equal 5.0.

> *try to solve the problem now*

## Spoiler Alert!
__Solution Ahead!__

### Code Solution:
```javascript
var product = 2.0 * 2.5; // product is 5.0 because 2.5 * 2.0 = 5.0
```
#### More Information:
<a href="https://www.digitalocean.com/community/tutorials/how-to-do-math-in-javascript-with-operators">DigitalOcean - How to do Math in JavaScript with Operators</a>