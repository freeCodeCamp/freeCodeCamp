# Wie man einen Pull-Request (PR) öffnet

Ein Pull-Request (PR) ermöglicht es dir, Änderungen von deinem Fork auf GitHub an FreeCodeCamp.orgs Hauptrepository zu senden. Wenn du mit den Änderungen am Code fertig bist, kannst du diese Richtlinien befolgen, um einen PR zu eröffnen.

We expect our contributors to be aware of the process specific to this project. Following the guidelines religiously earns you the respect of fellow maintainers and saves everyone time.

Some examples of this are:

1. Do not edit files directly through GitHub – while you can, it's not a good idea.
2. Make sure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously.
3. Use the correct way to link issues in the description of the PR by updating the `XXXXXX`. Do not just add issue numbers everywhere and anywhere you feel like.
4. Keep mentions and review requests to a minimum. We understand you are excited about contributing, and our maintainers will get back to you as soon as they get a chance.
5. Do not work directly off your `main` branch - create a new branch for the changes you are working on.

> [!NOTE] Your PR should be targeting changes to the English curriculum only. Read [this guide](index.md#translations) instead for contributing to translations.

## Bereite einen guten PR-Titel vor

We recommend using [conventional title and messages](https://www.conventionalcommits.org/) for commits and pull request. The convention has the following format:

> `<type>([optional scope(s)]): <description>`
> 
> Zum Beispiel:
> 
> `fix(learn): tests for the do...while loop challenge`

Whenever you open a Pull Request(PR), you can use the below to determine the type, scope (optional), and description.

**Type:**

| Typ   | Wann wählen                                                                                      |
|:----- |:------------------------------------------------------------------------------------------------ |
| fix   | Geänderte oder aktualisierte/verbesserte Funktionalität, Tests, der Wortlaut einer Lektion, usw. |
| feat  | Nur wenn du neue Funktionen, Tests usw. hinzufügst.                                              |
| chore | Änderungen, die sich nicht auf den Code, die Tests oder den Wortlaut einer Lektion beziehen.     |
| docs  | Änderungen im Verzeichnis `/docs` oder in den Mitwirkungsrichtlinien, etc.                       |

**Scope:**

You can select a scope from [this list of labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Description:**

Keep it short (less than 30 characters) and simple; you can add more information in the PR description box and comments.

Some examples of good PR titles would be:

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): fix links to be relative instead of absolute`

## Einen Pull-Request vorschlagen

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

   - Du erhältst eine Vorlage für einen Pull-Request. Dies ist eine Checkliste, die du befolgen solltest, bevor du den Pull-Request öffnest.

   - Fülle die Details so aus, wie du es für richtig hältst. Diese Informationen werden geprüft und die Prüfer entscheiden, ob dein Pull-Request angenommen wird oder nicht.

   - Wenn der PR ein bestehendes GitHub Problem beheben soll, dann am Ende von der Beschreibungstext deines PR verwenden Sie das Schlüsselwort _Schließt_ mit der Ticketnummer zu [automatisch schließen, wenn der PR akzeptiert und zusammengeführt wird](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Beispiel: `Closes #123` wird Issue 123 schließen

5. Indicate if you have tested on a local copy of the site or not.

   - Das ist sehr wichtig, wenn du Änderungen vornimmst, die nicht nur Textinhalte wie die Dokumentation oder eine Aufgabenbeschreibung betreffen. Beispiele für Änderungen, die lokal getestet werden müssen, sind JavaScript, CSS oder HTML, die die Funktionalität oder das Layout einer Seite verändern könnten.

   - Wenn dein PR das Verhalten einer Seite beeinflusst, sollte er von entsprechenden [Cypress Integrationstests](how-to-add-cypress-tests.md) begleitet werden.

## Feedback zu Pull-Requests

> :tada: für die Erstellung eines PR und vielen Dank, dass du dir die Zeit genommen haben, einen Beitrag zu leisten.

Our moderators will now take a look and leave you feedback. Please be patient with the fellow moderators and respect their time. All pull requests are reviewed in due course.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).

> [!TIP] Wenn du mehr Pull-Requests beisteuern willst, empfehlen wir dir, die [Richtlinien für Änderungen und Synchronisierung](how-to-setup-freecodecamp-locally.md#making-changes-locally) zu lesen, damit du deinen Fork nicht löschen musst.

## Konflikte bei Pull-Requests

Conflicts can arise because many contributors work on the repository, and changes can break your PR which is pending a review and merge.

More often than not you may not require a rebase, because we squash all commits, however, if a rebase is requested, here is what you should do.

### Für die üblichen Fehlerbehebungen und Funktionen

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

### Für anstehende Studienpläne und Features

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
