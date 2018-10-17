---
title: Pseudoclassical Class Definition
localeTitle: Definición de clase pseudoclásica
---
La definición de clase pseudoclásica ocurre en 2 bloques de código en lugar de uno, lo que sucede en otros lenguajes como Python y PHP.

El primer bloque se denomina "función constructora", que es donde se declaran los atributos de la clase. Estos son los aspectos de la clase que son únicos para cada nueva instancia. Ejemplo con los autos es que la marca, el color y la ubicación pueden diferir. En el segundo bloque de código declara los métodos que serán compartidos por cada instancia de la clase. Los ejemplos son cosas que el automóvil puede hacer, avanzar, detenerse, abrir la puerta.

## Ejemplo
```
var Car = function(brand, color, location) { 
 this.brand = brand; 
 this.color = color; 
 this.location = location 
 }; 
 
 Car.prototype = { 
 move: function() { this.location++; }, 
 stop: function() { this.location = 0; }, 
 }; 
```

## Explicación

La razón para declarar la clase completa en 2 bloques es guardar en la memoria cuando comienza a crear instancias de la clase. Si la declaración de clase era de estilo "Funcional", entonces hay una nueva copia de los métodos realizados para **cada** instancia. Al declarar la clase de estilo "Pseudoclassical" sólo una _única_ copia de los métodos se almacenan en la memoria.

Cuando una instancia de la clase intenta acceder a un método:
```
var x_car = new Car('lexus', 'white', 0); 
 x_car.move(); 
```

En realidad, el intérprete _primero_ no podrá encontrar el método llamado en el objeto en sí mismo, ya que se creó a partir de la función de construcción de automóviles. Como puede ver arriba, no hay referencia a ninguno de los métodos en la función de construcción de automóviles. Desde allí, el intérprete busca el `Car.prototype` que ahora se comparte entre todas las instancias. ¡Allí el intérprete encuentra el método que fue llamado!

### Otras lecturas:

[Blog de Natac](https://natacseanc.wordpress.com/2015/08/04/javascript-object-create-and-classes/)

[Clases de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)