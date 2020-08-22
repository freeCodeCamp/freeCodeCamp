---
id: 5c3dda8b4d8df89bea71600f
title: Check For Mixed Grouping of Characters
challengeType: 1
isHidden: false
forumTopicId: 301339
---

## Description
<section id='description'>
Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses <code>()</code>.
If you want to find either <code>Penguin</code> or <code>Pumpkin</code> in a string, you can use the following Regular Expression: <code>/P(engu|umpk)in/g</code>
Then check whether the desired string groups are in the test string by using the <code>test()</code> method.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true
```

</section>

## Instructions
<section id='instructions'>
Fix the regex so that it checks for the names of <code>Franklin Roosevelt</code> or <code>Eleanor Roosevelt</code> in a case sensitive manner and it should make concessions for middle names.
Then fix the code so that the regex that you have created is checked against <code>myString</code> and either <code>true</code> or <code>false</code> is returned depending on whether the regex matches.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>myRegex</code> should return <code>true</code> for the string <code>Franklin D. Roosevelt</code>
    testString: myRegex.lastIndex = 0; assert(myRegex.test('Franklin D. Roosevelt'));
  - text: Your regex <code>myRegex</code> should return <code>true</code> for the string <code>Eleanor Roosevelt</code>
    testString: myRegex.lastIndex = 0; assert(myRegex.test('Eleanor Roosevelt'));
  - text: Your regex <code>myRegex</code> should return <code>false</code> for the string <code>Franklin Rosevelt</code>
    testString: myRegex.lastIndex = 0; assert(!myRegex.test('Franklin Rosevelt'));
  - text: Your regex <code>myRegex</code> should return <code>false</code> for the string <code>Frank Roosevelt</code>
    testString: myRegex.lastIndex = 0; assert(!myRegex.test('Frank Roosevelt'));
  - text: You should use <code>.test()</code> to test the regex.
    testString: assert(code.match(/myRegex.test\(\s*myString\s*\)/));
  - text: Your result should return <code>true</code>.
    testString: assert(result === true);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```

</section>
