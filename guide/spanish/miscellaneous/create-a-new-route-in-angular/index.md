---
title: Create a New Route in Angular
localeTitle: Crear una nueva ruta en angular
---
> > yo angular-fullstack: ruta newpage

¡Escribir lo anterior en su línea de comando generará una **nueva página /** ruta para su aplicación! Genera automáticamente todos los archivos necesarios dentro de su carpeta **/ client / app / newpage** , como su carpeta **/ client / app / main** , con un **newpage.controller.js** , **newpage.controller.spec.js** , **newpage.js** y **newpage. html** . Todos estos casi se comportan como los de la ruta **principal** . Si está accediendo a la base de datos en su nuevo controlador de página, querrá agregar _$ http_ a la lista de dependencias en **newpage.controller.js de** la misma manera que se incluye en **main.controller.js** :
```
angular.module('myApp') 
  .controller('MainCtrl', function ($scope, $http) { ... 

```