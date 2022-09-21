# Manuale di DevOps

Questa guida ti aiuterà a capire lo stack della nostra infrastruttura e come gestiamo le nostre piattaforme. Anche se questa guida non ha dettagli esaustivi per tutte le operazioni, può essere utilizzata come riferimento per la comprensione dei sistemi.

Facci sapere se hai commenti o domande, e saremo felici di darti ulteriori chiarimenti.

# Manuale di volo - Deployment del codice

Questo repository è continuamente sottoposto a build, test e deployment su **set separati di infrastrutture (Servers, Databases, CDN, ecc.)**.

Questo prevede tre fasi da seguire in sequenza:

1. I nuovi cambiamenti (sia risoluzioni di bug che nuove caratteristiche) sono aggiunti al branch principale di sviluppo (`main`) tramite pull requests.
2. Queste modifiche sono testate da una serie di test automatizzati.
3. Una volta che i test sono superati, rilasciamo le modifiche (o aggiornamenti se necessario) alle distribuzioni sulla nostra infrastruttura.

#### Costruire il codebase - Mappare i branch di Git alle distribuzioni.

In genere, si fa un merge di [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (il ramo di sviluppo di default) nel branch [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) una volta al giorno, e questo è rilasciato in una infrastruttura isolata.

Questa è una release intermedia per i nostri sviluppatori e collaboratori volontari. È anche noto come il nostro rilascio di "staging" o "beta".

È identico al nostro ambiente di produzione live su `freeCodeCamp.org`, a parte il fatto che utilizza un set separato di database, server, web-proxies, ecc. Questo isolamento ci permette di testare lo sviluppo continuo e le caratteristiche in uno scenario come quello di "produzione", senza influenzare gli utenti regolari delle principali piattaforme di freeCodeCamp.org.

Una volta che il team di sviluppo [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) è soddisfatto dei cambiamenti nella piattaforma di staging, questi cambiamenti sono spostati ogni pochi giorni al branch [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current).

Questa è la versione finale che sposta le modifiche alle nostre piattaforme di produzione su freeCodeCamp.org.

#### Testare le modifiche - Integrazione e Test di accettazione dell'utente.

Adottiamo vari livelli di integrazione e test di accettazione per verificare la qualità del codice. Tutti i nostri test sono fatti con software come [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) e [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Abbiamo test unitari per testare le nostre soluzioni delle sfide, API dei server e interfacce utente del client. Questi ci aiutano a testare l'integrazione tra i diversi componenti.

> [!NOTE] Siamo anche in fase di scrittura di test utente finale che ci aiuteranno a replicare scenari del mondo reale come l'aggiornamento di una e-mail o una chiamata all'API o a servizi di terze parti.

Tutti questi test aiutano a evitare che i problemi si ripetano e assicurano di non introdurre dei bug mentre si lavora su un altro bug o una nuova funzionalità.

#### Deploy delle modifiche - Push delle modifiche ai server.

Abbiamo configurato un software di consegna continua per inviare modifiche ai nostri server di sviluppo e produzione.

Una volta che le modifiche sono inviate ai branch di rilascio protetti, una pipeline di build viene attivata automaticamente per il branch. Le pipeline di build sono responsabili della compilazione degli artefatti e di conservarli in un deposito di stoccaggio per un uso successivo.

La pipeline di build continua ad attivare una corrispondente pipeline di rilascio se completa un'esecuzione riuscita. Le pipeline di rilascio sono responsabili della raccolta degli artefatti di build, e di spostarli sui server di produzione.

Lo stato delle build e delle release è [disponibile qui](#stato-di-build-test-e-distribuzione).

## Avviare un build, test e deploy

Attualmente, solo i membri del team di sviluppo possono fare il push sui branch di produzione. Le modifiche ai branch `production-*` possono avvenire solo tramite il merge fast-forward all'[`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] Nei prossimi giorni miglioreremmo questo flusso in modo che avvenga tramite pull-requests, per una migliore gestione degli accessi e della trasparenza.

### Invio delle modifiche alle applicazioni in staging.

1. Configura correttamente i tuoi remotes.

   ```sh
   git remote -v
   ```

   **Risultati:**

   ```
   origin   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin   git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Assicurati che il tuo branch `main` sia pulito e sincronizzato con la fonte (upstream).

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. Controlla che i test GitHub CI siano superati nel branch `main` dell'upstream.

   I test di [integrazione continua](https://github.com/freeCodeCamp/freeCodeCamp/actions) dovrebbero essere verdi ed essere superati per il branch `main`. Clicca sulla spunta verde vicino all'hash del commit guardando il codice del branch `main`.

    <details> <summary> Controllare lo stato sulle GitHub Actions (screenshot) </summary>
      <br>
      ![Controllare lo stato sulle GitHub Actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   Se questo fallisce, dovresti fermarti e investigare gli errori.

4. Conferma di essere in grado di fare il build del repository localmente.

   ```
   npm run clean-and-develop
   ```

5. Sposta cambiamenti da `main` a `prod-staging` con un merge fast-forward

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] Non sarai in grado di forzare il push e se hai riscritto la cronologia in ogni caso questi comandi restituiranno degli errori.
   > 
   > Se lo fanno, potresti aver fatto qualcosa in modo errato e dovresti solo ricominciare da capo.

Gli step precedenti attiveranno automaticamente l'esecuzione della pipeline di build per il ramo `prod-staging`. Una volta completata la build, gli artefatti vengono salvati come file `.zip` in un archivio per essere recuperati e utilizzati in seguito.

La pipeline di rilascio viene attivata automaticamente quando un nuovo artefatto è disponibile dalla pipeline di build connessa. Per le piattaforme di staging questo processo non comporta l'approvazione manuale e gli artefatti vengono inviati alla CDN client e ai server API.

### Inviare le modifiche alle applicazioni in produzione.

Il processo è per lo più lo stesso delle piattaforme di staging, con la messa in atto di alcuni controlli aggiuntivi. Questo è solo per essere sicuri: non possiamo permetterci di rompere nulla su freeCodeCamp.org dato che può vedere centinaia di utenti che lo utilizzano in qualsiasi momento.

| NON eseguire questi comandi a meno che non sia stato verificato che tutto funziona sulla piattaforma di staging. Non dovresti bypassare o saltare alcun test di staging prima di procedere ulteriormente. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                           |

1. Assicurati che il tuo ramo `prod-staging` sia pulito e sincronizzato con la fonte.

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. Sposta cambiamenti da `prod-staging` a `prod-current` con un merge fast-forward

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] Non sarai in grado di forzare il push e se hai riscritto la cronologia in ogni caso questi comandi restituiranno degli errori.
   > 
   > Se lo fanno, potresti aver fatto qualcosa in modo errato e dovresti solo ricominciare da capo.

Gli step precedenti attiveranno automaticamente l'esecuzione della pipeline di build per il ramo `prod-current`. Una volta che un artefatto di build è pronto, attiverà un avvio della pipeline di rilascio.

**Misure supplementari per le azioni dello Staff**

Una volta che viene avviato un processo di rilascio, i membri del team dello staff di sviluppo riceveranno un'e-mail automatizzata di intervento manuale. Possono _approvare_ o _rifiutare_ l'esecuzione del rilascio.

Se le modifiche funzionano bene e sono state testate sulla piattaforma di staging, allora possono essere approvate. L’approvazione deve essere rilasciata entro 4 ore dall’attivazione del rilascio prima di essere respinta automaticamente. Un membro dello staff può riattivare il rilascio manualmente per gli avvi rifiutati, o attendere il prossimo ciclo di rilascio.

Per uso dello staff:

| Controlla la tua email per un link diretto o [vai alla dashboard di rilascio](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) dopo che la build è completata. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                             |

Una volta che uno dei membri dello staff approva una release, la pipeline porterà i cambiamenti live ai CDN di produzione e ai server API di freecodecamp.org.

## Stato di build, test e distribuzione

Ecco lo stato attuale di test, build e deployment del codebase.

| Ramo                                                                             | Test unitari                                                                                                                                                                                                                     | Test di integrazione                                                                                                                                                                                                     | Build & rilasci                                                                                                                   |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (sperimentale, futuro)                                               | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                        | -                                                                                                                                 |

## Early access e beta test

Ti diamo il benvenuto al test di queste versioni in modalità **"public beta testing"** e all'accesso anticipato alle funzionalità imminenti delle piattaforme. A volte queste funzionalità/modifiche sono indicate come **next, beta, staging,** ecc. in modo intercambiabile.

I tuoi contributi tramite feedback e segnalazioni di problemi ci aiuteranno a rendere le piattaforme di produzione su `freeCodeCamp.org` più **robuste**, **consistenti** e **stabili** per tutti.

Ti ringraziamo se vorrai segnalare i bug che incontrerai aiutandoci a migliorare freeCodeCamp.org. Sei un grande!

### Identificare la prossima versione delle piattaforme

Attualmente una versione beta test pubblica è disponibile al seguente indirizzo:

| Applicazione | Lingua   | URL                                      |
|:------------ |:-------- |:---------------------------------------- |
| Learn        | Inglese  | <https://www.freecodecamp.dev>           |
|              | Spagnolo | <https://www.freecodecamp.dev/espanol>   |
|              | Cinese   | <https://chinese.freecodecamp.dev>       |
| News         | Inglese  | <https://www.freecodecamp.dev/news>      |
| Forum        | Inglese  | <https://forum.freecodecamp.dev>         |
|              | Cinese   | <https://chinese.freecodecamp.dev/forum> |
| API          | -        | `https://api.freecodecamp.dev`           |

> [!NOTE] Il nome del dominio è diverso da **`freeCodeCamp.org`**. Questo è intenzionale per prevenire l'indicizzazione dai motori di ricerca e creare confusione per i normali utenti della piattaforma.
> 
> La lista precedende non è esaustiva di tutte le applicazioni che offriamo. E non tutte le varie lingue sono rilasciate in staging per risparmiare risorse.

### Identificare la versione attuale delle piattaforme

**La versione attuale della piattaforma è sempre disponibile su [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Il team di sviluppo fa un merge dei cambiamenti dal ramo `prod-staging` a `prod-current` quando rilascia dei cambiamenti. Il commit superiore dovrebbe essere quello che si vede live sul sito.

È possibile identificare la versione esatta distribuita visitando i registri di compilazione e distribuzione disponibili nella sezione stato. In alternativa puoi scriverci nella [chat room dei contributori](https://discord.gg/PRyKn3Vbay) per una conferma.

### Limitazioni note

Ci sono alcune limitazioni e compromessi noti quando si utilizza la versione beta della piattaforma.

- #### Tutti i dati / progressi personali su queste piattaforme beta NON saranno salvati o importati in produzione.

  **Gli utenti nella versione beta avranno un account separato dalla produzione.** La versione beta utilizza un database fisicamente separato dalla produzione. Questo ci dà la possibilità di prevenire qualsiasi perdita accidentale di dati o modifiche. Il team di sviluppo può eliminare il database su questa versione beta se necessario.

- #### Non ci sono garanzie sull'uptime e l'affidabilità delle piattaforme beta.

  Il deploy dovrebbe essere frequente e in iterazioni rapide, talvolta più volte al giorno. Di conseguenza a volte ci saranno tempi di inattività inattesi o funzionalità guaste sulla versione beta.

- #### Non inviare utenti regolari a questo sito come misura per confermare una correzione

  Il sito beta ha il solo scopo di supportare lo sviluppo locale e il testing, nient'altro. Non è una promessa di ciò che sta arrivando, ma un assaggio di ciò a cui si sta lavorando.

- #### La pagina di iscrizione può essere diversa da quella di produzione

  Usiamo un test tenant per freeCodeCamp.dev su Auth0, e quindi non abbiamo l'abilità di impostare un dominio personalizzato. Questo fa sì che tutte le callback di reindirizzamento e la pagina di login appaiano su un dominio predefinito come: `https://freecodecamp-dev.auth0.com/`. Questo non ha effetto sulle funzionalità ed è quanto più vicino possiamo arrivare alla produzione.

## Segnalazione di problemi e invio di feedback

Per favore apri nuove issue per discutere e segnalare bug.

Puoi inviare un'email a `dev[at]freecodecamp.org` se hai domande. Come sempre tutte le vulnerabilità di sicurezza dovrebbero essere segnalate a `security[at]freecodecamp.org` invece che al tracker pubblico o nel forum.

# Manuale di volo - Manutenzione del sever

> [!WARNING]
> 
> 1. Questa guida è rivolta solo ai **membri dello staff di freeCodeCamp**.
> 2. Queste istruzioni non devono essere considerate esaustive, per favore usa cautela.

Come membro dello staff, potrebbe esserti stato dato accesso ai nostri fornitori di servizi cloud come Azure, Digital Ocean, ecc.

Ecco alcuni utili comandi che puoi usare per lavorare sulle Virtual Machine (VM), per fare manutenzione o faccende generali.

## Ottieni una lista delle VM

> [!NOTE] Anche se puoi già avere avere accesso SSH alle VM, questo da solo non ti permetterà di avere l'elenco delle VM a meno che non ti sia stato concesso l'accesso ai portali cloud.

### Azure

Installa Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Una volta sola) Installa su macOS con [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Una volta sola) Login:**

```
az login
```

> **Ottieni una lista dei nomi delle VM e degli indirizzi IP:**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Installa Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One volta sola) Installa su macOS con [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Una Volta) Login:**

Autenticazione e cambio di contesto: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Ottieni una lista dei nomi delle VM e degli indirizzi IP:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Creare nuove risorse

Stiamo lavorando per creare il nostro setup IaC, e mentre stiamo lavorando su quello puoi usare il portale di Azure o il CLI di Azure per creare nuove macchine virtuali e altre risorse.

> [!TIP] Non importa cosa usi per creare nuove risorse, abbiamo alcuni [utili file di configurazione cloud-init](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) per aiutarti a fare provisioning di base, come installare docker o aggiungere le chiavi SSH, ecc.

## Mantieni le VM aggiornate

Dovresti tenere aggiornate le VM eseguendo update e upgrade. Questo assicurerà che la macchina virtuale sia patchata con le ultime correzioni di sicurezza.

> [!WARNING] Prima di eseguire questi comandi:
> 
> - Assicurati che il provisioning della VM sia stato completato e che non ci siano step post-install in esecuzione.
> - Se stai aggiornando pacchetti su una VM che sta già servendo una applicazione, assicurati che l'app sia stata fermata e salvata. L'aggiornamento dei pacchetti causerà picchi di utilizzo di banda, memoria e/o CPU portando a malfunzionamenti di applicazioni in esecuzione.

Aggiorna informazioni sul pacchetto

```console
sudo apt update
```

Aggiorna i pacchetti installati

```console
sudo apt upgrade -y
```

Pulisci i pacchetti inutilizzati

```console
sudo apt autoremove -y
```

## Lavora sui server Web (Proxy)

Stiamo eseguendo istanze di carico bilanciate (Azure Load Balancer) per i nostri server web. Questi server eseguono NGINX che inverte il proxy di tutto il traffico a freeCodeCamp.org da varie applicazioni in esecuzione sulle proprie infrastrutture.

La configurazione di NGINX è disponibile su [questo repository](https://github.com/freeCodeCamp/nginx-config).

### Prima Installazione

Provisioning delle VM con il codice

1. Installa NGINX e configuralo dal repository.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/nginx-config nginx

   cd /etc/nginx
   ```

2. Installa i certificati di origine di Cloudfire e la configurazione dell'applicazione di upstream.

   Ottieni il certificati di origine di Cloudflare dallo storage sicuro e installa nelle posizioni richieste.

   **O**

   Sposta i certificati esistenti:

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Aggiorna le configurazioni di upstream:

   ```console
   vi configs/upstreams.conf
   ```

   Aggiungi/aggiorna gli indirizzi IP di sorgente/origine dell'applicazione.

3. Fai il setup di network e firewall.

   Configura i firewall di Azure e `ufw` come necessario per indirizzi di origine d'ingresso.

4. Aggiungi la VM al pool del load balancer del backend.

   Configura e aggiungi regole al load balancer se necessario. Potresti anche aver bisogno di aggiungere le VM al pool del load balancer del backend.

### Aggiornamento Istanze (Manutenzione)

1. Controlla lo stato dei servizi NGINX usando i comandi seguenti:

   ```console
   sudo systemctl status nginx
   ```

2. I log e il monitoraggio dei server sono disponibili su:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com'), l'attuale dashboard per il monitoraggio. Stiamo lavorando a metriche più granulari per una osservabilità migliore

### Aggiornamento Istanze (Manutenzione)

Le modifiche di configurazione alle nostre istanze NGINX sono mantenute su GitHub, queste dovrebbero essere distribuite su ogni istanza in questo modo:

1. SSH nell'istanza e inserisci sudo

```console
sudo su
```

2. Ottieni l'ultimo codice di configurazione.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. Prova e ricarica la configurazione [con i segnali](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

## Lavora sulle istanze API

1. Installa strumenti di generazione per i binari di node (`node-gyp`) ecc.

```console
sudo apt install build-essential
```

### Prima Installazione

Fare il provisioning delle VM con il codice

1. Installare Node LTS.

2. Aggiorna `npm` e installa PM2 e fai il setup di `logrotate` e avvio all'accensione

   ```console
   npm i -g npm@8
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clona freeCodeCamp, setup env e chiavi.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout prod-current # or any other branch to be deployed
   ```

4. Crea il `.env` dalla memorizzazione sicura delle credenziali.

5. Crea `google-credentials.json` dall'archivio sicuro delle credenziali.

6. Installa dipendenze

   ```console
   npm ci
   ```

7. Fai il build del server

   ```console
   npm run create:config && npm run build:curriculum && npm run build:server
   ```

8. Avvia le istanze

   ```console
   cd api-server
   pm2 reload ecosystem.config.js
   ```

### Log e monitoraggio

```console
pm2 logs
```

```console
pm2 monit
```

### Aggiornamento Istanze (Manutenzione)

Ogni tanto devono essere fatti dei deployment dei cambiamenti al codice alle istanze delle API. Può essere un update continuo o un update manuale. Il secondo è essenziane quando si cambiando dipendenze o si aggiungono variabili d'ambiente.

> [!ATTENTION] Le pipeline automatizzate al momento non gestiscono l'aggiornamento delle dipendenze. Dobbiamo fare un aggiornamento manuale prima dell'avvio di qualsiasi pipeline di deployment.

#### 1. Aggiornamenti manuali - Usati per aggiornare dipendenze, variabili env.

1. Ferma tutte le istanze

```console
pm2 stop all
```

2. Installa dipendenze

```console
npm ci
```

3. Fai il build del server

```console
npm run create:config && npm run build:curriculum && npm run build:server
```

4. Avvia le istanze

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Aggiornamenti continui - usati per cambiamenti logici al codice.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Gli update continui a codice e logica sono gestiti dalle pipeline. Non dovresti aver bisogno di eseguire questi comandi. Sono qui per documentazione.

## Lavora sulle istanze del client

1. Installa strumenti di generazione per i binari di node (`node-gyp`) ecc.

```console
sudo apt install build-essential
```

### Prima Installazione

Fare provisioning delle VM con il codice

1. Installare Node LTS.

2. Aggiorna `npm` e installa PM2 e fai il setup di `logrotate` e avvio all'accensione

   ```console
   npm i -g npm@8
   npm i -g pm2@4
   npm install -g serve@13
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clona la configurazione del client, l'env di configurazione e le chiavi.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Avvia le istanze placeholder per il web client, queste verranno aggiornate con artefatti dalla pipeline Azure.

   > Todo: questo setup deve essere spostato a S3 o Azure Blob storage 
   > 
   > ```console
   >    echo "serve -c ../serve.json -p 50505 www" > client-start-primary.sh
   >    chmod +x client-start-primary.sh
   >    pm2 delete client-primary
   >    pm2 start  ./client-start-primary.sh --name client-primary
   >    echo "serve -c ../serve.json -p 52525 www" > client-start-secondary.sh
   >    chmod +x client-start-secondary.sh
   >    pm2 delete client-secondary
   >    pm2 start  ./client-start-secondary.sh --name client-secondary
   > ```

### Aggiornamento Istanze (Manutenzione)

```console
pm2 logs
```

```console
pm2 monit
```

### Aggiornamento Istanze (Manutenzione)

Ogni tanto devono essere fatti dei deployment dei cambiamenti al codice alle istanze delle API. Può essere un update continuo o un update manuale. Il secondo è essenziane quando si cambiando dipendenze o si aggiungono variabili ambientali.

> [!ATTENTION] Le pipeline automatizzate al momento non gestiscono l'aggiornamento delle dipendenze. Dobbiamo fare un aggiornamento manuale prima di ogni esecuzione della pipeline di deployment.

#### 1. Aggiornamenti manuali - Usati per aggiornare dipendenze, variabili env.

1. Ferma tutte le istanze

   ```console
   pm2 stop all
   ```

2. Installa o aggiorna le dipendenze

3. Avvia le istanze

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Aggiornamenti continui - usati per cambiamenti logici al codice.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Gli update continui a codice e logica sono gestiti dalle pipeline. Non dovresti aver bisogno di eseguire questi comandi. Sono qui per documentazione.

## Lavorare sui server di chat

I nostri chat server sono disponibili con una configuratione HA [raccomandata nella documentazione di Rocket.Chat](https://docs.rocket.chat/installation/docker-containers/high-availability-install). Il file `docker-compose` per questo è [disponibile qui](https://github.com/freeCodeCamp/chat-config).

Avviamo istanze ridondanti di NGINX che sono loro stesse con bilanciamento di carico (Azure Load Balancer) sul cluster di Rocket.Chat. I file di configurazione NGINX sono [disponibili qui](https://github.com/freeCodeCamp/chat-nginx-config).

### Prima installazione

Fare provisioning delle VM con il codice

**Cluster NGINX:**

1. Installa NGINX e configuralo dal repository.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/chat-nginx-config nginx

   cd /etc/nginx
   ```

2. Installa i certificati di origine di Cloudflare e la configurazione dell'applicazione di upstream.

   Ottieni il certificati di origine di Cloudflare dallo storage sicuro e installa nelle posizioni richieste.

   **O**

   Sposta i certificati esistenti:

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Aggiorna le configurazioni di upstream:

   ```console
   vi configs/upstreams.conf
   ```

   Aggiungi/aggiorna gli indirizzi IP source/origin dell'applicazione.

3. Fai il setup di network e firewall.

   Configura i firewall di Azure e `ufw` come necessario per indirizzi di origine d'ingresso.

4. Aggiungi la VM al pool del load balancer del backend.

   Configura e aggiungi regole al load balancer se necessario. Potresti anche aver bisogno di aggiungere le VM al pool del load balancer del backend.

**Cluster Docker:**

1. Installa Docker e configura dal repository

   ```console
   git clone https://github.com/freeCodeCamp/chat-config.git chat
   cd chat
   ```

2. Configura le variabili d'ambiente (env) richieste e gli indirizzi IP delle istanze.

3. Avvia il server rocket-chat

   ```console
   docker-compose config
   docker-compose up -d
   ```

### Logging e monitoraggio

1. Controlla lo stato dei servizi NGINX usando i comandi seguenti:

   ```console
   sudo systemctl status nginx
   ```

2. Controlla lo stato delle istanze docker in esecuzione con:

   ```console
   docker ps
   ```

### Aggiornamento istanze (Manutenzione)

**Cluster NGINX:**

Le modifiche di configurazione alle nostre istanze NGINX sono mantenute su GitHub, queste dovrebbero essere distribuite su ogni istanza in questo modo:

1. SSH nell'istanza ed entra con sudo

   ```console
   sudo su
   ```

2. Ottieni il codice di configurazione più recente.

   ```console
   cd /etc/nginx
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Testa e ricarica la configurazione [con Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

   ```console
   nginx -t
   nginx -s reload
   ```

**Cluster Docker:**

1. SSH nell'istanza e naviga al percorso di configurazione della chat

   ```console
   cd ~/chat
   ```

2. Ottieni il codice di configurazione più recente.

   ```console
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Ottieni l'immagine docker più recente da Rocket.Chat

   ```console
   docker-compose pull
   ```

4. Aggiorna le istanze in esecuzione

   ```console
   docker-compose up -d
   ```

5. Verifica che le istanze siano in funzione

   ```console
   docker ps
   ```

6. Pulisci risorse estranee

   ```console
   docker system prune --volumes
   ```

   Output:

   ```console
   WARNING! This will remove:
     - all stopped containers
     - all networks not used by at least one container
     - all volumes not used by at least one container
     - all dangling images
     - all dangling build cache

   Are you sure you want to continue? [y/N] y
   ```

   Seleziona yes (y) per rimuovere tutto quello che non è in uso. Questo rimuoverà tutti i contenitori che sono stati arrestati, tutti i network e volumi che non sono utilizzati da almeno un container, e le cache di immagini e build scollegate.

## Lavorare sugli strumenti dei contributori

### Distribuire gli update

Fai ssh nella VM (hosted su Digital Ocean).

```console
cd tools
git pull origin master
npm ci
npm run build
pm2 restart contribute-app
```

## Aggiornare la versione di Node.js sulle VM

Visualizza le versioni installate di node & npm

```console
nvm -v
node -v
npm -v

nvm ls
```

Installa l'ultima versione di Node.js LTC, e reinstalla i pacchetti globali

```console
nvm install --lts --reinstall-packages-from=default
```

Verifica i pacchetti installati

```console
npm ls -g --depth=0
```

Dai l'alias di `default` alla versione corrente LTS di Node.js (bloccata all'ultima versione maggiore)

```console
nvm alias default 16
```

(Facoltativo) Disinstalla vecchie versioni

```console
nvm uninstall <version>
```

> [!ATTENTION] Per applicazioni client, lo script della shell non può essere fatto risorgere tra versioni di Node.js con `pm2 resurrect`. Fai il deploy dei processi da zero. Questo dovrebbe migliorare quando useremo un setup basato su docker.
> 
> Se stai usando PM2 per processi dovresti anche richiamare le applicazione e salvare la lista di processo per un recupero automatico al riavvio.

Ottieni le istruzioni/comandi di deinstallazione con il comando `unstartup` e usa l'output per rimuovere i servizi systemctl

```console
pm2 unstartup
```

Ottieni le istruzioni/comandi di installazione con il comando `startup` e usa l'output per aggiungere i servizi systemctl

```console
pm2 startup
```

Comandi veloci per PM2 per elencare, far ripartire processi salvati, ecc.

```console
pm2 ls
```

```console
pm2 resurrect
```

```console
pm2 save
```

```console
pm2 logs
```

## Installare e aggiornare Azure Pipeline Agent

Vedi: https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops e segui le istruzioni per arrestare, rimuovere e reinstallare gli agenti. Approssimativamente puoi seguire gli step elencati qui.

Avrai bisogno di un PAT, che puoi ottenere da: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Installare agenti su target di deployment

Vai su [Azure Devops](https://dev.azure.com/freeCodeCamp-org) e registra l'agente dall'inizio nei requisiti [deployment groups](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup).

> [!NOTE] Dovresti eseguire gli script nella home directory, e assicurati che nessun'altra directory `azagent` esista.

### Aggiornare gli agent

Attualmente aggiornare gli agent richiede che siano rimossi e riconfigurati. Questo è richiesto perché possano ottenere valori `PATH` e altre variabili d'ambiente di sistema. Dobbiame farlo per aggiornare Node.js sulle VM target di deployment.

1. Naviga e controlla lo status del servizio

   ```console
   cd ~/azagent
   sudo ./svc.sh status
   ```

2. Ferma il servizio

   ```console
   sudo ./svc.sh stop
   ```

3. Disinstalla il servizio

   ```console
   sudo ./svc.sh uninstall
   ```

4. Rimuovi l'agente dal pool della pipeline

   ```console
   ./config.sh remove
   ```

5. Rimuovi i file di config

   ```console
   cd ~
   rm -rf ~/azagent
   ```

Una volta completati gli step precedenti potrai ripetere gli stesi passi per installare l'agente.

# Manuale di volo - Email Blast

Usiamo uno [strumento CLI](https://github.com/freecodecamp/sendgrid-email-blast) per inviare la nostra newsletter settimanale. Per avviare e iniziare il processo:

1. Entra in DigitalOcean e avvia nuovi droplet sotto il progetto `Sendgrid`. Usa lo snapshot di Ubuntu Sendgrid con la data più recente. Questo viene pre-caricato con lo strumento CLI e lo script per ottenere le email dal database. Con il volume corrente, tre droplet sono sufficienti per mandare le email in un tempo decente.

2. Setta lo script per ottenere la lista delle email.

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   Avrai bisogno di sostituire i valori segnaposto nel file `.env` con le tue credenziali.

3. Esegui lo script.

   ```console
   node get-emails.js emails.csv
   ```

   Questo salverà la lista delle email in un file `emails.csv`.

4. Separa le email in più file a seconda del numero di droplet di cui hai bisogno. Questo è più facile da fare usando `scp` per copiare la lista in locale e usare il tuo editor di testi preferito per separarle in file multipli. Ogni file avrà bisogno del header `email,unsubscribeId`.

5. Spostati alla directory CLI con `cd /home/sendgrid-email-blast` e configura lo strumento [seguendo la documentazione](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md).

6. Esegui lo strumento per mandare le email, seguendo la [documentazione d'uso](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md).

7. Quando il email blast è completato, verifica che nessuna email abbia fallito prima di distruggere i droplet.

# Manuale di Volo - Aggiunta di istanze della pubblicazione per nuove lingue

### Modifiche al tema

Utilizziamo un [tema](https://github.com/freeCodeCamp/news-theme) personalizzato per la nostra pubblicazione. L'aggiunta delle seguenti modifiche al tema consente l'aggiunta di nuove lingue.

1. Includere una espressione `else if` per il nuovo [codice ISO della lingua](https://www.loc.gov/standards/iso639-2/php/code_list.php) in [`setup-local.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js)
2. Crea una cartella di configurazione iniziale duplicando la cartella [`assets/config/en`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) e cambiando il suo nome con il codice della nuova lingua. (`en` —> `es` per Spagnolo)
3. Dentro la nuova cartella, cambia i nomi delle variabili in `main.js` e `footer.js` con il codice della nuova lingua (`enMain` —> `esMain` per spagnolo)
4. Duplica [`locals/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) e rinominalo con il codice della nuova lingua.
5. In [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs), aggiungi gli script per i file config appena creati.
6. Aggiungi lo script `day.js` della lingua da [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) a [freecodecamp CDN](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale)

### Modifiche alla dashboard di Ghost

Cambia gli asset della pubblicazione andando alla dashboard di ghost > settings > general e caricando l'[icona](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png), il [logo](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png), e la [copertina](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png) della pubblicazione.
