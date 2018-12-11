---
title: Jazzing Up the Terminal
localeTitle: Jazzing hasta la terminal
---
Fuera de la caja, el terminal enviado con Ubuntu es un poco soso. Esta sección te permitirá convertirte en un usuario avanzado. ![:muscle:](//forum.freecodecamp.com/images/emoji/emoji_one/muscle.png?v=2 ":músculo:") .

## Herramientas:

#### Terminador

[Terminator le](https://launchpad.net/terminator) permite organizar múltiples terminales en una interfaz similar a una red.  
Para instalar Terminator ingrese `sudo apt-get install terminator` en el terminal.

Captura de pantalla de Terminator:

![Captura de pantalla de Terminator](//discourse-user-assets.s3.amazonaws.com/original/2X/6/6af4988ebfb1835ff3c19366865eaaaaf224cb19.png)

#### Oh mi ZSH!

Requisitos previos:

*   `git` debe estar instalado

Para instalar `ZSH` y `Oh My ZSH!` Usa los siguientes comandos:
```
sudo apt install zsh && chsh -s $(which zsh) 
```

> Nota: deberá cerrar sesión y volver a utilizarla para usar ZSH en lugar de bash como su shell predeterminado.
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" 
```

Una vez que reinicies tu terminal, `Oh My ZSH!` debe ser instalado

Consulte la [documentación oficial](https://github.com/robbyrussell/oh-my-zsh/wiki) para aprender a instalar complementos y temas.

#### Tutoriales Avanzados

*   [El curso de choque de la línea de comando](http://cli.learncodethehardway.org/book/)
*   [El arte de la línea de comando](https://github.com/jlevy/the-art-of-command-line)
*   [Aprende suficiente línea de comandos para ser peligroso](https://www.learnenough.com/command-line-tutorial)

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior | ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") | Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")  
[**Personalizando Ubuntu**](//forum.freecodecamp.com/t/customizing-ubuntu/18382) | [**Tabla de Contenidos**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Instalación de DevTools y navegadores web modernos.**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385)