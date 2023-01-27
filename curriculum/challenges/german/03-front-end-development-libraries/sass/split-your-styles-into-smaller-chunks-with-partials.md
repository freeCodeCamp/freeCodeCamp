---
id: 587d7dbf367417b2b2512bbc
title: Teile deine Styles in kleinere Stücke mit Partials auf
challengeType: 0
forumTopicId: 301459
dashedName: split-your-styles-into-smaller-chunks-with-partials
---

# --description--

<dfn>Partials</dfn> sind in Sass separate Dateien, die Segmente von CSS-Code enthalten. Diese werden importiert und in anderen Sass-Dateien verwendet. Dies ist eine gute Möglichkeit, ähnlichen Code in einem Modul zu gruppieren, um ihn zu organisieren.

Namen für Partials beginnen mit dem Unterstrich (`_`), der Sass mitteilt, dass es sich um ein kleines Segment von CSS handelt und es nicht in eine CSS-Datei umgewandelt werden soll. Außerdem enden Sass-Dateien mit der Dateierweiterung `.scss`. Um den Code in der partiellen Datei in eine andere Sass-Datei zu bringen, verwende die Direktive `@import`.

Wenn du zum Beispiel alle deine Mixins in einer Teildatei namens "\_mixins.scss" speicherst und sie in der Datei "main.scss" brauchst, kannst du sie so in der Hauptdatei verwenden:

```scss
@import 'mixins'
```

Beachte, dass der Unterstrich und die Dateierweiterung in der `import`-Anweisung nicht benötigt werden - Sass versteht, dass es sich um ein Partial handelt. Sobald ein Partial in eine Datei importiert wurde, können alle Variablen, Mixins und anderer Code verwendet werden.

# --instructions--

Schreibe eine `@import`-Anweisung, um ein Partial namens `_variables.scss` in die Datei main.scss zu importieren.

# --hints--

Dein Code sollte die Direktive `@import` verwenden und den Unterstrich nicht im Dateinamen enthalten.

```js
assert(code.match(/@import\s+?('|")variables\1/gi));
```

# --seed--

## --seed-contents--

```html
<!-- The main.scss file -->
```

# --solutions--

```html
@import 'variables'
```
