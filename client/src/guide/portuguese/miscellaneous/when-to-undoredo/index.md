---
title: When to Undoredo
localeTitle: Quando a Undoredo
---
Você normalmente deseja UNDO / REDO quando você confirma algumas mudanças no git e percebe que as mudanças precisam ser removidas / revertidas. Isso é muito comum em cenários, por exemplo, quando você faz uma alteração temporária em alguns arquivos e se esquece de revertê-los, depois passa a adicioná-los ao commit acidentalmente.

## O fluxo de trabalho UNDO / REDO:

Supondo que você fez algumas alterações e fez commits como:
```
git commit -m "Commit 1 - Some changes to the code" 
 git commit -m "Commit 2 - Some MORE changes to the code" 
```

1.  (UNDO-ing): `git reset --soft HEAD~` o último commit `git reset --soft HEAD~`
2.  _Faça as alterações._
3.  Adicione seus arquivos à área de preparação `git add <filenames or paths>` ou `git add --all`
4.  (REDO-ing): faça o commit. `git commit -c ORIG_HEAD` ou `git commit -C ORIG_HEAD`

## Como é que isso funciona?

Agora que você sabe o fluxo, vamos entender como isso funciona nos bastidores.

1.  `Step 1` redefine o último commit, ou seja, `"Commit 2 - Some MORE..."` volta para o `"Commit 1 - Some..."` commit.
2.  Na `Step 2` , você faz as alterações necessárias para os arquivos.
3.  Na `Step 3` , você adiciona os arquivos alterados à área de preparação seletivamente com `git add <filenames>` ou todos os arquivos com `git add --all` .
4.  Na etapa final, você confirma as alterações na área de preparação.

Nota: você pode usar `-c` ou `-C` . O small `-c` abrirá um editor para modificar a mensagem de commit, neste caso será `Commit 2 - Some MORE...` Você pode editar a mensagem de confirmação conforme desejar.

Ou, alternativamente, você pode usar as maiúsculas e minúsculas `-C` , onde o git irá pular a janela do editor e reutilizar a mensagem _LAST_ commit, que neste caso é `Commit 2 - Some MORE...`

Reutilizar a mensagem de confirmação "Same" também é conhecida como refazer / reconfirmar.

## Unstage antes de um commit

Para desfazer uma alteração preparada antes de um commit, simplesmente execute `git reset <file>` ou `git reset` para desassociar todas as mudanças antes de um commit.

Nota: Em versões mais antigas do git, os comandos eram `git reset HEAD <file>` e `git reset HEAD` respectivamente. Isso foi mudado no Git 1.8.2

## Mais alguns truques:

Você pode voltar qualquer número de commits usando `git reset --soft HEAD~n` onde você quer desfazer os últimos `n` commits.

## Atribuição:

Este artigo é baseado em uma pergunta sobre estouro de pilha [aqui](http://stackoverflow.com/questions/927358/how-do-you-undo-the-last-commit/927386#927386) e [aqui](http://stackoverflow.com/questions/348170/undo-git-add-before-commit/348234#348234) .