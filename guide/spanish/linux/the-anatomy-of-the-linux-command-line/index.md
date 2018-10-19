---
title: The Anatomy of the Linux Command Line
localeTitle: La anatomía de la línea de comandos de Linux
---
# La anatomía de la línea de comandos de Linux

En este mundo tecnológico de interfaz gráfica de usuario (GUI), muchos usuarios de computadoras encuentran la idea de ingresar comandos de texto (en una línea de comandos o terminal) para llevar a cabo funciones básicas como repulsivas, y es mejor dejarlas para los programadores o Desarrolladores (de hecho geeks).

Afortunadamente, la interfaz de línea de comandos (CLI) es el rey en el mundo de Linux. Aunque muchas distribuciones de linux vienen con GUI intuitivas y bien pulidas, para una experiencia de Linux óptima, uno todavía necesita familiarizarse con el CLI de Linux (el terminal o shell) para poder realizar operaciones informáticas esenciales de manera rápida y limpia.

La línea de comandos sigue desempeñando roles muy importantes en la vida del usuario de Linux y de la suya también si decide usarla.

En Linux, los comandos son dados (escritos) en el terminal. Aunque la aplicación de terminal puede tener nombres variados en diferentes distribuciones de linux (distribuciones), pero la mayoría de las veces se llama simplemente "terminal" o un término estrechamente relacionado.

Para comenzar a usar abrir el terminal (para Ubuntu, simplemente mantenga presionado Ctrl + Alt + T) y será recibido por una serie de caracteres organizados en este formato;

```linux
user_name@machine_name:~$ 
```

Puede ver una línea de comandos que termina con un indicador de shell que parpadea, lo que significa que el shell está listo para recibir comandos del usuario.

*   El **_"_** nombre de usuario **_"_** representa el nombre de inicio de sesión.
    
*   El **_"nombre de la máquina"_** (también conocido como el nombre de dominio) es el nombre asignado a la computadora (o servidor) y generalmente se establece durante la instalación. A veces también podría estar representado por una dirección IP.
    
*   El signo de tilde **_"~"_** muestra que el directorio actual del usuario es su "home" `(/home/user_name)` .
    
    *   Tenga en cuenta que cada usuario en un sistema Linux tiene un directorio HOME creado para ellos y este directorio principal siempre tiene el mismo nombre con el nombre de inicio de sesión (o nombre de usuario) del usuario. Es decir, si el nombre de inicio de sesión es "john", entonces su directorio de inicio sería / home / john. Al iniciar sesión, cada usuario es llevado directamente a su directorio de inicio.

Desde el terminal de comando puedes comenzar a dar comando al shell. Se pueden dar múltiples comandos en una sola línea de comando usando un punto y coma para separarlos. Algo como esto;

`user_name@machine_name:~$ who; free; df`

Pero la mayoría de las veces, para garantizar una salida limpia, es recomendable ingresar los comandos uno por uno para no agrupar la pantalla.

Finalmente, cabe destacar que GNU / Linux es compatible con una gran cantidad de shells o terminales como pueden ser `bash` (suele ser la utiliza por defecto), `sh`, `ksh`, `csh`, `zsh`, etc. Cada una de ellas ofrece una serie de características propias que facilitan la introducción de comandos.
Para saber que shell estamos utilizando podemos teclear el siguiente comando:

`user_name@machine_name:~$ echo $0`
