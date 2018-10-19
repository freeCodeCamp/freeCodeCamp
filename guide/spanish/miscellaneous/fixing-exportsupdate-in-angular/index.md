---
title: Fixing Exportsupdate in Angular
localeTitle: Arreglando Exportsupdate en Angular
---
Pues resulta que, en **thing.controller.js** así como en cualesquiera otros criterios de valoración que puede generar, la función _exports.update_ que se llama cuando realiza una llamada de _http.put $_ de su interfaz para modificar un objeto base de datos existente se rompe . Este es un [problema conocido](https://github.com/DaftMonk/generator-angular-fullstack/issues/310) y se puede solucionar cambiando la siguiente línea:
```
// Updates an existing thing in the DB. 
 exports.update = function(req, res) { 
 ... 
    var updated = _.extend(thing, req.body); 
    // change _.merge to _.extend 
 ... 
 }; 

```