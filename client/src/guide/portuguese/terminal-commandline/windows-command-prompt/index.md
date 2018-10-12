---
title: Windows Command Prompt
localeTitle: Prompt de Comando do Windows
---# Usando o prompt de comando no Windows

Windows, MacOS e Linux possuem interfaces de linha de comando. A linha de comando padrão do Windows é o prompt de comando. O prompt de comando permite que os usuários usem seu computador sem apontar e clicar com um mouse. O prompt de comando é uma tela preta na qual os usuários digitam comandos para usar o computador. As mesmas tarefas que podem ser feitas apontando e clicando com um mouse também podem ser feitas com o prompt de comando. A diferença é que muitas tarefas, como criar pastas e excluir arquivos, podem ser feitas mais rapidamente no prompt de comando. Além disso, permite que os usuários configurem seu computador e executem programas que, de outra forma, não poderiam fazer apontando e clicando.

## Abrindo o prompt de comando

Para acessar o prompt de comando, clique no menu Iniciar do Windows na barra de ferramentas da área de trabalho (você também pode pressionar o botão do Windows no teclado), digite `cmd` e pressione `enter` . O prompt de comando irá aparecer, ele irá exibir algum texto como segue abaixo: \`\` \` C: \\ Users \\ YourUserName>
```
## Navigating Directories (Moving through folders) 
 `C:\Users\YourUserName` is called your current working directory (directory is another way to say folder). It is like a street address that tells you where you are on your computer. The current working directory can be a guide as you navigate through your computer. On the right of the `>` we can type `cd`, which stands for Change Directory, and the name of a directory that you want to navigate to. In this case we will type `Documents`. Enter `cd Documents` and your current working directory should look like the following: 
```

C: \\ Users \\ YourUserName \\ Documents>
```
To go back one directory type and enter `cd..`. Your current working directory should return to this: 
```

C: \\ Users \\ YourUserName>
```
With the `cd` and `cd ..` commands you can move back and forth through directories. This might seem very basic at first but as you learn more commands the command prompt will become a very useful and efficient tool. 
 
 ## Here is a list of common commands: 
 | Command | Description  | 
 |---------|--------------| 
 |`help`   |Lists commands that can be used| 
 |  `dir`  |Lists the current directories contents| 
 |`dir /a` |Shows hidden files| 
 | `mkdir` |Creates a new directory| 
 | `rmdir` |Deletes a directory (if empty)| 
 | `rmdir /s`|Deletes a folder and its contents 
 | `cls`  |Clears the command prompt screen 
 | `exit`|Closes the command prompt 
 
 ## Usage Examples: 
 #### Making a Directory 
```

mkdir nome _do_ _diretório que_ você _quer_ fazer\_make
```
#### Getting Info on a Command 
```

your\_command /?
```
#### Deleting a File and Contents 
```

rm / s nome _do_ diretório _que você_ _deseja_ excluir \`\` \`

## Dicas úteis:

*   O comando `Ipconfig` mostra o endereço IP do seu computador
*   Se você digitar parte do nome de um diretório e pressionar a tecla `tab` o prompt de comando completará o preenchimento automático e se você pressionar a tecla `tab` repetidamente, ele percorrerá os diretórios que começam com a mesma letra.
*   Você pode usar outros shells ou ferramentas como git bash ou cmder para adicionar mais comandos e funcionalidades ao seu prompt de comando
*   Algumas tarefas requerem que você execute o prompt de comando como um administrador clicando no botão do Windows e digitando `cmd admin` e pressione a tecla `enter`
*   Se você souber que o caminho para um arquivo ou diretório pode digitar `cd PATH_TO_YOUR_DIRECTORY` vez de alterar os diretórios várias vezes para obter um diretório ou arquivo
*   Quando você apertar a tecla de seta para cima, seu comando previamente digitado aparecerá e se você bater repetidamente, ele passará por todos os seus comandos digitados anteriormente.