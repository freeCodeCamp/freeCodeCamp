---
title: Git Remote
localeTitle: Git Remote
---
## Git Remote

El comando `git remote` permite administrar sus repositorios remotos Git. Los repositorios remotos son referencias a otros repositorios Git que operan en la misma base de código.

Usted puede [tirar de](https://guide.freecodecamp.org/git/git-pull/) y [empujar](https://guide.freecodecamp.org/git/git-push/) repositorios remotos.

Puede insertar o arrastrar a una URL HTTPS, como `https://github.com/user/repo.git` , o una URL SSH, como `git@github.com:user/repo.git` .

No se preocupe, cada vez que presione algo, no necesita escribir la URL completa. Git asocia una URL remota con un nombre, y el nombre que la mayoría de la gente usa es `origin` .

### Listar todos los repositorios remotos configurados

```bash
git remote -v 
```

Este comando enumera todos los repositorios remotos junto con su ubicación.

Los repositorios remotos son referidos por nombre. Como se señaló anteriormente, el repositorio principal de un proyecto generalmente se llama `origin` .

Cuando tu usas [git clon](https://guide.freecodecamp.org/git/git-clone/) para obtener una copia de un repositorio, Git configura la ubicación original como el repositorio remoto de _origen_ .

### Añadir un repositorio remoto

Para agregar un repositorio remoto a su proyecto, ejecutaría el siguiente comando:

```bash
git remote add REMOTE-NAME REMOTE-URL 
```

La `REMOTE-URL` puede ser HTTPS o SSH. Puede encontrar la URL en GitHub haciendo clic en el menú desplegable "Clonar o descargar" en su repositorio.

Por ejemplo, si desea agregar un repositorio remoto y llamarlo `example` , ejecutaría:

```bash
git remote add example https://example.org/my-repo.git 
```

### Actualizar una URL remota

Si la URL de un repositorio remoto cambia, puede actualizarla con el siguiente comando, donde `example` es el nombre del remoto:

```bash
git remote set-url example https://example.org/my-new-repo.git 
```

### Eliminar mandos a distancia

Eliminar mandos a distancia se hace así:

```bash
git remote rm REMOTE-NAME 
```

Puede confirmar que el control remoto se ha ido viendo la lista de sus controles remotos existentes:

```bash
git remote -v 
```

### Más información:

*   [Git documentación remota](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)