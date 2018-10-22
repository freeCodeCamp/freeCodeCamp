---
title: Git Bisect
localeTitle: Git Bisect
---
## Git Bisect

El comando `git bisect` ayuda a encontrar commits que agregaron cambios específicos en su proyecto. Esto es particularmente útil si necesita encontrar qué cambio generó un error.

Este comando funciona al proporcionarle una confirmación "incorrecta" que incluye el error y una confirmación "buena" de antes de que se generase el bug. A través de la búsqueda binaria, `git bisect` seleccionará confirmaciones y le pedirá que identifique si la confirmación es "buena" o "mala". Este proceso continúa hasta que el comando es capaz de encontrar la confirmación exacta que introdujo el cambio.

### Comandos de Bisect

Para iniciar una sesión bisect, le dirá a git que comience una sesión bisect, identifique una versión "mala" e identifique una versión "buena". Suponiendo que la confirmación actual está rota pero la confirmación `4b60707` es buena, ejecutará lo siguiente:

```shell
git bisect start 
 git bisect bad 
 git bisect good 4b60707 
```

Git verificará un commit entre las versiones, "buena" y "mala", y dará como resultado algo como lo siguiente:
```
Bisecting: 2 revisions left to test after this (roughly 2 steps) 
```

Ahora debe indicar a git si el commit actual funciona con `git bisect good` o si el commit actual es malo con `git bisect bad` . Este proceso se repetirá hasta que el comando pueda imprimir el primer commit erroneo.

Cuando haya terminado, debe limpiar la sesión bisect. Esto restablecerá su HEAD a lo que version anterior al comienzo de la sesión bisect:

```shell
git bisect reset 
```

### Otros recursos

*   [Git bisect documentacion](https://git-scm.com/docs/git-bisect)
