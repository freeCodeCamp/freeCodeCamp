---
id: 587d778f367417b2b2512aae
title: Dare un significato ai link usando un testo descrittivo
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

Gli utenti che usano uno screen reader hanno diverse opzioni per il tipo di contenuto che il loro dispositivo legge. Queste opzioni includono saltare a (o oltre) elementi di riferimento, saltare al contenuto principale, o ottenere un riepilogo della pagina dalle intestazioni. Un'altra opzione è di ascoltare solo i link disponibili nella pagina.

Gli screen reader fanno questo leggendo il testo del link, o quello che c'è tra i tag anchor (`a`). Una lista di "clicca qui" o "continua a leggere" non aiuta. Al contrario, dovresti usare testi brevi ma descrittivi all'interno dei tag `a` per fornire più informazioni a questi utenti.

# --instructions--

Il testo del link che Camper Cat usa, privato del contesto, non è molto descrittivo. Sposta il tag anchor (`a`) in modo che racchiuda il testo `information about batteries` anziché `Click here`.

# --hints--

Il tuo codice dovrebbe spostare gli anchor tag `a` dalla loro posizione intorno alle parole `Click here` per racchiudere le parole `information about batteries`.

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

L'elemento `a` dovrebbe avere un attributo `href` con un valore di una stringa vuota `""`.

```js
assert($('a').attr('href') === '');
```

L'elemento `a` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```
