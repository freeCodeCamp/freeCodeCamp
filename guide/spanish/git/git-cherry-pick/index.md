---
title: Git Cherry Pick
localeTitle: Git Cherry Pick
---
## Git Cherry Pick

El comando `git cherry-pick` aplica los cambios introducidos por algunas confirmaciones existentes. Esta guía se centrará en explicar esta característica lo más posible, pero, por supuesto, la verdadera [documentación de Git](https://git-scm.com/docs/git-cherry-pick) siempre será útil.

### Comprobación de una selección de cereza de rama existente de maestro

Para aplicar el cambio introducido por la confirmación en la punta de la rama maestra y crear una nueva confirmación con este cambio. Ejecuta el siguiente comando

```shell
git cherry-pick master 
```

### Compruebe en un cambio de un compromiso diferente

Para aplicar el cambio introducido por la confirmación en el valor hash particular que desea, ejecute el siguiente comando

```shell
git cherry-pick {HASHVALUE} 
```

Esto agregará los cambios incluidos referidos en ese compromiso, a su repositorio actual

### Aplicar ciertas confirmaciones de una rama a otra.

`cherry-pick` te permite elegir y elegir entre confirmaciones de una rama a otra. Digamos que tienes dos ramas `master` y `develop-1` . En la rama `develop-1` tienes 3 confirmaciones con los ID de `commit-1` , `commit-2` y `commit-3` . Aquí solo puede aplicar `commit-2` al `master` rama por:

```shell
git checkout master 
 git cherry-pick commit-2 
```

Si encuentra algún conflicto en este punto, debe corregirlos y agregarlos usando `git add` y luego puede usar la marca de continuación para aplicar el cherry-pick.

```shell
git cherry-pick --continue 
```

Si desea abortar una selección intermedia, puede utilizar la bandera de abortar:

```shell
git cherry-pick --abort 

```