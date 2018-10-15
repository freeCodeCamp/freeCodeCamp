---
title: Git Cherry Pick
localeTitle: Git Cherry Pick
---
## Git Cherry Pick

O comando `git cherry-pick` aplica as alterações introduzidas por algumas confirmações existentes. Este guia se concentrará em explicar esse recurso o máximo possível, mas é claro que a [documentação](https://git-scm.com/docs/git-cherry-pick) real do [Git](https://git-scm.com/docs/git-cherry-pick) sempre será útil.

### Check-out de um galho existente Cherry Pick do mestre

Para aplicar a alteração introduzida pelo commit na ponta do branch master e criar um novo commit com esta mudança. Execute o seguinte comando

```shell
git cherry-pick master 
```

### Verificar uma alteração de um commit diferente

Para aplicar a alteração introduzida pela confirmação no valor de hash específico desejado, execute o seguinte comando

```shell
git cherry-pick {HASHVALUE} 
```

Isto adicionará as mudanças incluídas referenciadas naquele commit, ao seu repositório atual

### Aplicar determinados commits de um branch para outro

`cherry-pick` permite escolher entre os commits de um branch para o outro. Digamos que você tenha dois ramos, `master` e `develop-1` . No branch `develop-1` você tem 3 commits com commit ids `commit-1` , `commit-2` e `commit-3` . Aqui você só pode aplicar `commit-2` ao branch `master` por:

```shell
git checkout master 
 git cherry-pick commit-2 
```

Se você encontrar algum conflito neste ponto, terá que corrigi-los e adicioná-los usando `git add` e, em seguida, poderá usar o sinalizador continue para aplicar o cherry-pick.

```shell
git cherry-pick --continue 
```

Se você deseja abortar um cherry-pick entre você pode usar o sinalizador abort:

```shell
git cherry-pick --abort 

```