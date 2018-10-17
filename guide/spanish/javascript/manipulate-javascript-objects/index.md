---
title: Manipulate JavaScript Objects
localeTitle: Manipular objetos de JavaScript
---
Hay un par de formas de manipular las propiedades de los objetos, la notación de puntos y la notación de corchetes.

Añadiendo propiedades a objetos con notación de puntos:
```
myObject.myProperty = "myValue"; 
```

Añadiendo propiedades a objetos usando notación de corchete:

```javascript
myObject['myProperty'] = "myValue"; 
```

Usando la notación de corchetes, podemos utilizar variables como nombres de propiedades:

```javascript
var dynamicProperty = "myProperty"; 
 myObject[dynamicProperty] = "myValue"; 
```

También podemos eliminarlos así:
```
delete(myObject.myProperty); 

```