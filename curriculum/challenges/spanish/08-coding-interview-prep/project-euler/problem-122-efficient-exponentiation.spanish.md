---
id: 5
localeTitle: 5900f3e61000cf542c50fef9
challengeType: 5
title: 'Problem 122: Efficient exponentiation'
---

## Description
<section id='description'> 
La forma más ingenua de calcular n15 requiere catorce multiplicaciones: 
n × n × ... × n = n15 
Pero utilizando un método &quot;binario&quot; puedes calcularlo en seis multiplicaciones: 
n × n = n2n2 × n2 = n4n4 × n4 = n8n8 × n4 = n12n12 × n2 = n14n14 × n = n15 
Sin embargo, todavía es posible calcularlo en solo cinco multiplicaciones: 
n × n = n2n2 × n = n3n3 × n3 = n6n6 × n6 = n12n12 × n3 = n15 
Definiremos m (k) como el número mínimo de multiplicaciones para calcular nk; por ejemplo m (15) = 5. 
Para 1 ≤ k ≤ 200, encuentre ∑ m (k). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler122()</code> debe devolver 1582.
    testString: 'assert.strictEqual(euler122(), 1582, "<code>euler122()</code> should return 1582.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler122() {
  // Good luck!
  return true;
}

euler122();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
