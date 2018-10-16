---
title: Accessing Nested Objects
localeTitle: Acessando Objetos Aninhados
---
## Acessando Objetos Aninhados

Dica: **_"Use a notação de colchetes para propriedades com um espaço em seus nomes"._**

Se olharmos para o nosso objeto:

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

Nosso nome de objeto é `myStorage` .

| - Dentro disso, temos um objeto aninhado chamado `car` .

| --- Por dentro temos mais dois chamados `inside` e `outside` cada um com seus propriedades próprias

Você pode visualizar a estrutura do objeto assim, se isso ajudar:
```
myStorage 
 |-- car 
 |--- inside 
 |----- glove box: maps 
 |----- passenger seat: crumbs 
 |--- outside 
 |----- trunk: jack 
```

Somos solicitados a atribuir o conteúdo do `glove box` , o que podemos ver está aninhado no objeto `inside` , que por sua vez, é aninhado no objeto de `car` .

Podemos usar a notação de pontos para acessar o `glove box` - `glove box` seguinte maneira:

```javascript
var gloveBoxContents = myStorage.car.inside'complete here' 
```

Você deve substituir `complete here` com a maneira correta de acessar a propriedade. Veja a pista acima se você ficar preso.