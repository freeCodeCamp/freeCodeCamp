---
title: Git Checkout
localeTitle: Git Checkout
---
## Git Checkout

El comando `git checkout` cambia entre ramas o restaura los archivos del árbol de trabajo. Hay una serie de opciones diferentes para este comando que no se cubrirán aquí, pero puedes verlas todas en la [documentación de Git](https://git-scm.com/docs/git-checkout) .

### Checkout un compromiso específico

Para verificar un compromiso específico, ejecute el comando:

```shell
git checkout specific-commit-id 
```

podemos obtener los ID de confirmación específicos ejecutando:

```shell
git log 
```

### Checkout una rama existente

Para pagar una rama existente, ejecute el comando:

```shell
git checkout BRANCH-NAME 
```

En general, Git no le permitirá registrar otra rama a menos que su directorio de trabajo esté limpio, ya que perdería cualquier cambio de directorio de trabajo que no esté confirmado. Tiene tres opciones para manejar sus cambios: 1) desecharlos, 2) [cometerlos](https://guide.freecodecamp.org/git/git-commit/) o 3) [esconderlos](https://guide.freecodecamp.org/git/git-stash/) .

### Compra una nueva sucursal

Para crear y sacar una nueva rama con un solo comando, puede usar:

```shell
git checkout -b NEW-BRANCH-NAME 
```

Esto te cambiará automáticamente a la nueva rama.

### Realizar el pago de una nueva sucursal o restablecer una sucursal a un punto de inicio

El siguiente comando es similar a la verificación de una nueva rama, pero usa el indicador `-B` (observe el capitular B) y un parámetro `START-POINT` opcional:

```shell
git checkout -B BRANCH-NAME START-POINT 
```

Si la rama `BRANCH-NAME` no existe, Git la creará y la iniciará en `START-POINT` . Si la rama `BRANCH-NAME` ya existe, Git restablece la rama a `START-POINT` . Esto es equivalente a ejecutar `git branch` con `-f` .

### Forzar un pago

Puede pasar la opción `-f` o `--force` con el comando `git checkout` para forzar a Git a cambiar de rama, incluso si tiene cambios sin etapas (en otras palabras, el índice del árbol de trabajo difiere de `HEAD` ). Básicamente, se puede utilizar para deshacerse de los cambios locales.

Cuando ejecute el siguiente comando, Git ignorará las entradas no combinadas:

```shell
git checkout -f BRANCH-NAME 
 
 # Alternative 
 git checkout --force BRANCH-NAME 
```

### Deshacer cambios en su directorio de trabajo

Puede usar el comando `git checkout` para deshacer los cambios que haya realizado en un archivo en su directorio de trabajo. Esto revertirá el archivo a la versión en `HEAD` :

```shell
git checkout -- FILE-NAME 

```