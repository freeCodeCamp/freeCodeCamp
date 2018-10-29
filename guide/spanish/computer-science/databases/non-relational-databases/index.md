---
title: Non-Relational-Databases
localeTitle: Bases de datos no relacionales
---
## Cuándo usar

Si está lidiando con una enorme cantidad de datos, puede ser demasiado tedioso, y la probabilidad de error (en la forma de un problema de Desigualdad de Impedancia ORM) aumenta. En esa situación, es posible que deba considerar ir con una base de datos no relacional. Una base de datos no relacional simplemente almacena datos sin mecanismos explícitos y estructurados para vincular datos de diferentes tablas (o grupos) entre sí. Si su modelo de datos resulta ser muy complejo, o si tiene que des-normalizar el esquema de su base de datos, las bases de datos no relacionales pueden ser la mejor manera de hacerlo.

Otras razones para elegir una base de datos no relacional incluyen:

*   La necesidad de almacenar matrices serializadas en objetos JSON.
*   Almacenar registros en la misma colección que tienen diferentes campos o atributos
*   Descubrir la normalización del esquema de la base de datos o la codificación en torno al rendimiento y los problemas de escalabilidad horizontal
*   Los problemas pueden predefinir fácilmente su esquema debido a la naturaleza de su modelo de datos

## Desventajas

En las bases de datos no relacionales, no hay uniones como las bases de datos relacionales. Esto significa que necesita realizar múltiples consultas y unir los datos manualmente dentro de su código, y eso puede ser muy feo, muy rápido.

## Bases de datos de ejemplo

*   MongoDB
*   NoSQL

## Referencias

*   (https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)
*   (https://en.wikipedia.org/wiki/NoSQL)