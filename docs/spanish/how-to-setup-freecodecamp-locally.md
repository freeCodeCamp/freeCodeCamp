# Configura freeCodeCamp localmente en tu sistema

Sigue esta guía para poder configurar freeCodeCamp localmente en tu sistema. Esto es altamente recomendable si quieres realizar contribuciones regularmente.

El flujo de trabajo de las contribuciones puede desear mostrar vistas previas de las páginas para la guía o los desafíos de programación. La depuración o el arreglo de errores en la base de código requiere que tengamos freeCodeCamp ejecutándose de manera local. 

## Como hacer Forking a un repositorio en GitHub

['Forking'](https://help.github.com/articles/about-forks/) es un paso en donde obtienes tu propia copia de el repositorio principal de freeCodeCamp (también conocido como _repo_) en GitHub.

Esto es esencial, por que de esta manera puedes trabajar en tu propia copia de freeCodeCamp en GitHub, o descargarla para trabajar con ella de manera local. Después, podrías solicitar que cambios sean extraídos al repositorio principal al realizar un _pull request_ o solicitud de cambio.

> **Consejo:**
> El repositorio principal en `https://github.com/freeCodeCamp/freeCodeCamp` normalmente se llama repositorio `upstream`.
> Tu _fork_ en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp` normalmente se llama repositorio `origin`.

**Pasos para hacer un fork del repositorio `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Dirigete al repositorio de freeCodeCamp en GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Haz click en el botón que pone "Fork" en la parte superior derecha de la pantalla ([Más información aquí (ENG)](https://help.github.com/articles/fork-a-repo/))
3. Al terminar de hacer el fork, sereis redirigidos a vuestra cópia del repositorio freeCodeCamp en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp`

![GIF - How to fork freeCodeCamp on Github](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## Preparando el entorno de desarrollo

Una vez tengas los requisitos previos instalados, necesitas preparar tu entorno de desarrollo. Esto es común en muchos flujos de trabajo de desarrollo, y solo deberás hacerlo una vez.

**Sigue estos pasos para tener tu entorno de desarrollo listo:**

1. Instala [Git](https://git-scm.com/) o tu cliente Git preferido, si aún no tienes ninguno. Actualiza a la última versión, la versión que viene por defecto en algunos sistemas operativos puede no estar del todo actualizada.

2. (Opcional pero recomendado) [Configurar una clave SSH (ENG)](https://help.github.com/articles/generating-an-ssh-key/) para GitHub

3. Instalar un editor de código.

    Nosotros recomendamos usar [VS Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Son buenas opciones de editores de código gratuitas y de código abierto.

4. Configurar el _linting_ para tu editor de código.

    deberías tener [ESLint corriendo en tu editor](http://eslint.org/docs/user-guide/integrations.html), y él se encargará de marcar cualquier cosa que no encaje con la [Guia de estilos de freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

    > Por favor no ignores ningún error de _linting_. los errores están para **ayudarte** y para asegurar una base de código simple y limpio.

## Clonar tu copia de freeCodeCamp

['Clonar'](https://help.github.com/articles/cloning-a-repository/) es un paso donde tu **descargas** una copia de un repositorio tuyo o de alguien más desde una localización remota (`remote`). En tu caso, esta localización remota es tu propio `fork` del repositorio de freeCodeCamp, que debería estar disponible en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp`.

Ejecuta estos comandos en tu máquina local:

1. Abre una terminal en el directorio de tus proyectos

    _p.e.: `/tudirectoriodeproyectos/`_

2. Clona tu fork de freeCodeCamp, sustituyendo `TU_NOMBRE_DE_USUARIO` por tu usuario de GitHub

    ```shell
    git clone https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp
    ```

Este comando descarga el repositorio entero de freeCodeCamp a tu directorio de proyectos.

## Configura el `upstream` al repositorio principal

Ahora que has descargado la copia de tu fork, es necesario configurar un `upstream`.

Como hemos mencionado anteriormente, el repositorio principal en `https://github.com/freeCodeCamp/freeCodeCamp` se suele llamar repositorio `upstream`. Tu fork en `https://github.com/TU_NOMBRE_DE_USUARIO/freeCodeCamp` se suele llamar repositorio `origin`.

Es necesario apuntar tu copia local hacia el `upstream` además del `origin`. Esto se hace para que puedas sincronizar los cambios del repositorio principal. De esta manera no tendrás que hacer fork y clonar el repositorio una y otra vez.

1. Accede al nuevo directorio freeCodeCamp:

    ```shell
    cd freeCodeCamp
    ```

2. Añade el repositorio principal de freeCodeCamp al remote:

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3. Comprueba que la configuración sea la correcta:

    ```shell
    git remote -v
    ```

    La salida de este comando debería ser algo como:

    ```shell
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```