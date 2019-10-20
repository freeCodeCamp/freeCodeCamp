---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
challengeType: 1
videoUrl: ''
localeTitle: Atribuição Composta com Subtração Aumentada
---

## Description
<section id="description"> Como o operador <code>+=</code> , <code>-=</code> subtrai um número de uma variável. <code>myVar = myVar - 5;</code> subtrairá <code>5</code> do <code>myVar</code> . Isso pode ser reescrito como: <code>myVar -= 5;</code> </section>

## Instructions
<section id="instructions"> Converta as atribuições de <code>a</code> , <code>b</code> e <code>c</code> para usar o operador <code>-=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> deve igual a <code>5</code>
    testString: 'assert(a === 5, "<code>a</code> should equal <code>5</code>");'
  - text: <code>b</code> deve ser igual a <code>-6</code>
    testString: 'assert(b === -6, "<code>b</code> should equal <code>-6</code>");'
  - text: <code>c</code> deve ser igual a <code>2</code>
    testString: 'assert(c === 2, "<code>c</code> should equal <code>2</code>");'
  - text: Você deve usar o operador <code>-=</code> para cada variável
    testString: 'assert(code.match(/-=/g).length === 3, "You should use the <code>-=</code> operator for each variable");'
  - text: Não modifique o código acima da linha
    testString: 'assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a = a - 6;
b = b - 15;
c = c - 1;

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
