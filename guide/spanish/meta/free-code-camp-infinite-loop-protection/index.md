---
title: Free Code Camp Infinite Loop Protection
localeTitle: Free Code Camp Infinite Loop Protection
---
El corredor de código de Free Code Camp tiene incorporada la función Infinite Loop Protect, aprovechada de [Loop Protect](https://github.com/jsbin/loop-protect) de [JSBin](https://github.com/jsbin/loop-protect) . La protección de bucle inyecta algo de código en los bucles creados por el usuario para permitir una salida segura si han pasado más de ~ 500 ms sin salir del bucle. La protección de bucle detectará muchos problemas de bucle infinito, pero no todos. Si ves este mensaje:

`Error: Potential infinite loop at line X`

Significa que has estado protegido de un bucle infinito.

**Nota:** Loop Protect no puede detectar una recursión infinita.

## Deshabilitar la protección de bucle

En algunos casos, una computadora lenta o un bucle largo, puede obtener una protección de bucle incorrecta. Para deshabilitar la protección de bucle, agregue el siguiente comentario en la línea que aparece en las listas de mensajes de protección de bucle:

`//noprotect`

**Advertencia:** deshabilitar la protección de bucle significa que potencialmente puede permitir que su código entre en un bucle infinito, haciendo que su navegador no responda.

## Recuperación de código que no responde

Si cometió un error y deshabilitó incorrectamente la protección de bucle y ahora tiene una solución que no responde, puede deshabilitar la ejecución automática de código.

De forma predeterminada, el sitio de Free Code Camp carga y ejecuta automáticamente la última solución registrada. Si accidentalmente ha creado un bucle infinito u otro error irrecuperable o simplemente no confía en el código, puede deshabilitar la ejecución automática del código colocando lo siguiente en su URL: ejecutar = deshabilitado

Ejemplo:
```
URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?solution=function%20meetBonfire(argument) 
 
 No-Run URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?run=disabled&solution=function%20meetBonfire(argument) 

```