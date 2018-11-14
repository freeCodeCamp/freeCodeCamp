---
title: Mac OS Terminal
localeTitle: Mac OS Terminal
---
# Usando o terminal no Mac OS

Na maioria das vezes, os usuários interagem através de uma interface gráfica do usuário para interagir com o computador. Você usa o mouse para apontar e clicar para abrir, mover ou criar novos arquivos ou abrir aplicativos. Mas você também pode usar o aplicativo Terminal para interagir com sua máquina por meio de comandos escritos. Quando você usa o terminal, ele permite que você se aprofunde e personalize de uma forma que não é possível através da GUI.

### Abrindo o Terminal e Navegando em Diretórios

Seu terminal existe no diretório de aplicativos. Abra seu aplicativo Terminal. Você deve ver um prompt na janela do terminal. Ele deve ter o nome do computador (Macbook da ABC), seguido pelo nome do usuário (ABC) e, em seguida, um '$'. Se você estiver no diretório raiz, o último caractere será um '#'.

Para ver em qual diretório você está trabalhando, basta digitar o comando

`pwd`

pwd significa "Imprimir Diretório de Trabalho". Diretório é outra palavra para pasta.

Se você quiser listar o conteúdo do seu diretório, use o comando:

`ls`

Para mudar para um novo diretório, use o comando:

`cd`

que significa diretório de mudança.

Aqui está uma lista de comandos comuns:

Comando | Uso ------------ | ------------- pwd | Imprimir diretório de trabalho (onde estou?) ls | Listar o conteúdo do diretório atual mkdir | Crie um novo diretório toque | Crie um novo arquivo cp | Copie um arquivo rm | Remover um arquivo rm -rf | Remover um diretório

### Exemplos de uso

Alguns dos comandos acima mencionados não são claros sem exemplos. Abaixo estão alguns exemplos de uso para ajudar a fornecer algum contexto.

#### Fazendo um diretório

`mkdir #YOUR-NEW-FOLDER-NAME-HERE`

#### Fazendo um arquivo

`touch YOUR-FILE-NAME.JS`

Você pode criar um arquivo com qualquer extensão que você escolher. Contanto que esteja em um formato aceito pela pasta ou máquina.

#### Copiando um arquivo

Use a seguinte sintaxe para copiar um arquivo do terminal:

**_destino de_ _origem_ cp**

Por exemplo, se tivermos um arquivo, _'test.txt',_ armazenado em nosso diretório _/ Desktop_ e quisermos copiá-lo para a pasta _/ Documents_ , nosso comando ficará assim:
```
cp ~/Desktop/test.txt ~/Documents 
```

#### Excluindo um arquivo

Use a seguinte sintaxe para excluir um arquivo

**rm _#PATH_ TO _FILE_**