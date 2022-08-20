---
id: 587d774e367417b2b2512aa0
title: Inserire contenuti nell'elemento article
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` è un altro dei nuovi elementi HTML5 che aggiungono significato semantico alla formattazione. `article` è un elemento di sezionamento ed è utilizzato per racchiudere contenuti indipendenti e autonomi. Il tag funziona bene con voci dei blog, post dei forum, o articoli di notizie.

Determinare se il contenuto può stare da solo è di solito una decisione a tua discrezione, ma è possibile utilizzare un paio di semplici test. Chiediti: se avessi rimosso tutto il contesto circostante, quel contenuto avrebbe ancora senso? Allo stesso modo, per il testo, il contenuto reggerebbe se fosse in un feed RSS?

Ricorda che le persone che utilizzano tecnologie assistive si basano su una formattazione organizzata e semanticamente significativa per capire meglio il tuo lavoro.

**Nota:** Anche l'elemento `section` è nuovo in HTML5, e ha un significato semantico leggermente diverso rispetto a `article`. L'`article` è per i contenuti autonomi e il `section` è per raggruppare i contenuti legati ad un tema. Possono essere utilizzati l'uno all'interno l'altro, se necessario. Ad esempio, se un libro è l'`article`, ogni capitolo è una `section`. Quando non c'è alcuna relazione tra gruppi di contenuti, allora si utilizza un `div`.

`<div>` - raggruppa i contenuti `<section>` - raggruppa contenuti legati ad un tema `<article>` - raggruppa contenuti indipendenti e autonomi

# --instructions--

Camper Cat ha usato i tag `article` per racchiudere i post sulla sua pagina del blog, ma ha dimenticato di usarli intorno a quello superiore. Cambia il tag `div` in un tag `article`.

# --hints--

Il tuo codice dovrebbe avere tre tag `article`.

```js
assert($('article').length == 3);
```

Il tuo codice non dovrebbe avere nessun tag `div`.

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
