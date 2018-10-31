---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: Aprenda sobre a programação funcional
---

## Description
<section id="description"> A programação funcional é um estilo de programação em que as soluções são funções simples e isoladas, sem nenhum efeito colateral fora do escopo da função. <code>INPUT -&gt; PROCESS -&gt; OUTPUT</code> A programação funcional é sobre: ​​1) Funções isoladas - não há dependência do estado do programa, que inclui variáveis ​​globais que estão sujeitas a alterações. 2) Funções puras - a mesma entrada sempre dá a mesma saída 3) Funções com efeitos colaterais limitados - quaisquer alterações, ou mutações, ao estado do programa fora da função são cuidadosamente controladas </section>

## Instructions
<section id="instructions"> Os membros do freeCodeCamp adoram chá. No editor de código, os <code>prepareTea</code> e <code>getTea</code> funções já estão definidos para você. Chame a função <code>getTea</code> para obter 40 xícaras de chá para a equipe e armazene-as na variável <code>tea4TeamFCC</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>tea4TeamFCC</code> deve conter 40 xícaras de chá para a equipe.
    testString: 'assert(tea4TeamFCC.length === 40, "The <code>tea4TeamFCC</code> variable should hold 40 cups of tea for the team.");'
  - text: A variável <code>tea4TeamFCC</code> deve conter xícaras de chá verde.
    testString: 'assert(tea4TeamFCC[0] === "greenTea", "The <code>tea4TeamFCC</code> variable should hold cups of green tea.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = null; // :(

// Add your code above this line

console.log(tea4TeamFCC);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
