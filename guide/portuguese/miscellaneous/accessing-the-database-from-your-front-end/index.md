---
title: Accessing the Database from Your Front End
localeTitle: Acessando o banco de dados do seu front end
---
Você deve ter notado no **main.controller.js** como as _coisas_ foram recuperadas do banco de dados e exibidas:
```
$http.get('/api/things').success(function(awesomeThings){ 
    $scope.awesomeThings = awesomeThings; 
 }); 
```

O que isto faz é chamar a API com um "get" pedido, que é então encaminhado por **/server/api/things/index.js** para a função _exports.index_ em **things.controller.js.** Você também notará no **main.controller.js** que existem exemplos incluídos de _funções $ http.post_ e _$ http.delete_ também! Quão legal!