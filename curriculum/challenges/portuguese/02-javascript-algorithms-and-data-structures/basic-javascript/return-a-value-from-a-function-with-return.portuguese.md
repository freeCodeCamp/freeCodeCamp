---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: ''
localeTitle: Retornar um valor de uma função com retorno
---

## Description
<section id="description"> Podemos passar valores para uma função com <dfn>argumentos</dfn> . Você pode usar uma instrução de <code>return</code> para enviar um valor de volta de uma função. <strong>Exemplo</strong> <blockquote> function plusThree (num) { <br> return num + 3; <br> } <br> var resposta = mais três (5); // 8 </blockquote> <code>plusThree</code> aceita um <dfn>argumento</dfn> para <code>num</code> e retorna um valor igual a <code>num + 3</code> . </section>

## Instructions
<section id="instructions"> Crie uma função <code>timesFive</code> que aceite um argumento, multiplique por <code>5</code> e retorne o novo valor. Veja a última linha no editor para um exemplo de como você pode testar sua função <code>timesFive</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code> deve ser uma função
    testString: 'assert(typeof timesFive === "function", "<code>timesFive</code> should be a function");'
  - text: <code>timesFive(5)</code> deve retornar <code>25</code>
    testString: 'assert(timesFive(5) === 25, "<code>timesFive(5)</code> should return <code>25</code>");'
  - text: <code>timesFive(2)</code> deve retornar <code>10</code>
    testString: 'assert(timesFive(2) === 10, "<code>timesFive(2)</code> should return <code>10</code>");'
  - text: <code>timesFive(0)</code> deve retornar <code>0</code>
    testString: 'assert(timesFive(0) === 0, "<code>timesFive(0)</code> should return <code>0</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line



console.log(minusSeven(10));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
