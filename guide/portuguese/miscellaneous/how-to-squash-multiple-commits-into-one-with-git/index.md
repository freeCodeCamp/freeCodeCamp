---
title: How to Squash Multiple Commits into One with Git
localeTitle: Como esmagar vários commits em um com o Git
---
Este é um recurso incrível de `rebase` que pode ser usado no modo `interactive` . Para esmagar os últimos _n_ commits em um, execute o seguinte comando:
```
git rebase -i HEAD~n 
```

Isso abrirá um editor de texto com algo semelhante ao seguinte:
```
pick commit_1 
 pick commit_2 
 pick commit_3 
 ... 
 pick commit_n 
 # Bunch of comments 
```

Deixe o primeiro commit sozinho e mude o restante das `pick` s para `squash` . Salve e saia do editor.

Então, se você quiser esmagar os últimos três commits, primeiro você executará o `git rebase -i HEAD~3` e então você vai querer editar seus commits para parecer algo assim:
```
pick dd661ba Commit 1 
 squash 71f5fee Commit 2 
 squash f4b4bf1 Commit 3 
```

Se você já empurrou para um controle remoto antes de esmagar seus commits, você terá que empurrar para o controle remoto novamente, com o sinalizador `-f` , caso contrário o git lançará um erro em você.

É altamente recomendável que você leia as informações no arquivo aberto, pois há muitas coisas que você pode fazer.