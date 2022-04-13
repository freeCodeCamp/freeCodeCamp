Esta página describe cómo contribuir a los tutoriales y proyectos de freeCodeCamp que se complementan usando la extensión CodeRoad de VS Code.

## Cómo funcionan los tutoriales

Los tutoriales de freeCodeCamp que utilizan CodeRoad tienen cada uno su propio repositorio bajo la organización freeCodeCamp en GitHub. Todos comienzan con `learn-`. Por ejemplo, `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`.

Cada repositorio tiene una rama principal `main`  y una "versión" de rama, por ejemplo. `v1.0.0`.

Los dos archivos principales en la rama `main` son `TUTORIAL.md` y `coderoad.yaml`. `TUTORIAL.md` contiene todas las instrucciones, pistas, títulos y todo lo necesario para el tutorial. `coderoad.yaml` contiene instrucciones para CodeRoad, tales como qué comandos correr y cuándo, qué archivos visualizar para cambios, y qué rama de versiones utilizar para los pasos.

La rama de "versión" contiene los commits que serán cargados en cada paso de un tutorial. Los mensajes de commit en esta rama deben ser específicos. El primer commit necesita `INIT` para su mensaje y contiene todos los archivos a cargar antes de la primera lección.

Los mensajes de commit subsecuentes deben coincidir con el número de pasos en `TUTORIAL.md` de la rama `main`. Por ejemplo, el commit con el mensaje `10.1` será cargado cuando un usuario va al paso `10.1`.

Para realizar cambios a los commits en una rama de versión, necesitaría realizar un rebase y editar los commits que desea cambiar. Esto sobreescribirá la historia del Git, por lo que no podemos aceptar PRs a ese tipo de ramas. Una vez que una rama de versión está en el repositorio de freeCodeCamp, no debería cambiar nunca.

> [!WARNING]
> 
> Nunca realice o envíe cambios a una rama de versión que se encuentre en uno de los repositorios de freeCodeCamp. Siempre cree una nueva

## Cómo contribuir

### Requisitos previos

Instala [CodeRoad CLI tools](https://www.npmjs.com/package/@coderoad/cli) con `npm install -g @coderoad/cl`.

Ha habido algunos problemas con la última versión. Si `coderoad --version` no funciona después de instalar, baje a la versión `0.7.0` con `npm install -g @coderoad/cli@0.7.0`.

### Trabajando en `main`

Este conjunto de instrucciones es para PRs que sólo realizan cambios minor (menores) en `main` a **lecciones existentes**. Eso se constituye principalmente de cambios de errores de tipografía, gramática, indicios e instructivos o arreglos en el archivo `TUTORIAL.md`.

Para todo lo demás, incluyendo agregando y eliminando lecciones, siga las [instrucciones para trabajar en una rama de versión](#working-on-version-branch). No necesitará crear una nueva rama de versión para esto - puedes crear una PR siguiendo las instrucciones anteriores.

> [!NOTE]
> 
> Estos cambios utilizarán la rama de versión existente. Si son sustanciales, siéntase libre de agregarlos a `CHANGELOG.md`. La mayor parte del tiempo, un buen mensaje de commit debería funcionar

Nunca necesitas modificar directamente el archivo `tutorial.json`. Esto se creará con las herramientas CLI.

Si sólo está haciendo cambios menores como corregir un error tipográfico o gramatical, no tiene que probar los cambios.

Siga estas instrucciones para hacer un PR, teniendo en cuenta que las instrucciones usualmente usan las lecciones a su alrededor para el contexto:

- Crea una copia de la última rama de la versión con `git branch vX.X.X upstream/vX.X.X` - no necesitas verificarla, solo debe existir.
- Crea y consulta una nueva bifurcación de `main`
- Haz **y envía** tus cambios. Recordatorio: No necesitas cambiar nada en el archivo `tutorial.json`. Es probable que sólo necesite hacer cambios en `TUTORIAL.md`
- Ejecute `coderoad build` para recrear el archivo `tutorial.json`
- Confirme los cambios con `update json` como mensaje
- Hacer un PR

### Probando cambios en `main`

Si deseas probar sus cambios en `main` después de seguir las instrucciones anteriores, sigue estas instrucciones:

- Siga las instrucciones del [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) para ejecutar un contenedor
- Comienza el tutorial usando el archivo `tutorial.json` en la nueva rama

### Revisiando las relaciones públicas en `main`

Si revisa un PR que solo cambia `main` con problemas de instrucción o gramática como se describe anteriormente, los cambios en `TUTORIAL.md` deberían coincidir con los cambios en `tutorial.json`.

El archivo `tutorial.json` no debería tener cambios para los hash de commit, o ids de paso/nivel. Los comandos de inicio o de nivel o los monitores de archivos probablemente no deberían cambiarse. Hay excepciones si hay un problema con un paso, pero deben ser tratados con más precaución.

Además, ten en cuenta que las instrucciones usualmente usan las lecciones a su alrededor para el contexto, así que asegúrate de que tienen sentido.

### Trabajando en la rama de versión

> [!ADVERTENCIA]
> 
> Recordatorio: Nunca hacer o enviar cambios a una rama de versión que esté en uno de los repos de freeCodeCamp. Siempre crea una nueva

No hay una manera fácil de ver exactamente qué cambió entre las ramas de versiones ya que la historia de Git será reescrita. Accepting new version branches to use will need to be done with careful consideration and testing.

These instructions are for changing anything on a "version" branch, such as tests, test text, reset files, adding and deleting steps, among other things.

Sigue estas instrucciones para crear una nueva versión:

- Checkout the **latest** version branch with `git checkout -b vX.X.X upstream/vX.X.X`
- Create a new branch off of that, incrementing the version, with `git checkout -b vX.X.Y`
- Make your changes to the version branch. See more info in the [CodeRoad Documentation](https://coderoad.github.io/docs/edit-tutorial) for how to work with tutorials
- Push the new branch to your fork with `git push -u origin vX.X.Y`
- Checkout the `main` branch
- Create a new branch off `main`. e.g. `feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` to your fork of the repo. This is so you and reviewers can test it before pushing it to the freeCodeCamp repo. Change the version to the new branch in the two spots of that file. Add your changes for the new version to `CHANGELOG.md`. Haz cualquier otros cambios que necesites.
- Commit your changes with the message `feat: release version X.X.Y - <optional description>`
- Run `coderoad build` to create a new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork
- Test your changes following the [testing instructions below](#testing-changes-to-a-version-branch). Make any additional changes and commit them as you just did, or, if you are satisfied, follow the rest of the instructions
- Make a PR to `main` using your new `feat/version-X.X.Y` branch. Give it a title of `version X.X.Y ready for review`. This will not be merged, it is just to let reviewers know that there is a new version ready
- Leave it here for reviewers

### Probando cambios a una rama de versiones

- Follow the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to run a container
- Start the tutorial using the `tutorial.json` file on whatever fork the changes are on. Make sure to use the file on the `feat: version-X.X.Y` branch and not the `main` branch

### Subiendo una nueva versión

Before pushing a new version, view the new `feat/version-vX.X.Y` (will be merged to `main`) branch on the user's fork. Make sure there are additions to the `CHANGELOG.md` file that include the new changes, and the version in the two spots of `coderoad.yaml` matches the new version branch.

If you have write access to the freeCodeCamp repo, have verified the `CHANGELOG` and `coderoad.yaml` files, have tested the changes using the instructions above, and want to push a new version of a tutorial:

> [!WARNING]
> 
> Reminder: Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

- If you don't have a remote to where the new changes exist, create a remote to the user's fork with `git remote add <users_fork>`
- Delete any **local** branches that share a name with the new branches. Likely named either `vX.X.Y` or `feat/version-X.X.Y`
- Checkout the new version branch with `git checkout -b vX.X.Y <remote>/vX.X.Y`
- Push the new version branch to the freeCodeCamp repo with `git push -u upstream/vX.X.Y`. You need to push the new branch before you update `main` with the new `tutorial.json` file
- Checkout the users branch that will be merged into `main` with `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` back to the freeCodeCamp repo
- Add and commit the changes
- Run `coderoad build` to create the new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork with `git push -u origin/feat/version-X.X.Y`
- Make a PR to `main` on the freeCodeCamp repo
- If you are satisfied, merge it or leave it and ask for a review from someone
- After the PR is merged, open the tutorial by following the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to make sure it's loading properly, and that you can get through a few steps
- Finally, if any PRs for this version exists, close them

### Cómo volver a una versión anterior

- Create a new branch off the latest `main` with `git checkout -b revert/to-version-X.X.X`
- Revert all commits on this branch up to and including the commit of the version after the one you want to revert to. For example, you may have commits that look like this:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

If you want to revert to v1.0.0, revert all the commits from `release: version 1.0.1` and after

- Crea una PR. Dale un título de `revertir: a la versión X.X.X`
