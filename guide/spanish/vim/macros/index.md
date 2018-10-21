---
title: Macros
localeTitle: Macros
---
## Macros

La grabación de macros es una forma de realizar algunas tareas repetitivas automáticamente en VIM.

### Grabacion de macros

Macros utilizan uno de los VIM registros que se han de almacenamiento, cada registro es indentify de una carta `a` a `z` .

Para iniciar una macro, en modo normal, presione:

```vim
q<REGISTER LETTER> 
```

Ejemplo: `qq` inicia una macro en el registro `q` , `qs` inicia la macro en el registro `s`

En este punto, verá en la línea de fondo de VIM `recording @q` , esto significa que todo lo que escriba ahora se registrará en la macro.

Para detener la grabación de la macro, presione `<ESC>` para volver al modo NORMAL y `q` para salir de la macro.

Para ejecutar la macro que graba, presione `@` y el registro `q` .

#### El proceso completo se ve así:

*   `qq` -> iniciar el registro de la macro en el registro `q`
*   `...` -> la serie de comandos que quieres grabar
*   `<ESC>q` -> vuelve al modo NORMAL y abandona el registro de macros
*   `@q` -> ejecuta la macro, comenzando desde la línea actual.
*   `@@` -> ejecuta la macro de nuevo

### Más información

Puede encontrar más información sobre macros en el Wiki de consejos VIM: http://vim.wikia.com/wiki/Macros