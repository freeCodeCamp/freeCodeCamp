# Cómo abrir una Pull Request (PR)

Una pull request (PR) le permite enviar cambios desde su bifurcación en GitHub al repositorio principal de freeCodeCamp.org. Una vez que haya hecho cambios en el código, puede seguir estas pautas para abrir un PR.

> [!NOTE] Tu PR debe ser en inglés. Consulta [aquí](index.md#translations) para saber cómo contribuir con las traducciones.

## Prepara un buen título para tu PR

Recomendamos usar [titulos y mensajes convencionales](https://www.conventionalcommits.org/) para tus commits y pull request. La convención tiene el siguiente formato:

> `<tipo>([ámbito opcional]): <descripción>`
> 
> Por ejemplo:
> 
> `fix(learn): tests for the do...while loop challenge`

Al abrir una Pull Request(PR), puedes utilizar la siguiente guía para determinar el tipo, ámbito (opcional) y descripción de la PR.

**Tipo:**

| Tipo  | Cuándo seleccionar                                                                         |
|:----- |:------------------------------------------------------------------------------------------ |
| fix   | Funcionalidades actualizadas o mejoradas, pruebas, redacción de la lección, etc.           |
| feat  | Sólo si está añadiendo nuevas funcionalidades, pruebas, etc.                               |
| chore | Cambios que no están relacionados con el código, las pruebas o la redacción de la lección. |
| docs  | Cambios al directorio `/docs` o a las pautas de contribución, etc.                         |

**Ámbito:**

Puede seleccionar un ámbito de [esta lista de etiquetas](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descripción:**

Mantenlo corto (menos de 30 caracteres) y sencillo, puedes agregar más información en la caja de descripción del PR y comentarios.

Algunos ejemplos de buenos títulos para PRs serían:

- `fix(a11y): contraste mejorado en la barra de búsqueda`
- `feat: se agregan más test a los retos de HTML y CSS`
- `fix(api,client): evitar errores CORS en el envío de formularios`
- `docs(i18n): Traducción al chino de la configuración local`

## Proponer una Pull Request

1. Una vez que las ediciones hayan sido confirmadas, se le pedirá que cree un pull request en la página de GitHub de su fork.

   ![Image - Compare & pull request prompt on GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

2. De manera predeterminada, todas las pull requests deben estar en contra de la rama freeCodeCamp main repo, `main`.

   Asegúrese de que su bifurcación base está configurada en freeCodeCamp/freeCodeCamp al elevar una solicitud de Pull Request.

   ![Imagen - Comparando bifurcaciones al hacer un pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

3. Envía el pull request de tu rama a la rama `main` de freeCodeCamp.

4. En el cuerpo de sus relaciones públicas incluya un resumen más detallado de los cambios realizados y por qué.

   - Se le presentará una plantilla de pull request. Esta es una lista de verificación que debería haber seguido antes de abrir la solicitud de pull request.

   - Rellene los detalles como considere oportuno. Esta información será revisada y los revisores decidirán si su pull request es o no aceptada.

   - Si el PR está pensado para abordar un problema existente de GitHub entonces, al final de el cuerpo de la descripción de su PR, use la palabra clave _Cierra_ con el número de incidencia para [cerrar automáticamente ese problema si se acepta y fusionan las relaciones públicas](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Ejemplo: `Cerrar #123` cerrará el problema 123

5. Indica si has probado en una copia local del sitio o no.

   - Esto es muy importante cuando se hagan cambios que no sean solo ediciones del contenido de texto como documentación o una descripción de un desafío. Ejemplos de los cambios que necesitan pruebas en el entorno local incluyen JavaScript, CSS o HTML que podrían cambiar la funcionalidad o el diseño de una página.

   - Si tu PR afecta el comportamiento de una página, debe ir acompañada de la correspondiente [pruebas de integración de Cypress](how-to-add-cypress-tests.md).

## Comentarios sobre pull requests

> ¡Felicidades! :tada: por hacer una PR y muchas gracias por tomarte el tiempo en contribuir.

Nuestros moderadores ahora echarán un vistazo y te dejarán tus comentarios. Por favor, sea paciente con los demás moderadores y respete su tiempo. Todos los pull requests son revisados a su debido tiempo.

Y como siempre, siéntete libre de preguntar en la [categoría de 'Contribuidores' de nuestro foro](https://forum.freecodecamp.org/c/contributors) o [en la sala de chat de contribuidores](https://chat.freecodecamp.org/channel/contributors).

> [!TIP] Si vas a contribuir con más PRs, te recomendamos que leas las directrices ["haciendo cambios y sincronizando"](how-to-setup-freecodecamp-locally.md#making-changes-locally) para evitar la necesidad de borrar tu bifurcación.

## Conflicto en un pull request

Los conflictos pueden surgir porque muchos colaboradores trabajan en el repositorio y los cambios pueden romper su PR que está pendiente de revisión y fusión.

La mayoría de las veces podrías no requerir un rebase porque juntamos todas las confirmaciones, sin embargo, si un rebase es solicitado, esto es lo que tienes que hacer.

### Para arreglos de errores y características habituales

Cuando trabajas con errores regulares y funcionalidades en nuestra rama de desarrollo `main`, puedes hacer un simple rebase:

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

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. Enviar los cambios al PR

   ```console
   git push --force origin <pr-branch>
   ```

### Para los próximos planes de estudios y características

Cuando estás trabajando en características para nuestras próximas ramas del plan de estudio `next-*`, tienes que hacer un "cherry pick":

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
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-name>
   ```

   b. O simplemente una copia de seguridad de su rama pr (si no la tiene localmente):

   ```console
   git checkout -b <backup-branch-name> origin/<pr-branch-name>

   # ejemplo:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question

   ```

3. Empezar con una pizarra limpia:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. Resuelve cualquier conflicto y limpia, instala pruebas de ejecución

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # ejemplo:

   # npm run test:curriculum --superblock=python-for-everyone

   ```

5. Si todo se ve bien empuje hacia el PR

   ```console
   git push --force origin <pr-branch-name>
   ```
