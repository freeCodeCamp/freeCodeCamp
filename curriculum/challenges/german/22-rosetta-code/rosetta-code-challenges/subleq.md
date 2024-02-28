---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 1
forumTopicId: 302328
dashedName: subleq
---

# --description--

Subleq is an example of a One-Instruction Set Computer (OISC).

Subleq ist nach dem einzigen dazugehörigen Anleitungsschritt benannt worden, der „**SU**btract and **B**ranch if **L**ess than or **EQ**ual to zero“ bzw. „Subtraktion und Verzweigung, wenn kleiner oder gleich Null“ lautet.

Deine Aufgabe ist es, einen Interpreter zu erstellen, der eine solche Maschine emuliert.

Der Speicher der Maschine besteht aus einem Bereich von vorzeichenbehafteten ganzen Zahlen. Jede vernünftige Wortgröße ist in Ordnung, aber der Speicher muss in der Lage sein, sowohl negative als auch positive Zahlen zu speichern.

Die Ausführung beginnt mit dem Befehlszeiger, der auf das erste Wort, also die Adresse 0, gerichtet ist. Sie geht wie folgt vor:

<ol>
  <li>Let A, B, and C be the value stored in the three consecutive words in memory starting at the instruction pointer.</li>
  <li>Verschiebe den Befehlszeiger um 3 Wörter, so dass er auf die Adresse nach der Adresse, die C enthält, zeigt.</li>
  <li>Ist A gleich -1, wird ein Zeichen von der Standardeingabe gelesen und sein Codepunkt an der durch B angegebenen Adresse gespeichert. C ist unbenutzt.</li>
  <li>Ist B gleich -1, so wird die in der durch A angegebenen Adresse enthaltene Zahl als Codepunkt interpretiert und das entsprechende Zeichen ausgegeben. C ist wieder unbenutzt.</li>
  <li>Andernfalls werden sowohl A als auch B als Adressen von Speicherplätzen behandelt. Die in der Adresse A enthaltene Zahl wird von der Zahl an der Adresse B subtrahiert (und das Ergebnis wieder in Adresse B gespeichert). Ist das Ergebnis Null oder negativ, wird der Wert C zum neuen Befehlszeiger.</li>
  <li>Wenn der Befehlszeiger negativ wird, wird die Ausführung angehalten.</li>
</ol>

Andere negative Adressen außer -1 können als gleichwertig zu -1 behandelt werden oder einen Fehler erzeugen, je nachdem, was du für richtig hältst.

Deine Lösung sollte ein Programm akzeptieren, das auf der Maschine ausgeführt wird, und zwar unabhängig von der Eingabe, die dem Programm selbst zugeführt wird.

Dieses Programm sollte in rohem Subleq-"Maschinencode" vorliegen - durch Leerzeichen getrennte Dezimalzahlen, ohne symbolische Namen oder andere Erweiterungen auf Assembler-Ebene, die ab Adresse 0 in den Speicher geladen werden sollen. Zeige die Ausgabe deiner Lösung, wenn du dieses "Hello, world!"-Programm eingibst. (Beachte, dass das Beispiel von ASCII oder einer Obermenge davon ausgeht, wie einem der Latin-N-Zeichensätze oder Unicode. Du kannst ihn in einen anderen Zeichensatz übersetzen, wenn deine Implementierung in einer nicht-ASCiI-kompatiblen Umgebung erfolgt).

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

Das entspricht in einer hypothetischen Assemblersprache in etwa dem Folgenden:

<pre>start:
    zero, message, -1
    message, -1, -1
    neg1, start+1, -1
    neg1, start+3, -1
    zero, zero, start
zero: 0
neg1: -1
message: "Hello, world!\n\0"
</pre>

# --instructions--

Schreibe eine Funktion, die einen Bereich von Ganzzahlen als Parameter annimmt. Dies stellt die Speicherelemente dar. Die Funktion sollte die Sequenz interpretieren und die Ausgabezeichenfolge zurückgeben. Gehe bei dieser Aufgabe davon aus, dass es keine Standardeingabe gibt.

# --hints--

`Subleq` sollte eine Funktion sein.

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` sollte einen String zurückgeben.

```js
assert(
  typeof Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]) == 'string'
);
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` sollte `"Hello, world!"` zurückgeben.

```js
assert.equal(
  Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]),
  'Hello, world!'
);
```

# --seed--

## --seed-contents--

```js
function Subleq(mem) {

}
```

# --solutions--

```js
function Subleq(mem) {
  var out = '';
  var instructionPointer = 0;
  do {
    var a = mem[instructionPointer];
    var b = mem[instructionPointer + 1];
    if (a === -1) {
    } else if (b === -1) {
      out += String.fromCharCode(mem[a]);
    } else {
      mem[b] -= mem[a];
      if (mem[b] < 1) {
        instructionPointer = mem[instructionPointer + 2];
        continue;
      }
    }
    instructionPointer += 3;
  } while (instructionPointer >= 0);

  return out;
}
```
