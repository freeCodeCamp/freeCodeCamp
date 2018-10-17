---
title: Git Push
localeTitle: Git Push
---
## Git Push

El comando `git push` permite enviar (o _enviar_ ) las confirmaciones desde su sucursal local en su repositorio Git local al repositorio remoto.

Para poder ingresar a su repositorio remoto, debe asegurarse de que **todos los cambios en el repositorio local estén confirmados** .

La sintaxis de este comando es la siguiente:

```bash
git push <repo name> <branch name> 
```

Hay una serie de opciones diferentes que puede pasar con el comando, puede aprender más sobre ellas en la [documentación de Git](https://git-scm.com/docs/git-push#_options_a_id_options_a) o ejecutar `git push --help` .

### Empuje a un repositorio remoto y sucursal específicos

Para insertar código, primero debe clonar un repositorio en su máquina local.

```bash
# Once a repo is cloned, you'll be working inside of the default branch (the default is `master`) 
 git clone https://github.com/<git-user>/<repo-name> && cd <repo-name> 
 # make changes and stage your files (repeat the `git add` command for each file, or use `git add .` to stage all) 
 git add <filename> 
 # now commit your code 
 git commit -m "added some changes to my repo!" 
 # push changes in `master` branch to github 
 git push origin master 
```

Para obtener más información sobre las sucursales, consulte los enlaces a continuación:

*   [git checkout](https://github.com/renington/guides/blob/master/src/pages/git/git-checkout/index.md)
*   [rama de git](https://github.com/renington/guides/blob/master/src/pages/git/git-branch/index.md)

### Empuje a un repositorio remoto específico y todas las ramas en él

Si desea enviar todos sus cambios al repositorio remoto y todas las ramas en él, puede usar:

```bash
git push --all <REMOTE-NAME> 
```

en el cual:

*   `--all` es el indicador que indica que desea enviar todas las ramas al repositorio remoto
*   `REMOTE-NAME` es el nombre del repositorio remoto al que desea enviar

### Empujar a una rama específica con el parámetro de fuerza

Si desea ignorar los cambios locales realizados en el repositorio Git en Github (lo que la mayoría de los desarrolladores hacen para una solución para el servidor de desarrollo), puede usar el comando --force para presionar ignorando esos cambios.

```bash
git push --force <REMOTE-NAME> <BRANCH-NAME> 
```

en el cual:

*   `REMOTE-NAME` es el nombre del repositorio remoto al que desea enviar los cambios
*   `BRANCH-NAME` es el nombre de la rama remota a la que desea enviar sus cambios

### Empuje ignorando el gancho pre-empuje de Git

De forma predeterminada, `git push` activará el `--verify` toggle. Esto significa que git ejecutará cualquier script de envío previo del lado del cliente que se haya configurado. Si los scripts pre-push fallan, también lo hará el git push. (Los ganchos previos al empuje son buenos para hacer cosas como, verificar si los mensajes de confirmación confirman los estándares de la compañía, ejecutar pruebas unitarias, etc.). Ocasionalmente, es posible que desee ignorar este comportamiento predeterminado, por ejemplo, en el escenario en el que desea enviar sus cambios a una rama de características para que otro colaborador los tire, pero los cambios en el trabajo en curso están superando las pruebas unitarias. Para ignorar el gancho, simplemente ingrese su comando push y agregue la bandera `--no-verify`

```bash
git push --no-verify 
```

### Más información:

*   [Documentación Git - Push](https://git-scm.com/docs/git-push)
*   [Ganchos de Git](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)