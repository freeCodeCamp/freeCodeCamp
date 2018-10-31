---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: Спичечные номера и буквы алфавита
---

## Description
undefined

## Instructions
<section id="instructions"> Создайте одно регулярное выражение, соответствующее диапазону букв между <code>h</code> и <code>s</code> , и диапазон чисел от <code>2</code> до <code>6</code> . Не забудьте включить соответствующие флаги в регулярное выражение. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваше regex <code>myRegex</code> должно соответствовать 17 элементам.
    testString: 'assert(result.length == 17, "Your regex <code>myRegex</code> should match 17 items.");'
  - text: ''
    testString: 'assert(myRegex.flags.match(/g/).length == 1, "Your regex <code>myRegex</code> should use the global flag.");'
  - text: ''
    testString: 'assert(myRegex.flags.match(/i/).length == 1, "Your regex <code>myRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
