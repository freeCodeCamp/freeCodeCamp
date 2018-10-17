---
title: Checkout a Remote Branch in Git
localeTitle: Check-out de uma ramificação remota no Git
---
# Check-out de um fluxo de trabalho de filial remota

Dependendo de quantos controles remotos estão presentes em seu repositório local, siga o fluxo apropriado.

## Para reposições com um controle remoto:

Se o seu repositório local está tendo apenas um controle remoto, por exemplo, apenas `origin` :
```
git remote -v 
 origin  https://github.com/my_username/AwesomeRepo.git (fetch) 
 origin  https://github.com/my_username/AwesomeRepo.git (push) 
```

Então você pode simplesmente fazer:

`git fetch`

`git checkout some_branch_name`

## Para repos com múltiplos remotos:

Se o seu repositório local está tendo vários controles remotos:
```
git remote -v 
 origin      https://github.com/raisedadead/wiki.git (fetch) 
 origin      https://github.com/raisedadead/wiki.git (push) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (fetch) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (push) 
```

Então você tem que especificar um controle remoto também:  
`git fetch`  
`git checkout -b some_branch_name <remote>/some_branch_name`  
onde `<remote>` neste exemplo é `upstream` ou `origin` .