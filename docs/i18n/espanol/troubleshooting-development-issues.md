If you are facing an issue, there is a high chance that the resolution is in this documentation.

## Issues with Installing the Recommended Prerequisites

Regularmente desarrollamos en los últimos o más populares sistemas operativos como macOS 10.15 o posterior, Ubuntu 18.04 o posterior, y Windows 10 (con WSL2).

Se recomienda buscar tu problema específico en recursos como Google, Stack Overflow y Stack Exchange. Existe la posibilidad de que alguien haya enfrentado el mismo problema y que ya exista una respuesta a tu pregunta específica.

Si estás en un sistema operativo diferente o todavía estas encontrandote con problemas, consulta [obtener ayuda](#getting-help).

> [!WARNING]
> 
> Por favor, evite crear asuntos de GitHub para problemas con las tecnologías previas. Están fuera del alcance de este proyecto.

## Issues with Missing UI, Fonts, Language Strings, or Build Errors

When you build the client, Gatsby will cache the fonts, language strings, and UI. Si uno de ellos no fue almacenado en caché, ejecute lo siguiente:

```bash
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

If you continue to face issues with the build, cleaning up the workspace is recommended.

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

If you can't sign in, and instead you see a banner with an error message saying that the error will be reported to freeCodeCamp, please double-check that your local port `3000` is not in use by a different program.

#### **From Terminal:**
```bash
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```


## Issues Signing Out while Navigating

Mientras estás en desarrollo, tu sesión es almacenado como cookies. Limpiarlos cerrará la sesión de tu cuenta de desarrollo.

Running `pnpm run seed:certified-user` will log you out, too. Pero sobrescribirá al usuario de desarrollo en tu base de datos local.

## Issue Getting 404 when Navigating Profile Page

Cuando intenta navegar a http://localhost:8000/developmentuser para ver la página de perfil, Gatsby se encarga de servir las páginas del lado del cliente y por lo tanto obtendrá una página 404 para el perfil de usuario cuando este trabajando.

Hay un botón de "Vista previa de página 404 personalizada", haga clic en él para ver el perfil.

## Issues Installing Dependencies

Si tienes errores mientras instalas dependencias, por favor asegúrate de que no estes en una red restringida o tu configuración de firewall no te impida acceder a los recursos.

La primera configuración puede tardar un rato dependiendo del ancho de banda de tu red. Be patient, and if you are still stuck we recommend using Gitpod instead of an offline setup.

> [!NOTE] Si estás utilizando dispositivos de Apple con el chip M1 para iniciar la aplicación localmente, es sugerido usar Node v14.7 or superior. De lo contrario, podrías tener problemas con dependencias como Sharp.

## Working With Other Languages

To see how the client renders in another language go to [testing the client app in a world language.](how-to-work-on-localized-client-webapp.md#Testing-the-Client-App-in-a-World-Language)

## Getting Help

Si estás atascado y necesitas ayuda, sientete libre de hacer preguntas en ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) o [the contributors chat room](https://discord.gg/PRyKn3Vbay).

Puede haber un error en la consola de tu navegador o en el Bash / Terminal / Línea de comandos que te ayudará a identificar el problema. Proporciona este mensaje de error en la descripción de tu problema para que otros puedan identificar el problema fácilmente y ayudarte a encontrar una solución.
