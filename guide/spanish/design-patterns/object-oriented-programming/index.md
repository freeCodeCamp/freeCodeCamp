---
title: Object Oriented Programming (OOP)
localeTitle: Programación Orientada a Objetos (OOP)
---
## contorno

*   ¿Por qué Objeto Orientado (en adelante abreviado como OO)?
*   Conceptos de OO
*   ¿Qué sigue?

## ¿Por qué OO?

En este paradigma, las entidades se representan como datos del mundo real. Por ejemplo, queremos representar a un perro. En el paradigma OO, simplemente creamos una clase llamada "perro", y le asignamos atributos (color, edad, sexo, etc.) y comportamiento (ladrar, correr, comer, etc.). El comportamiento se cambia a través de "métodos" (funciones en palabras simples) que realizan cambios en los atributos.

## Conceptos de OO

Lo que hace que la programación OO sea poderosa es su capacidad para hacer lo siguiente:

*   Herencia
*   Polimorfismo
*   Encapsulacion
*   Abstracción

En la programación de procedimientos, simplemente creamos variables y las cambiamos cuando es necesario. Sin embargo, en la programación OO, podemos simular literalmente objetos del mundo real. La encapsulación se logra creando una clase específica para una entidad, por ejemplo, perro. Luego se crean objetos de esta clase, que no son más que instancias de la clase. Cada objeto tiene sus propios valores de atributo.

Otro concepto extremadamente útil es el de la herencia. La idea es que una clase puede heredar atributos y comportamiento de una clase base. Por ejemplo, al crear un juego, tenemos un jugador y un enemigo. Podemos crear una clase base llamada persona y darle atributos como nombre, edad, género, etc. El comportamiento de la persona puede ser caminar y saltar. Un jugador y un enemigo pueden heredar estas "cualidades" de la persona, y pueden tener cualidades adicionales como matar, anotar, comer, etc.

Esto ayuda a reutilizar el código y hacer que la estructura de código sea mucho más limpia. La ocultación de datos es otra característica interesante. En OO, tenemos la noción de atributos privados y públicos. Los atributos privados se pueden acceder y modificar solo por métodos de esa clase en particular, mientras que los datos públicos se pueden modificar desde cualquier parte del programa (obviamente dentro del alcance).

## ¿Qué sigue?

Elige un lenguaje OO y crea un juego básico basado en terminales para ilustrar estos conceptos.