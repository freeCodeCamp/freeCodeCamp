---
id: 587d774d367417b2b2512a9e
title: Verwende Überschriften, um hierarchische Beziehungen von Inhalten darzustellen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

Die Überschriften-Tags (`h1` bis `h6`) sind fleißige Arbeitstiere, die dabei helfen, deinem Code Struktur zu verleihen und Inhalte zu kennzeichnen. Screenreader können so eingestellt werden, dass sie nur die Überschriften einer Seite vorlesen, damit der Benutzer eine Zusammenfassung erhält. Das heißt es wichtig ist, dass die Überschriften-Tags in deinem Mark-up semantische Bedeutung haben, sich aufeinander beziehen und nicht nur für Größenwerte verwendet werden.

*Semantische Bedeutung* heißt, dass der verwendete Tag auf den Inhalt und die Art der Information hinweist.

Wenn du einen Aufsatz mit einer Einleitung, einem Hauptteil und einem Fazit schreiben würdest, dann ergäbe es nicht viel Sinn, das Fazit als Teilabschnitt des Hauptteils zu gliedern. Das Fazit sollte ein eigener Abschnitt sein. In ähnlicher Weise sollen die Überschriften-Tags einer Webseite in der richtigen Reihenfolge sortiert werden und die hierarchischen Beziehungen des Inhalts widerspiegeln.

Überschriften mit demselben (oder höherem) Rang beginnen neue implizierte Abschnitte und Überschriften mit niedrigerem Rang beginnen neue Unterabschnitte.

Eine Seite mit einem `h2`-Element, gefolgt von mehreren Unterabschnitten, die mit `h4`-Elementen beschriftet sind, würde beispielsweise einen Benutzer eines Screenreaders verwirren. Mit sechs Möglichkeiten ist es verlockend, ein Tag zu wählen, weil es im Browser besser aussieht, aber du kannst CSS dazu benutzen, um die relative Größe zu bearbeiten.

Ein letzter Punkt dazu: Jede Seite sollte immer ein (und nur ein) `h1`-Element haben, welches das Hauptthema des Inhalts ist. Diese und die anderen Überschriften werden unter anderem von Suchmaschinen verwendet, um das Thema der Seite zu erkennen.

# --instructions--

Camper Cat möchte eine Seite auf seiner Website, auf der es darum geht, wie man ein Ninja werden kann. Hilf ihm dabei, die Überschriften in Ordnung zu bringen, damit sein Mark-up dem Inhalt semantische Bedeutungen verleiht und zwischen den Teilabschnitten sinnvolle "Eltern-Kind-Beziehungen" bestehen. Weise alle `h5`-Tags dem richtigen Überschriftenlevel zu, um zu kennzeichnen, dass sie Teilabschnitte der `h2`-Tags sind. Benutze dafür `h3`-Tags.

# --hints--

Dein Code sollte 6 `h3`-Tags enthalten.

```js
assert($('h3').length === 6);
```

Dein Code sollte 6 schließende `h3`-Tags haben.

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

Dein Code sollte keine `h5`-Tags enthalten.

```js
assert($('h5').length === 0);
```

Dein Code sollte keine schließenden `h5`-Tags beinhalten.

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```
