Segui queste linee guida per impostare freeCodeCamp localmente nel tuo sistema. Te lo raccomandiamo caldamente se desideri contribuire regolarmente.

Alcuni di questi flussi di lavoro contributivi – come la correzione di bug nel codebase o nel curriculum – hanno bisogno di eseguire freeCodeCamp localmente sul computer.

> [!TIP] Se non sei interessato a configurare freeCodeCamp localmente, considera di utilizzare Gitpod, un ambiente di sviluppo online gratuito.
> 
> [![Apri in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Avvia un ambiente di sviluppo ready-to-code per freeCodeCamp nel tuo browser.)

### Come preparare la macchina locale

Inizia installando i prerequisiti software per il tuo sistema operativo.

Sosteniamo principalmente lo sviluppo su sistemi Linux e basati su Unix. Il nostro staff e i collaboratori della community lavorano regolarmente con il codebase utilizzando strumenti installati su Ubuntu e macOS.

Supportiamo anche Windows 10 via WSL2, che puoi preparare [leggendo questa guida](/how-to-setup-wsl).

Alcuni membri della comunità sviluppano anche su Windows 10 nativamente con Git per Windows (Git Bash) e altri strumenti installati su Windows. Al momento non disponiamo di un supporto ufficiale per una tale configurazione, consigliamo invece di utilizzare WSL2.

#### Prerequisiti:

| Prerequisito                                                                                  | Versione | Note                                                                                         |
| --------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `14.x`   | Usiamo la versione "Active LTS", Vedi [LTS Schedule](https://nodejs.org/en/about/releases/). |
| npm (viene fornito in bundle con node)                                                        | `6.x`    | `npm` non ha una versione LTS, usiamo la versione in bundle con Node.js Active LTS.          |
| [Server Community MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.0.x`  | -                                                                                            |

> [!ATTENTION] Se hai una versione diversa, per favore installa la versione raccomandata. Possiamo supportare solo i problemi di installazione per le versioni consigliate. Vedi [risoluzione dei problemi](#troubleshooting) per i dettagli.

Se Node.js è già installato sulla macchina, esegui i seguenti comandi per convalidare le versioni:

```console
node -v
npm -v
```

> [!TIP] Consigliamo vivamente di aggiornare le ultime versioni stabili del software sopra elencato, note anche come versioni con supporto a lungo termine (LTS).

Una volta che avrai installato i prerequisiti, dovrai preparare il tuo ambiente di sviluppo. Questo è comune a molti flussi di lavoro di sviluppo, e si dovrà fare solo una volta.

##### Segui questi passaggi per preparare il tuo ambiente di sviluppo:

1. Installa [Git](https://git-scm.com/) o il tuo client Git preferito, se non lo hai già. Aggiornamento alla versione più recente; la versione fornita con il tuo sistema operativo potrebbe essere obsoleta.

2. (Facoltativo ma consigliato) [Imposta una chiave SSH](https://help.github.com/articles/generating-an-ssh-key/) per GitHub.

3. Installa un editor di codice a tua scelta.

   Consigliamo vivamente di utilizzare [Visual Studio Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Questi sono editor di codice ottimi, grauiti e open source.

4. Imposta il linting per il tuo editor di codice.

   Dovresti avere [ESLint in esecuzione nel tuo editor](http://eslint.org/docs/user-guide/integrations.html), ed esso metterà in evidenza tutto ciò che non è conforme alla [Guida di stile JavaScript di freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Per favore non ignorare alcun errore di linting. Essi sono destinati ad **aiutarti** e a garantire un codice pulito e semplice.

## Esegui il fork del repository su GitHub

Il [Forking](https://help.github.com/articles/about-forks/) è un passaggio nel quale fai una copia del repository principale di freeCodeCamp (noto anche come _repo_) su GitHub.

Questo è essenziale, in quanto consente di lavorare sulla propria copia di freeCodeCamp su GitHub, o di scaricare (clonare) il tuo repository per lavorare localmente. Più tardi, potrai richiedere che le tue modifiche siano integrate (pull) nel repository principale dal tuo fork tramite una pull request (PR).

> [!TIP] Il repository principale su `https://github.com/freeCodeCamp/freeCodeCamp` è spesso indicato come il repository `upstream`.
> 
> Il tuo fork situato si `https://github.com/YOUR_USER_NAME/freeCodeCamp` è spesso chiamato il repository `origin`. `YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.

**Segui questi passaggi per effettuare il fork del repository `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Vai al repository freeCodeCamp su GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Fai clic sul pulsante "Fork" nell'angolo in alto a destra dell'interfaccia ([Maggiori dettagli qui](https://help.github.com/articles/fork-a-repo/))

3. Dopo che è stato creato un fork del repository, sarai portato alla tua copia del repository di freeCodeCamp su `https://github.com/YOUR_USER_NAME/freeCodeCamp` (`YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.)

<details>
   <summary>
      Come effettuare il fork di freeCodeCamp su GitHub (screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Come fare il fork di freeCodeCamp su GitHub" />
</details>

## Clona il tuo fork da GitHub

La [Clonazione](https://help.github.com/articles/cloning-a-repository/) consiste nello **scaricare** una copia di un repository da una `posizione remota` che è di proprietà tua o di qualcun altro. Nel tuo caso, questa posizione remota è il tuo `fork` del repository di freeCodeCamp che dovrebbe essere disponibile su `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.)

> [!WARNING] Se stai lavorando su una Distro di Linux su WSL2, potresti avere problemi di performace e stabilità eseguendo il progetto in una cartella che è condivisa tra Windows e WSL2 (per esempio `/mnt/c/Users/`). Quindi ti raccomandiamo di clonare il repo in una cartella che è usata principalmente dal Distro di Linux su WSL2 e non condivisa direttamente con Windows (per esempio `~/PROJECTS/`).
> 
> Vedi [questa issue su GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) per ulterioni informazioni su questo problema.

Esegui questi comandi sulla tua macchina locale:

1. Apri un terminale / prompt dei comandi / Shell nella directory dei progetti

   _cioè: `/yourprojectsdirectory/`_

2. Clona il tuo fork di freeCodeCamp, sostituendo `YOUR_USER_NAME` con il tuo nome utente GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Questo scaricherà l'intero repository freeCodeCamp nella directory dei tuoi progetti.

Nota: `--depth=1` crea un clone superficiale del fork, con la sola cronologia dei commit più recente.

## Imposta la sincronizzazione dal genitore

Ora che hai scaricato una copia del fork, dovrai configurare un remote `upstream` che punti al repository genitore.

[Come accennato poc'anzi](#fork-the-repository-on-github), il repository principale è chiamato repository `upstream`. Il tuo fork è chiamato repository `origin`.

Hai bisogno di un riferimento dal tuo clone locale al repository `upstream` oltre che al repository `origin`. In questo modo potrai sincronizzare le modifiche dal repository principale senza bisogno di fare ripetuti fork e clonazioni.

1. Cambia la directory nella nuova directory freeCodeCamp:

   ```console
   cd freeCodeCamp
   ```

2. Aggiungi un riferimento remoto al repository freeCodeCamp principale:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Assicurati che la configurazione sia corretta:

   ```console
   git remote -v
   ```

   L'output dovrebbe apparire simile al seguente (sostituendo `YOUR_USER_NAME` con il tuo username di GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Eseguire freeCodeCamp localmente

Ora che disponi di una copia locale di freeCodeCamp, potrai seguire queste istruzioni per eseguirlo localmente. Questo ti permetterà di:

- Vedere un'anteprima delle modifiche come apparirebbero sulla piattaforma di apprendimento.
- Lavorare su problemi e miglioramenti relativi all'interfaccia utente.
- Fare il debug e la correzione dei problemi con i server delle applicazioni e le app client.

Se incontri un problema, fai prima una ricerca del problema sul web per vedere se ha già una risposta. Se non riesce a trovare una soluzione, ti preghiamo di fare una ricerca nelle nostra pagina delle [Issues su GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues) per trovare una soluzione o segnalare il problema se non è ancora stato fatto.

E come sempre, fai liberamente le tue domande nella [categoria 'Contributors' sul forum](https://forum.freecodecamp.org/c/contributors) o [sul server di chat](https://chat.freecodecamp.org/home).

> [!TIP] Puoi saltare l'esecuzione di freeCodeCamp localmente se stai semplicemente modificando i file. Per esempio, facendo un `rebase`, o risolvendo dei conflitti di `merge`.
> 
> Puoi sempre tornare in seguito a questa parte della guida. Dovresti saltare questi step **solo se** non hai bisogno di eseguire le app sul tuo computer.
> 
> [Salta alle istruzioni per fare modifiche](#making-changes-locally).

### Configurare le dipendenze

#### Passo 1: Impostare il file delle variabili d'ambiente

Le chiavi API predefinite e le variabili d'ambiente sono memorizzate nel file `sample.env`. Questo file deve essere copiato in un nuovo file chiamato `.env` a cui si accede dinamicamente durante la fase di installazione.

```console
# Creare una copia del "sample.env" e denominarlo ".env".
# Popolarlo con le necessarie chiavi API e secrets:

# macOS / Linux
cp esempio. nv .env

# Windows
copy sample.env .env
```

_Non_ è necessario cambiare le chiavi nel file `.env` per eseguire l'applicazione localmente. Puoi lasciare i valori predefiniti copiati da `sample.env` così come sono.

> [!TIP] Tieni a mente che se vuoi usare servizi come Auth0 o Algolia, dovrai ottenere delle API key per quei servizi per conto tuo e modificare il file `.env` di conseguenza.

#### Passo 2: Installa le dipendenze

Questo passaggio installerà le dipendenze richieste per l'esecuzione dell'applicazione:

```console
npm ci
```

#### Passo 3: Avvia MongoDB e fai il seed del database

Prima di poter eseguire l'applicazione localmente, è necessario avviare il servizio MongoDB.

> [!NOTE] A meno che tu non abbia MongoDB in esecuzione in un setup differente dal default, l'URL salvato come `MONGOHQ_URL` nel file `.env` dovrebbe andare bene. Se usi una configurazione personalizzata, modifica il valore come necessario.

Avvia il server MongoDB in un terminale separato:

- Su macOS & Ubuntu:

  ```console
  mongod
  ```

- Su Windows, è necessario specificare il percorso completo dell'eseguibile `mongod`

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Assicurati di sostituire `3.6` con la versione che hai installato

> [!TIP] Puoi evitare di dover avviare MongoDB ogni volta se lo installi come servizio in background. Puoi [saperne di più nella loro documentazione per il tuo sistema operativo](https://docs.mongodb.com/manual/administration/install-community/)

Successivamente, facciamo il seed del database. In questo passaggio, eseguiamo il comando sottostante che popola il server MongoDB con alcuni set di dati iniziali richiesti dai servizi. Tra questi figurano alcuni schemi, tra le altre cose.

```console
npm run seed
```

#### Passo 4: Avviare l'applicazione client freeCodeCamp e il server API

Ora è possibile avviare il server API e le applicazioni client.

```console
npm run develop
```

Questo singolo comando attiverà tutti i servizi, compreso il server API e le applicazioni client disponibili su cui lavorare.

> [!NOTE] Una volta pronto, apri un browser web e **visita <http://localhost:8000>**. Se l'app si carica, congratulazioni, sei a posto! Hai ora una copia dell'intera piattaforma di apprendimento di freeCodeCamp in esecuzione sul tuo computer.

> [!TIP] Il server API serve le API su `http://localhost:3000`. L'app Gatsby serve il client dell'applicazione su `http://localhost:8000`

> Se visiti <http://localhost:3000/explorer> dovresti vedere le API disponibili.

## Accedi con un utente locale

La tua configurazione locale crea automaticamente un utente locale nel database. Facendo clic sul pulsante `Accedi` ti autenticherai automaticamente nell'applicazione locale.

Tuttavia, accedere alla pagina del portfolio utente è un po' difficile. In fase di sviluppo, Gatsby si occupa di servire le pagine lato client e quindi otterrai una pagina `404` per il portfolio utente quando lavorerai localmente.

Basta cliccare sul pulsante **"Preview Custom 404 Page"** per passare alla pagina corretta.

<details>
   <summary>
      Come accedere quando si lavora localmente (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Come accedere quando si lavora localmente" />
</details>

## Apportare modifiche a livello locale

Ora puoi apportare modifiche ai file e inviare le modifiche al clone locale del tuo fork.

Segui questi passaggi:

1. Controlla di essere sul ramo `main`:

   ```console
   git status
   ```

   Dovresti ottenere un output come questo:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   niente da commit, directory di lavoro pulita
   ```

   Se non sei sul ramo main o la directory su cui stai lavorando non è pulita, risolvi file e commit in sospeso e fai il checkout di `main`:

   ```console
   git checkout main
   ```

2. Sincronizza il tuo ramo main locale con gli ultimi aggiornamenti dal ramo `main` dell'upstream di freeCodeCamp:

   > [!WARNING] Se hai delle pull request in sospeso fatte dal ramo `main` del tuo fork, le perderai alla fine di questi passaggi.
   > 
   > Dovresti assicurarti che la tua pull request sia unita da un moderatore prima di eseguire questo passaggio. Per evitare questo scenario, dovresti **sempre** lavorare su un ramo che non sia `main`.

   Questo passaggio **sincronizzerà le ultime modifiche** dal repository principale di freeCodeCamp. È importante che tu faccia un rebase del tuo ramo utilizzando l'ultima versione di `upstream/main` quanto più spesso possibile per evitare conflitti successivamente.

   Aggiorna la tua copia locale del repository upstream freeCodeCamp:

   ```console
   git fetch upstream
   ```

   Fai un hard reset del tuo ramo main con il ramo main di freeCodeCamp:

   ```console
   git reset --hard upstream/main
   ```

   Fai un push del ramo main al tuo origin per avere una cronologia pulita nel tuo fork su GitHub:

   ```console
   git push origin main --force
   ```

   Puoi controllare che il tuo main attuale corrisponda con upstream/main facendo un diff:

   ```console
   git diff upstream/main
   ```

   L'output risultante dovrebbe essere vuoto.

3. Crea un nuovo ramo:

   Lavorare su un ramo separato per ogni problema ti aiuta a mantenere pulita la tua copia di lavoro locale. Non dovresti mai lavorare su `main`. Questo sporcherebbe la tua copia di freeCodeCamp e potrebbe essere necessario ricominciare da capo con un nuovo clone o fork.

   Controlla di essere su `main` come spiegato in precedenza, e crea un ramo da lì:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Il nome del ramo dovrebbe iniziare con un `fix/`, `feat/`, `docs/`, ecc. Evita di utilizzare i numeri delle issue nei rami. Tienili brevi, significativi e unici.

   Alcuni esempi di buoni nomi dei rami sono:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Modifica le pagine e lavora sul codice nel tuo editor di testo preferito.

5. Una volta che sei soddisfatto delle modifiche, dovresti opzionalmente eseguire freeCodeCamp localmente per visualizzarle in anteprima.

6. Assicurati di correggere eventuali errori e controlla la formattazione delle modifiche.

7. Controlla e conferma i file che stai aggiornando:

   ```console
   git status
   ```

   Questo dovrebbe mostrare un elenco di file `unstaged` che hai modificato.

   ```console
   Su branch feat/documentation
   Il ramo è aggiornato con 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Fai lo stage delle modifiche e crea un commit:

   In questo passaggio, dovresti contrassegnare solo i file che hai modificato o aggiunto tu stesso. Se necessario è possibile eseguire un reset e risolvere i file che non hai intenzione di modificare.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Oppure puoi aggiungere tutti i file `unstaged` all'area di staging:

   ```console
   git add .
   ```

   Solo i file che sono stati spostati nell'area di staging verranno aggiunti quando si effettua un commit.

   ```console
   git status
   ```

   Output:

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

   Ora, è possibile eseguire il commit delle modifiche con un breve messaggio come questo:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Alcuni esempi:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Facoltativo:

   Raccomandiamo caldamente di creare un messaggio di commit convenzionale. Questa è una buona pratica che vedrai su alcuni dei più popolari repository Open Source. Come sviluppatore, questo ti incoraggia a seguire le pratiche standard.

   Alcuni esempi di messaggi di commit convenzionali sono:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Mantieni questi messaggi brevi, non più di 50 caratteri. È sempre possibile aggiungere ulteriori informazioni nella descrizione del messaggio di commit.

   Questo non richiede tempo aggiuntivo rispetto a un messaggio non convenzionale come 'fupdate file' o 'add index.md'

   Puoi saperne di più sul perché dovresti usare i commit convenzionali [qui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Se ti accorgi di dover modificare un file o aggiornare il messaggio del commit dopo aver fatto un commit puoi farlo dopo aver modificato i file con:

   ```console
   git commit --amend
   ```

   Questo aprirà un editor di testo predefinito come `nano` o `vi` dove potrai modificare il titolo del messaggio di commit e aggiungere/modificare la descrizione.

10. Successivamente, è possibile inviare le modifiche al fork:

    ```console
    git push origin branch/name-here
    ```

## Proporre una Pull Request (PR)

Dopo aver effettuato le modifiche, controlla qui [come aprire una Pull Request](how-to-open-a-pull-request.md).

## Comandi rapidi

Un rapido riferimento ai comandi di cui avrai bisogno quando lavorerai localmente.

| comando                                                        | descrizione                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installa / reinstalla tutte le dipendenze e avvia i diversi servizi.                |
| `npm run seed`                                                 | Analizza tutti i file di markdown della sfida e li inserisce in MongoDB.            |
| `npm run develop`                                              | Avvia il server API freeCodeCamp e le applicazioni client.                          |
| `npm run storybook`                                            | Esegui Storybook per sviluppo dei componenti di library.                            |
| `npm test`                                                     | Esegui tutti i test JS del sistema inclusi client, server, link e test delle sfide. |
| `npm run test-client`                                          | Esegui la test suite del client.                                                    |
| `npm run test:curriculum`                                      | Esegui la test suite del curriculum.                                                |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | Esegui i test di uno specifico blocco.                                              |
| `npm run test:curriculum --superblock='responsive-web-design'` | Esegui i test di uno specifico superblocco.                                         |
| `npm run test-curriculum-full-output`                          | Esegui la suite di test del curriculum, senza arrestarsi dopo il primo errore       |
| `npm run test-server`                                          | Esegui la suite di test del server.                                                 |
| `npm run e2e`                                                  | Esegui i test di Cypress end to end.                                                |
| `npm run clean`                                                | Disistalla tutte le dipendenze e pulisce la cache.                                  |

## Risoluzione Dei Problemi

### Problemi con l'installazione dei prerequisiti raccomandati

Sviluppiamo regolarmente sui sistemi operativi più recenti o più popolari come macOS 10.15 o successivi, Ubuntu 18.04, e Windows 10 con WSL2.

Ti raccomandiamo di fare ricerche sui tuoi problemi specifici usando risorse come Google, Stack Overflow, e Stack Exchange. C'è una buona probabilità che qualcuno abbia incontrato lo stesso problema e ci sia già una risposta alla tua domanda specifica.

Se sei su un sistema operativo diverso e/o continui ad avere dei problemi, visita [ottenere aiuto](#getting-help).

> [!WARNING]
> 
> Per favore evita di creare issue su GitHub per problemi con i prerequisiti. Sono al di fuori dell'ambito di questo progetto.

### Problemi con UI, Font, errori di build, ecc.

Se incontri problemi con l'interfaccia utente, i caratteri o vedi errori di compilazione, potrebbe essere utile una pulizia:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

O

Usa il collegamento

```
npm run clean-and-develop
```

Se continui ad incontrare problemi con la compilazione, ti consigliamo di ripulire lo spazio di lavoro.

Usa `git clean` in modalità interattiva:

```
git clean -ifdX
```

<details>
   <summary>
      Come pulire i file git non tracciati (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Come pulire i file git non tracciati" />
</details>

### Problemi con API, logic, invio delle sfide, ecc.

Se non riesci ad accedere e invece vedi un banner con un messaggio di errore che il problema sarà segnalato a freeCodeCamp, ti preghiamo di controllare che la porta locale `3000` non sia usata da un programma diverso.

**Su Linux / macOS / WSL su Windows - dal terminale:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

**Su Windows - da PowerShell con privilegi elevati:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

### Problemi nell'installazione delle dipendenze

Se incontri degli errori durante l'installazione delle dipendenze, assicurati di non essere in una rete ristretta o che le impostazioni del tuo firewall non ti impediscono di accedere alle risorse.

La prima configurazione può richiedere un po' di tempo a seconda della larghezza di banda della rete. Sii paziente, e se continui a rimanere bloccato ti raccomandiamo di usare GitPod invece di un setup offline.

> [!NOTE] Se stai usando un device Apple con Chip M1 per eseguire l'applicazione in locale, suggeriamo di usare Node v14.7 o superiore. Altrimenti potresti avere problemi con dipendenze come Sharp.

## Ottenere Aiuto

Se sei bloccato e hai bisogno di aiuto, poni liberamente le tue domande nella [categoria 'Contributors' sul nostro forum](https://forum.freecodecamp.org/c/contributors) o [nella chat room per i contributori](https://chat.freecodecamp.org/channel/contributors).

Potrebbe esserci un errore nella console del browser o in Bash / Terminal / Linea di comando che ti aiuterà a identificare il problema. Fornisci questo messaggio di errore nella descrizione del problema in modo che gli altri possano identificalo più facilmente e aiutarti a risolverlo.
