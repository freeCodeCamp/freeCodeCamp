---
title: Add Elements within Your Bootstrap Wells
localeTitle: Добавить элементы внутри ваших бутстрапов
---
## Добавить элементы внутри ваших бутстрапов

В последней задаче вы создали div с классом well, эта задача теперь требует, чтобы вы добавили 3 кнопки в каждую из колодцев.

### намек

Кнопка объявляется следующим образом:

```html

<button></button> 
```

### Решение

Поскольку мы должны объявить 3 кнопки в каждой ячейке, мы сделаем следующее:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button></button> 
        <button></button> 
        <button></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button></button> 
        <button></button> 
        <button></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```