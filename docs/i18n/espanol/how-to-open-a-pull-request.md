# Cómo abrir una Pull Request (PR)

Una pull request (PR) le permite enviar cambios desde su bifurcación en GitHub al repositorio principal de freeCodeCamp.org. Una vez que haya hecho cambios en el código, puede seguir estas pautas para abrir un PR.

## Prepara un buen título para tu PR

Recomendamos usar [titulos y mensajes convencionales](https://www.conventionalcommits.org/) para tus commits y pull request. La convención tiene el siguiente formato:

> `<type>([ámbito opcional(s)]): <description>`
> 
> Por ejemplo:
> 
> `fix(learn): tests for the do...while loop challenge`

When opening a Pull Request(PR), you can use the below to determine the type, scope (optional), and description.

**Tipo:**

| Tipo  | Cuándo seleccionar                                                               |
|:----- |:-------------------------------------------------------------------------------- |
| fix   | Changed or updated/improved functionality, tests, the verbiage of a lesson, etc. |
| feat  | Sólo si está añadiendo nuevas funcionalidades, pruebas, etc.                     |
| chore | Changes that are not related to code, tests, or verbiage of a lesson.            |
| docs  | Cambios al directorio `/docs` o a las pautas de contribución, etc.               |

**Alcance:**

Puede seleccionar un ámbito de [esta lista de etiquetas](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descripción:**

Manténgalo corto (menos de 30 caracteres) y simple, puede agregar más información en el cuadro de descripción de relaciones públicas y comentarios.

Algunos ejemplos de buenos títulos PRs serían:

- `fix(a11y): contraste mejorado en la barra de búsqueda`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): evitar errores CORS en el envío de formularios`
- `docs(i18n): Traducción al chino de la configuración local`

## Proponer una Pull Request

1. Una vez que las ediciones hayan sido confirmadas, se le pedirá que cree un pull request en la página de GitHub de su fork.

   ![Imagen - Comparar solicitud de pull en GitHub](./images/github/compare-pull-request-prompt.png)

2. By default, all pull requests should be against the freeCodeCamp main repo, `main` branch.

   Asegúrese de que su bifurcación base está configurada en freeCodeCamp/freeCodeCamp al elevar una solicitud de Pull Request.

   ![Imagen - Comparando bifurcaciones al hacer un pull request](./images/github/comparing-forks-for-pull-request.png)

3. Submit the pull request from your branch to freeCodeCamp's `main` branch.

4. En el cuerpo de sus relaciones públicas incluya un resumen más detallado de los cambios realizados y por qué.

   - Se le presentará una plantilla de pull request. Esta es una lista de verificación que debería haber seguido antes de abrir la solicitud de pull request.

   - Rellene los detalles como considere oportuno. Esta información será revisada y los revisores decidirán si su pull request es o no aceptada.

   - Si el PR está pensado para abordar un problema existente de GitHub entonces, al final de el cuerpo de la descripción de su PR, use la palabra clave _Cierra_ con el número de incidencia para [cerrar automáticamente ese problema si se acepta y fusionan las relaciones públicas](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Ejemplo: `Cerrar #123` cerrará el problema 123

5. Indicate if you have tested on a local copy of the site or not.

   - This is very important when making changes that are not just edits to text content like documentation or a challenge description. Examples of changes that need local testing include JavaScript, CSS, or HTML which could change the functionality or layout of a page.

   - If your PR affects the behaviour of a page it should be accompanied by corresponding [Cypress integration tests](/how-to-add-cypress-tests).

## Comentarios sobre pull requests

> ¡Felicidades! :tada: en hacer relaciones públicas y muchas gracias por tomarse el tiempo para contribuir.

Nuestros moderadores ahora echarán un vistazo y te dejarán tus comentarios. Por favor, sea paciente con los demás moderadores y respete su tiempo. Todos los pull requests son revisados a su debido tiempo.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).

> [!TIP] Si quieres contribuir con más solicitudes de extracción, te recomendamos que leas las directrices [haciendo cambios y sincronizando](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) para evitar tener que borrar tu bifurcación.

## Conflicto en un pull request

Los conflictos pueden surgir porque muchos colaboradores trabajan en el repositorio y los cambios pueden romper su PR que está pendiente de revisión y fusión.

La mayoría de las veces no puede requerir una rebase, porque aplastamos todos los commits, Sin embargo, si se solicita una rebase aquí es lo que debe hacer.

### Para arreglos de errores y características habituales

When you are working on regular bugs and features on our development branch `main`, you are able to do a simple rebase:

1. Reiniciar su copia local:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Resolver cualquier conflicto y añadir / editar commits

   ```console
   # O bien
   git add .
   git commit -m "chore: resolve conflicts"

   # o
   git add .
   git commit --amend --no-edit
   ```

3. Enviar los cambios al PR

   ```console
   git push --force origin <pr-branch>
   ```

### Para los próximos planes de estudios y características

Cuando estás trabajando en funciones para nuestro próximo currículo `siguiente *` ramas, tienes que hacer una selección de cerezos:

1. Asegúrese de que su autor está sincronizado con su local:

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Respaldar

   a. Borra tu rama local después de realizar una copia de seguridad (si todavía la tienes localmente):

      ```console
      git checkout <pr-branch-name>

      # ejemplo:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # ejemplo:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. O simplemente una copia de seguridad de su rama pr (si no la tiene localmente):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # ejemplo:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Empezar con una pizarra limpia:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Resuelve cualquier conflicto y limpia, instala pruebas de ejecución

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # ejemplo:

   # npm run test:curriculum --superblock=python-for-everyone

   ```

6. Si todo se ve bien empuje hacia el PR

   ```console
   git push --force origin <pr-branch-name>
   ```
