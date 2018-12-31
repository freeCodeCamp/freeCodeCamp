<table>
    <tr>
        <!-- Do not translate this table -->
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Configura freeCodeCamp localmente en tu sistema

Sigue esta guía para poder configurar freeCodeCamp localmente en tu sistema. Esto es altamente recomendable si quieres realizar contribuciones regularmente.

El flujo de trabajo de las contribuciones puede desear y mostrar vistas previas de las páginas para la guía o los desafíos de programación. La depuración o el arreglo de errores en la base de código requiere que tengamos freeCodeCamp ejecutándose de manera local. 

## Como hacer Forking a un repositorio en GitHub

['Forking'](https://help.github.com/articles/about-forks/) es un paso donde obtienes tu propia copia del repositorio principal de freeCodeCamp (también conocido como _repo_) en GitHub.

Esto es esencial, porque de esta manera puedes trabajar en tu propia copia de freeCodeCamp en GitHub, o descargarla para trabajar con ella de manera local. Despues, podrias solicitar que los cambios sean extraídos al repositorio principal al realizar un _pull request_ o solicitud de cambio.

> **ProTip:**
> El repositorio principal en https://github.com/freeCodeCamp/freeCodeCamp es a menudo referido como `upstream` repositorio. Tu fork en > https://github.com/YOUR_USER_NAME/freeCodeCamp es a menudo conocido como `origin` repositorio.

**Sigue estos pasos para hacer fork en el repositorio de `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Ve al repositorio de freeCodeCamp en GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Haga click en el botón "Fork" en la parte superior derecha de la interfaz ([mas detalles aquí](https://help.github.com/articles/fork-a-repo/))
3. Despues serás llevado a tu copia de freeCodeCamp en `https://github.com/YOUR_USER_NAME/freeCodeCamp`

![GIF - How to fork freeCodeCamp on Github](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## Preparando el entorno de desarrollo

Una vez que tengas los requisitos previos instalados, necesitas preparar tu entorno de desarrollo. Esto es común para muchos flujos de trabajo, y tendrás que hacer esto solo una vez.

**Sigue estos pasos para tener tu entorno de desarrolloo listo:**

1. Instala [Git](https://git-scm.com/) o tu cliente favorito de Git, si tu no lo tienes aun. Actualiza a la ultima version, el que vino con tu OS se puede quedar obsoleto.

2. (Opcional pero recomendado) [Configura una SSH Key](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.

3. Instala un editor de código de tu elección.

    Nosotros recomendamos usar [VS Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Estos son unos grandes editores de código fuente libre.

4. Configuración de linting para su editor de códigos.

    Tu deberías tener [ESLint corriendo en tu editor](http://eslint.org/docs/user-guide/integrations.html), y destacará cualquier cosa que no cumpla con [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

    > Por favor no ignore nigun error linting. Están destinados a **ayudarte** y asegurar una base de código limpio y simple.

## Clona tu copia de freeCodeCamp

['Cloning'](https://help.github.com/articles/cloning-a-repository/) es un paso donde tu **descargas** una copia del repositorio que es de tu propiedad o de alguien de una localización `remota`. En tu caso, esta localización remota es tu `fork` del repositorio de freeCodeCamp, que debería estar disponible en `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Ejecuta estos comandos en tu maquina local: 

1. Open a Terminal / Command Prompt / Bash Shell en tu directorio de proyectos

    _por ejemplo: `/yourprojectdirectory/`_

2. Clona tu fork de freeCodeCamp, sustituyendo `YOUR_USER_NAME` con tu GitHub Username

    ```shell
    git clone https://github.com/YOUR_USER_NAME/freeCodeCamp.git
    ```

Esto descargará el repositorio completo de freeCodeCamp a tu directorio de proyectos.

## Configurar un `upstream` al repositorio principal

Ahora que has descargado una copia de tu fork, necesitarás configurar un `upstream`.

Como se mencionó antes, el repositorio principal de `https://github.com/freeCodeCamp/freeCodeCamp` se denomina a menudo `upstream` repositorio. Tu fork de `https://github.com/YOUR_USER_NAME/freeCodeCamp` se denomina a menudo como `origin` repositorio.

Tiene que señalar su clon local al `upstream`, además de al `origin`. Esto es para que puedas sincronizar cambios del repositorio principal. De esta manera no tienes que pasar por el forcking y la clonación una y otra vez.

1. Cambiar el directorio al nuevo directorio de freeCodeCamp:

    ```shell
    cd freeCodeCamp
    ```

2. Añadir un remoto al repositorio principal de freeCodeCamp:

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3. Comprueba que la configuración se ve bien para ti:

    ```shell
        git remote -v
    ```

        The output should be something like below:

    ```shell
        origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
        origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
        upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
        upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```

## Ejecutando freeCodeCamp localmente en tu maquina

Ahora que tienes una copia local de freeCodeCamp, puedes seguir estas instrucciones para conseguir que se ejecuten localmente. esto te ayudara:

- Vista previa de las modificaciones de las páginas tal como aparecería en la plataforma de aprendizaje.
- Trabajo en cuestiones relacionadas con la UI y mejoras
- Depurar y corregir problemas en los servidores de aplicaciones y aplicaciones de cliente

Puede omitir la ejecución de freeCodeCamp localmente, si se acaba de editar archivos, haciendo un `rebase` o resolviendo `merge` conflictos. Puedes volver siempre a esta parte de la instrucción mas adelante.

[Saltar la ejecución de freeCodeCamp localmete](#making-changes-to-your-clone-of-freecodecamp-locally)

### Instalando los requisitos previos

Empezar por la instalación de estos requisitos previos de software.

| Requisito previo                            | Version | Notes |
| ------------------------------------------- | ------- | ----- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Notas de versión](https://docs.mongodb.com/manual/release-notes/), Nota: Actualmente en `3.6`, un [upgrade is planned](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275).
| [Node.js](http://nodejs.org)                | `8.x`   | [LTS Schedule](https://github.com/nodejs/Release#release-schedule) |
| npm (viene incluido con Node)               | `6.x`   | No tiene versiones LTS, utilizamos la versión integrada con el Nodo LTS |

**Importante:**

Le recomendamos actualizar a la última versión estable también conocido como Long Term Support (LTS).
Si Node.js o MongoDB están ya instalados en tu máquina, ejecuta los siguinetes comandos para validar las versiones:

```shell
node -v
mongo --version
npm -v
```

> Si tienes una versión diferente, por favor instala la versión recomendada. Podemos apoyar problemas de instalación solo para las versiones recomendadas.

**Estoy teniendo problemas con la instalación de los requisitos previos recomendados. ¿Qué debería hacer?**

Nosotros regularmente desarrollamos en populares y últimos sistemas operativos como macOS 10.12 o posteriores, Ubuntu 16.04 o posteriores y Windows 10. Se recomienda la búsqueda de su problema específico en recursos como: Google, Stack Overflow o Stack Exchange. Posiblemente alguien se ha enfrentado al mismo problema y haya una respuesta a tu consulta.

Si estás en un sistema operativo difernte, y/o sigues teniendo problemas,  intenta comunicarte con [contributors community on our public forum](https://www.freeCodeCamp.org/c/contributors) o la [Contributor's Chat room](https://gitter.im/freeCodeCamp/Contributors). Podemos ser capaces de solucionar algunos problemas comunes.

No podemos apoyarte en Github, porque los problemas de instalación de sofware estan mas allá del alcance de este proyecto.

### Instalando dependencias

Emepezar por instalar las dependencias necesarias para la aplicación al inicio.

```shell
# Install NPM dependencies
npm install
```

Entonces tu necesitas añadir las variables de entorno privado (API Keys):

```shell
# Crea una copia de "sample.env" y nombrala como ".env".
# Rellena con la necesaria API keys y secrets:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

Las claves no son necesarias cambiarlas, para ejecutar la app localmente. Puedes dejar los valores por defecto de `sample.env` como están.

`MONGOHQ_URL` es la mas importante. A menos que tengas MongoDB ejecutando en una configuración diferente a la predeterminada, la URL en el `sample.env` debería funcionar bien.

Puedes dejar las otras claves como están.Ten en cuenta que si quiere usasr mas servicios tendrás que obtenertus propias claves API para esos servicios y editar esas entradas en el archivo `.env`.

Luego, arranque varios servicios, por ejemplo el api-server, el client UI application, etc. Tu puedes [aprender mas sobre estos servicios en esta guía](#).

Arrancando estas atando los vinculos entre los servicios. Ellos son semi-independientes. Quiere decir, en la producción de estos servicios se implementan a sus propias localizaciones, pero mientras se ejecutan localmente quieres que todos esten disponibles para ti.

```shell
# Arranque todos los proyectos dentro de este repositorio
npm run bootstrap
```

### Empezar MongoDB

Necesitarás empezar MongoDB, antes de empezar la aplicación:

Empieza el MongoDB servidor en una terminal distinto

- En macOS & Ubuntu:

    ```shell
    mongod
    ```

- En Windows, tienes que especificar el camino completo al binario `mongod` 

    Asegurate de reemplazar la `3.6` con la versión que tengas instalada

    ```shell
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

> ProTip:
> Usted puede evitar tener que iniciar MongoDB cada vez, mediante la instalación como un servicio en segundo plano.
> Puedes [aprender mas sobre ello en su documentación para tu SO](https://docs.mongodb.com/manual/administration/install-community/)

### La siembra de la base de datos

Siguiente, permite la semilla de la base de datos. En este paso, ejecutamos el siguiente comando que llenara el servidor MongoDB con algunos de los primeros conjuntos de datos que es requerido por los otros servicios. Esto incluye algunos de los esquemas, entre otras cosas.

```shell
npm run seed
```

### Comience la aplicación cliente de freeCodeCamp y el servidor API 

Ahora puede arrancar el servidor API y la aplicación del cliente.

```shell
npm run develop
```

Este comando activará todos los servicios, incluyendo el servidor API y la aplicación del cliente, disponible para trabajar en el.

Ahora abre un navegador web y visita <http://localhost:8000>. Si la app carga, felicidades - ya está todo listo.

> ProTip:
>
> El servidor API sirve las APIs en `http://localhost:3000`
> La Gatsby app sirve la aplicación en `http://localhost:8000`

Quiere decir que si tu visitas <http://localhost:3000/explorer> tu deberías ver las APIs que tu tienes.

Felicidades 🎉! Tu ahora tienes una copia completa de la plataforma de aprendizaje de freeCodeCamp ejecutandose en tu máquina local.

## Comandos rápidos de referencia cuando trabajas localmente

[Aqui hay una rápida referencia](/docs/README.md) a una lista de comandos que tu puedes necesitar localmente de vez en cuando:

## Realizar cambios a su copia local de freeCodeCamp

Siguiente, puedes haceer cambios a los archivos, y confirmar los cambios.

Sigue estos pasos:

1. Comprobar que está en la rama `master`

    ```shell
    git status
    ```

    Deberias obtener una salida como esta:

    ```shell
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    Si no estás en el master o tu directorio de trabajo no esta limpio, resuelve cualquier expediente o comando pendiente y checkout `master`:

    ```shell
    git checkout master
    ```

2. A continuación le gustaría hacer un `rebase` del `upstream`.

    Este paso **sincronizará los últimos cambios** desde el repositorio principal de freeCodeCamp. Es importante que rebase tan a menudo como sea posible, para evitar conflictos posteriores.

    ```shell
    git pull --rebase upstream master
    ```

    Opcionalmente, se puede impulsar esta rama de vuelta a tu origen, para tener un historial limpio en tu fork en GitHub.

    ```shell
    git push origin master --force
    ```

3. Siguiente, usted tendrá que crear una nueva rama.

    Trabajando en una rama separada para cada cuestión, te ayuda a mantener tu copia de trabajo local limpia. Tu nunca debes tranbajar en el `master`. Esto ensuciará tu copia local de freeCodeCamp y puede que tengas que empezar de nuevo con una copia fresca del fork.

    Comprueba que estas en `master` como se explica anteriormente, y ve construyendo desde ahí:

    ```shell
    git checkout -b fix/update-guide-for-xyz
    ```

    Tu nombre de rama deberá empezar con un `fix/`, `feat/`, etc. Evita el uso de la edición no.s en las ramas. Mantenlas cortas y únicas.

    Algunos ejemplos de buenos nombres de rama son:

    ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. A continuación puedes trabajar en la edición de páginas y en el código en su editor de texto favorito.

5. Una vez estés satisfecho con los cambios deberías opcionalmente ejecutar freeCodeCamp localmente para una vista previa de los cambios.

6. Asegúrese de corregir los errores, y el formateo de los cambios. Contamos con la guía de estilo para los artículos de guía y los We have style guide for the Guide articles y los desafios de codificación.

7. Siguiente, comprueba y confirma los archivos que estas actualizando

    ```shell
    git status
    ```

    Esto debería mostrar una lista de archivos `unstaged` que tu has editado.

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

8. Fase de cambios y hacer un commit.

    En este paso sólo debe marcar los archivos que has editado o añadido. Puede realizar un reinicio y resolver archivos que no desee cambiar.

    ```shell
    git add path/to/my/changed/file.ext
    ```

    O puede añadir alternativamente todos los archivos `unstaged` al area de preparación:

    ```shell
    git add .
    ```

    Solo los archivos que fueron movidos al area de preparación se añadirán cuando hagas un commit.

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

    Ahora puedes hacer un commit a tus cambios con un mensaje corto como:

    ```shell
    git commit -m "fix: my short commit message"
    ```

    Algunos ejemplos:

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    Opcional:

    Es muy recomendable hacer un mensaje commit convencional. Esta es una buena práctica que tu verás en algunos de los mas populares repositorios de código abierto. Como desarrollador, esto te anima a seguir las prácticas estándar.

    Algunos ejemplos de mensajes commit convencional son:

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    Que sean cortos, no mas de 50 caracteres. Tu siempre puedes añadir información adicional en la descripción del mensaje commit.

    Esto no toma más tiempo que un mensaje no convencional como 'update file' or 'add index.md'

    Puedes aprender mas sobre porque deberías usar los commits convencionales [aquí](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Si te das cuenta que necesitas editar un archivo o actualizar el mensaje commit despues de hacer un commit puedes hacerlo después de la edición de archivos con:

    ```shell
    git commit --amend
    ```

    Esto abritá por defecto un editor de texto como `nano` o `vi` donde puedes editar el titulo del mensaje commit y  añadir/editar la descripción.

10. Despues puedes subir los cambios a tu fork:

    ```shell
    git push origin branch/name-here
    ```

## Proponiendo un Pull Request (PR)

1. Una vez que hayan sido editados, se le pedirá que cree una pull request en la página de github de su fork

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. Por defecto, todas las pull requests debe estar en contra del repositorio principal de freeCodeCamp, `master`.

    asegurate que la base de tu fork está situado en freecodecamp/freecodecamp cuando se recurre a una Pull Request.**

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Envíe la pull request de tu rama a la rama  `master` de freeCodeCamp.

4. En el cuerpo de tu pull request un sumario detallado de los cambios que has hecho y porque.

    - Serás presentado con un platilla de la pull request. Este es un cheklist que deberías seguir antes de abrir la pull request.

    - Rellena los detalles que te parezcan adecuados. Esta información será revisada y decidiraán si tu pull request es aceptada o no.

    - Si la pull request esta destinada a arreglar un bug/error existente entonces
      añade al final de la descripción la palabra clave `closes` y #xxxx (donde xxxx
      es el numero del error). Por ejemplo: `closes #1337`. Esto le dirá a GitHub que
      cierre automáticamente el error existente si la pull request es aceptada e incorporada.

5. Indica si has probado una copia local del sitio o no.

    Es muy importante cuando hagas cambios que no sean copias editadas de los archivos markdown. Por ejemplo, cambios a CSS o código JavaScript, etc.

## Ten tu pull request aceptada



## Para obtener ayuda

SI estás atascado y necesitas ayuda, haznoslo saber preguntando en ['Contributors' category on our forum](https://www.freecodecamp.org/forum/c/contributors) o en [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) en Gitter.

Puede haber un error en la consola de tu navegador o en el Terminal / Linea de Comandos que te ayudará a identificar el problema.

### Resolución de problemas

Si la app arranca pero te estás encontrando errores con la misma UI, por ejemplo si las fuentes no se cargan o si el editor no se muestra correctamente, deberías intentar seguir los pasos de la resolución de problemas al menos una vez:

```shell
# Remove all installed node modules
rm -rf node_modules ./**/node_modules

# Reinstall npm packages
npm install

# Bootstrap the project
npm run bootstrap

# Seed the database
npm run seed

# Re-start the application
npm run develop
```
