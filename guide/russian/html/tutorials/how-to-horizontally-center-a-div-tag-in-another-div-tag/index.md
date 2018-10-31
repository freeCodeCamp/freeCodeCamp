---
title: How to Horizontally Center a Div Tag in Another Div Tag
localeTitle: Как горизонтально центрировать тег Div в другом теге Div
---
## Как горизонтально центрировать тег Div в другом теге Div

Горизонтальное центрирование `<div>` внутри другого `<div>` довольно простое.

Начнем с создания двух тегов div с родительскими и дочерними классами. Родитель будет нашим контейнером, а дочерний элемент будет `<div>` мы будем располагать по горизонтали.

```html

<!DOCTYPE html> 
 <html> 
 <head> 
  <meta charset="UTF-8"> 
  <title>How to Horizontally Center a Div Tag in Another Div Tag</title> 
 </head> 
 <body> 
  <div class="parent"> 
    <div class="child"> 
      <p>This is the center.</p> 
    </div> 
  </div> 
 </body> 
 </html> 
```

Есть несколько способов, которыми вы можете это сделать, но для этого урока давайте сосредоточимся на двух. В первом мы `flexbox` наш дочерний `<div>` с использованием `margin` а во втором мы будем использовать `flexbox` .

### Пример центрирования тега Div с полями

Если вы укажете `width` вашего дочернего div, вы можете использовать `margin: auto` . Это будет центрировать вашего ребенка `<div>` , равномерно распределяя его левое и правое поля.

```css
.parent { 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  width: 50%; 
  margin: auto; 
  border: 1px solid black; 
 } 
```

### Пример центрирования тега Div с помощью Flexbox

Использование flexbox для центровки `<div>` немного отличается. Во-первых, вам не нужно указывать `width` вашего дочернего `<div>` . Во-вторых, вы фактически центрируете дочерний `<div>` , применяя свойства css для родительского `<div>` .

Для центрирования дочернего `<div>` с использованием flexbox вам нужно использовать `display: flex` вместе с `justify-content: center` на родительском `<div>` .

```css
.parent { 
  display: flex; 
  justify-content: center; 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  border: 1px solid black; 
 } 
```

#### Дополнительная информация:

[Матрица поддержки Flexbox](http://caniuse.com/#search=flexbox)