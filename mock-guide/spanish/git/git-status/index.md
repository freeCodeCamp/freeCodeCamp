---
title: Git Status
localeTitle: Estado de Git
---
## Estado de Git

Los comandos de `git status` muestran el estado del directorio de trabajo y el área de preparación. Muestra las rutas que tienen diferencias entre el archivo de `index` y la confirmación `HEAD` actual, las rutas que tienen diferencias entre el árbol de trabajo y el archivo de `index` , y las rutas en el árbol de trabajo que Git no rastrea (y que no se ignoran por [gitignore).](https://git-scm.com/docs/gitignore)

`git status` salida del comando `git status` no muestra ninguna información sobre el historial de proyectos confirmado. Para esto, necesitas usar `git log` .

### Uso

```shell
git status 
```

Enumere qué archivos se almacenan, no se organizan y no se rastrean.