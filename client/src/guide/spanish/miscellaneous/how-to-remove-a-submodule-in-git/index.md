---
title: How to Remove a Submodule in Git
localeTitle: Cómo quitar un submódulo en Git
---
Eliminar un submódulo es útil cuando ya no es necesario. Los pasos a continuación describen la eliminación de un submódulo.

## Eliminar submódulo

*   Elimine la sección que se refiere al submódulo del archivo `.gitmodules`
*   `git add .gitmodules` los cambios a través de `git add .gitmodules`
*   Elimine la sección relevante del submódulo de `.git/config` .
*   Ejecute `git rm --cached path_to_submodule` (sin barra diagonal)
*   Ejecute `rm -rf .git/modules/path_to_submodule`
*   Confirme los cambios con \`git commit -m" submódulo eliminado "
*   Elimine los archivos de submódulos ahora sin seguimiento `rm -rf path_to_submodule`

## Fuentes

*   [Stackoverflow - ¿Cómo elimino un submódulo?](http://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule)
*   [git.wiki.kernel.org - Eliminación de submódulos Git](https://git.wiki.kernel.org/index.php/GitSubmoduleTutorial#Removal)