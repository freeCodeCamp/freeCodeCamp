---
title: Create a New Route in Angular
localeTitle: Criar uma nova rota em angular
---
> > yo angular-fullstack: rota nova página

Digitando o acima em sua linha de comando irá gerar uma **nova página /** rota para o seu aplicativo! Ele gera automaticamente todos os arquivos necessários dentro de sua pasta **/ client / app / newpage** , como sua pasta **/ client / app / main** , com um **newpage.controller.js** , **newpage.controller.spec.js** , **newpage.js** e **newpage. html** . Todos estes praticamente se comportam como os da rota **principal** . Se você está acessando o banco de dados no seu novo controlador, você vai querer adicionar _$ http_ à lista de dependências em **newpage.controller.js** da mesma forma que está incluído no **main.controller.js** :
```
angular.module('myApp') 
  .controller('MainCtrl', function ($scope, $http) { ... 

```