---
id: 587d7db3367417b2b2512b8f
title: Riconoscere le stringhe letterali
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

Nell'ultima sfida, hai cercato la parola `Hello` usando l'espressione regolare `/Hello/`. Quell'espressione regolare ha cercato una corrispondenza letterale della stringa `Hello`. Ecco un altro esempio di ricerca di una corrispondenza letterale della stringa `Kevin`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

Questa chiamata a `test` restituirà `true`.

Qualsiasi altra forma di `Kevin` non corrisponderà. Ad esempio, l'espressione regolare `/Kevin/` non corrisponderà a `kevin` o `KEVIN`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

Questa chiamata a `test` restituirà `false`.

Una sfida futura mostrerà come riconoscere anche queste altre forme.

# --instructions--

Completa l'espressione regolare `waldoRegex` per trovare `"Waldo"` nella stringa `waldoIsHiding` con una corrispondenza letterale.

# --hints--

La tua espressione regolare `waldoRegex` dovrebbe trovare la stringa `Waldo`

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

La tua espressione regolare `waldoRegex` non dovrebbe cercare altro.

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

Dovresti cercare la corrispondenza di una stringa letterale con la tua espressione regolare.

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
