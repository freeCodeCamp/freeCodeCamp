Esta página descreve como contribuir para os tutoriais e projetos do freeCodeCamp que são concluídos usando a extensão CodeRoad do VS Code.

## Como funcionam os tutoriais

Os tutoriais do freeCodeCamp que usam o CodeRoad têm seu próprio repositório na organização do GitHub do freeCodeCamp. Todos eles começam com `learn-`. Por exemplo, `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`.

Cada repositório de tutorial tem um branch `main` e um branch de "versão", como `v1.0.0`, por exemplo.

Os dois arquivos principais do branch `main` são `TUTORIAL.md` e `coderoad.yaml`. `TUTORIAL.md` contém todas as instruções, dicas, títulos e outros detalhes do tutorial. `coderoad.yaml` contém as instruções para o CodeRoad, como os comandos a serem executados e quando fazê-lo, que arquivos devem ser observados para ver se há mudanças e qual branch de versão deve ser usado para as etapas.

O branch de "versão" contém os commits que serão carregados em cada etapa do tutorial. As mensagens de commit desse branch precisam ser específicas. O primeiro commit precisa de `INIT` em sua mensagem e contém todos os arquivos a serem carregados antes da primeira lição.

Mensagens de commits posteriores devem corresponder ao número da etapa em `TUTORIAL.md` do branch `main`. Por exemplo, o commit com a mensagem `10.1` será carregado quando um usuário passar para a etapa `10.1`.

Para fazer mudanças nos commits de um branch de versão, você precisa fazer o rebase e editar os commits que deseja alterar. Isso reescreverá o histórico do Git, por isso não podemos aceitar PRs (pull requests) para esses tipos de branch. Assim que um branch de versão vai para o repositório do freeCodeCamp, ele jamais deve ser alterado.

> [!WARNING]
> 
> Nunca faça ou envie mudanças para um branch de versão que estiver em um dos repositórios do freeCodeCamp. Sempre crie um novo.

## Como contribuir

### Pré-requisitos

Instale as [ferramentas da CLI do CodeRoad](https://www.npmjs.com/package/@coderoad/cli) com `npm install -g @coderoad/cli`.

Houve alguns problemas com a última versão. Se `coderoad --version` não funcionar após a instalação, faça um downgrade para a versão `0.7.0` com `npm install -g @coderoad/cli@0.7.0`.

### Trabalhando no branch `main`

Este conjunto de instruções é para PRs (pull requests) que façam apenas pequenas mudanças no branch `main` para **lições já existentes**. Isso consiste basicamente em erros de digitação, gramática, dicas e mudanças ou reparos nas instruções do arquivo `TUTORIAL.md`.

Para todo o resto, incluindo adicionar e excluir lições, siga as [instruções de Trabalhando em um branch de versão](#working-on-version-branch). Você não precisará criar um novo branch de versão para isso. Pode criar um PR seguindo as instruções abaixo.

> [!NOTE]
> 
> Essas mudanças usarão o branch de versão existente. Se elas forem substanciais, aproveite para adicioná-las ao `CHANGELOG.md`. Na maioria das vezes, uma boa mensagem de commit deverá ser o suficiente.

Você nunca precisará modificar o arquivo `tutorial.json` diretamente. Ele será criado pelas ferramentas da CLI.

Se estiver fazendo somente mudanças pequenas, como corrigir um erro de digitação ou gramatical, não é necessário testar suas mudanças.

Siga essas instruções para fazer um PR, tendo em conta que as instruções geralmente usam as lições ao redor delas para obter contexto:

- Crie uma cópia do branch de versão mais recente com `git branch vX.X.X upstream/vX.X.X`. Não é necessário fazer check out nesse branch. Ele só precisa existir.
- Crie um novo branch a partir do `main` e faça check out nele.
- Faça e **dê um commit** em suas mudanças. Lembrete: você não precisa fazer alterações no arquivo `tutorial.json`. Provavelmente, você só precisará modificar o `TUTORIAL.md`.
- Execute `coderoad build` para recriar o arquivo `tutorial.json`.
- Faça o commit das mudanças, com `update json` como mensagem.
- Faça um pull request.

### Testando as mudanças no branch `main`

If you want to test your changes to `main` after using the above instructions, follow these instructions:

- Follow the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to run a container
- Start the tutorial using the `tutorial.json` file on the new branch

### Reviewing PR's to `main`

If reviewing a PR that only changes `main` with instructional or grammar issues as described above, the changes in `TUTORIAL.md` should match the changes in `tutorial.json`.

The `tutorial.json` file should not have changes to commit hashes, or step/level ids. Startup or level commands or file watchers likely should not be changed either. There are exceptions if there's an issue with a step, but they should be treated with more caution.

Also, keep in mind that instructions usually use the lessons around them for context, so make sure they make sense.

### Working on version branch

> [!WARNING]
> 
> Reminder: Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

There's no easy way to see exactly what changed between version branches since the Git history will be rewritten. Accepting new version branches to use will need to be done with careful consideration and testing.

These instructions are for changing anything on a "version" branch, such as tests, test text, reset files, adding and deleting steps, among other things.

Follow these instructions to create a new version:

- Checkout the **latest** version branch with `git checkout -b vX.X.X upstream/vX.X.X`
- Create a new branch off of that, incrementing the version, with `git checkout -b vX.X.Y`
- Make your changes to the version branch. See more info in the [CodeRoad Documentation](https://coderoad.github.io/docs/edit-tutorial) for how to work with tutorials
- Push the new branch to your fork with `git push -u origin vX.X.Y`
- Checkout the `main` branch
- Create a new branch off `main`. e.g. `feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` to your fork of the repo. This is so you and reviewers can test it before pushing it to the freeCodeCamp repo. Change the version to the new branch in the two spots of that file. Add your changes for the new version to `CHANGELOG.md`. Make any other changes you need.
- Commit your changes with the message `feat: release version X.X.Y - <optional description>`
- Run `coderoad build` to create a new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork
- Test your changes following the [testing instructions below](#testing-changes-to-a-version-branch). Make any additional changes and commit them as you just did, or, if you are satisfied, follow the rest of the instructions
- Make a PR to `main` using your new `feat/version-X.X.Y` branch. Give it a title of `version X.X.Y ready for review`. This will not be merged, it is just to let reviewers know that there is a new version ready
- Leave it here for reviewers

### Testing changes to a version branch

- Follow the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to run a container
- Start the tutorial using the `tutorial.json` file on whatever fork the changes are on. Make sure to use the file on the `feat: version-X.X.Y` branch and not the `main` branch

### Pushing a new version

Before pushing a new version, view the new `feat/version-vX.X.Y` (will be merged to `main`) branch on the user's fork. Make sure there are additions to the `CHANGELOG.md` file that include the new changes, and the version in the two spots of `coderoad.yaml` matches the new version branch.

If you have write access to the freeCodeCamp repo, have verified the `CHANGELOG` and `coderoad.yaml` files, have tested the changes using the instructions above, and want to push a new version of a tutorial:

> [!WARNING]
> 
> Reminder: Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

- If you don't have a remote to where the new changes exist, create a remote to the user's fork with `git remote add <users_fork>`
- Delete any **local** branches that share a name with the new branches. Likely named either `vX.X.Y` or `feat/version-X.X.Y`
- Checkout the new version branch with `git checkout -b vX.X.Y <remote>/vX.X.Y`
- Push the new version branch to the freeCodeCamp repo with `git push -u upstream/vX.X.Y`. You need to push the new branch before you update `main` with the new `tutorial.json` file
- Checkout the users branch that will be merged into `main` with `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` back to the freeCodeCamp repo
- Add and commit the changes
- Run `coderoad build` to create the new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork with `git push -u origin/feat/version-X.X.Y`
- Make a PR to `main` on the freeCodeCamp repo
- If you are satisfied, merge it or leave it and ask for a review from someone
- After the PR is merged, open the tutorial by following the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to make sure it's loading properly, and that you can get through a few steps
- Finally, if any PRs for this version exists, close them

### How to revert to a previous version

- Create a new branch off the latest `main` with `git checkout -b revert/to-version-X.X.X`
- Revert all commits on this branch up to and including the commit of the version after the one you want to revert to. For example, you may have commits that look like this:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

If you want to revert to v1.0.0, revert all the commits from `release: version 1.0.1` and after

- Create a PR. Give it a title of `revert: to version X.X.X`
