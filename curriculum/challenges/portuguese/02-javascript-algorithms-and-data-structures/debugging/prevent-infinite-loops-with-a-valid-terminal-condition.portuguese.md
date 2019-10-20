---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
challengeType: 1
videoUrl: ''
localeTitle: Evite Loops Infinitos com uma Condição Terminal Válida
---

## Description
<section id="description"> O tópico final é o temido loop infinito. Os loops são ótimas ferramentas quando você precisa que seu programa execute um bloco de códigos um determinado número de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição terminal que termine o loop. Loops infinitos tendem a congelar ou travar o navegador e causar o caos geral da execução do programa, que ninguém quer. Houve um exemplo de um ciclo infinito na introdução desta secção - que não tinha estado terminal para sair do <code>while</code> loop dentro <code>loopy()</code> . NÃO chame esta função! <blockquote> função loopy () { <br> while (true) { <br> console.log (&quot;Olá, mundo!&quot;); <br> } <br> } </blockquote> É tarefa do programador garantir que a condição do terminal, que informa ao programa quando sair do código de loop, seja atingida. Um erro é incrementar ou decrementar uma variável do contador na direção errada da condição do terminal. Outro é acidentalmente redefinir uma variável de contador ou índice dentro do código de loop, em vez de incrementar ou decrementar. </section>

## Instructions
<section id="instructions"> A função <code>myFunc()</code> contém um loop infinito porque a condição terminal <code>i != 4</code> nunca será avaliada como <code>false</code> (e quebrará o loop) - <code>i</code> aumentarei em 2 cada passo, e saltará sobre 4, já <code>i</code> é estranho iniciar. Corrija o operador de comparação na condição do terminal para que o loop seja executado apenas para <code>i</code> menor ou igual a 4. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve mudar o operador de comparação na condição terminal (a parte intermediária) do loop <code>for</code> .
    testString: 'assert(code.match(/i\s*?<=\s*?4;/g).length == 1, "Your code should change the comparison operator in the terminal condition (the middle part) of the <code>for</code> loop.");'
  - text: Seu código deve corrigir o operador de comparação na condição terminal do loop.
    testString: 'assert(!code.match(/i\s*?!=\s*?4;/g), "Your code should fix the comparison operator in the terminal condition of the loop.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
