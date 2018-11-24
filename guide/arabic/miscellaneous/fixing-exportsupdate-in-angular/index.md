---
title: Fixing Exportsupdate in Angular
localeTitle: تحديد Exportsupdate في الزاوي
---
كما يتضح ، في **thing.controller.js** وكذلك في أية نقاط **نهائية** أخرى قد تولدها ، فإن وظيفة _export.update_ التي يتم استدعاؤها عند إجراء استدعاء _$ http.put_ من الواجهة الأمامية لتعديل كائن قاعدة بيانات موجود مكسورة . هذه [مشكلة معروفة](https://github.com/DaftMonk/generator-angular-fullstack/issues/310) ، ويمكن إصلاحها عن طريق تغيير السطر التالي:

 `// Updates an existing thing in the DB. 
 exports.update = function(req, res) { 
 ... 
    var updated = _.extend(thing, req.body); 
    // change _.merge to _.extend 
 ... 
 }; 
`