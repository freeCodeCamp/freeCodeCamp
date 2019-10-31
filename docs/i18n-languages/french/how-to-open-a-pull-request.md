<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Comment ouvrir une Pull Request

## Comment bien intituler une Pull Request :

Lors de l'ouverture d'une demande de merge = Pull Request (PR), utilisez le tableau de portée suivant pour décider du titre de votre PR dans le format suivant : `fix/feat/chore/refactor/docs/perf (scope) : Titre de la PR`

Un exemple est `fix(learn): Correction de tests pour le challenge do....while loop`.

| Portée | Documentation |
|---|---|
| `learn`,`curriculum` | Pour les Pull Request qui apportent des changements aux défis du programme d'études. |
| `client` | Pour les Pull Requests effectuant des changements à la logique de la plate-forme client ou à l'interface utilisateur |
| `guide` | Pour les Pull Requests qui apportent des modifications au guide. |
| `docs` | Pour les Pull Requests qui apportent des modifications à la documentation du projet. |

## Proposer une Pull Request (PR)

1. Une fois les modifications validées, vous serez invité à créer une Pull Request sur la page GitHub de votre fork.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. Par défaut, toutes les Pull Requests doivent être faites sur le dépôt principal freeCodeCamp, branche `master`.

    Assurez-vous que votre fork de base est configuré sur freeCodeCamp/freeCodeCamp lorsque vous lancez une demande de Pull.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Soumettez la Pull Request de votre branche vers la branche `master` de freeCodeCamp.

4. Dans le corps de votre PR, veuillez inclure un résumé plus détaillé des changements que vous avez apportés et pourquoi.

    - Un modèle de Pull Request vous sera présenté. Il s'agit d'une liste de contrôle que vous aurez à vérifier avant d'ouvrir la Pull Request.

    - Remplissez les détails comme ils semblent vous convenir. Cette information sera examinée et décidera si votre Pull Request sera acceptée ou non.

    - Si le PR est destiné à corriger un bogue ou un problème existant, alors, à la fin de
      la description de votre PR, ajoutez le mot-clé `closes` et #xxxx (où xxxx est le numéro du ticket ouvert). Example: `closes #1337`. Ceci dit à GitHub de fermer automatiquement le ticket existant, si la PR est acceptée et fusionnée.

5. Indiquez si vous avez testé sur une copie locale du site ou non.

    Ceci est très important lorsque vous apportez des modifications qui ne se limitent pas à éditer le contenu d'un texte, comme le verbiage d'un article du Guide. Des exemples de changements nécessitant des tests locaux incluent JavaScript, CSS ou HTML qui pourraient changer la fonctionnalité ou la mise en page d'une page.
