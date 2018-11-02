---
title: Writing a Bash Script
localeTitle: Escrevendo um Script Bash
---
# Escrevendo um Script Bash

Digitando comandos na linha de comando do Linux, você pode dar instruções ao servidor para realizar algumas tarefas simples. Como o inferno O script é uma maneira de reunir uma série de instruções para tornar isso mais fácil. Scripts Shell se tornam ainda mais poderosos quando você adiciona lógica como `if` e `while` para controlar automaticamente como elas se comportam à medida que as circunstâncias mudam.

## O que é Bash?

Bash é o nome de um interpretador de linha de comando, um programa que faz sentido dos comandos do Linux que você insere no comando prompt, ou no seu script.

## O que há em um script?

Um script é apenas um arquivo. Um script básico é composto de uma linha introdutória que informa ao servidor o que fazer dele e ou mais instruções para executar. Aqui está um exemplo:
```
#!/bin/bash 
 echo "Hi. I'm your new favorite bash script." 
```

A primeira linha tem um significado especial, que discutiremos abaixo. A segunda linha é apenas um comando do Linux, que você pode digitar na linha de comando.

## O que é um comentário?

Comentários são textos adicionados ao seu script que você pretende ignorar. Os comentários começam com um sinal de libra e são úteis para anotando seu código para que você e outros usuários possam entendê-lo. Para adicionar um comentário, digite o caractere `#` , seguido por qualquer texto isso é útil para você. Bash irá ignorar o `#` e tudo depois dele.

**Nota:** a primeira linha do script não é um comentário. Esta linha é sempre a primeira, sempre começa com `#!` e tem especial significando bash.

Aqui está o script de antes, comentou:
```
#!/bin/bash # Designates the path to the bash program. Must start with '#!' (but isn't a comment). 
 echo "Hi. I'm your new favorite bash script." # 'echo' is a program that sends a string to the screen. 
```

## Executando um Script

Você pode abrir um editor de texto, colar esse código de exemplo e salvar o arquivo, e você tem um script. Scripts são convencionalmente chamado terminando em '.sh', então você pode salvar esse código como myscript.sh.

O script não será executado até que você faça duas coisas:

**Primeiro, torne-o executável.** (Nós só temos que fazer isso uma vez.) O Linux depende bastante de permissões de arquivos. Eles determinam muito sobre como seu servidor se comporta. Há muito a saber sobre permissões, mas por enquanto só precisamos saber isso: você não pode executar o seu script até que você tenha permissões de execução. Para faça isso, digite:

`chmod +x my script.sh`

**Segundo, corra.** Nós executamos o script a partir da linha de comando, como qualquer outro comando, como `ls` ou `date` . O roteiro name é o comando, e você precisa precedê-lo com um './' quando você o chama:

`./myscript.sh # Outputs "Hi. I'm your new favorite bash script." (This part is a comment!)`

## Condicionais

Às vezes você quer que seu script faça alguma coisa somente se alguma outra coisa for verdadeira. Por exemplo, imprima uma mensagem apenas se um valor for abaixo de um certo limite. Aqui está um exemplo de usar `if` para fazer isso:
```
#!/bin/bash 
 
 count=1 # Create a variable named count and set it to 1 
 
 if [[ $count -lt 11 ]]; then # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block. 
    echo "$count is 10 or less" # This will print, because count = 1. 
 fi # Every if ends with fi 
```

Da mesma forma, podemos organizar o script para que ele execute uma instrução apenas enquanto algo for verdadeiro. Vamos mudar o código para que o valor da variável count muda:
```
#!/bin/bash 
 
 count=1 # Create a variable named count and set it to 1 
 
 while [[ $count -lt 11 ]]; do # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block. 
    echo "$count is 10 or less" # This will print as long as count <= 10. 
    count=$((count+1)) # Increment count 
 done # Every while ends with done 
```

A saída desta versão do myscript.sh ficará assim:
```
"1 is 10 or less" 
 "2 is 10 or less" 
 "3 is 10 or less" 
 "4 is 10 or less" 
 "5 is 10 or less" 
 "6 is 10 or less" 
 "7 is 10 or less" 
 "8 is 10 or less" 
 "9 is 10 or less" 
 "10 is 10 or less" 
```

## Scripts do mundo real

Esses exemplos não são muito úteis, mas os princípios são. Usando `while` , `if` e qualquer comando que você possa digitar manualmente, você pode criar scripts que fazem um trabalho valioso.