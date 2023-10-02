---
id: bad87fee1348bd9aedf08802
title: Remover comentário no HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

Comentar é uma forma de deixar comentários para outros desenvolvedores dentro de seu código sem afetar o resultado exibido para o usuário final.

Também é uma maneira conveniente de deixar código inativo sem ter de excluí-lo completamente.

Comentários em HTML começam com `<!--` e terminam em `-->`

# --instructions--

Remova seus elementos `h1`, `h2` e `p` dos comentários.

# --hints--

O elemento `h1` deve estar visível na página ao retirá-lo do comentário.

```js
assert($('h1').length > 0);
```

O elemento `h2` deve estar visível na página ao retirá-lo do comentário.

```js
assert($('h2').length > 0);
```

O elemento `p` deve estar visível na página ao retirá-lo do comentário.

```js
assert($('p').length > 0);
```

Não devem restar tags de comentário visíveis na página (por exemplo, `-->`).

```js
assert(!$('*:contains("-->")')[1]);
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
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
