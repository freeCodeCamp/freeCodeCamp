---
id: 587d781e367417b2b2512ac9
title: Die relative Position eines Elements ändern
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

CSS behandelt jedes HTML-Element als eigene Box, was man als <dfn>CSS Box Model</dfn> bezeichnet. Block-Level-Elemente beginnen automatisch in einer neuen Zeile (z. B. Überschriften, Absätze und Div-Elemente), während sich Inline-Elemente zwischen anderen Inhalten derselben Zeile befinden (z. B. Bilder oder Spans). Das Standardlayout von Elementen dieser Art wird als <dfn>normal flow</dfn> (dt. "normaler Fluss") eines Dokuments bezeichnet, wobei CSS auch die position-Eigenschaft bereithält, um diesen zu überschreiben.

Wenn die Position eines Elements auf `relative` gesetzt ist, kannst du angeben, wie CSS es *relativ* zu seiner aktuellen Position im normalen Fluss der Seite verschieben soll. Das funktioniert gemeinsam mit den CSS-Offset-Eigenschaften `left` oder `right` bzw. `top` oder `bottom`. Diese geben an, um wie viele Pixel, Prozent oder Ems das Element von seiner normalen Position *versetzt* werden soll. Im folgenden Beispiel wird der Absatz um 10 Pixel vom unteren Rand entfernt:

```css
p {
  position: relative;
  bottom: 10px;
}
```

Wenn du die Position eines Elements auf relativ änderst, wird es nicht aus dem normalen Fluss entfernt und andere Elemente in der Umgebung verhalten sich weiterhin so, als befände sich dieses Element in seiner Standardposition.

**Hinweis:** Die Positionierung gibt dir eine Menge Flexibilität und Kontrolle über das visuelle Layout einer Seite. Es ist gut, sich daran zu erinnern, dass unabhängig von der Position der Elemente das zugrunde liegende HTML-Markup sinnvoll organisiert sein sollte, wenn es von oben nach unten gelesen wird. So können Benutzer mit Sehbehinderungen, die auf Hilfsmittel wie Screenreader angewiesen sind, auf deine Inhalte zugreifen.

# --instructions--

Ändere die `position` des `h2` auf `relative` und verwende einen CSS-Offset, um es um 15 Pixel von der Position `top` zu verschieben, an der es sich im normalen Fluss befindet. Beachte, dass es keine Auswirkungen auf die Positionen der umgebenden h1- und p-Elemente gibt.

# --hints--

Das `h2`-Element sollte eine `position`-Eigenschaft haben, die auf `relative` gesetzt ist.

```js
assert($('h2').css('position') == 'relative');
```

Dein Code sollte einen CSS-Offset verwenden, um das `h2` 15px relativ von `top` zu positionieren, wo es normalerweise sitzt.

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
