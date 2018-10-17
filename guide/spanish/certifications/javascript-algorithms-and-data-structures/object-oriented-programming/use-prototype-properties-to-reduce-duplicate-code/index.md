---
title: Use Prototype Properties to Reduce Duplicate Code
localeTitle: Use las propiedades de prototipo para reducir el código duplicado
---
## Use las propiedades de prototipo para reducir el código duplicado

### Método:

La propiedad `prototype` nos permite agregar nuevas propiedades a un constructor de objetos desde fuera del bloque de código original. La propiedad prototipo también le permite agregar nuevas funciones al constructor de objetos. El siguiente código muestra cómo usar `.prototype` en un objeto para crear una nueva propiedad en el constructor.

#### Ejemplo:

```javascript
Obj.prototype.newProperty = "New Property!"; 
```

Usando esta lógica, simplemente cree una nueva propiedad `prototype` para `numLegs` . Los casos de prueba se pueden pasar al reemplazar el objeto `Bird` con el objeto `Dog` en el ejemplo dado: `Bird.prototype.numLegs = 2;`

### Solución:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 // Add your code above this line 
 let beagle = new Dog("Snoopy"); 

```