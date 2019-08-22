---
title: Useful Commands
localeTitle: Comandos útiles
---
# Comandos útiles

## Funcionalidad básica

Lo más probable es que te encuentres en el modo "normal", te permite ingresar comandos presionando la tecla de dos puntos `:` . Para llegar aquí desde otros modos puede escribir `ctrl + c` o `escape` .

Para editar texto y moverse de forma familiar, presione `i` , para el modo "insertar". Intente moverse con las teclas de flecha en el modo "insertar"; consulte la sección "Navegación" a continuación para obtener más detalles.

Dependiendo de la configuración, puede ingresar a un explorador de archivos escribiendo e ingresando el comando `:e .` en modo "normal". La 'e' significa edición y el período para el archivo o directorio.

## Navegación

*   Movimiento del cursor: puede usar las teclas de flecha o `h` , `j` , `k` , `l` (izquierda, abajo, arriba, derecha)
*   `gg` te lleva al inicio del archivo
*   `G` te lleva al final del archivo
*   `:(num)` lleva a una línea específica en su archivo (ej.: 42 lo lleva a la línea 42)

## Ahorro

1.  Presiona `Escape` para asegurarte de que estás en `normal mode` ;
2.  Escribe `:w` ("w" significa "escribir");
3.  Presione `Enter` .

## Guardando (en un archivo nuevo)

1.  Presione `Escape` para asegurarse de que está en `normal mode` .
2.  Escriba `:w newfilename` (newfilename es el nombre de archivo del nuevo archivo en el que desea guardar).
3.  Presione `Enter` .

## Saliendo de Vi, Vim, Nvim, Gvim

1.  Pulsa escapar para entrar en modo "normal"
2.  `:q` va a dejar de fumar suavemente
3.  `:q!` forzará a dejar de fumar
4.  `:qa` esto cerrará todos los archivos abiertos
5.  `:qa!` Cierra todos los archivos mientras abandona los cambios.
6.  `:q` guarda y cierra el archivo actual

(NOTA: el comando `:q!` Forzará a Vim a salir sin guardar. Asegúrese de guardar primero escribiendo el comando `:w` si no desea perder ningún cambio que haya realizado).

**O**

*   Tipo ZZ (guardar y salir)
*   Escriba `:wq` / `:x` (guarde y salga pero use los comandos "w" y "q" que se usan comúnmente)

## Cortar, copiar y pegar

*   `dd` borra (corta) una sola línea
*   `yy` yanks (copias) una sola línea
*   puede usar `yy` y `dd` precedidos por un número para cortar o copiar varias líneas (por `13dd` , `13dd` cortará 13 líneas)
*   `p` pega todo desde el buffer de pasta

## Pegando bloques de código

Muy a menudo te encontrarás buscando soluciones a los problemas, y encontrar a alguien ha escrito un bloque de código que hace exactamente lo que quieres. Si intenta copiar y pegar el código directamente en Vim, es posible que el código tenga un formato extraño o que no se haya pegado correctamente. Esto se debe al hecho de que Vim lee cada carácter que pegue uno tras otro, lo que significa que cualquier combinación de teclas que active un acceso directo de Vim se ejecutará y Vim intentará (y fallará) sangrar automáticamente el código pegado.

Para superar esto, puede usar el **modo Pegar** de Vim, que puede activar al ingresar al modo normal (presione `escape` o `crtl + c` ) y escriba `:set paste` , luego presione ENTER. Ahora estás en modo de _pegar_ . ¡Luego puede ingresar al modo de inserción con `i` y pegar el bloque de texto / código sin ningún problema! Para volver al modo Vim normal sin pegar, puede ingresar al modo normal ( `escape` o `crtl + c` ) y escribir `:set nopaste` y presionar ENTER.

## Ajuste de números de línea

1.  Pulsa escapar para entrar en modo "normal"
2.  Tipo `:set number` , presionar enter

Para configurar los números de línea de forma predeterminada:

1.  Abra / cree el archivo de configuración `vim ~/.vimrc` con `vim ~/.vimrc`
2.  Agregue el `set number` líneas, presione enter

## Abrir un archivo dentro de VIM

En VIM, puede abrir un archivo dentro de la misma ventana configurando el cursor en una ruta y escribiendo `gf` . Esto le dirá a VIM que el texto actual que reside el cursor es un archivo que desea abrir. El archivo se abrirá dentro del terminal VIM, por lo que si desea volver a la ventana anterior, simplemente escriba `ctrl+o` . Esto le dirá a VIM que vaya a la pantalla anterior.

## Cómo dividir ventanas

Puede dividir vim windows y editar 2 o más archivos al mismo tiempo.

*   `:split` -> ventana dividida (horizontal)
*   `:vsplit` -> ventana dividida (vertical)
*   `:vertical` nuevo -> abrir un nuevo archivo en una nueva ventana

Para moverte entre ventanas puedes usar los siguientes comandos:

*   `CTRL-W h` - mover a la ventana de la izquierda
*   `CTRL-W j` - moverse a la ventana de abajo
*   `CTRL-W k` - mueve a la ventana de arriba
*   `CTRL-W l` - mover a la ventana de la derecha
*   `CTRL-W t` - mover a la ventana superior
*   `CTRL-W b` - mover a la ventana inferior

## Deshacer rehacer

Estas acciones deben realizarse en **modo normal** .

**Deshacer** : Presione `u` o escriba `:undo` y presione `Enter` .

**Rehacer** : presione `U` ( `Shift` + `u` ) o escriba `:redo` y presione `Enter` .

## Abrir un archivo en una línea específica

*   vi filename + n, donde n es el número de línea

## Abrir un archivo buscando palabra / término

*   vi filename + / word, donde palabra es lo que está buscando. El cursor se posicionará en la primera aparición de la palabra.

## Buscando un archivo en Vim

Cuando se encuentra en el modo normal (presione la tecla `escape` para asegurarse), puede buscar cualquier término en el documento escribiendo `/` , seguido del término que está buscando y luego presionando `enter` . Por ejemplo, escriba `/hello` y presione `enter` para buscar la palabra "hola" en el archivo actual.

Puede saltar a la siguiente aparición de su término de búsqueda presionando `n` , o la aparición anterior presionando `N` `*` Busca la palabra debajo del cursor.

Si desea resaltar todas las coincidencias de búsqueda escriba `:set hlsearch` o use el comando abreviado `:set hls` . Uso `:set noh` para desactivar el resaltado hasta la siguiente búsqueda.

## Compilando un proyecto

Vim tiene una integración muy estrecha con la herramienta de automatización `make` build. Si su proyecto utiliza un Makefile, puede escribir `:make` en la línea de comandos de Vim para ejecutar la herramienta `make` su sistema. Vim imprimirá la salida de `make` en la pantalla y lo llevará al primer error, si lo hubiera, cuando se complete el comando `make` . Luego puede saltar a través de los errores de compilación y las advertencias en el código de su proyecto usando los comandos `:cn` y `:cp` , para los siguientes y anteriores temas, respectivamente.

## Encontrar y reemplazar

1.  Presione `Escape` para asegurarse de que está en `normal mode` ;
2.  Escriba `:` (Cambiará al `command mode` );
3.  Escriba `%s,word_to_be_replaced,new_word,g` ;
4.  Presione `ENTER` .

Importante: si desea reemplazar la primera aparición de la palabra, elimine la `g` al final.

## ¡Quiero aprender Vim!

¡Para principiantes totales, Vim viene con un tutorial incorporado! Puede acceder a él ejecutando `vimtutor` desde su terminal y esto abrirá un tutorial interactivo sobre _cómo comenzar a usar Vim_ (tarda unos 15 minutos en completarse).

Si no tiene tanta confianza en inglés, puede usar `vimtutor` en el idioma que elija. Por ejemplo, `vimtutor fr` lanzará el tutorial en francés!

## Otros comandos útiles

*   `gg=G` corrige la sangría de todo el archivo
*   Si desea obtener más información sobre un comando específico, escriba `:help` seguido del nombre del comando (por ejemplo: help: w)

Lea el resto de nuestras guías Vim para comprender mejor este potente editor.

## Otros recursos

*   [Vim Golf](https://vimgolf.com/) : una buena manera de aprender de los desafíos de vim para obtener la menor cantidad de pulsaciones. Puede ver soluciones enviadas por otros si no puede resolver el desafío.
*   [Vim Adventures](https://vim-adventures.com/) : un enfoque divertido y gamificado para aprender Vim en el que se encuentran los diferentes golpes de tecla con cada nuevo nivel del juego.
*   [Open Vim](http://www.openvim.com/) - Un tutorial interactivo de vim que enseña comandos básicos
