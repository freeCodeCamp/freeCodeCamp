Questa pagina descrive come contribuire ai tutorial e progetti di freeCodeCamp che sono completati usando l'estensione di VS Code chiamata CodeRoad.

## Come funzionano i tutorial

I tutorial di freeCodeCamp che usano CodeRoad hanno ognuno il loro repo sotto l'organizzazione di GitHub freeCodeCamp. Il nome inizia sempre con `learn-`. Per esempio, `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`.

Ogni repo di un tutorial ha un branch principale `main` e un branch di versione, per esempio `v1.0.0`.

I due file principali sul branch `main` sono `TUTORIAL.md` e `coderoad.yaml`. `TUTORIAL.md` contiente tutte le istruzioni, suggerimenti, titoli, ecc, per il tutorial. `coderoad.yaml` contiene istruzioni per CodeRoad, tipo quali comandi eseguire e quando, quali file sorvegliare per cambiamenti e quale branch di versione usare per gli step.

Il branch " di versione" contiene i commit che vengono caricati per ogni step del tutorial. I messaggi di commit di questo branch devono essere specifici. Il primo commit deve avere come messaggio `INIT` e contiene tutti i file da caricare prima della prima lezione.

I seguenti messaggi di commit devono combaciare con il numero dello step in `TUTORIAL.md` dal branch `main`. Per esempio, il commit con messaggio `10.1` sarà caricato quando un utente raggiunge lo step `10.1`.

Per fare cambiamenti ai commit di un branch di versione, dovresti fare un rebase e cambiare i commit che vuoi cambiare. Questo riscrive la storia di Git, quindi non possiamo accettare PR a questo tipo di branch. Una volta che un branch di versione è sul repo di GitHub non deve mai cambiare.

> [!WARNING]
> 
> Non fare mai cambiamenti a un branch di versione che si trova su un repo di freeCodeCamp. Creane sempre uno nuovo

## Come contribuire

### Prerequisiti

Installa [CodeRoad CLI tools](https://www.npmjs.com/package/@coderoad/cli) con `npm install -g @coderoad/cli`.

Ci sono stati alcuni problemi con l'ultima versione. Se `coderoad --version` non funziona dopo aver installato, fai un downgrade a `0.7.0` con `npm install -g @coderoad/cli@0.7.0`.

### Lavorare su `main`

Queste istruzioni sono per PR che fanno solo piccoli cambiamenti su `main` a **lezioni esistenti**. Che consistono principalmente in errori di spelling e grammatica, suggerimenti, cambiamenti alle struzioni e aggiustamenti nel file `TUTORIAL.md`.

Per qualsiasi altra cosa, incluso aggiungere o cancellare lezioni, segui le istruzioni [per lavorare su un branch di versione](#working-on-version-branch). Avrai bisogno di creare un nuovo branch di versione per questo - puoi creare un PR seguendo le istruzioni seguenti.

> [!NOTE]
> 
> Questi cambiamenti useranno il branch di versione esistente. Se sono sostanziali, aggiungili a `CHANGELOG.md`. La maggior parte delle volte, un buon messaggio di commit dovrebbe essere sufficiente

Non hai mai bisogno di cambiare il file `tutorial.json` direttamente. Quello sarà creato con gli strumenti di CLI.

Se stai facendo solo cambiamenti minori come sistemare un errore di spelling o grammatica, non hai bisogno di testare i tuoi cambiamenti.

Segui queste istruzioni per creare un PR, tenendo a mente che le istruzioni usando in genere le lezioni attorno a loro per contesto:

- Crea una copia dell'ultimo branch di versione con `git branch vX.X.X upstream/vX.X.X` - non hai bisogno di aprire questo branch, ha solo bisogno di esistere.
- Crea e muoviti su un nuovo branch ramificato da `main`
- Fai e **commit** i tuoi cambiamenti. Promemoria: non devi cambiare nulla nel file `tutorial.json`. Probabilmente devi solo fare cambiamenti a `TUTORIAL.md`
- Esegui `coderoad build` per ricreare il file `tutorial.json`
- Fai un commit con i tuoi cambiamenti con `update json` come messaggio
- Crea un PR

### Testare i cambiamenti a `main`

Se vuoi testare i tuoi cambiamenti a `main` dopo aver usato le istruzioni precedenti, segui queste istruzioni:

- Segui le istruzioni nel repo [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) per creare un contenitore
- Inizia il tutorial usando `tutorial.json` nel nuovo branch

### Revisionare PR a `main`

Se stai revisionando un PR che fa cambiamenti a `main`solo con istruzioni o errori di grammatica come descritto sopra, i cambiamenti in `TUTORIAL.md` devono combaciare con i cambiamenti in `tutorial.json`.

Il file `tutorial.json` non deve avere cambiamenti agli hash di commit, o agli id degli step/livelli. E pure i comandi di startup o di livello o gli osservatori dei file probabilmente non dovrebbero essere cambiati. Ci sono eccezioni se c'è un problema con uno step, ma dovrebbero essere trattati con più cautela.

Inoltre, tieni a mente che le istruzioni usano in genere le lezioni attorno a loro come contesto, quindi assicurati che abbiano senso.

### Lavorare su un branch di versione

> [!WARNING]
> 
> Promemoria: Non fare mai cambiamenti a un branch di versione che si trova su un repo di freeCodeCamp. Creane sempre uno nuovo

Non c'è un modo semplice per vedere esattamente cosa cambia tra i branch di versione visto che la storia di Git sarà riscritta. Accettare un nuovo branch di versione dovrà essere fatto con attenta considerazione e testing.

Queste istruzioni sono per cambiare qualunque cosa su un branch di versione, come test, testo dei test, file di reset, aggiungere e eliminare step, tra le altre cose.

Segui queste istruzioni per creare una nuova versione:

- Vai sull'**ultimo** branch di versione con `git checkout -b vX.X.X upstream/vX.X.X`
- Crea un nuovo branch da quel branch, incrementando la versione, con `git checkout -b vX.X.Y`
- Fai i tuoi cambiamenti al branch di versione. Puoi trovare maggiori informazioni su come lavorare con i tutorial nella [documentazione di CodeRoad](https://coderoad.github.io/docs/edit-tutorial)
- Invia il nuovo branch al tuo fork con `git push -u origin vX.X.Y`
- Vai sul branch `main`
- Crea un nuovo branch da `main`. Per esempio `feat/version-X.X.Y`
- Cambia l'`uri` in `coderoad.yaml` al tuo fork del repo. Questo è per far si che tu e i tuoi revisori possono testare prima di spingere i cambiamenti al repo di freeCodeCamp. Cambia la versione al nuovo branch nei due punti di quel file. Aggiungi i tuoi cambiamenti per la nuova versione in `CHANGELOG.md`. Fai qualsiasi altro cambiamento di cui hai bisogno.
- Fai un commit dei tuoi cambiamenti con il messaggio `feat: release version X.X.Y - <descrizione opzionale>`
- Esegui `coderoad build` per creare un nuovo file `tutorial.json`
- Aggiungi il file e fai un commit
- Spingi i cambiamenti al tuo fork con push
- Testa i tuoi cambiamenti seguendo le [istruzioni di testing più sotto](#testing-changes-to-a-version-branch). Fai i cambiamenti aggiuntivi necessari e fai un commit con loro come hai apena fatto, o se sei soddisfatto, segui il resto delle istruzioni
- Fai un PR a `main` usando il tuo nuovo branch `feat/version-X.X.Y`. Dagli un titolo di `version X.X.Y ready for review`. Questo non sarà unito al database, è solo per far sapere ai revisori che c'è una nuova versione pronta
- Lascialo qui per i revisori

### Testare cambiamenti a un nuovo branch di versione

- Segui le istruzioni nel repo [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) per creare un contenitore
- Inizia il tutorial usando il file `tutorial.json` nel fork in cui sono i cambiamenti. Assicurati di usare il file nel branch `feat: version-X.X.Y` e non nel branch `main`

### Push di una nuova versione

Prima del push di una nuova versione, visualizza il nuovo branch `feat/version-vX.X.Y` (di cui sarà fatto il merge con `main`) sul fork dell'utente. Assicurati che ci siano cambiamenti al file `CHANGELOG.md` che includono i nuovi cambiamenti, e che la versione nei due punti del file `coderoad.yaml` corrisponda al nuovo branch di versione.

Se hai permessi di scrittura al repo di freeCodeCamp, hai verificato i file `CHANGELOG` e `coderoad.yaml`, hai testato i cambiamenti seguendo le istruzioni qua sopra, e vuoi fare il push di una nuova versione del tutorial:

> [!WARNING]
> 
> Promemoria: Non fare mai cambiamenti a un branch di versione che si trova su un repo di freeCodeCamp. Creane sempre uno nuovo

- Se non hai un remote a dove esistono i cambiamenti, crea un remote al fork dell'utente con `git remote add <users_fork>`
- Elimina qualsiasi branch **locale** che condivide un nome con i nuovi branch. Probabilmente denominato `vX.X.Y` o `feat/version-X.X.Y`
- Vai sul nuovo branch di versione con `git checkout -b vX.X.X remote/vX.X.X`
- Fai il push del nuovo branch di versione al repo di freeCodeCamp con `git push -u upstream/vX.X.Y`. Devi fare il push del nuovo branch prima di aggiornare `main` con il nuovo file `tutorial.json`
- Vai su il ramo degli utenti di cui sarà fatto il merge in `main` con `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Cambia l'`uri` in `coderoad.yaml` di nuovo al repo di freeCodeCamp
- Aggiungi i cambiamenti e fai un commit
- Esegui `coderoad build` per creare il nuovo file `tutorial.json`
- Aggiungi il file e fai un commit
- Fai il push dei cambiamenti al tuo fork con `git push -u origin/feat/version-X.X.Y`
- Fai un PR a `main` sul repo di freeCodeCamp
- Se sei soddisfatto, fai il merge, o lascialo e chiedi una review da parte di qualcun altro
- Dopo che è stato fatto il merge del PR, apri il tutotial seguendo le istruzioni nel [repo rdb-alpha](https://github.com/freeCodeCamp/rdb-alpha) per assicurarti che si carichi come si deve e che puoi procedere per qualche step
- Infine, se esistono PR per questa versione, chiudile

### Come tornare a una versione precedente

- Crea un nuovo branch dal `main` più recente con `git checkout -b revert/to-version-X.X.X`
- Fai il revert di tutti i commit di questo branch fino a e includendo il commit della versione successiva a quella a cui vuoi tornare. Per esempio, se hai dei commit tipo questi:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

E vuoi tornare a v1.0.0, fai il revert di tutti i commit a partire da `release: version 1.0.1`

- Crea un PR. Dagli un titolo tipo `revert: to version X.X.X`
