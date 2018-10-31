---
title: Windows Command Prompt
localeTitle: Prompt de Comando do Windows
---

# Usando o prompt de comando no Windows

Windows, MacOS e Linux possuem interfaces de linha de comando. A linha de comando padrão do Windows é o prompt de comando. O prompt de comando permite que os usuários usem seu computador sem apontar e clicar com um mouse. O prompt de comando é uma tela preta na qual os usuários digitam comandos para usar o computador. As mesmas tarefas que podem ser feitas apontando e clicando com um mouse também podem ser feitas com o prompt de comando. A diferença é que muitas tarefas, como criar pastas e excluir arquivos, podem ser feitas mais rapidamente no prompt de comando. Além disso, permite que os usuários configurem seu computador e executem programas que, de outra forma, não poderiam fazer apontando e clicando.

## Abrindo o prompt de comando

Para acessar o prompt de comando, clique no menu Iniciar do Windows na barra de ferramentas da área de trabalho (você também pode pressionar o botão do Windows no teclado), digite `cmd` e pressione `enter` . O prompt de comando irá aparecer, ele irá exibir algum texto como segue abaixo: \`\` \` C: \\ Users \\ YourUserName>

## Entrando em diretórios (Andando entre pastas) 
 `C:\Users\YourUserName` é seu diretório atual (diretório é uma outra maneira de dizer pasta). É como um endereço de rua que mostra onde você está em seu computador. O atual diretório é um guia de como você navegar por ele. Na direita do `>` podemos digitar `cd`, que significa Mudar Diretório, e o nome do diretório que você quer navegar. Nesse caso, iremos digitar `cd Documents` e seu atual diretório deverá se parecer com isso:
`C: \\ Users \\ YourUserName \\ Documents>`

Retorne um diretório digitando `cd..`. Seu atual diretório agora deverá ser isso:

`C: \\ Users \\ YourUserName>`

Com os comandos `cd` e `cd ..`, você pode andar fora e dentro dos diretórios. Isso parece ser básico e início, porém quanto mais você aprende os comandos do prompt, mais isso se tornará útil para você fazer coisas de maneira rápida e eficiente.
 
 ## Lista de comandos comuns: 
 | Comando | Descrição  | 
 |---------|--------------| 
 |`help`   |Lista os comandos que podem ser usados| 
 |  `dir`  |Lista o conteúdo do diretório atual| 
 |`dir /a` |Mostra arquivos ocultos| 
 | `mkdir` |Cria novo diretório| 
 | `rmdir` |Deleta um diretorio (se vazio)| 
 | `rmdir /s`|Deleta uma pasta e seu conteúdo| 
 | `cls`  |Limpa a tela do prompt de comando|
 | `exit`|Fecha o prompt de comando|
 
## Exemplos de uso: 
#### Criando diretório
` mkdir nome _do_ _diretório que_ você _quer_ fazer\_make `
#### Conseguindo informações sobre comando
` your\_command /? `
#### Deletando diretório e seu conteúdo 
` rm / s nome _do_ diretório _que você_ _deseja_ excluir \`\` \`

## Dicas úteis:

*   O comando `Ipconfig` mostra o endereço IP do seu computador
*   Se você digitar parte do nome de um diretório e pressionar a tecla `tab` o prompt de comando completará o preenchimento automático e se você pressionar a tecla `tab` repetidamente, ele percorrerá os diretórios que começam com a mesma letra.
*   Você pode usar outros shells ou ferramentas como git bash ou cmder para adicionar mais comandos e funcionalidades ao seu prompt de comando
*   Algumas tarefas requerem que você execute o prompt de comando como um administrador clicando no botão do Windows e digitando `cmd admin` e pressione a tecla `enter`
*   Se você souber que o caminho para um arquivo ou diretório pode digitar `cd PATH_TO_YOUR_DIRECTORY` vez de alterar os diretórios várias vezes para obter um diretório ou arquivo
*   Quando você apertar a tecla de seta para cima, seu comando previamente digitado aparecerá e se você bater repetidamente, ele passará por todos os seus comandos digitados anteriormente.
