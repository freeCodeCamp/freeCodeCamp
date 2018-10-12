---
title: Bash
localeTitle: Bater
---
## O que é o Bash?

Bash (abreviação de Bourne Again SHell) é um shell Unix e um interpretador de linguagem de comando. Um shell é simplesmente um processador de macros que executa comandos. É o shell mais usado empacotado por padrão para a maioria das distribuições do Linux, e um sucessor para o shell Korn (ksh) e o shell C (csh).

Muitas coisas que podem ser feitas sistema operacional Linux pode ser feito via linha de comando. Alguns exemplos são…

*   Editando arquivos
*   Ajustando o volume do sistema operacional
*   Buscando páginas da web da internet
*   Automatizando o trabalho que você faz todos os dias

Você pode ler mais sobre o bash [aqui](https://www.gnu.org/software/bash/) , através da [Documentação GNU](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents) , e através do [guia tldp](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10) .

## Usando o bash na linha de comando (Linux, OS X)

Você pode começar a usar o bash na maioria dos sistemas operacionais Linux e OS X abrindo um terminal. Vamos considerar um simples exemplo de hello world. Abra o seu terminal e escreva a seguinte linha (tudo depois do sinal $):
```
zach@marigold:~$ echo "Hello world!" 
 Hello world! 
```

Como você pode ver, usamos o comando echo para imprimir a string "Hello world!" para o terminal.

## Escrevendo um script bash

Você também pode colocar todos os seus comandos bash em um arquivo .sh e executá-los a partir da linha de comando. Digamos que você tenha um script bash com o seguinte conteúdo:
```
#!/bin/bash 
 echo "Hello world!" 
```

Vale a pena notar que a primeira linha do script começa com `#!` . É uma diretiva especial que o Unix trata de maneira diferente.

#### Por que usamos o #! / Bin / bas no início do arquivo de script?

Isso é porque é uma convenção deixar o shell interativo saber que tipo de interpretador executar para o programa que segue. A primeira linha diz ao Unix que o arquivo deve ser executado por / bin / bash. Esta é a localização padrão do shell Bourne em praticamente todos os sistemas Unix. Adicionando #! / Bin / bash como a primeira linha do seu script, o sistema operacional invoca o shell especificado para executar os comandos que seguem o script. `#!` é frequentemente referido como "hash-bang", "she-bang" ou "sha-bang". Embora seja executado somente se você executar seu script como um executável. Por exemplo, quando você digita `./scriptname.extension` , ele examinará a linha superior para descobrir o interpretador, enquanto, executando o script como `bash scriptname.sh` , a primeira linha será ignorada.

Então você poderia executar o script da seguinte forma: Para tornar o arquivo executável você deve chamar este comando sob sudo chmod + x "filename".
```
zach@marigold:~$ ./myBashScript.sh 
 Hello world! 
```

O script tem apenas duas linhas. O primeiro indica qual interpretador usar para executar o arquivo (neste caso, bash). A segunda linha é o comando que queremos usar, echo, seguido do que queremos imprimir, que é "Hello World".

Às vezes, o script não será executado e o comando acima retornará um erro. É devido às permissões definidas no arquivo. Para evitar esse uso:
```
zach@marigold:~$ chmod u+x myBashScript.sh 
```

\` E então execute o script.

### Mais Informações:

*   Wikipedia: https://en.wikipedia.org/wiki/Bash _(_ shell _Unix_ )
*   tldp.org Guia para Bash: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc2
*   gnu.org Manual de Bash: https://www.gnu.org/software/bash/manual/html _node / index.html # SEC_ Conteúdo
*   Tutorial de scripts da Shell para começar: https://www.shellscript.sh/