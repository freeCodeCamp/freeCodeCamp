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
