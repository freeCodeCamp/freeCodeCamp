---
id: 587d7b8a367417b2b2512b4e
title: Criar strings usando template literals
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

Um novo recurso introduzido na versão ES6 é o <dfn>template literal</dfn>. Esse é um tipo especial de string que torna mais fácil a criação de strings complexas.

Template literals nos permitem criar strings de mais de uma linha e usar os recursos de interpolação de strings.

Considere o código abaixo:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

O console vai exibir as strings `Hello, my name is Zodiac Hasbro!` e `I am 56 years old.`.

Muitas coisas aconteceram aqui. Primeiro, o exemplo utiliza crases (ou backticks, em inglês, `` ` ``), ao invés de aspas (`'` ou `"`), ao redor da string. Segundo, note que a string tem mais de uma linha, tanto no código quanto na saída. Isso torna desnecessário inserir `\n` dentro das strings. A sintaxe `${variable}` usada acima é um espaço reservado (placeholder). Basicamente, você não terá mais que usar concatenação com o operador `+`. Para adicionar o valor de uma variável à string, você a envolve com `${` e `}`. Além de poder usar variáveis, você pode incluir outras expressões. Como por exemplo `${a + b}`. Essa nova maneira de criar strings te dá mais flexibilidade na hora de criar string complexas.

# --instructions--

Use a sintaxe de template literal com crases para criar um array de strings de elementos de lista (`li`). Analise a propriedade `failure` do objeto `result`. O texto de cada elemento li deve ser um dos elementos contidos no array dentro da propriedade failure e cada li deve ter o atributo `class` com o valor `text-warning`. A função `makeList` deve retornar um array de strings de elementos li.

Abaixo está um exemplo do array que você deve criar. Use um loop para criar o mesmo resultado.

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

A variável `failuresList` deve ser um array contendo as mensagens de `result failure`.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

A variável `failuresList` deve ser igual ao array mostrado anteriormente.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

Template strings e interpolação de expressões - ${} - devem ser usados.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

Você deve usar um loop.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
