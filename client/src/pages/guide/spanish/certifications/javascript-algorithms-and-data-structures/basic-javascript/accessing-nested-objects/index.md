---
title: Accessing Nested Objects
localeTitle: Accediendo a objetos anidados
---
## Accediendo a objetos anidados

Pista: **_"Use la notación de corchete para las propiedades con un espacio en su nombre"._**

Si miramos nuestro objeto:

```javascript
var myStorage = { 
  "car": { 
    "inside": { 
      "glove box": "maps", 
      "passenger seat": "crumbs" 
     }, 
    "outside": { 
      "trunk": "jack" 
    } 
  } 
 }; 
```

Nuestro nombre de objeto es `myStorage` .

| - Dentro de eso tenemos un objeto anidado llamado `car` .

| --- Dentro de eso tenemos dos más llamados `inside` y `outside` cada uno con su propiedades propias

Puedes visualizar la estructura del objeto de esta manera, si te ayuda:
```
myStorage 
 |-- car 
 |--- inside 
 |----- glove box: maps 
 |----- passenger seat: crumbs 
 |--- outside 
 |----- trunk: jack 
```

Se nos pide que asignemos los contenidos de la `glove box` , Lo que podemos ver está anidado en el objeto `inside` , que a su vez, está anidado en el objeto del `car` .

Podemos usar la notación de puntos para acceder a la `glove box` siguiente manera:

```javascript
var gloveBoxContents = myStorage.car.inside'complete here' 
```

Debe reemplazar `complete here` con la forma correcta de acceder a la propiedad. Ver la pista de arriba si te quedas atascado.