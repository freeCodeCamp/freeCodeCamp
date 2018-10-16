---
title: Comments
localeTitle: Comentarios
---
## Comentarios

Los programadores usan comentarios para agregar consejos, notas, sugerencias o advertencias a su código fuente; no tienen ningún efecto en el funcionamiento del código. Los comentarios pueden ser muy útiles para explicar la intención de lo que su código hace o debería hacer.

Siempre es una buena práctica a la hora de comenzar el comentar con más frecuencia que no hacerlo, ya que puede ayudar a los que lean su código a comprender qué es exactamente lo que su código pretende hacer.

JavaScript tiene dos formas de asignar comentarios a su código.

La primera forma es el comentario `//`; Todo el texto después de `//` en la misma línea es comentado. Por ejemplo:

```javascript
function hello() { 
  // Este es un comentario JavaScript de una línea
  console.log("Hello world!"); 
 } 
 hello(); 
```

La segunda forma es el comentario `/* */` , que se puede usar tanto para comentarios de una línea como de múltiples líneas. Por ejemplo:

```javascript
function hello() { 
  /* Este es un comentario JavaScript de una línea */
  console.log("Hello world!"); 
 } 
 hello(); 
```

```javascript
function hello() { 
  /* Este comentario abarca varias líneas. Tenga en cuenta que no necesitamos
  finalizar el comentario hasta que hayamos terminado. */
  console.log("Hello world!"); 
 } 
 hello(); 
```

También puede evitar la ejecución de código Javascript simplemente comentando las líneas de código de esta manera:

```javascript
function hello() { 
  /*console.log("Hello world!");*/ 
 } 
 hello(); 
```

#### Más información:

[Cómo escribir comentarios en JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)

### Muchos IDEs tienen un atajo de teclado para comentar líneas.

1.  Resalte el texto a ser comentado.
2.  Mac: Pulse Command (Apple Key) y "/"
3.  Windows: Pulse Control y "/"
4.  También puede descomentar el código siguiendo los mismos pasos.

Un atajo para comentar una sección de javascript en muchos editores de código es resaltar las líneas de código que desea comentar, luego presione `Cmd/Ctrl + /` .

Los comentarios también son muy útiles para realizar pruebas de código, ya que puede evitar que se ejecute una determinada línea de código / bloque

```javascript
function hello() { 
  // La siguiente sentencia no va a ser ejecutada 
  // console.log('hi') 
  } 
 hello(); 
```

```
function hello() { 
  // Las siguientes sentencias no van a ser ejecutadas 
  /* 
  console.log('hi'); 
  console.log('code-test'); 
  */ 
 } 
 hello(); 
```

#### Más información:

*   [Cómo escribir comentarios en JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)
