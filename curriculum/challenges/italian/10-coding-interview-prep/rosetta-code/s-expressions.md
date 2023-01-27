---
id: 59667989bf71cf555dd5d2ff
title: S-Expressions
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">Le espressioni-S</a> sono un metodo conveniente per analizzare e immagazzinare dati.

# --instructions--

Scrivi un semplice lettore/analizzatore di S-Expressions che gestisce stringhe, interi e float.

La funzione dovrebbe leggere una singola ma annidata S-Espressione da una stringa e restituire un array annidato.

I caratteri di nuova linea e gli altri spazi bianchi possono essere ignorati a meno che non siano contenuti in una stringa tra virgolette.

"`()`" all'interno delle stringhe quotate non vengono interpretate, ma trattate come parte della stringa.

La gestione delle virgolette con escape all'interno di una stringa è facoltativa; quindi "`(foo"bar)`" può essere trattato come una stringa "`foo"bar`", o come un errore.

Per questo, il lettore non deve riconoscere `\` per l'escape, ma dovrebbe inoltre riconoscere i numeri se il linguaggio ha tipi di dati appropriati.

Si noti che ad eccezione di `()"` (`\` se è supportato l'escaping) e spazi bianchi, non ci sono caratteri speciali. Qualsiasi altra cosa è consentita senza virgolette.

Il lettore dovrebbe essere in grado di leggere il seguente input

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

e trasformarlo in una struttura di dati nativa.

# --hints--

`parseSexpr` dovrebbe essere una funzione.

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` dovrebbe restituire `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` dovrebbe restituire `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`.

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
