---
id: ac6993d51946422351508a41
title: Truncate a String
localeTitle: Truncar una cadena
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Truncar una cadena (primer argumento) si es más larga que la longitud de cadena máxima dada (segundo argumento). Devuelve la cadena truncada con un <code>...</code> final.
Recuerda usar <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, 8)</code> debe devolver &quot;A-tisket ...&quot;.'
    testString: 'assert(truncateString("A-tisket a-tasket A green and yellow basket", 8) === "A-tisket...", "<code>truncateString("A-tisket a-tasket A green and yellow basket", 8)</code> should return "A-tisket...".");'
  - text: ' <code>truncateString(&quot;Peter Piper picked a peck of pickled peppers&quot;, 11)</code> debería devolver &quot;Peter Piper ...&quot;.
    testString: 'assert(truncateString("Peter Piper picked a peck of pickled peppers", 11) === "Peter Piper...", "<code>truncateString("Peter Piper picked a peck of pickled peppers", 11)</code> should return "Peter Piper...".");'
  - text: ' <code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length)</code> debe devolver &quot;A-tisket a-tasket Una canasta verde y amarilla&quot;.'
    testString: 'assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket", "<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)</code> should return "A-tisket a-tasket A green and yellow basket".");'
  - text: ' <code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length + 2)</code> debe devolver &quot;A-tisket a-tasket Una canasta verde y amarilla&quot; .
    testString: 'assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) === "A-tisket a-tasket A green and yellow basket", "<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)</code> should return "A-tisket a-tasket A green and yellow basket".");'
  - text: ' <code>truncateString(&quot;A-&quot;, 1)</code> debe devolver &quot;A ...&quot;.'
    testString: 'assert(truncateString("A-", 1) === "A...", "<code>truncateString("A-", 1)</code> should return "A...".");'
  - text: ' <code>truncateString(&quot;Absolutely Longer&quot;, 2)</code> debe devolver &quot;Ab ...&quot;.'
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
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

```

</section>
