Segui queste linee guida per impostare freeCodeCamp localmente nel tuo sistema. Te lo raccomandiamo caldamente se desideri contribuire regolarmente.

Alcuni di questi flussi di lavoro contributivi – come la correzione di bug nel codebase o nel curriculum – hanno bisogno di eseguire freeCodeCamp localmente sul computer.

> [!TIP] Se non sei interessato a configurare freeCodeCamp localmente, considera di utilizzare Gitpod. Abbiamo automatizzato il processo di installazione di tutte le dipendenze & degli strumenti di cui avrai bisogno.
> 
> Continua a leggere questa guida per saperne di più sull'uso di GitPod.

## Esegui il fork del repository su GitHub

Il [Forking](https://help.github.com/articles/about-forks/) è un passaggio nel quale fai una copia del repository principale di freeCodeCamp (noto anche come _repo_) su GitHub.

Questo è essenziale, in quanto consente di lavorare sulla propria copia di freeCodeCamp su GitHub, o di scaricare (clonare) il tuo repository per lavorare localmente. Più tardi, potrai richiedere che le tue modifiche siano integrate nel repository principale dal tuo fork tramite una pull request (PR).

> [!TIP] Il repository principale su `https://github.com/freeCodeCamp/freeCodeCamp` è spesso indicato come il repository `upstream`.
> 
> Il tuo fork situato su `https://github.com/YOUR_USER_NAME/freeCodeCamp` è spesso chiamato il repository `origin`. `YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.

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

## Usare una macchina locale o GitPod

Una volta eseguito il fork del repository, puoi utilizzare la tua macchina locale o uno spazio di lavoro basato su Gitpod per lavorare sul codebase.

Per contribuire a lungo termine, ti consigliamo di impostare freeCodeCamp sulla tua macchina locale.

### Come preparare uno spazio di lavoro GitPod

Abbiamo automatizzato il processo di installazione di tutte le dipendenze & degli strumenti di cui avrai bisogno. Con GitPod ottieni un ambiente gratuito pronto per programmare in pochi minuti, ed è utile se non hai accesso al computer o se desideri effettuare modifiche una tantum.

Ci sono vari modi per avviare uno spazio di lavoro GitPod:

1. **(Il più veloce)** Anteponi `gitpod.io/#` a ogni URL di GitHub.

   Ad esempio, se visiti il tuo fork su `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, aggiungi `gitpod.io/#` davanti all'URL nella barra degli indirizzi e premi invio.

   Cioè puoi andare su `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` e dovresti vedere uno spazio di lavoro creato per te. Funziona per qualsiasi repository o pull-request su GitHub.

2. In alternativa, installa una delle estensioni sottostanti per il browser.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) - funziona con browser basati su Chromium come Google Chrome, Brave, Edge, ecc.
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) - Firefox

   Una volta installato vedrai un pulsante 'GitPod' su ogni repository, pull-request, ecc. da usare come una comoda scorciatoia per lanciare uno spazio di lavoro. Vedi la pagina delle estensioni per i dettagli, screenshot, ecc.

Questo è tutto, ora puoi saltare alla sezione 'impostare la sincronizzazione dal genitore' dopo aver lanciato uno spazio di lavoro GitPod. Molte parti di questa guida si applicano a spazi di lavoro GitPod, ma sii cosciente di [come funzionano URL & Porte in uno spazio di lavoro GitPod](https://www.gitpod.io/docs/configure/workspaces/ports).

### Come preparare la macchina locale

Inizia installando i prerequisiti software per il tuo sistema operativo.

Sosteniamo principalmente lo sviluppo su sistemi Linux e basati su Unix. Il nostro staff e i collaboratori della community lavorano regolarmente con il codebase utilizzando strumenti installati su Ubuntu e macOS.

Supportiamo anche Windows 10 e 11 via WSL2, che puoi preparare [leggendo questa guida](how-to-setup-wsl.md).

Alcuni membri della comunità sviluppano anche su Windows  nativamente con Git per Windows (Git Bash) e altri strumenti installati su Windows. Al momento non disponiamo di un supporto ufficiale per una tale configurazione, consigliamo invece di utilizzare WSL2.

#### Prerequisiti:

| Prerequisito                                                                                  | Versione | Note                                                                                         |
| --------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `18.x`   | Usiamo la versione "Active LTS", Vedi [LTS Schedule](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                          | `7.x`    | -                                                                                            |
| [Server Community MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x`  | -                                                                                            |

> [!ATTENTION] Se hai una versione diversa, per favore installa la versione raccomandata. Possiamo supportare solo i problemi di installazione per le versioni consigliate. Vedi [risoluzione dei problemi](#troubleshooting) per i dettagli.

Se Node.js è già installato sulla macchina, esegui i seguenti comandi per convalidare le versioni:

```console
node -v
pnpm -v
```

> [!TIP] Consigliamo vivamente di aggiornare le ultime versioni stabili del software sopra elencato, note anche come versioni con supporto a lungo termine (LTS).

Una volta che avrai installato i prerequisiti, dovrai preparare il tuo ambiente di sviluppo. Questo è comune a molti flussi di lavoro di sviluppo, e dovrai farlo solo una volta.

##### Segui questi passaggi per preparare il tuo ambiente di sviluppo:

1. Installa [Git](https://git-scm.com/) o il tuo client Git preferito, se non lo hai già. Aggiorna alla versione più recente; la versione fornita con il tuo sistema operativo potrebbe essere obsoleta.

2. (Opzionale ma raccomandato) [Imposta una chiave SSH](https://help.github.com/articles/generating-an-ssh-key/) per GitHub.

3. Installa un editor di codice di tua scelta.

   Consigliamo vivamente di utilizzare [Visual Studio Code](https://code.visualstudio.com/) o [Atom](https://atom.io/). Si tratta di ottimi editor di codice, gratuiti e open source.

4. Imposta il linting per il tuo editor di codice.

   Dovresti avere [ESLint in esecuzione nel tuo editor](http://eslint.org/docs/user-guide/integrations.html), e metterà in evidenza tutto ciò che non è conforme alla [Guida di stile JavaScript di freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Per favore non ignorare alcun errore di linting. Sono pensati per **aiutarti** e per garantire un codice pulito e semplice.

## Clonare il tuo fork da GitHub

La [Clonazione](https://help.github.com/articles/cloning-a-repository/) consiste nello **scaricare** una copia di un repository da una `posizione remota` che è di proprietà tua o di qualcun altro. Nel tuo caso, questa posizione remota è il tuo `fork` del repository di freeCodeCamp che dovrebbe essere disponibile su `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` è sostituito dal tuo nome utente GitHub.)

> [!WARNING] Se stai lavorando su una Distro di Linux su WSL2, potresti avere problemi di performance e stabilità eseguendo il progetto in una cartella che è condivisa tra Windows e WSL2 (per esempio `/mnt/c/Users/`). Quindi ti raccomandiamo di clonare il repo in una cartella che è usata principalmente dalla Distro di Linux su WSL2 e non condivisa direttamente con Windows (per esempio `~/PROJECTS/`).
> 
> Vedi [questa issue su GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) per ulteriori informazioni su questo problema.

Esegui questi comandi sulla tua macchina locale:

1. Apri un terminale / prompt dei comandi / Shell nella directory dei progetti

   _cioè: `/yourprojectsdirectory/`_

2. Clona il tuo fork di freeCodeCamp, sostituendo `YOUR_USER_NAME` con il tuo nome utente GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Questo scaricherà l'intero repository freeCodeCamp nella directory dei tuoi progetti.

Nota: `--depth=1` crea un clone superficiale del fork, con la sola cronologia dei commit più recente.

## Impostare la sincronizzazione dal genitore

Ora che hai scaricato una copia del fork, dovrai configurare un `upstream` remoto che punta al repository genitore.

[Come già accennato](#fork-the-repository-on-github), il repository principale fa riferimento al repository `upstream`. Il tuo fork è chiamato repository `origin`.

Hai bisogno di un riferimento dal tuo clone locale al repository `upstream` oltre al repository `origin`. In questo modo potrai sincronizzare le modifiche dal repository principale senza bisogno di fare ripetuti fork e clonazioni.

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

Se incontri un problema, fai prima una ricerca del problema sul web per vedere se ha già una risposta. Se non riesci a trovare una soluzione, ti preghiamo di fare una ricerca nelle nostra pagina delle [Issues su GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues) per trovare una soluzione o segnalare il problema se non è ancora stato fatto.

E come sempre, fai liberamente le tue domande nella [categoria 'Contributors' sul forum](https://forum.freecodecamp.org/c/contributors) o [sul server di chat](https://discord.gg/PRyKn3Vbay).

### Configurare le dipendenze

#### Passo 1: Impostare il file delle variabili d'ambiente

Le chiavi API predefinite e le variabili d'ambiente sono memorizzate nel file `sample.env`. Questo file deve essere copiato in un nuovo file chiamato `.env` a cui si accede dinamicamente durante la fase di installazione.

```console
# Creare una copia del "sample.env" e denominarlo ".env".
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

> [!TIP] Tieni a mente che se vuoi usare servizi come Auth0 o Algolia, dovrai ottenere delle chiavi API per questi servizi per conto tuo e modificare gli elementi nel file `.env` di conseguenza.

#### Passo 2: Installa le dipendenze

Questo passaggio installerà le dipendenze richieste per l'esecuzione dell'applicazione:

```console
pnpm install
```

#### Passo 3: Avvia MongoDB e fai il seed del database

Prima di poter eseguire l'applicazione localmente, è necessario avviare il servizio MongoDB.

> [!NOTE] A meno che tu non abbia MongoDB in esecuzione in un setup differente da quello predefinito, l'URL salvato come `MONGOHQ_URL` nel file `.env` dovrebbe andare bene. Se usi una configurazione personalizzata, modifica il valore come necessario.
> 
> Se hai seguito la [Guida di configurazione Windows 10 via WSL2](how-to-setup-wsl.md), allora dovresti essere in grado di saltare questo passaggio se il server MongoDB di quella guida è già in esecuzione. Puoi averne conferma controllando di poter raggiungere `http://localhost:27017` sulla tua macchina locale.

Avvia il server MongoDB in un terminale separato:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- Su Windows, è necessario specificare il percorso completo dell'eseguibile `mongod`

```console
"C:\Program Files\MongoDB\Server\3.6\bin\mongod"
```

Assicurati di sostituire `3.6` con la versione che hai installato

  <!-- tabs:end -->

> [!TIP] Puoi evitare di dover avviare MongoDB ogni volta se lo installi come servizio in background. Puoi [saperne di più nella loro documentazione per il tuo sistema operativo](https://docs.mongodb.com/manual/administration/install-community/)

Successivamente, facciamo il seed del database. In questo passaggio, eseguiamo il comando sottostante che popola il server MongoDB con alcuni set di dati iniziali richiesti dai servizi. Tra questi figurano alcuni schemi, tra le altre cose.

```console
pnpm run seed
```

#### Passo 4: Avviare l'applicazione client freeCodeCamp e il server API

Ora è possibile avviare il server API e le applicazioni client.

```console
pnpm run develop
```

Questo singolo comando attiverà tutti i servizi, compreso il server API e le applicazioni client disponibili su cui lavorare.

Una volta pronto, apri un browser web e **visita <http://localhost:8000>**. Se l'app si carica, accedi. Congratulazioni – sei pronto! Hai ora una copia dell'intera piattaforma di apprendimento di freeCodeCamp in esecuzione sul tuo computer.

Il server API serve gli endpoint su `http://localhost:3000`. L'app Gatsby serve il client dell'applicazione su `http://localhost:8000`

Mentre hai effettuato l'accesso, se visiti <http://localhost:3000/explorer> dovresti vedere le API disponibili.

> [!WARNING] Se pulisci i cookie o esegui `pnpm run seed:certified-user` perderai l'accesso e dovrai fare di nuovo l'accesso.

Se hai problemi durante l'installazione, consulta la sezione [risoluzione dei problemi](troubleshooting-development-issues.md)

## Comandi rapidi

Un rapido richiamo ai comandi di cui avrai bisogno quando lavorerai localmente.

| comando            | descrizione                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `pnpm install`     | Installa / reinstalla tutte le dipendenze e avvia i diversi servizi. |
| `pnpm run seed`    | Crea utenti di test autorizzati e li inserisce in mongodb.           |
| `pnpm run develop` | Avvia il server API freeCodeCamp e le applicazioni client.           |
| `pnpm run clean`   | Disistalla tutte le dipendenze e pulisce la cache.                   |
