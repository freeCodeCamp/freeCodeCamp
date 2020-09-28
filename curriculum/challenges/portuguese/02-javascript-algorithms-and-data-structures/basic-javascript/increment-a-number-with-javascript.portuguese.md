---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Incrementar um número com JavaScript
---

## Descrição
<section id="description"> Você pode facilmente <dfn>incrementar</dfn> ou adicionar mais um a uma variável com o operador <code>++</code> . <code>i++;</code> é o equivalente de <code>i = i + 1;</code> <strong>Nota</strong> <br> A linha inteira se torna <code>i++;</code> , eliminando a necessidade do sinal de igual. </section>

## Instruções
<section id="instructions"> Altere o código para usar o operador <code>++</code> em <code>myVar</code> . <strong>Sugestão</strong> <br> Saiba mais sobre <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()" target="_blank">operadores aritméticos - Incremento (++)</a> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> deve ser igual a <code>88</code>
    testString: 'assert(myVar === 88, "<code>myVar</code> should equal <code>88</code>");'
  - text: <code>myVar = myVar + 1;</code> deve ser mudado
    testString: 'assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code), "<code>myVar = myVar + 1;</code> should be changed");'
  - text: Use o operador <code>++</code>
    testString: 'assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code), "Use the <code>++</code> operator");'
  - text: Não mude o código acima da linha
    testString: 'assert(/var myVar = 87;/.test(code), "Do not change code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 87;

// Altere o código somente depois dessa linha.
myVar = myVar + 1;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solução
<section id='solution'>

```js
// Solução necessária
```
</section>
