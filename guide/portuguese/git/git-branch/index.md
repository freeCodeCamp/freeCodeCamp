---
title: Git Branch
localeTitle: Filial Git
---
## Filial Git

A funcionalidade de ramificação do Git permite criar novas ramificações de um projeto para testar ideias, isolar novos recursos ou experimentar sem afetar o projeto principal.

**Índice**

*   [Exibir filiais](#view-branches)
*   [Check-out um ramo](#checkout-a-branch)
*   [Crie um novo ramo](#create-a-new-branch)
*   [Renomear um ramo](#rename-a-branch)
*   [Excluir um ramo](#delete-a-branch)
*   [Comparar filiais](#compare-branches)
*   [Ajuda com o Git Branch](#help-with-git-branch)
*   [Mais Informações](#more-information)

### Exibir filiais

Para visualizar as ramificações em um repositório Git, execute o comando:

```shell
git branch 
```

Para visualizar as ramificações de rastreamento remoto e as ramificações locais, execute o comando:

```shell
git branch -a 
```

Haverá um asterisco (\*) ao lado do ramo em que você está no momento.

Há várias opções diferentes que você pode incluir com o `git branch` para ver informações diferentes. Para mais detalhes sobre os ramos, você pode usar a opção `-v` (ou `-vv` , ou `--verbose` ). A lista de ramificações incluirá o valor SHA-1 e confirmará a linha de assunto para o `HEAD` de cada ramificação próxima a seu nome.

Você pode usar a opção `-a` (ou `--all` ) para mostrar as ramificações locais, bem como quaisquer ramificações remotas para um repositório. Se você quiser apenas ver as ramificações remotas, use a opção `-r` (ou - `--remotes` ).

### Check-out um ramo

Para fazer o checkout de uma ramificação existente, execute o comando:

```shell
git checkout BRANCH-NAME 
```

Geralmente, o Git não permite que você efetue o checkout de outra ramificação, a menos que seu diretório de trabalho esteja limpo, porque você perderia qualquer alteração de diretório de trabalho que não estivesse comprometida. Você tem três opções para lidar com suas alterações: 1) Lixá-los (veja [Git checkout para detalhes](https://guide.freecodecamp.org/git/git-checkout/) ) ou 2) cometê-los (veja [Git commit para detalhes](https://guide.freecodecamp.org/git/git-commit/) ) ou 3) esconda-os (veja [Git stash para detalhes](https://guide.freecodecamp.org/git/git-stash/) ).

### Crie um novo ramo

Para criar uma nova ramificação, execute o comando:

```shell
git branch NEW-BRANCH-NAME 
```

Observe que esse comando cria apenas o novo ramo. Você precisará executar o `git checkout NEW-BRANCH-NAME` para mudar para ele.

Há um atalho para criar e fazer o checkout de uma nova filial de uma só vez. Você pode passar a opção `-b` (para branch) com `git checkout` . Os seguintes comandos fazem o mesmo:

```shell
# Two-step method 
 git branch NEW-BRANCH-NAME 
 git checkout NEW-BRANCH-NAME 
 
 # Shortcut 
 git checkout -b NEW-BRANCH-NAME 
```

Quando você cria uma nova ramificação, ela inclui todas as confirmações da ramificação pai. O ramo pai é o ramo em que você está quando cria o novo ramo.

### Renomear um ramo

Para renomear uma ramificação, execute o comando:

```shell
git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME 
 
 # Alternative 
 git branch --move OLD-BRANCH-NAME NEW-BRANCH-NAME 
```

### Excluir um ramo

O Git não permite excluir uma ramificação em que você está no momento. Primeiro, você precisa fazer o checkout de um ramo diferente e, em seguida, executar o comando:

```shell
git branch -d BRANCH-TO-DELETE 
 
 # Alternative: 
 git branch --delete BRANCH-TO-DELETE 
```

O ramo para o qual você muda faz a diferença. O Git lançará um erro se as alterações na ramificação que você está tentando excluir não estiverem totalmente mescladas na ramificação atual. Você pode sobrescrever isto e forçar o Git a deletar o branch com a opção `-D` (observe a letra maiúscula) ou usando a opção `--force` com `-d` ou `--delete` :

```shell
git branch -D BRANCH-TO-DELETE 
 
 # Alternatives 
 git branch -d --force BRANCH-TO-DELETE 
 git branch --delete --force BRANCH-TO-DELETE 
```

### Comparar filiais

Você pode comparar ramos com o comando `git diff` :

```shell
git diff FIRST-BRANCH..SECOND-BRANCH 
```

Você verá a saída colorida para as mudanças entre os ramos. Para todas as linhas que foram alteradas, a versão `SECOND-BRANCH` será uma linha verde começando com "+" e a versão `FIRST-BRANCH` será uma linha vermelha começando com "-". Se você não quiser que o Git exiba duas linhas para cada alteração, você pode usar a opção `--color-words` . Em vez disso, o Git mostrará uma linha com o texto excluído em vermelho e adicionou o texto em verde.

Se você quiser ver uma lista de todas as ramificações que estão completamente mescladas em sua ramificação atual (em outras palavras, sua ramificação atual inclui todas as mudanças das outras ramificações listadas), execute o comando `git branch --merged` .

### Ajuda com o Git Branch

Se você esquecer como usar uma opção, ou quiser explorar outras funcionalidades em torno do comando `git branch` , você pode executar qualquer um destes comandos:

```shell
git help branch 
 git branch --help 
 man git-branch 
```

### Mais Informações:

*   O comando `git merge` : [fCC Guide](https://guide.freecodecamp.org/git/git-merge/)
*   O comando `git checkout` : [fCC Guide](https://guide.freecodecamp.org/git/git-checkout/)
*   O comando `git commit` : [fCC Guide](https://guide.freecodecamp.org/git/git-commit/)
*   O comando `git stash` : [fCC Guide](https://guide.freecodecamp.org/git/git-stash/)
*   Documentação do Git: [branch](https://git-scm.com/docs/git-branch)