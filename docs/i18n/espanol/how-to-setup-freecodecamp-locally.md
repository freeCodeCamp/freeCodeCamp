Sigue estas instrucciones para configurar freeCodeCamp localmente en tu sistema. Esto es altamente recomendable si desea contribuir regularmente.

Algunos de estos flujos de trabajo de contribución – como corregir errores en el código base o currículum – necesitan que ejecutes freeCodeCamp localmente en tu ordenador.

> [!TIP] Si no estás interesado en configurar freeCodeCamp localmente, considera usar Gitpod, un entorno dev en línea gratuito.
> 
> [![Abrir en Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Comienza un entorno de desarrollo listo para codificar a freeCodeCamp en tu navegador.)

### Cómo preparar su máquina local

Comience instalando el software de requisitos previos para su sistema operativo.

Apoyamos principalmente el desarrollo en sistemas basados en Linux y Unix. Nuestro personal y los colaboradores de la comunidad trabajan regularmente con el código base utilizando herramientas instaladas en Ubuntu y macOS.

También soportamos Windows 10 a través de WSL2, que puedes preparar [leyendo esta guía](/how-to-setup-wsl).

Algunos miembros de la comunidad también desarrollan en Windows 10 nativamente con Git for Windows (Git Bash), y otras herramientas instaladas en Windows. No tenemos soporte oficial para dicha configuración en este momento, así que recomendamos usar WSL2 en su lugar.

#### Prerequisites:

| Prerrequisito                                                                                         | Versión | Notas                                                                                       |
| ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                          | `14.x`  | We use the "Active LTS" version, See [LTS Schedule](https://nodejs.org/en/about/releases/). |
| npm (viene empaquetado con Node)                                                                      | `6.x`   | `npm` does not have LTS releases, we use the version bundled with Node.js Active LTS.       |
| [Servidor de la comunidad MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.0.x` | -                                                                                           |

> [!ATTENTION] If you have a different version, please install the recommended version. Sólo podemos soportar problemas de instalación para las versiones recomendadas. Ver [resolución de problemas](#troubleshooting) para más detalles.

If Node.js is already installed on your machine, run the following commands to validate the versions:

```console
node -v
npm -v
```

> [!TIP] Recomendamos encarecidamente actualizar a las últimas versiones estables del software mencionado anteriormente, también conocidas como versiones de soporte a largo plazo (LTS).

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will only need to do this once.

##### Follow these steps to get your development environment ready:

1. Instala [Git](https://git-scm.com/) o tu cliente Git favorito, si aún no lo has hecho. Actualice a la última versión; la versión que viene empaquetada con su sistema operativo puede estar desactualizada.

2. (Opcional pero recomendado) [Configurar una clave SSH](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.

3. Instale un editor de código de su elección.

   Recomendamos altamente usar [Visual Studio Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Estos son grandes editores de código libre y gratuito.

4. Configurar linting para su editor de código.

   Deberías tener [ESLint corriendo en tu editor](http://eslint.org/docs/user-guide/integrations.html), y resaltará cualquier cosa que no se ajuste a la [Guía de estilo JavaScript de freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Por favor, no ignore ningún error de linting. Están pensados para **ayudarte** y asegurar una base de código limpia y simple.

## Bifurcar el repositorio en GitHub

[Forking](https://help.github.com/articles/about-forks/) is a step where you get your own copy of freeCodeCamp's main repository (a.k.a _repo_) on GitHub.

This is essential, as it allows you to work on your own copy of freeCodeCamp on GitHub, or to download (clone) your repository to work on locally. Later, you will be able to request changes to be pulled into the main repository from your fork via a pull request (PR).

> [!TIP] El repositorio principal en `https://github.com/freeCodeCamp/freeCodeCamp` es frecuentemente conocido como el repositorio `upstream`.
> 
> Tu fork en `https://github.com/YOUR_USER_NAME/freeCodeCamp` suele referirse como el repositorio `origin`. `YOUR_USER_NAME` será remplazado con tu nombre de usuario de GitHub.

**Follow these steps to fork the `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Ve al repositorio freeCodeCamp en GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Haga clic en el botón "Fork" en la esquina superior derecha de la interfaz ([Más detalles aquí](https://help.github.com/articles/fork-a-repo/))

3. After the repository has been forked, you will be taken to your copy of the freeCodeCamp repository at `https://github.com/YOUR_USER_NAME/freeCodeCamp` (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

<details>
   <summary>
      How to fork freeCodeCamp on GitHub (screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="How to fork freeCodeCamp on GitHub" />
</details>

## Clona tu bifurcación desde GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case, this remote location is your `fork` of freeCodeCamp's repository that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

> [!WARNING] If you are working on a WSL2 Linux Distro, you might get performance and stability issues by running this project in a folder which is shared between Windows and WSL2 (e.g. `/mnt/c/Users/`). Therefore we recommend to clone this repo into a folder which is mainly used by your WSL2 Linux Distro and not directly shared with Windows (e.g. `~/PROJECTS/`).
> 
> See [this GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) for further Information about this problem.

Run these commands on your local machine:

1. Abrir una Terminal / Símbolo del sistema / Shell en el directorio de proyectos

   _i.e.e.: `/yourprojectsdirectory/`_

2. Clona tu bifurcación de freeCodeCamp, reemplazando `YOUR_USER_NAME` con tu nombre de usuario de GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

This will download the entire freeCodeCamp repository to your projects directory.

Note: `--depth=1` creates a shallow clone of your fork, with only the most recent history/commit.

## Configurar sincronización desde el padre

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred `upstream` repository. Your fork referred to as the `origin` repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Cambiar directorio al nuevo directorio de freeCodeCamp:

   ```console
   cd freeCodeCamp
   ```

2. Añadir una referencia remota al repositorio principal de freeCodeCamp:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Asegúrese de que la configuración se vea correcta:

   ```console
   git remote -v
   ```

   The output should look something like below (replacing `YOUR_USER_NAME` with your GitHub username):

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Ejecutando freeCodeCamp localmente

Now that you have a local copy of freeCodeCamp, you can follow these instructions to run it locally. This will allow you to:

- Vista previa de ediciones a páginas como aparecerían en la plataforma de aprendizaje.
- Trabajar en temas y mejoras relacionados con la IU.
- Depurar y arreglar problemas con los servidores de aplicaciones y aplicaciones cliente.

If you do run into issues, first perform a web search for your issue and see if it has already been answered. If you cannot find a solution, please search our [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) page for a solution and report the issue if it has not yet been reported.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our chat server](https://chat.freecodecamp.org/home).

> [!TIP] You may skip running freeCodeCamp locally if you are simply editing files. For instance, performing a `rebase`, or resolving `merge` conflicts.
> 
> You can always return to this part of the instructions later. You should **only** skip this step if you do not need to run the apps on your machine.
> 
> [Skip to making changes](#making-changes-locally).

### Configurando dependencias

#### Step 1: Set up the environment variable file

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# Crear una copia de la "sample.env" y nombrarla ".env".
# Completelos con las credenciales de la API necesarias:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP] Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### Step 2: Install dependencies

This step will install the dependencies required for the application to run:

```console
npm ci
```

#### Step 3: Start MongoDB and seed the database

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. If you are using a custom configuration, modify this value as needed.

Start the MongoDB server in a separate terminal:

- En macOS & Ubuntu:

  ```console
  mongod
  ```

- En Windows, debe especificar la ruta completa al binario `mondios`

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Asegúrate de reemplazar `3.6` con la versión instalada

> [!TIP] You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
npm run seed
```

#### Step 4: Start the freeCodeCamp client application and API server

You can now start up the API server and the client applications.

```console
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

> [!NOTE] Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

> [!TIP] The API Server serves APIs at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

> If you visit <http://localhost:3000/explorer> you should see the available APIs.

## Iniciar sesión con un usuario local

Your local setup automatically populates a local user in the database. Clicking the `Sign In` button will automatically authenticate you into the local application.

However, accessing the user portfolio page is a little tricky. In development, Gatsby takes over serving the client-side pages and hence you will get a `404` page for the user portfolio when working locally.

Simply clicking the **"Preview Custom 404 Page"** button will forward you to the correct page.

<details>
   <summary>
      How to sign in when working locally (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="How to sign in when working locally" />
</details>

## Haciendo cambios localmente

You can now make changes to files and commit your changes to your local clone of your fork.

Follow these steps:

1. Validate that you are on the `main` branch:

   ```console
   git status
   ```

   Deberías obtener una salida como esta:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nada para confirmar, limpiar directorio
   ```

   If you are not on main or your working directory is not clean, resolve any outstanding files/commits and checkout `main`:

   ```console
   git checkout main
   ```

2. Sync the latest changes from the freeCodeCamp upstream `main` branch to your local main branch:

   > [!WARNING] If you have any outstanding pull request that you made from the `main` branch of your fork, you will lose them at the end of this step.
   > 
   > Debería asegurarse de que su pull request está fusionado por un moderador antes de realizar este paso. To avoid this scenario, you should **always** work on a branch other than the `main`.

   Este paso **sincronizará los últimos cambios** desde el repositorio principal de freeCodeCamp. It is important that you rebase your branch on top of the latest `upstream/main` as often as possible to avoid conflicts later.

   Actualiza tu copia local del repositorio de freeCodeCamp upstream:

   ```console
   git fetch upstream
   ```

   Hard reset your main branch with the freeCodeCamp main:

   ```console
   git reset --hard upstream/main
   ```

   Push your main branch to your origin to have a clean history on your fork on GitHub:

   ```console
   git push origin main --force
   ```

   You can validate your current main matches the upstream/main by performing a diff:

   ```console
   git diff upstream/main
   ```

   La salida resultante debe estar vacía.

3. Crear una nueva rama:

   Trabajar en una rama separada para cada asunto le ayuda a mantener limpia su copia de trabajo local. You should never work on the `main`. Esto sumergirá su copia de freeCodeCamp y puede que tenga que empezar con un clon o un tenedor fresco.

   Check that you are on `main` as explained previously, and branch off from there:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Su nombre de rama debería comenzar con una `fix/`, `feat/`, `docs/`, etc. Evitar el uso de números de incidencias en las ramas. Manténgalos cortos, significativos y únicos.

   Algunos ejemplos de buenos nombres de ramas son:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edita páginas y trabaja en código en tu editor de texto favorito.

5. Una vez que esté contento con los cambios, opcionalmente debería ejecutar freeCodeCamp localmente para previsualizar los cambios.

6. Asegúrese de corregir cualquier error y comprobar el formato de sus cambios.

7. Comprueba y confirma los archivos que estás actualizando:

   ```console
   git status
   ```

   Esto debería mostrar una lista de `archivos sin etapas` que has editado.

   ```console
   En función/documentación de la rama
   Su rama está actualizada con 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Etapar los cambios y hacer una confirmación:

   En este paso, sólo debes marcar los archivos que has editado o añadido tú mismo. Puede realizar un restablecimiento y resolución de archivos que no tenía intención de cambiar si es necesario.

   ```console
   git añadir ruta/a/mi/cambiado/archivo.ext
   ```

   O puede añadir todos los archivos `sin staging` al área de escenaje:

   ```console
   git add .
   ```

   Sólo los archivos que fueron movidos al área de puesta en escena serán añadidos cuando realice una confirmación.

   ```console
   git status
   ```

   Salida:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Ahora, puede confirmar sus cambios con un mensaje corto así:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Algunos ejemplos:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Opcional:

   Recomendamos encarecidamente hacer un mensaje de compromiso convencional. Esta es una buena práctica que verás en algunos de los repositorios de Código Abierto. Como desarrollador, esto te anima a seguir las prácticas estándar.

   Algunos ejemplos de mensajes de confirmación convencionales son:

   ```md
   fix: actualizar artículo de la guía HTML
   fix: actualizar scripts de compilación para la característica Travis-CI
   : añadir artículo para la lista de JavaScript
   docs: actualizar directrices de contribución
   ```

   Mantenga estos caracteres cortos, no más de 50 caracteres. Siempre puede añadir información adicional en la descripción del mensaje de confirmación.

   Esto no toma más tiempo que un mensaje no convencional como 'actualizar archivo' o 'añadir index.md'

   Puedes aprender más sobre por qué debes usar commits convencionales [aquí](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. If you realize that you need to edit a file or update the commit message after making a commit you can do so after editing the files with:

   ```console
   git commit --amend
   ```

   Esto abrirá un editor de texto predeterminado como `nano` o `vi` donde puedes editar el título del mensaje de commit y añadir/editar la descripción.

10. A continuación, puede enviar sus cambios a su fork:

    ```console
    git push rama/nombre de origen aquí
    ```

## Proponer una Pull Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Referencia de comandos rápidos

A quick reference to the commands that you will need when working locally.

| comando                                                        | descripción                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                       | Instala / reinstala todas las dependencias y arranca los diferentes servicios.      |
| `npm run seed`                                                 | Analiza todos los archivos markdown del desafío e inserta en MongoDB.               |
| `npm run develop`                                              | Inicia el servidor freeCodeCamp API y las aplicaciones de cliente.                  |
| `npm run storybook`                                            | Starts Storybook for component library development.                                 |
| `npm test`                                                     | Run all JS tests in the system, including client, server, lint and challenge tests. |
| `npm run test-client`                                          | Run the client test suite.                                                          |
| `npm run test:curriculum`                                      | Run the curriculum test suite.                                                      |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | Test a specific Block.                                                              |
| `npm run test:curriculum --superblock='responsive-web-design'` | Test a specific SuperBlock.                                                         |
| `npm run test-curriculum-full-output`                          | Run the curriculum test suite, without bailing after the first error                |
| `npm run test-server`                                          | Run the server test suite.                                                          |
| `npm run e2e`                                                  | Run the Cypress end to end tests.                                                   |
| `npm run clean`                                                | Uninstalls all dependencies and cleans up caches.                                   |

## Solución de problemas

### Problemas con la instalación de los prerrequisitos recomendados

We regularly develop on the latest or most popular operating systems like macOS 10.15 or later, Ubuntu 18.04 or later, and Windows 10 (with WSL2).

It is recommended to research your specific issue on resources such as Google, Stack Overflow, and Stack Exchange. There is a good chance that someone has faced the same issue and there is already an answer to your specific query.

If you are on a different OS and/or are still running into issues, see [getting help](#getting-help).

> [!WARNING]
> 
> Please avoid creating GitHub issues for prerequisite issues. They are out of the scope of this project.

### Issues with the UI, Fonts, build errors, etc.

If you face issues with the UI, Fonts or see builds errors a cleanup can be useful:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

OR

Use the shortcut

```
npm run clean-and-develop
```

If you continue to face issues with the build, cleaning up the workspace is recommend.

Use `git clean` in interactive mode:

```
git clean -ifdX
```

<details>
   <summary>
      How to clean git untracked files (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="How to clean git untracked files" />
</details>

### Issues with API, login, Challenge Submissions, etc.

If you can't sign in, and instead you see a banner with an error message that it will be reported to freeCodeCamp, please double-check that your local port `3000` is not in use by a different program.

**On Linux / macOS / WSL on Windows - From Terminal:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

**On Windows - From Elevated PowerShell:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

### Problemas instalando dependencias

If you get errors while installing the dependencies, please make sure that you are not in a restricted network or your firewall settings do not prevent you from accessing resources.

The first time setup can take a while depending on your network bandwidth. Be patient, and if you are still stuck we recommend using GitPod instead of an offline setup.

> [!NOTE] If you are using Apple Devices with M1 Chip to run the application locally, it is suggested to use Node v14.7 or above. You might run into issues with dependencies like Sharp otherwise.

## Obteniendo ayuda

If you are stuck and need help, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).

There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem. Provide this error message in your problem description so others can more easily identify the issue and help you find a resolution.
