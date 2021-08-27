---
id: 587d7b8e367417b2b2512b5c
title: Entender a terminologia de programação funcional
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

Houve uma mudança de humor no time da FCC e os membros agora querem dois tipos de chá: verde e preto. Fato: clientes sofrem mudanças de humor e de opinião frequentemente.

Por causa disso, precisaremos rever a função `getTea` do último desafio para lidar com vários pedidos de chá. Podemos modificar a `getTea` para aceitar uma função como argumento e torná-la capaz de preparar outros tipos de chá. Isso faz com que `getTea` seja mais flexível e dá mais controle ao programador quando os requisitos do cliente mudam.

Mas primeiro, vejamos um pouco de terminologia funcional:

<dfn>Callbacks</dfn> são funções que são passadas a outras funções, que decidem quando e como são chamados. Você pode ter visto alguns sendo passados a outros métodos. Em `filter`, por exemplo, a função de callback diz ao JavaScript qual é o critério para filtrar um array.

Funções que podem ser atribuídas a variáveis, passadas a outras funções ou retornadas de outra função como qualquer outro valor são chamadas de <dfn>funções de primeira classe</dfn>. Em JavaScript, todas as funções são funções de primeira classe.

As funções que recebem funções como argumentos ou retornam outras funções como valores são chamadas de <dfn>funções de ordem superior</dfn>.

Funções podem ser chamadas de <dfn>lambda</dfn> quando passadas para outra função ou retornadas a partir dela.

# --instructions--

Prepare 27 xícaras de chá verde e 13 xícaras de chá preto; armazene-as nas variáveis `tea4GreenTeamFCC` e `tea4BlackTeamFCC`, respectivamente. Perceba que a função `getTea` foi alterada para receber uma função como primeiro argumento.

Observação: o número de xícaras de chá se tornou o último parâmetro da função. Discutiremos mais sobre isso nas próximas aulas.

# --hints--

A variável `tea4GreenTeamFCC` deve conter 27 xícaras de chá verde para o time.

```js
assert(tea4GreenTeamFCC.length === 27);
```

A variável `tea4GreenTeamFCC` deve conter xícaras de chá verde.

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

A variável `tea4BlackTeamFCC` deve conter 13 xícaras de chá preto.

```js
assert(tea4BlackTeamFCC.length === 13);
```

A variável `tea4BlackTeamFCC` deve conter xícaras de chá preto.

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
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
