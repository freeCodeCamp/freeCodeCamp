---
title: Fixing Exportsupdate in Angular
localeTitle: Фиксация Exportsupdate в угловом
---
Как выясняется, в **thing.controller.js,** а также в любых других конечных точек , вы можете генерировать, функция _exports.update_ , которая вызывается , когда вы делаете _$ http.put_ вызов с вашего веб - интерфейсе , чтобы изменить существующий объект базы данных разбивается , Это [известная проблема](https://github.com/DaftMonk/generator-angular-fullstack/issues/310) и может быть исправлена ​​путем изменения следующей строки:
```
// Updates an existing thing in the DB. 
 exports.update = function(req, res) { 
 ... 
    var updated = _.extend(thing, req.body); 
    // change _.merge to _.extend 
 ... 
 }; 

```