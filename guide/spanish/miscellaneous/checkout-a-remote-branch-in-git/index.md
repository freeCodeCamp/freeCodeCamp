---
title: Checkout a Remote Branch in Git
localeTitle: Comprobación de una sucursal remota en Git
---
# Checkout un flujo de trabajo de rama remota

Dependiendo de cuántos controles remotos estén presentes para su repositorio local, siga el flujo apropiado.

## Para repos con un solo control remoto:

Si su repositorio local solo tiene un control remoto, por ejemplo, solo el `origin` :
```
git remote -v 
 origin  https://github.com/my_username/AwesomeRepo.git (fetch) 
 origin  https://github.com/my_username/AwesomeRepo.git (push) 
```

Entonces simplemente puedes hacer:

`git fetch`

`git checkout some_branch_name`

## Para repositorios con control remoto múltiple:

Si su repositorio local tiene varios controles remotos:
```
git remote -v 
 origin      https://github.com/raisedadead/wiki.git (fetch) 
 origin      https://github.com/raisedadead/wiki.git (push) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (fetch) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (push) 
```

Entonces tienes que especificar un control remoto también:  
`git fetch`  
`git checkout -b some_branch_name <remote>/some_branch_name`  
donde `<remote>` en este ejemplo es `upstream` u `origin` .