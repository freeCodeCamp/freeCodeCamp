---
title: Debugging Node files using CLI commands
localeTitle: Depuración de archivos de nodo mediante comandos CLI
---
## Depuración de archivos de nodo mediante comandos CLI

En este tutorial, aprenderá cómo puede depurar su código Node.js en la línea de comandos. Su simple código de JavaScript puede ser fácilmente depurado utilizando los DevTools de un navegador. Para Node, puede depurar su código sin salir de su interfaz de línea de comandos (CLI).

Digamos que tienes un archivo nombrado como `contents.js` . Ejecutaría el archivo usando el comando de `node` .

```bash
node contents.js 
```

Esto ya debe saberlo ya que estás escribiendo el código Node.js. Ahora cualquier error que aparezca debe ser depurado. Para ejecutar el archivo en modo de depuración, agregue la palabra clave `inspect` mientras ejecuta el archivo.

```bash
node inspect contents.js 
```

Ahora este comando abrirá su archivo en modo de depuración. De aquí en adelante, puede recorrer su código una línea a la vez presionando la tecla **N** en su teclado.

El depurador se iniciará en la primera línea. Al presionar **N** , puede mover el depurador a la siguiente línea. Si hubiera un error en la primera línea, mostraría un error en lugar de moverse a la segunda línea. Esto es muy útil. Si, por ejemplo, hay un error en la línea 17, le mostrará el error antes de seguir adelante.

Puede haber un error en su lógica, lo que significa que desea que se muestre un cierto valor, pero en su lugar muestra un valor diferente. En ese caso, agregar `console.log()` s podría ayudarlo y, con el modo de depuración, será más fácil identificar la causa del error.

* * *

Ahora, a veces, sucede que su código fuente es enorme. Entra en el modo de depuración para depurar sus errores y está seguro de que el error proviene de una función en la línea 52. Pero dado que el modo de depuración comienza en la línea 1, ¿no tiene más remedio que visitar la línea 52 uno por uno? ¡Absolutamente no!

Simplemente agregue el `debugger` palabras clave antes de la función.

```javascript
console.log("Outside the function....everything's going smoothly"); 
 
 debugger; 
 
 function doesSomething() { 
    //some logic 
    console.log("Something went wrong inside here!"); 
 } 
```

Ahora abra el archivo nuevamente en modo de depuración y esta vez presione **C** en su teclado.

Presionar **N** mueve el depurador a la siguiente línea y presionar **C** le dice al depurador que recorra todo el código de una sola vez. Es lo mismo que ejecutar sin modo de depuración. _Pero_ , su código tiene una adición esta vez. Lo has adivinado - la palabra clave del `debugger` . Al presionar **C** normalmente se ejecutará el código hasta el final, pero debido a la adición del `debugger` , se detendrá justo antes de que comience la función.

Entonces, después de ejecutar su archivo en modo de depuración, al presionar **C** se omitirá el código y se detendrá exactamente antes de la función en la palabra clave del `debugger` . Después de eso, puede comenzar a recorrer la función una línea a la vez hasta que identifique su error.