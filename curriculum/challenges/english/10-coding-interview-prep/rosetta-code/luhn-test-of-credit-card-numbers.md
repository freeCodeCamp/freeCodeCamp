---
id: 5ea28156e79528a9ab248f27
title: Luhn test of credit card numbers
challengeType: 5
forumTopicId: 385284
---

## Description

<section id='description'>
The <a href="https://en.wikipedia.org/wiki/Luhn algorithm" target="_blank">Luhn test</a> is used by some credit card companies to distinguish valid credit card numbers from what could be a random selection of digits.
Those companies using credit card numbers that can be validated by the Luhn test have numbers that pass the following test:
<ol>
  <li> Reverse the order of the digits in the number.</li>
  <li> Take the first, third, ... and every other odd digit in the reversed digits and sum them to form the partial sum s1</li>
  <li> Taking the second, fourth ... and every other even digit in the reversed digits:</li>
    <ol>
      <li>Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits.</li>
      <li>Sum the partial sums of the even digits to form s2.</li>
    </ol>
  <li>If s1 + s2 ends in zero then the original number is in the form of a valid credit card number as verified by the Luhn test.</li>
</ol>

For example, if the trial number is 49927398716:

```bash
Reverse the digits:
  61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1, 8, 3, 2, 9
  Two times each even digit:
    2, 16, 6, 4, 18
  Sum the digits of each multiplication:
    2, 7, 6, 4, 9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test.
```

</section>

## Instructions

<section id='instructions'>
Write a function that will validate a number with the Luhn test. Return true if it's a valid number. Otherwise, return false.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>luhnTest</code> should be a function.
    testString: assert(typeof luhnTest === 'function');
  - text: <code>luhnTest("4111111111111111")</code> should return a boolean.
    testString: assert(typeof luhnTest("4111111111111111") === 'boolean');
  - text: <code>luhnTest("4111111111111111")</code> should return <code>true</code>.
    testString: assert.equal(luhnTest("4111111111111111"), true);
  - text: <code>luhnTest("4111111111111112")</code> should return <code>false</code>.
    testString: assert.equal(luhnTest("4111111111111112"), false);
  - text: <code>luhnTest("49927398716")</code> should return <code>true</code>.
    testString: assert.equal(luhnTest("49927398716"), true);
  - text: <code>luhnTest("49927398717")</code> should return <code>false</code>.
    testString: assert.equal(luhnTest("49927398717"), false);
  - text: <code>luhnTest("1234567812345678")</code> should return <code>false</code>.
    testString: assert.equal(luhnTest("1234567812345678"), false);
  - text: <code>luhnTest("1234567812345670")</code> should return <code>true</code>.
    testString: assert.equal(luhnTest("1234567812345670"), true);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function luhnTest(str) {

}
```

</div>

</section>

## Solution

<section id='solution'>

```js
function luhnTest(str) {
  var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  var counter = 0;
  var incNum;
  var odd = false;
  var temp = String(str).replace(/[^\d]/g, '');
  if (temp.length == 0) return false;
  for (var i = temp.length - 1; i >= 0; --i) {
    incNum = parseInt(temp.charAt(i), 10);
    counter += (odd = !odd) ? incNum : luhnArr[incNum];
  }
  return counter % 10 == 0;
}
```

</section>
