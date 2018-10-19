---
title: Git Aliases
localeTitle: Aliases do Git
---
## Alias ​​do Git

O Git não infere seu comando automaticamente se você o digitar parcialmente. Se você não quiser digitar o texto inteiro de cada um dos comandos do Git, você pode facilmente configurar um alias para cada comando usando git config. Aqui estão alguns exemplos que você pode querer configurar:

```shell
$ git config --global alias.co checkout 
 $ git config --global alias.br branch 
 $ git config --global alias.ci commit 
 $ git config --global alias.st status 
```

Isto significa que, por exemplo, em vez de digitar git commit, você só precisa digitar git ci. Ao continuar usando o Git, você provavelmente usará outros comandos com frequência também; Não hesite em criar novos aliases.

Essa técnica também pode ser muito útil na criação de comandos que você acha que deveria existir. Por exemplo, para corrigir o problema de usabilidade que você encontrou ao desassociar um arquivo, você pode adicionar seu próprio alias unstage ao Git:

```shell
$ git config --global alias.unstage 'reset HEAD --' 
```

Isso torna os dois comandos seguintes equivalentes:

```shell
$ git unstage fileA 
 $ git reset HEAD fileA 
```

Isso parece um pouco mais claro. Também é comum adicionar um último comando, como este:

```shell
$ git config --global alias.last 'log -1 HEAD' 
```

Desta forma, você pode ver o último commit facilmente:

```shell
$ git last 
 commit 66938dae3329c7aebe598c2246a8e6af90d04646 
 Author: Josh Goebel <dreamer3@example.com> 
 Date:   Tue Aug 26 19:48:51 2008 +0800 
 
    test for current head 
 
    Signed-off-by: Scott Chacon <schacon@example.com> 
```

```shell
$ git config --global alias.st status --short --branch 
```

Quando você executar o comando `git st` , seu status do git será exibido em um formato simplificado.

### Visualizar, editar e excluir aliases

Para visualizar todos os aliases que você criou em sua máquina, execute o comando:

```shell
cat ~/.gitconfig 
```

Substituir `cat` por `nano` permite editá-los ou removê-los completamente.

### Alias ​​para ver todos os aliases

Para adicionar um alias para ver todos os outros criados em sua máquina, adicione o alias

```shell
    git config --global alias.aliases 'config --get-regexp alias' 

```