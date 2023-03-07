# Cómo abrir una Pull Request (PR)

Una pull request (PR) le permite enviar cambios desde su bifurcación en GitHub al repositorio principal de freeCodeCamp.org. Una vez que haya hecho cambios en el código, puede seguir estas pautas para abrir un PR.

We expect our contributors to be aware of the process specific to this project. Following the guidelines religiously earns you the respect of fellow maintainers and saves everyone time.

Some examples of this are:

1. Do not edit files directly through GitHub – while you can, it's not a good idea.
2. Make sure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously.
3. Use the correct way to link issues in the description of the PR by updating the `XXXXXX`. Do not just add issue numbers everywhere and anywhere you feel like.
4. Do not "@mention" or request someone for reviews too many times.

   We understand you are excited about contributing. As much as a maintainer will love to get back to you, they are busy people looking after hundreds of requests just like yours. Be patient, someone will get to you sooner or later.

5. Do not work directly off your `main` branch - create a new branch for the changes you are working on.

> [!NOTE] Your PR should be targeting changes to the English curriculum only. Read [this guide](index.md#translations) instead for contributing to translations.

## Prepara un buen título para tu PR

We recommend using [conventional title and messages](https://www.conventionalcommits.org/) for commits and pull request. The convention has the following format:

> `<tipo>([ámbito opcional]): <descripción>`
> 
> Por ejemplo:
> 
> `fix(learn): tests for the do...while loop challenge`

Whenever you open a Pull Request(PR), you can use the below to determine the type, scope (optional), and description.

**Type:**

| Tipo  | Cuándo seleccionar                                                                         |
|:----- |:------------------------------------------------------------------------------------------ |
| fix   | Funcionalidades actualizadas o mejoradas, pruebas, redacción de la lección, etc.           |
| feat  | Sólo si está añadiendo nuevas funcionalidades, pruebas, etc.                               |
| chore | Cambios que no están relacionados con el código, las pruebas o la redacción de la lección. |
| docs  | Cambios al directorio `/docs` o a las pautas de contribución, etc.                         |

**Scope:**

You can select a scope from [this list of labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Description:**

Keep it short (less than 30 characters) and simple; you can add more information in the PR description box and comments.

Some examples of good PR titles would be:

- `fix(a11y): contraste mejorado en la barra de búsqueda`
- `feat: se agregan más test a los retos de HTML y CSS`
- `fix(api,client): evitar errores CORS en el envío de formularios`
- `docs(i18n): se arreglan los enlaces para que sean relativos en lugar de absolutos`

## Proponer una Pull Request

1. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

   <details>
   <summary>See screenshot</summary>

   ![Image - Compare & pull request prompt on GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

   </details>

2. By default, all pull requests should be against the freeCodeCamp main repo, `main` branch.

   Make sure that your Base Fork is set to freeCodeCamp/freeCodeCamp when raising a Pull Request.

   <details>
   <summary>See screenshot</summary>

   ![Image - Comparing forks when making a pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

   </details>

3. Submit the pull request from your branch to freeCodeCamp's `main` branch.

4. Include a more detailed summary of the changes you made and how your changes are helpful in the body of your PR.

   - Se le presentará una plantilla de pull request. Esta es una lista de verificación que debería haber seguido antes de abrir la solicitud de pull request.

   - Rellene los detalles como considere oportuno. Esta información será revisada y los revisores decidirán si su pull request es o no aceptada.

   - Si el PR está pensado para abordar un problema existente de GitHub entonces, al final de el cuerpo de la descripción de su PR, use la palabra clave _Cierra_ con el número de incidencia para [cerrar automáticamente ese problema si se acepta y fusionan las relaciones públicas](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Ejemplo: `Cerrar #123` cerrará el problema 123

5. Indicate if you have tested on a local copy of the site or not.

   - Esto es muy importante cuando se hagan cambios que no sean solo ediciones del contenido de texto como documentación o una descripción de un desafío. Ejemplos de los cambios que necesitan pruebas en el entorno local incluyen JavaScript, CSS o HTML que podrían cambiar la funcionalidad o el diseño de una página.

   - Si tu PR afecta el comportamiento de una página, debe ir acompañada de la correspondiente [pruebas de integración de Cypress](how-to-add-cypress-tests.md).

## Comentarios sobre pull requests

> :tada: Enhorabuena por hacer una PR y muchas gracias por tomarse el tiempo para contribuir.

Our moderators will now take a look and leave you feedback. Please be patient with the fellow moderators and respect their time. All pull requests are reviewed in due course.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).

> [!TIP] Si vas a contribuir con más PRs, te recomendamos que leas las directrices ["haciendo cambios y sincronizando"](how-to-setup-freecodecamp-locally.md#making-changes-locally) para evitar la necesidad de borrar tu bifurcación.

## Conflicto en un pull request

Conflicts can arise because many contributors work on the repository, and changes can break your PR which is pending a review and merge.

More often than not you may not require a rebase, because we squash all commits, however, if a rebase is requested, here is what you should do.

### Para arreglos de errores y características habituales

When you are working on regular bugs and features on our development branch `main`, you are able to do a simple rebase:

1. Rebase your local copy:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Resolve any conflicts and add / edit commits

   ```console
   # Either
   git add .
   git commit -m "chore: resolve conflicts"

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. Push back your changes to the PR

   ```console
   git push --force origin <pr-branch>
   ```

### Para los próximos planes de estudios y características

When you are working on features for our upcoming curriculum `next-*` branches, you have to do a cherry pick:

1. Make sure your upstream comes in sync with your local:

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Take backup

   a. Either delete your local branch after taking a backup (if you still have it locally):

   ```console
   git checkout <pr-branch-name>

   # example:
   # git checkout feat/add-numpy-video-question

   git checkout -b <backup-branch-name>

   # example:
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-name>
   ```

   b. Or just a backup of your pr branch (if you do not have it locally):

   ```console
   git checkout -b <backup-branch-name> origin/<pr-branch-name>

   # example:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
   ```

3. Start off with a clean slate:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. Resolve any conflicts, cleanup, install dependencies and run tests

   ```console
   pnpm run clean

   pnpm install
   FCC_SUPERBLOCK='<superblock-name>' pnpm run test:curriculum 

   # example:

   # FCC_SUPERBLOCK='python-for-everybody' pnpm run test:curriculum

   ```

5. If everything looks good push back to the PR

   ```console
   git push --force origin <pr-branch-name>
   ```
