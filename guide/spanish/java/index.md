---
title: Java
localeTitle: Java
---
**¿Que es Java?**

[Java](https://www.oracle.com/java/index.html) es un lenguaje de programación desarrollado por [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) en 1995, que más tarde fue adquirido por [Oracle](http://www.oracle.com/index.html) . Ahora es una plataforma completa con muchas API estándar, API de código abierto, herramientas, gran comunidad de desarrolladores y se utiliza para crear las soluciones empresariales más confiables por parte de grandes y pequeñas empresas por igual. [El](https://www.android.com/) desarrollo de aplicaciones para [Android](https://www.android.com/) se realiza completamente con Java y su ecosistema. Para saber más sobre Java, lee [esto](https://java.com/en/download/faq/whatis_java.xml) y [esto](http://tutorials.jenkov.com/java/what-is-java.html) .

## Versión

La última versión es [Java 11](http://www.oracle.com/technetwork/java/javase/overview) , que fue lanzada en 2018 con [varias mejoras](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html) respecto a la versión anterior, Java 10. Pero para todos los propósitos, usaremos Java 8 en este wiki para todos los tutoriales.

Java también se divide en varias "Ediciones":

*   [SE](http://www.oracle.com/technetwork/java/javase/overview/index.html) - Edición estándar - para aplicaciones de servidor de escritorio y autónomas
*   [EE](http://www.oracle.com/technetwork/java/javaee/overview/index.html) - Enterprise Edition - para desarrollar y ejecutar componentes Java que se ejecutan incrustados en un servidor Java
*   [ME](http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html) - Micro Edition - para desarrollar y ejecutar aplicaciones Java en teléfonos móviles y dispositivos integrados

## Instalación: ¿JDK o JRE?

Descarga los últimos binarios de Java desde el [sitio web oficial](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) . Aquí puede hacer frente a una pregunta, ¿cuál descargar, JDK o JRE? JRE significa Java Runtime Environment, que es la máquina virtual Java dependiente de la plataforma para ejecutar códigos Java, y JDK significa Java Development Kit, que consiste en la mayoría de las herramientas de desarrollo, lo más importante, el compilador `javac` y también el JRE. Entonces, para un usuario promedio, JRE sería suficiente, pero como estaríamos desarrollando con Java, descargaríamos el JDK.

## Instrucciones de instalación específicas de la plataforma.

### Windows

*   Descargue el archivo [.msi](https://en.wikipedia.org/wiki/Windows_Installer) relevante (x86 / i586 para 32 bits, x64 para 64 bits)
*   Ejecute el archivo .msi. ¡Es un archivo ejecutable autoextraíble que instalará Java en su sistema!

### Linux

*   Descargue el archivo [tar.gz](http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/) relevante para su sistema e instálelo:

`bash $ tar zxvf jdk-8uversion-linux-x64.tar.gz`

*   [Las plataformas Linux basadas en RPM](https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based) descargan el archivo [.rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager) relevante e instalan:

`bash $ rpm -ivh jdk-8uversion-linux-x64.rpm`

*   Los usuarios tienen la opción de instalar una versión de código abierto de Java, OpenJDK o Oracle JDK. Si bien OpenJDK está en desarrollo activo y sincronizado con Oracle JDK, solo difieren en materia de [licencias](http://openjdk.java.net/faq/) . Sin embargo, pocos desarrolladores se quejan de la estabilidad de Open JDK. Instrucciones para **Ubuntu** :

Instalación abierta de JDK:  
`bash sudo apt-get install openjdk-8-jdk`

Instalación de Oracle JDK:  
`bash sudo add-apt-repository ppa:webupd8team/java sudo apt-get update sudo apt-get install oracle-java8-installer`

### Mac

*   Descargue el ejecutable .dmg de Mac OSX desde las descargas de Oracle
*   O use [Homebrew](http://brew.sh/) para [instalar](http://stackoverflow.com/a/28635465/2861269) :

`bash brew tap caskroom/cask brew install brew-cask brew cask install java`

### Verificar la instalacion

Verifique que Java se haya instalado correctamente en su sistema abriendo el símbolo del sistema (Windows) / Windows Powershell / Terminal (Mac OS y \* Unix) y verifique las versiones de Java runtime y compilador:
```
$ java -version 
 java version "1.8.0_66" 
 Java(TM) SE Runtime Environment (build 1.8.0_66-b17) 
 Java HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode) 
 
 $ javac -version 
 javac 1.8.0_66 
```

**Sugerencia** : si recibe un error como "Comando no encontrado" en `java` o `javac` o en ambos, no se asuste, es solo que su sistema PATH no está configurado correctamente. Para Windows, vea [esta respuesta de StackOverflow](http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command) o [este artículo](http://javaandme.com/) sobre cómo hacerlo. También hay guías para [Ubuntu](http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu) y [Mac](http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/) también. Si aún no puedes resolverlo, no te preocupes, ¡solo pregúntanos en nuestra [sala de Gitter](https://gitter.im/FreeCodeCamp/java) !

## JVM

Bien, ya que hemos terminado con las instalaciones, comencemos a entender primero el meollo del ecosistema de Java. Java es un lenguaje [interpretado y compilado](http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language) , es decir, el código que escribimos se compila a bytecode y se interpreta para ejecutarse. Escribimos el código en archivos .java, Java las compila en un [código de bytes](https://en.wikipedia.org/wiki/Java_bytecode) que se ejecutan en una máquina virtual Java o JVM para su ejecución. Estos códigos de bytes suelen tener una extensión .class.

Java es un lenguaje bastante seguro ya que no permite que su programa se ejecute directamente en la máquina. En su lugar, su programa se ejecuta en una máquina virtual llamada JVM. Esta máquina virtual expone varias API para interacciones de máquina de bajo nivel que puede realizar, pero aparte de eso, no puede jugar explícitamente con las instrucciones de la máquina. Esto añade una gran ventaja de seguridad.

Además, una vez que se haya compilado su bytecode, se puede ejecutar en cualquier máquina virtual Java. Esta máquina virtual depende de la máquina, es decir, tiene diferentes implementaciones para Windows, Linux y Mac. Pero su programa está garantizado para ejecutarse en cualquier sistema gracias a esta máquina virtual. Esta filosofía se llama ["Escribe una vez, corre en cualquier lugar"](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) .

## Hola Mundo!

Vamos a escribir una muestra de la aplicación Hello World. Abra cualquier editor / IDE de su elección y cree un archivo `HelloWorld.java` .
```
public class HelloWorld { 
 
    public static void main(String[] args) { 
        // Prints "Hello, World" to the terminal window. 
        System.out.println("Hello, World"); 
    } 
 
 } 
```

**NB ¡** Tenga en cuenta que el nombre del archivo Java debe ser **exactamente el mismo nombre de la clase pública** para poder compilar!

Ahora abre el terminal / Símbolo del sistema. Cambie su directorio actual en el terminal / Símbolo del sistema al directorio donde se encuentra su archivo. Y compila el archivo:
```
$ javac HelloWorld.java 
```

Ahora ejecuta el archivo usando el comando `java` !
```
$ java HelloWorld 
 Hello, World 
```

Felicidades Tu primer programa Java se ha ejecutado con éxito. Aquí solo estamos imprimiendo una cadena que pasa a la API `System.out.println` . Cubriremos todos los conceptos en el código, ¡pero puede echar un [vistazo más de cerca](https://docs.oracle.com/javase/tutorial/getStarted/application/) ! Si tiene alguna duda o necesita ayuda adicional, no dude en contactarnos en cualquier momento en nuestra [sala de chat de Gitter](https://gitter.im/FreeCodeCamp/java) .

## Documentación

Java está muy [documentado](https://docs.oracle.com/javase/8/docs/) , ya que soporta enormes cantidades de API. Si está utilizando algún IDE importante, como Eclipse o IntelliJ IDEA, encontrará la documentación de Java incluida.

Además, aquí hay una lista de IDE gratuitos para la codificación de Java:

*   [NetBeans](https://netbeans.org/)
*   [Eclipse](https://eclipse.org/)
*   [IntelliJ IDEA](https://www.jetbrains.com/idea/features/)
*   [Android Studio](https://developer.android.com/studio/index.html)
*   [Azul](https://www.bluej.org/)
*   [edito](http://www.jedit.org/)
*   [Oracle JDeveloper](http://www.oracle.com/technetwork/developer-tools/jdev/overview/index-094652.html)