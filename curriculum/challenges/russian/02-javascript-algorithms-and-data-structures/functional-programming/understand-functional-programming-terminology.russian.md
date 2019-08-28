---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
forumTopicId: 301240
localeTitle: Понять терминологию функционального программирования
---

## Description
<section id='description'>
Команда FCC почувствовала колебание настроения и теперь хочет два типа чая: зеленый чай и черный чай. Общий факт: колебания настроения у клиентов довольно распространены. С этой информацией нам нужно будет вернуться к функции <code>getTea</code> из последнего вызова, чтобы обрабатывать различные запросы на чай. Мы можем модифицировать <code>getTea</code> чтобы принять функцию в качестве параметра, чтобы иметь возможность изменять тип чая, который он готовит. Это делает <code>getTea</code> более гибким и дает программисту больше контроля при изменении запросов клиента. Но сначала давайте рассмотрим функциональную терминологию: <code>Callbacks</code> вызовы - это функции, которые были проскальзываны или переданы в другую функцию, чтобы решить вызов этой функции. Возможно, вы видели, как они передавались другим методам, например, в <code>filter</code> , функция обратного вызова сообщает JavaScript критериям фильтрации массива. Функции, которые могут быть назначены переменной, переданы в другую функцию или возвращены из другой функции, как и любое другое нормальное значение, называются функциями <code>first class</code> . В JavaScript все функции являются функциями <code>first class</code> . Функции, которые принимают функцию в качестве аргумента или возвращают функцию в качестве возвращаемого значения, называются функциями <code>higher order</code> . Когда функции передаются другой функции или возвращаются из другой функции, то те функции, которые передаются или возвращаются, можно назвать <code>lambda</code> .
</section>

## Instructions
<section id='instructions'>
Подготовьте 27 чашек зеленого чая и 13 чашек черного чая и храните их в параметрах <code>tea4GreenTeamFCC</code> и <code>tea4BlackTeamFCC</code> , соответственно. Обратите внимание, что функция <code>getTea</code> была изменена, поэтому теперь она принимает функцию в качестве первого аргумента. Примечание. Данные (количество чашек чая) поставляются в качестве последнего аргумента. Мы обсудим это более подробно на более поздних уроках.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>tea4GreenTeamFCC</code> variable should hold 27 cups of green tea for the team.
    testString: assert(tea4GreenTeamFCC.length === 27);
  - text: The <code>tea4GreenTeamFCC</code> variable should hold cups of green tea.
    testString: assert(tea4GreenTeamFCC[0] === 'greenTea');
  - text: The <code>tea4BlackTeamFCC</code> variable should hold 13 cups of black tea.
    testString: assert(tea4BlackTeamFCC.length === 13);
  - text: The <code>tea4BlackTeamFCC</code> variable should hold cups of black tea.
    testString: assert(tea4BlackTeamFCC[0] === 'blackTea');

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
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```

</section>
