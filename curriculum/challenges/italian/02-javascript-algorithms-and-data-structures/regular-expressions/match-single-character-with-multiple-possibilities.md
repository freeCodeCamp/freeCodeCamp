---
id: 587d7db5367417b2b2512b95
title: Riconoscere singoli caratteri con diverse possibilità
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

Hai imparato come riconosce i pattern letterali (`/literal/`) e i caratteri jolly (`/./`). Questi sono i due estremi delle espressioni regolari, dove uno trova corrispondenze esatte, e l'altro corrispondono a qualunque carattere. Ci sono opzioni che sono un equilibrio tra i due estremi.

È possibile cercare un pattern letterale con una certa flessibilità con le <dfn>classi di caratteri</dfn>. Le classi di caratteri consentono di definire un gruppo di caratteri che si desidera riconoscere posizionandoli all'interno di parentesi quadre (`[` e `]`).

Ad esempio, se volessi riconoscere `bag`, `big`e `bug` ma non `bog`... Potresti creare l'espressione regolare `/b[aiu]g/` per farlo. `[aiu]` è la classe di caratteri che corrisponde solo ai caratteri `a`, `i`, o `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

Nell'ordine, le quattro chiamate a `match` restituiranno i valori `["big"]`, `["bag"]`, `["bug"]`e `null`.

# --instructions--

Usa una classe di caratteri con vocali (`a`, `e`, `i`, `o`, `u`) nella tua espressione regolare `vowelRegex` per trovare tutte le vocali nella stringa `quoteSample`.

**Nota:** Assicurati di riconoscere sia le vocali maiuscole che quelle minuscole.

# --hints--

Dovresti trovare tutte le 25 vocali.

```js
assert(result.length == 25);
```

La tua espressione regolare `vowelRegex` dovrebbe usare una classe di caratteri.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

La tua espressione regolare `vowelRegex` dovrebbe usare il flag global.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

La tua espressione regolare `vowelRegex` dovrebbe usare il flag insensibile alle maiuscole e minuscole.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

La tua espressione regolare non dovrebbe riconoscere nessuna consonante.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
