---
id: 587d778f367417b2b2512aad
title: >-
  Evitare i problemi dovuti al daltonismo scegliendo con cura i colori che trasmettono informazioni
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

Ci sono diverse forme di daltonismo. Queste forme vanno dalla ridotta sensibilità ad alcune lunghezze d'onda della luce alla totale incapacità di vedere i colori. La forma più comune è una ridotta sensibilità nel rilevare il colore verde.

Per esempio, se il colore in primo piano e il colore di sfondo sono due verdi simili, un utente daltonico potrebbe non essere in grado di distinguerli. I colori simili sono quelli vicini nel cerchio dei colori, e il loro uso dovrebbe essere evitato quando si comunicano informazioni importanti.

**Nota:** Alcuni strumenti per la selezione dei colori online consentono di effettuare delle simulazioni visive di come i colori appaiono in diverse forme di daltonismo. Queste sono ottime risorse da utilizzare insieme ai calcolatori di contrasto disponibili in rete.

# --instructions--

Camper Cat sta testando diversi stili per un bottone importante, ma il giallo (`#FFFF33`) usato per il `background-color` e il verde (`#33FF33`) usato per il `color` del testo sono tonalità vicine sulla ruota dei colori e virtualmente indistinguibili per alcuni utenti daltonici. (La loro luminosità simile crea problemi anche con il contrasto). Cambia il `color` del testo usando un blu scuro (`#003366`) per risolvere entrambi i problemi.

# --hints--

Il tuo codice dovrebbe cambiare il valore di `color` per il `button` a blu scuro.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
