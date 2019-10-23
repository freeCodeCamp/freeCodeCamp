---
title: Align columns
id: 594810f028c0303b75339ad0
challengeType: 5
videoUrl: ''
localeTitle: Alinhar colunas
---

## Description
<section id="description"><p> Dado um arquivo de texto de muitas linhas, onde os campos dentro de uma linha são delineados por um único caractere <code>$</code> , escreva um programa que alinhe cada coluna de campos garantindo que as palavras em cada coluna sejam separadas por pelo menos um espaço. Além disso, permita que cada palavra em uma coluna seja justificada à esquerda, justificada à direita ou justificada pelo centro em sua coluna. </p><p> Use o seguinte texto para testar seus programas: </p><pre> Dado $ a $ text $ file $ de $ many $ lines
onde $ fields $ dentro de $ a $ line $
$ $ $ $ $ $ $ single $ &#39;dollar&#39; $ character
escreva um programa $ a $
que $ alinha $ cada $ coluna $ de $ campos
por $ garantindo $ que $ palavras $ em $ cada $
A coluna $ é $ separada $ por $ em $ menos $ um $ espaço.
Além disso, $ permite $ para $ cada $ palavra $ em $ a $ coluna $ para $ seja $ ou $ restantes $
justificado, $ certo $ justificado
ou $ center $ justificado $ dentro de $ sua coluna $.
</pre><p> Observe que: </p> As linhas de texto de entrada de exemplo podem, ou não, ter caracteres em dólares finais. Todas as colunas devem compartilhar o mesmo alinhamento. Caracteres de espaço consecutivos produzidos adjacentes ao final das linhas são insignificantes para os propósitos da tarefa. O texto de saída será visualizado em uma fonte com espaçamento único em um editor de texto simples ou terminal básico. O espaço mínimo entre colunas deve ser calculado a partir do texto e não codificado. Não é um requisito adicionar caracteres separadores entre colunas ou em volta delas. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>formatText</code> é uma função.
    testString: 'assert(typeof formatText === "function", "<code>formatText</code> is a function.");'
  - text: '<code>formatText</code> com a entrada acima e justificação &quot;direita&quot; deve produzir o seguinte:'
    testString: 'assert.strictEqual(formatText(testInput, "right"), rightAligned, "<code>formatText</code> with the above input and "right" justification should produce the following: ");'
  - text: '<code>formatText</code> com a entrada acima e a justificação &quot;esquerda&quot; devem produzir o seguinte:'
    testString: 'assert.strictEqual(formatText(testInput, "left"), leftAligned, "<code>formatText</code> with the above input and "left" justification should produce the following: ");'
  - text: '<code>formatText</code> com a entrada acima e justificação &quot;central&quot; deve produzir o seguinte:'
    testString: 'assert.strictEqual(formatText(testInput, "center"), centerAligned, "<code>formatText</code> with the above input and "center" justification should produce the following: ");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

function formatText (input, justification) {
  // Good luck!
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
