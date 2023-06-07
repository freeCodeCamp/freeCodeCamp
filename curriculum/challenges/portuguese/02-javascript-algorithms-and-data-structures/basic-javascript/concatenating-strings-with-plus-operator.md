---
id: 56533eb9ac21ba0edf2244b7
title: Concatenar strings com o operador mais
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

Em JavaScript, quando o operador `+` é usado com um valor de `String`, ele é chamado de operador de <dfn>concatenação</dfn>. Você pode criar uma nova string a partir de outras strings ao <dfn>concatenar</dfn> elas juntos.

**Exemplo**

```js
'My name is Alan,' + ' I concatenate.'
```

**Observação:** cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-las.

Exemplo:

```js
const ourStr = "I come first. " + "I come second.";
```

A string `I come first. I come second.` seria exibida no console.
# --instructions--

Crie `myStr` a partir das strings `This is the start.` e `This is the end.` usando o operador `+`. Não se esqueça de incluir um espaço entre as duas strings.

# --hints--

`myStr` deve ter um único caractere de espaço entre as duas strings.

```js
assert(/start\. This/.test(myStr));
```

`myStr` deve ter como valor a string `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

Você deve usar o operador `+` para criar `myStr`.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` deve ser criada usando a palavra-chave `const`.

```js
assert(/const\s+myStr/.test(code));
```

Você deve atribuir o resultado à variável `myStr`.

```js
assert(/myStr\s*=/.test(code));
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
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```
