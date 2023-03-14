# Come lavorare sui progetti di pratica

I nostri progetti di pratica utilizzano un approccio graduale per insegnare concetti agli studenti. Un progetto consisterà in vari file, ai quali ci riferiamo come **"step"**. Questi file sono identificati dall'ID della sfida, per evitare problemi con il processo di traduzione. Sfortunatamente, questo rende difficile trovare il file associato a uno step specifico.

Abbiamo costruito uno strumento editor per le sfide per rimediare a questo problema. Questo strumento consente di navigare nei progetti disponibili e negli step di ogni progetto (in ordine). Inoltre è presente un editor di codice incorporato che puoi utilizzare per lavorare direttamente sui file.

## Usare l'editor per le sfide

Queste istruzioni ti diranno come utilizzare il nostro strumento editor per le sfide per lavorare sui progetti per fare pratica.

### Avviare l'editor

Per avviare l'editor, assicurati di essere nella cartella principale freeCodeCamp. Poi esegui `pnpm run challenge-editor` per avviare sia il client che l'API di cui fa uso l'editor.

Il client verrà avviato sulla porta `3300`, così puoi accedervi su `http://localhost:3300`. L'API gira sulla porta `3200`, per evitare conflitti con il client learn e con il server. Questo ti permetterà di eseguire l'applicazione freeCodeCamp contemporaneamente all'editor, in modo che tu possa testare le tue modifiche localmente.

### Navigare nell'editor

La visualizzazione predefinita elencherà i `superblocks` disponibili - ovvero le certificazioni. Clicca sul link della certificazione sulla quale vuoi lavorare.

Verrai portato all'elenco dei blocchi. Questi sono i progetti per fare pratica. Clicca sul link del progetto sul quale vuoi lavorare.

Verrai indirizzato alla lista con gli step del progetto. Se stai lavorando su uno step esistente puoi cliccare sul link dello step per aprire l'editor. Se stai aggiungendo o rimuovendo step clicca il link `Use the step tools` per passare agli strumenti degli step per quella sfida.

### Modificare gli step

Quando clicchi sullo step verrai portato sull'editor. Questo è un editor di testo di base che permette la colorazione della sintassi.

Dopo aver apportato le modifiche, clicca sul pulsante `Save Changes` per salvarle. Riceverai un avviso dal browser che ti comunica che le tue modifiche sono pronte per il commit. Nota che dovrai utilizzare manualmente `git` per aggiungere i file all'area di staging e per fare commit - questo strumento non lo farà per te.

### Strumenti degli step

Quando fai clic sul link `Use the step tools`, sarai portato sulla pagina degli strumenti degli step. Da qui potrai aggiungere o rimuovere gli step dal progetto.

#### Creare uno step successivo

Cliccando questo pulsante aggiungerai un nuovo step alla fine del progetto. Questo step utilizzerà il precedente step come seed.

#### Creare step vuoti

Inserisci nell'input il numero di step che vuoi aggiungere. Poi, cliccando sul pulsante verrà creato il numero di step desiderati alla fine del progetto.

#### Inserire uno step

Inserisci il numero dello step che vuoi eliminare. Poi, clicca sul pulsante `Insert Step` per aggiungere lo step. Gli step successivi verranno riordinati.

#### Eliminare uno step

Inserisci il numero dello step che vuoi eliminare. Poi clicca il pulsante `Delete Step` per eliminarlo. In questo modo, il numero degli step rimanenti verrà aggiornato automaticamente.

#### Aggiornare i titoli degli step

Non dovresti usare questo strumento a meno che tu non abbia manualmente cancellato o aggiunto degli step. Questo strumento riordinerà i numeri degli step.

## Usare gli script manualmente

Se desideri lavorare sugli step manualmente, nel tuo IDE locale, puoi eseguire direttamente gli script di gestione degli step.

La cartella `tools/challenge-helper-scripts` contiene strumenti per aiutare a facilitare la creazione e il mantenimento del curriculum basato su progetti di freeCodeCamp.

### Creare un nuovo progetto

Esegui `pnpm run create-project` dalla cartella root. Questo apre un'interfaccia utente a linea di comando che ti guida attraverso il processo. Una volta finito, dovrebbe esserci una nuova sfida nel curriculum inglese che puoi usare come primo passo del progetto. Ad esempio, se hai creato un progetto chiamato `test-project` nella certificazione Web Design Responsivo, sarebbe in `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se vuoi creare nuovi step, i seguenti strumenti semplificano il processo.

### create-next-step

Uno script una tantum che aggiungerà automaticamente lo step successivo in base all'ultimo step del progetto. Il codice seed della sfida userà il codice seed di quella precedente.

#### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando:

```bash
pnpm run create-next-step
```

### create-empty-steps

Uno script eseguito una sola volta che aggiunge automaticamente un determinato numero di step. Il codice seed della sfida per tutti gli step creati sarà vuoto.

**Nota:** Questo script esegue anche [update-step-titles](#update-step-titles).

#### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando:

```bash
pnpm run create-empty-steps X # dove X è il numero di step da creare.
```

### insert-step

Uno script una tantum che aggiunge automaticamente un nuovo step in una posizione specificata, incrementando tutti gli step successivi (sia i loro titoli che in meta.json). Il codice seed della sfida userà il codice seed di quella precedente, rimuovendo i marcatori delle regioni editabili (MRE).

**Nota:** Questo script esegue anche [update-step-titles](#update-step-titles).

#### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando:

```bash
pnpm run insert-step X # dove X è la posizione in cui inserire il nuovo step.
```

### delete-step

Uno script una tantum che rimuove uno step esistente, decrementando tutti gli step successivi (sia i loro titoli che in meta.json)

**Nota:** Questo script esegue anche [update-step-titles](#update-step-titles).

#### Come eseguire lo script

1. Vai alla directory del progetto.
2. Esegui il seguente comando:

```bash
pnpm run delete-step X # dove X è il numero dello step da eliminare.
```

### update-step-titles

Uno script una tantum che aggiorna automaticamente il frontmatter nei file di markdown di un progetto in modo che siano coerenti con il progetto meta.json. Fa in modo che il titolo di ogni step (e dashedName) corrisponda al challengeOrder in meta.

#### Come eseguire lo script

1. Vai alla directory del progetto.
2. Esegui il seguente comando:

```bash
pnpm run update-step-titles
```
