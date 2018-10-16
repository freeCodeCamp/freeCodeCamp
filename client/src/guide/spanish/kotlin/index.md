---
title: Kotlin
localeTitle: Kotlin
---
**¿Qué es Kotlin?**

[Kotlin](https://kotlinlang.org/) es un lenguaje de programación desarrollado por [Jetbrains](https://www.jetbrains.com) , la compañía detrás de algunos de los IDEs más populares del mundo, como IntelliJ y Pycharm.

Sirve como un reemplazo para Java y se ejecuta en la JVM. Ha estado en desarrollo durante casi 6 años y llegó a 1.0 hace apenas un año.

La comunidad de desarrolladores ha abrazado a Kotlin hasta tal punto que Google anunció soporte de primera clase para el lenguaje para desarrollo de Android en [Google I / O 2017](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/) .

## Versión

A partir de este escrito, la última versión estable de Kotlin pasa a ser la [versión 1.2.71](https://blog.jetbrains.com/kotlin/2018/09/kotlin-1-2-70-is-out/)

## Instalación

Antes de continuar con las instrucciones de instalación de Kotlin, debe asegurarse de haber configurado la configuración de **JDK (Java Development Kit)** en su sistema.

Si no tiene JDK instalado en su computadora, diríjase a la **sección de Instalación** en [este enlace para aprender](https://guide.freecodecamp.org/java) cómo configurarlo.

Kotlin trabaja con **JDK 1.6+,** así que asegúrese de obtener la versión correcta instalada. Una vez que haya terminado de configurar JDK, continúe con los siguientes pasos.

*   \## IDEA IntelliJ La forma más rápida de ejecutar Kotlin en sus máquinas es usarlo junto con **IntelliJ IDEA** . Este es el IDE recomendado para Kotlin debido al soporte de herramientas proporcionado por Jetbrains. Puedes obtener la [Edición comunitaria](http://www.jetbrains.com/idea/download/index.html) de IntelliJ desde [JetBrains](https://www.jetbrains.com) .

Una vez que haya instalado IntelliJ, básicamente puede comenzar con su primer proyecto en Kotlin sin ninguna configuración adicional.

Cree un **nuevo proyecto** y asegúrese de seleccionar el módulo Java. Seleccione la casilla de verificación Kotlin en esa pantalla

![nueva pantalla de proyecto](https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png)

Asigne un nombre a su proyecto y haga clic en Finalizar.

![nombre del proyecto](https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png)

Ahora irá al editor principal, donde verá los archivos de su proyecto organizados de la siguiente manera.

![estructura del proyecto](https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png)

Para verificar su instalación, cree un nuevo archivo Kotlin en la carpeta **src** y asígnele el nombre de **aplicación** (o cualquier otra cosa que le convenga)

![estructura del proyecto](https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png)

Una vez que haya creado el archivo, escriba el siguiente código de Hello World. No se preocupe si no tiene sentido de inmediato, se tratará en detalle más adelante en la guía.

\`\` \` diversión principal (args: Array ) { println ("¡Hola mundo!") }
```
![project structure ](https://kotlinlang.org/assets/images/tutorials/getting-started/hello_world.png) 
 
 You can now run this program by either clicking on the Kotlin icon on the gutter (left side of your editor with line numbers) 
 
 ![hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_default.png) 
 
 If everything goes fine, you should see the message Hello World! in your Run window as shown below 
 
 ![run window ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_window.png) 
 
 
 
 * ## Eclipse 
 
 While IntelliJ is the recommended IDE for developing with Kotlin, it is definitely not the only option out there. **Eclipse** happens to be another popular IDE of choice among Java developers and Kotlin is supported by Eclipse as well. 
 
 After setting up the **JDK** on your system, follow the instructions below. 
 
 Download <a href='https://www.eclipse.org/downloads/'>**Eclipse Neon** </a>for your operating system and once you have successfully installed it on your system, download the **Kotlin Plugin** for Eclipse from the <a href='http://marketplace.eclipse.org/content/kotlin-plugin-eclipse'>**Eclipse Marketplace**</a>. 
 
 ![eclipse marketplace ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/marketplace.png) 
 
 ***NOTE: You can also do the same by going into Help -> Eclipse Marketplace and then search for Kotlin Plugin*** 
 
 Once, the plugin is installed you are pretty much done but it would be a good idea to take the IDE for a spin with a quick Hello World sample. 
 
 Create a new Kotlin Project by clicking on File -> New -> Kotlin Project 
 
 ![new kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/new-project.png) 
 
 An empty project will be created with a directory structure quite similar to a Java project. It would look something like this 
 
 ![empty kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/empty-project.png) 
 
 Go ahead and create a new Kotlin file in the **src** folder 
 
 Once that is done go ahead and type out the following code. Don't worry if it does not make sense right now, it will be covered later in the guide. 
```

diversión principal (args: Array ) { println ("¡Hola mundo!") }
```
![eclipse hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/hello-world.png) 
 
 Now that you are done typing out the Hello World code, go ahead and run it. To run the file, right click anywhere inside the editor and click on ***Run As -> Kotlin Application*** 
 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/run-as.png) 
 
 If all goes well, the console window would open to show you the output. 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/output.png) 
 
 * ## Using the standalone compiler on the terminal 
 If you are someone who prefers doing things in a more manual way and do not want to tie yourself down to an editor/IDE you might wanna use the Kotlin compiler. 
 
 ### Downloading the compiler 
 
 With every release of Kotlin, Jetbrains ship a standalone compiler which can be downloaded from the <a href='https://github.com/JetBrains/kotlin/releases/tag/v1.1.51'>GitHub releases</a>. Version 1.1.51 happens to be the latest at the time of this writing. 
 
 
 </br> 
 
 **Manual Installation** 
 
 Once you have downloaded the compiler you need to unzip it and proceed with the standard installation using the installation wizard. Adding the **bin** directory to the system path is an optional step. It contains the scripts that are necessary to compile and run Kotlin on Windows, Linux and macOS. 
 
 </br> 
 
 **Installation via Homebrew** 
 
 You can install the compiler on macOS using <a href='http://brew.sh/'>Homebrew </a>which is a package manager for macOS. Launch the Terminal app and issue the following commands 
```

actualización de $ brew $ brew instalar kotlin
```
**Installation via SDKMAN!** 
 
 Another simple way of installing the Kotlin compiler on macOS, Linux, Cygwin, FreeBSD and Solaris is by using <a href='http://sdkman.io/'>SDKMAN!</a>. Launch the terminal and issue the following commands 
```

$ curl -s https://get.sdkman.io | bash\`\`\`

Siga las instrucciones en pantalla y una vez SDKMAN! Es el problema de configuración el comando siguiente dentro del terminal

`$ sdk install kotlin`

Al igual que con todas las opciones de instalación anteriores, sería una buena idea probar la ejecución de la instalación.

Abra un editor de texto de su elección y escriba un programa básico de Kotlin que figura a continuación.
```
fun main(args: Array<String>) { 
    println("Hello, World!") 
 } 
```

Guarde este archivo con una extensión **.kt** . Ahora estás listo para compilarlo y ver los resultados. Para ello, ejecute el siguiente comando

`$ kotlinc hello.kt -include-runtime -d hello.jar`

La opción `-d` le dice al compilador cómo quiere que se llame la salida. La opción `-include-runtime` hace que el archivo .jar resultante sea autónomo y se pueda ejecutar al incluir la biblioteca de tiempo de ejecución Kotlin en él.

Si no hubo errores de compilación, ejecute la aplicación con el siguiente comando

`$ java -jar hello.jar`

Si todo va bien, deberías ver **Hello World!** impreso en su pantalla de terminal
```
$ java -jar hello.jar 
 Hello, World! 
```

Enhorabuena, ha configurado con éxito el compilador y el entorno de desarrollo Kotlin en su sistema. Cubriremos todas las complejidades y partes divertidas de Kotlin en esta guía, pero puede obtener una ventaja si lo desea yendo al sitio web de [Try Kotlin](https://try.kotlinlang.org/) y repasando los ejercicios allí.

## Documentación

Una de las mejores cosas de Kotlin es su documentación completa y bien estructurada. Incluso si eres nuevo en la programación, te encontrarás en casa con los documentos. Hacen un trabajo bastante asombroso al ponerlo todo de una manera bien estructurada. Puedes consultar la documentación oficial en [este enlace](https://kotlinlang.org/docs/reference/) .