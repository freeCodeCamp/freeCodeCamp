# Come aprire una Pull Request (PR)

A pull request (PR), enables you to send changes from your fork on GitHub to freeCodeCamp.org's main repository. Una volta che hai fatto delle modifiche al codice, puoi seguire queste linee guida per aprire una PR.

Ci aspettiamo che i nostri contributori siano consapevoli del processo specifico di questo progetto. Following the guidelines carefully earns you the respect of fellow maintainers and saves everyone time.

Alcuni esempi di ciò sono:

1. Non modificare i file direttamente attraverso GitHub – nonostante sia possibile, non è una buona idea.
2. Make sure the PR title follows [our convention](#prepare-a-good-pr-title).
3. Assicurati di seguire la checklist della PR e non solo spuntare le cose; altrimenti, non ti prenderemo sul serio.
4. Usa il modo corretto per linkare le issue nella descrizione della PR aggiornando `XXXXXX`. Non basta aggiungere numeri di issue dappertutto o ovunque ti pare.
5. Non "@menzionare" o richiedere qualcuno per la revisione troppe volte.

   Sappiamo che sei entusiasta di contribuire. Per quanto a un manutentore faccia piacere risponderti, si tratta di una persona impegnata che si occupa di centinaia di richieste proprio come la tua. Sii paziente, qualcuno ti risponderà prima o poi.

6. Non lavorare direttamente sul ramo (branch) `main` - crea un nuovo ramo per le modifiche su cui stai lavorando.

> [!NOTE] La tua PR dovrebbe essere rivolta a modifiche del solo curriculum inglese. Per contribuire alle traduzioni invece, leggi [questa guida](index.md#traduzioni).

## Prepare a Good PR Title

We use [conventional title and messages](https://www.conventionalcommits.org/) for commits and pull requests. La convenzione ha il seguente formato:

> `<tipo>([ambito/i opzionale/i]): <descrizione>`
> 
> Per esempio:
> 
> `fix(learn): tests for the do...while loop challenge`

Whenever you open a Pull Request (PR), you can use the below to determine the type, scope (optional), and description.

**Tipo:**

| Tipo  | Quando selezionare                                                              |
|:----- |:------------------------------------------------------------------------------- |
| fix   | Changed or updated/improved functionality, tests, the wording of a lesson, etc. |
| feat  | Solo se si aggiungono nuove funzionalità, test, ecc.                            |
| chore | Cambiamenti che non sono legati a codice, test, o testo di una lezione.         |
| docs  | Modifiche alla directory `/docs` o alle linee guida per i contributi, ecc.      |

**Ambito:**

Puoi selezionare un ambito da [questo elenco di etichette](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descrizione:**

Mantienila breve (meno di 30 caratteri) e semplice; puoi aggiungere ulteriori informazioni nella casella di descrizione PR e nei commenti.

Alcuni esempi di buoni titoli di PR sono:

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): fix links to be relative instead of absolute`

## Proporre una Pull Request

1. Una volta che le modifiche sono state effettuate, ti verrà chiesto di creare una pull request sulla pagina GitHub del tuo fork.

   <details>
   <summary>Vedi screenshot</summary>

   ![Immagine - Compare & pull request prompt su GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

   </details>

2. Di default, tutte le pull request dovrebbero essere sul repository principale di freeCodeCamp, nel ramo `main`.

   Assicurati che il tuo Base Fork sia impostato su freeCodeCamp/freeCodeCamp quando sollevi una Pull Request.

   <details>
   <summary>Vedi screenshot</summary>

   ![Immagine - Confrontare i fork quando si effettua una pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

   </details>

3. Fai la pull request dal tuo ramo al ramo `main` di freeCodeCamp.

4. Includi un riassunto più dettagliato delle modifiche apportate e di come sono d'aiuto nel corpo della tua PR.

   - Ti sarà presentato un modello di pull request. Questa è una lista di controllo che avresti dovuto seguire prima di aprire la pull request.

   - Compila i dettagli come ritieni opportuno. Ensure that you give the reviewers enough context to review the changes. If the PR makes changes to the UI, be sure to include screenshots of the changes as well. All of this information will be reviewed and the reviewers will decide whether or not your pull request is accepted.

   - Se la PR ha lo scopo di affrontare un'issue GitHub esistente, alla fine del corpo della descrizione della tua PR, usa la parola chiave _Closes_ con il numero dell'issue per [chiudere automaticamente questa issue se la PR è accettata](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Esempio: `Closes #123` chiuderà l'issue 123

5. Indica se hai testato i tuoi cambiamenti su una copia locale del sito oppure no.

   - Questo è molto importante quando si fanno cambiamenti che non sono solo modifiche a contenuto testuale come documentazione o descrizioni di sfide. Examples of changes that need local testing include JavaScript, CSS, or HTML, which could change the functionality or layout of a page.

   - If your PR affects the behavior of a page, it should be accompanied by corresponding [Playwright integration tests](how-to-add-playwright-tests.md).

## Feedback on Pull Requests

> :tada: Congratulazioni per avere creato un PR e grazie mille per aver dedicato il tuo tempo a contribuire.

I nostri moderatori ora daranno un'occhiata e ti lasceranno un feedback. Ti preghiamo di essere paziente con i colleghi moderatori e di rispettare il loro tempo. Tutte le pull request sono riviste a tempo debito.

E come sempre, poni liberamente le tue domande [nella categoria 'Contributors' sul nostro forum](https://forum.freecodecamp.org/c/contributors) o [nella chat room per i contributori](https://discord.gg/PRyKn3Vbay).

> [!TIP] Se vuoi contribuire a più di una PR, ti raccomandiamo di leggere la [guida su fare modifiche e sincronizzare](how-to-setup-freecodecamp-locally.md#making-changes-locally) per evitare di dover cancellare il tuo fork.

## Conflicts on a Pull Request

I conflitti possono sorgere perché molti contributori lavorano sul repository e le modifiche possono interrompere la tua PR in attesa di una revisione e di un merge.

Since we squash all commits, you may not need to do a rebase.  However, if a rebase is requested, check our [For Usual Bug Fixes and Features](#for-usual-bug-fixes-and-features) or [For Upcoming Curriculum and Features](#for-upcoming-curriculum-and-features) guides to learn how to do this process for your corresponding PR.

### For Usual Bug Fixes and Features

Quando stai lavorando su normali bug e funzionalità sul nostro ramo di sviluppo `main`, puoi fare un semplice rebase:

1. Esegui un rebase della tua copia locale:

   ```bash
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Risolvi eventuali conflitti e aggiungi / modifica i commit

   ```bash
   # O
   git add .
   git commit -m "chore: resolve conflicts"

   # O
   git add .
   git commit --amend --no-edit
   ```

3. Fai il push dei tuoi cambiamenti alla PR

   ```bash
   git push --force origin <pr-branch>
   ```

### For Upcoming Curriculum and Features

When you are working on features for our upcoming curriculum `next-*` branches, you have to do a `cherry-pick`:

1. Assicurati che il tuo upstream sia sincronizzato con il tuo repository locale:

   ```bash
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Take a backup

   a. Elimina il ramo locale dopo aver effettuato un backup (se lo hai ancora localmente):

   ```bash
   git checkout <pr-branch-name>

   # esempio:
   # git checkout feat/add-numpy-video-question

   git checkout -b <backup-branch-name>

   # esempio:
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-name>
   ```

   b. Or just a backup of your PR branch (if you do not have it locally):

   ```bash
   git checkout -b <backup-branch-name> origin/<pr-branch-name>

   # esempio:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
   ```

3. Inizia con una slate pulita:

   ```bash
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. Resolve any conflicts, cleanup, and install dependencies and run tests

   ```bash
   pnpm run clean

   pnpm install
   FCC_SUPERBLOCK='<superblock-name>' pnpm run test:curriculum 

   # esempio:

   # FCC_SUPERBLOCK='python-for-everybody' pnpm run test:curriculum

   ```

5. If everything looks good, push back to the PR

   ```bash
   git push --force origin <pr-branch-name>
   ```
