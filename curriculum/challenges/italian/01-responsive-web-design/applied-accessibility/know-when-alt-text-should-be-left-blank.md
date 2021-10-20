---
id: 587d774c367417b2b2512a9d
title: Sapere quando il testo alternativo dovrebbe essere lasciato vuoto
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

Nell'ultima sfida, hai imparato che usando i tag `img`, è obbligatorio includere un attributo `alt`. Tuttavia, a volte le immagini sono già raggruppate con una didascalia che le descrive, o sono utilizzate solo a scopo decorativo. In questi casi, il testo `alt` può sembrare ridondante o inutile.

Quando un'immagine è già spiegata con del contenuto testuale o non aggiunge altro significato alla pagina, il tag `img` ha ancora bisogno di un attributo `alt`, ma esso può essere impostato su una stringa vuota. Un esempio:

```html
<img src="visualDecoration.jpeg" alt="">
```

Le immagini di sfondo solitamente cadono nella categoria 'decorativo'. Tuttavia, sono tipicamente applicate con regole CSS e quindi sono escluse dal processo di lettura dello schermo.

**Nota:** Per le immagini con didascalia, potresti voler includere comunque il testo `alt` poiché aiuta i motori di ricerca a catalogare il contenuto dell'immagine.

# --instructions--

Camper Cat ha scritto lo scheletro della pagina per la sezione blog del suo sito. Vuole aggiungere una separazione visiva tra i suoi due articoli usando l'immagine decorativa di una spada samurai. Aggiungi un attributo `alt` al tag `img` e impostalo su una stringa vuota. (Nota che il link all'immagine sorgente `src` non punta ad un file reale - non preoccuparti che non ci siano spade mostrate nella pagina.)

# --hints--

Il tuo tag `img` dovrebbe avere un attributo `alt`.

```js
assert(!($('img').attr('alt') == undefined));
```

L'attributo `alt` dovrebbe essere impostato su una stringa vuota.

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```
