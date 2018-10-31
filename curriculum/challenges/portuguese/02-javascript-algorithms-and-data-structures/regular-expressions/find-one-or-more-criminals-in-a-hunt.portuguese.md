---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
videoUrl: ''
localeTitle: Encontre um ou mais criminosos em uma caçada
---

## Description
<section id="description"> Hora de fazer uma pausa e testar suas novas habilidades de redação de regex. Um grupo de criminosos escapou da prisão e fugiu, mas você não sabe quantos. No entanto, você sabe que eles ficam juntos quando estão perto de outras pessoas. Você é responsável por encontrar todos os criminosos de uma só vez. Aqui está um exemplo para revisar como fazer isso: O regex <code>/z+/</code> corresponde à letra <code>z</code> quando aparece uma ou mais vezes seguidas. Ele encontraria correspondências em todas as seguintes strings: <blockquote> &quot;z&quot; <br> &quot;zzzzzz&quot; <br> &quot;ABCzzzz&quot; <br> &quot;zzzzABC&quot; <br> &quot;abczzzzzzzzzzzzzzzzzzzzzabc&quot; </blockquote> Mas ele não encontra correspondências nas strings a seguir, pois não há caracteres da letra <code>z</code> : <blockquote> &quot;&quot; <br> &quot;ABC&quot; <br> &quot;abcabc&quot; </blockquote></section>

## Instructions
<section id="instructions"> Escreva um regex <code>greedy</code> que encontre um ou mais criminosos dentro de um grupo de outras pessoas. Um criminoso é representado pela letra maiúscula <code>C</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve corresponder a <code>one</code> criminoso (&quot; <code>C</code> &quot;) em <code>&quot;C&quot;</code>
    testString: 'assert("C".match(reCriminals) && "C".match(reCriminals)[0] == "C", "Your regex should match <code>one</code> criminal ("<code>C</code>") in <code>"C"</code>");'
  - text: Seu regex deve coincidir com <code>two</code> criminosos (&quot; <code>CC</code> &quot;) em <code>&quot;CC&quot;</code>
    testString: 'assert("CC".match(reCriminals) && "CC".match(reCriminals)[0] == "CC", "Your regex should match <code>two</code> criminals ("<code>CC</code>") in <code>"CC"</code>");'
  - text: Seu regex deve corresponder a <code>three</code> criminosos (&quot; <code>CCC</code> &quot;) em <code>&quot;P1P5P4CCCP2P6P3&quot;</code>
    testString: 'assert("P1P5P4CCCP2P6P3".match(reCriminals) && "P1P5P4CCCP2P6P3".match(reCriminals)[0] == "CCC", "Your regex should match <code>three</code> criminals ("<code>CCC</code>") in <code>"P1P5P4CCCP2P6P3"</code>");'
  - text: Seu regex deve corresponder a <code>five</code> criminosos (&quot; <code>CCCCC</code> &quot;) em <code>&quot;P6P2P7P4P5CCCCCP3P1&quot;</code>
    testString: 'assert("P6P2P7P4P5CCCCCP3P1".match(reCriminals) && "P6P2P7P4P5CCCCCP3P1".match(reCriminals)[0] == "CCCCC", "Your regex should match <code>five</code> criminals ("<code>CCCCC</code>") in <code>"P6P2P7P4P5CCCCCP3P1"</code>");'
  - text: Seu regex não deve corresponder a nenhum criminoso em <code>&quot;&quot;</code>
    testString: 'assert(!reCriminals.test(""), "Your regex should not match any criminals in <code>""</code>");'
  - text: Seu regex não deve corresponder a nenhum criminoso em <code>&quot;P1P2P3&quot;</code>
    testString: 'assert(!reCriminals.test("P1P2P3"), "Your regex should not match any criminals in <code>"P1P2P3"</code>");'
  - text: Seu regex deve corresponder a <code>fifty</code> criminosos (&quot; <code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code> &quot;) em <code>&quot;P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3&quot;</code> .
    testString: 'assert("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals) && "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", "Your regex should match <code>fifty</code> criminals ("<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>") in <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /./; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
