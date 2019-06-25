---
title: With
localeTitle: Com
---
## Com

JavaScript `with` instrução é uma forma abreviada de editar várias propriedades em um objeto. A maioria dos desenvolvedores desencorajar o uso de `with` , e você é melhor não usar esta palavra-chave.

**Nota** : `"strict mode"` proíbe o uso de `with` .

### Sintaxe

```js
with (expression) 
  statement 
```

### Exemplo de uso

Em JavaScript, você pode modificar individualmente as propriedades de um objeto, como abaixo:

```javascript
let earth = {}; 
 earth.moons = 1; 
 earth.continents = 7; 
```

`with` lhe dá uma abreviação para modificar as propriedades em um objeto:

```javascript
with (earth) { 
  moons = 1; 
  continents = 7; 
 } 
```

Enquanto este exemplo é inventado, você pode entender casos de uso `with` mais se você tiver objetos maiores como abaixo:

```javascript
earth.continents.australia.geography.ocean = "Pacific"; 
 earth.continents.australia.geography.river = "Murray"; 
 earth.continents.australia.geography.mountain = "Kosciuszko"; 
```

### Alternativas

Você não deve usar `with` , pois tem erros sutis e problemas de compatibilidade. Uma abordagem altamente recomendada é atribuir o objeto a uma variável e, em seguida, modificar as propriedades da variável. Aqui está um exemplo usando um objeto maior:

```javascript
let earth = { 
  continents: { 
    australia: { 
      geography: {} 
    } 
  } 
 }; 
 
 let geo = earth.continents.australia.geography; 
 
 geo.ocean = "Pacific"; 
 geo.river = "Murray"; 
 geo.mountain = "Kosciuszko"; 
```

### Experimente

https://repl.it/Mixg/5

#### Mais Informações:

[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)

[https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/](https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

[http://2ality.com/2011/06/with-statement.html](http://2ality.com/2011/06/with-statement.html)