---
title: Give a Background Color to a div Element
localeTitle: Дайте цвет фона элементу div
---
## Дайте цвет фона элементу div

Вы можете изменить `color` `background` на элемент (или раздел) `div` одним из двух способов.

**Первый метод:**

Создайте `class` в скобках стиля.

```html

<style> 
 .blue-background { 
    background-color: blue; 
  } 
 </style> 
```

Вы можете добавить `class` к вашему `div` элемента:

```html

<div class="blue-background"> 
  <p> Example </p> 
 </div> 
```

**Второй метод:**

Вместо создания `class` как в первом методе, вы можете создать `class` `div` Element в скобках стиля.

Каждый элемент `div` будет иметь `class` вы создали и назначили.

(Это означает, что это повторяющийся `class` для каждого `div` вами элемента `div` .)

```html

<style> 
  div { 
    background-color: blue; 
  } 
 </style> 

```