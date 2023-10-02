---
id: 5900f5101000cf542c510022
title: 'Problema 419: Sequência para olhar e dizer'
challengeType: 1
forumTopicId: 302088
dashedName: problem-419-look-and-say-sequence
---

# --description--

A sequência para olhar e dizer é 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

A sequência começa com 1 e todos os outros membros são obtidos descrevendo o membro anterior em termos de algarismos consecutivos.

Ajuda ler os algarismos em voz alta:

1 é 'um um' $→ 11$

11 é 'dois um' $→ 21$

21 é 'um dois e um um' $→ 1211$

1211 é 'um um, um dois e dois um' $→ 111221$

111221 is 'três um, dois dois e um um' $→ 312211$

...

Defina $A(n)$, $B(n)$ e $C(n)$ como o número de uns, dois e três no $n$'ésimo elemento da sequência, respectivamente. Podemos verificar se $A(40) = 31.254$, $B(40) = 20.259$ e $C(40) = 11.625$.

Calcule $A(n)$, $B(n)$ e $C(n)$ para $n = {10}^{12}$. Dê o modulo $2^{30}$ de sua respostas como uma string e separe seus valores para $A$, $B$ e $C$ por uma vírgula. Ex: para $n = 40$, a resposta seria `31254,20259,11625`.

# --hints--

`lookAndSaySequence()` deve retornar uma string.

```js
assert(typeof lookAndSaySequence() === 'string');
```


`lookAndSaySequence()` deve retornar a string `998567458,1046245404,43363922`.

```js
assert.strictEqual(lookAndSaySequence(), '998567458,1046245404,43363922');
```

# --seed--

## --seed-contents--

```js
function lookAndSaySequence() {

  return true;
}

lookAndSaySequence();
```

# --solutions--

```js
// solution required
```
