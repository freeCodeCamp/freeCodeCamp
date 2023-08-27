Segui questa guida per impostare l'app mobile di freeCodeCamp localmente sul tuo sistema. È altamente raccomandato se vuoi contribuire regolarmente.

Some of the contribution workflows – like fixing bugs in the codebase – need you to run the freeCodeCamp app locally.

## How to Prepare your Local Machine

Inizia installando i prerequisiti software per il tuo sistema operativo.

### Prerequisites

| Prerequisito                                  | Versione | Note                                         |
| --------------------------------------------- | -------- | -------------------------------------------- |
| [Flutter](https://flutter.dev/)               | `3.x`    | -                                            |
| Dart (viene fornito in dotazione con Flutter) | `2.x`    | Usiamo la versione in dotazione con Flutter. |

> [!ATTENTION] Se hai una versione diversa, per favore installa la versione raccomandata. Possiamo supportare solo i problemi di installazione per le versioni consigliate.

Se Flutter è già installato sulla macchina, eseguire i seguenti comandi per convalidare le versioni:

```console
flutter --version
dart --version
```

> [!TIP] Raccomandiamo vivamente di eseguire gli aggiornamenti all'ultima versione stabile dei software elencati qui sopra.

Una volta che avrai installato i prerequisiti, dovrai preparare il tuo ambiente di sviluppo. Questo è comune a molti flussi di lavoro di sviluppo, e si dovrà fare solo una volta.

#### Follow these steps to get your development environment ready:

1. Installa [Git](https://git-scm.com/) o il tuo client Git preferito, se non lo hai già. Aggiorna alla versione più recente; la versione fornita con il tuo sistema operativo potrebbe essere obsoleta.

2. Set up [Android Studio](https://developer.android.com/studio) and [Android Emulators](https://developer.android.com/studio/run/managing-avds) with the latest released Android version. Consigliamo di utilizzare Pixel 3a XL e Nexus One(per simulare schermi più piccoli).

3. (Optional for MacOS) Set up Xcode and iOS Simulator with the latest released iOS version.

4. (Opzionale ma raccomandato) [Imposta una chiave SSH](https://help.github.com/articles/generating-an-ssh-key/) per GitHub.

5. Installa un editor di codice di tua scelta.

   Consigliamo vivamente di utilizzare [Visual Studio Code](https://code.visualstudio.com/) o Android Studio. Consigliamo anche di installare le [estensioni](https://docs.flutter.dev/get-started/editor?tab=vscode) ufficiali.

## Fork the Repository on GitHub

Fare il [fork](https://help.github.com/articles/about-forks/) è il passaggio grazie a cui ottieni la tua copia del repository (_repo_) su GitHub.

Questo è essenziale, in quanto consente di lavorare sulla propria copia dell'app di freeCodeCamp su GitHub, o di scaricare (clonare) il tuo repository per lavorare localmente. Più tardi, potrai richiedere che le tue modifiche siano integrate (pull) nel repository principale dal tuo fork tramite una pull request (PR).

> [!TIP] Il repository principale su `https://github.com/freeCodeCamp/mobile` è spesso indicato come il repository `upstream`.
> 
> Il tuo fork che si trova a `https://github.com/YOUR_USER_NAME/mobile` è spesso chiamato il repository `origin`. `YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.

**Segui questi passaggi per effettuare il fork del repository `https://github.com/freeCodeCamp/mobile`:**

1. Vai al repository freeCodeCamp mobile su GitHub: <https://github.com/freeCodeCamp/mobile>

2. Fai clic sul pulsante "Fork" nell'angolo in alto a destra dell'interfaccia ([Maggiori dettagli qui](https://help.github.com/articles/fork-a-repo/))

3. Dopo che è stato creato un fork del repository, sarai portato alla tua copia del repository su `https://github.com/YOUR_USER_NAME/mobile` (`YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.)

## Clone your Fork from GitHub

La [Clonazione](https://help.github.com/articles/cloning-a-repository/) consiste nello **scaricare** una copia di un repository da una `posizione remota` che è di proprietà tua o di qualcun altro. In your case, this remote location is your `fork` of freeCodeCamp's repository which should be available at `https://github.com/YOUR_USER_NAME/mobile`. (`YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.)

Esegui questi comandi sulla tua macchina locale:

1. Apri un terminale / prompt dei comandi / Shell nella directory dei progetti

   _cioè: `/yourprojectsdirectory/`_

2. Clona il tuo fork di freeCodeCamp, sostituendo `YOUR_USER_NAME` con il tuo nome utente GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/mobile.git
   ```

Questo scaricherà l'intero repository mobile freeCodeCamp nella directory dei tuoi progetti.

Nota: `--depth=1` crea un clone superficiale del fork, con la sola cronologia dei commit più recente.

## Set up Syncing from Parent

Ora che hai scaricato una copia del fork, dovrai configurare un `upstream` remoto che punti al repository genitore.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred to as the `upstream` repository. Your fork is referred to as the `origin` repository.

Hai bisogno di un riferimento dal tuo clone locale al repository `upstream` oltre che al repository `origin`. In questo modo potrai sincronizzare le modifiche dal repository principale senza bisogno di fare ripetuti fork e clonazioni.

1. Spostati nella directory `mobile`:

   ```console
   cd mobile
   ```

2. Aggiungi un riferimento remoto al repository freeCodeCamp mobile:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/mobile.git
   ```

3. Assicurati che la configurazione sia corretta:

   ```console
   git remote -v
   ```

   L'output dovrebbe apparire simile al seguente (sostituendo `YOUR_USER_NAME` con il tuo username di GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/mobile.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/mobile.git (push)
   upstream    https://github.com/freeCodeCamp/mobile.git (fetch)
   upstream    https://github.com/freeCodeCamp/mobile.git (push)
   ```

## Running freeCodeCamp Mobile App Locally

Ora che disponi di una copia locale dell'app mobile, potrai seguire queste istruzioni per eseguirla localmente.

Se incontri un problema, fai prima una ricerca del problema sul web per vedere se ha già una risposta. Se non riesci a trovare una soluzione, ti preghiamo di fare una ricerca nelle nostra pagina delle [Issues su GitHub](https://github.com/freeCodeCamp/mobile/issues) per trovare una soluzione o segnalare il problema se non è ancora stato fatto.

E come sempre, fai liberamente le tue domande nella [categoria 'Contributors' sul forum](https://forum.freecodecamp.org/c/contributors) o [sul server di chat](https://discord.gg/PRyKn3Vbay).

> [!NOTE] La directory `mobile` contiene le cartelle `mobile-api` e `mobile-app`. `mobile-api` contiene il codice delle API utilizzate per i podcast. `mobile-app` contiene l'app Flutter ed è dove dovresti trovarti per seguire i passaggi successivi.

### Configuring Dependencies

#### Step 1: Set Up the Environment Variable File

Le chiavi API predefinite e le variabili d'ambiente sono memorizzate nel file `sample.env`. This file needs to be copied to a new file named `.env` which is accessed dynamically during the installation step. Ricordati di spostarti nella directory `mobile-app` prima di eseguire i seguenti comandi.

```console
# Crea una copia di "sample.env" e chiamalo ".env".
# Popolalo con le chiavi API e i segreti necessari:
```

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

_Non_ è necessario cambiare le chiavi nel file `.env` per eseguire l'applicazione localmente. Puoi lasciare i valori predefiniti copiati da `sample.env` così come sono.

#### Step 2: Installare le dipendenze

Questo passaggio installerà le dipendenze richieste per l'esecuzione dell'applicazione:

```console
flutter pub get
```

#### Step 3: Avviare l'app mobile freeCodeCamp

Avvia un emulatore di tua scelta (Android o iOS) e aspetta il processo di avvio per completare.

Ora puoi avviare l'app eseguendo il seguente comando:

```console
flutter run
```

> [!TIP] Se stai usando VSCode o Android Studio puoi avviare facilmente l'app senza eseguire comandi dal terminale. Maggiori informazioni [qui](https://docs.flutter.dev/get-started/test-drive).

## Making Changes Locally

You can now make changes to files and commit your changes to the local clone of your fork.

Segui questi passaggi:

1. Controlla di essere sul branch `main`:

   ```console
   git status
   ```

   Dovresti ottenere un output come questo:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   Se non sei sul branch main o la directory su cui stai lavorando non è pulita, risolvi file e commit in sospeso e fai il checkout da `main`:

   ```console
   git checkout main
   ```

2. Sincronizza il tuo branch main locale con gli ultimi aggiornamenti dal branch upstream `main`:

   > [!WARNING] Se hai delle pull request in sospeso fatte dal branch `main` del tuo fork, le perderai alla fine di questi passaggi.
   > 
   > Prima di eseguire questo passaggio, dovresti assicurarti che un moderatore abbia eseguito il merge della tua pull request. Per evitare questa situazione, dovresti **sempre** lavorare su un branch che non sia `main`.

   Questo passaggio **sincronizzerà le ultime modifiche** dal repository principale di freeCodeCamp mobile. È importante che tu faccia un rebase del tuo branch utilizzando l'ultima versione di `upstream/main` quanto più spesso possibile per evitare conflitti successivamente.

   Aggiorna la tua copia locale del repository upstream freeCodeCamp mobile:

   ```console
   git fetch upstream
   ```

   Fai un hard reset del tuo branch main con il branch main di freeCodeCamp mobile:

   ```console
   git reset --hard upstream/main
   ```

   Fai un push del branch main al tuo origin per avere una cronologia pulita nel tuo fork su GitHub:

   ```console
   git push origin main --force
   ```

   You can validate that your current main matches the upstream/main by performing a diff:

   ```console
   git diff upstream/main
   ```

   L'output risultante dovrebbe essere vuoto.

3. Crea un nuovo branch:

   Lavorare su un branch separato per ogni problema ti aiuta a mantenere pulita la tua copia di lavoro locale. Non dovresti mai lavorare su `main`. Questo sporcherebbe la tua copia di freeCodeCamp mobile e potrebbe essere necessario ricominciare da capo con un nuovo clone o fork.

   Controlla di essere su `main`, come spiegato in precedenza, e crea un branch da lì:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Il nome del branch dovrebbe iniziare con un `fix/`, `feat/`, `docs/`, ecc. Evita di utilizzare i numeri delle issue nei branch. Keep them short, meaningful, and unique.

   Alcuni esempi di nomi buoni per un branch sono:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Modifica le pagine e lavora sul codice nel tuo editor di testo preferito.

5. Una volta che sei soddisfatto delle modifiche, dovresti opzionalmente eseguire l'app mobile localmente per visualizzarle in anteprima.

6. Assicurati di correggere eventuali errori e controlla la formattazione delle modifiche.

7. Controlla e conferma i file che stai aggiornando:

   ```console
   git status
   ```

   Questo dovrebbe mostrare un elenco di file `unstaged` che hai modificato.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
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

   Solo i file che sono stati spostati nell'area di staging verranno aggiunti quando effettui un commit.

   ```console
   git status
   ```

   Output:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
   ```

   Ora, è possibile eseguire il commit delle modifiche con un breve messaggio come questo:

   ```console
   git commit -m "fix: breve messaggio di commit"
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

   Questo non richiede tempo aggiuntivo rispetto a un messaggio non convenzionale come 'update file' o 'add index.md'

   Puoi sapere di più sul perché dovresti usare i commit convenzionali [qui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Se ti accorgi di dover modificare un file o aggiornare il messaggio del commit dopo aver fatto un commit puoi farlo dopo aver modificato i file con:

   ```console
   git commit --amend
   ```

   Questo aprirà un editor di testo predefinito come `nano` o `vi` dove potrai modificare il titolo del messaggio di commit e aggiungere/modificare la descrizione.

10. Successivamente, è possibile inviare le modifiche al fork:

    ```console
    git push origin branch/name-here
    ```

## Running mobile curriculum tests

> [!NOTE] You only need to follow this section if you're modifying the challenge test runner in the mobile app. Otherwise, you can go to the next section on [how to open a pull request](#proposing-a-pull-request-pr).

1. Clone a copy of the [freeCodeCamp repo](https://github.com/freeCodeCamp/freeCodeCamp) locally outside of your local copy of freeCodeCamp mobile repo. Your folder structure should look like this:

    ```console
    ├── freeCodeCamp
    ├── mobile
    ```

2. Change directory to the freeCodeCamp repo:

    ```console
    cd freeCodeCamp
    ```

3. Make a copy of the `.env` file:

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

4. Install the dependencies for the freeCodeCamp repo:

    ```console
    pnpm install && pnpm run create:config
    ```

5. Generate the challenge data JSON file:

    ```console
    pnpm run build:curriculum
    ```

6. Copy the generated JSON file to the mobile app:

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp ./config/curriculum.json ../mobile/mobile-app/curriculum.json
```

#### **Windows**

```console
copy .\config\curriculum.json ..\mobile\mobile-app\curriculum.json
```

<!-- tabs:end -->

7. Change directory to the mobile app:

    ```console
    cd ../mobile/mobile-app
    ```

8. Install the dependencies for the mobile app:

    ```console
    flutter pub get
    ```

9. Update the test file to use the challenge data JSON file:

    ```console
    sed -i '' 's/..\/..\/config\/curriculum.json/.\/curriculum.json/g' test/widget_test.dart  
    ```

10. Generate the challenge files:

    ```console
    flutter test test/widget_test.dart
    ```

11. Start a local server to serve the challenge files with the help of `serve` package:

    ```console
    npx serve
    ```

12. In a different terminal go back to the freeCodeCamp repo:

    ```console
    cd ../../freeCodeCamp
    ```

13. Run the cypress tests:

    ```console
    pnpm cypress run --config retries=1,screenshotOnRunFailure=false,video=false,baseUrl=http://localhost:3000/generated-tests/,specPattern=cypress/e2e/mobile-learn/test-challenges.js -s cypress/e2e/mobile-learn/test-challenges.js -b chrome
    ```

## Proposing a Pull Request (PR)

Dopo aver fatto il commit delle tue modifiche, controlla qui per [come aprire una Pull Request](how-to-open-a-pull-request.md).

<!-- ## Quick commands reference - NEED TO DISCUSS ABOUT THIS

A quick reference to the commands that you will need when working locally.

| command                                                        | description                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installs / re-install all dependencies and bootstraps the different services.       |
| `npm run seed`                                                 | Parses all the challenge markdown files and inserts them into MongoDB.              | -->

## Troubleshooting

### Problemi con l'installazione dei prerequisiti raccomandati

Sviluppiamo regolarmente sui sistemi operativi più nuovi o più popolari come macOS 10.15 o successivi, Ubuntu 18.04, e Windows 10 con WSL2.

Ti raccomandiamo di fare ricerche sui tuoi problemi specifici usando risorse come Google, Stack Overflow e Stack Exchange. C'è una buona probabilità che qualcuno abbia incontrato lo stesso problema e ci sia già una risposta alla tua domanda specifica.

Se sei su un sistema operativo diverso e/o continui ad avere dei problemi, visita [ottenere aiuto](#ottenere-aiuto).

### Problemi con UI, errori di build, ecc.

Se si verificano problemi con l'interfaccia utente o errori di compilazione, una pulizia potrebbe essere utile:

```console
flutter clean
```

### Issues Installing Dependencies

Se incontri degli errori durante l'installazione delle dipendenze, assicurati di non essere in una rete ristretta o che le impostazioni del tuo firewall non ti impediscono di accedere alle risorse.

Be patient as the first-time setup can take a while depending on your network bandwidth.

## Getting Help

Se sei bloccato e hai bisogno di aiuto, poni liberamente le tue domande nella [categoria 'Contributors' sul nostro forum](https://forum.freecodecamp.org/c/contributors) o [nella chat room per i contributori](https://discord.gg/PRyKn3Vbay).

Potrebbe esserci un errore nella console del browser o in Bash / Terminal / Linea di comando che ti aiuterà a identificare il problema. Fornisci questo messaggio di errore nella descrizione del problema in modo che gli altri possano identificare più facilmente il problema e aiutarti a risolverlo.
