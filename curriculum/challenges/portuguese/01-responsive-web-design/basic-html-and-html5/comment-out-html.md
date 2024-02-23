---
id: bad87fee1348bd9aedf08804
title: Comentar em HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

Para iniciar um comentário, lembre-se de que é preciso usar `<!--`. Para encerrá-lo, utilize `-->`

Neste exercício, você vai precisar encerrar o comentário antes do elemento `h2` iniciar.

# --instructions--

Comente os elementos `h1` e `p`, mas deixe o elemento `h2` fora do comentário.

# --hints--

O elemento `h1` deve estar comentado para não ser exibido na página.

```js
assert($('h1').length === 0);
```

O elemento `h2` não deve ser comentado para poder ser exibido na página.

```js
assert($('h2').length > 0);
```

O elemento `p` deve estar comentado para não ser exibido na página.

```js
assert($('p').length === 0);
```

Todos os comentários devem ser fechados com `-->`.

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

Você não deve mudar a ordem dos elementos `h1`, `h2` e `p` no código.

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```
