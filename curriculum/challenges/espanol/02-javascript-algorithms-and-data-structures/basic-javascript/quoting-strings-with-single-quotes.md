---
id: 56533eb9ac21ba0edf2244b4
title: Cita cadenas con comillas simples
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

Los valores de <dfn>cadena</dfn> en JavaScript pueden escribirse con comillas simples o dobles, siempre y cuando comiencen y terminen con el mismo tipo de comillas. A diferencia de otros lenguajes de programación, las comillas simples y dobles funcionan igual en JavaScript.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

La razón por la que puedes querer usar un tipo de comilla sobre otro es si quieres usar ambos en una cadena. Esto puede suceder si quieres guardar una conversación en una cadena y tener la conversación entre comillas. Otro uso sería guardar una etiqueta `<a>` con varios atributos entre comillas, todo dentro de una cadena.

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

Sin embargo, esto se convierte en un problema cuando es necesario utilizar las comillas externas dentro de ella. Recuerda, una cadena tiene el mismo tipo de comillas al principio y al final. Pero si tienes esa misma comilla en algún lugar del medio, la cadena se detendrá antes de tiempo y arrojará un error.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

Aquí `badStr` arrojará un error.

En la cadena <dfn>goodStr</dfn> anterior, puedes usar ambas comillas de forma segura usando la barra invertida `\` como un carácter de escape.

**Nota:** La barra invertida `\` no debe confundirse con la barra diagonal `/`. No hacen lo mismo.

# --instructions--

Cambia la cadena proporcionada a una cadena con comillas simples al principio y al final y sin caracteres de escape.

Ahora mismo, la etiqueta `<a>` en la cadena usa comillas dobles en todas partes. Necesitarás cambiar las comillas externas a comillas simples para poder eliminar los caracteres de escape.

# --hints--

Debes eliminar todas las barras invertidas (`\`).

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

Debes tener dos comillas simples `'` y cuatro comillas dobles `"`.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
