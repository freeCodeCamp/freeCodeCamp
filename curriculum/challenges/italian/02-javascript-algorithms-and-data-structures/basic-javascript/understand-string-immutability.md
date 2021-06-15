---
id: 56533eb9ac21ba0edf2244ba
title: Comprendere l'immutabilità delle stringhe
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

In JavaScript, le stringhe (`String`) sono <dfn>immutabili</dfn>, il che significa che non possono essere modificate una volta create.

Ad esempio, il codice seguente:

```js
var myStr = "Bob";
myStr[0] = "J";
```

non può modificare il valore di `myStr` in `Job`, poiché il contenuto di `myStr` non può essere modificato. Tieni presente che questo *non* significa che `myStr` non può essere modificato, ma solo che i singoli caratteri di una <dfn>stringa letterale</dfn> non possono essere cambiati. L'unico modo per modificare `myStr` è di assegnargli una nuova stringa, in questo modo:

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

Correggi l'assegnazione a `myStr` in modo che contenga il valore stringa di `Hello World` utilizzando l'approccio mostrato nell'esempio sopra.

# --hints--

`myStr` dovrebbe avere un valore stringa `Hello World`.

```js
assert(myStr === 'Hello World');
```

Non modificare il codice sopra il commento specificato.

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
