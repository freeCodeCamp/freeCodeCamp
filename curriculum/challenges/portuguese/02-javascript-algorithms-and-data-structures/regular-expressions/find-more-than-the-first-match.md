---
id: 587d7db4367417b2b2512b93
title: Encontre Mais do que o Primeiro Resultado
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

Até agora você foi capaz apenas de extrair ou buscar um resultado de uma vez.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

`match` retorna `["Repeat"]` aqui.

Para buscar ou extrair um padrão além do primeiro resultado, você pode usar a flag `g` (de "global").

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

Aqui, `match` retorna o valor `["Repeat", "Repeat", "Repeat"]`

# --instructions--

Usando a regex `starRegex`, encontre e extraia ambas ocorrências da palavra `Twinkle` da string `twinkleStar`.

**Obs:**  
Você pode usar múltiplas flags em uma regex: `/search/gi`

# --hints--

Sua regex `starRegex` deve usar a flag `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

Sua regex `starRegex` deve usar a flag de ignorar caixa, `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

Seu resultado deve conter ambas as ocorrências da palavra `Twinkle`

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

Seu resultado, `result`, deve conter dois elementos.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
