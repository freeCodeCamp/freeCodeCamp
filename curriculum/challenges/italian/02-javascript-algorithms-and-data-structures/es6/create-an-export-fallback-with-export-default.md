---
id: 587d7b8c367417b2b2512b58
title: Creare un'esportazione predefinita con export default
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

Nella lezione sull'`export`, hai imparato a conoscere la sintassi indicata come <dfn>esportazione con nome</dfn>. Questo ti ha permesso di rendere disponibili più funzioni e variabili per l'utilizzo in altri file.

C'è un'altra sintassi `export` che devi conoscere, nota come <dfn>export default</dfn> (esportazione predefinita). Di solito si utilizza questa sintassi se un solo valore viene esportato da un file. Viene utilizzata anche per creare un valore di default per un file o un modulo.

Di seguito sono riportati esempi che utilizzano `export default`:

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

La prima è una funzione con un nome e la seconda è una funzione anonima.

Dato che `export default` è utilizzato per dichiarare un valore di default per un modulo o un file, si può avere un solo valore di esportazione predefinita in ogni modulo o file. Inoltre, non è possibile usare `export default` con `var`, `let`, o `const`

# --instructions--

La seguente funzione dovrebbe essere il valore predefinito per il modulo. Si prega di aggiungere il codice necessario per renderla tale.

# --hints--

Il tuo codice dovrebbe usare l'`export` di default.

```js
assert(
  code.match(
    /export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g
  )
);
```

# --seed--

## --seed-contents--

```js
function subtract(x, y) {
  return x - y;
}
```

# --solutions--

```js
export default function subtract(x, y) {
  return x - y;
}
```
