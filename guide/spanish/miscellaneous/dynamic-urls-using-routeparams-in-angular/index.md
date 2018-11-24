---
title: Dynamic Urls Using Routeparams in Angular
localeTitle: Urls dinámicos usando Routeparams en Angular
---
¿Qué pasa si tienes muchos usuarios publicando _cosas_ en tu sitio web? Tal vez sus usuarios quieran tener un perfil, o un muro, de las _cosas_ que han publicado, y quieren poder compartirlo con sus amigos con una URL. Usted puede hacer eso, no biggie!

Digamos que usaste
```
>> yo angular-fullstack:route wall 
```

para generar una ruta http://myapp.wherever.com/wall/ para sus usuarios. Desea un enlace a http://myapp.wherever.com/wall/someUsername para mostrar las _cosas de_ un usuario específico.  
Vaya a **/client/app/wall/wall.js** y observe que detecta qué URL está solicitando el usuario antes de actuar:
```
$routeProvider.when('/wall', … 
```

Puede personalizar esa ruta para que la captura cuando un usuario está tratando de ver un perfil asociado con un nombre de usuario específico, como por ejemplo:
```
$routeProvider.when('/wall/:username', … 
```

Los dos puntos antes de "username" indican que esta es una variable, que luego se pasa al módulo _$ routeParams_ . En **wall.controller.js** , incluya _$ routeParams_ :
```
.controller('WallCtrl', function ($scope, $routeParams) { … 
```

Luego, más adelante en **wall.controller.js** , puede ver qué nombre de usuario se solicitó en la URL refiriéndose a la variable generada por _$ routeProvider_ usando algo como
```
var wallOwner = $routeParams.username; 

```