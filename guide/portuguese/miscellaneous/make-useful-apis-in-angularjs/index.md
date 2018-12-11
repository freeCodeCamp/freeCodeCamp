---
title: Make Useful APIs in Angularjs
localeTitle: Fazer APIs Úteis em Angularjs
---
Há mais duas coisas que você precisa fazer antes que isso seja útil para você. Digamos que você queira mostrar todas as _coisas_ associadas ao nome de usuário solicitado com essa página: você deve primeiro

1.  Tenha um campo "username" ou "owner" em seu esquema de _coisas_ em `/server/api/thing/thing.model.js`
    
2.  Escreva uma rota personalizada em `/server/api/thing/index.js` para capturar uma solicitação para um nome de usuário específico. A solicitação do seu frontend pode ser algo como:
    
    $ http.get ('/ api / things /' + nome de usuário) .sucesso (…)
    

então você adicionará uma linha no seu `index.js` como:
```
router.get('/:user', controller.indexUser); 
```

e depois em `thing.controller.js` você vai escrever uma função _exports.indexUser_ assim:
```
exports.indexUser = function(req, res) { 
    Thing.find({owner:req.params.user}, function (err, things) { 
        if(err) return res.send(500, err); 
        res.json(200, things); 
    }); 
 }; 
```

Aviso!!! Esse método só funciona corretamente se os nomes de usuários forem absolutamente únicos entre os usuários. O sistema de autenticação padrão que vem com o gerador angular-fullstack não possui nomes de usuário exclusivos, então é melhor você usar o _usuário._ campo id\_ para determinar usuários exclusivos em seu banco de dados por enquanto, a menos que você mesmo queira implementar nomes de usuário exclusivos, alterando seus `/api/user/user.model.js` , `/api/user/user.controller.js` e seu `/app/client/account/signup/signup.controller.js` . Felizmente, você deve saber como fazer tudo isso depois de ler este guia!