---
title: Test Driven Development
localeTitle: Desarrollo guiado por pruebas
---
## Desarrollo guiado por pruebas

Test Driven Development (TDD) es uno de los enfoques de desarrollo de software ágil. Se basa en el concepto de que

> debe escribir un caso de prueba para su código incluso antes de escribir el código

Aquí, primero escribimos la prueba unitaria y luego escribimos el código para completar la prueba con éxito. Esto ahorra tiempo para realizar la prueba unitaria y otras pruebas similares, ya que estamos avanzando con la iteración exitosa de la prueba, lo que nos lleva a lograr una modularidad en el código. Básicamente se compone de 4 pasos.

*   Escribe un caso de prueba
    
*   Ver fallar la prueba (rojo)
    
*   Hacer pasar la prueba, cometiendo cualquier delito en el proceso (verde)
    
*   Refactorizar el código para estar a la altura (Refactor)
    
    Estos pasos siguen el principio de Red-Green-Refactor. Red-Green se asegura de escribir el código más simple posible para resolver el problema, mientras que el último paso se asegura de que el código que escriba cumpla con los estándares.
    

Cada nueva característica de su sistema debe seguir los pasos anteriores.

![flujo tdd](http://www.agiledata.org/images/tddSteps.jpg)

#### Más información:

[Introducción de](http://agiledata.org/essays/tdd.html) Agile Data [a TDD](http://agiledata.org/essays/tdd.html)

Wiki en [TDD](https://en.wikipedia.org/wiki/Test-driven_development)

Martin Fowler [es TDD muerto?](https://martinfowler.com/articles/is-tdd-dead/) (Una serie de conversaciones grabadas sobre el tema).

Libro de Kent Beck [Test Driven Development by Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

[Los ciclos de TDD de](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) tío Bob