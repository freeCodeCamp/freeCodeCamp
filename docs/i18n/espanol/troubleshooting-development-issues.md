If you are facing an issue, there is a high chance that the resolution is in this documentation.

## Issues with Installing the Recommended Prerequisites

Regularmente desarrollamos en los últimos o más populares sistemas operativos como macOS 10.15 o posterior, Ubuntu 18.04 o posterior, y Windows 10 (con WSL2).

Se recomienda buscar tu problema específico en recursos como Google, Stack Overflow y Stack Exchange. Existe la posibilidad de que alguien haya enfrentado el mismo problema y que ya exista una respuesta a tu pregunta específica.

Si estás en un sistema operativo diferente o todavía estas encontrandote con problemas, consulta [obtener ayuda](#getting-help).

> [!WARNING]
> 
> Por favor, evite crear asuntos de GitHub para problemas con las tecnologías previas. Están fuera del alcance de este proyecto.

## Issues with Missing UI, Fonts, Language Strings, or Build Errors

When you build the client, Gatsby will cache the Fonts, language strings, and UI. Si uno de ellos no fue almacenado en caché, ejecute lo siguiente:

```console
pnpm run clean
pnpm install
pnpm run seed
pnpm run develop
```

O

Use el atajo

```
pnpm run clean-and-develop
```

Si continúa enfrentándose a problemas con la construcción, se recomienda limpiar el espacio de trabajo.

Use `git clean` en modo interactivo:

```
git clean -ifdX
```

<details>
   <summary>
      Cómo limpiar archivos sin el seguimiento de git (captura de pantalla)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Cómo limpiar archivos sin el seguimiento de git" />
</details>

## Issues with API, login, Challenge Submissions, etc.

Si no puedes iniciar sesión, y en cambio ves un banner con un mensaje de error de que será reportado a freeCodeCamp, por favor, verifique otra vez de que tu puerto local `3000` no esté en uso por un programa diferente.

<!-- tabs:start -->

#### **macOS/Linux/WSL en Windows - Desde la terminal:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

#### **En Windows - Desde PowerShell con permisos de administrador:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

<!-- tabs:end -->

---

## Issues Signing Out while Navigating

Mientras estás en desarrollo, tu sesión es almacenado como cookies. Limpiarlos cerrará la sesión de tu cuenta de desarrollo.

Running `pnpm run seed:certified-user` will log you out, too. Pero sobrescribirá al usuario de desarrollo en tu base de datos local.

## Issue Getting 404 when Navigating Profile Page

Cuando intenta navegar a http://localhost:8000/developmentuser para ver la página de perfil, Gatsby se encarga de servir las páginas del lado del cliente y por lo tanto obtendrá una página 404 para el perfil de usuario cuando este trabajando.

Hay un botón de "Vista previa de página 404 personalizada", haga clic en él para ver el perfil.

## Issues Installing Dependencies

Si tienes errores mientras instalas dependencias, por favor asegúrate de que no estes en una red restringida o tu configuración de firewall no te impida acceder a los recursos.

La primera configuración puede tardar un rato dependiendo del ancho de banda de tu red. Ten paciencia, y si todavía estás atascado recomendamos usar GitPod en lugar de una configuración sin conexión.

> [!NOTE] Si estás utilizando dispositivos de Apple con el chip M1 para iniciar la aplicación localmente, es sugerido usar Node v14.7 or superior. De lo contrario, podrías tener problemas con dependencias como Sharp.

## Getting Help

Si estás atascado y necesitas ayuda, sientete libre de hacer preguntas en ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) o [the contributors chat room](https://discord.gg/PRyKn3Vbay).

Puede haber un error en la consola de tu navegador o en el Bash / Terminal / Línea de comandos que te ayudará a identificar el problema. Proporciona este mensaje de error en la descripción de tu problema para que otros puedan identificar el problema fácilmente y ayudarte a encontrar una solución.
