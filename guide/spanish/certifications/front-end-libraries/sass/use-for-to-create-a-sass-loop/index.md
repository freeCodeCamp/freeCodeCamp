---
title: Use @for to Create a Sass Loop
localeTitle: Usa @for para crear un Sass Loop
---
## Usa @for para crear un Sass Loop

1.  La sintaxis básica de `@for` loop en SASS:

*   A través del bucle:

```sass
@for $i from <start number> through <end number> { 
  // some CSS 
 } 
```

*   Para - hacer un bucle:

```sass
@for $i from <start number> to <end number> { 
  // some CSS 
 } 
```

Tenga en cuenta que la principal diferencia es que "de principio a fin" **excluye** el número final, e "de principio a fin" **incluye** el número final.

2.  Por ejemplo:

*   A través del bucle:

```sass
@for $i from 1 through 3 { 
  // some CSS 
 } 
 
 // 1 2 
```

*   Para - hacer un bucle:

```sass
@for $i from 1 to 3 { 
  // some CSS 
 } 
 
 // 1 2 3 
```

3.  Guía de [SASS Guía de](https://sass-guidelin.es/#loops)

El ciclo `@for` puede ser útil cuando se combina con pseudo-clases CSS ' `:nth-*` . Excepto en estos escenarios, prefiera un bucle `@each` si tiene que iterar sobre algo.

```sass
@for $i from 1 through 10 { 
  .foo:nth-of-type(#{$i}) { 
    border-color: hsl($i * 36, 50%, 50%); 
  } 
 } 
```

Siempre use `$i` como nombre de variable para cumplir con la convención habitual y, a menos que tenga una buena razón para hacerlo, nunca use la palabra clave to: use siempre. Muchos desarrolladores ni siquiera saben que Sass ofrece esta variación; su uso podría conducir a la confusión.

También asegúrese de respetar esas pautas para preservar la legibilidad:

*   Siempre una nueva línea vacía antes de `@for` ;
*   Siempre una nueva línea vacía después de la llave de cierre (}) a menos que la siguiente línea sea una llave de cierre (}).