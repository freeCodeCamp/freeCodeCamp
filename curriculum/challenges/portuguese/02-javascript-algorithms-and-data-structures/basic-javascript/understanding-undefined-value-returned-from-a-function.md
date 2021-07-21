---
id: 598e8944f009e646fc236146
title: Entender o valor undefined retornado de uma função
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

Uma função pode incluir a instrução `return` mas ela não precisa fazer isso. No caso de a função não ter uma instrução `return`, quando você chamá-la, a função processa o código interno, mas o valor retornado é `undefined`.

**Exemplo**

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
```

`addSum` é uma função sem uma instrução `return`. A função irá alterar a variável global `sum`, mas o valor retornado da função é `undefined`.

# --instructions--

Crie uma função `addFive` sem qualquer argumento. Essa função adiciona 5 à variável</code>sum`, mas o valor retornado é <code>undefined`.

# --hints--

`addFive` deve ser uma função.

```js
assert(typeof addFive === 'function');
```

Uma vez que ambas as funções são executadas, a `soma` deve ser igual a `8`.

```js
assert(sum === 8);
```

Valor retornado de `addFive` deve ser `undefined`.

```js
assert(addFive() === undefined);
```

Dentro da função `addFive`, você deve adicionar `5` à variável `sum<code>.</p>

<pre><code class="js">assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
`</pre>

# --seed--

## --seed-contents--

```js
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
