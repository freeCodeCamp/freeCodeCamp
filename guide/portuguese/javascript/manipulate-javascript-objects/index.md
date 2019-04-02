---
title: Manipulate JavaScript Objects
localeTitle: Manipule Objetos JavaScript
---
Existem algumas maneiras de manipular propriedades de objeto, notação de ponto e notação de colchetes.

Adicionando propriedades a objetos com notação de ponto:
```
myObject.myProperty = "myValue"; 
```

Adicionando propriedades a objetos usando notação de colchetes:

```javascript
myObject['myProperty'] = "myValue"; 
```

Usando a notação de colchetes, podemos utilizar variáveis ​​como nomes de propriedades:

```javascript
var dynamicProperty = "myProperty"; 
 myObject[dynamicProperty] = "myValue"; 
```

Nós também podemos deletá-los assim:
```
delete(myObject.myProperty); 

```