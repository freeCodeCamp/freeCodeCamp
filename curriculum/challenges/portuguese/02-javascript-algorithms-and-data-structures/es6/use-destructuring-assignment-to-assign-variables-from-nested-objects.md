---
id: 587d7b89367417b2b2512b4a
title: Usar atribuição de desestruturação para atribuir variáveis de objetos aninhados
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

Você pode usar os mesmos princípios das últimas duas lições para desestruturar valores de objetos aninhados.

Usando um objeto similar aos exemplos anteriores:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Aqui está como extrair valores de propriedades de objetos e atribuí-los a variáveis com o mesmo nome:

```js
const { johnDoe: { age, email }} = user;
```

E aqui está como você pode atribuir o valor de uma propriedade de um objeto para variáveis com nomes diferentes:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

Substitua as duas atribuições com uma atribuição de desestruturação equivalente. Ainda deve ser atribuído às variáveis `lowToday` e `highToday` os valores de `today.low` e `today.high` do objeto `LOCAL_FORECAST`.

# --hints--

Você deve remover a sintaxe de atribuição do ES5.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

Você deve usar desestruturação para criar a variável `lowToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

Você deve usar desestruturação para criar a variável `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` deve ser igual a `64` e `highToday` deve ser igual a `77`.

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
