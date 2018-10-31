---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
videoUrl: ''
localeTitle: Introdução ao Currying e Aplicação Parcial
---

## Description
<section id="description"> A <code>arity</code> de uma função é o número de argumentos requeridos. <code>Currying</code> uma função significa converter uma função de N <code>arity</code> em N funções de <code>arity</code> 1. Em outras palavras, ela reestrutura uma função, de modo que recebe um argumento, depois retorna outra função que recebe o próximo argumento, e assim por diante. Aqui está um exemplo: <blockquote> // Função sem curry <br> function unCurried (x, y) { <br> return x + y; <br> } <br><br> // Função curry <br> função curry (x) { <br> função de retorno (y) { <br> return x + y; <br> } <br> } <br> curry (1) (2) // Retorna 3 </blockquote> Isso é útil em seu programa se você não puder fornecer todos os argumentos para uma função de uma só vez. Você pode salvar cada chamada de função em uma variável, que conterá a referência da função retornada que recebe o próximo argumento quando estiver disponível. Aqui está um exemplo usando a função <code>curried</code> no exemplo acima: <blockquote> // Chame uma função curry em partes: <br> var funcForY = curry (1); <br> console.log (funcForY (2)); // Imprime 3 </blockquote> Da mesma forma, <code>partial application</code> pode ser descrita como aplicando alguns argumentos a uma função por vez e retornando outra função que é aplicada a mais argumentos. Aqui está um exemplo: <blockquote> // Função imparcial <br> função imparcial (x, y, z) { <br> return x + y + z; <br> } <br> var partialFn = impartial.bind (isso, 1, 2); <br> partialFn (10); // Retorna 13 </blockquote></section>

## Instructions
<section id="instructions"> Preencha o corpo da função <code>add</code> para usar o currying para adicionar os parâmetros <code>x</code> , <code>y</code> e <code>z</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add(10)(20)(30)</code> deve retornar <code>60</code> .
    testString: 'assert(add(10)(20)(30) === 60, "<code>add(10)(20)(30)</code> should return <code>60</code>.");'
  - text: <code>add(1)(2)(3)</code> deve retornar <code>6</code> .
    testString: 'assert(add(1)(2)(3) === 6, "<code>add(1)(2)(3)</code> should return <code>6</code>.");'
  - text: <code>add(11)(22)(33)</code> deve retornar <code>66</code> .
    testString: 'assert(add(11)(22)(33) === 66, "<code>add(11)(22)(33)</code> should return <code>66</code>.");'
  - text: Seu código deve incluir uma declaração final que retorne <code>x + y + z</code> .
    testString: 'assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g), "Your code should include a final statement that returns <code>x + y + z</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add(x) {
  // Add your code below this line


  // Add your code above this line
}
add(10)(20)(30);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
