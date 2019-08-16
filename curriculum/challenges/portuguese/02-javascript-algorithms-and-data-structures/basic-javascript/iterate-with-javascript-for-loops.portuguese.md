---
id: cf1111c1c11feddfaeb5bdef
title: Iterate with JavaScript For Loops
challengeType: 1
videoUrl: ''
localeTitle: Iterar com JavaScript For Loops
---

## Description
<section id="description"> Você pode executar o mesmo código várias vezes usando um loop. O tipo mais comum de loop de JavaScript é chamado de <code>for loop</code> porque é executado &quot;por&quot; um número específico de vezes. For loops são declarados com três expressões opcionais separadas por ponto e vírgula: <code>for ([initialization]; [condition]; [final-expression])</code> A instrução de <code>initialization</code> é executada uma vez apenas antes do loop iniciar. É normalmente usado para definir e configurar sua variável de loop. A instrução de <code>condition</code> é avaliada no início de cada iteração de loop e continuará enquanto ela for avaliada como <code>true</code> . Quando a <code>condition</code> é <code>false</code> no início da iteração, o loop deixará de ser executado. Isso significa que se a <code>condition</code> começar como <code>false</code> , seu loop nunca será executado. A <code>final-expression</code> é executada no final de cada iteração de loop, antes da próxima verificação de <code>condition</code> e é geralmente usada para incrementar ou decrementar seu contador de loop. No exemplo a seguir, inicializamos com <code>i = 0</code> e iteramos enquanto nossa condição <code>i &lt; 5</code> é verdadeira. Vamos incrementar <code>i</code> por <code>1</code> em cada iteração de loop com o <code>i++</code> como nossa <code>final-expression</code> . <blockquote> var ourArray = []; <br> para (var i = 0; i &lt;5; i ++) { <br> ourArray.push (i); <br> } </blockquote> <code>ourArray</code> irá agora conter <code>[0,1,2,3,4]</code> . </section>

## Instructions
<section id="instructions"> Use um loop <code>for</code> para trabalhar para empurrar os valores de 1 a 5 para <code>myArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve estar usando um <code>for</code> loop para isso.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: '<code>myArray</code> deve ser igual a <code>[1,2,3,4,5]</code> .'
    testString: 'assert.deepEqual(myArray, [1,2,3,4,5], "<code>myArray</code> should equal <code>[1,2,3,4,5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

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
