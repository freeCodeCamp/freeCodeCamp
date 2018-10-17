---
title: Create Reusable CSS with Mixins
localeTitle: Crie CSS Reutilizável com Mixins
---
## Crie CSS Reutilizável com Mixins

`Mixin` é um dos grandes recursos que permite aos desenvolvedores usar o `SASS` vez do `CSS` simples, já que ele permite que você tenha uma `Function` dentro da sua folha de estilo!

Para criar um mixin, você deve seguir o seguinte esquema:

```scss
@mixin custom-mixin-name($param1, $param2, ....) { 
    // CSS Properties Here... 
 } 
```

E para usá-lo em seu (s) elemento (s), você deve usar `@include` seguido pelo seu nome `Mixin` , como segue:

```scss
element { 
    @include custom-mixin-name(value1, value2, ....); 
 } 
```

* * *

### \[Exemplo\] Escreva uma `Text Shadow` no `SASS`

**Objetivo:** Aplicar uma `Text Shadow` personalizada a um elemento `h4`

#### HTML

```html

<h4>This text needs a Shadow!</h4> 
```

#### SASS _(escrito na sintaxe do SCSS)_

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