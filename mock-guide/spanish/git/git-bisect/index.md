---
title: Git Bisect
localeTitle: Git Bisect
---
## Git Bisect

El comando `git bisect` ayuda a encontrar confirmaciones que agregaron cambios específicos en su proyecto. Esto es particularmente útil si necesita encontrar qué cambio introdujo un error.

Este comando funciona al proporcionarle una confirmación "incorrecta" que incluye el error y una confirmación "buena" de antes de que se introdujera la falla. A través de la búsqueda binaria, `git bisect` seleccionará confirmaciones y le pedirá que identifique si la confirmación es "buena" o "mala". Esto continúa hasta que el comando es capaz de encontrar la confirmación exacta que introdujo el cambio.

### Comandos de Bisect

Para iniciar una sesión bisect, le dirá a git que comience una sesión bisect, identifique una versión "mala" e identifique una versión "buena". Suponiendo que la confirmación actual está rota pero la confirmación `4b60707` es buena, ejecutará lo siguiente:

```shell
git bisect start 
 git bisect bad 
 git bisect good 4b60707 
```

Git comprobará un compromiso entre las versiones "buena" y "mala" y dará como resultado algo como lo siguiente:
```
Bisecting: 2 revisions left to test after this (roughly 2 steps) 
```

Ahora debe indicar a git si el compromiso actual funciona con `git bisect good` o si el compromiso actual se rompe con `git bisect bad` . Este proceso se repetirá hasta que el comando pueda imprimir el primer error de confirmación.

Cuando haya terminado, debe limpiar la sesión bisect. Esto restablecerá su HEAD a lo que era antes de comenzar la sesión bisect:

```shell
git bisect reset 
```

### Otros recursos

*   [Git bisect documentacion](https://git-scm.com/docs/git-bisect)