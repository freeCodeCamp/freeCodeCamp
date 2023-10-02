Sigue estas recomendaciones para poder contribuir a la base del código. Es recomendable que lo hagas si quieres contribuir de forma regular.

Ignorar estos pasos puede empobrecer tu copia lo que hara que el proceso de contribución, revisión y mantenimiento sea dificultoso.

## Contribuir a la base del código

Ya podes hacer modificaciones a los archivos y confimar estos cambios a tu bifurcación, la cual puedes realizar leyendo el tutorial [how to set up freeCodeCamp](how-to-setup-freecodecamp-locally.md).

Sigue estos pasos:

1. 1. Utiliza el siguiente comando para confirmar que estes en la rama `main`:

   ```console
   git status
   ```

   el comando debería devolverte el siguiente resultado:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   Si obtuviste un resultado distinto, no estás en la rama main o tu directorio de trabajo no está limpio. Resolvé cualquier confirmación o archivo pendiente y cambia a ` main `:

   ```console
   git checkout main
   ```

2. Copia las ultimas modificaciones de la rama `main`  del upstream de freeCodeCamp a la rama `main ` de tu bifurcación:

   > [!WARNING] Si tenes alguna pull request pendiente que hiciste desde la rama `main` de tu bifurcación, cuando realices este paso se perderán.
   > 
   > Siempre debes asegurarte que tu pull request haya sido fusionada por un moderador antes de realizar este paso. Para evitar esta situación, **siempre** deberías trabajar en una rama distinta a la `main`.

   Este paso ** obtendrá los cambios más recientes** del repositorio principal de freeCodeCamp.

   Actualizar tu copia del repositorio principal de freeCodeCamp:

   ```console
   git fetch upstream
   ```

   Formatea tu rama main con la rama main de freeCodeCamp:

   ```console
   git reset --hard upstream/main
   ```

   Hace push de tu rama main a tu bifurcación original para limpiar tu historial en GitHub:

   ```console
   git push origin main --force
   ```

   Podes validar que tu main actual concuerda con el upstream/main a través del comando diff:

   ```console
   git diff upstream/main
   ```

   El resultado debería ser que el directorio de trabajo está limpio. Este proceso es importante porque va a estar constantemente combinando tu rama con `upstream/main` para evitar conflictos a futuro.

3. Crea una nueva rama:

   Trabajar en una rama separada para cada incidente ayuda a que tu copia del trabajo se muestre ordenada. Nunca deberías trabajar en `main`. Esto hará que tu copia de freeCodeCamp quede desordenada y podrá ser necesario que tengas que empezar de nuevo con una copia nueva o bifurcación.

   Verificá que estás en `main` siguiendo los pasos ya explicados y empezá desde ahí:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   El nombre de tu rama debería comenzar con `fix/`, `feat/`, `docs/`, etc. Evita usar números de incidentes en las ramas. Deberían ser cortos, significativos y únicos.

   Algunos ejemplos de buenos nombres para ramas son:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edita la páginas y trabaja en el código en tu editor de texto favorito.

5. Una vez que estes conforme con los cambios realizados,  de manera opcional, deberías ejectuar freeCodeCamp para previsualizar los cambios.

6. Asegurate de corregir cualquier error que pueda aparecer y comprabar el formato de tus cambios.

7. Comprobá y confirmá los archivos que estás actualizando:

   ```console
   git status
   ```

   Este comando debería mostrar una lista de los archivos `unstaged` que editaste.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Organizar los cambios y hacer un commit:

   En este paso, sólo deberías marcar los archivos que has editado o añadido tu mismo. Puede realizar un reseteo y resolver archivos que no tenías intención de cambiar si es necesario.

   ```console
   git add path/to/my/changed/file.ext
   ```

   O puedes añadir todos los archivos que no estén `unstaged` al área de staging:

   ```console
   git add .
   ```

   Sólo los archivos que fueron movidos al área de staging serán añadidos cuando hagas un commit.

   ```console
   git status
   ```

   Resultado:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Ahora, puedes confirmar tus cambios con un mensaje corto así:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Algunos ejemplos:

   ```md
   fix: add test for JavaScript - for loop step
   feat: add link for article for alexa skills
   ```

   Escribe un mensaje commit convencional. This is a good practice as a developer, and you will be following standard practices.

   Algunos ejemplos de mensajes de commits convencionales son:

   ```md
   fix: improve HTML step
   fix: fix build scripts for Travis-CI
   feat: add link to JavaScript hoisting article
   docs: update contributing guidelines
   ```

   Manténlos cortos, no más de 50 caracteres. Siempre puedes añadir información adicional en la descripción del mensaje del commit.

   Esto no toma más tiempo que un mensaje no convencional como 'actualizar archivo' o 'añadir index.md'

   Puedes aprender más sobre por qué deberías usar commits convencionales [aquí](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Si te das cuenta de que necesitas editar un archivo o actualizar el mensaje de confirmación después de hacer un commit puedes hacerlo después de editar los archivos con:

   ```console
   git commit --amend
   ```

   Esto abrirá un editor de texto predeterminado como `nano` o `vi` donde puedes editar el título del mensaje de confirmación y añadir/editar la descripción.

10. A continuación, puedes enviar tus cambios a tu bifurcación:

    ```console
    git push origin branch/name-here
    ```

## Proponer una Pull Request (PR)

Después de que hayas cofirmado tus cambios, consulta aquí sobre [cómo abrir una Pull Request](how-to-open-a-pull-request.md).

## Referencia de comandos rápidos

Una referencia rápida a los comandos que necesitarás cuando trabajes.

| comando                                                           | descripción                                                                                                        |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `pnpm test`                                                       | Ejecuta todas las pruebas JS en el sistema, incluidas las pruebas de cliente, servidor, lint y pruebas de desafío. |
| `pnpm run test-client`                                            | Ejecuta el conjunto de pruebas del cliente.                                                                        |
| `pnpm run test-client -u`                                         | Run the client test suite, updating the Jest snapshots that are out of sync.                                       |
| `pnpm run test:curriculum`                                        | Ejecuta el conjunto de pruebas del currículo.                                                                      |
| `FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum`       | Evalúa un bloque específico.                                                                                       |
| `FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum` | Evalúa un SuperBlock específico.                                                                                   |
| `pnpm run test-curriculum-full-output`                            | Ejecuta el conjunto de pruebas del currículo, sin tener que salir después del primer error                         |
| `pnpm run test-server`                                            | Ejecute la suite de pruebas del servidor.                                                                          |
| `pnpm run e2e`                                                    | Ejecuta los tests end to end de Cypress.                                                                           |
| `pnpm run clean`                                                  | Desinstala todas las dependencias y limpia las cachés.                                                             |
| `pnpm run storybook`                                              | Inicia Storybook para el desarrollo de la biblioteca de componentes.                                               |
