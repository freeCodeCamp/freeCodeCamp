---
title: Checkout a Remote Branch in Git
localeTitle: Оформить заказ удаленной ветви в Git
---
# Оформить рабочий процесс удаленной ветви

В зависимости от того, сколько пультов доступно для вашего местного репо, следуйте соответствующему потоку.

## Для репо с одним пультом:

Если ваше местное репо имеет только один пульт, например, только `origin` :
```
git remote -v 
 origin  https://github.com/my_username/AwesomeRepo.git (fetch) 
 origin  https://github.com/my_username/AwesomeRepo.git (push) 
```

Тогда вы можете просто сделать:

`git fetch`

`git checkout some_branch_name`

## Для репозиций с несколькими пультами:

Если ваше местное репо имеет несколько пультов:
```
git remote -v 
 origin      https://github.com/raisedadead/wiki.git (fetch) 
 origin      https://github.com/raisedadead/wiki.git (push) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (fetch) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (push) 
```

Затем вам необходимо указать удаленный:  
`git fetch`  
`git checkout -b some_branch_name <remote>/some_branch_name`  
где `<remote>` в этом примере является либо `upstream` либо `origin` .