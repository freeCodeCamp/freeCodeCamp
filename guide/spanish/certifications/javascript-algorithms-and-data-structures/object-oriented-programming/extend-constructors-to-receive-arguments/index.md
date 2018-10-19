---
title: Extend Constructors to Receive Arguments
localeTitle: Extender constructores para recibir argumentos
---
## Extender constructores para recibir argumentos

### Método:

Al igual que en el ejemplo de `Bird()` , la función `Dog()` debe tomar dos parámetros: `name` y `color` . El nombre y el color deben inicializarse dentro de la función usando la palabra clave `this` . La propiedad final - `numLegs` se establece en 4 ya que la función no toma un parámetro numLegs.

### Solución:

```javascript
function Dog(name, color) { 
  this.name = name; 
  this.color = color; 
  this.numLegs = 4; 
 } 
 let terrier = new Dog("George","White"); 

```