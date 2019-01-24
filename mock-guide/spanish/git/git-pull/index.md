---
title: Git Pull
localeTitle: Git Pull
---
## Git Pull

`git pull` es un comando de Git utilizado para actualizar la versión local de un repositorio desde un remoto.

Es uno de los cuatro comandos que solicita la interacción de red por Git. Por defecto, `git pull` hace dos cosas.

1.  Actualiza la rama de trabajo local actual (rama actualmente retirada)
2.  Actualiza las sucursales de seguimiento remoto para todas las demás sucursales.

`git pull` obtiene ( `git fetch` ) los nuevos compromisos y fusiona [( `git merge` )](https://guide.freecodecamp.org/git/git-merge) estos en su sucursal local.

La sintaxis de este comando es la siguiente:

```shell
# General format 
 git pull OPTIONS REPOSITORY REFSPEC 
 
 # Pull from specific branch 
 git pull REMOTE-NAME BRANCH-NAME 
```

en el cual:

*   **OPCIONES** son las opciones de comando, como `--quiet` o `--verbose` . Puedes leer más sobre las diferentes opciones en la [documentación de Git.](https://git-scm.com/docs/git-pull)
*   **REPOSITORY** es la URL de tu repositorio. Ejemplo: https://github.com/freeCodeCamp/freeCodeCamp.git
*   **REFSPEC** especifica qué **refs** buscar y qué **refs** locales actualizar
*   **REMOTE-NAME** es el nombre de su repositorio remoto. Por ejemplo: _origen_ .
*   **BRANCH-NAME** es el nombre de tu sucursal. Por ejemplo: _desarrollar_ .

**Nota**

Si tiene cambios no confirmados, la parte de combinación del comando `git pull` fallará y su rama local quedará intacta.

Por lo tanto, _siempre_ debe _confirmar sus cambios en una rama antes de extraer_ nuevas confirmaciones de un repositorio remoto.

**Tabla de contenido**

*   [Usando `git pull`](#using-git-pull)
*   [Control de versiones distribuido](#distributed-version-control)
*   [`git fetch` + `git merge`](#git-fetch-plus-git-merge)
*   [`git pull` en IDEs](#git-pull-in-IDEs)

### Usando git pull

Use `git pull` para actualizar un repositorio local desde el repositorio remoto correspondiente. Ej: mientras trabaja localmente en el `master` , ejecute `git pull` para actualizar la copia local del `master` y actualizar las otras ramas de seguimiento remoto. (Más información sobre las sucursales de seguimiento remoto en la siguiente sección.)

Pero hay algunas cosas que se deben tener en cuenta para que ese ejemplo sea verdadero:

*   El repositorio local tiene un repositorio remoto vinculado
*   Comprueba esto ejecutando `git remote -v`
*   Si hay varios controles remotos, `git pull` podría no ser suficiente información. Es posible que deba ingresar el `git pull origin` `git pull upstream` o `git pull upstream` .
*   La sucursal en la que está prestado actualmente tiene una sucursal de seguimiento remoto correspondiente
*   Comprueba esto ejecutando el `git status` . Si no hay una sucursal de seguimiento remoto, Git no sabe dónde obtener información _de._

### Control de versiones distribuido

Git es un **sistema de control de versiones distribuido** (DVCS). Con DVCS, los desarrolladores pueden trabajar en el mismo archivo al mismo tiempo en entornos separados. Después de _enviar el_ código al repositorio remoto compartido, otros desarrolladores pueden _extraer el_ código modificado.

#### Interacciones de red en Git

Solo hay cuatro comandos que solicitan interacciones de red en Git. Un repositorio local no tiene conocimiento de los cambios realizados en el repositorio remoto hasta que haya una solicitud de información. Y, un repositorio remoto no tiene conocimiento de los cambios locales hasta que se empujan las confirmaciones.

Los cuatro comandos de red son:

*   `git clone`
*   `git fetch`
*   `git pull`
*   `git push`

#### Sucursales en DVCS

Cuando trabajas con Git, puedes sentir que hay muchas copias del mismo código flotando por todas partes. Hay diferentes versiones del mismo archivo en cada rama. Y, diferentes copias de las mismas ramas en la computadora de cada desarrollador y en el control remoto. Para hacer un seguimiento de esto, Git usa algo llamado **ramas de seguimiento remoto** .

Si ejecuta `git branch --all` dentro de un repositorio de Git, las ramas de seguimiento remoto aparecen en rojo. Estas son copias de solo lectura del código tal como aparece en el control remoto. (¿Cuándo fue la última interacción de red que habría traído información localmente? Recuerde cuándo se actualizó por última vez esta información. La información en las ramas de seguimiento remoto refleja la información de esa interacción).

Con **las sucursales de seguimiento remoto** , puede trabajar en Git en varias sucursales sin interacción de red. Cada vez que ejecuta los comandos `git pull` o `git fetch` , actualiza **las ramas de seguimiento remoto** .

### git fetch plus git merge

`git pull` es un comando de combinación, igual a `git fetch` + `git merge` .

#### git fetch

Por sí solo, `git fetch` actualiza todas las sucursales de seguimiento remoto en el repositorio local. Ningún cambio se refleja realmente en ninguna de las ramas locales de trabajo.

#### git merge

Sin ningún argumento, `git merge` fusionará la rama de seguimiento remoto correspondiente a la rama de trabajo local.

#### git pull

`git fetch` actualiza las sucursales de seguimiento remoto. `git merge` actualiza la rama actual con la rama de seguimiento remoto correspondiente. Usando `git pull` , obtienes ambas partes de estas actualizaciones. Pero, esto significa que si se le presta atención a la rama de `feature` y ejecuta `git pull` , cuando se retira a `master` , no se incluirán nuevas actualizaciones. Siempre que realice el pago en otra sucursal que pueda tener nuevos cambios, siempre es una buena idea ejecutar `git pull` .

### git pull en IDEs

El lenguaje común en otros IDES no puede incluir la palabra `pull` . Si buscas las palabras `git pull` pero no las ves, busca la palabra `sync` lugar.

### forzando un PR remoto (solicitud de extracción) en el repositorio local

Para propósitos de revisión y similares, los RP en remoto deben ser buscados en el repositorio local. Puede usar el comando `git fetch` siguiente manera para lograr esto.

`git fetch origin pull/ID/head:BRANCHNAME`

ID es el ID de solicitud de extracción y BRANCHNAME es el nombre de la rama que desea crear. Una vez que se haya creado la rama, puede utilizar `git checkout` para cambiar a ese brach.

### Otros recursos en git pull

*   [git-scm](https://git-scm.com/docs/git-pull)
*   [GitHub Help Docs](https://help.github.com/articles/fetching-a-remote/#pull)
*   [Entrenamiento GitHub On Demand](https://services.github.com/on-demand/intro-to-github/create-pull-request)
*   [Tutoriales de sincronización](https://www.atlassian.com/git/tutorials/syncing)

### Otros recursos en git en guide.freecodecamp.org

*   [Git fusionar](../git-merge/index.md)
*   [Git checkout](../git-checkout/index.md)
*   [Git commit](../git-commit/index.md)
*   [Git stash](../git-stash/index.md)
*   [Rama de git](../git-branch/index.md)