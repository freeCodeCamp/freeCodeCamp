---
id: 587d7db7367417b2b2512b9c
title: Encontrar um ou mais criminosos em uma caçada
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

Hora de testar as suas novas habilidades de regex. Um grupo de criminosos escapou da prisão, mas não sabemos quantos. No entanto, sabemos que eles ficam juntos quando estão no meio de outras pessoas. E você ficou responsável por encontrar todos eles.

Vamos revisitar maneiras de executar essa tarefa:

A regex `/z+/` encontra a letra `z` quando ela aparece uma ou mais vezes seguidas. Ela encontra resultados em todas essas strings:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

Mas ela não encontra nada nessas strings, que não possuem `z` em lugar nenhum:

```js
""
"ABC"
"abcabc"
```

# --instructions--

Escreva uma regex gananciosa que encontra uma ou mais criminosos em um grupo de pessoas. Um criminoso pode ser identificado pela letra maiúscula `C`.

# --hints--

A regex deve encontrar um criminoso (`C`) na string `C`

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

A regex deve encontrar dois criminosos (`CC`) na string `CC`

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

A regex deve encontrar três criminosos (`CCC`) na string `P1P5P4CCCcP2P6P3`.

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

A regex deve encontrar cinco criminosos (`CCCCC`) na string `P6P2P7P4P5CCCCCP3P1`

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

A regex não deve encontrar nenhum criminoso na string vazia `""`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

A regex não deve encontrar nenhum criminoso na string `P1P2P3`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

A regex deve encontrar cinquenta criminosos (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) na string `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`.

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```
