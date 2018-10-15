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

Una vez que tengas los requisitos previos instalados, necesitas preparar tu entorno de desarrollo. Once you have the prerequisites installed, you need to prepare you development environment. Esto es común para muchos flujos de trabajo, y tendrás que hacer esto solo una vez.

**Sigue estos pasos para tener tu entorno de desarrolloo listo:**

1. Instala [Git](https://git-scm.com/) o tu cliente favorito de Git, si tu no lo tienes aun. Actualiza a la ultima version, Update to the latest version, el que vino con tu OS se puede quedar obsoleto.

2. (Opcional pero recomendado) [Configura una SSH Key](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.

3. Instala un editor de codigo de tu elección.

    Nosotros recomendamos usar [VS Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Estos son unos grandes editores de codigo fuente libre.

4. Configuración de linting para su editor de códigos.

    Tu deberías teneer [ESLint corriendo en tu editor](http://eslint.org/docs/user-guide/integrations.html), y destacara cualquier cosa que no cumpla con [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

    > Por favor no ignore nigun error linting. Están destinados a **ayudarte** y asegurar una base de código limpio y simple.
