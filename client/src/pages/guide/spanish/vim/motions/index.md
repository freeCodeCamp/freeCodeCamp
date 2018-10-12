---
title: Motions
localeTitle: Mociones
---
# Movimientos básicos de Vim

### Movimientos de los cursores

Primero en VIM podemos usar las teclas de flecha si nos gusta movernos por el archivo de texto, pero no es la mejor manera de hacerlo, y perdimos la ventaja de combinar los comandos que proporciona VIM.

En lugar de eso, la forma predeterminada y mejor de moverse a través del texto es usar las teclas `h` (izquierda), `j` (abajo), `k` (arriba) y `l` (derecha).
```
     ^ 
     | 
     k 
 <- h   l -> 
     j 
     | 
     v 
```

La ventaja de usar estas teclas en lugar de las teclas de flecha es que puede combinar movimientos con otros comandos, como:

*   `d2j` -> eliminar 2 líneas hacia abajo
*   `y10k` -> copiar 10 líneas hacia arriba
*   `10l` -> mover 10 caracteres a la derecha
*   `2h` -> mover 2 caracteres a la izquierda

### Mociones de palabras

Una palabra consiste en una secuencia de letras, dígitos y guiones bajos, o una secuencia de otros caracteres que no están en blanco, separados por espacios en blanco (espacios, pestañas, fin de línea). Una línea vacía también se considera una palabra.

Es posible moverse a través de palabras con este commnads:

*   `w` -> pasar a la siguiente palabra
*   `W` -> pasar a la siguiente **PALABRA** \*
*   `e` -> moverse al final de la siguiente palabra
*   `E` -> moverse al final de la siguiente **PALABRA**
*   `b` -> mover a la palabra anterior
*   `B` -> mover a la **PALABRA** anterior
*   `ge` -> mover al final de la palabra anterior
*   `gE` -> ir al final de la **PALABRA** anterior

\* Una **PALABRA** consiste en una secuencia de caracteres que no están en blanco, separados con blanco espacio. Una línea vacía también se considera una **PALABRA** , es decir: `quux(foo,` `bar,` `foo);`

Con estos movimientos combinados con otros comandos puedes hacer cosas como:

*   `dw` -> borrar la palabra
*   `5e` -> pasar al final de la quinta palabra desde aquí

### Mociones de búsqueda

Otra forma de moverse a través de la posición que le gusta es utilizar los movimientos de búsqueda, los movimientos de búsqueda consisten en movimiento + un personaje para buscar

*   `fx` -> pasar a la siguiente `x`
*   `tx` -> moverse a la primera posición antes de la siguiente `x`
*   `;` -> siguiente x
*   `Fx` -> moverse a la `x` anterior
*   `Tx` -> mover a la primera posición después de la `x` anterior
*   `,` -> x anterior

### Inicio y fin de líneas.

También puede moverse para comenzar o terminar la línea con VIM, con estos comandos:

*   `0` -> Comienzo de la línea
*   `^` -> Primer carácter no negro de la línea.
*   `$` -> Fin de la línea

### Movimientos de archivo

En VIM puedes moverte a través del archivo usando estos comandos:

*   `gg` -> mover a la primera línea del archivo
*   `G` -> mover a la última línea del archivo
*   `<ctrl> + f` -> mover una página hacia abajo
*   `<ctrl> + b` -> mover una página arriba
*   `/text` -> encontrar `text`
*   `n` -> moverse a la siguiente aparición del `text` (comando anterior)
*   `?text` -> encontrar `text` anterior
*   `N` -> mover a la aparición anterior de `text`
*   `{` -> mover un párrafo hacia arriba
*   `}` -> mover un párrafo hacia abajo
*   `(` -> mover una oración hacia arriba
*   `)` -> Mover un centinela hacia abajo
*   `#` -> buscar palabra debajo del cursor
*   `*` -> Buscar palabra debajo del cursor