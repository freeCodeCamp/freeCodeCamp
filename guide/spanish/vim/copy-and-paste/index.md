---
title: Copy and Paste
localeTitle: Copiar y pegar
---
# Copiando y pegando en Vim

En Vim, la copia se conoce comúnmente como 'tirón', y pegar sigue siendo el mismo.

### Teclas de comando

Las teclas utilizadas para tirar y pegar en Vim son:

*   `x` para borrar un personaje
*   `y` tirar
*   `p` para poner / pegar despues del cursor
*   `P` para poner / pegar antes del cursor
*   `pp` para poner / pasar una linea entera
*   `d` para cortar
*   `dd` para cortar una linea entera
*   `"` cortar o tirar a un registro

### Proceso de copiar

Para tirar o cortar, escriba `y` o `d` , seguido de un 'objeto de texto'. Estos describen la cantidad de texto que se debe copiar o eliminar. Por ejemplo, `yw` copia una palabra y `d$` elimina del cursor al final de la línea. También se pueden usar ambos en modo visual, presionando `v` y moviendo el cursor y luego presionando `d` borra todo el texto dentro de la selección.

### Registros

Un registro es solo otro nombre para el portapapeles. Pero a diferencia de otros editores de texto, Vim tiene muchos de estos "portapapeles".

Para tirar o eliminar un registro, escriba `"<register name><command>` (por ejemplo: `"ayw` a \[y\] ank \[w\] ord para registrar `a` ). Los nombres de los registros solo pueden tener un carácter por razones obvias ( `"m` , `"M` , `"3` están permitidos, pero `"mr` , `"MyReg` `"MyRegisterName` , `"MyRegisterName` no están). El registro predeterminado que se almacena cuando no se especifica ningún registro es `"` y el portapapeles del sistema al que se puede acceder en otros programas es `+` . También puede usar minúsculas para acceder a los registros y usar mayúsculas para adjuntar a los registros. Por ejemplo `"dyy` copia la línea actual en el registro `d` , escribiendo `"D3yw` copia las siguientes 3 palabras y las agrega a lo que ya está almacenado en `d` .

### Paliza

El pegado se puede hacer en modo normal o en modo de inserción. En modo normal:

*   `p` pega después del cursor
*   `P` pega antes del cursor
*   `gp` pega después del cursor y mueve el cursor al final de la pegada
*   `gP` pega antes del cursor y mueve el cursor al final de la pegada.

En el modo de inserción, presione `Ctrl-r` para pegar y luego escriba un registro, normalmente `"` , esto pegará desde ese registro donde está el cursor y moverá el cursor después de pegar.