# Come aprire una Pull Request (PR)

Una pull request (PR) consente di inviare modifiche dal tuo fork su GitHub al repository principale di freeCodeCamp.org. Una volta che hai fatto delle modifiche al codice, puoi seguire queste linee guida per aprire una PR.

Ci aspettiamo che i nostri contributori siano consapevoli del processo specifico di questo progetto. Seguire scrupolosamente le linee guida ti fa guadagnare il rispetto di chi si occupa della manutenzione e fa risparmiare del tempo a tutti.

Alcuni esempi di ciò sono:

1. Non modificare i file direttamente attraverso GitHub – nonostante sia possibile, non è una buona idea.
2. Assicurati di seguire la checklist della PR e non solo spuntare le cose; altrimenti, non ti prenderemo sul serio.
3. Usa il modo corretto per linkare le issue nella descrizione della PR aggiornando `XXXXXX`. Non basta aggiungere numeri di issue dappertutto o ovunque ti pare.
4. Non "@menzionare" o richiedere qualcuno per la revisione troppe volte.

   Sappiamo che sei entusiasta di contribuire. Per quanto a un manutentore faccia piacere risponderti, si tratta di una persona impegnata che si occupa di centinaia di richieste proprio come la tua. Sii paziente, qualcuno ti risponderà prima o poi.

5. Non lavorare direttamente sul ramo (branch) `main` - crea un nuovo ramo per le modifiche su cui stai lavorando.

> [!NOTE] La tua PR dovrebbe essere rivolta a modifiche del solo curriculum inglese. Per contribuire alle traduzioni invece, leggi [questa guida](index.md#traduzioni).

## Preparare un buon titolo PR

Si consiglia di utilizzare [Titolo e messaggi convenzionali](https://www.conventionalcommits.org/) per i commit e le pull request. La convenzione ha il seguente formato:

> `<tipo>([ambito/i opzionale/i]): <descrizione>`
> 
> Per esempio:
> 
> `fix(learn): tests for the do...while loop challenge`

Ogni volta in cui apri una Pull Request (PR), puoi usare la seguente lista per determinare il tipo (type), l'ambito (scope) (opzionale) e la descrizione.

**Tipo:**

| Tipo  | Quando selezionare                                                                     |
|:----- |:-------------------------------------------------------------------------------------- |
| fix   | Cambiamenti o aggiornamenti/miglioramenti a funzioni, test, testo di una lezione, ecc. |
| feat  | Solo se si aggiungono nuove funzionalità, test, ecc.                                   |
| chore | Cambiamenti che non sono legati a codice, test, o testo di una lezione.                |
| docs  | Modifiche alla directory `/docs` o alle linee guida per i contributi, ecc.             |

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

   ![Image - Compare & pull request prompt on GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

   </details>

2. Di default, tutte le pull request dovrebbero essere sul repository principale di freeCodeCamp, nel ramo `main`.

   Assicurati che il tuo Base Fork sia impostato su freeCodeCamp/freeCodeCamp quando sollevi una Pull Request.

   <details>
   <summary>Vedi screenshot</summary>

   ![Image - Comparing forks when making a pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

   </details>

3. Fai la pull request dal tuo ramo al ramo `main` di freeCodeCamp.

4. Includi un riassunto più dettagliato delle modifiche apportate e di come sono d'aiuto nel corpo della tua PR.

   - Ti sarà presentato un modello di pull request. Questa è una lista di controllo che avresti dovuto seguire prima di aprire la pull request.

   - Compila i dettagli come ritieni opportuno. Queste informazioni saranno esaminate e i revisori decideranno se la tua pull request è accettata.

   - Se la PR ha lo scopo di affrontare un'issue GitHub esistente, alla fine del corpo della descrizione della tua PR, usa la parola chiave _Closes_ con il numero dell'issue per [chiudere automaticamente questa issue se la PR è accettata](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Esempio: `Closes #123` chiuderà l'issue 123

5. Indica se hai testato i tuoi cambiamenti su una copia locale del sito oppure no.

   - Questo è molto importante quando si fanno cambiamenti che non sono solo modifiche a contenuto testuale come documentazione o descrizioni di sfide. Esempi di modifiche che hanno bisogno di essere testate localmente includono JavaScript, CSS o HTML che potrebbero cambiare funzionalità o layout di una pagina.

   - Se la tua PR ha effetto sul comportamento di una pagina dovrebbe essere accompagnato da corrispondenti [test di integrazione di Cypress](how-to-add-cypress-tests.md).

## Feedback sulle pull request

> :tada: Congratulazioni per avere creato un PR e grazie mille per aver dedicato il tuo tempo a contribuire.

Our moderators will now take a look and leave you feedback. Please be patient with the fellow moderators and respect their time. All pull requests are reviewed in due course.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).

> [!TIP] Se vuoi contribuire a più di una PR, ti raccomandiamo di leggere la [guida su fare modifiche e sincronizzare](how-to-setup-freecodecamp-locally.md#making-changes-locally) per evitare di dover cancellare il tuo fork.

## Conflitti su una pull request

Conflicts can arise because many contributors work on the repository, and changes can break your PR which is pending a review and merge.

More often than not you may not require a rebase, because we squash all commits, however, if a rebase is requested, here is what you should do.

### Per le solite correzioni di bug e funzionalità

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

### Per il curriculum e le caratteristiche future

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
