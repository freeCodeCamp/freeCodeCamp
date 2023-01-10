---
id: bad87fee1348bd9aedf08726
title: Verwende Hex-Code für bestimmte Farben
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

Wusstest du, dass es weitere Wege gibt, um Farbwerte in CSS zu definieren? Eine dieser Arten heißt Hexadezimal-Code, kurz Hex-Code.

Normalerweise verwenden wir <dfn>Dezimalzahlen</dfn> aus dem Zahlensystem mit der Basis 10, welches die Symbole 0-9 für die jeweilige Stelle verwendet. <dfn>Hexadezimalzahlen</dfn> (kurz <dfn>Hex-Zahlen</dfn>) haben die Basis 16. Das bedeutet, dass 16 verschiedene Symbole verwendet werden. Wie bei Dezimalzahlen repräsentieren die Symbole 0-9 die Werte null bis neun. Des Weiteren stehen A,B,C,D,E,F für die Werte zehn bis fünfzehn. Zusammengenommen können 0 bis F eine Hexadezimalstelle darstellen, indem sie uns insgesamt 16 mögliche Werte bieten. Du kannst hier mehr Informationen über <a href="https://www.freecodecamp.org/news/hexadecimal-number-system/" target="_blank" rel="noopener noreferrer nofollow">hexadezimale Zahlen</a> finden.

In CSS können wir 6 Hexadezimalstellen nutzen, um Farbwerte zu definieren – je zwei für die Komponenten Rot (R), Grün (G) und Blau (B). Zum Beispiel steht `#000000` für Schwarz und ist also der niedrigste mögliche Wert. Du kannst hier mehr Informationen über das <a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">RGB-Farbsystem</a> finden.

```css
body {
  color: #000000;
}
```

# --instructions--

Ersetze das Wort `black` der Hintergrundfarbe unseres `body`-Elements mit seinem äquivalenten Hex-Code: `#000000`.

# --hints--

Deine `body`-Elemente sollten die `background-color` Schwarz haben.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Der Hex-Code der Farbe Schwarz sollte anstelle des Wortes `black` verwendet werden.

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
