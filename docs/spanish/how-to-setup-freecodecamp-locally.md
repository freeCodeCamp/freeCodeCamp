# Configura freeCodeCamp localmente en tu sistema

Sigue esta guía para poder configurar freeCodeCamp localmente en tu sistema. Esto es altamente recomendable si quieres realizar contribuciones regularmente.

Algunos de los flujos de trabajo de contribución, como la vista previa de páginas para la guía o desafíos de programación, depuración y arreglo de errores en el código requiere que tengas freeCodeCamp ejecutándose de localmente.

## Como hacer un _Fork_ de un repositorio en GitHub

['Forking'](https://help.github.com/articles/about-forks/) es un paso donde obtienes tu propia copia del repositorio principal de freeCodeCamp (tambien conocido como _repo_) en GitHub.

Esto es esencial, porque de esta manera puedes trabajar en tu copia de freeCodeCamp en GitHub, o descargarla para trabajar localmente. Más adelante, podrás solicitar que se introduzcan cambios en el repositorio principal a través de un _pull request_.

> **ProTip:**
> El repositorio principal en `https://github.com/freeCodeCamp/freeCodeCamp` a menudo se conoce como repositorio `upstream`.
> Tu fork en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp` a menudo se conoce como repositorio `origin`.

**Sigue estos paso para realizar un fork el repositorio `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Ve al repositorio de freeCodeCamp en GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Haz click en el Botón "Fork" en la esquina superior izquierda de la interfaz ([Mas Detalles Aquí](https://help.github.com/articles/fork-a-repo/))
3. Luego de realizar el _fork_ del repositorio, serás redirigido a tu copia de freeCodeCamp en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp`

![GIF - Como forkear freeCodeCamp en GitHub](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## Preparando el ambiente de desarrollo

Una vez que tenga los requisitos previos instalados, debes preparar tu entorno de desarrollo. Esto es común para muchos flujos de trabajo de desarrollo, y tendrás que hacerlo sólo una vez.

**Sigue estos pasos para preparar tu entorno de desarrollo:**

1. Instala [Git](https://git-scm.com/) o tu cliente de Git favorito, si aún no lo has hecho. Actualiza a la última versión, el que vino incluido con tu sistema operativo puede estar desactualizado.

2. (Opcional pero recomendado) [Configurar una llave SSH](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.

3. Instala un editor de código de tu preferencia.

   Recomendamos encarecidamente el uso de [VS Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Estos son algunos de los mejores editores gratuitos de código abierto.

4. Configuración de _linting_ para tu editor de código.

   Debes tener [ESLint ejecutándose en tu editor](http://eslint.org/docs/user-guide/integrations.html), y este destacará cualquier cosa que no se ajueste a la [Guía de Estilo de freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > Por favor, no ignore los errores de _linting_. Están destinados a **ayudarle** a usted y a garantizar una base de código limpia y simple.

## Clona tu copia de freeCodeCamp

['Clonar'](https://help.github.com/articles/cloning-a-repository/) es un paso en el que **descarga** una copia de un repositorio que es de su propiedad o de otra persona desde una ubicación `remota`. En su caso, esta ubicación remota es su `fork` del repositorio de freeCodeCamp, que debería estar disponible en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp`.

Ejecute estos comandos en su máquina local:

1. Abra una Terminal / Símbolo del sistema / Bash Shell en su directorio de proyectos

   _Ejemplo: `/sudirectoriodeproyectos/`_

2. Clona tu _fork_ de freeCodeCamp, reemplazando `TU_NOMBRE_DE_USUARIO` con tu nombre de usuario de GitHub

   ```shell
   git clone https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp.git
   ```

Esto descargará todo el repositorio de freeCodeCamp a su directorio de proyectos.

## Configura un `upstream` al repositorio principal

Now that you have downloaded a copy of your fork, you will need to setup an `upstream`.
Ahora que ha descargado una copia de su _fork_, va a necesitar configurar un `upstream`.

Como se mencionó anteriormente, el repositorio principal en `https://github.com/freeCodeCamp/freeCodeCamp` a menudo se denomina repositorio `upstream`. Su _fork_ en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp` a menudo se denomina repositorio `origin`.

Debe apuntar su clon local al `upstream` además del `origin`. Esto es para que pueda sincronizar los cambios desde el repositorio principal. De esta manera, no tendrá que pasar por el _forking_ y la clonación una y otra vez.

1.  Cambia el directorio al nuevo directorio freeCodeCamp:

    ```shell
    cd freeCodeCamp
    ```

2.  Agrega un _remote_ al repositorio principal de freeCodeCamp:

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3.  Comprueba que la configuración luce bien para ti:

    ```shell
    git remote -v
    ```

        La salida debe ser algo como abajo:

    ```shell
    origin    https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp.git (fetch)
    origin    https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp.git (push)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```

## Ejecutando freeCodeCamp localmente en tu máquina

Ahora que tienes una copia local de freeCodeCamp, puedes seguir estas instrucciones para que se ejecute localmente. Esto te ayudará a:

- Vista previa de las ediciones a las páginas tal como aparecerían en la plataforma de aprendizaje.
- Trabajar en mejoras relacionadas con la interfaz de usuario.
- Depurar y solucionar problemas en los servidores de aplicaciones y aplicaciones cliente.

Puedes omitir la ejecución de freeCodeCamp localmente, si solo estás editando archivos, haciendo un `rebase` o resolviendo conflictos `merge`. Siempre puedes volver a esta parte de las instrucciones más tarde.

[Saltar ejecución de freeCodeCamp localmente](#making-changes-to-your-clone-of-freecodecamp-locally)

Comienza por instalar estos requisitos previos de software.

| Requisito previo                                                                              | Versión | Notas                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Notas de lanzamiento](https://docs.mongodb.com/manual/release-notes/), Nota: Actualmente estamos en `3.6`, se [planea una actualización](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |
| [Node.js](http://nodejs.org)                                                                  | `8.x`   | [Programación LTS](https://github.com/nodejs/Release#release-schedule)                                                                                                                                |
| npm (viene incluido con Node)                                                                 | `6.x`   | No tiene lanzamientos LTS, usamos la versión incluida con Node LTS.                                                                                                                                   |

**Importante:**

Recomendamos encarecidamente actualizar a las últimas versiones estables conocidas como versiones de soporte a largo plazo (LTS) de las anteriores.
Si Node.js o MongoDB ya está instalado en su máquina, ejecute los siguientes comandos para validar las versiones:

```shell
node -v
mongo --version
npm -v
```

> Si tiene una versión diferente, instale la versión recomendada. Solo podemos admitir problemas de instalación para las versiones recomendadas.

**Tengo problemas con la instalación de los requisitos previos recomendados. ¿Qué tengo que hacer?**

Regularmente desarrollamos sistemas operativos populares y recientes como macOS 10.12 o posterior, Ubuntu 16.04 o posterior y Windows 10. Se recomienda buscar su problema específico en recursos como: Google, Stack Overflow o Stack Exchange. Lo más probable es que alguien haya enfrentado el mismo problema y ya haya una respuesta a su consulta específica.

Si tiene un sistema operativo diferente y/o aún tiene problemas, comuníquese con [la comunidad de colaboradores en nuestro foro público](https://www.freeCodeCamp.org/c/contributors) o la [Sala de chat de colaboradores](https://gitter.im/freeCodeCamp/Contributors). Es posible que podamos solucionar algunos problemas comunes.

No podemos apoyarlo en GitHub, porque los problemas de instalación del software están más allá del alcance de este proyecto.

### Instalando las dependencias

Comience por instalar las dependencias necesarias para que la aplicación se inicie.

```shell
# Instalar las dependencias de NPM
npm install
```

Then you need to add the private environment variables (API Keys):

```shell
# crea una copia de "sample.env" y renombrala como ".env".
# Llénalo con las llaves y secretos necesarios del API:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

No es necesario cambiar las claves para ejecutar la aplicación localmente. Puede dejar los valores predeterminados del `sample.env` tal como está.

`MONGOHQ_URL` es el más importante. A menos que tenga MongoDB ejecutándose en una configuración diferente a la predeterminada, la URL en `sample.env` debería funcionar bien.

Puedes dejar las otras llaves como están. Ten en cuenta que si deseas utilizar más servicios, tendrás que obtener tus propias llaves de API para esos servicios y editar esas entradas según corresponda en el archivo `.env`.

A continuación, iniciamos los diversos servicios, es decir, el api-server, la interfaz de usuario del cliente, etc. Puedes [aprender más sobre estos servicios en esta guía](#).

Al arrancar, estás atando los enlaces entre los servicios. Son semi-independientes. Es decir, en producción, estos servicios se implementan en sus propias ubicaciones, pero mientras se ejecutan localmente, deseas que todos estén disponibles para ti.

```shell
# Arranca todos los proyectos dentro de este repositorio
npm run bootstrap
```

### Iniciar MongoDB

Necesitarás iniciar MongoDB, antes de que puedas iniciar la aplicación:

Inicia el servidor MongoDB en un terminal separado

- En macOS y Ubuntu:

  ```shell
  mongod
  ```

- En Windows, debes especificar la ruta completa al binario de `mongod`

  Asegúrate de reemplazar el `3.6` con la versión que tienes instalada

  ```shell
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

> ProTip:
> Puedes evitar tener que iniciar MongoDB cada vez, instalándolo como un servicio en segundo plano.
> Puedes [aprender más sobre esto en su documentación para tu sistema operativo](https://docs.mongodb.com/manual/administration/install-community/)

### Alimentando la base de datos

A continuación, vamos a alimentar la base de datos. En este paso, ejecutamos el siguiente comando que llenará el servidor MongoDB con algunos conjuntos de datos iniciales que requieren los otros servicios. Esto incluye algunos esquemas, entre otras cosas.

```shell
npm run seed
```

### Iniciar el cliente de freeCodeCamp y el servidor API

Ahora puedes inciar el servidor API y los clientes de las aplicaciones.

```shell
npm run develop
```

Este único comando iniciará todos los servicios. Incluyendo el servidor de API y los clientes de las aplicaciones para que puedas trabajar en ellos.

Ahora abre un navegador web y visita <http://localhost:8000>. Si la aplicación carga, felicitaciones - estás listo.

> ProTip:
>
> El API Server sirve APIs en `http://localhost:3000`
> Gatsby sirve la aplicación del cliente en `http://localhost:8000`

Es decir, si visitas <http://localhost:3000/explorer> deberias poder ver los APIs que tenemos.

Felicitaciones 🎉! Ahora tienes una copia de toda la plataforma de aprendizaje de freeCodeCamp ejecutándose en tu máquina local.

## Referencia de comandos rápidos cuando se trabaja localmente

[Aquí hay una referencia rápida](/docs/README.md) a una lista de comandos que puedes necesitar localmente de vez en cuando.

## Haciendo cambios a tu clon de freeCodeCamp localmente

A continuación, puedes modificar archivos y hacer _commit_ de tus cambios.

Sigue estos pasos:

1. Asegúrate de que estas en la rama `master`

   ```shell
   git status
   ```

   Deberías obtener una salida como esta:

   ```shell
   On branch master
   Your branch is up-to-date with 'origin/master'.

   nothing to commit, working directory clean
   ```

   Si no estás en master o tu directorio de trabajo no está limpio, resuelve los archivos/_commits_ pendientes y realiza un _checkout_ a `master`:

   ```shell
   git checkout master
   ```

2. A continuación, querrás hacer un `rebase` desde el `upstream`.

   Este paso **sincronizará los últimos cambios** desde el repositorio principal de freeCodeCamp. Es importante que realices un `rebase` tan seguido como sea posible, para evitar conflictos mas tarde.

   ```shell
   git pull --rebase upstream master
   ```

   Opcionalmente, puedes realizar un _push_ a tu `origin`, para mantener un historial limpio en tu _fork_ en GitHub.

   ```shell
   git push origin master --force
   ```

3. A continuación, tendrás que crear una nueva rama.

   Trabajar en una rama diferente para cada problema, te ayudará a mantener tu copia local limpia. Nunca deberías trabajar en la rama `master`. Esto ensuciará su copia de freeCodeCamp y es posible que tenga que comenzar de nuevo con un nuevo _clon_ o un _fork_.

   Asegúrate de que estas en `master` como se explicó anteriormente, y crea una rama a partir de ahí:

   ```shell
   git checkout -b fix/update-guide-for-xyz
   ```

   El nombre de tu rama debe comenzar con `fix/`, `feat/`, etc. Evita usar el número de issue en la rama. Mantenlos cortos, significativos y únicos.

   Algunos ejemplos de buenos nombres para ramas son:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. A continuación, puedes trabajar en las páginas de edición y trabajar en el código en tu editor de texto favorito.

5. Una vez que esté satisfecho con los cambios, debe ejecutar freeCodeCamp localmente para obtener una vista previa de los cambios.

6. Asegúrese de corregir cualquier error y verifique el formato de sus cambios. Tenemos una guía de estilo para los artículos de la guía y los desafíos de código.

7. A continuación, revisa y confirma los archivos que estás actualizando

   ```shell
   git status
   ```

   Esto debe mostrar una lista de los archivos `unstaged` que has editado.

   ```shell
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Realiza los cambios y haz un _commit_.

   En este paso, solo debes marcar los archivos que hayas editado o agregado. Puedes realizar un _reset_ y resolver archivos que no pretendías cambiar.

   ```shell
   git add path/to/my/changed/file.ext
   ```

   O, alternativamente, puede agregar todos los archivos `unstaged` al área de preparación (_stage_):

   ```shell
   git add .
   ```

   Solo los archivos que se movieron al área de preparación (_stage_) se agregarán cuando realice un _commit_.

   ```shell
   git status
   ```

   Salida:

   ```shell
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Ahora, puedes realizar un _commit_ de tus cambios con un mensaje corto como el siguiente:

   ```shell
   git commit -m "fix: my short commit message"
   ```

   Algunos ejemlplos:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Opcional:

   Recomendamos encarecidamente seguir la convención al redactar el mensaje de un _commit_. Esta es una buena práctica que verás en algunos de los repositorios populares de código abierto. Como desarrollador, esto lo alienta a seguir prácticas estándar.

   Algunos ejemplos de esta convención son:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Mantén éstos cortos, no más de 50 caracteres. Siempre puedes agregar información adicional en la descripción del mensaje de confirmación.

   Esto no lleva más tiempo que un mensaje no convencional como 'update file' o 'add index.md'

   Puedes aprender mas sobre por que deberías seguir esta convención [aquí](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)

9. Si te das cuenta de que necesitas editar un archivo o, actualizar el mensaje de un _commit_ luego de haber realizado el _commit_ puedes hacerlo luego de haber editado los archivos con:

   ```shell
   git commit --amend
   ```

   Esto abrirá el editor de texto por default como `nano` o `vi` donde puedes editar el título del _commit_ y agregar/editar la descripción.

10. A continuación, puedes realizar un _push_ de tus cambios a tu _fork_.

    ```shell
    git push origin branch/name-here
    ```

## Proponer un Pull Request (PR)

1. Una vez loa cambios han sido realizados, se te solicitará crear un pull request en el GitHub de tu _fork_.

   ![Imagen - Solicitud de comparación de pull request Github](/docs/images/github/compare-pull-request-prompt.png)

2. Por defecto, todos los pull request deben realizarse contra la rama `master` del repositorio principal de freeCodeCamp.

   Asegúrate de que tu _fork_ base esta apuntando a freeCodeCamp/freeCodeCamp cuando envíes un Pull Request.\*\*

   ![Imagen - Comparando forks cuando se realiza el pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Envía el pull request desde tu rama hacia la rama `master` de freeCodeCamp.

4. En el cuerpo de tu RP, incluye un resumen más detallado de los cambios que realizaste y por qué.

   - Se te presentará una plantilla de pull request. Esta es una lista de verificación que deberías haber seguido antes de abrir el pull request.

   - Rellena los detalles que te parezcan adecuados. Esta información será revisada y decidirá si tu pull request será aceptado o no.

   - Si el PR tiene como objetivo arreglar un bug/problema existente entonces, al final de la descripción de tu PR inserta la palaba `closes` y #xxxx (donde xxxx es el número de issue o problema). Esto le indica a GitHub que debe cerrar automáticamente el problema existente, si el PR es aceptado e insertado (`merged`).

5. Indica si has probado en una copia local del sitio o no.

   Esto es muy importante cuando estas haciendo cambios que no estan relacionados con archivos markdown. Por ejemplo, cambios a código CSS o JavaScript, etc.

## Obtenga su PR aceptado

## Obteniendo ayuda

Si estás atascado, y necesitas ayuda, haznos saber preguntando en la [categoría de 'Contributors' en nuestro foro](https://www.freecodecamp.org/forum/c/contributors) o el [Chat de Contribuyentes](https://gitter.im/FreeCodeCamp/Contributors) en Gitter.

Puede haber un error en la consola de tu navegador o en Bash / Terminal / Command Line que ayudará a identificar el problema.

### Solución de problemas

Si la aplicación se inicia pero encuentras errores en la interfaz de usuario, por ejemplo, si las fuentes no se están cargando o si el editor de código no se muestra correctamente, puedes intentar los siguientes pasos al menos una vez:

```shell
# Elimina todos los node modules instalados
rm -rf node_modules ./**/node_modules

# Reinstala paquetes npm
npm install

# Arrancar el proyecto
npm run bootstrap

# Alimentar base de datos
npm run seed

# Re-iniciar la aplicación
npm run develop
```
