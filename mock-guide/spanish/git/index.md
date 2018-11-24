---
title: Git
localeTitle: ir
---
## Git

Git es un sistema de control de versiones distribuido de código abierto creado en 2005 por Linus Torvalds y otros de la comunidad de desarrollo de Linux. Git puede trabajar con muchos tipos de proyectos, pero se usa más comúnmente para el código fuente del software.

El control de versiones es un sistema que realiza un seguimiento de los cambios en un archivo o grupo de archivos a lo largo del tiempo. Cuando tiene un historial de estos cambios, le permite encontrar versiones específicas más adelante, comparar cambios entre versiones, recuperar archivos que haya eliminado o revertir archivos a versiones anteriores.

Un sistema de control de versiones _distribuido_ significa que diferentes usuarios mantienen sus propios repositorios de un proyecto, en lugar de trabajar desde un repositorio central. Los usuarios tienen automáticamente capacidades completas de seguimiento de archivos y el historial completo de la versión del proyecto sin necesidad de acceder a un servidor o red central.

Cuando Git se inicializa en el directorio de un proyecto, comienza a rastrear los cambios en los archivos y los almacena como "conjuntos de cambios" o "parches". Los usuarios que trabajan juntos en un proyecto envían sus conjuntos de cambios que luego se incluyen (o se rechazan) en el proyecto.

**Tabla de contenido**

*   [Comprender las tres secciones de un proyecto Git](#understand-the-three-sections-of-a-git-project)
*   [Instalar git](#install-git)
*   [Configurar el entorno Git](#configure-the-git-environment)
*   [Inicializar Git en un proyecto](#initialize-git-in-a-project)
*   [Obtén ayuda en Git](#get-help-in-git)
*   [Fuentes](#sources)
*   [Más información](#more-information)

### Comprender las tres secciones de un proyecto Git

Un proyecto Git tendrá las siguientes tres secciones principales:

1.  Directorio de git
2.  Directorio de trabajo (o árbol de trabajo)
3.  Área de ensayo

El **directorio de Git** (ubicado en `YOUR-PROJECT-PATH/.git/` ) es donde Git almacena todo lo que necesita para realizar un seguimiento preciso del proyecto. Esto incluye metadatos y una base de datos de objetos que incluye versiones comprimidas de los archivos del proyecto.

El **directorio de trabajo** es donde un usuario realiza cambios locales en un proyecto. El directorio de trabajo extrae los archivos del proyecto de la base de datos de objetos del directorio Git y los coloca en la máquina local del usuario.

El **área de preparación** es un archivo (también llamado "índice", "etapa" o "caché") que almacena información sobre lo que ingresará en su próxima confirmación. Un compromiso es cuando le dice a Git que guarde estos cambios en etapas. Git toma una instantánea de los archivos tal como son y almacena permanentemente esa instantánea en el directorio de Git.

Con tres secciones, hay tres estados principales en los que un archivo puede estar en un momento dado: confirmado, modificado o por etapas. Usted _modifica_ un archivo cada vez que lo modifica en su directorio de trabajo. A continuación, se _pone_ en _escena_ cuando lo mueves al área de preparación. Finalmente, se _compromete_ después de un commit.

### Instalar git

*   Ubuntu: `sudo apt-get install git`
*   Windows: [Descargar](https://git-scm.com/download/win)
*   Mac: [Descargar](https://git-scm.com/download/mac)

### Configurar el entorno Git

Git tiene una herramienta de `git config` que te permite personalizar tu entorno Git. Puede cambiar la apariencia y funciones de Git configurando ciertas variables de configuración. Ejecute estos comandos desde una interfaz de línea de comandos en su máquina (Terminal en Mac, Símbolo del sistema o PowerShell en Windows).

Hay tres niveles donde se almacenan estas variables de configuración:

1.  Sistema: ubicado en `/etc/gitconfig` , aplica la configuración predeterminada a todos los usuarios de la computadora. Para realizar cambios en este archivo, use la opción `--system` con el comando `git config` .
2.  Usuario: ubicado en `~/.gitconfig` o `~/.config/git/config` , aplica la configuración a un solo usuario. Para realizar cambios en este archivo, use la opción `--global` con el comando `git config` .
3.  Proyecto: ubicado en `YOUR-PROJECT-PATH/.git/config` , aplica la configuración solo al proyecto. Para realizar cambios en este archivo, use el comando `git config` .

Si hay configuraciones que entran en conflicto entre sí, las configuraciones de nivel de proyecto anularán las de nivel de usuario y las configuraciones de nivel de usuario anularán las de nivel de sistema.

Nota para los usuarios de Windows: Git busca el archivo de configuración de nivel de usuario ( `.gitconfig` ) en su directorio `$HOME` ( `C:\Users\$USER` ). Git también busca `/etc/gitconfig` , aunque es relativo a la raíz de MSys, que es donde usted decide instalar Git en su sistema Windows cuando ejecuta el instalador. Si está utilizando la versión 2.x o posterior de Git para Windows, también hay un archivo de configuración de nivel de sistema en `C:\Documents and Settings\All Users\Application Data\Git\config` en Windows XP y en `C:\ProgramData\Git\config` en Windows Vista y más reciente. Este archivo de configuración solo se puede cambiar con `git config -f FILE` como administrador.

#### Añada su nombre y correo electrónico

Git incluye el nombre de usuario y el correo electrónico como parte de la información en un compromiso. Querrá configurar esto bajo su archivo de configuración de nivel de usuario con estos comandos:

```shell
git config --global user.name "My Name" 
 git config --global user.email "myemail@example.com" 
```

#### Cambia tu editor de texto

Git usa automáticamente tu editor de texto predeterminado, pero puedes cambiarlo. Aquí hay un ejemplo para usar el editor Atom (la opción `--wait` le dice al shell que espere al editor de texto para que pueda hacer su trabajo antes de que el programa avance):

```shell
git config --global core.editor "atom --wait" 
```

#### Añadir color a la salida Git

Puedes configurar tu shell para agregar color a la salida de Git con este comando:

```shell
git config --global color.ui true 
```

Para ver todos sus ajustes de configuración, use el comando `git config --list` .

### Inicializar Git en un proyecto

Una vez que Git esté instalado y configurado en su computadora, debe inicializarlo en su proyecto para comenzar a usar sus poderes de control de versiones. En la línea de comandos, use el comando `cd` para navegar a la carpeta de nivel superior (o raíz) de su proyecto. A continuación, ejecute el comando `git init` . Esto instala una carpeta de directorio Git con todos los archivos y objetos que Git necesita para rastrear su proyecto.

Es importante que el directorio Git esté instalado en la carpeta raíz del proyecto. Git puede rastrear archivos en subcarpetas, pero no rastrear archivos ubicados en una carpeta principal relacionada con el directorio de Git.

### Obtén ayuda en Git

Si olvida cómo funciona cualquier comando en Git, puede acceder a la ayuda de Git desde la línea de comandos de varias maneras:

```shell
git help COMMAND 
 git COMMAND --help 
 man git-COMMAND 
```

Esto muestra la página de manual para el comando en su ventana de shell. Para navegar, desplácese con las teclas de flecha arriba y abajo o use los siguientes métodos abreviados de teclado:

*   `f` o `spacebar` a la página hacia adelante
*   `b` para volver a la página
*   `q` para dejar de fumar

### Fuentes

Este artículo utiliza información del libro [Pro Git](https://github.com/progit/progit2) , escrito por Scott Chacon y Ben Straub y publicado por Apress. El libro se muestra en su totalidad en la [documentación de Git](https://git-scm.com/book/en/v2) .

### Más información:

*   Para descargas, documentación y un tutorial basado en navegador: [sitio web oficial de Git](https://git-scm.com/)
*   La mayoría de los comandos útiles cuando estás en una situación GIT mala: [¡Oh, mierda, git!](http://ohshitgit.com/)