# Come lavorare sui progetti di pratica

La cartella `tools/challenge-helper-scripts` contiene strumenti per aiutare a facilitare la creazione e il mantenimento del curriculum basato su progetti di freeCodeCamp.

## Creare un nuovo progetto

Esegui `npm run create-project`. Questo apre un'interfaccia utente a linea di comando che ti guida attraverso il processo. Una volta finito, dovrebbe esserci una nuova sfida nel curriculum inglese che puoi usare come primo passo del progetto. Ad esempio, se hai creato un progetto chiamato `test-project` nella certificazione Web Design Responsivo, sarebbe in `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se vuoi creare nuovi passi, i seguenti strumenti semplificano quel processo.

## create-next-step

Uno script eseguito una sola volta che aggiungerà automaticamente il prossimo passo basandosi sull'ultimo numerato come `part-xxx.md`, dove `xxx` rappresenta il numero a 3 cifre dell'ultimo passo. Il codice seed della sfida userà il codice seed di quella precedente, rimuovendo i marcatori delle regioni editabili (MRE).

**Nota:** Questo script esegue anche [reorder-steps](how-to-work-on-practice-projects#reorder-steps).

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run create-next-step
```

## create-empty-steps

Uno script eseguito una sola volta che aggiunge automaticamente un determinato  numero di passi a partire da un passo specifico. Il codice seed della sfida per tutti i passi creati sarà vuoto.

**Nota:** Questo script esegue anche [reorder-steps](how-to-work-on-practice-projects#reorder-steps).

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run create-empty-steps start=X num=Y # dove X è il numero del passo da cui iniziare e Y è il numero di passi da creare.
```

## create-step-between

Uno script eseguito una sola volta che aggiunge automaticamente un passo in mezzo a due passi consecutivi già esistenti. Il codice seed della sfida userà il codice seed della sfida al passo di partenza già esistente, rimuovendo i marcatori delle regioni editabili (MRE).

**Nota:** Questo script esegue anche [reorder-steps](how-to-work-on-practice-projects#reorder-steps).

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run create-step-between start=X # dove X è il passo iniziale di partenza
```

## delete-step

Uno script eseguito una sola volta che cancella un passo esistente e poi riordina i passi rimanenti nella cartella del progetto e che aggiorna l'array della proprietà `challengeOrder` nel `meta.json` del progetto secondo il nuovo ordine dei passi.

### Come eseguire lo script

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run delete-step num=x # dove x è il numero dello step da eliminare.
```

## reorder-steps

Uno script eseguito una sola volta che riordina automaticamente i file dei passi nel markdown del progetto basandosi sui nomi dei file.  Aggiorna anche l'array della proprietà `challengeOrder` nel `meta.json` del progetto secondo il nuovo ordine dei passi.

### Esempi di funzionamento

Diciamo che inizi con la seguente struttura:

```bash
part-1.md
part-2.md
part-3.md
part-4.md
part-5.md
part-6.md
```

A un certo punto decidi che hai bisogno di eliminare  `part-2.md`, perché quel passo non è più necessario. Inoltre, decidi di dividere `part-4.md` in tre passi invece di uno.

Per ottenere questa ristrutturazione, avresti bisogno di eliminare  `part-2.md` e poi aggiungere un `part-4a.md` e un `part-5b.md`. La nuova struttura della cartella assomiglierà alla seguente:

```bash
part-001.md
part-003.md
part-004.md
part-004a.md
part-004b.md
part-005.md
part-006.md
```

Adesso serve che i nomi dei file vadano da `part-1.md` a `part-7.md`, poiché ne hai rimosso uno ma ne hai aggiunti due, con una differenza netta di un file. Inoltre, la presentazione di ogni file sotto un passo rimosso o aggiunto dovrà essere modificata rendendo il valore della chiave `title` uguale al nuovo numero del passo. Ad esempio, dopo aver rinominato `part-3.md` in `part-2.md`, dovrai cambiare il titolo di `part-2.md` da `Part 03` a `Part 02`.

Vedi qui sotto per gli effettivi cambiamenti necessari alla cartella del progetto:

```bash
part-001.md
part-003.md rinominato in part-002.md e titolo cambiato in "Part 2"
part-004.md rinominato in part-003.md e titolo cambiato in "Part 3"
part-004a.md rinominato in part-004.md e titolo cambiato in "Part 4"
part-004b.md rinominato in part-005.md e titolo cambiato in "Part 5"
part-005.md rinominato in part-006.md e titolo cambiato in "Part 6"
part-006.md rinominato in part-007.md e titolo cambiato in "Part 7"
```

Insieme ai cambi qui sopra, la chiave `challengeOrder` nel file `meta.json` del progetto deve riflettere il nuovo ordine dei passi. Questo è necessario perché ogni passo sotto la cancellazione e/o l'aggiunta di un passo cambia il `title` associato ad ognuno degli `id` delle sfide ai passi interessati.

### Come eseguire lo script

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run reorder-steps
```
