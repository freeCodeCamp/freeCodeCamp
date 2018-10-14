---
title: Acceptance Testing
localeTitle: Test de aceptación
---
## Test de aceptación

Pruebas de aceptación, una técnica de prueba realizada para determinar si el sistema de software ha cumplido con las especificaciones requeridas. El propósito principal de esta prueba es evaluar el cumplimiento del sistema con los requisitos comerciales y verificar si cumple con los criterios requeridos para la entrega a los usuarios finales.

Hay varias formas de pruebas de aceptación:

\-> Pruebas de aceptación del usuario

\-> Pruebas de aceptación de negocios

\-> Pruebas alfa

\-> Prueba Beta

# Criterios de aceptación

Los criterios de aceptación se definen sobre la base de los siguientes atributos

\-> Corrección funcional y exhaustividad

\-> Integridad de datos

\-> Conversión de datos

\-> Usabilidad

\-> Rendimiento

\-> Puntualidad

\-> Confidencialidad y disponibilidad

\-> Instalación y capacidad de actualización

\-> Escalabilidad

\-> Documentación

# Plan de Pruebas de Aceptación - Atributos

Las actividades de prueba de aceptación se llevan a cabo en fases. En primer lugar, se ejecutan las pruebas básicas y, si los resultados de la prueba son satisfactorios, se lleva a cabo la ejecución de escenarios más complejos.

El plan de prueba de aceptación tiene los siguientes atributos:

\-> Introducción

\-> Categoría de prueba de aceptación

\-> Ambiente de operación

\-> ID de caso de prueba

\-> Título de la prueba

\-> Objetivo de prueba

\-> Procedimiento de prueba

\-> Horario de prueba

\-> Recursos

\=> Las actividades de la prueba de aceptación están diseñadas para llegar a una de las conclusiones:

Aceptar el sistema como entregado.

Aceptar el sistema una vez realizadas las modificaciones solicitadas.

No aceptes el sistema

# Informe de prueba de aceptación - Atributos

El informe de prueba de aceptación tiene los siguientes atributos:

\-> Identificador de informe

\-> Resumen de Resultados

\-> Variaciones

\-> Recomendaciones

\-> Resumen de la lista de tareas pendientes

# \-> Decisión de aprobación

Las Pruebas de aceptación se centran en verificar si el software desarrollado cumple con todos los requisitos. Su objetivo principal es verificar si la solución desarrollada cumple con las expectativas del usuario.

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

La prueba de aceptación es una práctica bien establecida en el desarrollo de software. Las pruebas de aceptación son una parte importante de las pruebas funcionales de su código.

Una prueba de aceptación comprueba que el código funciona como se espera, es decir, produce la salida esperada, dadas las entradas esperadas.

Se utiliza una prueba de aceptación para probar bloques funcionales relativamente más grandes de software, también conocido como Características.

### Ejemplo

Ha creado una página que requiere que el usuario ingrese primero su nombre en un cuadro de diálogo antes de poder ver el contenido. Tiene una lista de usuarios invitados, por lo que a cualquier otro usuario se le devolverá un error.

Hay múltiples escenarios aquí como:

*   Cada vez que cargue la página, deberá ingresar su nombre.
*   Si su nombre está en la lista, el diálogo desaparecerá y verá el artículo.
*   Si su nombre no está en la lista, el cuadro de diálogo mostrará un error.

Puede escribir Pruebas de aceptación para cada una de estas subcaracterísticas de la función del cuadro de diálogo más grande

Aparte del código que maneja la infraestructura de cómo se ejecutará la prueba, su prueba para el primer escenario podría verse como (en pseudocódigo):

Dado que la página está abierta El cuadro de diálogo debe ser visible Y el cuadro de diálogo debe contener un cuadro de entrada Y el cuadro de entrada debe tener un texto de marcador de posición "¡Tu nombre, por favor!"

### Notas

Las Pruebas de aceptación se pueden escribir en cualquier idioma y se ejecutan utilizando varias herramientas disponibles que se ocuparían de la infraestructura mencionada anteriormente, por ejemplo, abrir un navegador, cargar una página, proporcionar los métodos para acceder a los elementos de la página, bibliotecas de afirmaciones, etc.

Cada vez que escribes una pieza de software que se utilizará de nuevo (incluso por ti mismo), es útil escribir una prueba para ello. Cuando usted u otro realice cambios en este código, la ejecución de las pruebas garantizará que no haya roto la funcionalidad existente.

Normalmente lo realizan los usuarios o los expertos en la materia. También se llama como prueba de aceptación del usuario (UAT). La UAT involucra los escenarios de la vida real más comunes. A diferencia de las pruebas del sistema, no se enfoca en los errores o fallas, sino en la funcionalidad. UAT se realiza al final del ciclo de vida de la prueba y decidirá si el software se moverá al siguiente entorno o no.

Una buena manera de definir qué pruebas de aceptación se deben escribir es agregar criterios de aceptación a una historia de usuario. Con los criterios de aceptación, puede definir cuándo una historia de usuario está lista para implementarse y el problema se ha completado según sus deseos.

En un proyecto Agile es importante que el equipo tenga criterios de aceptación definidos para todas las historias de usuario. El trabajo de Pruebas de aceptación utilizará los criterios definidos para evaluar la funcionalidad entregada. Cuando una historia puede pasar todos los criterios de aceptación, está completa.

Las pruebas de aceptación también pueden validar si una épica / historia / tarea completada cumple con los criterios de aceptación definidos. En contraste con la definición de hecho, este criterio puede cubrir casos de negocios específicos que el equipo desea resolver. Esto proporciona una buena medida de la calidad del trabajo.

#### Más información:

*   [Junta Internacional de Calificación de Pruebas de Software](http://www.istqb.org/)