---
id: bad87fee1348bd9aedf08802
title: Decommentare l'HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

I commenti sono un modo per lasciare nel tuo codice informazioni per altri sviluppatori senza modificare l'output mostrato all'utente finale.

Commentare è anche un modo conveniente per rendere inattivo il codice senza doverlo eliminare completamente.

I commenti in HTML cominciano con `<!--` e finiscono con `-->`

# --instructions--

Decommenta i tuoi elementi `h1`,`h2` e `p`.

# --hints--

Il tuo elemento `h1` dovrebbe essere visibile nella pagina decommentandolo.

```js
assert($('h1').length > 0);
```

Il tuo elemento `h2` dovrebbe essere visibile nella pagina decommentandolo.

```js
assert($('h2').length > 0);
```

Il tuo elemento `p` dovrebbe essere visibile nella pagina decommentandolo.

```js
assert($('p').length > 0);
```

Nessun tag finale di commento dovrebbe essere visibile sulla pagina (ad es. `-->`).

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
