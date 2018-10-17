---
title: Add id Attributes to Bootstrap Elements
localeTitle: Добавление атрибутов идентификатора к элементам начальной загрузки
---
## Добавление атрибутов идентификатора к элементам начальной загрузки

Последняя задача заключалась в том, что вы добавляли класс к вашим элементам кнопки, на этот раз вам нужно добавить id (s) в div (s), которые имеют класс well.

### Подсказка 1

Идентификатор объявляется следующим образом:

```html

<element id="id(s)List"></element> 
```

### Подсказка 2

Отредактируйте теги div, которые имеют класс well

### Подсказка 3

Используйте разные идентификаторы для обеих колодцев.

### Подсказка 4

Дайте колодец слева идентификатор `left-well` и колодец справа `right-well` .

### Решение

Поскольку вы должны добавить id (s) в обе скважины и иметь оба с уникальным идентификатором, следующим является решение:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well" id="left-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well" id="right-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```