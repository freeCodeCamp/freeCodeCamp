Siga esta guía para establecer la aplicación móvil FreeCodeCamp en su sistema. Es altamente recomentado si se quiere contribuir regularmente.

Algunos de los flujos de trabajo de contribución – como corregir errores en el código base – necesitan que ejecutes la app de freeCodeCamp localmente en tu ordenador.

### Cómo preparar tu máquina local

Empezar instalando el software requerido previamente para su sistema operativo.

#### Requisitos previos:

| Requisito                       | Versión | Notas                                    |
| ------------------------------- | ------- | ---------------------------------------- |
| [Flutter](https://flutter.dev/) | `3.x`   | -                                        |
| Dart (viene junto con Flutter)  | `2.x`   | Usamos la versión que viene con Flutter. |

> [ATENCIÓN!] Si hay una versión diferente, por favor instalar la versión recomendada. Solo daremos soporte a problemas de instalación de versiones recomendadas.

Si Flutter ya está instalado en su equipo, ejecute los siguientes comandos para verificar la versión:

```console
flutter --version
dart --version
```

> [!TIP] Pedimos encarecidamente actualizar a la última version "stable" del siguiente software.

Una vez que estén instalados los requisitos previos, hay que preparar el entorno de desarrollo. Es muy común para muchos equipos de trabajo, y solo hace falta hacerlo una vez.

##### Seguir estos pasos para tener listo el entorno de desrrollo:

1. Instalar [Git](https://git-scm.com/) u otro cliente Git, si todavía no hay ningumo. Acualizar a la versión más reciente. La que viene con el sistema operativo puede estar desactualizada.

2. Configurar [Android Studio](https://developer.android.com/studio) y [Android Emulators](https://developer.android.com/studio/run/managing-avds) con la última versión liberada de Android. Recomendamos usar Pixel 3a XL y Nexus One(para emular pantallas más pequeñas).

3. (Opcional para MacOS) Configurar Xcode e iOS Simulator con la última versión liberada de iOS.

4. (Opcional pero recomendado) [Configurar una clave SSH](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.

5. Instala un editor de código de tu elección.

   Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) o Android Studio. También recomendamos instalar las [extensiones oficiales](https://docs.flutter.dev/get-started/editor?tab=vscode).

## Fork del repositorio en GitHub

[Fork](https://help.github.com/articles/about-forks/) es un paso donde consigues tu propia copia del repositorio (conocido como _repo_) en GitHub.

Esto es esencial, te permite trabajar en tu propia copia de la app móvil de freeCodeCamp en GitHub, o descargar (clonar) tu repositorio para trabajar localmente.  Más adelant, podrás solicitar cambios para que se muestren en el repositorio principal de  tu "fork" (bifurcación) a través de una "pull request" (PR).

> [!TIP] El repositorio principal en `https://github.com/freeCodeCamp/mobile` es frecuentemente conocido como el repositorio `upstream`.
> 
> Tu fork en `https://github.com/YOUR_USER_NAME/mobile` suele referirse como el repositorio `origin`. `YOUR_USER_NAME` será remplazado con tu nombre de usuario de GitHub.

**Sigue estos pasos para hacer un for del repositorio `https://github.com/freeCodeCamp/mobile`:**

1. Ve al repositorio freeCodeCamp móvil en GitHub: <https://github.com/freeCodeCamp/mobile>

2. Haz clic en el botón "Fork" en la esquina superior derecha de la interfaz ([Más detalles aquí](https://help.github.com/articles/fork-a-repo/))

3. Después de haber hecho fork al repositorio, serás llevado a tu copia del repositorio en `https://github. om/NOMBRE_DE_USUARIO/mobile` (`OMBRE_DE_USUARIO` sería reemplazado con tu nombre de usuario de GitHub.)

## Clonar tu fork desde GitHub

"[Clonar](https://help.github.com/articles/cloning-a-repository/)" es donde tú  "**descargas**" una copia de un repositorio desde una localización "`remota`" que es propiedad tuya o de alguien más. En tu caso, esta localización remota es tu "`fork`" del repositorio de freeCodeCamp que debería estar disponible en `https://github.com/TU_NOMBRE_DE_USUARIO/mobile`. (`TU_NOMBRE_DE_USUARIO` debería ser reemplazado con tu nombre de usuario de GitHub.)

Ejecuta estos comandos en tu máquina local:

1. Abre una Terminal / Símbolo del sistema / Shell en el directorio de proyectos

   _ejemplo: `/directoriodetusproyectos/`_

2. Clona tu fork de freeCodeCamp, reemplazando `TU_NOMBRE_DE_USUARIO` por tu nombre de usuario de GitHub

   ```console
   git clon --depth=1 https://github.com/TU_NOMBRE_DE_USUARIO/mobile.git
   ```

Esto descargará el repositorio entero de freeCodeCamp móvil en tu directorio de proyectos.

Nota: `--depth=1` crea un clon superficial de tu fork con solo la historia/commit más reciente.

## Configurar sincronización desde el padre

Ahora que has descargado una copia de tu fork, necesitarás configurar un `upstream` remoto en el repositorio padre.

[Como se mencionó anteriormente](#fork-the-repository-on-github), el repositorio principal es referido repositorio `upstream`. Tu fork conocido como el repositorio de `origen`.

Necesitas una referencia de tu clon local al repositorio `upstream` además del repositorio `origin`. Esto es para que puedas sincronizar los cambios desde el repositorio principal sin el requisito de hacer fork y clonar repetidamente.

1. Cambiar el directorio al nuevo directorio `móvil`:

   ```console
   cd mobile
   ```

2. Añadir una referencia remota al repositorio principal de freeCodeCamp móvil:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/mobile.git
   ```

3. Asegúrate de que la configuración se vea correcta:

   ```console
   git remote -v
   ```

   La salida debería verse parecida a como se muestra debajo (remplazando `TU_NOMBRE_DE_USUARIO` con tu usuario de GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/mobile.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/mobile.git (push)
   upstream    https://github.com/freeCodeCamp/mobile.git (fetch)
   upstream    https://github.com/freeCodeCamp/mobile.git (push)
   ```

## Ejecutar la app móvil  de freeCodeCamp localmente

Ahora que tienes una copia local de la app móvil de freeCodeCamp, puedes seguir estas instrucciones para ejecutarla localmente.

Si tienes problemas, primero realiza una búsqueda web para tu problema y comprueba si ya ha sido respondida. Si no encuentras una solución, por favor busca en nuestra página [GitHub issues](https://github.com/freeCodeCamp/mobile/issues) para una solución y reporta el problema si aún no ha sido reportado.

Y como siempre, siéntete libre de preguntar en la categoría ['Contribuyentes' en nuestro foro](https://forum.freecodecamp.org/c/contributors) o [nuestro servidor de chat](https://discord.gg/PRyKn3Vbay).

> [!NOTE] El directorio `móvil` contiene dos carpetas, por ejemplo: `mobile-api` y `mobile-app`. `mobile-api` contiene el código API utilizado para ejecutar los podcasts. `mobile-app` contiene la aplicación Flutter que es donde deberías estar cuando siga los pasos siguientes.

### Configurar dependencias

#### Paso 1: Configurar el archivo de variable de entorno

Las claves de la API por defecto y las variables de entorno se almacenan en el archivo `sample.env`. El contenido de este archivo necesita ser copiado a un nuevo archivo llamado `.env` para que se acceda dinámicamente durante el paso de la instalación. Recuerda cambiar el directorio a `mobile-app` antes de ejecutar los siguientes comandos.

```console
# Crear una copia del "sample.env" y nombrarla ".env".
# Llenarlo con las keys y secrets de la API necesarios:
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

#### Paso 2: Instalar dependencias

Este paso instalará las dependencias necesarias para que la aplicación se ejecute:

```console
flutter pub get
```

#### Paso 3: Iniciar la app móvil de freeCodeCamp

Inicia el emulador de tu elección (Android o iOS) y espera a que se complete el proceso de arranque.

Ahora puedes iniciar la aplicación ejecutando el siguiente comando:

```console
flutter run
```

> [!TIP] Si estás utilizando VSCode o Android Studio entonces puedes iniciar fácilmente la aplicación sin tener que ejecutar ningún comando en la terminal. Más información [aquí](https://docs.flutter.dev/get-started/test-drive).

## Hacer cambios localmente

Ahora puedes hacer cambios en archivos y hacer commit de los cambios en tu clon local de tu fork.

Sigue estos pasos:

1. Valida que estás en la rama `main`:

   ```console
   git status
   ```

   Deberías obtener una salida como esta:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   Si no estás en main o tu directorio de trabajo no está limpio, resuelve cualquier archivos/commits pendientes y comprueba `main`:

   ```console
   git checkout main
   ```

2. Sincroniza los últimos cambios desde la rama principal `main` a tu rama local main:

   > [!WARNING] Si tienes algún pull request pendiente que hayas hecho desde la rama `main` de tu fork, los perderás al final de este paso.
   > 
   > Deberías asegurarte de que tu pull request esté hecho merge por un moderador antes de realizar este proceso. Para evitar este escenario, deberías **siempre** trabajar en una rama que no sea `main`.

   Este paso **sincronizará los últimos cambios** desde el repositorio móvil de freeCodeCamp. Es importante que hagas rebase de tu rama sobre la última `principal/main` tan a menudo como sea posible para evitar conflictos más tarde.

   Actualiza tu copia local del repositorio de freeCodeCamp móvil:

   ```console
   git fetch upstream
   ```

   Restablece tu rama main con el main de freeCodeCamp móvil:

   ```console
   git reset --hard upstream/main
   ```

   Has push de tu rama main a tu origen para tener un historial limpio en tu fork en GitHub:

   ```console
   git push origin main --force
   ```

   Puedes validar que tu main actual concuerda con el upstream/main realizando un diff:

   ```console
   git diff upstream/main
   ```

   La salida resultante debería estar vacía.

3. Crear una nueva rama:

   Trabajar en una rama separada para cada asunto te ayuda a mantener limpia tu copia de trabajo local. Nunca deberías trabajar en `main`. Esto sumergirá tu copia de freeCodeCamp móvil y puede que tengas que empezar otra vez con un clon o un fork nuevo.

   Comprueba que estás en `main` como se explicó anteriormente, y ramifica desde ahí:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Tu nombre de rama debería comenzar con `fix/`, `feat/`, `docs/`, etc. Evita el uso de números de incidencia en las ramas. Manténlos cortos, significativos y únicos.

   Algunos ejemplos de buenos nombres de ramas son:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edita páginas y trabaja en  el código en tu editor de texto favorito.

5. Una vez que estés contento con los cambios, deberías ejecutar la aplicación móvil localmente para previsualizar los cambios (opcional).

6. Asegúrate de corregir los errores y comprobar el formato de tus cambios.

7. Comprueba y confirma los archivos que estás actualizando:

   ```console
   git status
   ```

   Esto debería mostrar una lista de archivos `unstaged` que has editado.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
   ...
   ```

8. Organizar los cambios y hacer un commit:

   En este paso, sólo deberías marcar los archivos que has editado o añadido tu mismo. Puede realizar un reset y resolver archivos que no tenías intención de cambiar si es necesario.

   ```console
   git add ruta/al/archivo/editado.ext
   ```

   O puedes añadir todos los archivos que no estén `organizados` al área de staging:

   ```console
   git add .
   ```

   Sólo los archivos que fueron movidos al área de staging serán añadidos cuando hagas un commit.

   ```console
   git status
   ```

   Salida:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
   ```

   Ahora, puedes hace commit de tus cambios con un mensaje corto, así:

   ```console
   git commit -m "fix: mensaje corto"
   ```

   Algunos ejemplos:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Opcional:

   Recomendamos encarecidamente hacer un mensaje de commit convencional. Esta es una buena práctica que verás en algunos de los repositorios de Código Abierto populares. Como desarrollador, esto te anima a seguir las prácticas estándar.

   Algunos ejemplos de mensajes de commits convencionales son:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Manténlos cortos, no más de 50 caracteres. Siempre puedes añadir información adicional en la descripción del mensaje del commit.

   Esto no toma más tiempo que un mensaje no convencional como 'actualizar archivo' o 'añadir index.md'

   Puedes aprender más sobre por qué debes usar commits convencionales [aquí](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Si te das cuenta de que necesitas editar un archivo o actualizar el mensaje de confirmación después de hacer un commit puedes hacerlo después de editar los archivos con:

   ```console
   git commit --amend
   ```

   Esto abrirá un editor de texto predeterminado como `nano` o `vi` donde puedes editar el título del mensaje de commit y añadir/editar la descripción.

10. A continuación, puedes enviar tus cambios a tu fork:

    ```console
    git push origin nombre/rama-aqui
    ```

## Proponer una Pull Request (PR)

Después de que hayas hecho commit de tus cambios, consulta aquí [cómo abrir una Pull Request](how-to-open-a-pull-request.md).

<!-- ## Quick commands reference - NEED TO DISCUSS ABOUT THIS

A quick reference to the commands that you will need when working locally.

| command                                                        | description                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installs / re-install all dependencies and bootstraps the different services.       |
| `npm run seed`                                                 | Parses all the challenge markdown files and inserts them into MongoDB.              | -->

## Solución de problemas

### Problemas con la instalación de los prerrequisitos recomendados

Regularmente desarrollamos en los últimos o sistemas operativos más populares como macOS 10.15 o posterior, Ubuntu 18.04 o posterior y Windows 10 (con WSL2).

Se recomienda buscar tu problema específico en recursos como Google, Stack Overflow y Stack Exchange. Existe la posibilidad de que alguien haya tenido el mismo problema y ya exista una respuesta a tu pregunta específica.

Si estás en un sistema operativo diferente y/o todavía tienes problemas, consulta [obtener ayuda](#getting-help).

### Problemas con la interfaz de usuario, fuentes, errores de compilación, etc.

Si tienes problemas con la interfaz de usuario, o errores de compilación, una limpieza puede ser útil:

```console
flutter clean
```

### Problemas al instalar dependencias

Si obtienes errores al instalar las dependencias, por favor asegúrate de que no estés en una red restringida o que tu configuración de firewall no te impida acceder a los recursos.

Se paciente ya que la primera configuración puede tomar un tiempo dependiendo del ancho de banda de tu red.

## Obtener ayuda

Si estás atascado y necesitas ayuda, siéntete libre de hacer preguntas en la categoría de ['Contribuyentes' en nuestro foro](https://forum.freecodecamp.org/c/contributors) o en [la sala de chat de contribuyentes](https://discord.gg/PRyKn3Vbay).

Puede haber un error en la consola de tu navegador o en Bash / Terminal / Línea de comandos que te ayudará a identificar el problema. Proporciona este mensaje de error en la descripción de tu problema para que otros puedan identificar el problema más fácilmente y ayudarte a encontrar una solución.
