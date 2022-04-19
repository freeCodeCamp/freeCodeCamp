---
id: bd7123c9c448eddfaeb5bdef
title: Encontrar o tamanho de uma string
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Você pode encontrar o tamanho de um valor de `String` ao escrever `.length` após a variável de string ou literal de string.

```js
console.log("Alan Peter".length);
```

O valor `10` seria exibido no console. Observe que o caractere de espaço entre "Alan" e "Peter" também é contado.

Por exemplo, se nós criássemos uma variável `const firstName = "Ada"`, poderíamos descobrir qual o tamanho da string `Ada` usando a propriedade `firstName.length`.

# --instructions--

Use a propriedade `.length` para definir `lastNameLength` como o número de caracteres em `lastName`.

# --hints--

Você não deve alterar as declarações de variáveis na seção `// Setup`.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` deve ser igual a oito.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Você deve estar recebendo o tamanho de `lastName` ao usar `.length` dessa forma: `lastName.length`.

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
