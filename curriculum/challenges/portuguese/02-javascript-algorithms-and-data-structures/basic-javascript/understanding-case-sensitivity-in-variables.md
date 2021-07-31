---
id: 56533eb9ac21ba0edf2244ab
title: Entender a sensibilidade a caracteres maiúsculos e minúsculos em variáveis
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

Em JavaScript todas os nomes de variáveis e funções são sensíveis a caracteres maiúsculos e minúsculos. Isso significa que a capitalização importa.

`MYVAR` não é o mesmo que `MyVar` nem `myvar`. É possível ter diversas variáveis distintas com o mesmo nome mas com capitalização diferente. É extremamente recomendado pelo bem da clareza, que você *não* use esse recurso da linguagem.

**Melhores práticas**

Escreva nomes de variáveis em JavaScript em <dfn>camelCase</dfn>. Em <dfn>camelCase</dfn>, nomes de variáveis com mais de uma palavra possuem a primeira palavra toda em minúscula e a primeira letra de cada palavra subsequente capitalizada.

**Exemplos:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

Modifique as declarações e atribuições existentes para que seus nomes usem <dfn>camelCase</dfn>.

Não crie nenhuma variável nova.

# --hints--

`studlyCapVar` deve ser definido e ter um valor de `10`.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` deve ser definida e ter o valor da string `A String`.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` deve ser definida e ter o valor de `9000`.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` deve usar camelCase em ambas as seções de declaração e atribuição.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` deve usar camelCase em ambas as seções de declaração e atribuição.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` deve usar camelCase em ambas as seções de declaração e atribuição.

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
