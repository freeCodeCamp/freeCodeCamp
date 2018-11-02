---
title: Shell scripting
localeTitle: Scripts de shell
---
# Scripts de shell

Na linha de comando, um script de shell é um arquivo executável que contém um conjunto de instruções que o shell irá executar. Seu principal objetivo é reduzir um conjunto de instruções (ou comandos) em apenas um arquivo. Também pode manipular alguma lógica, porque é uma linguagem de programação.

## Como criá-lo

1) Crie o arquivo:

```bash
$ touch myscript.sh 
```

2) Adicione um [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) no início do arquivo. A linha Shebang é responsável por deixar o interpretador de comandos saber com qual interpretador o script de shell será executado:

```bash
$ echo "#!/bin/bash" > myscript.sh 
 # or 
 $ your-desired-editor myscript.sh 
 # write at the first line #!/bin/bash 
```

3) Adicione alguns comandos:

```bash
$ echo "echo Hello World!" >> myscript.sh 
```

4) Dê o modo de _execução de_ arquivo:

```bash
$ chmod +x myscript.sh 
```

5) Execute-o!

```bash
$ ./myscript.sh 
 Hello World! 
```

Mais informações sobre shell-scripting podem ser encontradas [aqui](https://www.shellscript.sh/)