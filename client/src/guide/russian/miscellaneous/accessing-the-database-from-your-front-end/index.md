---
title: Accessing the Database from Your Front End
localeTitle: Доступ к базе данных с вашего лица
---
Вы, должно быть, заметили в **main.controller.js,** как _вещи_ были извлечены из базы данных и отображаются:
```
$http.get('/api/things').success(function(awesomeThings){ 
    $scope.awesomeThings = awesomeThings; 
 }); 
```

То , что это делает это вызов API - интерфейс с «получить» запрос, который затем перенаправляется по **/server/api/things/index.js** функции _exports.index_ в **things.controller.js.** Вы также заметите, что в **main.controller.js** есть примеры функций _$ http.post_ и _$ http.delete_ тоже! Как мило!