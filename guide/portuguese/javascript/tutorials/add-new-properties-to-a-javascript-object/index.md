---
title: Add New Properties to a JavaScript Object
localeTitle: Adicionar novas propriedades a um objeto JavaScript
---
Você pode adicionar novas propriedades a objetos JavaScript existentes da mesma maneira que você os modificaria.

Existem duas sintaxes diferentes, notação de ponto e notação de colchetes. A notação de ponto é geralmente preferida para legibilidade, mas as propriedades devem ser um identificador válido.

Aqui está como usar a notação de ponto:
```
myDog.bark = "woof-woof"; 
```

Aqui está como usar a notação de colchetes:

```javascript
myObject['bark'] = "woof-woof"; 
```

Usando a notação de colchetes, podemos utilizar variáveis ​​como nomes de propriedades:

```javascript
var dynamicProperty = "bark"; 
 myObject[dynamicProperty] = "woof-woof"; 

```