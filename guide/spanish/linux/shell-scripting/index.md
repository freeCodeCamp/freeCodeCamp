---
title: Shell scripting
localeTitle: Shell scripting
---
# Shell scripting

En la línea de comandos, un script de shell es un archivo ejecutable que contiene un conjunto de instrucciones que el shell ejecutará. Su principal objetivo es reducir. un conjunto de instrucciones (o comandos) en un solo archivo. También puede manejar Alguna lógica porque es un lenguaje de programación.

## Como crearlo

1) Crea el archivo:

```bash
$ touch myscript.sh 
```

2) Agrega un [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) al inicio del archivo. La línea Shebang es responsable de permitir que el intérprete de comandos sepa con qué intérprete se ejecutará el script de shell:

```bash
$ echo "#!/bin/bash" > myscript.sh 
 # or 
 $ your-desired-editor myscript.sh 
 # write at the first line #!/bin/bash 
```

3) Agrega algunos comandos:

```bash
$ echo "echo Hello World!" >> myscript.sh 
```

4) Dar el modo de _ejecución de_ archivo:

```bash
$ chmod +x myscript.sh 
```

5) ¡Ejecutalo!

```bash
$ ./myscript.sh 
 Hello World! 
```

Más información sobre shell-scripting se puede encontrar [aquí](https://www.shellscript.sh/)