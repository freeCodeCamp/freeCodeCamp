---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
videoUrl: ''
localeTitle: Entenda a terminologia de programação funcional
---

## Description
<section id="description"> A equipe da FCC fez um balanço e agora quer dois tipos de chá: chá verde e chá preto. Fato Geral: As mudanças de humor do cliente são bastante comuns. Com essa informação, precisaremos revisitar a função <code>getTea</code> do último desafio para lidar com várias solicitações de chá. Podemos modificar o <code>getTea</code> para aceitar uma função como parâmetro para poder alterar o tipo de chá que ele prepara. Isso torna o <code>getTea</code> mais flexível e dá ao programador mais controle quando as solicitações do cliente são alteradas. Mas primeiro, vamos cobrir algumas terminologias funcionais: <code>Callbacks</code> são as funções que são escorregadas ou passadas para outra função para decidir a invocação dessa função. Você pode tê-los visto passado para outros métodos, por exemplo, no <code>filter</code> , a função de retorno de chamada informa ao JavaScript os critérios de como filtrar uma matriz. Funções que podem ser atribuídas a uma variável, passadas para outra função ou retornadas de outra função como qualquer outro valor normal, são chamadas de funções de <code>first class</code> . Em JavaScript, todas as funções são de <code>first class</code> . As funções que assumem uma função como um argumento ou retornam uma função como um valor de retorno são chamadas de funções de <code>higher order</code> . Quando as funções são passadas para outra função ou retornadas de outra função, então aquelas funções que são passadas ou retornadas podem ser chamadas de <code>lambda</code> . </section>

## Instructions
<section id="instructions"> Prepare 27 xícaras de chá verde e 13 xícaras de chá preto e armazená-los em <code>tea4GreenTeamFCC</code> e <code>tea4BlackTeamFCC</code> variáveis, respectivamente. Observe que a função <code>getTea</code> foi modificada, de modo que agora assume uma função como o primeiro argumento. Nota: Os dados (o número de xícaras de chá) é fornecido como o último argumento. Vamos discutir isso mais em lições posteriores. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>tea4GreenTeamFCC</code> deve conter 27 xícaras de chá verde para a equipe.
    testString: 'assert(tea4GreenTeamFCC.length === 27, "The <code>tea4GreenTeamFCC</code> variable should hold 27 cups of green tea for the team.");'
  - text: A variável <code>tea4GreenTeamFCC</code> deve conter xícaras de chá verde.
    testString: 'assert(tea4GreenTeamFCC[0] === "greenTea", "The <code>tea4GreenTeamFCC</code> variable should hold cups of green tea.");'
  - text: A variável <code>tea4BlackTeamFCC</code> deve conter 13 xícaras de chá preto.
    testString: 'assert(tea4BlackTeamFCC.length === 13, "The <code>tea4BlackTeamFCC</code> variable should hold 13 cups of black tea.");'
  - text: A variável <code>tea4BlackTeamFCC</code> deve conter xícaras de chá preto.
    testString: 'assert(tea4BlackTeamFCC[0] === "blackTea", "The <code>tea4BlackTeamFCC</code> variable should hold cups of black tea.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = null; // :(
const tea4BlackTeamFCC = null; // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
