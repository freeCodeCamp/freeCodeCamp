---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Ordem lógica em outras declarações
---

## Description
<section id="description"> Ordem é importante em <code>if</code> , <code>else if</code> declarações. A função é executada de cima para baixo, então você vai querer ter cuidado com a afirmação que vem primeiro. Tome estas duas funções como um exemplo. Aqui está o primeiro: <blockquote> função foo (x) { <br> if (x &lt;1) { <br> return &quot;menos de um&quot;; <br> } else if (x &lt;2) { <br> return &quot;menos de dois&quot;; <br> } outro { <br> return &quot;Maior que ou igual a dois&quot;; <br> } <br> } </blockquote> E o segundo apenas muda a ordem das declarações: <blockquote> barra de funções (x) { <br> if (x &lt;2) { <br> return &quot;menos de dois&quot;; <br> } else if (x &lt;1) { <br> return &quot;menos de um&quot;; <br> } outro { <br> return &quot;Maior que ou igual a dois&quot;; <br> } <br> } </blockquote> Embora essas duas funções pareçam quase idênticas, se passarmos um número para ambas, obteremos saídas diferentes. <blockquote> foo (0) // &quot;Menos que um&quot; <br> bar (0) // &quot;menos de dois&quot; </blockquote></section>

## Instructions
<section id="instructions"> Altere a ordem da lógica na função para que ela retorne as instruções corretas em todos os casos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>orderMyLogic(4)</code> deve retornar &quot;Menos de 5&quot;
    testString: 'assert(orderMyLogic(4) === "Less than 5", "<code>orderMyLogic(4)</code> should return "Less than 5"");'
  - text: <code>orderMyLogic(6)</code> deve retornar &quot;Menor que 10&quot;
    testString: 'assert(orderMyLogic(6) === "Less than 10", "<code>orderMyLogic(6)</code> should return "Less than 10"");'
  - text: <code>orderMyLogic(11)</code> deve retornar &quot;maior que ou igual a 10&quot;
    testString: 'assert(orderMyLogic(11) === "Greater than or equal to 10", "<code>orderMyLogic(11)</code> should return "Greater than or equal to 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
