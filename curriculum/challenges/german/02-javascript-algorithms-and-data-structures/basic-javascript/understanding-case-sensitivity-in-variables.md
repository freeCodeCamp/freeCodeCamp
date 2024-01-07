---
id: 56533eb9ac21ba0edf2244ab
title: Verstehen der Groß-/Kleinschreibungsunterscheidung (Case-sensitivity) in Variablen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

In JavaScript wird bei allen Variablen und Funktionsnamen zwischen Groß- und Kleinschreibung unterschieden. Das bedeutet, dass die Großschreibung wichtig ist.

`MYVAR` ist nicht dasselbe wie `MyVar` oder `myvar`. Es ist möglich, mehrere unterschiedliche Variablen mit demselben Namen, aber unterschiedlichen Bezeichnungen zu haben. Aus Gründen der Übersichtlichkeit wird dringend empfohlen, dieses Sprachmerkmal *nicht* zu verwenden.

**Bewährte Praxis**

Schreiben die Variablennamen in JavaScript in <dfn>camelCase</dfn>. Bei <dfn>camelCase</dfn> wird bei Variablennamen mit mehreren Wörtern das erste Wort kleingeschrieben und der erste Buchstabe jedes folgenden Wortes großgeschrieben.

**Beispiele:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

Ändere die bestehenden Deklarationen und Zuweisungen so, dass ihre Namen <dfn>camelCase</dfn> verwenden.

Erstelle keine neuen Variablen.

# --hints--

`studlyCapVar` sollte definiert sein und einen Wert von `10` haben.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` sollte definiert werden und einen Wert des Strings `A String` haben.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` sollte definiert werden und einen Wert von `9000` haben.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` sollte sowohl im Deklarations- als auch im Zuweisungsabschnitt camelCase verwenden.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` sollte sowohl im Deklarations- als auch im Zuweisungsabschnitt camelCase verwenden.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` sollte sowohl im Deklarations- als auch im Zuweisungsabschnitt camelCase verwenden.

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
