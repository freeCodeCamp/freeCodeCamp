---
title: Change the Url of a Remote Repository
localeTitle: Alterar o URL de um repositório remoto
---
O comando `git remote set-url` altera um URL de repositório remoto existente.

**Este comando leva dois argumentos:**

1.  Um nome remoto existente. Por exemplo, origem ou upstream são duas escolhas comuns.
    
2.  Um novo URL para o controle remoto. Por exemplo, `https://github.com/USERNAME/OTHERREPOSITORY.git`
    

**Então, para mudar o URL de um repositório remoto, você faria algo assim:**

1.  Veja o repositório remoto existente:

`git remote -v`

1.  Altere o URL do repositório remoto:

`git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git`

1.  E você pode verificar o novo repositório remoto fazendo:

`git remote -v`

_Para mais informações, confira [este artigo do github.](https://help.github.com/articles/changing-a-remote-s-url/)_