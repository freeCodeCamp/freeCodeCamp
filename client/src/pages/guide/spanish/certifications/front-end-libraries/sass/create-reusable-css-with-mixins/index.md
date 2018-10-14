---
title: Create Reusable CSS with Mixins
localeTitle: Crea CSS reutilizable con Mixins
---
## Crea CSS reutilizable con Mixins

`Mixin` es una de las excelentes características que permite a los desarrolladores usar `SASS` lugar de `CSS` simple, ¡ya que te permite tener una `Function` dentro de tu hoja de estilo!

Para crear una mezcla debes seguir el siguiente esquema:

```scss
@mixin custom-mixin-name($param1, $param2, ....) { 
    // CSS Properties Here... 
 } 
```

Y para usarlo en su (s) elemento (s), debe usar `@include` seguido de su nombre `Mixin` , como sigue:

```scss
element { 
    @include custom-mixin-name(value1, value2, ....); 
 } 
```

* * *

### \[Ejemplo\] Escriba una `Text Shadow` en `SASS`

**Objetivo:** aplicar una `Text Shadow` personalizada a un elemento `h4`

#### HTML

```html

<h4>This text needs a Shadow!</h4> 
```

#### SASS _(Escrito en sintaxis SCSS)_

```scss
@mixin custom-text-shadow($offsetX, $offsetY, $blurRadius, $color) { 
    -webkit-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    -moz-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    -ms-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
 } 
 h2 { 
    @include custom-text-shadow(1px, 3px, 5px, #999999) 
 } 

```