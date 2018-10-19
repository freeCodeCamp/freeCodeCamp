---
title: Git Rebase
localeTitle: Ir Rebase
---
## Rebase do Git

Rebasing uma ramificação no Git é uma maneira de mover a totalidade de uma ramificação para outro ponto na árvore. O exemplo mais simples é mover um ramo mais para cima na árvore. Digamos que temos uma ramificação que divergiu da ramificação principal no ponto A:
```
        /o-----o---o--o-----o--------- branch 
 --oo--A--o---o---o---o----o--ooo--- master 
```

Quando você rebase você pode movê-lo assim:
```
                                   /o-----o---o--o-----o------ branch 
 --oo--A--o---o---o---o----o--ooo master 
```

Para fazer o rebase, certifique-se de ter todos os commits desejados no rebase de seu branch master. Confira o branch que você quer rebase e digite `git rebase master` (onde master é o branch que você quer rebase).

Também é possível fazer o rebase de uma ramificação diferente, de modo que, por exemplo, uma ramificação baseada em outra ramificação (vamos chamá-la de feature) seja re-criada no master:
```
                            /---oo branch 
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
```

Após o `git rebase master branch` ou `git rebase master` quando tiver feito o checkout do branch, você terá:
```
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
                                  \---oo branch 
```

### Git rebase interativo no console

Para usar o `git rebase` no console com uma lista de commits, você pode escolher, editar ou soltar no rebase:

*   Digite `git rebase -i HEAD~5` com o último número sendo qualquer número de commits do mais recente para trás que você deseja revisar.
*   No vim, pressione `esc` , em seguida, `i` para começar a editar o teste.
*   No lado esquerdo, você pode sobrescrever o `pick` com um dos comandos abaixo. Se você quiser esmagar um commit em um anterior e descartar a mensagem de commit, digite `f` no lugar do `pick` do commit.
```
pick 452b159 <message for this commit> 
 pick 7fd4192 <message for this commit> 
 pick c1af3e5 <message for this commit> 
 pick 5f5e8d3 <message for this commit> 
 pick 5186a9f <message for this commit> 
 
 # Rebase 0617e63..5186a9f onto 0617e63 (30 commands) 
 # 
 # Commands: 
 # p, pick = use commit 
 # r, reword = use commit, but edit the commit message 
 # e, edit = use commit, but stop for amending 
 # s, squash = use commit, but meld into previous commit 
 # f, fixup = like "squash", but discard this commit's log message 
 # x, exec = run command (the rest of the line) using shell 
 # d, drop = remove commit 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
```

*   Digite `esc` seguido de `:wq` para salvar e sair.
*   Se ele for rebase com sucesso, você precisará forçar o push de suas alterações com `git push -f` para adicionar a versão `git push -f` ao seu repositório github.
*   Se houver um conflito de mesclagem, há várias maneiras de corrigir isso, incluindo seguir as sugestões [deste guia](https://help.github.com/enterprise/2.11/user/articles/resolving-a-merge-conflict-using-the-command-line/) . Uma maneira é abrir os arquivos em um editor de texto e excluir as partes do código que você não deseja. Então use `git add <file name>` seguido por `git rebase --continue` . Você pode pular o commit conflitante inserindo `git rebase --skip` , sair do git rebase inserindo `git rebase --abort` no seu console.

### Mais Informações:

*   [Documentação do Git: rebase](https://git-scm.com/docs/git-rebase)
*   [Guia interativa do Thoughbot para git rebase](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)