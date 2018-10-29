---
title: Use getters and setters to Control Access to an Object
localeTitle: Usar getters y setters para controlar el acceso a un objeto
---
## Usar getters y setters para controlar el acceso a un objeto

Getters y setters son partes críticas de una clase / objeto. Te permiten controlar sus atributos desde el exterior. Se volverán más prominentes cuando comience con la unidad de programación orientada a objetos (¡próximamente!). Por ahora, este ejercicio te muestra cómo manipularlos con ES6.

## Sugerencia 1:

Crea la clase, Termostato. Vas a poner tu constructor, getter y setter aquí.

## Sugerencia 2:

Déle al constructor un parámetro (que puede nombrar como quiera). Establecer el parámetro a un atributo del mismo nombre. Recuerde, inicialmente está configurando las cosas en la temperatura de Farenheit.

## Sugerencia 3:

Cree un método de obtención que convierta el atributo Farenheit a Celsius. Usa la fórmula que te ha sido dada.

## Sugerencia 4:

Cree un método de configuración del mismo nombre que el método de obtención. Debe tener un parámetro que acepte temperatura centígrada. Conviértalo a farenheit y ajústelo al atributo.

## Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
  class Thermostat{ 
    constructor(farenheit){ 
      this.farenheit = farenheit; 
    } 
    get temperature(){ 
      return 5 / 9 * (this.farenheit - 32); 
    } 
    set temperature(celsius){ 
      this.farenheit = celsius * 9.0 / 5 + 32; 
    } 
  } 
 
  /* Alter code above this line */ 
  return Thermostat; 
 } 

```