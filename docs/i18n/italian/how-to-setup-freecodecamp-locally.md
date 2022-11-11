Segui queste linee guida per impostare freeCodeCamp localmente nel tuo sistema. Te lo raccomandiamo caldamente se desideri contribuire regolarmente.

Alcuni di questi flussi di lavoro contributivi – come la correzione di bug nel codebase o nel curriculum – hanno bisogno di eseguire freeCodeCamp localmente sul computer.

### Come preparare la macchina locale

Inizia installando i prerequisiti software per il tuo sistema operativo.

Sosteniamo principalmente lo sviluppo su sistemi Linux e basati su Unix. Il nostro staff e i collaboratori della community lavorano regolarmente con il codebase utilizzando strumenti installati su Ubuntu e macOS.

Supportiamo anche Windows 10 via WSL2, che puoi preparare [leggendo questa guida](how-to-setup-wsl.md).

Alcuni membri della comunità sviluppano anche su Windows 10 nativamente con Git per Windows (Git Bash) e altri strumenti installati su Windows. Al momento non disponiamo di un supporto ufficiale per una tale configurazione, consigliamo invece di utilizzare WSL2.

#### Prerequisiti:

| Prerequisito                                                                                  | Versione | Note                                                                                         |
| --------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `16.x`   | Usiamo la versione "Active LTS", Vedi [LTS Schedule](https://nodejs.org/en/about/releases/). |
| npm (viene fornito in bundle con node)                                                        | `8.x`    | Usiamo la versione in bundle con Node.js Active LTS.                                         |
| [Server Community MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x`  | -                                                                                            |

> [!ATTENTION] If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting](#troubleshooting) for details.

Se Node.js è già installato sulla macchina, esegui i seguenti comandi per convalidare le versioni:

```console
node -v
npm -v
```

> [!TIP] We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

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

> [!TIP] The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository.
> 
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as the `origin` repository. `YOUR_USER_NAME` would be replaced with your GitHub username.

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

> [!WARNING] If you are working on a WSL2 Linux Distro, you might get performance and stability issues by running this project in a folder which is shared between Windows and WSL2 (e.g. `/mnt/c/Users/`). Therefore we recommend to clone this repo into a folder which is mainly used by your WSL2 Linux Distro and not directly shared with Windows (e.g. `~/PROJECTS/`).
> 
> See [this GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) for further Information about this problem.

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

E come sempre, fai liberamente le tue domande nella [categoria 'Contributors' sul forum](https://forum.freecodecamp.org/c/contributors) o [sul server di chat](https://discord.gg/PRyKn3Vbay).

### Configurare le dipendenze

We have automated the process of setting up the development environment in Gitpod for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

(You will still need to create your own fork and branch.)

#### Passo 1: Impostare il file delle variabili d'ambiente

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

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

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP] Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### Passo 2: Installa le dipendenze

This step will install the dependencies required for the application to run:

```console
npm ci
```

#### Passo 3: Avvia MongoDB e fai il seed del database

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. If you are using a custom configuration, modify this value as needed.
> 
> If you followed along with the [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), then you should be able to skip this step if the MongoDB server from that guide is already running. You can confirm this by checking that you can reach `http://localhost:27017` on your local machine.

Start the MongoDB server in a separate terminal:

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

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
npm run seed
```

#### Passo 4: Avviare l'applicazione client freeCodeCamp e il server API

You can now start up the API server and the client applications.

```console
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `npm run seed:certified-user` will log you out, and you will have to sign in again.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md)

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| comando           | descrizione                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| `npm ci`          | Installa / reinstalla tutte le dipendenze e avvia i diversi servizi.     |
| `npm run seed`    | Analizza tutti i file di markdown della sfida e li inserisce in MongoDB. |
| `npm run develop` | Avvia il server API freeCodeCamp e le applicazioni client.               |
| `npm run clean`   | Uninstalls all dependencies and cleans up caches.                        |
