---
title: Restrict Access to Authenticated Users Only
localeTitle: Restringir o acesso apenas aos usuários autenticados
---
Digamos que você tenha uma rota que você deseja restringir a usuários logados; talvez você tenha uma página `/profile` que permita que seus usuários preencham algumas informações sobre si mesmos, mas não funcionaria se eles não estivessem logados. Abra **/client/app/profile/profile.js** e adicione `authenticate: true` para as opções passadas para _$ routeProvider.when_ assim:
```
    $routeProvider 
      .when('/profile', { 
        templateUrl: 'app/profile/profile.html', 
        controller: 'ProfileCtrl', 
        authenticate: true // restrict to authenticated users 
      }); 
```

Dessa forma, se o usuário não for autenticado quando tentar acessar a página `/profile` , ele será redirecionado para sua tela de login para ser autenticado antes de continuar na página de perfil.