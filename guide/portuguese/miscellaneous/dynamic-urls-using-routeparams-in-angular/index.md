---
title: Dynamic Urls Using Routeparams in Angular
localeTitle: URLs dinâmicos usando o Routeparams em Angular
---
E se você tiver muitos usuários postando _coisas_ no seu site? Talvez seus usuários desejem ter um perfil ou um mural das _coisas_ que postaram e queiram compartilhá-lo com os amigos com um URL? Você pode fazer isso, não é nada demais!

Digamos que você usou
```
>> yo angular-fullstack:route wall 
```

para gerar uma rota http://myapp.wherever.com/wall/ para seus usuários. Você quer um link para http://myapp.wherever.com/wall/someUsername para mostrar as _coisas de_ um usuário específico.  
Navegue para **/client/app/wall/wall.js** e observe que ele detecta qual URL o usuário está solicitando antes de agir sobre ele:
```
$routeProvider.when('/wall', … 
```

Você pode personalizar esse caminho para capturar quando um usuário está tentando ver um perfil associado a um nome de usuário específico da seguinte forma:
```
$routeProvider.when('/wall/:username', … 
```

Os dois pontos antes de "username" indicam que esta é uma variável, que é então passada para o módulo _$ routeParams_ . Em **wall.controller.js** , inclua _$ routeParams_ :
```
.controller('WallCtrl', function ($scope, $routeParams) { … 
```

Então, mais tarde, em **wall.controller.js** , você pode ver qual nome de usuário foi solicitado na URL, referindo-se à variável gerada pelo _$ routeProvider_ usando algo como
```
var wallOwner = $routeParams.username; 

```