---
title: Create Strings Using Template Literals
localeTitle: Crear cadenas usando literales de plantilla
---
En lugar de utilizar concatenación de cadenas, ES6 ofrece literales de plantilla para crear cadenas. En este desafío, tienes que usar literales de plantilla para crear una serie de advertencias de texto.

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Intenta vincular el programa y escribe tu propio código.

### Explicación del problema:

Se requiere usar literales de plantilla para devolver una lista, ya que cada elemento de la matriz, ya que el elemento se incluirá en una etiqueta `<li></li>` .

## Sugerencia: 1

*   Use la función `map()` para aplicar los literales de la plantilla en todos los elementos `arr`

> _intenta resolver el problema ahora_

## Sugerencia: 2

*   Dentro del `map()` usa una función de flecha que tiene un `element` como parámetro y devuelve `<li></li>` que tiene la clase de advertencia de texto y que contiene el `element` en su interior

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

``const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);``

## No hay mapa () solución

A pesar de que es una solución menos flexible, si conoce la cantidad de elementos de antemano, puede enumerarlos como en

``const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>` ,`<li class="text-warning">${arr[2]}</li>`];``