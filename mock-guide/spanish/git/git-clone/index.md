---
title: Git Clone
localeTitle: Git Clone
---
## Git Clone

El comando `git clone` permite copiar un repositorio remoto en su máquina local.

Primero, busque el repositorio remoto para el proyecto en el que está trabajando o en el que está interesado, este también puede ser el enlace de un proyecto. A continuación, copia la URL para ello. Por ejemplo, si ha bifurcado el repositorio de guías freeCodeCamp, la URL se verá como `https://github.com/YOUR-GITHUB-USERNAME/guides.git` .

En la línea de comandos en su máquina local, navegue hasta donde desea guardar el proyecto en su directorio de trabajo. Finalmente, ejecute el comando `git clone` :

```shell
git clone URL-OF-REPOSITORY 
```

El nombre predeterminado del nuevo directorio en su computadora es el nombre del repositorio, pero puede cambiarlo incluyendo el último parámetro (opcional):

```shell
git clone URL-OF-REPOSITORY NAME-OF-DIRECTORY-ON-COMPUTER 
```

Git le da al remoto el alias "origen". Esta es una forma útil de referirse al control remoto cuando desea enviar sus cambios al servidor remoto o extraer cambios de este. Ver [Git push](https://guide.freecodecamp.org/git/git-push/) y [Git pull](https://guide.freecodecamp.org/git/git-pull/) para más detalles.

Git solo coloca la rama principal del control remoto en tu computadora. Esta rama suele denominarse "maestra" por convención, pero puede definirse de manera diferente según el proyecto.

Además, Git configura automáticamente su sucursal principal local para rastrear la sucursal remota. Cuando ejecute `git status` , verá información sobre si su sucursal local está actualizada con el control remoto. Aquí hay un ejemplo de salida:

```shell
myCommandPrompt (master) >> git status 
 On branch master 
 Your branch is up-to-date with 'origin/master'. 
 nothing to commit, working tree clean 
 myCommandPrompt (master) >> 
```

Si su sucursal `master` local tiene tres confirmaciones que aún no ha enviado al servidor remoto, el estado diría "Su sucursal está delante de 'origen / maestro' con 3 confirmaciones".

### Git Clone Espejo

Si desea alojar la duplicación de un repositorio, puede usar el parámetro duplicado.

```shell
git clone URL-OF-REPOSITORY --mirror 
```

Después de duplicar un repositorio, puede clonar su duplicación local desde su servidor.

```shell
git clone NAME-OF-DIRECTORY-ON-COMPUTER 
```

### Más información:

*   Documentación Git: [clon](https://git-scm.com/docs/git-clone)