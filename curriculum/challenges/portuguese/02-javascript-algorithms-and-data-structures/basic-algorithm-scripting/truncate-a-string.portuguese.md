---
id: ac6993d51946422351508a41
title: Truncate a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Truncar uma string
---

## Description
<section id="description"> Truncar uma string (primeiro argumento) se for maior que o tamanho máximo da string (segundo argumento). Retorna a string truncada com um <code>...</code> terminando. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, 8)</code> deve retornar &quot;A-tisket ...&quot;.'
    testString: 'assert(truncateString("A-tisket a-tasket A green and yellow basket", 8) === "A-tisket...", "<code>truncateString("A-tisket a-tasket A green and yellow basket", 8)</code> should return "A-tisket...".");'
  - text: '<code>truncateString(&quot;Peter Piper picked a peck of pickled peppers&quot;, 11)</code> deve retornar &quot;Peter Piper ...&quot;.'
    testString: 'assert(truncateString("Peter Piper picked a peck of pickled peppers", 11) === "Peter Piper...", "<code>truncateString("Peter Piper picked a peck of pickled peppers", 11)</code> should return "Peter Piper...".");'
  - text: '<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length)</code> deve retornar &quot;A-tisket a-tasket Uma cesta verde e amarela&quot;.'
    testString: 'assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket", "<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)</code> should return "A-tisket a-tasket A green and yellow basket".");'
  - text: '<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length + 2)</code> deve retornar &quot;A-tisket a-tasket Uma cesta verde e amarela&quot;.'
    testString: 'assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) === "A-tisket a-tasket A green and yellow basket", "<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)</code> should return "A-tisket a-tasket A green and yellow basket".");'
  - text: '<code>truncateString(&quot;A-&quot;, 1)</code> deve retornar &quot;A ...&quot;.'
    testString: 'assert(truncateString("A-", 1) === "A...", "<code>truncateString("A-", 1)</code> should return "A...".");'
  - text: '<code>truncateString(&quot;Absolutely Longer&quot;, 2)</code> deve retornar &quot;Ab ...&quot;.'
    testString: 'assert(truncateString("Absolutely Longer", 2) === "Ab...", "<code>truncateString("Absolutely Longer", 2)</code> should return "Ab...".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
