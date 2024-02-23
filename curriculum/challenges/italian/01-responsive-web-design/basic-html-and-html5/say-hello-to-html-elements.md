---
id: bd7123c8c441eddfaeb5bdef
title: Fare conoscenza con gli elementi HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

Benvenuto nelle sfide di programmazione HTML di freeCodeCamp. Queste ti guideranno attraverso lo sviluppo web passo dopo passo.

Innanzitutto, inizierai costruendo una semplice pagina web usando HTML. Puoi modificare il codice nel tuo editor di codice, che è integrato in questa pagina web.

Vedi il codice nel tuo editor che dice `<h1>Hello</h1>`? Questo è un elemento HTML.

La maggior parte degli elementi HTML hanno un tag di apertura e un tag di chiusura.

Questo è un tag di apertura:

```html
<h1>
```

Questo è un tag di chiusura:

```html
</h1>
```

L'unica differenza tra i tag di apertura e di chiusura è la barra obliqua dopo la parentesi di apertura nei tag di chiusura.

Ogni sfida ha dei test che puoi eseguire in qualsiasi momento cliccando sul pulsante "Esegui i test". Quando supererai tutti i test, ti verrà chiesto di inviare la tua soluzione e andare alla successiva sfida di coding.

# --instructions--

Per superare il test di questa sfida, modifica il testo dell'elemento `h1` in modo che dica `Hello World`.

# --hints--

Il tuo elemento `h1` dovrebbe avere il testo `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```
