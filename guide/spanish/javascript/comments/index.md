---
title: Comments
localeTitle: Comentarios
---
## Comentarios

Los programadores usan comentarios para agregar sugerencias, notas, sugerencias o advertencias a su código fuente; no tienen ningún efecto en la salida real del código. Los comentarios pueden ser muy útiles para explicar la intención de lo que su código está o debería estar haciendo.

Siempre es una buena práctica comenzar a comentar con más frecuencia que no, ya que puede ayudar a los que lean su código a comprender qué es exactamente lo que su código pretende hacer.

JavaScript tiene dos formas de asignar comentarios en su código.

La primera forma es el `//` comentario; Todo el texto después de `//` en la misma línea en un comentario. Por ejemplo:

```javascript
function hello() { 
  // This is a one line JavaScript comment 
  console.log("Hello world!"); 
 } 
 hello(); 
```

La segunda forma es el comentario `/* */` , que se puede usar tanto para comentarios de línea única como de línea múltiple. Por ejemplo:

```javascript
function hello() { 
  /* This is a one line JavaScript comment */ 
  console.log("Hello world!"); 
 } 
 hello(); 
```

```javascript
function hello() { 
  /* This comment spans multiple lines. Notice 
     that we don't need to end the comment until we're done. */ 
  console.log("Hello world!"); 
 } 
 hello(); 
```

También puede evitar la ejecución de código Javascript simplemente completando las líneas de código de esta manera:

```javascript
function hello() { 
  /*console.log("Hello world!");*/ 
 } 
 hello(); 
```

#### Más información:

[Cómo escribir comentarios en JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)

### Muchos IDE vienen con un atajo de teclado para comentar las líneas.

1.  Resaltar texto para ser comentado.
2.  Mac: Comando Push (Apple Key) y "/"
3.  Windows: Push Control y "/"
4.  También puedes descomentar el código siguiendo los mismos pasos.

Un atajo para comentar una sección de javascript en muchos editores de código es resaltar las líneas de código que desea comentar, luego presione `Cmd/Ctrl + /` .

Los comentarios también son muy útiles para la prueba de código, ya que puede evitar que se ejecute una determinada línea de código / bloque

```javascript
function hello() { 
  // The statement below is not going to get executed 
  // console.log('hi') 
  } 
 hello(); 
```

```
function hello() { 
  // The statements below are not going to get executed 
  /* 
  console.log('hi'); 
  console.log('code-test'); 
  */ 
 } 
 hello(); 
```

#### Más información:

*   [Cómo escribir comentarios en JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)