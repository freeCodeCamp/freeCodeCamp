---
title: The Command Prompt
localeTitle: El símbolo del sistema
---
## El símbolo del sistema

Como una de las interfaces de usuario (UI) más antiguas, el _símbolo del sistema_ (también conocido como _shell_ , _terminal_ , _console_ , _tty_ ) se ha implementado de muchas maneras.

Esto ha llevado a que algunas palabras se usen indistintamente en las conversaciones modernas que en realidad tienen significados ligeramente diferentes.

* * *

> Tabla de contenido

*   [Una historia muy, muy corta](#a-very-very-short-history)
*   [Hoy](#today)
*   [La cáscara](#the-shell)
*   [GOLPETAZO](#bash)
*   [Obteniendo ayuda](#getting-help)
*   [El aviso](#the-prompt)
*   [Obtención de la raíz](#getting-root)
*   [iniciar sesión](#login)
*   [sudo](#sudo)
*   [su](#su)
*   [Rutas relativas y absolutas](#relative-and-absolute-paths)
*   [Relativo](#relative)
*   [Absoluto](#absolute)
*   [Opciones de comando](#command-options)
*   [Comandos de encadenamiento](#chaining-commands)
*   [Trabajos de fondo](#background-jobs)

* * *

### Una historia muy, muy corta

En el siglo XIX fue el [telégrafo](https://en.wikipedia.org/wiki/Electrical_telegraph) . Esto permitió que dos personas intercambiaran mensajes codificados en largas distancias. Los avances tecnológicos posteriores llevaron a la [máquina de teletipo](https://en.wikipedia.org/wiki/Teleprinter) (tty), donde la persona requerida para recibir el mensaje fue reemplazada por un tipo de impresora.

Al mismo tiempo, las primeras computadoras como ENIAC se programaban con algún tipo de hardware, como interruptores, diales o cables de conexión. A medida que las computadoras avanzaban, se necesitaba una mejor entrada / salida (IO), y así las máquinas de teletipo comúnmente disponibles se convirtieron para su uso.

Debido a que los tty eran muebles grandes por sí mismos, ganaron la **consola de** nombres por sus similitudes con otros muebles de pie, como los televisores de consola. Como punto final electrónico para un mainframe, estos dispositivos también se denominaron **terminales** .

Las impresoras TTY finalmente fueron reemplazadas por pantallas de tubos de rayos catódicos (CRT), que también se usaron en televisores antes de que estuvieran disponibles las pantallas LCD y de plasma. Curiosamente, las computadoras modernas de Linux todavía pueden ser controladas usando una máquina tty!

> Haga clic en la imagen de abajo para ir a un breve video de Youtube.

[![](https://i.ytimg.com/vi/-Ul-f3hPJQM/hqdefault.jpg)](https://youtu.be/-Ul-f3hPJQM)

* * *

### Hoy

Hoy en día, los usuarios de Linux y Unix siguen usando los mismos términos, pero con pequeñas diferencias. Se dispone de terminales reales y virtuales, y se puede acceder a los terminales virtuales utilizando Alt + Ctrl + \[F1-F12\] .

En los entornos de usuario gráficos (GUI), los usuarios pueden acceder al símbolo del sistema utilizando un **emulador de terminal** , que proporciona las características de un tty, pero dentro de una ventana. Hay muchos emuladores de terminal disponibles para usuarios de Linux, como **xterm** , **kterm** y **rxvt** .

Los que estén disponibles dependerán de la distribución de Linux (distro, para abreviar) que está utilizando, y sus valores predeterminados. Compruebe su gestor de paquetes para instalar otros. Los usuarios de Windows pueden usar **PuTTY** u otras utilidades para conectarse a un sistema Linux.

### La cáscara

_Los shell_ s son programas que interpretan comandos.

Hay varios de ellos, como [**B** ourne **A** gain **SH** ell](https://www.gnu.org/software/bash/) (BASH), [C Shell](https://docs.freebsd.org/44doc/usd/04.csh/paper.html) (csh / tcsh) y [Z SHell](http://zsh.sourceforge.net/) (zsh).

#### GOLPETAZO

El shell predeterminado más común en Linux es BASH, pero cada usuario puede cambiar temporal o permanentemente a cualquier otro shell disponible. El shell es completamente programable, lo que significa que los conceptos de programación se pueden combinar con las utilidades del shell y del sistema para crear funciones más complicadas.

Los comandos ingresados ​​en un símbolo del sistema pueden estar integrados en el shell, como **cd** , **exit** o **export** .

También pueden provenir de programas externos, y en el caso de la mayoría de las distribuciones de Linux, las [herramientas de Gnu](https://www.gnu.org/software/coreutils/coreutils.html) las proporcionan.

Vea a continuación los comandos más comunes.

| Comando | Uso |
| -------- | ----------------------------------------- |
| `cd` | cambiar directorio actual |
| `ls` | lista de archivos en el directorio actual |
| `mv` | mover archivos y directorios |
| `man` | abrir documentación de comando |
| `mkdir` | hacer un directorio |
| `rmdir` | borrar un director |
| `touch` | crear un archivo vacío |
| `rm` | eliminar archivos |
| `ln` | crear enlaces a archivos y directorios | | `chown` cambiar propiedad de archivos y directorios | | `chmod` cambiar permisos | | `find` | localizar archivos | | `cat` | escribe archivos a la salida estándar | | `less` | Permite el desplazamiento de entrada estándar | | `grep` | buscar coincidencias en texto plano | | `diff` | Mostrar diferencias entre archivos | | `passwd` cambia tu contraseña |

#### Obteniendo ayuda

La ayuda inmediata está disponible para comandos en uno o más lugares.

Agregue `--help` después del comando.

Esto imprime información de uso para el comando.

Su salida es similar al comando `man` , pero `man` se usa antes del comando para el que desea el manual.

El comando `info` es la tercera opción de ayuda, y se usa como `man` .

```bash
ls --help 
 
 man ls 
 
 info ls 
```

### El aviso

El indicador, que es el bit de texto en el shell a la izquierda del cursor, puede cambiar para mostrar su estado actual, por ejemplo, en qué directorio está actualmente, en qué usuario está registrado, el nombre de su computadora y _qué privilegios que tienes_ .

Eso último es importante reconocerlo. Por lo general, el último carácter en el indicador, verá un `$` , que indica los privilegios de usuario normal.

Si tiene privilegios de **root** , que pertenecen al administrador del sistema, generalmente verá un `#` como último carácter. Al navegar por los foros y obtener ayuda en línea, los comandos que debe escribir a menudo se mostrarán con este carácter.

**No tienes que escribirlo!**

Por ejemplo:

```bash
$ ls -l 
```

significa que escribe `ls -l` en un aviso normal.

```bash
# apt-get install node 
```

significa que usted escribe `apt-get install node` usando privilegios de administrador. Cómo elevar sus privilegios depende de su distribución de Linux.

### Obtención de la raíz

#### iniciar sesión

Entrar como root es una _muy mala idea_ . Es por esto que algunas versiones de Linux deshabilitan la capacidad de los usuarios para iniciar sesión de esta manera. Se recomienda a esos usuarios que utilicen el siguiente método, `sudo` desde su propia cuenta de usuario.

Si tiene que usar una consola raíz, tenga en cuenta su poder. No se le advertirá ni se le pedirá que confirme para la mayoría de las tareas, incluso si un simple error tipográfico significa eliminar algo importante.

#### sudo

Agregue "sudo" antes de un comando para cambiar a **S** uper **U** ser y **DO** (SUDO). Esta es la forma en que Ubuntu y sus derivados se configuran para permitir el acceso de los administradores, y se dan por orden.

No se le asigna un shell de root, y el siguiente comando que escriba no tendrá privilegios elevados, a menos que use `sudo` nuevamente.

```bash
sudo apt-get update 
```

Excepto por el primer usuario creado en ciertas distribuciones, los usuarios deben agregarse a una lista especial (que se encuentra en `/etc/sudoers` ) para poder utilizar sudo.

Esto se hace con el comando `visudo` .

¡Nunca debes editar el archivo `sudoers` con un editor de texto normal!

`visudo` se asegurará de que no se bloquee de su propio sistema.

#### su

`su` , al igual que `sudo` , le permite cambiar a otro usuario, excepto que, de forma predeterminada, recibirá otra solicitud como el usuario al que cambió.

Por sí solo, `su` cambiará a una solicitud de raíz, pero con las variables de entorno del usuario actual, como `$HOME` para su carpeta de inicio y `$PATH` para la ruta del sistema.

Esto puede llevar a resultados inesperados, y si desea usar `su` para cambiar a otro usuario, agregue un guión después del comando:

```bash
su - 
```

Esto lo cambiará completamente a un indicador de raíz.

Se puede agregar un nombre de usuario al comando para cambiar a ese usuario, pero se requerirá la contraseña de ese usuario.

`sudo` se puede usar en combinación con `su` para permitir que un administrador cambie a cualquier usuario.

```bash
myUser@linux $ su - otherUsername 
 Password: (typed my password) 
 su: Authentication failure 
 
 myUser@linux $ sudo su - otherUsername 
 Password: (typed my password) 
 otherUsername@Linux $ 
```

### Rutas relativas y absolutas

Cuando utilice un comando en un archivo, como copiar o eliminar, puede referirse al archivo de una de las dos maneras.

#### Relativo

Ubicación del archivo en relación con el directorio actual.

Hay dos operadores de ruta relativa dentro de la cáscara, `.` y `..`

La primera `.` significa el directorio actual, por lo que `cat file.txt` y `cat ./file.txt` son lo mismo si file.txt está en el directorio actual.

El otro es `..` , y significa un directorio arriba en el árbol.

Entonces, si está en `/home/user/projects/project-a` y ejecuta el comando `cd ..` cambiará a `/home/user/projects` .

Si el directorio de proyectos tiene subdirectorios denominados `project-a` , `project-b` , `project-c` , y usted estaba en el directorio `project-a` , podría cambiar a `project-b` usando `cd ../project-b` .

También hay una `environment variable` en el shell llamada `$HOME` que apunta a su directorio de inicio.

Puedes usar esto en BASH usando un carácter de tilde `~` .

El shell reemplaza la tilde para usted cuando pulsa enter, por lo que, como ejemplo, puede cambiar a su propia carpeta de inicio usando `cd ~` .

#### Absoluto

Las ubicaciones de los archivos son la ruta completa desde la raíz del sistema de archivos y siempre tienen una barra diagonal inicial.

Por ejemplo, `cd /home/quincy/Desktop` irá al directorio de escritorio de Quincy, independientemente de la ruta actual o del usuario que haya iniciado sesión.

### Opciones de comando

La mayoría de los comandos de shell siguen la misma sintaxis, que son los **archivos de opciones de comando** .

```bash
ls -l *.txt 
```

dónde

*   `ls` da una lista de archivos y directorios,
*   `-l` cambia la salida de `ls` a un listado largo,
*   y `*.txt` restringe la lista a los archivos que terminan con `.txt` .

Cada comando tiene diferentes opciones, y varias opciones pueden enumerarse juntas, como en el ejemplo de `tar -cvf` en la siguiente sección.

Los comandos individuales se pueden conectar juntos en una cadena, donde la salida de un comando se convierte en la entrada a otro comando.

Esto se hace con el `|` Personaje, a menudo llamado **pipa** o **barra** . Esto no es una capital I o L minúscula, ni es el número 1. En los teclados de los EE. UU., Se encuentra en una de las teclas cercanas a Enter .

En el siguiente ejemplo, usaré 2 comandos.

El primero, `cat` , es la abreviatura de concatenar, y se puede usar para poner el contenido de un archivo al final de otro (¡concatenación!). Cuando se usa con un solo archivo, escribe el contenido en el terminal.

El segundo comando, `grep` es un programa que genera el texto encontrado en función de alguna entrada y un patrón de búsqueda. El patrón de búsqueda puede ser un texto simple o una expresión regular (expresión regular) para búsquedas más avanzadas.

```bash
cat index.html | grep img 
```

Hay muchas maneras de hacer esto, pero esto generará cada línea en index.html que contiene `img` al terminal. Este ejemplo solo usa uno `|` , pero no estás limitado a eso.

### Comandos de encadenamiento

Mientras que el operador de signo único `&` es un operador de control de trabajo en BASH (siguiente sección), el símbolo de doble y tiene otro significado. Es **Y** lógico, y lo usa entre dos comandos para que el segundo comando solo se ejecute si el primero sale con éxito (sin error).

El siguiente ejemplo es cuántos usuarios de Debian y Ubuntu actualizan su lista de software y luego ejecutan una actualización del sistema.

```bash
sudo apt-get update && sudo apt-get dist-upgrade 
```

Otra opción es el doble tubo `||` , lo que significa **OR** lógico. Lo usaría cuando quiera ejecutar un comando solo cuando el primero salga con un error.

Lo siguiente creará un archivo llamado `project.tar` en el escritorio del usuario a partir de los archivos en el directorio de un proyecto y, si eso falla, aparecerá un mensaje.

```bash
tar -cvf /home/user/Desktop/project.tar /home/user/project/* || echo "archive failed" 
```

### Trabajos de fondo

Cuando ejecuta un comando en un terminal, el terminal está ocupado hasta que el comando finaliza, y no se puede ejecutar ningún otro comando. Hay un sistema de control de trabajos en Linux que le permite suspender los comandos en ejecución, reanudar los comandos suspendidos en segundo plano y reanudar los comandos suspendidos en primer plano.

Esto es útil para los scripts de ejecución prolongada, o cuando necesita insertar algo en el fondo para que el terminal se pueda usar para otras cosas.

o suspender un programa que se esté ejecutando en el terminal use la combinación de teclas Ctrl + Z.

Volverá a su solicitud normal y el comando parece haberse cerrado. No ha sido, pero solo ha sido suspendido. Todavía está visible en la lista de `jobs` mediante el comando de `jobs` para enumerar todos los trabajos seguidos actualmente. Hice `man ls` para obtener una página de manual y luego la suspendí.

Cuando escribo `jobs` obtengo el siguiente resultado:

```bash
$ jobs 
 
 [1]  + suspended  man ls 
```

Desde aquí, puedo dejar que se reanude en segundo plano escribiendo `bg %1` donde `1` es el número de trabajo que se encuentra entre corchetes.

Puedo volver a ponerlo en primer plano escribiendo `fg %1` .
