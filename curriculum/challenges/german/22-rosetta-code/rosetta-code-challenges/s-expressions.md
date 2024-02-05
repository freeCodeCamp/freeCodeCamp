---
id: 59667989bf71cf555dd5d2ff
title: S-Ausdrücke
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">S-Expressions</a> are one convenient way to parse and store data.

# --instructions--

Schreibe einen einfachen Reader/Parser für S-Expressions, der mit quotierten und unquotierten Strings, Integers und Floats umgehen kann.

Die Funktion soll einen einzelnen, aber verschachtelten S-Ausdruck aus einer Zeichenkette lesen und als (verschachtelte) Anordnung zurückgeben.

Zeilenumbrüche und andere Leerzeichen können ignoriert werden, es sei denn, sie befinden sich innerhalb einer Zeichenkette in Anführungszeichen.

"`()`" innerhalb von Zeichenketten in Anführungszeichen werden nicht interpretiert, sondern als Teil der Zeichenkette behandelt.

Die Verarbeitung von Anführungszeichen in Verbindung mit einer Escape-Sequenz innerhalb eines Strings ist optional; demnach kann "`(foo"bar)`" als String "`foo"bar`" behandelt werden oder als Fehler.

Dazu muss der Leser nicht `\` für das Escaping erkennen, sondern sollte darüber hinaus Zahlen erkennen, wenn die Sprache über entsprechende Datentypen verfügt.

Beachte, dass es mit Ausnahme von `()"` (`\`, wenn Escaping unterstützt wird) und der Leerzeichen keine Sonderzeichen gibt. Alles andere ist ohne Anführungszeichen erlaubt.

Der Leser sollte in der Lage sein die folgende Eingabe zu lesen

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

und sie in eine native Datenstruktur umzuwandeln.

# --hints--

`parseSexpr` sollte eine Funktion sein.

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` sollte `['data1', 'data2', 'data3']` zurückgeben

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` sollte `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]` zurückgeben.

```js
assert.deepEqual(parseSexpr(basicSExpr), basicSolution);
```

# --seed--

## --after-user-code--

```js
const simpleSExpr = '(data1 data2 data3)';
const simpleSolution = ['data1', 'data2', 'data3'];

const basicSExpr = '((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))';
const basicSolution = [["data","\"quoted data\"",123,4.5],["data",["!@#",[4.5],"\"(more\"","\"data)\""]]];
```

## --seed-contents--

```js
function parseSexpr(str) {

  return true;
}
```

# --solutions--

```js
function parseSexpr(str) {
  const t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
    var n,
      ti = t[i].trim();
    if (ti == '"') return;
    else if (ti == '(') t[i] = '[', c += 1;
    else if (ti == ')') t[i] = ']', c -= 1;
    else if ((n = +ti) == ti) t[i] = n;
    else t[i] = `'${ti.replace('\'', '\\\'')}'`;
    if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',');
    if (!c) if (!o) o = true; else return;
  }
  return c ? undefined : eval(t.join(''));
}
```
