---
id: 587d778f367417b2b2512aac
title: Vermeide Probleme bei Farbenblindheit durch ausreichenden Kontrast
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

Farbe ist ein großer Teil des visuellen Designs, dessen Verwendung allerdings zu zwei Problemen der Barrierefreiheit führt. Zuerst einmal sollte Farbe allein nicht als einzige Möglichkeit verwendet werden, um wichtige Informationen zu vermitteln, da Benutzer von Screenreadern diese nicht sehen werden. Zweitens müssen Vorder- und Hintergrundfarben einen ausreichenden Kontrast aufweisen, damit farbenblinde Benutzer sie unterscheiden können.

Frühere Aufgaben behandelten Alternativtexte, um das erste Problem zu lösen. Die letzte Aufgabe führte Werkzeuge für die Kontrastprüfung ein, um gegen das zweite Problem vorzugehen. Das von den WCAG empfohlene Kontrastverhältnis von 4.5:1 gilt sowohl für die Verwendung von Farben als auch für Graustufenkombinationen.

Farbenblinde Benutzer haben Schwierigkeiten, einige Farben von anderen zu unterscheiden, meistens geht es um Farbtöne aber manchmal auch um die Helligkeit. Du erinnerst dich vielleicht daran, dass das Kontrastverhältnis anhand der relativen Luminanz- (oder Helligkeits-) Werte der Vorder- und Hintergrundfarben berechnet wird.

In der Praxis kann das Kontrastverhältnis von 4.5:1 durch Schattieren (Hinzufügen von Schwarz) der dunkleren Farbe und Abtönen (Hinzufügen von Weiß) der helleren Farbe erreicht werden. Dunklere Farbtöne auf dem Farbkreis gelten als Blautöne, Violett, Magenta und Rot, während hellere Farbtöne Orangen, Gelb, Grün und Blau-Grün sind.

# --instructions--

Camper Cat experimentiert mit der Verwendung von Farbe für seinen Blogtext und -hintergrund, aber seine aktuelle Kombination aus einer grünlichen Hintergrundfarbe `background-color` mit kastanienbrauner Textfarbe `color` hat ein Kontrastverhältnis von 2.5:1. Da er die Farben mit der CSS-Eigenschaft `hsl()` (was für Farbton, Sättigung, Helligkeit steht) deklariert hat, kannst du die Helligkeit der Farben leicht anpassen, indem du das dritte Argument änderst. Erhöhe den Helligkeitswert der Hintergrundfarbe `background-color` von 35 % auf 55 % und verringere den Helligkeitswert der Farbe `color` von 20 % auf 15 %. Dadurch wird der Kontrast auf 5.9:1 verbessert.

# --hints--

Dein Code sollte nur den Helligkeitswert für die Textfarbe `color` auf einen Wert von 15 % ändern.

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

Dein Code sollte nur den Helligkeitswert für die Hintergrundfarbe `background-color` auf einen Wert von 55% ändern.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
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
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
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
