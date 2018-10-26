---
title: Object Destructuring
localeTitle: Destrucción de objetos
---
# Destrucción de objetos

La destrucción es una forma conveniente de extraer múltiples valores de los datos almacenados en Objetos. Se puede usar en ubicaciones que reciben datos (como el lado izquierdo de una asignación). Esta característica se introduce en `ECMAScript 6` .

La forma de extraer los valores se especifica a través de patrones (lea los ejemplos).

### Asignacion basica
```
var userInfo = {name: 'neel', age: 22}; 
 var {name, age} = userInfo; 
 
 console.log(name); // neel 
 console.log(age); // 22 
```

### Asignación sin declaración

A una variable se le puede asignar su valor con la desestructuración separada de su declaración.
```
var name, age; 
 
 ({name, age} = {name: 'neel', age: 22}); 
```

> La `( .. )` alrededor de la instrucción de asignación es una sintaxis requerida cuando se utiliza la asignación de desestructuración literal del objeto sin una declaración.
> 
> `{name, age} = {name: 'neel', age: 22}` no es una sintaxis independiente válida, ya que `{name, age}` en el lado izquierdo se considera un bloque y no un objeto literal.
> 
> Sin embargo, `({name, age} = {name: 'neel', age: 22})` es válido, al igual que `var {name, age} = {name: 'neel', age: 22}`

### Asignación a nuevos nombres de variables

Una propiedad puede desempaquetarse de un objeto y asignarse a una variable con un nombre diferente al de la propiedad del objeto.
```
var userInfo = {a: 'neel', b: 22}; 
 var {a: name, b: bar} = userInfo; 
 
 console.log(name); // neel 
 console.log(bar); // 22 
```

### Valores predeterminados

A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempaquetado del objeto `undefined` esté `undefined` .
```
var {name = 'ananonumys', age = 20} = {name: 'neel'}; 
 
 console.log(name); // neel 
 console.log(age); // 20 
```

### Asignando nuevos nombres de variables y proporcionando valores por defecto.

Una propiedad puede ser ambas

1.  desempaquetado de un objeto y asignado a una variable con un nombre diferente y
2.  se le asigna un valor predeterminado en caso de que el valor desempaquetado `undefined` esté `undefined` .
```
var {a:name = 'ananonumys', b:age = 20} = {age: 22}; 
 
 console.log(name); // ananonumys 
 console.log(age); // 22 
```

### Configuración del valor predeterminado de un parámetro de función

#### Versión ES5
```
function getUserInfo(data) { 
  data = data === undefined ? {} : data; 
  var name = data.name === undefined ? 'ananonumys' : data.name; 
  var age = data.age === undefined ? 20 : data.age; 
  var location = data.location === undefined ? 'india' : data.location; 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

#### Versión ES2015
```
function getUserInfo({name = 'ananonumys', age = 20, location = 'india'} = {}) { 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

> En la firma de la función para `getUserInfo` arriba, el lado izquierdo desestructurado se asigna a un objeto literal en el lado derecho: `{name = 'ananonumys', age = 20, location = 'india'} = {}` . También podría haber escrito la función sin la asignación del lado derecho. Sin embargo, si `getUserInfo()` asignación del lado derecho, la función buscará al menos un argumento que se proporcionará cuando se invoque, mientras que en su forma actual, simplemente puede llamar a `getUserInfo()` sin proporcionar ningún parámetro. El diseño actual es útil si desea poder llamar a la función sin proporcionar ningún parámetro, el otro puede ser útil cuando desea asegurarse de que se pasa un objeto a la función.

### Desestructuración de objetos y matrices anidadas
```
var metadata = { 
    title: 'Scratchpad', 
    translations: [ 
       { 
        locale: 'de', 
        localization_tags: [], 
        last_edit: '2014-04-14T08:43:37', 
        url: '/de/docs/Tools/Scratchpad', 
        title: 'JavaScript-Umgebung' 
       } 
    ], 
    url: '/en-US/docs/Tools/Scratchpad' 
 }; 
 
 var {title: englishTitle, translations: [{title: localeTitle}]} = metadata; 
 
 console.log(englishTitle); // "Scratchpad" 
 console.log(localeTitle);  // "JavaScript-Umgebung" 
```

### Para de iteración y desestructuración.
```
var people = [ 
  { 
    name: 'Mike Smith', 
    family: { 
      mother: 'Jane Smith', 
      father: 'Harry Smith', 
      sister: 'Samantha Smith' 
    }, 
    age: 35 
  }, 
  { 
    name: 'Tom Jones', 
    family: { 
      mother: 'Norah Jones', 
      father: 'Richard Jones', 
      brother: 'Howard Jones' 
    }, 
    age: 25 
  } 
 ]; 
 
 for (var {name: n, family: {father: f}} of people) { 
  console.log('Name: ' + n + ', Father: ' + f); 
 } 
 
 // "Name: Mike Smith, Father: Harry Smith" 
 // "Name: Tom Jones, Father: Richard Jones" 
```

### Desempaquetar campos de objetos pasados ​​como parámetro de función
```
function userId({id}) { 
  return id; 
 } 
 
 function whois({displayName, fullName: {firstName: name}}) { 
  console.log(displayName + ' is ' + name); 
 } 
 
 var user = { 
  id: 42, 
  displayName: 'jdoe', 
  fullName: { 
      firstName: 'John', 
      lastName: 'Doe' 
  } 
 }; 
 
 console.log('userId: ' + userId(user)); // "userId: 42" 
 whois(user); // "jdoe is John" 
```

Esto descomprime la `id` , `displayName` y `firstName` del objeto de usuario y los imprime.

### Nombres de propiedades de objetos computados y desestructuración
```
let key = 'z'; 
 let {[key]: foo} = {z: 'bar'}; 
 
 console.log(foo); // "bar" 
```

Véase también: **Destrucción de objetos** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)