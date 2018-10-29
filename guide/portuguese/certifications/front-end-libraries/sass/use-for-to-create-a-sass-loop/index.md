---
title: Use @for to Create a Sass Loop
localeTitle: Use @for para criar um loop Sass
---
## Use @for para criar um loop Sass

1.  A sintaxe básica do `@for` loop no SASS:

*   For-through loop:

```sass
@for $i from <start number> through <end number> { 
  // some CSS 
 } 
```

*   Para - para loop:

```sass
@for $i from <start number> to <end number> { 
  // some CSS 
 } 
```

Observe que a principal diferença é que "início ao fim" **exclui** o número final e "início até o fim" **inclui** o número final.

2.  Por exemplo:

*   For-through loop:

```sass
@for $i from 1 through 3 { 
  // some CSS 
 } 
 
 // 1 2 
```

*   Para - para loop:

```sass
@for $i from 1 to 3 { 
  // some CSS 
 } 
 
 // 1 2 3 
```

3.  Diretriz da [diretriz SASS](https://sass-guidelin.es/#loops)

O loop `@for` pode ser útil quando combinado com pseudo-classes CSS `:nth-*` . Exceto para esses cenários, prefira um loop `@each` se você tiver que iterar sobre algo.

```sass
@for $i from 1 through 10 { 
  .foo:nth-of-type(#{$i}) { 
    border-color: hsl($i * 36, 50%, 50%); 
  } 
 } 
```

Sempre use `$i` como um nome de variável para manter a convenção usual e, a menos que você tenha uma boa razão para, nunca use a palavra-chave: use sempre. Muitos desenvolvedores nem sabem que o Sass oferece essa variação; usá-lo pode levar a confusão.

Também não se esqueça de respeitar essas diretrizes para preservar a legibilidade:

*   Sempre uma nova linha vazia antes de `@for` ;
*   Sempre uma nova linha vazia após a chave de fechamento (}), a menos que a próxima linha seja uma chave de fechamento (}).