---
title: Git
localeTitle: ir
---
## Git

Logo do Git:  
![alt text](https://git-scm.com/images/logos/logomark-orange@2x.png "Logo do Git")
 
O Git é um sistema de controle de versão distribuído de código aberto criado em 2005 por Linus Torvalds e outros da comunidade de desenvolvimento Linux. O Git pode trabalhar com muitos tipos de projetos, mas é mais comumente usado para código-fonte de software.

O controle de versão é um sistema que controla as alterações em um arquivo ou grupo de arquivos ao longo do tempo. Quando você tem um histórico dessas alterações, ele permite que você localize versões específicas mais tarde, compare as alterações entre as versões, recupere arquivos que você tenha excluído ou reverta arquivos para versões anteriores.

Um sistema de controle de versão _distribuído_ significa que usuários diferentes mantêm seus próprios repositórios de um projeto, em vez de trabalharem a partir de um repositório central. Os usuários têm automaticamente capacidades completas de rastreamento de arquivos e o histórico completo da versão do projeto, sem precisar de acesso a um servidor central ou rede.

Quando o Git é inicializado em um diretório de projeto, ele começa a rastrear as alterações do arquivo e as armazena como "conjuntos de alterações" ou "correções". Os usuários que trabalham juntos em um projeto enviam seus conjuntos de alterações que são incluídos (ou rejeitados) no projeto.


Exemplo de um sistema de controle de versão distribuído:  
![alt text](https://git-scm.com/figures/18333fig0103-tn.png "sistema de controle de versão distribuído")


**Índice**

*   [Entenda as três seções de um projeto Git](#understand-the-three-sections-of-a-git-project)
*   [Instalar o Git](#install-git)
*   [Configurar o ambiente do Git](#configure-the-git-environment)
*   [Inicializar o Git em um projeto](#initialize-git-in-a-project)
*   [Obtenha ajuda no Git](#get-help-in-git)
*   [Fontes](#sources)
*   [Mais Informações](#more-information)

### Entenda as três seções de um projeto Git

Um projeto Git terá as seguintes três seções principais:

1.  Diretório Git
2.  Diretório de trabalho (ou árvore de trabalho)
3.  Área de preparação

O **diretório Git**, ou em inglês, **git directory, também chamado de repository** (localizado em `YOUR-PROJECT-PATH/.git/` ) é onde o Git armazena tudo o que precisa para rastrear com precisão o projeto. Isso inclui metadados e um banco de dados de objetos que inclui versões compactadas dos arquivos de projeto.

O **diretório de trabalho**, ou em inglês, **working directory** é onde o usuário faz alterações locais em um projeto. O diretório de trabalho extrai os arquivos do projeto do banco de dados de objetos do diretório Git e os coloca na máquina local do usuário.

A **área temporária**, ou em inglês, **staging area** é um arquivo (também chamado de "index", "stage" ou "cache") que armazena informações sobre o que irá para o seu próximo commit. Um commit é quando você diz ao Git para salvar essas mudanças em etapas. O Git tira um instantâneo dos arquivos como estão e armazena permanentemente o instantâneo no diretório Git.

Com três seções, há três estados principais em que um arquivo pode estar em um determinado momento: confirmado, modificado ou testado. Você _modifica_ um arquivo sempre que fizer alterações nele em seu diretório de trabalho. Em seguida, é _preparado_ quando você o move para a área de preparação. Finalmente, é _confirmado_ após um commit.

As três seções do Git:  
![alt text](https://git-scm.com/figures/18333fig0106-tn.png "As três seções do Git")
 
### Instalar o Git

*   Ubuntu: `sudo apt-get install git`
*   Windows: [Download](https://git-scm.com/download/win)
*   Mac: [Download](https://git-scm.com/download/mac)

### Configurar o ambiente do Git

O Git possui uma ferramenta de `git config` que permite personalizar seu ambiente Git. Você pode mudar a aparência e funcionamento do Git definindo certas variáveis ​​de configuração. Execute esses comandos a partir de uma interface de linha de comando em sua máquina (Terminal no Mac, Prompt de Comando ou Powershell no Windows).

Existem três níveis de onde essas variáveis ​​de configuração são armazenadas:

1.  Sistema: localizado em `/etc/gitconfig` , aplica configurações padrão a todos os usuários do computador. Para fazer alterações neste arquivo, use a opção `--system` com o comando `git config` .
2.  Usuário: localizado em `~/.gitconfig` ou `~/.config/git/config` , aplica as configurações a um único usuário. Para fazer alterações neste arquivo, use a opção `--global` com o comando `git config` .
3.  Projeto: localizado em `YOUR-PROJECT-PATH/.git/config` , aplica as configurações apenas ao projeto. Para fazer alterações neste arquivo, use o comando `git config` .

Se houver configurações conflitantes entre si, as configurações no nível do projeto substituirão as do nível do usuário e as configurações no nível do usuário substituirão as do nível do sistema.

Nota para usuários do Windows: O Git procura pelo arquivo de configuração no nível do usuário ( `.gitconfig` ) no diretório `$HOME` ( `C:\Users\$USER` ). O Git também procura pelo `/etc/gitconfig` , embora seja relativo à raiz do MSys, que é onde você decide instalar o Git em seu sistema Windows quando você executa o instalador. Se você estiver usando a versão 2.x ou posterior do Git para Windows, há também um arquivo de configuração no nível do sistema em `C:\Documents and Settings\All Users\Application Data\Git\config` no Windows XP e em `C:\ProgramData\Git\config` no Windows Vista e mais recente. Este arquivo de configuração só pode ser alterado por `git config -f FILE` como administrador.

#### Adicione seu nome e email

O Git inclui o nome do usuário e o email como parte das informações em um commit. Você desejará configurá-lo em seu arquivo de configuração no nível do usuário com estes comandos:

```shell
git config --global user.name "My Name" 
 git config --global user.email "myemail@example.com" 
```

#### Alterar seu editor de texto

O Git usa automaticamente seu editor de texto padrão, mas você pode mudar isso. Aqui está um exemplo para usar o editor Atom (a opção `--wait` diz ao shell para esperar pelo editor de texto para que você possa fazer o seu trabalho antes que o programa seja movido):

```shell
git config --global core.editor "atom --wait" 
```

#### Adicionar cor à saída Git

Você pode configurar seu shell para adicionar cor à saída do Git com este comando:

```shell
git config --global color.ui true 
```

Para ver todas as suas configurações, use o comando `git config --list` .

### Inicializar o Git em um projeto

Uma vez que o Git esteja instalado e configurado no seu computador, você precisa inicializá-lo em seu projeto para começar a usar seus poderes de controle de versão. Na linha de comando, use o comando `cd` para navegar até a pasta de nível superior (ou raiz) do seu projeto. Em seguida, execute o comando `git init` . Isso instala uma pasta de diretório Git com todos os arquivos e objetos que o Git precisa para rastrear seu projeto.

É importante que o diretório Git esteja instalado na pasta raiz do projeto. O Git pode rastrear arquivos em subpastas, mas não rastreará arquivos localizados em uma pasta pai relativa ao diretório Git.

### Obtenha ajuda no Git

Se você esquecer como qualquer comando funciona no Git, você pode acessar a ajuda do Git na linha de comando de várias maneiras:

```shell
git help COMMAND 
 git COMMAND --help 
 man git-COMMAND 
```

Isso exibe a página de manual do comando na janela do seu shell. Para navegar, role com as teclas de seta para cima e para baixo ou use os seguintes atalhos de teclado:

*   `f` ou `spacebar` de `spacebar` para avançar página
*   `b` para voltar atrás
*   `q` sair

### Fontes

Este artigo usa informações do livro [Pro Git](https://github.com/progit/progit2) , escrito por Scott Chacon e Ben Straub e publicado pela Apress. O livro é exibido na íntegra na [documentação](https://git-scm.com/book/en/v2) do [Git](https://git-scm.com/book/en/v2) .

### Mais Informações:

*   Para downloads, documentação e um tutorial baseado em navegador: [Site oficial do Git](https://git-scm.com/)
*   Comandos mais úteis quando você está em má situação GIT: [Oh merda, git!](http://ohshitgit.com/)
