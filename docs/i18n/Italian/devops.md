# Operazioni sviluppatore su freeCodeCamp.org

Questa guida ti aiuterà a capire il nostro stack di infrastrutture e come gestiamo le nostre piattaforme. Anche se questa guida non ha dettagli esaustivi per tutte le operazioni, potrebbe essere utilizzato come riferimento per la vostra comprensione dei sistemi.

Facciamo sapere, se avete feedback o domande, e saremo felici di chiarire.

## Come costruiamo, testiamo e distribuiamo il codebase?

Questo repository è continuamente costruito, testato e distribuito su **insiemi separati di infrastrutture (Servers, Databases, CDN, ecc.)**.

Si tratta di tre fasi da seguire in sequenza:

1. Le nuove modifiche (correzioni e funzionalità) sono unite nel nostro ramo di sviluppo primario (`master`) tramite richieste di pull.
2. Queste modifiche sono eseguite attraverso una serie di test automatizzati.
3. Una volta che i test passano, rilasciamo i cambiamenti (o aggiornarli se necessario) alle distribuzioni sulla nostra infrastruttura.

#### Costruire il codebase - Mapping Git Branches to Deployments.

Tipicamente, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (il ramo di sviluppo predefinito) è unito nel ramo [`produzione-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) una volta al giorno e viene rilasciato in un'infrastruttura isolata.

Questa è una release intermedia per i nostri sviluppatori e collaboratori volontari. E 'anche noto come il nostro "staging" o "beta" rilascio.

È identico al nostro ambiente di produzione live a `freeCodeCamp.org`, diverso da quello che utilizza un set separato di database, server, web-proxies, ecc. Questo isolamento ci permette di testare lo sviluppo continuo e le caratteristiche in una "produzione" come scenario, senza influenzare gli utenti regolari delle principali piattaforme di freeCodeCamp.org. Questo isolamento ci permette di testare lo sviluppo continuo e le caratteristiche in una "produzione" come scenario, senza influenzare gli utenti regolari delle principali piattaforme di freeCodeCamp.org.

Una volta che il team di sviluppatori [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) è soddisfatto dei cambiamenti sulla piattaforma di stadio, questi cambiamenti vengono spostati ogni pochi giorni nel ramo [`della produzione-corrente`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current).

Questa è la versione finale che sposta le modifiche alle nostre piattaforme di produzione su freeCodeCamp.org.

#### Testare le modifiche - Integrazione e Test di accettazione dell'utente.

Adottiamo vari livelli di integrazione e test di accettazione per verificare la qualità del codice. Tutti i nostri test sono effettuati attraverso software come [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) e [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Abbiamo test unitari per testare le nostre soluzioni di sfida, API server e interfacce utente client. Questi ci aiutano a testare l'integrazione tra i diversi componenti.

> [!NOTA] Siamo anche in fase di scrittura di test utente finale che aiuterà a replicare scenari del mondo reale come l'aggiornamento di una e-mail o una chiamata all'API o servizi di terze parti.

Insieme questi test aiutano a evitare che i problemi si ripetano e assicurati di non introdurre un bug mentre si lavora su un altro bug o una funzione.

#### Deploying Changes - Pushing changes to servers.

Abbiamo configurato un software di consegna continua per inviare modifiche ai nostri server di sviluppo e produzione.

Una volta che le modifiche sono spinte ai rami di rilascio protetti, una pipeline di build viene attivata automaticamente per il ramo. Le condotte di costruzione sono responsabili della costruzione di manufatti e di conservarli in un deposito frigorifero per un uso successivo.

La pipeline di build continua ad attivare una corrispondente pipeline di rilascio se completa un'esecuzione riuscita. Le pipeline di rilascio sono responsabili della raccolta degli artefatti di costruzione, spostandoli sui server e andando dal vivo.

Lo stato delle build e delle release sono [disponibili qui](#build-test-and-deployment-status).

## Attivando una costruzione, un test e una distribuzione.

Attualmente, solo i membri del team di sviluppo possono spingere ai rami di produzione. Le modifiche alle filiali `production-*` possono atterrare solo tramite la fusione veloce a [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTA] Nei prossimi giorni miglioreremmo questo flusso da fare tramite pull-requests, per una migliore gestione degli accessi e trasparenza.

### Invio delle modifiche alle applicazioni di stadio.

1. Configurare correttamente i tuoi remoti.

   ```sh
   git remote -v
   ```

   **Risultati:**

   ```
   origin git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Assicurati che il tuo ramo `master` sia incontaminato e sincronizzato con quello a monte.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Controllare che la Travis CI stia passando sul ramo `master` per a monte.

   I [test di integrazione continua](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) dovrebbero essere verdi e PASSING per la sezione `master`.

    <details> <summary> Controllo dello stato su Travis CI (screenshot) </summary>
      <br>
      ![Controlla lo stato di compilazione su Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Se questo non funziona, dovresti fermarti e investigare gli errori.

4. Confermare di essere in grado di costruire il repository localmente.

   ```
   npm run clean-and-develop
   ```

5. Sposta le modifiche da `master` a `production-staging` tramite una fusione veloce in avanti

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   > [!NOTA] Non sarai in grado di forzare il push e se hai riscritto la cronologia in ogni caso questi comandi si erreranno.
   > 
   > Se lo fanno, si può aver fatto qualcosa in modo errato e si dovrebbe solo ricominciare da capo.

I passaggi precedenti attiveranno automaticamente un'esecuzione sulla pipeline di generazione per il ramo `production-staging`. Una volta completata la generazione, gli artefatti vengono salvati come file `.zip` in un archivio frigorifero da recuperare e utilizzare in seguito.

La pipeline di rilascio viene attivata automaticamente quando un nuovo artefatto è disponibile dalla pipeline di generazione connessa. Per le piattaforme di staging questo processo non comporta l'approvazione manuale e gli artefatti vengono spinti al client CDN e server API.

> :Stime] Tipicamente la build run impiega ~20-25 minuti per completare seguita dalla release run che impiega ~15-20 minuti per il client, e ~5-10 minuti per l'API di essere disponibile dal vivo. Dal push del codice per essere in diretta sulle piattaforme di staging l'intero processo richiede **~ 35-45 minuti** in totale.

### Inviare le modifiche alle applicazioni di produzione.

Il processo è per lo più lo stesso delle piattaforme di stadio, con alcuni controlli aggiuntivi in atto. Questo è solo per essere sicuri, non rompiamo nulla su freeCodeCamp.org che può vedere centinaia di utenti che lo utilizzano in qualsiasi momento.

| NON eseguire questi comandi a meno che non sia stato verificato che tutto funziona sulla piattaforma di stadio. Non si dovrebbe bypassare o saltare alcun test di staging prima di procedere ulteriormente. |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                             |


1. Assicurati che il tuo ramo `production-staging` sia incontaminato e sincronizzato con il ramo upstream.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Sposta le modifiche da `production-staging` a `production-current` tramite una fusione veloce

   ```
   git checkout production-current
   git merge production-staging
   git push upstream
   ```

   > [!NOTA] Non sarai in grado di forzare il push e se hai riscritto la cronologia in ogni caso questi comandi si erreranno.
   > 
   > Se lo fanno, si può aver fatto qualcosa in modo errato e si dovrebbe solo ricominciare da capo.

I passaggi precedenti attiveranno automaticamente un'esecuzione sulla pipeline di generazione per il ramo `produzione-corrente`. Una volta che un artefatto di build è pronto, attiverà una corsa sulla pipeline di rilascio.

> :Stime] Tipicamente la build run richiede ~20-25 minuti per completare.

**Misure supplementari per l'azione del personale**

Una release run viene attivata, i membri del team dello staff dello sviluppatore riceveranno un'e-mail di intervento manuale automatizzata. Possono _approvare_ o _rifiutare_ l'esecuzione del rilascio.

Se le modifiche funzionano bene e sono state testate sulla piattaforma di stadio, allora può essere approvato. L’approvazione deve essere rilasciata entro 4 ore dall’attivazione del rilascio prima di essere respinta automaticamente. Uno staff può riattivare il rilascio manualmente per le corse rifiutate, o attendere il prossimo ciclo di rilascio.

Per uso del personale:

| Controlla la tua email per un link diretto o [vai alla dashboard di rilascio](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) dopo che la build run è completata. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                 |


Una volta che uno dei membri dello staff approva un rilascio, la pipeline spingerà le modifiche dal vivo ai server CDN e API di produzione di freeCodeCamp.org. Di solito prendono ~15-20 minuti per il cliente, e ~5 minuti per i server API per essere disponibili dal vivo.

> label:Estimates] L'esecuzione del rilascio richiede tipicamente ~15-20 minuti per ogni istanza client e ~5-10 minuti per ogni istanza API per essere disponibile dal vivo. Dal codice push per essere in diretta sulle piattaforme di produzione l'intero processo richiede **~ 90-120 minuti** in totale (senza contare il tempo di attesa per l'approvazione del personale).

## Stato di compilazione, test e distribuzione

Ecco lo stato attuale di test, build e deployment del codebase.

| Tipo                 | Ramo                                                                                          | Stato                                                                                                                                                                                                                                              | Dashboard                                                                                      |
|:-------------------- |:--------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------- |
| Ci Prove             | [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                          | ![Stato Build Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Vai alla dashboard di stato](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Ci Prove             | [`produzione-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | ![Stato Build Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Vai alla dashboard di stato](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Costruisci Pipeline  | [`produzione-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | [![Stato Build](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Vai alla dashboard di stato](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Gasdotto Di Rilascio | [`produzione-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  |                                                                                                                                                                                                                                                    | [Vai alla dashboard di stato](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| Ci Prove             | [`produzione-corrente`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Stato Build Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Vai alla dashboard di stato](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Costruisci Pipeline  | [`produzione-corrente`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Stato Build](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Vai alla dashboard di stato](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Gasdotto Di Rilascio | [`produzione-corrente`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                    | [Vai alla dashboard di stato](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Accesso anticipato e beta test

Vi diamo il benvenuto a testare queste versioni in una modalità **"beta testing"** e ottenere l'accesso anticipato alle funzionalità imminenti delle piattaforme. A volte queste funzionalità/modifiche sono indicate come **successivo, beta, staging,** ecc. in modo intercambiabile.

I tuoi contributi tramite feedback e segnalazioni di segnalazioni ci aiuteranno a realizzare le piattaforme di produzione su `freeCodeCamp. rg` more **resilient**, **consistent** and **stable** for everyone.

Vi ringraziamo per aver segnalato i bug che incontrate e aiutate a migliorare il freeCodeCamp.org. Sei roccioso!

### Identificare la prossima versione delle piattaforme

Attualmente una versione beta test pubblica è disponibile al seguente indirizzo:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTA] Il nome del dominio è diverso da **`freeCodeCamp.org`**. Questo è intenzionale per prevenire l'indicizzazione dei motori di ricerca ed evitare confusione per gli utenti regolari della piattaforma.

### Identificare la versione attuale delle piattaforme

**La versione attuale della piattaforma è sempre disponibile su [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Il dev-team unisce i cambiamenti dal branch `production-staging` a `production-current` quando cambiano il rilascio. Il commit superiore dovrebbe essere quello che si vede dal vivo sul sito.

È possibile identificare la versione esatta distribuita visitando i registri di compilazione e distribuzione disponibili nella sezione stato. In alternativa puoi anche inserirci nella chat room [dei collaboratori](https://gitter.im/FreeCodeCamp/Contributors) per una conferma.

### Limitazioni Noto

Ci sono alcune limitazioni e compromessi noti quando si utilizza la versione beta della piattaforma.

- #### Tutti i dati / progressi personali su queste piattaforme beta `NON saranno salvati o riportati` alla produzione.

  **Gli utenti nella versione beta avranno un account separato dalla produzione.** La versione beta utilizza un database fisicamente separato dalla produzione. Questo ci dà la capacità di prevenire qualsiasi perdita accidentale di dati o modifiche. Il team di dev può eliminare il database su questa versione beta se necessario.

- #### Non ci sono garanzie sull'uptime e l'affidabilità delle piattaforme beta.

  La diffusione dovrebbe essere frequente e in iterazioni rapide, talvolta più volte al giorno. Di conseguenza ci saranno tempi di inattività inaspettati a volte o funzionalità rotte sulla versione beta.

- #### Non inviare utenti regolari a questo sito come misura per confermare una correzione

  Il sito beta è ed è sempre stato quello di aumentare lo sviluppo locale e testing, nient'altro. Non è una promessa di ciò che sta arrivando, ma un assaggio di ciò che si sta lavorando.

- #### La pagina di firma può sembrare diversa dalla produzione

   Usiamo un inquilino di prova per freecodecamp.dev su Auth0, e quindi non abbiamo la possibilità di impostare un dominio personalizzato. Questo lo rende in modo che tutti i callback reindirizzati e la pagina di login appaiano su un dominio predefinito come: `https://freecodecamp-dev.auth0.com/`. Questo non influenza la funzionalità è vicina alla produzione come possiamo ottenere.

## Segnalazione delle questioni e mantenimento del feedback

Si prega di aprire nuovi problemi per le discussioni e la segnalazione di bug. Puoi etichettarli come **[`release: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** per triage.

Puoi inviare un'email a `dev[at]freecodecamp.org` se hai domande. Come sempre tutte le vulnerabilità di sicurezza dovrebbero essere segnalate a `security[at]freecodecamp.org` invece del tracker pubblico e del forum.
