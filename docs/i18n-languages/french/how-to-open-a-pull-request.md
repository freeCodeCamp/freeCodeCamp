# Comment ouvrir une Pull Request

Une pull request vous permet d'envoyer les modifications depuis votre fork sur GitHub vers le dépôt principal de freeCodeCamp.org. Une fois que vous avez terminé de modifier le code ou de relever des défis de codage, vous devez suivre ces directives pour envoyer une pull request.

## Comment bien intituler une Pull Request

Il est recommandé d'utiliser [des titres et des messages conventionnels](https://www.conventionalcommits.org/fr/) pour les commit et les pull requests. La convention a le format suivant :

> `<type>([portées(s) éventuelles]): <description>`
>
> Par exemple:
>
> `fix(learn): tests for the do...while loop challenge`

Lors de l'ouverture d'une demande de merge = Pull Request (PR), vous pouvez utiliser les informations ci-dessous pour déterminer le type, la portée (facultatif) et description.

**Type:**

| Type  | Quand utiliser |
| :---- | :------------------------------------------------------------------------------------------------|
| fix   | Modification ou mise à jour/amélioration des fonctionnalités, des tests, texte d'une leçon, etc. |
| feat  | Seulement si vous ajoutez de nouvelles fonctionnalités, des tests, etc.                          |
| chore | Changements qui ne sont pas liés au code, aux tests ou au texte d'une leçon.                     |
| docs  | Modifications du répertoire `/docs` ou des guides de contribution, etc.                          |

**Portée:**

Vous pouvez choisir une portée (scope) [dans cette liste de libellés](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Description:**

Faites le court (moins de 30 caractères) et simple, vous pouvez ajouter plus d'informations dans l'encart de la description et les commentaires de la PR.

Quelques exemples de bon titres de PRs seraient :

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to html and css challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): Chinese translation of local setup`

## Proposer une Pull Request (PR)

1. Une fois les modifications committées, vous serez invité à créer une Pull Request sur la page GitHub de votre fork.

    ![Image - Compare pull request prompt on GitHub](./images/github/compare-pull-request-prompt.png)

2. Par défaut, toutes les Pull Requests doivent être faites sur le dépôt principal freeCodeCamp, branche `master`.

    Assurez-vous que votre fork de base est configuré sur freeCodeCamp/freeCodeCamp lorsque vous lancez une demande de Pull.

    ![Image - Comparing forks when making a pull request](./images/github/comparing-forks-for-pull-request.png)

3. Soumettez la Pull Request de votre branche vers la branche `master` de freeCodeCamp.

4. Dans le corps de votre PR, veuillez inclure un résumé plus détaillé des changements que vous avez apportés et pourquoi.

    - Un modèle de Pull Request vous sera présenté. Il s'agit d'une liste de contrôle que vous aurez à vérifier avant d'ouvrir la Pull Request.

    - Remplissez les détails qui conveniennent. Ces informations seront revues et les relecteurs décideront si votre Pull Request sera acceptée ou pas.

    - Si la PR est destinée à corriger un bogue ou un problème existant, alors, à la fin de
      la description de votre PR, ajoutez le mot-clé _Closes_ ainsi que le numéro du ticket ouvert pour [fermer automatiquement le ticket existant, si la PR est acceptée et fusionnée (en)](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Exemple: `Closes #123` fermera le ticket 123

5. Indiquez si vous avez testé sur une copie locale du site ou non.

    Ceci est très important lorsque vous apportez des modifications qui ne se limitent pas à éditer le contenu d'un texte comme la documentation ou la description d'un défi. Des exemples de changements nécessitant des tests locaux incluent JavaScript, CSS ou HTML qui pourraient changer la fonctionnalité ou la disposition d'une page.
