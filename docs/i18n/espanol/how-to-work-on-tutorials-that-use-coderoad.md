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

No hay una manera fácil de ver exactamente qué cambió entre las ramas de versiones ya que la historia de Git será reescrita. Aceptar nuevas ramas de versión para usar tendrá que hacerse con una cuidadosa consideración y pruebas.

Estas instrucciones son para cambiar cualquier cosa en una rama de "versión", como pruebas, texto de prueba, archivos de reinicio, añadiendo y eliminando pasos, entre otras cosas.

Sigue estas instrucciones para crear una nueva versión:

- Echa un vistazo a la rama de **última versión** con `git checkout -b vX.X.X upstream/vX.X.X`
- Crea una nueva rama de eso, incrementando la versión, con `git checkout -b vX.X.Y`
- Haga sus cambios en la rama de versiones. Ver más información en la [Documentación de CodeRoad](https://coderoad.github.io/docs/edit-tutorial) para saber cómo trabajar con tutoriales
- Empuja la nueva rama a tu bifurcación con `git push -u origin vX.X.Y`
- Compruebe la rama `main`
- Crea una nueva rama de `main`. ej. `feat/version-X.X.Y`
- Cambia el `uri` en `coderoad.yaml` a tu bifurcación del repositorio. Esto es así que tú y los revisores pueden probarlo antes de empujarlo al repositorio freeCodeCamp. Cambie la versión a la nueva rama en los dos puntos de ese archivo. Añade tus cambios para la nueva versión a `CHANGELOG.md`. Haz cualquier otros cambios que necesites.
- Comprueba tus cambios con el mensaje `feat: release version X.X.Y - <optional description>`
- Ejecute `coderoad build` para crear un nuevo archivo `tutorial.json`
- Agregar y confirmar el archivo
- Enviar los cambios a tu bifurcación
- Prueba tus cambios siguiendo las [instrucciones de prueba a continuación](#testing-changes-to-a-version-branch). Haga cualquier cambio adicional y confirme los cambios como acaba de hacer o, si está satisfecho, siga el resto de las instrucciones
- Hacer un PR a `principal` usando su nueva rama `feat/version-X.X.Y`. Dale un título de `versión X.X.Y lista para la revisión`. Esto no se fusionará, es sólo para hacer saber a los revisores que hay una nueva versión lista
- Déjalo aquí para revisores

### Probando cambios a una rama de versiones

- Sigue las instrucciones en el repositorio [rdb-alpha](https://github.com/freeCodeCamp/rdb-alpha) para ejecutar un contenedor
- Comience el tutorial utilizando el archivo `tutorial.json` en cualquier bifurcación en la que estén los cambios. Asegúrate de usar el archivo en la rama `feat: version-X.X.Y` y no la rama `main`

### Subiendo una nueva versión

Antes de empujar una nueva versión, ver la nueva `feat/version-vX.X.Y` (se fusionará a `main`) rama en el fork del usuario. Asegúrese de que hay adiciones al `CHANGELOG. d` archivo que incluye los nuevos cambios, y la versión en los dos manchas de la carga de código `. aml` coincide con la nueva rama de versión.

Si tienes acceso de escritura al repo de freeCodeCamp, has verificado los archivos `CHANGELOG` y `coderoad.yaml`, has probado los cambios usando las instrucciones anteriores, y quieres empujar una nueva versión de un tutorial:

> [!WARNING]
> 
> Recordatorio: Nunca hacer o enviar cambios a una rama de versión que esté en uno de los repos de freeCodeCamp. Siempre cree una nueva

- Si no tiene un control remoto a donde existen los nuevos cambios, crear un control remoto a la bifurcación del usuario con `git remote add <users_fork>`
- Elimina cualquier **ramas** locales que compartan un nombre con las nuevas ramas. Probablemente llamado `vX.X.Y` o `feat/version-X.X.Y`
- Echa un vistazo a la nueva rama de versión con `git checkout -b vX.X.Y <remote>/vX.X.Y`
- Empuja la nueva rama de versión al repositorio freeCodeCamp con `git push -u upstream/vX.X.Y`. Necesitas empujar la nueva rama antes de actualizar `main` con el nuevo archivo `tutorial.json`
- Compruebe la rama de usuarios que se fusionará en `main` con `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Cambie el `uri` en `coderoad.yaml` de vuelta al repositorio freeCodeCamp
- Agregar y confirmar los cambios
- Ejecute `coderoad build` para crear el nuevo archivo `tutorial.json`
- Añadir y confirmar el archivo
- Empuja los cambios a su bifurcación con `git push -u origin/feat/version-X.X.Y`
- Hacer un PR a `main` en el repositorio freeCodeCamp
- Si estás satisfecho, fusionalo o déjalo y pide una reseña a alguien
- Después de fusionar las relaciones públicas, abra el tutorial siguiendo las instrucciones en el repositorio [rdb-alpha](https://github.com/freeCodeCamp/rdb-alpha) para asegurarse de que está cargando correctamente, y que usted puede pasar unos pasos
- Finalmente, si existe algún PRs para esta versión, ciérrelos

### Cómo volver a una versión anterior

- Crea una nueva rama desde la última `main` con `git checkout -b revert/to-version-X.X.X`
- Revertir todos los commits en esta rama hasta e incluyendo el commit de la versión después del que desea revertir. Por ejemplo, puede haber commits que se vean así:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

Si quieres revertir a v1.0.0, revertir todos los commits de `release: version 1.0.1` y después

- Crea una PR. Dale un título de `revertir: a la versión X.X.X`
