---
title: Git Checkout
localeTitle: Git Checkout
---
## Git Checkout

O comando `git checkout` alterna entre filiais ou restaura arquivos da árvore de trabalho. Existem várias opções diferentes para este comando que não serão abordadas aqui, mas você pode dar uma olhada em todas elas na [documentação](https://git-scm.com/docs/git-checkout) do [Git](https://git-scm.com/docs/git-checkout) .

### Check-out de um commit específico

para fazer checkout de um commit específico, execute o comando:

```shell
git checkout specific-commit-id 
```

podemos obter os ids de commit específicos executando:

```shell
git log 
```

### Check-out de uma agência existente

Para fazer o checkout de uma ramificação existente, execute o comando:

```shell
git checkout BRANCH-NAME 
```

Geralmente, o Git não permite que você efetue o checkout de outra ramificação, a menos que seu diretório de trabalho esteja limpo, porque você perderia qualquer alteração de diretório de trabalho que não estivesse comprometida. Você tem três opções para lidar com as alterações: 1) lixá-las, 2) [confirmá-las](https://guide.freecodecamp.org/git/git-commit/) ou 3) [ocultá-las](https://guide.freecodecamp.org/git/git-stash/) .

### Check-out um novo ramo

Para criar e fazer check-out de uma nova filial com um único comando, você pode usar:

```shell
git checkout -b NEW-BRANCH-NAME 
```

Isso mudará automaticamente para o novo ramo.

### Check-out de uma nova filial ou redefinir uma ramificação para um ponto inicial

O comando a seguir é semelhante a fazer check-out de um novo branch, mas usa o sinalizador `-B` (observe o captital B) e um parâmetro opcional `START-POINT` :

```shell
git checkout -B BRANCH-NAME START-POINT 
```

Se o ramo `BRANCH-NAME` não existir, o Git irá criá-lo e iniciá-lo no `START-POINT` . Se a ramificação `BRANCH-NAME` já existir, o Git redefine a ramificação para `START-POINT` . Isso é equivalente a executar o `git branch` com `-f` .

### Forçar um checkout

Você pode passar a opção `-f` ou `--force` com o comando `git checkout` para forçar o Git a mudar de ramificações, mesmo se você tiver mudanças não preparadas (em outras palavras, o índice da árvore de trabalho é diferente de `HEAD` ). Basicamente, ele pode ser usado para jogar fora as mudanças locais.

Quando você executa o seguinte comando, o Git ignorará as entradas não mescladas:

```shell
git checkout -f BRANCH-NAME 
 
 # Alternative 
 git checkout --force BRANCH-NAME 
```

### Anular alterações no seu diretório de trabalho

Você pode usar o comando `git checkout` para desfazer as alterações feitas em um arquivo em seu diretório de trabalho. Isso irá reverter o arquivo de volta para a versão em `HEAD` :

```shell
git checkout -- FILE-NAME 

```