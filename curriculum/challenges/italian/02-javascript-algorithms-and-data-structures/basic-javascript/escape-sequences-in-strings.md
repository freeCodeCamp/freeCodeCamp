---
id: 56533eb9ac21ba0edf2244b6
title: Sequenze di escape nelle stringhe
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Le virgolette non sono gli unici caratteri dei quali si può fare l'<dfn>escaping</dfn> all'interno di una stringa. Ci sono due motivi per usare i caratteri di escaping:

1.  Per permetterti di utilizzare caratteri che potresti non essere altrimenti in grado di digitare, come ad esempio un carattere nuova riga.
2.  Per permetterti di rappresentare più virgolette in una stringa senza JavaScript interpretare erroneamente ciò che intendi.

Lo abbiamo imparato nella sfida precedente.

<table class='table table-striped'><thead><tr><th>Codice</th><th>Output</th></tr></thead><tbody><tr><td><code>\'</code></td><td>virgoletta singola</td></tr><tr><td><code>\"</code></td><td>doppia citazione</td></tr><tr><td><code>\\</code></td><td>barra rovesciata</td></tr><tr><td><code>\n</code></td><td>nuova riga</td></tr><tr><td><code>\t</code></td><td>tabulazione</td></tr><tr><td><code>\r</code></td><td>ritorno a capo</td></tr><tr><td><code>\b</code></td><td>delimitatore di parola</td></tr><tr><td><code>\f</code></td><td>avanzamento carta (form feed)</td></tr></tbody></table>

*Nota che la barra rovesciata necessita di escaping perché appaia come barra rovesciata.*

# --instructions--

Assegna le seguenti tre linee di testo in una sola variabile `myStr` usando le seguenze di escape.

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

Dovrai usare le sequenze di escape per inserire i caratteri speciali. Dovrai seguire anche la spaziatura come sopra, senza spazi tra sequenze di escape o le parole.

**Note:** L'indentazione per `SecondLine` si ottiene con il carattere di escape di tabulazione, non con gli spazi.

# --hints--

`myStr` non dovrebbe contenere spazi

```js
assert(!/ /.test(myStr));
```

`myStr` dovrebbe contenere le stringhe `FirstLine`, `SecondLine` e `ThirdLine` (ricorda la distinzione tra maiuscole e minuscole)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` dovrebbe essere seguito dal carattere newline `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` dovrebbe contenere un carattere di tabulazione `\t` che segue un carattere nuova riga

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` dovrebbe essere preceduto dal carattere backslash `\`

```js
assert(/\\SecondLine/.test(myStr));
```

Ci dovrebbe essere un carattere nuova riga tra `SecondLine` e `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` dovrebbe contenere solo i caratteri mostrati nelle istruzioni

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
