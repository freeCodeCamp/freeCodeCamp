---
id: bd7123c9c443eddfaeb5bdef
title: JavaScript-Variablen deklarieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

In der Informatik versteht man unter <dfn>Daten</dfn> alles, was für den Computer von Bedeutung ist. JavaScript bietet acht verschiedene <dfn>Datentypen</dfn>, nämlich `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, und `object`.

Computer unterscheiden zum Beispiel zwischen Zahlen, wie der Zahl `12`, und `strings`, wie `"12"`, `"dog"` oder `"123 cats"`, die Sammlungen von Zeichen sind. Computer können mathematische Operationen mit einer Zahl durchführen, aber nicht mit einem String (Zeichenkette).

<dfn>Variablen</dfn> ermöglichen es Computern, Daten auf dynamische Weise zu speichern und zu bearbeiten. Sie tun dies, indem sie ein "Etikett" verwenden, um auf die Daten hinzuweisen, anstatt die Daten selbst zu verwenden. Jeder der acht Datentypen kann in einer Variablen gespeichert werden.

Variablen ähneln den x- und y-Variablen, die du in der Mathematik verwendest, d. h. sie sind ein einfacher Name, um die Daten zu repräsentieren, auf die wir uns beziehen wollen. Computervariablen unterscheiden sich von mathematischen Variablen dadurch, dass sie verschiedene Werte zu verschiedenen Zeiten speichern können.

Wir sagen JavaScript, dass es eine Variable erstellen oder <dfn>deklarieren</dfn> soll, indem wir das Schlüsselwort `var` davor setzen, etwa so:

```js
var ourName;
```

erstellt eine Variable namens `ourName`. In JavaScript beenden wir Anweisungen (Statements) mit Semikolons. Variablennamen können aus Zahlen, Buchstaben und `$` oder `_` bestehen, dürfen aber keine Leerzeichen enthalten oder mit einer Zahl beginnen.

# --instructions--

Verwende das Schlüsselwort `var`, um eine Variable namens `myName` zu erstellen.

**Hinweis**  
Schaue dir das `ourName`-Beispiel oben an, wenn du nicht weiterkommst.

# --hints--

Du solltest `myName` mit dem Schlüsselwort `var` deklarieren und mit einem Semikolon abschließen

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
