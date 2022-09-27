---
id: 56533eb9ac21ba0edf2244ba
title: Entender a imutabilidade das strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

Em JavaScript, valores `String` são <dfn>imutáveis</dfn>, o que significa que elas não podem ser alteradas após serem criadas.

Por exemplo, o código a seguir produzirá um erro porque a letra `B` na cadeia de caracteres `Bob` não pode ser alterada para a letra `J`:

```js
let myStr = "Bob";
myStr[0] = "J";
```

Observe que isso *não* significa que `myStr` não possa ser reatribuída. A única forma de alterar `myStr` seria atribuindo a ela um novo valor, deste modo:

```js
let myStr = "Bob";
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
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
let myStr = "Jello World";
myStr = "Hello World";
```
