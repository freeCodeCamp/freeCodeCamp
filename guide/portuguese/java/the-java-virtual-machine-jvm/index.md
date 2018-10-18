---
title: Java Virtual Machine
localeTitle: Máquina Virtual JAVA
---
# A máquina virtual de Java (JVM)

Java pertence a uma família de linguagens chamadas [**Linguagens compiladas**](https://en.wikipedia.org/wiki/Compiled_language) . Qualquer código escrito em tal idioma precisa ser convertido (compilado) em um formato intermediário que pode ser entendido pela plataforma do host (o sistema operacional / plataforma no qual o código é executado).

Para Java, essa forma intermediária é chamada **Bytecode,** que é então interpretada por um tempo de execução chamado Java Virtual Machine (JVM). Pense na [**JVM**](https://docs.oracle.com/javase/specs/jvms/se7/html/) como um software que faz o trabalho pesado de executar seu código Java. Ele cuida da alocação de memória, gerenciamento de thread, coleta de lixo e muito mais. Além do Java, ele também suporta código (leia-se: capaz de executar) escrito em linguagens como Groovy, Scala etc.

Em Java, o código é gravado e salvo como arquivos `.java` . O compilador (javac) opera nos arquivos java e gera os arquivos Bytecode ( `.class` ) equivalentes. O comando `java` agora seria capaz de executar o Bytecode armazenado nos arquivos `.class` . Mais sobre isso depois.

As seções a seguir descrevem alguns dos blocos básicos de codificação em Java.