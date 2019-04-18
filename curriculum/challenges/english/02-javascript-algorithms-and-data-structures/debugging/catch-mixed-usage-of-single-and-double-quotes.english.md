---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
---

## Description
<section id='description'>
JavaScript allows the use of both single (<code>'</code>) and double (<code>"</code>) quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.
Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.
Here are some examples of mixing quotes:
<blockquote>// These are correct:<br>const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";<br>const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";<br>// This is incorrect:<br>const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';</blockquote>
Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (\) escape character:
<blockquote>// Correct use of same quotes:<br>const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';</blockquote>
</section>

## Instructions
<section id='instructions'>
Fix the string so it either uses different quotes for the <code>href</code> value, or escape the existing ones. Keep the double quote marks around the entire string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the quotes around the <code>href</code> value "#Home" by either changing or escaping them.
    testString: assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g), 'Your code should fix the quotes around the <code>href</code> value "#Home" by either changing or escaping them.');
  - text: Your code should keep the double quotes around the entire string.
    testString: assert(code.match(/"<p>.*?<\/p>";/g), 'Your code should keep the double quotes around the entire string.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
</section>
