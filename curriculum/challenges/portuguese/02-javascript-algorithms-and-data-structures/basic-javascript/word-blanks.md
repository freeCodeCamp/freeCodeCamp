---
id: 56533eb9ac21ba0edf2244bb
title: Preencher espaços em branco
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

Você recebe frases com algumas palavras faltando, como substantivos, verbos, adjetivos e advérbios. Você então preencherá os pedaços faltantes com palavras de sua escolha de modo que a frase completa faça sentido.

Considere a frase - Era realmente **\_\_\_\_** e nós **\_\_\_\_** nós mesmos **\_\_\_\_**. Essa frase possui três pedaços faltando - um adjetivo, um verbo e um advérbio, e nós podemos adicionar palavras de nossa escolha para completar. Em seguida, podemos atribuir a frase completa para uma variável como se segue:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

Nesse desafio, nós fornecemos a você um substantivo, um verbo, um adjetivo e um advérbio. Você precisar formular uma frase completa usando palavras de sua escolha, junto com as palavras que nós fornecemos.

Você precisará usar o operador de concatenação de string `+` para criar uma nova string, usando as variáveis fornecidas: `myNoun`, `myAdjective`, `myVerb` e `myAdverb`. Em seguida, você atribuirá a string formada para a variável `wordBlanks`. Você não deve alterar as palavras atribuídas às variáveis.

Você também precisará se responsabilizar por espaços em sua string, para que na frase final possua espaços entre todas as palavras. O resultado não deve ser uma frase completa.

# --hints--

`wordBlanks` deve ser uma string.

```js
assert(typeof wordBlanks === 'string');
```

Você não deve alterar os valores atribuídos a `myNoun`, `myVerb`, `myAdjective` ou `myAdverb`.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

Você não deve usar diretamente os valores `dog`, `ran`, `big` ou `quickly` para criar `wordBlanks`.

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` deve conter todas as palavras atribuídas às variáveis `myNoun`, `myVerb`, `myAdjective` e `myAdverb` separadas por caracteres que não sejam palavras (e qualquer palavra adicional de sua escolha).

```js
assert(
  /\bdog\b/.test(wordBlanks) &&
    /\bbig\b/.test(wordBlanks) &&
    /\bran\b/.test(wordBlanks) &&
    /\bquickly\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

## --seed-contents--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
