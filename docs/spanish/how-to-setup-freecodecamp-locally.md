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

Una vez tengas los requisitos previos instalados, necesitas preparar tu entorno de desarrollo. Esto és común en muchos flujos de trabajo de desarrollo, y solo deberás hacerlo una vez.

**Sigue estos pasos para tener tu entorno de desarrollo listo:**

1. Instala [Git](https://git-scm.com/) o tu cliente Git preferido, si aún no tienes ningúno. Actualiza a la última versión, la versión que viene por defecto en algunos sistemas operativos puede no estar del todo actualizada.

2. (Opcional pero recomendado) [Configurar una clave SSH (ENG)](https://help.github.com/articles/generating-an-ssh-key/) para GitHub

3. Instalar un editor de codigo.

    Nosotros recomendamos usar [VS Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Són buenas opciones de editores de código gratuitas y de codigo abierto.

4. Configurar el _linting_ para tu editor de código.

    deberías tener [ESLint corriendo en tu editor](http://eslint.org/docs/user-guide/integrations.html), y él se encargará de marcar cualquier cosa que no encaje con la [Guia de estilos de freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

    > Por favor no ignores ningún error de _linting_. los errores están para **ayudarte** y para asegurar una base de código simple y limpio.