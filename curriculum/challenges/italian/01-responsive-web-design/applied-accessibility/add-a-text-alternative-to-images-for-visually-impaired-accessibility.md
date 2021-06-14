---
id: 587d774c367417b2b2512a9c
title: Aggiungere un testo alternativo alle immagini per renderle accessibili agli ipovedenti
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

Probabilmente hai già avuto modo di vedere un attributo `alt` in un `img` tag in altre sfide. Il testo `alt` descrive il contenuto dell'immagine e fornisce un'alternativa testuale per essa. Un attributo `alt` aiuta nei casi in cui l'immagine non riesce ad essere caricata o non può essere vista da un utente. Anche i motori di ricerca lo usano per comprendere qual è il contenuto di un'immagine per poi includerla nei risultati di ricerca. Ecco un esempio:

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

Le persone ipovedenti si affidano agli screen reader per convertire il contenuto del web in un formato audio. Essi non riescono ad ottenere le informazioni se esse sono presentate solo visualmente. Per le immagini gli screen reader possono accedere all'attributo `alt` e leggere il suo contenuto per fornire le informazioni chiave.

Un buon testo `alt` fornisce al lettore una breve descrizione dell'immagine. Dovresti sempre includere un attributo `alt` nelle tue immagini. Nelle specifiche di HTML5 questo è ormai considerato obbligatorio.

# --instructions--

Camper Cat è sia un ninja del codice che un ninja reale, e sta costruendo un sito web per condividere la sua conoscenza. L'immagine del profilo che vuole utilizzare mostra le sue abilità e dovrebbe essere apprezzata da tutti i visitatori del sito. Aggiungi un attributo `alt` nel tag `img` che spieghi che Camper Cat sta facendo karate. (L'attributo `src` dell'immagine non è collegato a un file reale, quindi dovresti vedere il testo `alt` nel display.)

# --hints--

Il tuo tag `img` dovrebbe avere un attributo `alt` e non dovrebbe essere vuoto.

```js
assert($('img').attr('alt'));
```

# --seed--

## --seed-contents--

```html
<img src="doingKarateWow.jpeg">
```

# --solutions--

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```
