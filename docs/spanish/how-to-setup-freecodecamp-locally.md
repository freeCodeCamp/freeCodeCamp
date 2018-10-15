# Configura freeCodeCamp localmente en tu sistema

Sigue esta guía para poder configurar freeCodeCamp localmente en tu sistema. Esto es altamente recomendable si quieres realizar contribuciones regularmente.

El flujo de trabajo de las contribuciones puede desear mostrar vistas previas de las páginas para la guía o los desafíos de programación. La depuración o el arreglo de errores en la base de código requiere que tengamos freeCodeCamp ejecutándose de manera local. 

## Como hacer Forking a un repositorio en GitHub

['Forking'](https://help.github.com/articles/about-forks/) es un paso donde obtienes tu propia copia del repositorio principal de freeCodeCamp (también conocido como _repo_) en GitHub.

Esto es esencial, porque de esta manera puedes trabajar en tu propia copia de freeCodeCamp en GitHub, o descargarla para trabajar con ella de manera local. Despues, podrias solicitar que los cambios sean extraídos al repositorio principal al realizar un _pull request_ o solicitud de cambio.

> **ProTip:**
> El repositorio principal en https://github.com/freeCodeCamp/freeCodeCamp es a menudo referido como `upstream` repositorio. Tu fork en > https://github.com/YOUR_USER_NAME/freeCodeCamp es a menudo conocido como `origin` repositorio.

**Sigue estos pasos para hacer fork en el repositorio de `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Ve al repositorio de freeCodeCamp en GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Haga click en el botón "Fork" en la parte superior derecha de la interfaz ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. Despues seras llevado a tu copia de freeCodeCamp en `https://github.com/YOUR_USER_NAME/freeCodeCamp`

![GIF - How to fork freeCodeCamp on Github](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## Preparando el entorno de desarrollo

Una vez que tengas los requisitos previos instalados, necesitas preparar tu entorno de desarrollo. Esto es común para muchos flujos de trabajo, y tendrás que hacer esto solo una vez.

**Sigue estos pasos para tener tu entorno de desarrolloo listo:**

1. Instala [Git](https://git-scm.com/) o tu cliente favorito de Git, si tu no lo tienes aun. Actualiza a la ultima version, el que vino con tu OS se puede quedar obsoleto.

2. (Opcional pero recomendado) [Configura una SSH Key](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.

3. Instala un editor de codigo de tu elección.

    Nosotros recomendamos usar [VS Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Estos son unos grandes editores de codigo fuente libre.

4. Configuración de linting para su editor de códigos.

    Tu deberías tener [ESLint corriendo en tu editor](http://eslint.org/docs/user-guide/integrations.html), y destacará cualquier cosa que no cumpla con [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

    > Por favor no ignore nigun error linting. Están destinados a **ayudarte** y asegurar una base de código limpio y simple.

## Clona tu copia de freeCodeCamp

['Cloning'](https://help.github.com/articles/cloning-a-repository/) es un paso donde tu **descargas** una copia del repositorio que es de tu propiedad o de alguien de una localización `remota`. En tu caso, esta localización remota es tu `fork` del repositorio de freeCodeCamp, que debería estar disponible en `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Ejecuta estos comandos en tu maquina local: 

1. Open a Terminal / Command Prompt / Bash Shell en tu directorio de proyectos

    _i.e.: `/yourprojectdirectory/`_

2. Clona tu fork de freeCodeCamp, sustituyendo `YOUR_USER_NAME` con tu GitHub Username

    ```shell
    git clone https://github.com/YOUR_USER_NAME/freeCodeCamp.git
    ```

Esto descargará el repositorio completo de freeCodeCamp a tu directorio de proyectos.

## Configurar un `upstream` al repositorio principal

Ahora que has descargado una copia de tu fork, tu necesitaras configurar un `upstream`.

Como se menciono antes, el repositorio principal de `https://github.com/freeCodeCamp/freeCodeCamp` Se denomina a menudo `upstream` repositorio. Tu fork de `https://github.com/YOUR_USER_NAME/freeCodeCamp` se denomina a menudo como `origin` repositorio.

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

Le recomendamos actualizar a la última versión estable también conocido como Long Term Support (LTS) versions of the above.
Si Node.js or MongoDB estan ya instalados en tu maquina, ejecuta los siguinetes comandos para validar las versiones:

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
# Rellena con la necesaria API keys and secrets:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

Las claves no son necesarias cambiarlas, para ejecutar la app localmente. Puedes dejar los valores por defecto de `sample.env` como están.

`MONGOHQ_URL` es la mas importante. A menos que tengas MongoDB ejecutando en una configuración diferente a la predeterminada, la URL en el `sample.env` debería funcionar bien.

Puedes dejar las otras claves como están.Ten en cuenta que si quiere usasr mas servicios tendrás que obtenertus propias claves API para esos servicios y editar esas entradas en el archivo `.env`.

Luego, arranque varios servicios, por ejemplo el api-server, el client UI application, etc. Tu puedes [learn more about these services in this guide](#).

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
> Puedes [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

### La siembra de la base de datos

Siguiente, permite la semilla de la base de datos. En este paso In this step, ejecutamos el siguiente comando que llenara el servidor MongoDB con algunos de los primeros conjuntos de datos que es requerido por los otros servicios. Esto incluye algunos de los esquemas, entre otras cosas.

```shell
npm run seed
```

### Start the freeCodeCamp client application and API server

You can now start up the API server and the client applications.

```shell
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Now open a web browser and visit <http://localhost:8000>. If the app loads, congratulations – you're all set.

> ProTip:
>
> The API Server serves APIs at `http://localhost:3000`
> The Gatsby app serves the client application at `http://localhost:8000`

Meaning, if you visit <http://localhost:3000/explorer> you should see the APIs that we have.

Congratulations 🎉! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

## Quick commands reference when working locally

[Here is a quick reference](/docs/README.md) to a list of commands that you may need locally from time to time:

## Making changes to your clone of freeCodeCamp locally

Next, you can make changes to files, and commit your changes.

Follow these steps:

1. Check that you are on the `master` branch

    ```shell
    git status
    ```

    You should get a output like this:

    ```shell
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    If you are not on master or your working directory is not clean, resolve any outstanding files/commits and checkout `master`:

    ```shell
    git checkout master
    ```

2. Next, you would want to `rebase` from the `upstream`.

    This step **will sync the lastest changes** from the main repository of freeCodeCamp. Its important that you rebase as often as possible, to avoid conflicts later.

    ```shell
    git pull --rebase upstream master
    ```

    You can optionally push this branch back to your origin, to have a clean history on your fork on GitHub.

    ```shell
    git push origin master --force
    ```

3. Next, you will have to create a fresh new branch.

    Working on a separate branch for every single issue, helps you keep your local work copy clean. You should never work on the `master`. This will soil your copy of freeCodeCamp and you may have to start over with a fresh clone or fork.

    Check that you are on `master` as explained previously, and branch off from there:

    ```shell
    git checkout -b fix/update-guide-for-xyz
    ```

    Your branch name should start with a `fix/`, `feat/`, etc. Avoid, using issue no.s in branches. Keep them short, meaningful and unique.

    Some examples of good branch names are:

    ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. Next, you can work on the editing pages and working on the code in your favorite text editor.

5. Once you are happy with the changes you should optionally run freeCodeCamp locally to preview the changes.

6. Make sure you fix any errors, and check the formating of your changes. We have style guide for the Guide articles and Coding challenges.

7. Next, check and confirm the files you are updating

    ```shell
    git status
    ```

    This should show a list of `unstaged` files that you have edited.

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

8. Stage the changes and make a commit.

    In this step you should only mark files that you have edited, or added. You can perform a reset, and resolve files that you did not intend to change.

    ```shell
    git add path/to/my/changed/file.ext
    ```

    Or, alternatively you can add all the `unstaged` files to the staging area:

    ```shell
    git add .
    ```

    Only the files that were moved to the staging area will added when you make a commit.

    ```shell
    git status
    ```

    Output:
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

    Now, you can commit your changes with a short message like so:

    ```shell
    git commit -m "fix: my short commit message"
    ```

    Some examples:

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    Optional:

    We highly recommend making a conventional commit message. This is a good practice that you will see on some of the popular Open Source repositories. As a developer, this encourages you to follow standard practices.

    Some examples of conventional commit messages are:

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    Keep these short, not more than 50 characters. You can always add additional information in the description of the commit message.

    This does not take any additional time than a unconventional message like 'update file' or 'add index.md'

    You can learn more about why you should use conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. If you realise that you need to edit a file or, update the commit message after making a commit you can do so after editing the files with:

    ```shell
    git commit --amend
    ```

    This will open up a default, text editor like `nano` or `vi` where you can edit the commit message title and add/edit description.

10. Next, you can push your changes to your fork.

    ```shell
    git push origin branch/name-here
    ```

## Proposing a Pull Request (PR)

1. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. By default, all pull requests should be against the freeCodeCamp main repo, `master` branch.

    Make sure that your Base Fork is set to freeCodeCamp/freeCodeCamp when raising a Pull Request.**

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Submit the pull request from your branch to freeCodeCamp's `master` branch.

4. In the body of your PR include a more detailed summary of the changes you made and why.

    - You will be presented with a pull request template. This is a checklist that you should have followed before opening the pull request.

    - Fill in the details as they seem fit you. This information will be reviewed and decide whether or not, your pull request is going to be accepted.

    - If the PR is meant to fix an existing bug/issue then, at the end of
      your PR's description, append the keyword `closes` and #xxxx (where xxxx
      is the issue number). Example: `closes #1337`. This tells GitHub to
      automatically close the existing issue, if the PR is accepted and merged.

5. Indicate if you have tested on a local copy of the site or not.

    This is very important when you are making changes that are not copy editing markdown files. For example, changes to CSS or JavaScript code, etc.

## Get your PR accepted



## Getting Help

If you are stuck, and need help, let us know by asking in the ['Contributors' category on our forum](https://www.freecodecamp.org/forum/c/contributors) or the [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) on Gitter.

There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem.

### Troubleshooting

If the app launches but you are encountering errors with the UI itself, for example if fonts are not being loaded or if the code editor is not displaying properly, you may try the following troubleshooting steps at least once:

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
