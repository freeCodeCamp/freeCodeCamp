---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: ''
localeTitle: Atribuição composta com adição aumentada
---

## Description
<section id="description"> Na programação, é comum usar atribuições para modificar o conteúdo de uma variável. Lembre-se de que tudo à direita do sinal de igual é avaliado primeiro, então podemos dizer: <code>myVar = myVar + 5;</code> para adicionar <code>5</code> a <code>myVar</code> . Como esse é um padrão tão comum, há operadores que fazem uma operação matemática e uma atribuição em uma etapa. Um desses operadores é o operador <code>+=</code> . <blockquote> var myVar = 1; <br> myVar + = 5; <br> console.log (myVar); // Retorna 6 </blockquote></section>

## Instructions
<section id="instructions"> Converta as atribuições de <code>a</code> , <code>b</code> e <code>c</code> para usar o operador <code>+=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> deve ser igual a <code>15</code>
    testString: 'assert(a === 15, "<code>a</code> should equal <code>15</code>");'
  - text: <code>b</code> deve ser igual a <code>26</code>
    testString: 'assert(b === 26, "<code>b</code> should equal <code>26</code>");'
  - text: <code>c</code> deve ser igual a <code>19</code>
    testString: 'assert(c === 19, "<code>c</code> should equal <code>19</code>");'
  - text: Você deve usar o operador <code>+=</code> para cada variável
    testString: 'assert(code.match(/\+=/g).length === 3, "You should use the <code>+=</code> operator for each variable");'
  - text: Não modifique o código acima da linha
    testString: 'assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;

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
