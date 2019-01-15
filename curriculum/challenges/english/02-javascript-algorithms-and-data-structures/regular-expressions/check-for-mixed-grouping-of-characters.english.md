---
id: 5c3dda8b4d8df89bea71600f
title: Check For Mixed Grouping of Characters
challengeType: 1
---

## Description
<section id='description'>
Sometimes we want to check for groups of characters using a Regular Expression, to achieve this task we use the round brackets <code>()</code>.
If you want to find either <code>"Penguin"</code> or <code>"Pumpkin"</code> in a string, you could use the following Regular Expression: <code>/P(engu|umpk)in/g</code>
Then you can test the code using the <code>test()</code> method to find whether the requires character(s)/string(s) are in the test string or not.
<blockquote>let testStr = "Pumpkin";<br>let testRegex = /P(engu|umpk)in/g;<br>testRegex.test(testStr);<br>// Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
Fix the RegEx so that it checks for either <code>Hello</code> or <code>Halo</code> in a case sensitive manner.
Then fix the code so that the RegEx that you have created is checked against <code>myString</code> and either <code>true</code> or <code>false</code> is returned depending on whether the RegEx matches.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should return <code>true</code> for the string <code>"Hello"</code>.
    testString: assert(myRegex.test('Hello'), 'Your regex should return <code>true</code> for the string <code>"Hello"</code>.');
  - text: Your regex should return <code>true</code> for the string <code>"Halo"</code>.
    testString: assert(myRegex.test('Halo'), 'Your regex should return <code>true</code> for the string <code>"Halo"</code>.');
  - text: Your regex should return <code>false</code> for the string <code>"Hell"</code>.
    testString: assert(!myRegex.test('Hell'), 'Your regex should return <code>true</code> for the string <code>"Hell"</code>.');
  - text: You should use <code>test()</code> to test the regex.
    testString: assert(code.match(/myRegex.test\(.*\), 'You should use <code>test()</code> to test the regex.');
  - text: Your result should return <code>true</code>.
    testString: assert(result === true, 'Your result should return <code>true</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Hello from the other side";
let myRegex = /False/; // Change this line
let result = true; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myString = "Hello from the other side";
let myRegex = /H(a|el)lo/g;
let result = myRegex.test(myString);
```
</section>