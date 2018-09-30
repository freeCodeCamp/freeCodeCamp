---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>reverseString("hello")</code> should return a string.
  testString: 'assert(typeof reverseString("hello") === "string", "<code>reverseString("hello")</code> should return a string.");'
- text: <code>reverseString("hello")</code> should become <code>"olleh"</code>.
  testString: 'assert(reverseString("hello") === "olleh", "<code>reverseString("hello")</code> should become <code>"olleh"</code>.");'
- text: <code>reverseString("Howdy")</code> should become <code>"ydwoH"</code>.
  testString: 'assert(reverseString("Howdy") === "ydwoH", "<code>reverseString("Howdy")</code> should become <code>"ydwoH"</code>.");'
- text: <code>reverseString("Greetings from Earth")</code> should return <code>"htraE morf sgniteerG"</code>.
  testString: 'assert(reverseString("Greetings from Earth") === "htraE morf sgniteerG", "<code>reverseString("Greetings from Earth")</code> should return <code>"htraE morf sgniteerG"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function reverseString(str) {
  return str;
}

reverseString("hello");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function reverseString(str) {
  return str.split(").reverse().join(");
}

reverseString("hello");

```

</section>
