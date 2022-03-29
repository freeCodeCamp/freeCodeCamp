# Come lavorare sui progetti di pratica

La cartella `tools/challenge-helper-scripts` contiene strumenti per aiutare a facilitare la creazione e il persontenimento del curriculum basato su progetti di freeCodeCamp.

## Creare un nuovo progetto

Esegui `npm run create-project`. Questo apre un'interfaccia utente a linea di comando che ti guida attraverso il processo. Una volta finito, dovrebbe esserci una nuova sfida nel curriculum inglese che puoi usare come primo passo del progetto. Ad esempio, se hai creato un progetto chiamato `test-project` nella certificazione Web Design Responsivo, sarebbe in `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se vuoi creare nuovi passi, i seguenti strumenti semplificano quel processo.

## create-next-step

Uno script una tantum che aggiungerà automaticamente il passo successivo in base all'ultimo passo del progetto. Il codice seed della sfida userà il codice seed di quella precedente.

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run create-next-step
```

## create-empty-steps

Uno script eseguito una sola volta che aggiunge automaticamente un determinato numero di step. Il codice seed della sfida per tutti i passi creati sarà vuoto.

**Nota:** Questo script esegue anche [update-step-titles](#update-step-titles).

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run create-empty-steps X # dove X è il numero di step da creare.
```

## insert-step

Uno script una tantum che aggiunge automaticamente un nuovo passo in una posizione specificata, incrementando tutti i passaggi successivi (sia i loro titoli che in meta.json). Il codice seed della sfida userà il codice seed di quella precedente, rimuovendo i marcatori delle regioni editabili (MRE).

**Nota:** Questo script esegue anche [update-step-titles](#update-step-titles).

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run insert-step X # dove X è la posizione in cui inserire il nuovo step.
```

## delete-step

Uno script una tantum che rimuove uno step esistente, decrementando tutti i passaggi successivi (sia i loro titoli che in meta.json)

**Nota:** Questo script esegue anche [update-step-titles](#update-step-titles).

### Come eseguire lo script

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run delete-step num=x # dove x è il numero dello step da eliminare.
```

## update-step-titles

Uno script una tantum che aggiorna automaticamente il frontmatter nei file di markdown di un progetto in modo che siano coerenti con il progetto meta.json. Fa in modo che il titolo di ogni passo (e DashedName) corrisponda al challengeOrder in meta.

### Come eseguire lo script

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run update-step-titles
```
