---
id: 5e44412c903586ffb414c94c
title: Formateador aritmético
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


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


- Situations that will return an error:
  - If there are **too many problems** supplied to the function. The limit is **five**, anything more will return: `Error: Too many problems.`
  - The appropriate operators the function will accept are **addition** and **subtraction**. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be: `Error: Operator must be '+' or '-'.`
  - Each number (operand) should only contain digits. Otherwise, the function will return: `Error: Numbers must only contain digits.`
  - Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be: `Error: Numbers cannot be more than four digits.`
- If the user supplied the correct format of problems, the conversion you return will follow these rules:
  - There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).
  - Numbers should be right-aligned.
  - There should be four spaces between each problem.
  - There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)

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
