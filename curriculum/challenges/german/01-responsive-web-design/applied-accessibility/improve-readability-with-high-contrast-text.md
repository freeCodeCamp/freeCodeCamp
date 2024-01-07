---
id: 587d778e367417b2b2512aab
title: Verbessere Lesbarkeit mit kontrastreichem Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

Ein geringer Kontrast zwischen der Vorder- und Hintergrundfarbe kann die Lesbarkeit von Text erschweren. Ein ausreichender Kontrast verbessert die Lesbarkeit deiner Inhalte, aber was genau bedeutet "ausreichend"?

Die Web Content Accessibility Guidelines (WCAG) empfehlen mindestens ein Kontrastverhältnis von 4,5 zu 1 für einen normalen Text. Das Verhältnis wird durch den Vergleich der relativen Leuchtdichtewerte zweier Farben berechnet. Dieser reicht von 1:1 für die gleiche Farbe, also kein Kontrast, bis zu 21:1 für Weiß gegen Schwarz, dem stärksten Kontrast. Im Internet kannst du viele Rechner zum Bestimmen deiner Kontrastverhältnisse finden.

# --instructions--

Camper Cat benutzt eine hellgraue Farbe für seinen Text auf weißem Hintergrund, was zu einem 1,5:1 Kontrastverhältnis führt, wodurch das Lesen erschwert ist. Ändere die Textfarbe `color` von dem aktuellen Grau (`#D3D3D3`) in ein dunkleres Grau (`#636363`), um das Kontrastverhältnis auf 6:1 zu verbessern.

# --hints--

Dein Code sollte die Textfarbe `color` für den `body` auf das dunklere Grau ändern.

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

Dein Code sollte die Hintergrundfarbe `background-color` für den `body` nicht ändern.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: #636363;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```
