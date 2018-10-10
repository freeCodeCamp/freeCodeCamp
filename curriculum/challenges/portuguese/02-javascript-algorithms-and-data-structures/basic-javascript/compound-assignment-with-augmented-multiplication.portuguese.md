---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
videoUrl: ''
localeTitle: Atribuição Composta Com Multiplicação Aumentada
---

## Description
<section id="description"> O operador <code>*=</code> multiplica uma variável por um número. <code>myVar = myVar * 5;</code> irá multiplicar <code>myVar</code> por <code>5</code> . Isso pode ser reescrito como: <code>myVar *= 5;</code> </section>

## Instructions
<section id="instructions"> Converta as atribuições de <code>a</code> , <code>b</code> e <code>c</code> para usar o operador <code>*=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> deve ser igual a <code>25</code>
    testString: 'assert(a === 25, "<code>a</code> should equal <code>25</code>");'
  - text: <code>b</code> deve ser igual a <code>36</code>
    testString: 'assert(b === 36, "<code>b</code> should equal <code>36</code>");'
  - text: <code>c</code> deve ser igual a <code>46</code>
    testString: 'assert(c === 46, "<code>c</code> should equal <code>46</code>");'
  - text: Você deve usar o operador <code>*=</code> para cada variável
    testString: 'assert(code.match(/\*=/g).length === 3, "You should use the <code>*=</code> operator for each variable");'
  - text: Não modifique o código acima da linha
    testString: 'assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
