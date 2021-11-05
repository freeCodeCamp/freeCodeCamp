---
id: 56533eb9ac21ba0edf2244ed
title: Adicionar variáveis para strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

Assim como podemos construir uma string em várias linhas através das strings <dfn>literais</dfn>, nós também podemos adicionar as variáveis para a string usando o operador mais igual (`+=`).

Exemplo:

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` teria o valor `freeCodeCamp is awesome!`.

# --instructions--

Defina `someAdjective` para uma string de pelo menos 3 caracteres e adicione para `myStr` usando o operador `+=`.

# --hints--

`someAdjective` deve ser definida para uma string de pelo menos o tamanho de 3 caracteres.

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

Você deve adicionar `someAdjective` para `myStr` usando o operador `+=`.

```js
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
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
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
```

# --solutions--

```js
const someAdjective = "neat";
let myStr = "Learning to code is ";
myStr += someAdjective;
```
