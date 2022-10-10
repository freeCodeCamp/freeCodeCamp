# Como abrir um Pull Request (PR)

Um pull request (PR) permite que você envie alterações do seu fork do GitHub para o repositório principal do freeCodeCamp.org. Depois de terminar de fazer alterações no código, você pode seguir essas diretrizes para abrir um PR.

We expect our contributors to be aware of the process specific to this project. Following the guidelines religiously earns you the respect of fellow maintainers and saves everyone time.

Some examples of this are:

1. Do not edit files directly through GitHub – while you can, it's not a good idea.
2. Make sure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously.
3. Use the correct way to link issues in the description of the PR by updating the `XXXXXX`. Do not just add issue numbers everywhere and anywhere you feel like.
4. Do not "@mention" or request someone for reviews too many times.

   We understand you are excited about contributing. As much as a maintainer will love to get back to you, they are busy people looking after hundreds of requests just like yours. Be patient, someone will get to you sooner or later.

5. Do not work directly off your `main` branch - create a new branch for the changes you are working on.

> [!NOTE] Your PR should be targeting changes to the English curriculum only. Read [this guide](index.md#translations) instead for contributing to translations.

## Prepare um bom título para o PR

We recommend using [conventional title and messages](https://www.conventionalcommits.org/) for commits and pull request. The convention has the following format:

> `<type>([escopo(s) opcional(is)]): <description>`
> 
> Por exemplo:
> 
> `fix(learn): testes para o desafio de ciclo do...while`

Whenever you open a Pull Request(PR), you can use the below to determine the type, scope (optional), and description.

**Type:**

| Tipo  | Quando selecionar                                                                      |
|:----- |:-------------------------------------------------------------------------------------- |
| fix   | Funcionalidade mudada ou atualizada/melhorada, testes, a explicação de uma lição, etc. |
| feat  | Somente se você estiver adicionando novas funcionalidades, testes, etc.                |
| chore | Mudanças não relacionadas ao código, testes ou explicação de uma lição.                |
| docs  | Mudanças no diretório `/docs` ou nas diretrizes de contribuição, etc.                  |

**Scope:**

You can select a scope from [this list of labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Description:**

Keep it short (less than 30 characters) and simple; you can add more information in the PR description box and comments.

Some examples of good PR titles would be:

- `fix(a11y): contraste melhorado da barra de pesquisa`
- `feat: adicionar mais testes aos desafios de HTML e CSS`
- `fix(api,cliente): prevenir erros CORS no envio do formulário`
- `docs(i18n): correção dos links para relativos em vez de absolutos`

## Propondo um Pull Request

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

   - Será apresentado um modelo de pull request. É uma checklist que você deve seguir antes de abrir o pull request.

   - Preencha os detalhes como quiser. Essas informações serão revisadas e os revisores decidirão se seu pull request será aceito ou não.

   - Se o PR tem como objetivo resolver uma issue GitHub existente, então, no final do corpo da descrição de seu PR, use a palavra-chave _Closes_ com o número da issue para [automaticamente fechá-la, se o PR for aceito e dado merge](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Exemplo: `Closes #123` fechará a issue 123

5. Indicate if you have tested on a local copy of the site or not.

   - Isso é muito importante quando se está fazendo mudanças que não são apenas edições no conteúdo do texto como a documentação ou descrição de um desafio. Exemplos de mudanças que precisam ser testadas localmente incluem JavaScript, CSS ou HTML que podem mudar a funcionalidade ou aparência de uma página.

   - Se seu PR afeta o comportamento de uma página ele deve estar acompanhado pelo correspondente [teste de integração Cypress](how-to-add-cypress-tests.md).

## Comentários nos pull requests

> :tada: Parabéns por fazer um PR e muito obrigado(a) por contribuir.

Our moderators will now take a look and leave you feedback. Please be patient with the fellow moderators and respect their time. All pull requests are reviewed in due course.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).

> [!TIP] Se você vai contribuir com mais pull requests, recomendamos ler as diretrizes sobre [fazer mudanças e sincronizá-las](how-to-setup-freecodecamp-locally.md#making-changes-locally) para evitar o apagamento de seu fork.

## Conflitos em um pull request

Conflicts can arise because many contributors work on the repository, and changes can break your PR which is pending a review and merge.

More often than not you may not require a rebase, because we squash all commits, however, if a rebase is requested, here is what you should do.

### Para funcionalidades e correções de erros comuns

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

### Para o próximo currículo e próximas funcionalidades

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

4. Resolve any conflicts, and cleanup, install run tests

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # example:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

5. If everything looks good push back to the PR

   ```console
   git push --force origin <pr-branch-name>
   ```
