---
title: Using Vagrant for Your Work Envirioment
localeTitle: Usando Vagrant para tu entorno de trabajo
---
Las siguientes instrucciones lo ayudarán a instalar el software necesario y también a configurar su primer Vagrant y Virtual Box.

## Instalación

Esto creará un entorno de trabajo para que pueda probar su sitio web en su máquina local. El **Vagrantfile** puede configurarse para su entorno específico, de modo que cualquier persona que trabaje con usted pueda hacer y ver los cambios sin importar si usan Linux, Mac OS X o Windows. Al usar este entorno virtual, podrá ver cómo se ejecutan, construyen y trabajan sus scripts PHP con sus bases de datos, y mucho más. Así que, sin más ni menos, vamos al asunto.

Echa un vistazo a los siguientes enlaces e instala cada programa. Asegúrese de que coincida con su sistema operativo (sistema operativo).

*   [Caja virtual](https://www.virtualbox.org/)
*   [Vagabundo](https://www.vagrantup.com/downloads.html)
*   [Git Bash, Gui y Comando](https://git-scm.com/downloads)

Ahora que tenemos instalados los programas necesarios, vamos a trabajar.

**Git** tiene varios programas diferentes que podemos usar aquí. Vamos a abrir la **interfaz gráfica de usuario de Git** . También podemos iniciar **Virtual Box** para que podamos ver el cuadro ejecutándose.

Una vez que ejecute la **GUI de Git** , verá varias opciones. Vamos a seleccionar la opción superior, **"Crear nuevo repositorio"** .

Seleccione el botón **"Examinar"** y seleccione la unidad desde la que desea instalar y ejecutar su máquina / servidor virtual. Puede hacer clic derecho en el área de la carpeta y crear una nueva carpeta. Llamémoslo **FreeCodeCampMachine** .

Ahora, verá **Git Gui** y, junto al Directorio, debería ver **C: / FreeCodeCampMachine** .

En la parte inferior, seleccione el botón que dice **"Crear"** .

Ahora la interfaz se ve diferente. No te preocupes por ninguno de los botones en la parte inferior ni te asustes por todas las opciones en la parte superior. Queremos trabajar en una cosa. Seleccione la opción en la parte superior izquierda que dice **"Repositorio"** , luego, bajo esa opción, encontrará **"Git Bash"** . Seleccione **Git Bash** .

Ahora vemos que estamos en una ventana de terminal / consola. Debería ver el nombre de su computadora seguido de **MINGW64 / d / FreeCodeCampMachine (master)** . Simplemente dice que estamos operando en la carpeta que creó y que está en el repositorio **principal** . Más tarde crearemos una rama, pero vamos a preocuparnos por eso más tarde.

Ahora, vamos a lanzar algunos comandos hacia abajo y hacer rodar la pelota. Primero escribe lo siguiente y pulsa Enter:
```
$ git clone https://github.com/scotch-io/scotch-box myProject 
```

Esto creará una carpeta dentro de su directorio llamado **"myProject"** . A continuación, profundicemos en esa carpeta, así que ingrese los siguientes comandos y presione enter:
```
$ cd myProject 
```

Ahora estamos en la carpeta en la que queremos estar. Ahora escriba lo siguiente en la línea de comandos y presione Intro:
```
vagrant up 
```

Ahora, abramos una ventana del navegador e ingresemos la siguiente dirección IP:
```
http://192.168.33.10/ 
```

Debería ver una página de inicio para **Scotch Box** que le informa todo lo que está allí e instalado. Ahora, cuando busca en el archivo que creó anteriormente, encontrará uno que dice **"público"** . Dentro de esa carpeta, verá un archivo llamado **"index.php"** y eso es lo que ve en la página de destino. Puede editar ese archivo con un editor de texto, guardarlo y actualizar su navegador para ver sus cambios.