---
title: Fixing Exportsupdate in Angular
localeTitle: Fixing Exportsupdate in Angular
---
Como acontece, em **thing.controller.js** , assim como em quaisquer outros pontos de extremidade que você possa gerar, a função _exports.update_ que é chamada quando você faz uma chamada _$ http.put_ de seu frontend para modificar um objeto de banco de dados existente está quebrada . Esse é um [problema conhecido](https://github.com/DaftMonk/generator-angular-fullstack/issues/310) e pode ser corrigido alterando a seguinte linha:
```
// Updates an existing thing in the DB. 
 exports.update = function(req, res) { 
 ... 
    var updated = _.extend(thing, req.body); 
    // change _.merge to _.extend 
 ... 
 }; 

```