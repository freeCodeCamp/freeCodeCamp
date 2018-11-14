---
title: Algoritmo Confirma La Terminacin
localeTitle: Algoritmo Confirma La Terminacin
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a081f3fa5316b7d400a5e518bb0620eef64caa08.jpg)

### Explicación:

La función es simplemente una operación booleana. Es necesario que se devuelva true si el primer argumento termina con el segundo argumento. Esto significa que para problema de ejemplo `confirmEnding('Bastian', 'n');`, debe devolver true.

## Pista: 1

Hecha un vistazo a como `substr()` funciona. Deberás intentar obtener los últimos X caracteres.

## Pista: 2

Para obtener los últimos X caracteres deberás utilizar length() y convertirlo en número negativo.

## Pista: 3

Comprueba que tienes la sintaxis de forma apropiada y que estés utilizando `===` para comparar.

## ¡Alerta de Spoiler!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución abajo!**

## Solución del código:
```
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Ejecutar código](https://repl.it/CLjU/18)

## Explicación del código:

Utilizamos subtring() con el valor negativo que nos devuelve la longitud de target. Podríamos utilizar -1 para obtener el último carácter pero si la longitud de target es en realidad mayor que uno entonces la función devolvería la información incorrecta. Luego retornamos el valor de su expresión boolanea.

> **NOTA:** Por favor añade tu nombre de usuario solamente si has añadido **contenido relevante** al artículo. (Por favor no remuevas ningún nombre existente.)