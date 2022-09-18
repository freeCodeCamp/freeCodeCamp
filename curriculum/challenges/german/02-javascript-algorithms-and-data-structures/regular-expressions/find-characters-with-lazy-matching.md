---
id: 587d7db6367417b2b2512b9b
title: Zeichen mit einer ungenauen Übereinstimmung finden (Lazy Matching)
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

Bei regulären Ausdrücken findet eine <dfn>greedy</dfn>-Übereinstimmung den längsten möglichen Teil eines Strings, der dem Muster des regulären Ausdrucks entspricht, und gibt ihn zurück. Die Alternative ist eine <dfn>lazy</dfn>-Übereinstimmung, die den kleinstmöglichen Teil des Strings findet, der das Muster des regulären Ausdrucks erfüllt.

Du kannst den regulären Ausdruck `/t[a-z]*i/` auf den String `"titanic"` anwenden. Dieser reguläre Ausdruck ist im Grunde ein Muster, das mit `t` beginnt, mit `i` endet und einige Buchstaben dazwischen hat.

Reguläre Ausdrücke sind standardmäßig "gierig" (greedy), also würde die Übereinstimmung `["titani"]` ergeben. Er findet den größtmöglichen Teilstring, der dem Muster entspricht.

Du kannst jedoch das `?`-Zeichen verwenden, um es auf eine "träge" (lazy) Übereinstimmung umzustellen. `"titanic"` verglichen mit dem angepassten regulären Ausdruck von `/t[a-z]*?i/` ergibt `["ti"]`.

**Hinweis:** Das Parsen von HTML mit regulären Ausdrücken sollte vermieden werden, aber der Musterabgleich eines HTML-Strings mit regulären Ausdrücken ist völlig in Ordnung.

# --instructions--

Korrigiere den regulären Ausdruck `/<.*>/` so, dass er das HTML-Tag `<h1>` zurückgibt und nicht den Text `"<h1>Winter is coming</h1>"`. Denk daran, dass der Platzhalter `.` in einem regulären Ausdruck auf jedes beliebige Zeichen passt.

# --hints--

Die Variable `result` sollte ein Array sein, das `<h1>` enthält

```js
assert(result[0] == '<h1>');
```

`myRegex` sollte Lazy Matching verwenden

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` sollte nicht den String `h1` enthalten

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
