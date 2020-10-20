Segui queste linee guida per impostare freeCodeCamp localmente sul tuo sistema. Questo è altamente raccomandato se si desidera contribuire regolarmente.

Per alcuni dei flussi di lavoro di contributo, è necessario avere freeCodeCamp in esecuzione localmente. Ad esempio, l'anteprima delle sfide di codifica o il debug e la correzione dei bug nel codebase.

> [!SUGGERIMENTO] Se non sei interessato a configurare freeCodeCamp localmente considera di utilizzare Gitpod, un ambiente dev online gratuito.
> 
> [![Apri in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Avvia un ambiente dev ready-to-code per freeCodeCamp nel tuo browser.)

## Prepara la tua macchina locale

Inizia installando il software prerequisito per il tuo sistema operativo.

Sosteniamo principalmente lo sviluppo sui sistemi **\*nix**. Il nostro staff e collaboratori della community lavorano regolarmente con il codebase utilizzando strumenti installati su Ubuntu e macOS.

Supportiamo anche Windows 10 via WSL2, che puoi preparare [leggendo questa guida](/how-to-setup-wsl).

Alcuni membri della comunità sviluppano anche su Windows 10 nativamente con Git per Windows (Git Bash) e altri strumenti installati su Windows. Al momento non disponiamo di un supporto ufficiale per una tale configurazione, si consiglia invece di utilizzare WSL2.

**Prerequisiti:**

| Prerequisito                                                                                  | Versione | Note                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `12.x`   | [LTS Schedule](https://github.com/nodejs/Release#release-schedule)                                                                                                                              |
| npm (viene fornito in bundle con node)                                                        | `6.x`    | Non ha LTS rilasci, utilizziamo la versione in bundle con Node LTS                                                                                                                              |
| [Server Community MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`    | [Note di rilascio](https://docs.mongodb.com/manual/release-notes/), Nota: Siamo attualmente su `3.6`, è previsto un [aggiornamento](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!PERICO] Se hai una versione diversa, installa la versione consigliata. Possiamo supportare solo i problemi di installazione per le versioni consigliate. Vedi [risoluzione dei problemi](#troubleshooting) per i dettagli.

Se Node.js è già installato sulla macchina, eseguire i seguenti comandi per convalidare le versioni:

```console
node -v
npm -v
```

> [!SUGGERIMENTO] Consigliamo vivamente di aggiornare le ultime versioni stabili del software sopra elencato, note anche come versioni a lungo termine (LTS).

Una volta che avete i prerequisiti installati, è necessario preparare il vostro ambiente di sviluppo. Questo è comune per molti flussi di lavoro di sviluppo, e si dovrà fare solo una volta.

**Segui questi passaggi per preparare il tuo ambiente di sviluppo:**

1. Installa [Git](https://git-scm.com/) o il tuo client Git preferito, se non lo hai già. Aggiornamento alla versione più recente; la versione che è venuto in bundle con il vostro sistema operativo potrebbe essere obsoleta.

2. (Facoltativo ma consigliato) [Imposta una chiave SSH](https://help.github.com/articles/generating-an-ssh-key/) per GitHub.

3. Installa un editor di codice a tua scelta.

   Consigliamo vivamente di utilizzare [Visual Studio Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Questi sono grandi, liberi e open source editor di codice.

4. Impostare linting per l'editor di codice.

   Dovresti avere [ESLint in esecuzione nel tuo editor](http://eslint.org/docs/user-guide/integrations.html), e metterà in evidenza tutto ciò che non è conforme a [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!SUGGERIMENTO] Per favore non ignorare alcun errore di linting. Essi sono destinati a **aiutare** e per garantire un codice pulito e semplice.

## Fork il repository su GitHub

[Forking](https://help.github.com/articles/about-forks/) is a step where you get your own copy of freeCodeCamp's main repository (alias _repo_) on GitHub.

Questo è essenziale, in quanto consente di lavorare sulla propria copia di freeCodeCamp su GitHub, o per scaricare (clonare) il tuo repository per lavorare localmente. Più tardi, potrai richiedere modifiche da tirare nel repository principale dal tuo fork tramite una pull request (PR).

> [!TIP] Il repository principale su `https://github.com/freeCodeCamp/freeCodeCamp` è spesso indicato come il repository `upstream`.
> 
> Il tuo fork su `https://github.com/YOUR_USER_NAME/freeCodeCamp` è spesso indicato come il repository `origin`.

**Segui questi passaggi per effettuare il fork del repository `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Vai al repository freeCodeCamp su GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Fare clic sul pulsante "Fork" nell'angolo in alto a destra dell'interfaccia ([Maggiori dettagli qui](https://help.github.com/articles/fork-a-repo/))

3. Dopo che il repository è stato forked, sarai portato alla tua copia del repository freeCodeCamp su `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Come effettuare il fork freeCodeCamp su GitHub (screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Come fork freeCodeCamp su GitHub" />
</details>

## Clona il tuo fork da GitHub

[Clonazione](https://help.github.com/articles/cloning-a-repository/) è dove **scarichi** una copia di un repository da una `posizione remota` che è di proprietà di te o di qualcun altro. Nel tuo caso, questa posizione remota è il tuo `fork` del repository di freeCodeCamp che dovrebbe essere disponibile su `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Esegui questi comandi sulla tua macchina locale:

1. Apri un terminale / prompt dei comandi / Shell nella directory dei progetti

   _cioè: `/yourprojectsdirectory/`_

2. Clona il tuo fork di freeCodeCamp, sostituendo `YOUR_USER_NAME` con il tuo nome utente GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Questo scaricherà l'intero repository freeCodeCamp nella directory dei tuoi progetti.

Nota: `--depth=1` crea un clone superficiale del fork, con solo la cronologia più recente/commit.

## Imposta la sincronizzazione dal genitore

Ora che hai scaricato una copia del fork, dovrai configurare un remoto `upstream` nel repository padre.

[Come accennato poc'anzi](#fork-the-repository-on-github), il repository principale si riferisce al repository `upstream`. Il tuo fork si riferisce al repository `origin`.

Hai bisogno di un riferimento dal tuo clone locale al repository `upstream` oltre al repository `origin`. Questo è in modo che è possibile sincronizzare le modifiche dal repository principale senza il requisito di forking e clonazione ripetutamente.

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

   L'output dovrebbe apparire come sotto:

   ```console
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Eseguire freeCodeCamp localmente

Ora che si dispone di una copia locale di freeCodeCamp, è possibile seguire queste istruzioni per eseguirlo localmente. Questo vi permetterà di:

- Anteprima delle modifiche alle pagine come apparirebbero sulla piattaforma di apprendimento.
- Lavori su questioni e miglioramenti relativi all'interfaccia utente.
- Debug e correzione dei problemi con i server delle applicazioni e le app client.

Se si esegue un problema, prima di eseguire una ricerca web per il tuo problema e vedere se è già stato risposto. Se non riesce a trovare una soluzione, si prega di cercare la nostra [GitHub problemi](https://github.com/freeCodeCamp/freeCodeCamp/issues) pagina per una soluzione e segnalare il problema se non è ancora stato segnalato.

E come sempre, sentiti libero di salire sul nostro [Contributori Chat room su Gitter](https://gitter.im/FreeCodeCamp/Contributors) o [il nostro server Discord](https://discord.gg/pFspAhS), per domande rapide.

> [!SUGGERIMENTO] Puoi saltare l'esecuzione di freeCodeCamp localmente se stai semplicemente modificando i file. Ad esempio, eseguendo un `rebase`o risolvendo `unioni` conflitti.
> 
> Puoi sempre tornare a questa parte delle istruzioni più tardi. Dovresti **solo** saltare questo passaggio se non hai bisogno di eseguire le app sulla tua macchina.
> 
> [Salta per apportare modifiche](#making-changes-locally).

### Configurare le dipendenze

#### Passo 1: Impostare il file variabile di ambiente

Le chiavi API predefinite e le variabili di ambiente sono memorizzate nel file `sample.env`. Questo file deve essere copiato in un nuovo file chiamato `.env` a cui si accede dinamicamente durante la fase di installazione.

```console
# Creare una copia del "sample.env" e nominarlo ".env".
# Popolare con le chiavi API e i segreti necessari:

# macOS / Linux
cp esempio. nv .env

# Windows
copy sample.env .env
```

Le chiavi nel file `.env` non sono __ necessarie per essere modificate per eseguire l'applicazione localmente. Puoi lasciare i valori predefiniti copiati da `sample.env` come-is.

> [!SUGGERIMENTO] Tenete a mente se volete utilizzare servizi come Auth0 o Algolia, dovrai acquisire le tue chiavi API per questi servizi e modificare le voci di conseguenza nel `. nv` file.

#### Passo 2: Installa dipendenze

Questo passaggio installerà le dipendenze richieste per l'esecuzione dell'applicazione:

```console
npm ci
```

#### Passo 3: Avvia MongoDB e semina il database

Prima di poter eseguire l'applicazione localmente, è necessario avviare il servizio MongoDB.

> [!NOTA] A meno che non si abbia MongoDB in esecuzione in una configurazione diversa da quella predefinita, l'URL memorizzato come valore `MONGOHQ_URL` nel `. nv` file dovrebbe funzionare bene. Se si utilizza una configurazione personalizzata, modificare questo valore come necessario.

Avviare il server MongoDB in un terminale separato:

- Su macOS & Ubuntu:

  ```console
  mongod
  ```

- Su Windows, è necessario specificare il percorso completo del binario `mongod`

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Assicurati di sostituire `3.6` con la versione che hai installato

> [!SUGGERIMENTO] Puoi evitare di avviare MongoDB ogni volta installandolo come servizio in background. Puoi [saperne di più su di esso nella loro documentazione per il tuo sistema operativo](https://docs.mongodb.com/manual/administration/install-community/)

Successivamente, cerchiamo di seminare il database. In questo passaggio, eseguiamo il comando sottostante che riempie il server MongoDB con alcuni set di dati iniziali richiesti dai servizi. Tra questi figurano alcuni schemi, tra le altre cose.

```console
npm run seed
```

#### Passo 4: Avviare l'applicazione client freeCodeCamp e il server API

Ora è possibile avviare il server API e le applicazioni client.

```console
npm run develop
```

Questo singolo comando attiverà tutti i servizi, compreso il server API e le applicazioni client disponibili su cui lavorare.

> [!NOTA] Una volta pronto, apri un browser web e **visita <http://localhost:8000>**. Se l'app si carica, congratulazioni – sei tutto impostato! Ora hai una copia dell'intera piattaforma di apprendimento di freeCodeCamp in esecuzione sulla tua macchina locale.

> [!TIP] Il server API serve le API su `http://localhost:3000`. L'app Gatsby serve l'applicazione client su `http://localhost:8000`

> Se visiti <http://localhost:3000/explorer> dovresti vedere le API disponibili.

## Accedi con un utente locale

La tua configurazione locale popola automaticamente un utente locale nel database. Facendo clic sul pulsante `Accedi` ti autenticerà automaticamente nell'applicazione locale.

Tuttavia, accedere alla pagina del portafoglio utente è un po 'difficile. In fase di sviluppo, Gatsby si occupa di servire le pagine lato client e quindi si otterrà una pagina `404` per il portafoglio di utenti quando si lavora localmente.

Basta cliccare sul pulsante **"Anteprima personalizzata 404 Page"** ti inoltrerà alla pagina corretta.

<details>
   <summary>
      Come accedere quando si lavora localmente (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Come accedere quando si lavora localmente" />
</details>

## Apportare modifiche a livello locale

Ora è possibile apportare modifiche ai file e inviare le modifiche al clone locale del fork.

Segui questi passaggi:

1. Convalida che sei nel ramo `master`:

   ```console
   git status
   ```

   Si dovrebbe ottenere un output come questo:

   ```console
   Sul branch master
   Il tuo branch è aggiornato con 'origin/master'.

   niente da commit, directory di lavoro pulita
   ```

   Se non sei su master o la tua directory di lavoro non è pulita, risolvi qualsiasi file/commit e controlla `master`:

   ```console
   git checkout master
   ```

2. Sincronizza le ultime modifiche dal ramo `master` di freeCodeCamp a monte del ramo principale locale:

   > [!ATTENZIONE] Se hai una richiesta di pull in sospeso che hai fatto dal ramo `master` del tuo fork, li perderai alla fine di questo passaggio.
   > 
   > Dovresti assicurarti che la tua pull request sia unita da un moderatore prima di eseguire questo passaggio. Per evitare questo scenario, dovresti **sempre** lavorare su un ramo diverso dal `master`.

   Questo passaggio **sincronizzerà le ultime modifiche** dal repository principale di freeCodeCamp. È importante che si rebase il ramo in cima all'ultimo `upstream/master` il più spesso possibile per evitare i conflitti in seguito.

   Aggiorna la tua copia locale del repository upstream freeCodeCamp:

   ```console
   git fetch upstream
   ```

   Hard reset il ramo principale con il master freeCodeCamp:

   ```console
   git reset --hard upstream/master
   ```

   Spingere il ramo principale alla tua origine per avere una cronologia pulita sul tuo bivio su GitHub:

   ```console
   git push origin master --force
   ```

   Puoi convalidare il tuo master attuale corrisponde a upstream/master eseguendo una diff:

   ```console
   git diff upstream/master
   ```

   L'output risultante dovrebbe essere vuoto.

3. Crea un nuovo ramo:

   Lavorare su un ramo separato per ogni problema ti aiuta a mantenere pulita la tua copia di lavoro locale. Non dovresti mai lavorare sul `maestro`. Questo sarà terreno la tua copia di freeCodeCamp e potrebbe essere necessario ricominciare da capo con un nuovo clone o forchetta.

   Verificare di essere il `master` come spiegato in precedenza, e diramarsi da lì:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Il nome del ramo dovrebbe iniziare con un `fix/`, `feat/`, `docs/`, ecc. Evitare di utilizzare i numeri di problema nei rami. Evitare di utilizzare i numeri di problema nei rami. Tienili brevi, significativi e unici.

   Alcuni esempi di buoni nomi dei rami sono:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Modifica le pagine e lavora sul codice nel tuo editor di testo preferito.

5. Una volta che sei soddisfatto delle modifiche, dovresti opzionalmente eseguire freeCodeCamp localmente per visualizzare in anteprima le modifiche.

6. Assicurati di correggere eventuali errori e controlla la formattazione delle modifiche.

7. Controlla e conferma i file che stai aggiornando:

   ```console
   git status
   ```

   Questo dovrebbe mostrare un elenco di `file non preparati` che hai modificato.

   ```console
   Su branch feat/documentation
   Il ramo è aggiornato con 'upstream/feat/documentation'.

   Modifiche non organizzate per commit:
   (usa "git add/rm <file>... per aggiornare ciò che sarà impegnato)
   (usa "git checkout -- <file>. ." per scartare le modifiche nella directory di lavoro)

       modificato: CONTRIBUTING. d
       modificato: docs/README.md
       modificato: docs/how-to-setup-freecodecamp-locally. d
       modificato: docs/how-to-work-on-guide-articles.md
...
   ```

8. Fase delle modifiche e commettere un impegno:

   In questo passaggio, dovresti contrassegnare solo i file che hai modificato o aggiunto te stesso. È possibile eseguire un reset e risolvere i file che non avete intenzione di modificare, se necessario.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Oppure puoi aggiungere tutti i file `non preparati` all'area di stadio:

   ```console
   git add .
   ```

   Solo i file che sono stati spostati nell'area di staging verranno aggiunti quando si effettua un commit.

   ```console
   git status
   ```

   Uscita:

   ```console
   Su branch feat/documentation
   Il ramo è aggiornato con 'upstream/feat/documentation'.

   Modifiche da inviare:
   (usa "git reset HEAD <file>..." to unstage)

       modified: CONTRIBUTING.md
       modified: docs/README.md
       modified: docs/how-to-setup-freecodecamp-locally.md
       modified: docs/how-to-work-on-guide-articles.md
   ```

   Ora, è possibile eseguire il commit delle modifiche con un breve messaggio come questo:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Alcuni esempi:

   ```md
   correzione: aggiornamento articolo guida per Java - per ciclo
   caratteristica: aggiungi articolo guida per le abilità alexa
   ```

   Facoltativo:

   Consigliamo vivamente di inviare un messaggio di commit convenzionale. Questa è una buona pratica che vedrete su alcuni dei popolari repository Open Source. Come sviluppatore, questo ti incoraggia a seguire le pratiche standard.

   Alcuni esempi di messaggi di commit convenzionali sono:

   ```md
   correzione: aggiorna l'articolo guida HTML
   correzione: aggiorna gli script di build per Travis-CI
   funzione: aggiungi l'articolo per JavaScript hoisting
   docs: aggiorna le linee guida per contribuire
   ```

   Mantieni questi brevi, non più di 50 caratteri. È sempre possibile aggiungere ulteriori informazioni nella descrizione del messaggio di commit.

   Questo non richiede tempo aggiuntivo rispetto a un messaggio non convenzionale come 'file di aggiornamento' o 'add index.md'

   Puoi saperne di più sul perché dovresti usare i commit convenzionali [qui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Se ti rendi conto che è necessario modificare un file o aggiornare il messaggio di commit dopo aver fatto un commit puoi farlo dopo aver modificato i file con:

   ```console
   git commit --amend
   ```

   Questo aprirà un editor di testo predefinito come `nano` o `vi` dove è possibile modificare il titolo del messaggio di commit e aggiungere/modificare la descrizione.

10. Successivamente, è possibile inviare le modifiche al fork:

    ```console
    git push origin branch/name-here
    ```

## Proporre una richiesta Pull (PR)

Dopo aver effettuato le modifiche, controlla qui per [come aprire una richiesta Pull](how-to-open-a-pull-request.md).

## Riferimento comandi rapidi

Un rapido riferimento ai comandi di cui avrai bisogno quando lavorerai localmente.

| comando                                                        | descrizione                                                                             |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installa / reinstalla tutte le dipendenze e avvia i diversi servizi.                    |
| `npm run seed`                                                 | Analizza tutti i file di markdown della sfida e li inserisce in MongoDB.                |
| `npm run develop`                                              | Avvia il server API freeCodeCamp e le applicazioni client.                              |
| `npm test`                                                     | Eseguire tutti i test JS nel sistema, inclusi i test client, server, lint e challenge . |
| `npm run test:client`                                          | Eseguire la suite di test client.                                                       |
| `npm run test:curriculum`                                      | Eseguire la suite di test curriculum.                                                   |
| `npm run test:curriculum --block='Basic HTML e HTML5'`         | Prova un Blocco specifico.                                                              |
| `npm run test:curriculum --superblock='responsive-web-design'` | Prova un SuperBlock specifico.                                                          |
| `npm run test-curriculum-full-output`                          | Eseguire il curriculum test suite, senza bailing dopo il primo errore                   |
| `npm run test:server`                                          | Eseguire la suite di test del server.                                                   |
| `npm run e2e`                                                  | Eseguire il Cypress end per terminare i test.                                           |
| `npm run clean`                                                | Disinstalla tutte le dipendenze e pulisce le cache.                                     |

## Risoluzione Dei Problemi

### Problemi con l'installazione dei prerequisiti raccomandati

Sviluppiamo regolarmente sui più recenti o più popolari sistemi operativi come macOS 10.15 o successivi, Ubuntu 18.04 o più tardi e Windows 10 (con WSL2).

Si consiglia di ricercare il vostro problema specifico su risorse come Google, Stack Overflow e Stack Exchange. C'è una buona probabilità che qualcuno abbia affrontato lo stesso problema e c'è già una risposta alla tua domanda specifica.

Se si è su un sistema operativo diverso e/o si stanno ancora eseguendo problemi, vedere [ottenere aiuto](#getting-help).

> [!ATTENZIONE]
> 
> Si prega di evitare di creare problemi GitHub per i problemi prerequisiti. Sono al di fuori del campo di applicazione di questo progetto.

### Problemi con l'UI, i Caratteri, gli errori di compilazione ecc.

Se si verificano problemi con l'interfaccia utente, i caratteri o vedere gli errori di compilazione una pulizia può essere utile:

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

Se continui ad affrontare problemi con la costruzione, si consiglia di ripulire lo spazio di lavoro.

Usa `git clean` in modalità interativa:

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

### Problemi con le API, l'accesso, le presentazioni della sfida, ecc.

Se non riesci ad accedere e invece vedi un banner con un messaggio di errore che verrà segnalato a freeCodeCamp, si prega di controllare che la porta locale `3000` non sia in uso da un programma diverso.

**Su Linux / macOS / WSL su Windows - Dal terminale:**

```console
netstat -ab <unk> grep "3000"

tcp4 0 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Su Windows - Da Elevated PowerShell:**

```powershell
netstat -ab <unk> Select-String "3000"

TCP 0.0.0:3000 DESKTOP LISTENING
```

### Problemi nell'installazione delle dipendenze

Se si ottengono errori durante l'installazione delle dipendenze, assicurati di non essere in una rete ristretta o le impostazioni del firewall non ti impediscono di accedere alle risorse.

La prima configurazione può richiedere un po' di tempo a seconda della larghezza di banda di rete. Sii paziente, e se sei ancora bloccato abbiamo raccomandato di utilizzare GitPod invece di una configurazione offline.

## Ottenere Aiuto

Se sei bloccato e hai bisogno di aiuto, fatecelo sapere chiedendo nella categoria ['Contributori' sul nostro forum](https://forum.freecodecamp.org/c/contributors) o la [stanza di chat dei contributori](https://gitter.im/FreeCodeCamp/Contributors) su Gitter.

Potrebbe esserci un errore nella console del browser o in Bash / Terminal / Linea di comando che aiuterà a identificare il problema. Fornire questo messaggio di errore nella descrizione del problema in modo che gli altri possano identificare più facilmente il problema e aiutarvi a trovare una risoluzione.
