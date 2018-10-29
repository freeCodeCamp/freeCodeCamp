---
title: Create Reusable CSS with Mixins
localeTitle: Создать многоразовый CSS с помощью Mixins
---
## Создать многоразовый CSS с помощью Mixins

`Mixin` - одна из замечательных функций, которые позволяют разработчикам использовать `SASS` вместо простого `CSS` , поскольку он позволяет вам иметь `Function` внутри вашей таблицы стилей!

Чтобы создать mixin, вы должны следовать следующей схеме:

```scss
@mixin custom-mixin-name($param1, $param2, ....) { 
    // CSS Properties Here... 
 } 
```

И использовать его в элемент (ы), вы должны использовать `@include` с последующим вашим `Mixin` именем, следующим образом :

```scss
element { 
    @include custom-mixin-name(value1, value2, ....); 
 } 
```

* * *

### \[Пример\] Запись `Text Shadow` в `SASS`

**Цель:** применить специальную `Text Shadow` к элементу `h4`

#### HTML

```html

<h4>This text needs a Shadow!</h4> 
```

#### SASS _(написано в синтаксисе SCSS)_

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