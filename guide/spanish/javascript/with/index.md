---
title: With
localeTitle: Con
---
## Con

La declaración de JavaScript `with` es una forma abreviada de editar varias propiedades en un objeto. La mayoría de los desarrolladores de desalentar el uso de `with` , y que son mejor no usar esta palabra clave.

**Nota** : `"strict mode"` prohíbe el uso de `with` .

### Sintaxis

```syntax
with (expression) 
  statement 
```

### Ejemplo de uso

En JavaScript, puedes modificar individualmente las propiedades de un objeto como a continuación:

```javascript
let earth = {}; 
 earth.moons = 1; 
 earth.continents = 7; 
```

`with` le da una taquigrafía para modificar las propiedades de un objeto:

```javascript
with (earth) { 
  moons = 1; 
  continents = 7; 
 } 
```

Si bien este ejemplo está diseñado, puede comprender los casos de uso `with` más si tiene objetos más grandes como el siguiente:

```javascript
earth.continents.australia.geography.ocean = "Pacific"; 
 earth.continents.australia.geography.river = "Murray"; 
 earth.continents.australia.geography.mountain = "Kosciuszko"; 
```

### Alternativas

No debe utilizar `with` ya que tiene errores sutiles y problemas de compatibilidad. Un enfoque altamente recomendado es asignar el objeto a una variable y luego modificar las propiedades de la variable. Aquí hay un ejemplo usando un objeto más grande:

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

### Pruébalo

https://repl.it/Mixg/5

#### Más información:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)

[https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/](https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

[http://2ality.com/2011/06/with-statement.html](http://2ality.com/2011/06/with-statement.html)