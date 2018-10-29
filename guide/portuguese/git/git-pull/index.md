---
title: Git Pull
localeTitle: Git Pull
---
## Git Pull

`git pull` é um comando do Git usado para atualizar a versão local de um repositório de um remoto.

É um dos quatro comandos que promovem interação de rede pelo Git. Por padrão, o `git pull` faz duas coisas.

1.  Atualiza o ramo de trabalho local atual (ramificação atualmente retirada)
2.  Atualiza as ramificações de rastreamento remoto para todas as outras ramificações.

`git pull` busca ( `git fetch` ) os novos commits e merges [( `git merge` )](https://guide.freecodecamp.org/git/git-merge) em seu branch local.

A sintaxe deste comando é a seguinte:

```shell
# General format 
 git pull OPTIONS REPOSITORY REFSPEC 
 
 # Pull from specific branch 
 git pull REMOTE-NAME BRANCH-NAME 
```

no qual:

*   **OPTIONS** são as opções de comando, como `--quiet` ou `--verbose` . Você pode ler mais sobre as diferentes opções na [documentação do Git](https://git-scm.com/docs/git-pull)
*   **REPOSITORY** é o URL do seu repo. Exemplo: https://github.com/freeCodeCamp/freeCodeCamp.git
*   **REFSPEC** especifica quais refs para buscar e quais refs locais devem atualizar
*   **REMOTE-NAME** é o nome do seu repositório remoto. Por exemplo: _origem_ .
*   **BRANCH-NAME** é o nome da sua filial. Por exemplo: _desenvolver_ .

**Nota**

Se você tiver alterações não confirmadas, a parte de mesclagem do comando `git pull` falhará e sua ramificação local não será afetada.

Assim, você deve _sempre confirmar suas alterações em um branch antes de extrair_ novos commits de um repositório remoto.

**Índice**

*   [Usando o `git pull`](#using-git-pull)
*   [Controle de Versão Distribuída](#distributed-version-control)
*   [`git fetch` + `git merge`](#git-fetch-plus-git-merge)
*   [`git pull` in IDEs](#git-pull-in-IDEs)

### Usando o git pull

Use `git pull` para atualizar um repositório local do repositório remoto correspondente. Ex: Enquanto estiver trabalhando localmente no `master` , execute `git pull` para atualizar a cópia local do `master` e atualize as outras ramificações de rastreamento remoto. (Mais informações sobre ramificações de rastreamento remotas na próxima seção.)

Mas há algumas coisas que devem ser lembradas para que esse exemplo seja verdadeiro:

*   O repositório local possui um repositório remoto vinculado
*   Verifique isso executando `git remote -v`
*   Se houver vários controles remotos, o `git pull` poderá não ser suficiente. Pode ser necessário inserir `git pull origin` `git pull upstream` ou `git pull upstream` .
*   O ramo no qual você está atualmente com check out possui um ramo de rastreamento remoto correspondente
*   Verifique isso executando o `git status` . Se não houver um ramo de monitoramento remoto, Git não sabe onde para puxar as _informações._

### Controle de Versão Distribuída

Git é um **sistema de controle de versão** distribuído (DVCS). Com o DVCS, os desenvolvedores podem trabalhar no mesmo arquivo ao mesmo tempo em ambientes separados. Depois de _empurrar o_ código para o repositório remoto compartilhado, outros desenvolvedores podem _obter o_ código alterado.

#### Interações de rede no Git

Existem apenas quatro comandos que solicitam interações de rede no Git. Um repositório local não tem consciência das alterações feitas no repositório remoto até que haja uma solicitação de informações. E, um repositório remoto não tem consciência das mudanças locais até que as confirmações sejam enviadas.

Os quatro comandos de rede são:

*   `git clone`
*   `git fetch`
*   `git pull`
*   `git push`

#### Filiais em DVCS

Ao trabalhar com o Git, pode parecer que existem muitas cópias do mesmo código flutuando por todo o lugar. Existem diferentes versões do mesmo arquivo em cada ramificação. E cópias diferentes dos mesmos ramos no computador de cada desenvolvedor e no controle remoto. Para acompanhar isso, o Git usa algo chamado **ramificações de rastreamento remoto** .

Se você executar `git branch --all` dentro de um repositório Git, as ramificações de rastreamento remoto aparecerão em vermelho. Essas são cópias somente leitura do código, conforme aparecem no controle remoto. (Quando foi a última interação de rede que teria trazido informações localmente? Lembre-se de quando essas informações foram atualizadas pela última vez. As informações nas ramificações de rastreamento remotas refletem as informações dessa interação.)

Com **ramificações de rastreamento remoto** , você pode trabalhar no Git em vários ramos sem interação de rede. Toda vez que você executa comandos `git pull` ou `git fetch` , você atualiza **as ramificações de rastreamento remoto** .

### git fetch mais git merge

`git pull` é um comando de combinação, igual a `git fetch` + `git merge` .

#### git fetch

Por si só, o `git fetch` atualiza todas as ramificações de rastreamento remoto no repositório local. Nenhuma alteração é realmente refletida em qualquer um dos ramos de trabalho locais.

#### git merge

Sem nenhum argumento, o `git merge` mesclará o ramo de rastreamento remoto correspondente ao ramo de trabalho local.

#### git pull

`git fetch` atualiza as ramificações de rastreamento remoto. `git merge` atualiza o ramo atual com o ramo de rastreamento remoto correspondente. Usando o `git pull` , você recebe as duas partes dessas atualizações. Mas, isso significa que, se você tiver feito o check-out para `feature` branch e executar o `git pull` , quando fizer o checkout `master` , quaisquer novas atualizações não serão incluídas. Sempre que você fizer o checkout em outro branch que possa ter novas alterações, é sempre uma boa ideia executar o `git pull` .

### git pull in IDEs

Linguagem comum em outros IDES pode não incluir a palavra `pull` . Se você observar as palavras `git pull` mas não as verá, procure a palavra `sync` .

### Fitting um PR remoto (Pull Request) para repo local

Para fins de revisão e tal, os PRs no remoto devem ser buscados no repositório local. Você pode usar o comando `git fetch` como segue para conseguir isso.

`git fetch origin pull/ID/head:BRANCHNAME`

ID é o ID da solicitação pull e BRANCHNAME é o nome da ramificação que você deseja criar. Uma vez que o ramo tenha sido criado, você pode usar o `git checkout` para mudar para aquele brach.

### Outros recursos em git pull

*   [git-scm](https://git-scm.com/docs/git-pull)
*   [Documentos de ajuda do GitHub](https://help.github.com/articles/fetching-a-remote/#pull)
*   [Treinamento GitHub On Demand](https://services.github.com/on-demand/intro-to-github/create-pull-request)
*   [Tutoriais de Sincronização](https://www.atlassian.com/git/tutorials/syncing)

### Outros recursos no git em guide.freecodecamp.org

*   [Git merge](../git-merge/index.md)
*   [Git checkout](../git-checkout/index.md)
*   [Git commit](../git-commit/index.md)
*   [Git stash](../git-stash/index.md)
*   [Filial Git](../git-branch/index.md)