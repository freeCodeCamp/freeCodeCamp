---
title: Create a Class to Target with jQuery Selectors
localeTitle: Создание класса для цели с помощью селекторов jQuery
---
## Создание класса для цели с помощью селекторов jQuery

Последняя задача заключалась в том, что вы добавляли некоторые классы в свои элементы `html <button></button>` для их стилизации, на этот раз вам нужно добавить другие классы к тем кнопкам, которые позволят jQuery настроить таргетинг на них.

### намек

Редактировать классы

### Решение

Поскольку вам нужно добавить `target` класс, следующее решение:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```