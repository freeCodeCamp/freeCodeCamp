---
id: 5e44412c903586ffb414c94c
title: Formateador aritmético
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Comienza importando el proyecto en Replit.
-   Después verás una ventana `.replit`
-   Selecciona `Use run command` y presiona el botón `Done`


# --instructions--

Los estudiantes de primaria suelen colocar los problemas aritméticos en vertical para facilitar su resolución. Por ejemplo, "235 + 52" se convierte a:

```py
  235
+  52
-----
```

Crea una función que reciba una lista de cadenas que sean problemas aritméticos y devuelva los problemas ordenados verticalmente y uno al lado del otro. La función debe tomar opcionalmente un segundo argumento. Cuando el segundo argumento se establezca como `True`, se deberán mostrar las respuestas.

## Ejemplo

Llamando a la función:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Resultado:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Llamando a la función:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Resultado:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Reglas

La función devolverá la conversión correcta si los problemas suministrados están correctamente formateados, de lo contrario, **devolverá** una **cadena** que describe un error significativo para el usuario.


- Situaciones que devolverán un error:
  - Si se pasan **demasiados problemas** a la función. El límite es **cinco**, si se pasan más se devolverá: `Error: Too many problems.`
  - Los únicos operadores que aceptará la función son **adición** y **sustracción**. Multiplicación y división devolverán un error. Otros operadores no mencionados en este punto no necesitarán ser probados. El error devuelto será: `Error: Operator must be '+' or '-'.`
  - Cada número (operando) solo debe contener dígitos. En otro caso, la función devolverá: `Error: Numbers must only contain digits.`
  - Cada operando (los números a cada lado del operador) tiene que tener un máximo de cuatro dígitos. En otro caso, la cadena de error devuelta será: `Error: Numbers cannot be more than four digits.`
- Si el usuario proporciona a la función los problemas con el formato correcto, la conversión a devolver por la función seguirá las siguientes reglas:
  - Debe haber un solo espacio entre el operador y el operando más largo, el operador estará en la misma línea que el segundo operando, ambos operandos estarán en el mismo orden en que fueron pasados (el primero será el que aparezca arriba y el segundo estará debajo).
  - Los números deben estar alineados a la derecha.
  - Debe haber cuatro espacios entre cada problema.
  - Debe haber guiones (-) al final de cada problema. Dichos guiones deben extenderse a lo largo de la longitud de cada problema por separado. (Véase el ejemplo más arriba.)

## Desarrollo

Escribe tu código en `arithmetic_arranger.py`. Durante el desarrollo de tu programa puedes utilizar `main.py` para probar el funcionamiento de tu función `arithmetic_arranger()`. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Las pruebas unitarias para este proyecto están en `test_module.py`. Ejecutamos las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que pulses el botón "run". También puedes ejecutar las pruebas introduciendo `pytest` en la consola.

## Envío

Copia el enlace de tu proyecto y envíalo a freeCodeCamp.

# --hints--

Debe formatear correctamente un problema aritmético y pasar todas las pruebas.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
