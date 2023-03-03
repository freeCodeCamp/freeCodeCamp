---
id: 5900f49a1000cf542c50ffac
title: 'Problem 300: Proteinfaltung'
challengeType: 1
forumTopicId: 301954
dashedName: problem-300-protein-folding
---

# --description--

In einer sehr vereinfachten Form können wir Proteine als Strings betrachten, die aus hydrophoben (H) und polaren (P) Elementen bestehen, z. B. HHPPHHHPHHPH.

Für dieses Problem ist die Orientierung eines Proteins wichtig; z. B. wird HPP als etwas anderes als PPH betrachtet. Es gibt also $2^n$ verschiedene Proteine, die aus $n$ Elementen bestehen.

Wenn man diese Fäden in der Natur antrifft, sind sie immer so gefaltet, dass die Anzahl der H-H-Kontaktpunkte so groß wie möglich ist, da dies energetisch vorteilhaft ist.

Infolgedessen sammeln sich die H-Elemente eher im inneren Teil an, während die P-Elemente außen liegen.

Natürliche Proteine werden natürlich in drei Dimensionen gefaltet, aber wir werden die Proteinfaltung nur in <u>zwei Dimensionen</u> betrachten.

Die folgende Abbildung zeigt zwei mögliche Wege, auf denen unser Beispielprotein gefaltet werden könnte (H-H-Kontaktpunkte sind mit roten Punkten dargestellt).

<img class="img-responsive center-block" alt="zwei mögliche Arten der Faltung des Beispielproteins" src="https://cdn.freecodecamp.org/curriculum/project-euler/protein-folding.gif" style="background-color: white; padding: 10px;" />

Die Faltung auf der linken Seite hat nur sechs H-H-Kontaktpunkte, sodass sie auf natürliche Weise niemals auftreten würde. Die Faltung auf der rechten Seite hat dagegen neun H-H-Kontaktpunkte, was für diese Zeichenkette optimal ist.

Unter der Annahme, dass H- und P-Elemente mit gleicher Wahrscheinlichkeit an jeder Position entlang der Kette auftreten, beträgt die durchschnittliche Anzahl der H-H-Kontaktpunkte bei einer optimalen Faltung einer zufälligen Proteinkette der Länge 8 $\frac{850}{2^8} = 3,3203125$.

Wie hoch ist die durchschnittliche Anzahl der H-H-Kontaktpunkte bei einer optimalen Faltung einer zufälligen Proteinkette der Länge 15? Gib deine Antwort mit so vielen Dezimalstellen an, wie für ein genaues Ergebnis erforderlich sind.

# --hints--

`proteinFolding()` sollte `8.0540771484375` zurückgeben.

```js
assert.strictEqual(proteinFolding(), 8.0540771484375);
```

# --seed--

## --seed-contents--

```js
function proteinFolding() {

  return true;
}

proteinFolding();
```

# --solutions--

```js
// solution required
```
