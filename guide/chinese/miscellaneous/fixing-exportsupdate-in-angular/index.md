---
title: Fixing Exportsupdate in Angular
localeTitle: 在Angular中修复Exportsupdate
---
事实证明，在**thing.controller.js**以及在可能产生的任何其它端点，这就是所谓的_exports.update_功能，当您从您的前端修改现有的数据库对象_$ http.put_电话坏了。这是一个[已知问题](https://github.com/DaftMonk/generator-angular-fullstack/issues/310) ，可以通过更改以下行来修复：
```
// Updates an existing thing in the DB. 
 exports.update = function(req, res) { 
 ... 
    var updated = _.extend(thing, req.body); 
    // change _.merge to _.extend 
 ... 
 }; 

```