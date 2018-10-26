---
title: Observer pattern
localeTitle: Patrón observador
---
El patrón Observer ofrece un modelo de suscripción en el que los objetos se suscriben a un evento y reciben una notificación cuando se produce el evento.

## Patrón observador

Este patrón es la base de la programación dirigida por eventos. En Front End Development, este es un patrón esencial para escalar de forma robusta la lógica de su aplicación. En este patrón, usted hace una diferencia entre el **sujeto** y los **observadores** . Los temas son los eventos en sí mismos, como un _clic_ , una _pulsación de tecla_ o una señal del servidor. Todos los **observadores** suscritos son notificados cuando un sujeto cambia de estado (cuando se dispara un evento). Para más información sobre eventos, lea aquí [Programación dirigida por Evenet](https://www.technologyuk.net/software-development/designing-software/event-driven-programming.shtml)

### Suscribiendo

La ventaja de este patrón es tener una colección de objetos suscritos que responderán a un evento en lugar de llamar a una función en cada objeto que debe ser notificado. Otra ventaja es que los observadores se suscriben a través de una interfaz, lo que permite que los cambios en la función de evento solo estén dentro de la función.

## Otros recursos

Un ejemplo de código y más en [Observer Design Pattern](http://www.dofactory.com/javascript/observer-design-pattern)