---
title: Make Useful APIs in Angularjs
localeTitle: Hacer útiles APIs en Angularjs
---
Sin embargo, hay dos cosas más que debes hacer antes de que esto te sea útil. Digamos que quiere mostrar todas las _cosas_ asociadas con el nombre de usuario solicitado con esa página: primero debe

1.  Tenga un campo de "nombre de usuario" o "propietario" en su esquema de _cosa_ en `/server/api/thing/thing.model.js`
    
2.  Escriba una ruta personalizada en `/server/api/thing/index.js` para capturar una solicitud de un nombre de usuario específico. La solicitud de su frontend podría ser algo como:
    
    $ http.get ('/ api / things /' + nombre de usuario) .success (...)
    

así que agregará una línea en su `index.js` como:
```
router.get('/:user', controller.indexUser); 
```

y luego en `thing.controller.js` que voy a escribir una función _exports.indexUser_ de este modo:
```
exports.indexUser = function(req, res) { 
    Thing.find({owner:req.params.user}, function (err, things) { 
        if(err) return res.send(500, err); 
        res.json(200, things); 
    }); 
 }; 
```

¡¡¡Advertencia!!! este método solo funciona correctamente si los nombres de usuario son absolutamente únicos entre los usuarios. El sistema de autenticación predeterminado que viene con el generador angular-fullstack no tiene nombres de usuario únicos, por lo que es probable que esté mejor usando al _usuario._ campo id\_ para determinar usuarios únicos en su base de datos por ahora, a menos que desee implementar nombres de usuario únicos al modificar su `/api/user/user.model.js` , `/api/user/user.controller.js` , y su `/app/client/account/signup/signup.controller.js` . ¡Afortunadamente, debes saber cómo hacer todo eso después de leer esta guía!