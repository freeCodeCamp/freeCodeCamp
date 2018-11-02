---
title: PHP Syntax
localeTitle: Sintaxis de PHP
---
# Sintaxis PHP básica

### comienzo

Todos los archivos PHP se guardan con la extensión `.php` . Los scripts PHP se pueden agregar en cualquier parte del documento. Un script PHP comienza con `<?php` y termina con `?>` .

`<?php //PHP code goes here ?>`

### Impresión

Para imprimir cualquier declaración en PHP usamos el comando `echo` .

#### Muestra de código
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>My first PHP page</h1> 
 
 <?php 
 echo "Hello World!"; 
 ?> 
 
 </body> 
 </html> 
```

##### NOTA: las declaraciones de PHP terminan con punto `;` coma `;`

### Declarando variables

Declaramos variables en PHP agregando el signo de `$` dólar antes de ellas.
```
<?php 
 $x = 5; 
 echo $x; 
 ?> 
```

### Comentarios en PHP

Para escribir un comentario de una sola línea en PHP colocamos el hashtag `#` o colocando `//` antes del comentario.
```
<?php 
 # This is a single line comment 
 // This is also a single line comment 
 ?> 
```

Para escribir un comentario de doble línea, comenzamos el comentario con `/*` y terminamos con `*/` .
```
<?php 
 /* This is a 
 Double line comment. */ 
 ?> 
```

También podemos comentar algunas partes de la línea de código.

#### Ejemplo de código
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // You can also use comments to leave out parts of a code line 
 $x = 5 /* + 15 */ + 5; 
 echo $x; 
 ?> 
 
 </body> 
 </html> 
```

Puedes ver más sobre esto en [PHP Manual](http://php.net/manual/en/)