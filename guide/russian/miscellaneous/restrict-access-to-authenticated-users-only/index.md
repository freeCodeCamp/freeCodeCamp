---
title: Restrict Access to Authenticated Users Only
localeTitle: Ограничить доступ только к проверенным пользователям
---
Предположим, у вас есть маршрут, который вы хотите ограничить зарегистрированным пользователям; возможно, у вас есть страница `/profile` которая позволяет вашим пользователям заполнять некоторую информацию о себе, но это не сработает, если они не вошли в систему. Откройте **/client/app/profile/profile.js** и добавьте `authenticate: true` опции, переданные в _$ routeProvider.When_ :
```
    $routeProvider 
      .when('/profile', { 
        templateUrl: 'app/profile/profile.html', 
        controller: 'ProfileCtrl', 
        authenticate: true // restrict to authenticated users 
      }); 
```

Таким образом, если пользователь не аутентифицируется при попытке доступа к странице `/profile` , они будут перенаправлены на ваш экран входа в систему, чтобы пройти аутентификацию, прежде чем перейти на страницу своего профиля.