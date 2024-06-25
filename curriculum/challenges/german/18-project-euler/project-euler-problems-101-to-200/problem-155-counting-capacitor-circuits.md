---
id: 5900f4081000cf542c50ff1a
title: 'Problem 155: Counting Capacitor Circuits'
challengeType: 1
forumTopicId: 301786
dashedName: problem-155-counting-capacitor-circuits
---

# --description--

In einem Stromkreis werden ausschließlich identische Kondensatoren mit dem gleichen Wert C verwendet.

Die Kondensatoren können in Reihe oder parallel geschaltet werden, um Untereinheiten zu bilden, die dann mit anderen Kondensatoren oder anderen Untereinheiten in Reihe oder parallel geschaltet werden können, um größere Untereinheiten zu bilden, und so weiter bis zu einer endgültigen Schaltung.

Mit diesem einfachen Verfahren und bis zu n identischen Kondensatoren können wir Schaltungen mit einer Reihe unterschiedlicher Gesamtkapazitäten herstellen. Bei Verwendung von bis zu $n = 3$ Kondensatoren mit je $60 μF$ ergeben sich beispielsweise die folgenden 7 unterschiedlichen Gesamtkapazitätswerte:

<img class="img-responsive center-block" alt="beispielhafte Schaltkreise mit bis zu drei Kondensatoren, jeweils 60 μF" src="https://cdn.freecodecamp.org/curriculum/project-euler/counting-capacitor-circuits.gif" style="background-color: white; padding: 10px;" />

Wenn wir mit $D(n)$ die Anzahl der unterschiedlichen Gesamtkapazitätswerte angeben, die wir erhalten können, wenn wir bis zu $n$ gleichwertige Kondensatoren und das oben beschriebene einfache Verfahren verwenden, haben wir: $D(1) = 1, D(2) = 3, D(3)=7, ldots$

Finde $D(18)$.

Zur Erinnerung: Beim parallelen Anschluss von Kondensatoren $C_1$, $C_2$ usw. beträgt die Gesamtkapazität $C_T = C_1 + C_2 + cdots$, während beim Anschließen in Reihe die Gesamtkapazität gegeben ist durch: $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$.

# --hints--

`capacitanceValues()` sollte `3857447` zurückgeben.

```js
assert.strictEqual(capacitanceValues(), 3857447);
```

# --seed--

## --seed-contents--

```js
function capacitanceValues() {

  return true;
}

capacitanceValues();
```

# --solutions--

```js
// solution required
```
