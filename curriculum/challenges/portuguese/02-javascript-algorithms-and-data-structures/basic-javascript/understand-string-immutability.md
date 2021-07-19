---
id: 56533eb9ac21ba0edf2244ba
title: Entendendo a Imutabilidade das Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

Em JavaScript, valores `String` são <dfn>imutáveis</dfn>, o que significa que elas não podem ser alteradas após serem criadas.

Por exemplo, o código a seguir:

```js
var myStr = "Bob";
myStr[0] = "J";
```

não é possível alterar o valor de `myStr` para `Job`, porque o conteúdo de `myStr` não pode ser alterado. Note que isso *não* significa que `myStr` não pode ser alterado, apenas que os caracteres individuais de uma <dfn>string literal</dfn> não pode ser alterado. A única forma de alterar `myStr` seria atribuindo-a com uma nova string, dessa forma:

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

Corrija a atribuição para `myStr` para que contenha o valor `Hello World` (string) usando a abordagem mostrada no exemplo acima.

# --hints--

`myStr` deve ter o valor da string `HelloWorld`.

```js
assert(myStr === 'Hello World');
```

Você não deve alterar o código acima do comentário especificado.

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
