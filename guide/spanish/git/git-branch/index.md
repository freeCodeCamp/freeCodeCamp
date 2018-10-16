---
title: Git Branch
localeTitle: Git Branch
---
## Git Branch

La funcionalidad de bifurcación de Git le permite crear nuevas ramas de un proyecto para probar ideas, aislar nuevas funciones o experimentar sin afectar el proyecto principal.

**Tabla de contenido**

*   [Ver sucursales](#view-branches)
*   [Compra una sucursal](#checkout-a-branch)
*   [Crear una nueva rama](#create-a-new-branch)
*   [Renombrar una rama](#rename-a-branch)
*   [Eliminar una rama](#delete-a-branch)
*   [Comparar Sucursales](#compare-branches)
*   [Ayuda con Git Branch](#help-with-git-branch)
*   [Más información](#more-information)

### Ver sucursales

Para ver las ramas en un repositorio Git, ejecute el comando:

```shell
git branch 
```

Para ver tanto las sucursales de seguimiento remoto como las locales, ejecute el comando:

```shell
git branch -a 
```

Habrá un asterisco (\*) junto a la rama en la que está actualmente.

Hay varias opciones diferentes que puede incluir con `git branch` para ver información diferente. Para obtener más detalles sobre las ramas, puede usar la opción `-v` (o `-vv` o `--verbose` ). La lista de sucursales incluirá el valor SHA-1 y la línea de asunto de confirmación para la `HEAD` de cada sucursal junto a su nombre.

Puede usar la opción `-a` (o `--all` ) para mostrar las sucursales locales, así como las sucursales remotas para un repositorio. Si solo desea ver las ramas remotas, use la opción `-r` (o `--remotes` ).

### Compra una sucursal

Para pagar una rama existente, ejecute el comando:

```shell
git checkout BRANCH-NAME 
```

En general, Git no le permitirá registrar otra rama a menos que su directorio de trabajo esté limpio, ya que perdería cualquier cambio de directorio de trabajo que no esté confirmado. Tienes tres opciones para manejar tus cambios: 1) Deshágase de ellos (consulte la página de verificación de [Git para obtener detalles](https://guide.freecodecamp.org/git/git-checkout/) ) o 2) cometerlos (ver [Git commit para más detalles](https://guide.freecodecamp.org/git/git-commit/) ) o 3) Guárdelos (vea [Git stash para más detalles](https://guide.freecodecamp.org/git/git-stash/) ).

### Crear una nueva rama

Para crear una nueva rama, ejecute el comando:

```shell
git branch NEW-BRANCH-NAME 
```

Tenga en cuenta que este comando solo crea la nueva rama. Deberá ejecutar `git checkout NEW-BRANCH-NAME` para cambiarlo.

Hay un acceso directo para crear y pagar una nueva rama a la vez. Puede pasar la opción `-b` (para sucursal) con `git checkout` . Los siguientes comandos hacen lo mismo:

```shell
# Two-step method 
 git branch NEW-BRANCH-NAME 
 git checkout NEW-BRANCH-NAME 
 
 # Shortcut 
 git checkout -b NEW-BRANCH-NAME 
```

Cuando cree una nueva rama, incluirá todas las confirmaciones de la rama principal. La rama principal es la rama en la que se encuentra cuando crea la nueva rama.

### Renombrar una rama

Para renombrar una rama, ejecute el comando:

```shell
git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME 
 
 # Alternative 
 git branch --move OLD-BRANCH-NAME NEW-BRANCH-NAME 
```

### Eliminar una rama

Git no te permitirá eliminar una rama en la que estés actualmente. Primero debe verificar una rama diferente, luego ejecute el comando:

```shell
git branch -d BRANCH-TO-DELETE 
 
 # Alternative: 
 git branch --delete BRANCH-TO-DELETE 
```

La rama a la que cambias hace una diferencia. Git generará un error si los cambios en la rama que está intentando eliminar no están completamente fusionados en la rama actual. Puede anular esto y forzar a Git a eliminar la rama con la opción `-D` (note la letra mayúscula) o usando la opción `--force` con `-d` o `--delete` :

```shell
git branch -D BRANCH-TO-DELETE 
 
 # Alternatives 
 git branch -d --force BRANCH-TO-DELETE 
 git branch --delete --force BRANCH-TO-DELETE 
```

### Comparar Sucursales

Puedes comparar ramas con el comando `git diff` :

```shell
git diff FIRST-BRANCH..SECOND-BRANCH 
```

Verás una salida de color para los cambios entre las ramas. Para todas las líneas que han cambiado, la versión `SECOND-BRANCH` será una línea verde que comienza con un "+", y la versión `FIRST-BRANCH` será una línea roja que comienza con un "-". Si no desea que Git muestre dos líneas para cada cambio, puede usar la opción `--color-words` . En cambio, Git mostrará una línea con el texto eliminado en rojo y el texto agregado en verde.

Si desea ver una lista de todas las ramas que están completamente fusionadas en su rama actual (en otras palabras, su rama actual incluye todos los cambios de las otras ramas que están en la lista), ejecute el comando `git branch --merged` .

### Ayuda con Git Branch

Si olvida cómo usar una opción, o si desea explorar otras funciones relacionadas con el comando `git branch` , puede ejecutar cualquiera de estos comandos:

```shell
git help branch 
 git branch --help 
 man git-branch 
```

### Más información:

*   El comando `git merge` : [fCC Guide](https://guide.freecodecamp.org/git/git-merge/)
*   El comando `git checkout` : [fCC Guide](https://guide.freecodecamp.org/git/git-checkout/)
*   El comando `git commit` : [fCC Guide](https://guide.freecodecamp.org/git/git-commit/)
*   El comando `git stash` : [fCC Guide](https://guide.freecodecamp.org/git/git-stash/)
*   Documentación Git: [sucursal](https://git-scm.com/docs/git-branch)