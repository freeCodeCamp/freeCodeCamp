---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Reverter uma string
---

## Description
<section id="description"> Inverta a string fornecida. Você pode precisar transformar a string em uma matriz antes de poder revertê-la. Seu resultado deve ser uma string. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reverseString(&quot;hello&quot;)</code> deve retornar uma string.
    testString: 'assert(typeof reverseString("hello") === "string", "<code>reverseString("hello")</code> should return a string.");'
  - text: <code>reverseString(&quot;hello&quot;)</code> deve se tornar <code>&quot;olleh&quot;</code> .
    testString: 'assert(reverseString("hello") === "olleh", "<code>reverseString("hello")</code> should become <code>"olleh"</code>.");'
  - text: <code>reverseString(&quot;Howdy&quot;)</code> deve se tornar <code>&quot;ydwoH&quot;</code> .
    testString: 'assert(reverseString("Howdy") === "ydwoH", "<code>reverseString("Howdy")</code> should become <code>"ydwoH"</code>.");'
  - text: <code>reverseString(&quot;Greetings from Earth&quot;)</code> deve retornar <code>&quot;htraE morf sgniteerG&quot;</code> .
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
  return str.split('').reverse().join('');
}

reverseString("hello");
```
</section>
