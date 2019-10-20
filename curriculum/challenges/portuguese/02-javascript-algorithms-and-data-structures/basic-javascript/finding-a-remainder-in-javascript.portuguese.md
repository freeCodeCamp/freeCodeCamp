---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Encontrando um Restante em JavaScript
---

## Description
<section id="description"> O operador <code>%</code> <dfn>restante</dfn> fornece o restante da divisão de dois números. <strong>Exemplo</strong> <blockquote> 5% 2 = 1 porque <br> Math.floor (5/2) = 2 (Quociente) <br> 2 * 2 = 4 <br> 5 - 4 = 1 (restante) </blockquote> <strong>Uso</strong> <br> Na matemática, um número pode ser verificado para ser par ou ímpar, verificando o restante da divisão do número por <code>2</code> . <blockquote> 17% 2 = 1 (17 é Ímpar) <br> 48% 2 = 0 (48 é mesmo) </blockquote> <strong>Nota</strong> <br> O operador <dfn>restante</dfn> é algumas vezes incorretamente chamado de operador &quot;módulo&quot;. É muito semelhante ao módulo, mas não funciona corretamente com números negativos. </section>

## Instructions
<section id="instructions"> Defina o <code>remainder</code> igual ao restante de <code>11</code> dividido por <code>3</code> usando o operador <dfn>restante</dfn> ( <code>%</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>remainder</code> deve ser inicializada
    testString: 'assert(/var\s+?remainder/.test(code), "The variable <code>remainder</code> should be initialized");'
  - text: O valor do <code>remainder</code> deve ser <code>2</code>
    testString: 'assert(remainder === 2, "The value of <code>remainder</code> should be <code>2</code>");'
  - text: Você deve usar o operador <code>%</code>
    testString: 'assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code), "You should use the <code>%</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

var remainder;

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
