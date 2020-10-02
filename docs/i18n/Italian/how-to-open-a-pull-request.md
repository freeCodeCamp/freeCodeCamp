# Come aprire una richiesta Pull (PR)

Una pull request consente di inviare modifiche dal tuo fork su GitHub al repository principale di freeCodeCamp.org. Una volta che hai fatto delle modifiche al codice o sfide di codifica dovresti seguire queste linee guida per inviare una PR.

## Preparare un buon titolo PR

Si consiglia di utilizzare [titolo convenzionale e messaggi](https://www.conventionalcommits.org/) per i commit e pull request. La convenzione ha il seguente formato:

> `<type>([ambito facoltativo(i)]): <description>`
> 
> Per esempio:
> 
> `fix(learn): test per il do...while loop challenge`

Quando si apre una Pull Request(PR), è possibile utilizzare il sottostante per determinare il tipo, l'ambito (opzionale) e la descrizione.

**Tipo:**

| Tipo  | Quando selezionare                                                                   |
|:----- |:------------------------------------------------------------------------------------ |
| fix   | Funzionalità modificata o aggiornata/migliorata, test, verbiage di una lezione, ecc. |
| feat  | Solo se si aggiungono nuove funzionalità, test, ecc.                                 |
| chore | Modifiche che non sono correlate a codice, test o verbiage di una lezione.           |
| docs  | Modifiche alla directory `/docs` o alle linee guida contributive, ecc.               |

**Ampiezza:**

È possibile selezionare un ambito da [questo elenco di etichette](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descrizione:**

Mantenere breve (meno di 30 caratteri) e semplice, è possibile aggiungere ulteriori informazioni nella casella di descrizione PR e commenti.

Alcuni esempi di buoni titoli PRS sarebbero:

- `fix(a11y): miglioramento del contrasto della barra di ricerca`
- `feat: aggiungi altri test alle sfide html e css`
- `fix(api,client): prevenire gli errori CORS nella presentazione del modulo`
- `docs(i18n): traduzione cinese della configurazione locale`

## Proporre una richiesta Pull

1. Una volta che le modifiche sono state effettuate, ti verrà chiesto di creare una pull request sulla pagina GitHub della tua fork.

   ![Immagine - Confronta il prompt delle richieste di pull su GitHub](./images/github/compare-pull-request-prompt.png)

2. Per impostazione predefinita, tutte le richieste di pull dovrebbero essere contro il ramo principale freeCodeCamp, `master`.

   Assicurati che la tua Forchetta di Base sia impostata su freeCodeCamp/freeCodeCamp durante il sollevamento di una richiesta di estrazione.

   ![Immagine - Confrontare le forcelle quando si effettua una pull request](./images/github/comparing-forks-for-pull-request.png)

3. Invia la richiesta di pull dal tuo ramo al ramo `master` di freeCodeCamp.

4. Nel corpo del vostro PR includere un riepilogo più dettagliato delle modifiche apportate e perché.

   - Sarai presentato con un modello pull request. Questa è una lista di controllo che si sarebbe dovuto seguire prima di aprire la pull request.

   - Compila i dettagli come ritieni più adatti. Queste informazioni saranno esaminate e i revisori decideranno se la tua pull request è accettata.

   - Se la PR ha lo scopo di affrontare un problema GitHub esistente, alla fine del corpo di descrizione della PR, use the keyword _Closes_ with the issue number to [automatically close that issue if the PR is accepted and unged](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Esempio: `Chiude #123` chiuderà il numero 123

5. Indicare se si è testato su una copia locale del sito o no.

   Questo è molto importante quando si apportano modifiche che non sono solo modifiche al contenuto del testo come la documentazione o una descrizione della sfida. Esempi di cambiamenti che necessitano di test locali includono JavaScript, CSS, o HTML che potrebbero cambiare la funzionalità o il layout di una pagina.

## Feedback sulle richieste pull

> Congratulazioni! :tada: per aver fatto una PR e grazie mille per aver impiegato il tempo per contribuire.

I nostri moderatori ora daranno un'occhiata e ti lasceranno un feedback. Si prega di essere pazienti con i colleghi moderatori e rispettare il loro tempo. Tutte le richieste di pull sono riviste a tempo debito.

Se hai bisogno di assistenza per favore discuta nella [chat room dei collaboratori](https://gitter.im/FreeCodeCamp/Contributors), siamo più che felici di aiutarti.

> [!SUGGERIMENTO] Se vuoi contribuire a più richieste di pull, ti consigliamo di leggere le linee guida [di apportare modifiche e sincronizzare](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) per evitare di dover eliminare il fork.

## Conflitti su una pull request

I conflitti possono sorgere perché molti contributori lavorano sul repository e le modifiche possono rompere il PR che è in attesa di una revisione e di una fusione.

Più spesso non si può richiedere un rebase, perché schiacciamo tutti i commit tuttavia se è richiesto un rebase qui è quello che si dovrebbe fare.

### Per le solite correzioni di bug e funzionalità

Quando si sta lavorando su bug regolari e funzionalità sul nostro ramo `master`di sviluppo, si è in grado di fare una semplice base:

1. Ricostruisci la tua copia locale:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream master
   ```

2. Risolvi eventuali conflitti e aggiungi / modifica i commit

   ```console
   # O
   git add .
   git commit -m "chore: risolvere i conflitti"

   # O
   git add .
   git commit --amend --no-edit
   ```

3. Ritorna le modifiche al PR

   ```console
   git push --force origin <pr-branch>
   ```

### Per il prossimo curriculum e caratteristiche

Quando stai lavorando su funzionalità per il nostro prossimo curriculum `prossimo-*` rami, hai fatto una selezione di ciliegie:

1. Assicurati che il tuo upstream sia sincronizzato con il tuo locale:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Prendere backup

   a. Eliminare il ramo locale dopo aver effettuato un backup (se lo hai ancora localmente):

      ```console
      git checkout <pr-branch-name>

      # example:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # example:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. O solo un backup del ramo pr (se non lo hai localmente):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # esempio:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Inizia con una lastra pulita:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Risolvere eventuali conflitti e pulire, installare test di esecuzione

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # example:

   # npm run test:curriculum --superblock=python-for-all

   ```

6. Se tutto sembra una buona spinta indietro alla PR

   ```console
   git push --force origin <pr-branch-name>
   ```
