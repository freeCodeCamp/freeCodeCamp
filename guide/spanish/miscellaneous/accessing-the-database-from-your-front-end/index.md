---
title: Accessing the Database from Your Front End
localeTitle: Accediendo a la base de datos desde su extremo frontal
---
Debe haber notado en **main.controller.js** cómo las _cosas_ se recuperaron de la base de datos y se mostraron:
```
$http.get('/api/things').success(function(awesomeThings){ 
    $scope.awesomeThings = awesomeThings; 
 }); 
```

Lo que esto hace es llamar a la API con una petición "obtener", que luego se encamina por **/server/api/things/index.js** a la función _exports.index_ en **things.controller.js.** También notará en **main.controller.js** que hay ejemplos incluidos de _funciones $ http.post_ y _$ http.delete_ también! ¡Que agradable!