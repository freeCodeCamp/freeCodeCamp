---
title: Installing CLI Tools Developers Should not Live Without on Linux and Mac
localeTitle: La instalación de herramientas CLI para desarrolladores no debería vivir sin Linux y Mac
---
Este artículo es una breve descripción sobre cómo instalar las utilidades de línea de comandos clave que los desarrolladores utilizan todos los días en entornos Macintosh y Linux. Las principales herramientas de CLI que se mostrarán son: Homebrew (Mac), Node y NPM, Bower, Gulp, Grunt y Tmux.

## Instalación de Homebrew (sistemas Macintosh)

Homebrew es 'El administrador de paquetes faltantes para OS X'. Es una gran herramienta para descargar e instalar paquetes directamente desde su línea de comandos. Esto no es necesario en las distribuciones de Linux porque ya tienen administradores de paquetes instalados de forma predeterminada, como `apt-get` o `pacman` . Para instalar Homebrew, simplemente pegue el siguiente comando en su terminal:

*   `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

En caso de que se encuentre con "Faltan herramientas de línea de comandos de Xcode", use lo siguiente para instalarlo:

*   `xcode-select --install`

## Instalando NPM

`NPM` , o Node Package Manager, es otro administrador de paquetes útil para descargar principalmente herramientas web. La descarga de `NPM` también instalará el marco Node.js.

### Mac:

*   Usando el tipo `Homebrew` : `brew install node` y `NPM` deberían haberse instalado.

### Linux:

*   Usando `apt-get` first type: `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -` , luego `sudo apt-get install nodejs`
*   Usando el tipo `pacman` : `pacman -S nodejs npm`
*   Usando `yum` type: `sudo yum install nodejs npm`
*   Usando el tipo `dnf` : `sudo dnf install nodejs`
*   Usando `zypper` type: `sudo zypper install nodejs6`

## Instalación de Bower

Bower es un gestor de paquetes popular que le permite instalar bibliotecas front-end. Puede instalarlo en sistemas Linux y Macintosh usando `npm` con el siguiente comando:

*   `npm install -g bower` (el mismo comando para Linux y OS X)

## Instalación de Gulp

`Gulp` es un marco y una herramienta de CLI que hace que el desarrollo sea más rápido y más placentero al automatizar las tareas que los desarrolladores encuentran que realizan una y otra vez. Además, puedes instalar `Gulp` través de `npm` :

*   `npm install -g gulp-cli`

Y en carpetas de proyectos individuales:

*   `npm install --save-dev gulp`

## Instalando Grunt

`Grunt` es otra herramienta de automatización popular similar a `Gulp` . Para instalarlo, usa `npm` nuevo:

*   `npm install -g grunt-cli`

## Instalando Tmux

`Tmux` es un multiplexor de terminal para Linux y Mac. Le brinda la posibilidad de tener múltiples sesiones y ventanas en la misma ventana de Bash, y también le permite "separar" sesiones a las que puede conectarse a través de SSH, dejando en ejecución todos los programas que se estaban ejecutando actualmente.

Para instalar en Linux:

*   `sudo apt install tmux`

¡Y eso es eso! Con estas herramientas, su proceso de desarrollo y contenido serán agradables y eficientes. Como puede ver, la herramienta principal para instalar es `npm` y le permite instalar muchas otras excelentes herramientas CLI orientadas a la web.