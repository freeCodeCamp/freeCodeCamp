---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
videoUrl: ''
localeTitle: Iterar com JavaScript Do ... While Loops
---

## Description
<section id="description"> Você pode executar o mesmo código várias vezes usando um loop. O próximo tipo de loop que você aprenderá é chamado de loop <code>do...while</code> porque primeiro ele <code>do</code> uma passagem do código dentro do loop, não importa o que aconteça, e então executa <code>while</code> uma condição especificada é verdadeira e pára assim que a condição não for mais verdadeira. Vamos ver um exemplo. <blockquote> var ourArray = []; <br> var i = 0; <br> Faz { <br> ourArray.push (i); <br> i ++; <br> } enquanto (i &lt;5); </blockquote> Isso se comporta exatamente como você esperaria com qualquer outro tipo de loop, e a matriz resultante será semelhante a <code>[0, 1, 2, 3, 4]</code> . No entanto, o que faz o <code>do...while</code> diferente de outros loops é como ele se comporta quando a condição falha na primeira verificação. Vamos ver isso em ação. Aqui está um loop regular que executará o código no loop desde que <code>i &lt; 5</code> . <blockquote> var ourArray = []; <br> var i = 5; <br> enquanto (i &lt;5) { <br> ourArray.push (i); <br> i ++; <br> } </blockquote> Observe que inicializamos o valor de <code>i</code> como sendo 5. Quando executamos a próxima linha, notamos que <code>i</code> não é menor que 5. Portanto, não executamos o código dentro do loop. O resultado é que o <code>ourArray</code> terá nada adicionado a ele, então ele ainda ficará assim <code>[]</code> quando todo o código no exemplo acima terminar de ser executado. Agora, dê uma olhada em um <code>do...while</code> loop. <blockquote> var ourArray = []; <br> var i = 5; <br> Faz { <br> ourArray.push (i); <br> i ++; <br> } enquanto (i &lt;5); </blockquote> Neste caso, inicializamos o valor de <code>i</code> como 5, assim como fizemos com o loop while. Quando chegamos à próxima linha, não há verificação para o valor de <code>i</code> , então vamos para o código dentro das chaves e executá-lo. Vamos adicionar um elemento à matriz e incrementar <code>i</code> antes de chegarmos à verificação de condição. Então, quando chegarmos a verificar se <code>i &lt; 5</code> ver que <code>i</code> agora é 6, o que falha na verificação condicional. Então, saímos do loop e acabamos. No final do exemplo acima, o valor de <code>ourArray</code> é <code>[5]</code> . Essencialmente, um laço <code>do...while</code> while garante que o código dentro do loop será executado pelo menos uma vez. Vamos tentar fazer um <code>do...while</code> loop para trabalhar, empurrando valores para um array. </section>

## Instructions
<section id="instructions"> Alterar o <code>while</code> loop no código a um <code>do...while</code> loop para que o loop vai empurrar o número 10 a <code>myArray</code> , e <code>i</code> será igual a <code>11</code> quando o código termina a execução. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deveria estar usando um <code>do...while</code> loop para isso.
    testString: 'assert(code.match(/do/g), "You should be using a <code>do...while</code> loop for this.");'
  - text: '<code>myArray</code> deve ser igual a <code>[10]</code> .'
    testString: 'assert.deepEqual(myArray, [10], "<code>myArray</code> should equal <code>[10]</code>.");'
  - text: <code>i</code> deveria igual a <code>11</code>
    testString: 'assert.deepEqual(i, 11, "<code>i</code> should equal <code>11</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

while (i < 5) {
  myArray.push(i);
  i++;
}

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
