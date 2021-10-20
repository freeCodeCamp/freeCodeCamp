---
id: 587d7b84367417b2b2512b37
title: Captura el uso mixto de comillas simples y dobles
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript permite el uso de comillas simples (`'`) y dobles (`"`) para declarar una cadena. Decidir cuál usar se reduce generalmente a la preferencia personal, con algunas excepciones.

Tener dos opciones es genial cuando una cadena tiene contracciones u otro fragmento de texto que está entre comillas. Sólo hay que tener cuidado de no cerrar la cadena demasiado pronto, lo que provoca un error de sintaxis.

Aquí hay algunos ejemplos de comillas mezcladas:

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

Los dos primeros son correctos, pero el tercero es incorrecto.

Por supuesto, está bien utilizar sólo un estilo de comillas. Puedes escapar las comillas dentro de una cadena usando el carácter de barra diagonal invertida (`\`):

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

Corrige la cadena para que use comillas diferentes para el valor de `href`, o realiza un escape de las existentes. Mantén las comillas dobles alrededor de toda la cadena.

# --hints--

Tu código debe corregir las comillas alrededor del valor `href` `#Home` cambiándolas o escapándolas.

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

Tu código debe mantener las comillas dobles alrededor de toda la cadena.

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
