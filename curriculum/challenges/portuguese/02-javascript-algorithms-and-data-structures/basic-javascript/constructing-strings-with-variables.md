---
id: 56533eb9ac21ba0edf2244b9
title: Criar strings com variáveis
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

Às vezes, você precisará criar uma string. Usando o operador de concatenação (`+`), você pode inserir uma ou mais variáveis em uma string que você está criando.

Exemplo:

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` teria o valor da string `Hello, our name is freeCodeCamp, how are you?`.

# --instructions--

Defina `myName` para uma string igual ao seu nome e construa `myStr` com `myName` em duas strings: `My name is` e `and I am well!`

# --hints--

`myName` deve ser definido para uma string de pelo menos 3 caracteres.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

Você deve usar dois operadores `+` para criar `myStr` com `myName` dentro dela.

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Only change code below this line
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "My name is " + myName + " and I am well!";
```
