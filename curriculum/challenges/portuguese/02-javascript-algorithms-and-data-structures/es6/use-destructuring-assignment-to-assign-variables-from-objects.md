---
id: 587d7b89367417b2b2512b49
title: Usar atribuição de desestruturação para atribuir variáveis de objetos
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

Desestruturar o permite atribuir um novo nome de variável quando extrair valores. Você pode fazer isso ao colocar o novo nome após dois pontos quando atribuir o valor.

Usando o mesmo objeto do exemplo anterior:

```js
const user = { name: 'John Doe', age: 34 };
```

Aqui está como você pode dar novos nomes a variáveis na atribuição:

```js
const { name: userName, age: userAge } = user;
```

Você pode lê-lo como "pegue o valor de `user.name` e atribua-o a uma nova variável chamada `userName`" e assim em diante. O valor de `userName` seria a string `John Doe` e o valor de `userAge` seria o número `34`.

# --instructions--

Substitua as duas atribuições com uma atribuição de desestruturação equivalente. Ainda deve ser atribuído às variáveis `highToday` e `highTomorrow` os valores de `today` e `tomorrow` do objeto `HIGH_TEMPERATURES`.

# --hints--

Você deve remover a sintaxe da atribuição ES5.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

Você deve usar desestruturação para criar a variável `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

Você deve usar desestruturação para criar a variável `highTomorrow`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` deve ser igual a `77` e `highTomorrow` deve ser igual a `80`.

```js
assert(highToday === 77 && highTomorrow === 80);
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

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
