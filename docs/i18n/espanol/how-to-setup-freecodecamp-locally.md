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

También tenemos compatibilidad con Windows 10 a través de WSL2, que puedes preparar [leyendo esta guía](how-to-setup-wsl.md).

Algunos miembros de la comunidad también desarrollan en Windows 10 nativamente con Git for Windows (Git Bash), y otras herramientas instaladas en Windows. No tenemos soporte oficial para dicha configuración en este momento, así que recomendamos usar WSL2 en su lugar.

#### Pre-requisitos:

| Prerrequisito                                                                                         | Versión | Notas                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                          | `16.x`  | Utilizamos la versión "Activos LTS", ejemplo[ LTS Schedule](https://nodejs.org/en/about/releases/). |
| npm (viene empaquetado con Node)                                                                      | `8.x`   | Utilizamos la versión empaquetada con Node.js Active LTS.                                           |
| [Servidor de la comunidad MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                                   |

> [!ATENCIÓN] Si tienes una versión diferente, por favor instale la versión recomendada. Sólo podemos soportar problemas de instalación para las versiones recomendadas. Ver [resolución de problemas](#troubleshooting) para más detalles.

Si ya has instalado Node.js en tu máquina, ejecuta los siguientes comando para validar las versiones:

```console
node -v
npm -v
```

> [!TIP] Recomendamos encarecidamente actualizar a las últimas versiones estables del software mencionado anteriormente, también conocidas como versiones de soporte a largo plazo (LTS).

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

> [!TIP] El repositorio principal en `https://github.com/freeCodeCamp/freeCodeCamp` es frecuentemente conocido como el repositorio `upstream`.
> 
> Tu fork en `https://github.com/YOUR_USER_NAME/freeCodeCamp` suele referirse como el repositorio `origin`. `YOUR_USER_NAME` será remplazado con tu nombre de usuario de GitHub.

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

> [!WARNING] Si estás trabajando en una Distribución Linux WSL2, puedes presentar problemas de rendimiento y estabilidad por ejecutar este proyecto en una carpeta compartida entre Windows y WSL2 (p.ej. `/mnt/c/Users/`). Por lo tanto, recomendamos clonar este repositorio dentro de una carpeta que sea principalmente utilizada por su Distribución Linux WSL2 y no directamente compartida con Windows (p.ej. `~/PROJECTS/`).
> 
> Vea [Este reporte en GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) para más información acerca de este problema.

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

Y como siempre, siéntase libre de hacer preguntas en la categoría ['Contributors' en nuestro foro](https://forum.freecodecamp.org/c/contributors) o [nuestro servidor de chat](https://chat.freecodecamp.org/home).

> [!TIP] Puedes optar por no ejecutar freeCodeCamp localmente si simplemente estas editando archivos. Por ejemplo, realizar un `rebase`, or resolver conflictos `merge`.
> 
> Siempre puedes regresar a esta parte de las instrucciones luego. Puedes obviar este paso **si y solo si** no necesitas ejecutar applicaciones en tu computadora.
> 
> [Avanza para hacer cambios](#making-changes-locally).

### Configurando dependencias

#### Paso 1: Configurar el archivo de variable de entorno

Las claves de la API por defecto y las variables de entorno se almacenan en el archivo `sample.env`. El contenido de este archivo necesita ser copiado a un nuevo archivo llamado `.env` para que se acceda dinámicamente durante el paso de la instalación.

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

Las claves dentro del archivo `.env`  _no_ requieren ser cambiadas para correr la aplicación de forma local. Puedes dejar los valores por defecto copiados desde `sample.env`.

> [!TIP] Ten en mente que si quieres usar APIs como Auth0 o Algolia, tienes que adquirir tus propias credenciales o API keys para usar esos servicios, de acuerdo a su archivo `.env`.

#### Paso 2: Instalar dependencias

Este paso instalará las dependencias necesarias para que la aplicación se ejecute:

```console
npm ci
```

#### Paso 3: Iniciar MongoDB y "sembrar" la base de datos

Antes de que pueda ejecutar la aplicación localmente, necesitará iniciar el servicio MongoDB.

> [!NOTE] A menos que MongoDB haya sido configurado de forma diferente a la configuración por defecto, la URL `MONGOHQ_URL` en el archivo `.env` debería funcionar sin problemas. Si estás usando una configuración diferente a la por defecto, modifica ese valor según lo requiera.

Iniciar el servidor MongoDB en un terminal separado:

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

Asegúrate de reemplazar `3.6` con la versión instalada

  <!-- tabs:end -->

> [!TIP] Puedes evitar tener que iniciar MongoDB cada vez que enciendes tu PC si instalas MongoDB como servicio de segundo plano. Puedes aprender más [consultando la documentación de tu sistema operativo](https://docs.mongodb.com/manual/administration/install-community/)

A continuación, vamos a "sembrar" la base de datos. En este paso, ejecutamos el siguiente comando que rellena el servidor MongoDB con algunos conjuntos de datos iniciales que son requeridos por los servicios. Estos incluyen algunos esquemas, entre otras cosas.

```console
npm run seed
```

#### Paso 4: Iniciar la aplicación del cliente freeCodeCamp y el servidor de la API

Ahora puedes poner en marcha el servidor API y las aplicaciones de cliente.

```console
npm run develop
```

Este único comando lanzará todos los servicios, incluyendo el servidor API y las aplicaciones cliente disponibles para que usted trabaje.

> [!NOTE] Una vez listo, abre tu navegador y ** visita <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

> [!TIP] La URL de la API es `http://localhost:3000`. La aplicación Gatsby corre en  `http://localhost:8000`

> While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `npm run seed:certified-user` will log you out, and you will have to sign in again.

## Iniciar sesión con un usuario local

Su configuración local automáticamente rellena un usuario local en la base de datos. Al hacer clic en el botón `Sign In` se autenticará automáticamente en la aplicación local.

Sin embargo, acceder a la página del portafolio de usuarios es un poco complicado. En desarrollo, Gatsby se hace cargo de servir las páginas del lado del cliente y por lo tanto obtendrás una página `404` para el portafolio de usuarios cuando trabajes localmente.

Simplemente haga clic en el botón **"Vista previa de página 404 personalizada"** le redirigirá a la página correcta.

<details>
   <summary>
      Cómo iniciar sesión cuando se trabaja localmente (captura de pantalla)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Como iniciar sesión cuando se trabaja localmente" />
</details>

## Haciendo cambios localmente

Ahora puede hacer cambios en archivos y confirmar los cambios en su clon local de su bifurcación.

Siga estos pasos:

1. Validar que estás en la rama de `main`:

   ```console
   git status
   ```

   Deberías obtener una salida como esta:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nada para confirmar, limpiar directorio
   ```

   Si no estás en main o tu directorio de trabajo no está limpio, resuelve cualquier archivo/commits pendientes y comprueba `main`:

   ```console
   git checkout main
   ```

2. Sincroniza los últimos cambios desde la rama principal `main` de freeCodeCamp a tu rama main local:

   > [!WARNING] Si tienes algún pull request pendiente que hayas hecho desde la rama `main` de tu bifurcación, los perderás al final de este paso.
   > 
   > Debería asegurarse de que su pull request está fusionado por un moderador antes de realizar este paso. Para evitar este escenario, deberías **siempre** trabajar en una rama que no sea `main`.

   Este paso **sincronizará los últimos cambios** desde el repositorio principal de freeCodeCamp. Es importante que rebase su rama sobre la última `upstream/main` tan a menudo como sea posible para evitar conflictos más tarde.

   Actualiza tu copia local del repositorio de freeCodeCamp upstream:

   ```console
   git fetch upstream
   ```

   Restablece tu rama main con el main de freeCodeCamp:

   ```console
   git reset --hard upstream/main
   ```

   Empuje su rama main a su origen para tener un historial limpio en su bifurcación en GitHub:

   ```console
   git push origin main --force
   ```

   Puedes validar que tu main actual concuerda con el upstream/main realizando un diff:

   ```console
   git diff upstream/main
   ```

   La salida resultante debe estar vacía.

3. Crear una nueva rama:

   Trabajar en una rama separada para cada asunto le ayuda a mantener limpia su copia de trabajo local. Nunca deberías trabajar en `main`. Esto sumergirá su copia de freeCodeCamp y puede que tenga que empezar con un clon o un tenedor fresco.

   Comprueba que estás en `main` como se explicó anteriormente, y ramifica desde ahí:

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

9. Si te das cuenta de que necesitas editar un archivo o actualizar el mensaje de confirmación después de hacer un commit puedes hacerlo después de editar los archivos con:

   ```console
   git commit --amend
   ```

   Esto abrirá un editor de texto predeterminado como `nano` o `vi` donde puedes editar el título del mensaje de commit y añadir/editar la descripción.

10. A continuación, puede enviar sus cambios a su fork:

    ```console
    git push rama/nombre de origen aquí
    ```

## Proponer una Pull Request (PR)

Después de que hayas cometido tus cambios, consulta aquí [cómo abrir una Pull Request](how-to-open-a-pull-request.md).

## Referencia de comandos rápidos

Una referencia rápida a los comandos que necesitará cuando trabaje localmente.

| comando                                                        | descripción                                                                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `npm ci`                                                       | Instala / reinstala todas las dependencias y arranca los diferentes servicios.                                     |
| `npm run seed`                                                 | Analiza todos los archivos markdown del desafío e inserta en MongoDB.                                              |
| `npm run develop`                                              | Inicia el servidor freeCodeCamp API y las aplicaciones de cliente.                                                 |
| `npm run storybook`                                            | Inicia Storybook para el desarrollo de la biblioteca de componentes.                                               |
| `npm test`                                                     | Ejecuta todas las pruebas JS en el sistema, incluidas las pruebas de cliente, servidor, lint y pruebas de desafío. |
| `npm run test-client`                                          | Ejecuta el conjunto de pruebas del cliente.                                                                        |
| `npm run test:curriculum`                                      | Ejecuta el conjunto de pruebas del curriculum.                                                                     |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | Prueba un bloque específico.                                                                                       |
| `npm run test:curriculum --superblock='responsive-web-design'` | Evalúa un SuperBlock específico.                                                                                   |
| `npm run test-curriculum-full-output`                          | Ejecutar el programa de prueba de currículo, sin tener que pagar después del primer error                          |
| `npm run test-server`                                          | Ejecute la suite de pruebas del servidor.                                                                          |
| `npm run e2e`                                                  | Ejecute el Cypress end para terminar las pruebas.                                                                  |
| `npm run clean`                                                | Desinstala todas las dependencias y limpia las cachés.                                                             |

## Solución de problemas

### Problemas con la instalación de los prerrequisitos recomendados

Regularmente desarrollamos en los últimos o más populares sistemas operativos como macOS 10.15 o posterior, Ubuntu 18.04 o posterior y Windows 10 (con WSL2).

Se recomienda buscar tu problema específico en recursos como Google, Stack Overflow y Stack Exchange. Existe la posibilidad de que alguien haya tenido al mismo problema y ya haya una respuesta a tu pregunta específica.

Si estás en un sistema operativo diferente y/o todavía tienes problemas, consulta [obtener ayuda](#getting-help).

> [!WARNING]
> 
> Please avoid creating GitHub issues for prerequisite issues. They are out of the scope of this project.

### Problemas con la interfaz de usuario, fuentes, errores de compilación, etc.

Si usted se enfrenta a problemas con la interfaz de usuario, fuentes o ver errores de compilación, una limpieza puede ser útil:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

O

Usa el atajo

```
npm run clean-and-develop
```

Si continúa enfrentándose a problemas con la construcción, se recomienda limpiar el espacio de trabajo.

Usa `git clean` en modo interactivo:

```
git clean -ifdX
```

<details>
   <summary>
      Cómo limpiar archivos sin seguimiento de git (captura de pantalla)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Como limpiar archivos sin seguimientos de git" />
</details>

### Problemas con API, login, Desafío de Submisiones, etc.

Si no puedes iniciar sesión, y en su lugar ves un banner con un mensaje de error que será reportado a freeCodeCamp, por favor, comprueba que tu puerto local `3000` no esté en uso por un programa diferente.

<!-- tabs:start -->

#### **macOS/Linux/WSL en Windows - Desde la terminal:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

#### **En Windows - Desde Elevated PowerShell:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

<!-- tabs:end -->

---

### Problemas instalando dependencias

Si obtiene errores durante la instalación de las dependencias, por favor asegúrese de que no está en una red restringida o sus ajustes de cortafuegos no le impiden acceder a los recursos.

La primera configuración puede tardar un rato dependiendo del ancho de banda de su red. Tenga paciencia, y si todavía está atascado le recomendamos usar GitPod en lugar de una configuración sin conexión.

> [!NOTE] If you are using Apple Devices with M1 Chip to run the application locally, it is suggested to use Node v14.7 or above. You might run into issues with dependencies like Sharp otherwise.

## Obteniendo ayuda

Si estas atascado y necesitas ayuda, siéntete libre de realizar preguntas en la [Categoria "Contribuyentes" en nuestro foro](https://forum.freecodecamp.org/c/contributors) o en la [Sala de Chat de los Contribuyentes](https://chat.freecodecamp.org/channel/contributors).

Puede haber un error en la consola de su navegador o en Bash / Terminal / Command Line que le ayudará a identificar el problema. Proporcione este mensaje de error en la descripción de su problema para que otros puedan identificar el problema más fácilmente y ayudarle a encontrar una solución.
