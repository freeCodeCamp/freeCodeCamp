---
title: Java Virtual Machine
localeTitle: máquina virtual de Java
---
# La máquina virtual de Java (JVM)

Java pertenece a una familia de lenguajes llamados lenguajes [**compilados**](https://en.wikipedia.org/wiki/Compiled_language) . Cualquier código escrito en dicho lenguaje debe convertirse (compilarse) en una forma intermedia que luego puede ser entendida por la plataforma del host (el sistema operativo / plataforma en la que se ejecuta el código).

Para Java, esta forma intermedia se llama **Bytecode,** que luego es interpretada por un tiempo de ejecución llamado Java Virtual Machine (JVM). Piense en [**JVM**](https://docs.oracle.com/javase/specs/jvms/se7/html/) como una pieza de software que hace el trabajo duro de ejecutar su código Java. Se ocupa de la asignación de memoria, la gestión de subprocesos, la recolección de basura y mucho más. Aparte de Java, también admite (leído: capaz de ejecutarse) código escrito en lenguajes como Groovy, Scala, etc.

En Java, el código se escribe y se guarda como archivos `.java` . El compilador (javac) opera en los archivos java y genera los archivos Bytecode ( `.class` ) equivalentes. El comando `java` ahora podría ejecutar el Bytecode almacenado en los archivos `.class` . Más sobre esto más adelante.

Las siguientes secciones describen algunos de los componentes básicos de la codificación en Java.