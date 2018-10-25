---
title: The Command Prompt
localeTitle: O prompt de comando
---
## O prompt de comando

Como uma das Interfaces de usuário (UI) mais antigas, o _prompt de comando_ (também conhecido como _shell_ , _terminal_ , _console_ , _tty_ ) foi implementado de várias maneiras.

Isso levou algumas palavras a serem usadas de forma intercambiável em conversas modernas que na verdade têm significados ligeiramente diferentes.

* * *

> Índice

*   [Uma história muito curta](#a-very-very-short-history)
*   [Hoje](#today)
*   [A concha](#the-shell)
*   [BATER](#bash)
*   [Conseguindo ajuda](#getting-help)
*   [O prompt](#the-prompt)
*   [Obtendo Raiz](#getting-root)
*   [entrar](#login)
*   [sudo](#sudo)
*   [su](#su)
*   [Caminhos Relativos e Absolutos](#relative-and-absolute-paths)
*   [Relativo](#relative)
*   [Absoluto](#absolute)
*   [Opções de Comando](#command-options)
*   [Comandos de Encadeamento](#chaining-commands)
*   [Trabalhos em segundo plano](#background-jobs)

* * *

### Uma história muito curta

No século 19 foi o [telégrafo](https://en.wikipedia.org/wiki/Electrical_telegraph) . Isso permitiu que duas pessoas trocassem mensagens codificadas por longas distâncias. Mais tarde, os avanços tecnológicos levaram à [máquina de teletipo](https://en.wikipedia.org/wiki/Teleprinter) (tty), onde a pessoa que recebeu a mensagem foi substituída por uma espécie de impressora.

Ao mesmo tempo, os primeiros computadores, como o ENIAC, eram programados com algum tipo de hardware, como switches, dials ou patch cables. À medida que os computadores avançavam, era necessário um melhor Input / Output (IO), e assim as máquinas de teletipo comumente disponíveis eram convertidas para uso.

Porque os tty's eram grandes peças de mobília por conta própria, e ganharam o nome **console** por suas semelhanças com outros móveis de chão, como televisores de console. Como um ponto final eletrônico para um mainframe, esses dispositivos também eram chamados de **terminais** .

As impressoras TTY foram eventualmente substituídas por telas CRT (Cathode Ray Tube), que também eram usadas em televisores antes que o LCD e o plasma estivessem disponíveis. Curiosamente, os computadores Linux modernos ainda podem ser controlados usando uma máquina tty!

> Clique na imagem abaixo para ir para um pequeno vídeo do Youtube.

[![](https://i.ytimg.com/vi/-Ul-f3hPJQM/hqdefault.jpg)](https://youtu.be/-Ul-f3hPJQM)

* * *

### Hoje

Hoje, os usuários de Linux e Unix ainda usam os mesmos termos, mas com pequenas diferenças. Terminais reais e virtuais estão disponíveis, e terminais virtuais podem ser acessados ​​usando Alt + Ctrl + \[F1-F12\] .

Em Graphical User Environments (GUI), os usuários podem acessar o prompt de comando usando um **emulador de terminal** , que fornece os recursos de um tty, mas dentro de uma janela. Existem muitos emuladores de terminal disponíveis para usuários do Linux, como **xterm** , **kterm** e **rxvt** .

Os disponíveis dependerão de qual distribuição do Linux (distro, para abreviar) você está usando e seus padrões. Verifique seu gerenciador de pacotes para instalar outros. Usuários do Windows podem usar o **PuTTY** ou outros utilitários para se conectarem a um sistema Linux.

### A concha

_Shell_ s são programas que interpretam comandos.

Há um número deles, como [**B** ourne **A,** ganho **SH** ell](https://www.gnu.org/software/bash/) (BASH), [C Shell](https://docs.freebsd.org/44doc/usd/04.csh/paper.html) (csh / tcsh) e [Z SHell](http://zsh.sourceforge.net/) (zsh).

#### BATER

O shell padrão mais comum no Linux é o BASH, mas cada usuário pode alternar temporária ou permanentemente para qualquer outro shell disponível. O shell é totalmente programável por script, o que significa que conceitos de programação podem ser combinados com utilitários de shell e de sistema para criar funções mais complicadas.

Os comandos inseridos em um prompt de comando podem ser incorporados ao shell, como **cd** , **exit** ou **export** .

Eles também podem vir de programas externos e, no caso da maioria das distribuições Linux, são fornecidos pelas [ferramentas](https://www.gnu.org/software/coreutils/coreutils.html) do [Gnu](https://www.gnu.org/software/coreutils/coreutils.html) .

Veja abaixo os comandos mais comuns.

| Comando | Uso | | -------- | ----------------------------------------- | | `cd` | mudar o diretório atual | | `ls` | lista de arquivos no diretório atual | | `mv` | mover arquivos e diretórios | | `man` | documentação de comando aberto | | `mkdir` | faça um diretório | | `rmdir` | excluir um diretor | | `touch` | crie um arquivo vazio | | `rm` | remova arquivos | | `ln` | criar links para arquivos e diretórios | | `chown` | alterar a propriedade de arquivos e diretórios | | `chmod` | alterar permissões | | `find` | localizar arquivos | | `cat` | grava arquivos na saída padrão | | `less` | permite rolagem de entrada padrão | | `grep` | busca por correspondências em texto simples | | `diff` | mostre diferenças entre arquivos | | `passwd` | mude sua senha |

#### Conseguindo ajuda

A ajuda imediata está disponível para comandos em um ou mais lugares.

Adicione `--help` após o comando.

Isso imprime informações de uso para o comando.

Sua saída é semelhante ao comando `man` , mas `man` é usado antes do comando para o qual você deseja o manual.

O comando `info` é a terceira opção de ajuda e é usado como o `man` .

```bash
ls --help 
 
 man ls 
 
 info ls 
```

### O prompt

O prompt, que é o bit de texto no shell à esquerda do cursor, pode ser alterado para mostrar seu status atual, como o diretório em que você está atualmente, em qual usuário você está logado, o nome do seu computador e o _que privilégios que você tem_ .

Esse último é importante reconhecer. Geralmente o último caractere no prompt, você verá um `$` , que indica os privilégios normais do usuário.

Se você tiver privilégios de **root** , que pertencem ao administrador do sistema, normalmente verá um `#` como último caractere. Ao navegar em fóruns e obter ajuda on-line, os comandos que você deve digitar geralmente serão exibidos com esse caractere.

**Você não precisa digitar!**

Por exemplo:

```bash
$ ls -l 
```

significa que você digita `ls -l` em um prompt normal.

```bash
# apt-get install node 
```

significa que você digita o `apt-get install node` usando privilégios de administrador. Como você eleva seus privilégios depende da sua distribuição Linux.

### Obtendo Raiz

#### entrar

Fazer o login como root é uma _péssima ideia_ . É por isso que algumas versões do Linux desabilitam a capacidade dos usuários de fazer o log dessa maneira. Esses usuários são encorajados a usar o próximo método, `sudo` , dentro de sua própria conta de usuário.

Se você precisar usar um console raiz, esteja ciente de seu poder. Você não será avisado ou solicitado a confirmar a maioria das tarefas, mesmo que um erro de digitação simples signifique excluir algo importante.

#### sudo

Adicione "sudo" antes de um comando para mudar para **S** uper **U** ser e **DO** (SUDO). É assim que o Ubuntu e seus derivados são configurados para permitir acesso de administrador, e é dado por comando.

Você não recebe um shell de root e o próximo comando que você digitar não terá privilégios elevados, a menos que você use o `sudo` novamente.

```bash
sudo apt-get update 
```

Exceto pelo primeiro usuário criado em certas distros, os usuários precisam ser adicionados a uma lista especial (encontrada em `/etc/sudoers` ) para usar o sudo.

Isso é feito com o comando `visudo` .

Você nunca deve editar o arquivo `sudoers` com um editor de texto regular!

`visudo` garante que você não se tranque do seu próprio sistema.

#### su

`su` , como o `sudo` , permite que você mude para outro usuário, exceto que, por padrão, você receberá outro prompt como o usuário para o qual você alternou.

Por si próprio, o `su` levará para um prompt root, mas com as variáveis ​​de ambiente do usuário atual, como `$HOME` para sua pasta pessoal, e `$PATH` para o caminho do sistema.

Isso pode levar a resultados inesperados e, se você quiser usar `su` para alternar para outro usuário, adicione um hífen após o comando:

```bash
su - 
```

Isso mudará você totalmente para um prompt de root.

Um nome de usuário pode ser adicionado ao comando para alternar para esse usuário, mas exigirá a senha desse usuário.

`sudo` pode ser usado em combinação com `su` para permitir que um administrador mude para qualquer usuário.

```bash
myUser@linux $ su - otherUsername 
 Password: (typed my password) 
 su: Authentication failure 
 
 myUser@linux $ sudo su - otherUsername 
 Password: (typed my password) 
 otherUsername@Linux $ 
```

### Caminhos Relativos e Absolutos

Ao usar um comando em um arquivo, como copiar ou excluir, você pode consultar o arquivo de duas maneiras.

#### Relativo

Localização do arquivo em relação ao diretório atual.

Existem dois operadores de caminho relativos no shell `.` e `..`

O primeiro `.` significa o diretório atual, então `cat file.txt` e `cat ./file.txt` são a mesma coisa se file.txt estiver no diretório atual.

O outro é `..` e significa um diretório para cima na árvore.

Então, se você está em `/home/user/projects/project-a` e emite o comando `cd ..` você mudará para `/home/user/projects` .

Se o diretório de projetos tiver subdiretórios chamados `project-a` , `project-b` , `project-c` e você estivesse no diretório `project-a` , você poderia alternar para `project-b` usando `cd ../project-b` .

Há também uma `environment variable` no shell chamada `$HOME` que aponta para o seu diretório pessoal.

Você pode usar isso no BASH usando um caractere til `~` .

O shell substitui o til para você quando você aperta enter, então, por exemplo, você pode mudar para sua própria pasta pessoal usando `cd ~` .

#### Absoluto

As localizações dos arquivos são o caminho completo da raiz do sistema de arquivos e sempre têm uma barra inicial.

Por exemplo, `cd /home/quincy/Desktop` irá para o diretório desktop do Quincy, independentemente do caminho atual ou do usuário logado.

### Opções de Comando

A maioria dos comandos shell segue a mesma sintaxe, que é o **arquivo de opções de comando** .

```bash
ls -l *.txt 
```

Onde

*   `ls` fornece uma lista de arquivos e diretórios,
*   `-l` muda a saída de `ls` para uma lista longa,
*   e `*.txt` restringe a lista a arquivos terminados em `.txt` .

Cada comando tem opções diferentes e várias opções podem ser listadas juntas, como no exemplo `tar -cvf` na próxima seção.

Comandos individuais podem ser conectados juntos em uma cadeia, onde a saída de um comando se torna a entrada para outro comando.

Isso é feito com o `|` personagem, muitas vezes chamado de **pipe** ou **bar** . Este não é um I maiúsculo ou minúsculo L, nem é o número 1. Nos teclados dos EUA, ele é encontrado em uma das teclas perto de Enter .

No exemplo a seguir, usarei 2 comandos.

O primeiro, `cat` , é curto para concatenar, e pode ser usado para colocar o conteúdo de um arquivo no final de outro (concatenação!). Ao usá-lo com apenas um arquivo, ele grava o conteúdo no terminal.

O segundo comando, `grep` , é um programa que produz texto encontrado com base em alguma entrada e um padrão de busca. O padrão de pesquisa pode ser um texto simples ou uma expressão regular (regex) para pesquisas mais avançadas.

```bash
cat index.html | grep img 
```

Existem várias maneiras de fazer isso, mas isso gerará todas as linhas em index.html que contenham `img` no terminal. Este exemplo usa apenas um `|` , mas você não está limitado a isso.

### Comandos de Encadeamento

Enquanto o operador de `&` comercial único `&` é um operador de controle de trabalho na BASH (próxima seção), o duplo comercial tem outro significado. É lógico **AND** , e você o usa entre dois comandos para que o segundo comando seja executado somente se o primeiro sair com êxito (sem erro).

O exemplo a seguir mostra quantos usuários Debian e Ubuntu atualizam sua lista de softwares e, em seguida, executam uma atualização do sistema.

```bash
sudo apt-get update && sudo apt-get dist-upgrade 
```

Outra opção é o tubo duplo `||` , o que significa **OR** lógica. Você o usaria quando quiser executar um comando somente quando o primeiro sair com um erro.

A seguir, você criará um arquivo chamado `project.tar` na área de trabalho do usuário a partir dos arquivos em um diretório de projeto e, se isso falhar, ecoará uma mensagem.

```bash
tar -cvf /home/user/Desktop/project.tar /home/user/project/* || echo "archive failed" 
```

### Trabalhos em segundo plano

Quando você executa um comando em um terminal, o terminal fica ocupado até que o comando seja concluído e nenhum outro comando possa ser executado. Existe um sistema de controle de tarefas no Linux que permite suspender os comandos em execução, retomar os comandos suspensos em segundo plano e retomar os comandos suspensos no primeiro plano.

Isso é útil para scripts de execução longa ou quando você precisa enviar algo para o segundo plano para que o terminal possa ser usado para outras coisas.

o suspender um programa que está sendo executado no terminal use a combinação de teclas Ctrl + Z.

Você retornará ao seu prompt normal e o comando parecerá ter parado. Não tem, mas só foi suspenso. Ainda é visível na lista de `jobs` usando o comando `jobs` para listar todos os jobs atualmente rastreados. Eu fiz o `man ls` para obter uma página de manual e, em seguida, suspendi-lo.

Quando digito `jobs` , recebo a seguinte saída:

```bash
$ jobs 
 
 [1]  + suspended  man ls 
```

A partir daqui, posso deixá-lo retomar em segundo plano, digitando `bg %1` onde o `1` é o número do trabalho encontrado nos colchetes.

Eu posso trazê-lo de volta para o primeiro plano digitando `fg %1` .