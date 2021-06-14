---
id: 587d7789367417b2b2512aa4
title: Migliorare l'accessibilità dei contenuti audio con l'elemento audio
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

L'elemento `audio` di HTML5 fornisce un significato semantico quando racchiude un flusso audio o sonoro nel tuo markup. Per essere accessibile da persone sorde o con problemi di udito, un contenuto audio ha anche bisogno di un testo alternativo. Questo risultato può essere ottenuto inserendo un testo vicino all'elemento audio o tramite un link alla trascrizione.

Il tag `audio` supporta l'attributo `controls`. Questo mostra i comandi di default del browser play, pausa, ecc. e supporta l'uso direttamente da tastiera. Esso è un attributo booleano, cioè non ha bisogno di un valore: la sua presenza all'interno del tag attiva l'impostazione.

Ecco un esempio:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**Nota:** di solito i contenuti multimediali hanno sia componenti visuali che sonori. Necessitano inoltre di sottotitoli sincronizzati e trascrizioni affinché gli utenti con difficoltà visive e/o uditive possano accedervi. Di solito, uno sviluppatore web non è responsabile per la creazione di sottotitoli e trascrizioni, ma deve sapere come includerli.

# --instructions--

È il momento di prendersi una pausa da Camper Cat e fare la conoscenza di camper Zersiax (@zersiax), un campione in fatto di accessibilità, e un utilizzatore di screen reader. Per ascoltare una clip del suo screen reader in azione, aggiungi un elemento `audio` dopo il `p`. Includi l'attributo `controls`. Quindi aggiungi un tag `source` all'interno dei tag `audio` con l'attributo `src` impostato su `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3` e l'attributo `type` impostato su `"audio/mpeg"`.

**Nota:** la clip audio potrebbe sembrare veloce e difficile da capire, ma questa è la velocità normale per gli utenti di screen reader.

# --hints--

Il tuo codice dovrebbe avere un tag `audio`.

```js
assert($('audio').length === 1);
```

Il tuo elemento `audio` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

Il tag `audio` dovrebbe avere l'attributo `controls`.

```js
assert($('audio').attr('controls'));
```

Il tuo codice dovrebbe avere un tag `source`.

```js
assert($('source').length === 1);
```

Il tuo tag `source` dovrebbe essere all'interno dei tag `audio`.

```js
assert($('audio').children('source').length === 1);
```

Il valore dell'attributo `src` all'interno del tag `source` dovrebbe corrispondere esattamente al link presente nelle istruzioni.

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

Il tuo codice dovrebbe includere un attributo `type` all'interno del tag `source` con un valore audio/mpeg.

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```
