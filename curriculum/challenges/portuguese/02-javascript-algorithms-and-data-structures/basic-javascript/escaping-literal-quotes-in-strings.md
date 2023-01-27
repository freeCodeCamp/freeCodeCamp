---
id: 56533eb9ac21ba0edf2244b5
title: Escapar aspas literais em strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

Quando você estiver definindo uma sequência de caracteres você deve iniciar e terminar com uma aspa simples ou dupla. O que acontece quando você precisa de uma aspa literal: `"` ou `'` dentro de sua string?

Em JavaScript, você pode <dfn>escapar</dfn> uma aspa para que não seja considerada como o fim de uma string ao colocar a <dfn>barra invertida</dfn> (`\`) na frente da aspa.

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Isso sinaliza ao JavaScript que a aspa seguinte não é o fim de uma string, mas que deve aparecer dentro da string. Então, se você fosse imprimir isso no console, você obteria:

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

Use <dfn>barras invertidas</dfn> para atribuir a string à variável `myStr` para que, se você fosse imprimi-la no console, veria:

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

Você deve usar aspas duplas (`"`) e quatro aspas duplas escapadas (`\"`).

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

Variável `myStr` deve conter a string: `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
