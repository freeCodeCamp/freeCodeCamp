---
id: 56533eb9ac21ba0edf2244b2
title: Compound Assignment With Augmented Division
challengeType: 1
videoUrl: ''
localeTitle: Atribuição Composta Com Divisão Aumentada
---

## Description
<section id="description"> O operador <code>/=</code> divide uma variável por outro número. <code>myVar = myVar / 5;</code> Vai dividir <code>myVar</code> por <code>5</code> . Isso pode ser reescrito como: <code>myVar /= 5;</code> </section>

## Instructions
<section id="instructions"> Converta as atribuições de <code>a</code> , <code>b</code> e <code>c</code> para usar o operador <code>/=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> deve ser igual a <code>4</code>
    testString: 'assert(a === 4, "<code>a</code> should equal <code>4</code>");'
  - text: <code>b</code> deve ser igual a <code>27</code>
    testString: 'assert(b === 27, "<code>b</code> should equal <code>27</code>");'
  - text: <code>c</code> deve ser igual a <code>3</code>
    testString: 'assert(c === 3, "<code>c</code> should equal <code>3</code>");'
  - text: Você deve usar o operador <code>/=</code> para cada variável
    testString: 'assert(code.match(/\/=/g).length === 3, "You should use the <code>/=</code> operator for each variable");'
  - text: Não modifique o código acima da linha
    testString: 'assert(/var a = 48;/.test(code) && /var b = 108;/.test(code) && /var c = 33;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a = a / 12;
b = b / 4;
c = c / 11;

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
