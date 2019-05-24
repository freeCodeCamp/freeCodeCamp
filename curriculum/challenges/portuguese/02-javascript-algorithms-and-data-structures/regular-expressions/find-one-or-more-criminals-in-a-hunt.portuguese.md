---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
videoUrl: ''
localeTitle: Encontre um ou mais criminosos em uma perseguição policial
---

## Descrição
<section id="description"> Hora de fazer uma pausa e testar suas novas habilidades de escrever expressões regulares. Um grupo de criminosos escapou e fugiu da prisão, mas você não sabe quantos. No entanto, você sabe que eles ficam juntos quando estão perto de outras pessoas. Você é o responsável para encontrar todos os criminosos de uma só vez. Aqui está um exemplo para revisar como fazer isso: A expressão regular <code>/z+/</code> corresponde à letra <code>z</code> quando aparece uma ou mais vezes seguidas. Ela encontraria correspondências em todas as seguintes strings: <blockquote> &quot;z&quot; <br> &quot;zzzzzz&quot; <br> &quot;ABCzzzz&quot; <br> &quot;zzzzABC&quot; <br> &quot;abczzzzzzzzzzzzzzzzzzzzzabc&quot; </blockquote> Mas ela não encontra correspondências nas strings a seguir já que não existem caracteres da letra <code>z</code> : <blockquote> &quot;&quot; <br> &quot;ABC&quot; <br> &quot;abcabc&quot; </blockquote></section>

## Instruções
<section id="instructions"> Escreva uma expressão regular <code>greedy</code> que encontre um ou mais criminosos dentro de um grupo de outras pessoas. Um criminoso é representado pela letra maiúscula <code>C</code> </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: Sua expressão regular deve corresponder a <code>one</code> criminoso ( <code>C</code> ) em <code>C</code>
    testString: 'assert("C".match(reCriminals) && "C".match(reCriminals)[0] == "C", "Sua expressão regular deve corresponder a <code>one</code> criminoso ("<code>C</code>") em <code>"C"</code>");'
  - text: Sua expressão regular deve coincidir com <code>two</code> criminosos (&quot; <code>CC</code> &quot;) em <code>&quot;CC&quot;</code>
    testString: 'assert("CC".match(reCriminals) && "CC".match(reCriminals)[0] == "CC", "Sua expressão regular deve corresponder a <code>two</code> criminosos (<code>CC</code>) em <code>CC</code>);'
  - text: Sua expressão regular deve corresponder a <code>three</code> criminosos ( <code>CCC</code> ) em <code>P1P5P4CCCP2P6P3</code>
    testString: 'assert("P1P5P4CCCP2P6P3".match(reCriminals) && "P1P5P4CCCP2P6P3".match(reCriminals)[0] == "CCC", "Sua expressão regular deve corresponder a <code>three</code> criminosos ("<code>CCC</code>") em <code>"P1P5P4CCCP2P6P3"</code>");'
  - text: Sua expressão regular deve corresponder a <code>five</code> criminosos ( <code>CCCCC</code> ) em <code>P6P2P7P4P5CCCCCP3P1</code>
    testString: 'assert("P6P2P7P4P5CCCCCP3P1".match(reCriminals) && "P6P2P7P4P5CCCCCP3P1".match(reCriminals)[0] == "CCCCC", "Sua expressão regular deve corresponder a <code>five</code> criminosos ("<code>CCCCC</code>") em <code>"P6P2P7P4P5CCCCCP3P1"</code>");'
  - text: Sua expressão regular não deve corresponder a nenhum criminoso em <code>&quot;&quot;</code>
    testString: 'assert(!reCriminals.test(""), "Sua expressão regular não deve corresponder a nenhum criminoso <code>""</code>");'
  - text: Sua expressão regular não deve corresponder a nenhum criminoso em <code>P1P2P3</code>
    testString: 'assert(!reCriminals.test("P1P2P3"), "Sua expressão regular não deve corresponder a nenhum criminoso em <code>"P1P2P3"</code>");'
  - text: Sua expressão regular deve corresponder a <code>fifty</code> criminosos ( <code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code> ) em <code>P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3</code> .
    testString: 'assert("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals) && "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", "Sua expressão regular deve corresponder a <code>fifty</code> criminosos ("<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>") em <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.");'

```

</section>

## Desafio
<section id='challengeSeed'>

<div id='js-seed'>

```js
// exemplo multidão reunida
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /./; // Altere esta linha

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solução necessária
```
</section>
