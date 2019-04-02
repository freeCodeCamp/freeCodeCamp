---
title: Unit Tests
localeTitle: Pruebas unitarias
---
## Pruebas unitarias

La prueba de unidad es un tipo de prueba que se encuentra en la parte inferior de la pirámide de pruebas de software. Implica dividir la base de código en partes más pequeñas (o unidades) y probar a aquellos en aislamiento. Dependiendo del tipo de lenguaje de programación (o paradigma), estos pueden ser contra cualquier cosa que defina como una unidad, aunque la práctica más común es contra funciones.

### ¿Por que hacerlo?

*   **Protección** : las pruebas unitarias protegen contra la introducción de errores nuevos o antiguos para la programación defensiva
*   **Confianza** : puede agregar cambios, reutilizar o refactorizar el código (ambos muy comunes) y asegurarse de que no haya agregado un error
*   **Documentación** : las pruebas unitarias documentan el comportamiento y el flujo del código, por lo que es fácil para alguien nuevo en el código entenderlo.
*   **Aislamiento** : aísla un módulo de toda la función. Este enfoque te obliga a pensar en un módulo por sí mismo y a preguntar cuál es su trabajo.
*   **Calidad** : como las pruebas unitarias lo obligan a pensar y utilizar su propia API, aplica interfaces y patrones buenos / ampliables. Puede señalar cualquier acoplamiento apretado o complejidad excesiva que deba abordarse. El código incorrecto suele ser mucho más difícil de probar
*   **Estándar de la industria** : las pruebas unitarias son una disciplina común en estos días y son un requisito para una gran parte de las compañías de software
*   **Menos errores** : una investigación sustancial sugiere que la aplicación de pruebas a una aplicación puede reducir la densidad de errores de producción en un 40% - 80%.

### Ejemplo (En Javascript)

Supongamos que hay una función escrita en el archivo **add.js**

```javascript
var add = function(number1, number2){ 
  return number1 + number2; 
 } 
```

Ahora, para escribir la prueba unitaria de esta función particular, podemos usar herramientas de prueba como [mocha](http://mochajs.org/)

```javascript
const mocha = require('mocha') 
 const chai = require('chai')  // It is an assertion library 
 describe('Test to check add function', function(){ 
  it('should add two numbers', function(){ 
    (add(2,3)).should.equal(5)  //Checking that 2+3 should equal 5 using the given add function 
  }); 
 }); 
```

### Desarrollo guiado por pruebas

Las pruebas unitarias son una característica clave del enfoque de desarrollo impulsado por pruebas (TDD) para el desarrollo de software. En este enfoque, el código para características o funciones específicas se escribe mediante el uso repetido de un ciclo muy corto. Primero, el desarrollador escribe un conjunto de pruebas unitarias automatizadas y se asegura de que fallan inicialmente. A continuación, el desarrollador implementa la cantidad mínima de código necesaria para pasar los casos de prueba. Una vez que se ha validado que el código se comporta como se espera, el desarrollador regresa y refuerza el código para cumplir con los estándares de codificación relevantes.

### Más información

Martin Fowler en Pruebas unitarias: [martinfowler.com](https://www.martinfowler.com/bliki/UnitTest.html)

Robert Martin también conocido como "Dr. Bob" en TDD: [butunclebob.com](http://www.butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)

Eric Elliot en pruebas unitarias y TDD: [Medio](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9)