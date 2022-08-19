---
id: afd15382cdfb22c9efe8b7de
title: DNA-Kopplung
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

DNA-Strangpaare bestehen aus Nukleobasenpaaren. Basenpaare werden durch die Zeichen <em>AT</em> und <em>CG</em> beschrieben, welche die Grundbausteine der Doppelhelix-Form der DNA darstellen.

Dem gegebenen DNA-Strang fehlt das Paarungselement. Schreib eine Funktion, die einen Treffer für das fehlende Basenpaar des gegebenen DNA-Stranges findet. Für jedes Zeichen im gegeben String soll das dazu passende Basenpaar-Zeichen gefunden werden. Die Ergebnisse sollen in einem 2D-Array zurückgegeben werden.

Beispielsweise soll bei der Eingabe `GCG` die Ausgabe `[["G", "C"], ["C","G"], ["G", "C"]]` zurückgegeben werden

Das Zeichen wird zusammen mit dem dazugehörigen Paar in einen Array geschrieben. Anschließend werden alle Arrays in einem Array zusammengefasst.

# --hints--

`pairElement("ATCGA")` sollte `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]` zurückgeben.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` sollte `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]` zurückgeben.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` sollte `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]` zurückgeben.

```js
assert.deepEqual(pairElement('CTCTA'), [
  ['C', 'G'],
  ['T', 'A'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'T']
]);
```

# --seed--

## --seed-contents--

```js
function pairElement(str) {
  return str;
}

pairElement("GCG");
```

# --solutions--

```js
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```
