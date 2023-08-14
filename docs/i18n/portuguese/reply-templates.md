# Modelos de resposta

Esses são alguns dos modelos de resposta que você talvez use enquanto estiver revisando issues/pull requests.

> Você pode fazer seu próprio modelo com a funcionalidade embutida do GitHub chamada [saved replies](https://github.com/settings/replies/) ou usar as citadas abaixo.

## Obrigado

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

## Obrigado e parabéns

> Para agradecer e encorajar colaboradores de primeira viagem.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

## Erro de compilação

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](how-to-work-on-coding-challenges.md#testing-challenges) for instructions on running the CI build locally. ✅
```

## Sincronização de forks

> Quando um PR não está atualizado com a branch `main`.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
```

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---==crwdHRulesLBB_2_BBsuleRHdwrc==

Feel free to reference the ["Syncing a fork"](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````
## Conflitos ao fazer o merge
> Quando um PR tem conflitos de merge isso precisa ser resolvido.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```

¹ Se é a primeira vez de um colaborador e se ele tem um conflito de merge, os mantenedores resolverão o conflito para ele.

## Duplicado

> Quando um PR é duplo ou repetitivo.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as a duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ["Contributors" category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

## Fechando pull requests inválidos

> Quando um PR é inválido.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> Quando o PR adiciona links para recursos externos.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

## Adicionando comentário sobre erros de iniciante

```markdown
Hello,

Firstly, thank you for submitting this pull request!

As you navigate through the process, we have a PR checklist to ensure consistency and quality in our contributions. We kindly ask that you genuinely follow through with each point. This not only facilitates the review process but also demonstrates a mutual respect for the community's efforts.

If you're unfamiliar with certain aspects, our [contributing guidelines](https://contribute.freecodecamp.org) are a helpful resource to get you up to speed.

<details>
<summary>**Friendly Pointers (click to expand)**</summary>

1. **Editing on GitHub:** While it's possible to edit files directly on GitHub, it's typically better not to. This helps avoid inadvertent mistakes like typos that can disrupt tests.

2. **Linking Issues:** Please ensure you link issues using the designated method. Simply update the `XXXXXX` in the PR description to include the issue number. This keeps our records organized and clear.

3. **Engaging with the Team:** We know you're eager, but kindly keep mentions and review requests limited. Our maintainers are always on the lookout and will attend to PRs in the order they come in.

4. **Branch Management:** It's a good practice not to work directly off your `main` branch. Creating separate branches for different changes allows you to smoothly update your PR even as the main repository progresses.

</details>

Please note, there's no need to close this PR. If you have questions or need guidance refining your contribution, don't hesitate to ask. Our community is here to assist.

Thank you for your enthusiasm in contributing to our project. We eagerly await more contributions from you!

**Happy Contributing!** 🌟
```

## Issue não passou por triagem

> Quando um PR é aberto para uma issue que não passou por triagem e marcada como pronta para contribuição.

```markdown
Hi there, 

Thanks for creating this pull request.

The linked issue has not been triaged yet, and a solution has not been agreed upon. Once the issue is open for contribution, you are welcome to update this pull request to reflect the issue consensus. Until the issue is open for contribution, we will not be able to review your pull request.
```

## Fechando issues inválidas

> Quando uma issue se refere ao código do usuário do freeCodeCamp.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> Quando uma issue é a mesma que uma issue anterior.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> Quando uma issue foi resolvida na fase de preparo.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

## Issues de `first timer only`

> Quando uma issue é considerada eligível pela primeira vez como contribuição ao código.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first-time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read our [guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing; our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```

## Solicitações de atribuição

```md
We typically do not assign issues. Instead, we accept the first pull request that comprehensively solves the issue.

Issues labelled with `help wanted` or `first timers only` are open for contributions.

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/). We prioritize contributors following the instructions in our guide. Join us in [our chat room](https://discord.gg/PRyKn3Vbay) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing - our community will be happy to assist you.
```
