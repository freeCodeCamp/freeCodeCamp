---
title: Git Aliases
localeTitle: Alias ​​Git
---
## Git Alias

Git no infiere automáticamente su comando si lo escribe parcialmente. Si no desea escribir todo el texto de cada uno de los comandos de Git, puede configurar fácilmente un alias para cada comando usando git config. Aquí hay un par de ejemplos que puede querer configurar:

```shell
$ git config --global alias.co checkout 
 $ git config --global alias.br branch 
 $ git config --global alias.ci commit 
 $ git config --global alias.st status 
```

Esto significa que, por ejemplo, en lugar de escribir git commit, solo necesita escribir git ci. A medida que continúe usando Git, probablemente también usará otros comandos con frecuencia; No dudes en crear nuevos alias.

Esta técnica también puede ser muy útil para crear comandos que creas que deberían existir. Por ejemplo, para corregir el problema de usabilidad que encontraste al desempaquetar un archivo, puedes agregar tu propio alias para Git:

```shell
$ git config --global alias.unstage 'reset HEAD --' 
```

Esto hace que los siguientes dos comandos sean equivalentes:

```shell
$ git unstage fileA 
 $ git reset HEAD fileA 
```

Esto parece un poco más claro. También es común agregar un último comando, como este:

```shell
$ git config --global alias.last 'log -1 HEAD' 
```

De esta manera, puedes ver el último commit fácilmente:

```shell
$ git last 
 commit 66938dae3329c7aebe598c2246a8e6af90d04646 
 Author: Josh Goebel <dreamer3@example.com> 
 Date:   Tue Aug 26 19:48:51 2008 +0800 
 
    test for current head 
 
    Signed-off-by: Scott Chacon <schacon@example.com> 
```

```shell
$ git config --global alias.st status --short --branch 
```

Cuando ejecute el comando `git st` , su estado de git se mostrará en un formato agradable y optimizado.

### Ver, editar y eliminar alias

Para ver todos los alias que ha creado en su máquina, ejecute el comando:

```shell
cat ~/.gitconfig 
```

Reemplazar `cat` por `nano` te permitirá editarlos o eliminarlos completamente.

### Alias ​​para ver todos los alias

Para agregar un alias para ver todos los demás creados en su máquina, agregue el alias

```shell
    git config --global alias.aliases 'config --get-regexp alias' 

```