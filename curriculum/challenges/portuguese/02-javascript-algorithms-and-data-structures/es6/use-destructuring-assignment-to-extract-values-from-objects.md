---
id: 5cfa550e84205a357704ccb6
title: Usar atribuição de desestruturação para extrair valores de objetos
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Atribuição de desestruturação</dfn> é uma sintaxe especial introduzida na ES6, para atribuir nitidamente valores retirados diretamente de um objeto.

Considere o seguinte código ES5:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` teria o valor da string `John Doe` e `age` teria o número `34`.

Aqui está uma instrução de atribuição equivalente usando a sintaxe de desestruturação ES6:

```js
const { name, age } = user;
```

Novamente, `name` teria o valor da string `John Doe` e `age` teria o número `34`.

Aqui, as variáveis `name` e `age` serão criadas e atribuídas a elas os valores de seus respectivos valores do objeto `user`. Você pode ver que fica muito mais limpo.

Você pode extrair quantos valores do objeto quanto você quer.

# --instructions--

Substitua as duas atribuições com a atribuição de desestruturação equivalente. Ainda deve ser atribuído às valores `today` e `tomorrow` os valores de `today` e `tomorrow` do objeto `HIGH_TEMPERATURES`.

# --hints--

Você deve remover a sintaxe de atribuição do ES5.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

Você deve usar desestruturação para criar a variável `today`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

Você deve usar desestruturação para criar a variável `tomorrow`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` deve ser igual a `77` e `tomorrow` deve ser igual a `80`.

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
