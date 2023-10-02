---
id: 56533eb9ac21ba0edf2244ab
title: Comprendere la distinzione tra maiuscole e minuscole nelle variabili
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

In JavaScript tutte le variabili e i nomi delle funzioni fanno distinzione tra maiuscole e minuscole. Ciò significa che la capitalizzazione è importante.

`MYVAR` non è uguale a `MyVar` né a `myvar`. È possibile avere più variabili distinte con lo stesso nome ma con un diverso uso delle maiuscole. Si consiglia vivamente di *non* utilizzare questa funzionalità del linguaggio per motivi di chiarezza.

**Buona pratica**

Scrivi i nomi delle variabili in JavaScript in <dfn>camelCase</dfn>. In <dfn>camelCase</dfn>, i nomi delle variabili composti da più parole hanno la prima parola in minuscolo e la prima lettera di ogni parola successiva in maiuscolo.

**Esempi:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

Modifica le dichiarazioni e le assegnazioni esistenti in modo che i loro nomi utilizzino <dfn>camelCase</dfn>.

Non creare nuove variabili.

# --hints--

`studlyCapVar` dovrebbe essere definito e avere un valore di `10`.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`ProperCamelCase` dovrebbe essere definito e avere un valore della stringa `A String`.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` dovrebbe essere definito e avere un valore di `9000`.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` dovrebbe usare camelCase sia nella sezione di dichiarazione che in quella di assegnazione.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` dovrebbe usare camelCase sia nella sezione di dichiarazione che in quella di assegnazione.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` dovrebbe usare camelCase sia nella sezione di dichiarazione che in quella di assegnazione.

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
