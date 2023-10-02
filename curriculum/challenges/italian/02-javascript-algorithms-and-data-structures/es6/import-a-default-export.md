---
id: 587d7b8d367417b2b2512b59
title: Importare un'esportazione predefinita
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

Nell'ultima sfida, hai conosciuto l'esportazione predefinita (`export default`) e i suoi utilizzi. Per importare un'esportazione predefinita, è necessario utilizzare una diversa sintassi di `import`. Nell'esempio seguente, `add` è l'esportazione predefinita del file `math_functions.js`. Ecco come importarlo:

```js
import add from "./math_functions.js";
```

La sintassi differisce in un punto chiave. Il valore importato, `add`, non è circondato da parentesi graffe (`{}`). `add` qui è semplicemente il nome di una variabile per qualunque sia l'esportazione predefinita del file `math_functions.js`. È possibile utilizzare qualsiasi nome qui quando importi un valore predefinito.

# --instructions--

Nel codice seguente, importa l'esportazione predefinita dal file `math_functions.js`, che si trova nella stessa directory di questo file. Dai all'import il nome `subtract`.

# --hints--

Dovresti importare correttamente `subtract` da `math_functions.js`.

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

subtract(7,4);
```

# --solutions--

```js
import subtract from "./math_functions.js";

subtract(7,4);
```
