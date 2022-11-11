Sigue estas instrucciones para configurar freeCodeCamp localmente en tu sistema. Esto es altamente recomendable si desea contribuir regularmente.

Algunos de estos flujos de trabajo de contribución – como corregir errores en el código base o currículum – necesitan que ejecutes freeCodeCamp localmente en tu ordenador.

### Cómo preparar su máquina local

Comience instalando el software de requisitos previos para su sistema operativo.

Apoyamos principalmente el desarrollo en sistemas basados en Linux y Unix. Nuestro personal y los colaboradores de la comunidad trabajan regularmente con el código base utilizando herramientas instaladas en Ubuntu y macOS.

También tenemos compatibilidad con Windows 10 a través de WSL2, que puedes preparar [leyendo esta guía](how-to-setup-wsl.md).

Algunos miembros de la comunidad también desarrollan en Windows 10 nativamente con Git for Windows (Git Bash), y otras herramientas instaladas en Windows. No tenemos soporte oficial para dicha configuración en este momento, así que recomendamos usar WSL2 en su lugar.

#### Pre-requisitos:

| Prerrequisito                                                                                         | Versión | Notas                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                          | `16.x`  | Utilizamos la versión "Activos LTS", ejemplo[ LTS Schedule](https://nodejs.org/en/about/releases/). |
| npm (viene empaquetado con Node)                                                                      | `8.x`   | Utilizamos la versión empaquetada con Node.js Active LTS.                                           |
| [Servidor de la comunidad MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                                   |

> [!ATTENTION] If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting](#troubleshooting) for details.

Si ya has instalado Node.js en tu máquina, ejecuta los siguientes comando para validar las versiones:

```console
node -v
npm -v
```

> [!TIP] We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

Una vez tengas los prerrequisitos instalados, necesitas preparar tu entorno de desarrollo.  Esto es normal en el desarrollo de flujos de trabajo, y sólo tendrás que hacerlo una vez.

##### Sigue estos pasos para dejar listo tu entorno de desarrollo:

1. Instala [Git](https://git-scm.com/) o tu cliente Git favorito, si aún no lo has hecho. Actualice a la última versión; la versión que viene empaquetada con su sistema operativo puede estar desactualizada.

2. (Opcional pero recomendado) [Configurar una clave SSH](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.

3. Instale un editor de código de su elección.

   Recomendamos altamente usar [Visual Studio Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Estos son grandes editores de código libre y gratuito.

4. Configurar linting para su editor de código.

   Deberías tener [ESLint corriendo en tu editor](http://eslint.org/docs/user-guide/integrations.html), y resaltará cualquier cosa que no se ajuste a la [Guía de estilo JavaScript de freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Por favor, no ignore ningún error de linting. Están pensados para **ayudarte** y asegurar una base de código limpia y simple.

## Bifurcar el repositorio en GitHub

[Bifurcar](https://help.github.com/articles/about-forks/) es un paso donde consigues tu propia copia del repositorio de freeCodeCamp's (conocido como _repo_) en GitHub.

Esto es esencial, te permite trabajar en tu propia copia de FreeCodeCamp en GitHub, o descargar o clonar un repuesto para trabajar localmente.  Más tarde, podrás solicitar cambios para que se muestren en el repositorio principal de  tu "fork" (bifurcación) a través de una "pull request" (PR).

> [!TIP] The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository.
> 
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as the `origin` repository. `YOUR_USER_NAME` would be replaced with your GitHub username.

**Sigue estos pasos para bifurcar el repositorio `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Ve al repositorio freeCodeCamp en GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Haga clic en el botón "Fork" en la esquina superior derecha de la interfaz ([Más detalles aquí](https://help.github.com/articles/fork-a-repo/))

3. Después de que el repositorio haya sido bifurcado, serás llevado a tu copia del repositorio de freeCodeCamp en `https://github.com/YOUR_USER_NAME/freeCodeCamp` (`YOUR_USER_NAME` será remplazado con tu nombre de usuario de GitHub).

<details>
   <summary>
      Cómo bifurcar freeCodeCamp en GitHub (captura de pantalla)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Cómo bifurcar freeCodeCamp en Github" />
</details>

## Clona tu bifurcación desde GitHub

"[Cloning](https://help.github.com/articles/cloning-a-repository/)" es donde tú  "**download**" (descargas) una copia de un repositorio de una localización "`remote`" (remota) que es propiedad tuya o de alguien más. En tu caso, esta localización remota es tu "`fork`" bifurcación del repositorio de freeCodeCamp que debería estar disponible en `https://github.com/YOUR_USER_NAME/freeCodeCamp`. ("`YOUR_USER_NAME`" (Tu nombre de usuario) debería ser reemplazado con tu nombre de usuario de GitHub)

> [!WARNING] If you are working on a WSL2 Linux Distro, you might get performance and stability issues by running this project in a folder which is shared between Windows and WSL2 (e.g. `/mnt/c/Users/`). Therefore we recommend to clone this repo into a folder which is mainly used by your WSL2 Linux Distro and not directly shared with Windows (e.g. `~/PROJECTS/`).
> 
> See [this GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) for further Information about this problem.

Ejecuta estos comandos en tu computador:

1. Abrir una Terminal / Símbolo del sistema / Shell en el directorio de proyectos

   _i.e.e.: `/yourprojectsdirectory/`_

2. Clona tu bifurcación de freeCodeCamp, reemplazando `YOUR_USER_NAME` con tu nombre de usuario de GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Esto descargará el repositorio entero de freeCodeCamp en tu directorio de proyectos.

Nota: "`--depth=1`" crea un clon superficial de tu bifurcación con solo la historia/commit más reciente.

## Configurar sincronización desde el padre

Ahora que ha descargado una copia de su bifurcación, necesitará configurar un `upstream` remoto en el repositorio padre.

[Como se mencionó anteriormente](#fork-the-repository-on-github), el repositorio principal es referido repositorio `upstream` . Su bifurcación conocida como repositorio de `origen`.

Necesita una referencia de su clon local al repositorio `upstream` además del repositorio `origin`. Esto es para que pueda sincronizar los cambios desde el repositorio principal sin el requisito de bifurcar y clonar repetidamente.

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

   La salida debería verse parecida a como se muestra debajo (remplazando `YOUR_USER_NAME` con tu usuario de GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Ejecutando freeCodeCamp localmente

Ahora que tienes una copia local de freeCodeCamp, puedes seguir estas instrucciones para ejecutarla localmente. Esto le permitirá:

- Vista previa de ediciones a páginas como aparecerían en la plataforma de aprendizaje.
- Trabajar en temas y mejoras relacionados con la IU.
- Depurar y arreglar problemas con los servidores de aplicaciones y aplicaciones cliente.

Si tiene problemas, primero realice una búsqueda web para su problema y compruebe si ya ha sido respondida. Si no encuentra una solución, por favor busque en nuestra página [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) para una solución e infórmese del problema si aún no ha sido reportado.

Y como siempre, sientase libre de hacer preguntas en la categoría ['Contributors' en nuestro foro](https://forum.freecodecamp.org/c/contributors) o en [nuestro servidor de chat](https://discord.gg/PRyKn3Vbay).

### Configurando dependencias

We have automated the process of setting up the development environment in Gitpod for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

(You will still need to create your own fork and branch.)

#### Paso 1: Configurar el archivo de variable de entorno

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# Crear una copia de la "sample.env" y nombrarla ".env".
# Completarlo con las claves y secretos de la API necesarios:
```

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP] Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### Paso 2: Instalar dependencias

This step will install the dependencies required for the application to run:

```console
npm ci
```

#### Paso 3: Iniciar MongoDB y "sembrar" la base de datos

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. If you are using a custom configuration, modify this value as needed.
> 
> If you followed along with the [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), then you should be able to skip this step if the MongoDB server from that guide is already running. You can confirm this by checking that you can reach `http://localhost:27017` on your local machine.

Start the MongoDB server in a separate terminal:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- En Windows, debes especificar la ruta completa al binario `mondios`

```console
"C:\Program Files\MongoDB\Server\3.6\bin\mongod"
```

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
npm run seed
```

#### Paso 4: Iniciar la aplicación del cliente freeCodeCamp y el servidor de la API

You can now start up the API server and the client applications.

```console
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `npm run seed:certified-user` will log you out, and you will have to sign in again.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md)

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| comando           | descripción                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| `npm ci`          | Instala / reinstala todas las dependencias y arranca los diferentes servicios. |
| `npm run seed`    | Analiza todos los archivos markdown del desafío e inserta en MongoDB.          |
| `npm run develop` | Inicia el servidor freeCodeCamp API y las aplicaciones de cliente.             |
| `npm run clean`   | Uninstalls all dependencies and cleans up caches.                              |
