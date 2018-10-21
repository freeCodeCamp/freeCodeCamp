---
title: Restrict Access to Authenticated Users Only
localeTitle: Restringir el acceso a usuarios autenticados solamente
---
Digamos que tiene una ruta que desea restringir a los usuarios registrados; quizás tenga una página `/profile` que le permita a sus usuarios completar alguna información sobre ellos mismos, pero no funcionaría si no hubieran iniciado sesión. Abra **/client/app/profile/profile.js** , y agregue `authenticate: true` las opciones pasadas a _$ routeProvider.when_ así:
```
    $routeProvider 
      .when('/profile', { 
        templateUrl: 'app/profile/profile.html', 
        controller: 'ProfileCtrl', 
        authenticate: true // restrict to authenticated users 
      }); 
```

De esta manera, si el usuario no se autentica cuando intenta acceder a la página `/profile` , será redirigido a su pantalla de inicio de sesión para autenticarse antes de continuar a su página de perfil.