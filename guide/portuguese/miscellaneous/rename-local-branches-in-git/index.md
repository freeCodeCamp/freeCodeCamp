---
title: Rename Local Branches in Git
localeTitle: Renomear Ramificações Locais no Git
---
Para renomear uma ramificação local, digite o seguinte no terminal:

> `-m` significa move, assim como o `mv` é usado no linux para renomear arquivos.
```
git branch -m <oldname> <newname> 
```

Se você já fez o check out do branch que deseja alterar:
```
git branch -m <newname> 
```

Aqui está um exemplo de renomear o ramo `feature/react-challenges` para `fix/react-hikes` react `fix/react-hikes` de FreeCodeCamp:
```
git checkout feature/react-challenges 
 git branch -m fix/react-hikes 

```