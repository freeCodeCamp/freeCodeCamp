---
id: 56533eb9ac21ba0edf2244b8
title: Concatenar strings com o operador mais igual
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

Também podemos usar o operador `+=` para <dfn>concatenar</dfn> uma string no final de uma variável string existente. Isso pode ser muito útil para quebrar uma longa string em várias linhas.

**Nota:** Cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-las.

Exemplo:

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` agora deve ter como valor a string `I come first. I come second.`.

# --instructions--

Construa `myStr` sobre várias linhas concatenando essas duas strings: `Esta é a primeira frase.` e `Esta é a segunda frase.` usando o operador `+=`. Use o operador `+=` de modo semelhante a como aparece no exemplo. Comece atribuindo o primeiro texto para `myStr`, e então adicione o segundo texto.

# --hints--

`myStr` deve ter como valor a string `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

Você deve usar o operador `+=` para construir `myStr`.

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
// Only change code below this line

var myStr;
```

# --solutions--

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
