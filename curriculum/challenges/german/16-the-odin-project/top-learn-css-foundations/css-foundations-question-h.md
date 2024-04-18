---
id: 63ee354c0d8d4841c3a70921
videoId: LGQuIIv2RVA
title: CSS-Grundlagen Frage H
challengeType: 15
dashedName: css-foundations-question-h
---

# --description--

Inline `CSS` makes it possible to add styles directly to `HTML` elements, though this method isn’t as recommended:

```html
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```

Als Erstes ist anzumerken, dass es hier keine Selektoren gibt, da die Stile direkt zum öffnenden `<div>`-Tag selbst hinzugefügt werden. Als nächstes hast du das `style`-Attribut, dessen Wert innerhalb des Paares von Anführungszeichen die Deklarationen sind.

Wenn du einen einzigartigen Stil für ein einzelnes Element hinzufügen musst, kann diese Methode sehr gut funktionieren. Generell ist dies allerdings aus mehreren Gründen kein empfehlenswertes Vorgehen für das Hinzufügen von CSS zu HTML:

Es kann schnell ziemlich unübersichtlich werden, sobald du anfängst, viele Deklarationen zu einem einzigen Element hinzuzufügen, und dadurch wird deine HTML-Datei unnötig aufgebläht. Möchtest du, dass viele Elemente denselben Stil haben, müsstest du diesen Stil per "copy and paste" in jedes einzelne Element einfügen, was zu vielen unnötigen Wiederholungen und noch mehr Ballast führt. Jedes Inline-CSS überschreibt die beiden anderen Methoden, was zu unvorhergesehenen Ergebnissen führen kann. (Obwohl hier nicht näher darauf eingegangen wird, kann dies tatsächlich ausgenutzt werden).

# --question--

## --text--

Welcher der nachfolgenden Punkte ist der Hauptnachteil der Verwendung von Inline-CSS?

## --answers--

Es kann schnell ziemlich unübersichtlich werden, sobald du anfängst, viele Deklarationen zu einem einzigen Element hinzuzufügen, was deine HTML-Datei unnötig aufbläht.

---

Dies erfordert die Verwendung von Selektoren, was für Anfänger kompliziert sein kann.

---

Jedes Inline-CSS setzt die beiden anderen Methoden (intern und extern) außer Kraft, was zu unvorhergesehenen Ergebnissen führen kann.


## --video-solution--

3
