---
title: Cloning All Remote Branches in Git
localeTitle: Clonando todas as ramificações remotas no Git
---
Para clonar um repositório git remoto, digite o seguinte no terminal:

> Nota: Certifique-se de estar em uma pasta raiz, por exemplo, `webdev` vez de uma pasta específica do projeto.
```
git clone <remote_repo> 
 cd <remote_repo> 
```

Liste suas filiais usando estes comandos:
```
git branch // Lists local branches 
 git branch -a // Lists local and remote branches 
```

Para fazer o checkout de um branch remoto localmente:
```
git checkout <branch> 
```

Aqui está um exemplo de busca da ramificação `master` remota do FreeCodeCamp:
```
git clone https://github.com/FreeCodeCamp/FreeCodeCamp.git 
 cd FreeCodeCamp 
 git checkout master 

```