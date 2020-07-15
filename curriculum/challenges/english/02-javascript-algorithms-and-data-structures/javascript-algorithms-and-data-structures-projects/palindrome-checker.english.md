---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16004
---

## Description
<section id='description'>
Return <code>true</code> if the given string is a palindrome. Otherwise, return <code>false</code>.
A <dfn>palindrome</dfn> is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
<strong>Note</strong><br>You'll need to remove <strong>all non-alphanumeric characters</strong> (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as <code>"racecar"</code>, <code>"RaceCar"</code>, and <code>"race CAR"</code> among others.
We'll also pass strings with special symbols, such as <code>"2A3*3a2"</code>, <code>"2A3  3a2"</code>, and <code>"2_A3*3#A2"</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>palindrome("eye")</code> should return a boolean.
    testString: assert(typeof palindrome("eye") === "boolean");
  - text: <code>palindrome("eye")</code> should return true.
    testString: assert(palindrome("eye") === true);
  - text: <code>palindrome("_eye")</code> should return true.
    testString: assert(palindrome("_eye") === true);
  - text: <code>palindrome("race car")</code> should return true.
    testString: assert(palindrome("race car") === true);
  - text: <code>palindrome("not a palindrome")</code> should return false.
    testString: assert(palindrome("not a palindrome") === false);
  - text: <code>palindrome("A man, a plan, a canal. Panama")</code> should return true.
    testString: assert(palindrome("A man, a plan, a canal. Panama") === true);
  - text: <code>palindrome("never odd or even")</code> should return true.
    testString: assert(palindrome("never odd or even") === true);
  - text: <code>palindrome("nope")</code> should return false.
    testString: assert(palindrome("nope") === false);
  - text: <code>palindrome("almostomla")</code> should return false.
    testString: assert(palindrome("almostomla") === false);
  - text: <code>palindrome("My age is 0, 0 si ega ym.")</code> should return true.
    testString: assert(palindrome("My age is 0, 0 si ega ym.") === true);
  - text: <code>palindrome("1 eye for of 1 eye.")</code> should return false.
    testString: assert(palindrome("1 eye for of 1 eye.") === false);
  - text: '<code>palindrome("0_0 (: /-\ :) 0-0")</code> should return true.'
    testString: 'assert(palindrome("0_0 (: /-\ :) 0-0") === true);'
  - text: <code>palindrome("five|\_/|four")</code> should return false.
    testString: assert(palindrome("five|\_/|four") === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function palindrome(str) {
  return true;
}



palindrome("eye");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```

</section>
