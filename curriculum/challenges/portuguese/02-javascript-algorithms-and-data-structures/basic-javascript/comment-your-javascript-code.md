---
id: bd7123c9c441eddfaeb4bdef
title: Comentar seu código JavaScript
challengeType: 1
removeComments: false
videoUrl: 'https://scrimba.com/c/c7ynnTp'
forumTopicId: 16783
dashedName: comment-your-javascript-code
---

# --description--

Comentários são linhas de código que JavaScript vai ignorar intencionalmente. Os comentários são uma ótima maneira de deixar anotações para você mesmo e para outras pessoas que mais tarde precisarão descobrir o que esse código faz.

Existem duas maneiras de escrever comentários em JavaScript:

Usar `//` dirá ao JavaScript para ignorar o resto do texto na linha atual. Isso é um comentário de uma linha:

```js
// This is an in-line comment.
```

Você pode fazer um comentário de mais de uma linha, começando com `/*` e terminando com `*/`. Este é um comentário em várias linhas:

```js
/* This is a
multi-line comment */
```

**OBSERVAÇÃO:** à medida que você escreve código, deve adicionar comentários regularmente, para esclarecer a função de partes do seu código. Um bom comentário pode ajudar a comunicar a intenção do seu código — para os outros *e* para você mesmo no futuro.

# --instructions--

Tente criar cada um dos tipos de comentários.

# --hints--

Você deve criar um comentário de uma linha (`//`) que contenha pelo menos cinco letras.

```js
assert(code.match(/(\/\/)...../g));
```

Você deve criar um comentário de várias linhas (`/* */`) que contenha pelo menos cinco letras.

```js
assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
// Fake Comment
/* Another Comment */
```
