---
title: How to Use Git Rebase
localeTitle: Como usar o Git Rebase
---
**Você foi encaminhado para esta página para receber o seu PR? Role para a direita para Git Rebase na FCC então!**

`git rebase` é uma ferramenta extremamente útil que tem tudo a ver com a reescrita do git history, embora seja mais comumente usado para _esmagar_ vários commits em um. Embora útil neste cenário, esta não é a única função que o comando `git rebase` pode executar. Na verdade, ele se mostra muito mais útil quando usado para a função pretendida que seu nome sugere: essencialmente, _rebase_ uma ramificação. Deixe-me explicar o que quero dizer com isso.

Vamos dizer que você tem um repositório como este:
```
                                                  --- Commit 5 ----------- auth branch 
                                                / 
                                               --- Commit 4 -------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch 
```

Se você quisesse mesclar a ramificação `auth` com a ramificação `dev` , o git lançaria um erro em você porque sua ramificação de `auth` está desatualizada: ela não é responsável pela confirmação 4. Você precisará trazer sua ramificação para up-of-date. Até a presente data.

O Git fornece dois métodos para isso: o comando `merge` e o comando `rebase` . Para uma exploração do comando `merge` , visite o artigo wiki relevante: [Git Merge](//forum.freecodecamp.com/t/understand-how-to-use-git-merge/13215)

Vamos executar o `rebase` agora:
```
$ git checkout auth 
 $ git rebase dev 
```

O repo agora ficará assim:
```
                                                                 --- Commit 5 --- auth branch 
                                                               / 
                                               --- Commit 4 --------------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 --------------------------------------- master branch 
```

Você vê o que aconteceu? Git essencialmente salvou os commits na ramificação `auth` , removeu-os e depois os criou novamente com os mesmos commits _após_ os commits no branch `dev` . Isso significa que o `Commit 4` só existe no ramo `dev` e não no branch `auth` ! E isso é realmente tudo que existe para isso! Isso pode parecer um pouco confuso no começo, mas tente entender o diagrama. Esta é uma ferramenta extremamente útil.

## Git-Rebase na FCC

### Evitando conflitos de mesclagem

Se você contribuir para a base de código da FCC, ou estiver planejando fazer isso, sempre execute este comando antes de fazer qualquer alteração nos arquivos locais e enviá-los:

`git pull --rebase upstream staging`

Se você não tiver o `upstream` configurado, execute este comando antes de executar o comando acima (o git lançará um erro porque não sabe o que é o upstream): `git remote add upstream https://github.com/freecodecamp/freecodecamp.git`

Isto irá puxar as últimas mudanças do ramo de preparo da FCC e rebase-las com o ramo de teste do seu garfo para que você não tenha nenhum conflito ao abrir o PR ![:slight_smile:](//forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=2 ": slight_smile:")

### Squashing

Se você tem vários commits que você quer esmagar em um, então siga as instruções para **[Squashing](//forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231)** .