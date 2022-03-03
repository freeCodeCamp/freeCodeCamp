# Come lavorare sui progetti di pratica

La cartella `tools/challenge-helper-scripts` contiene strumenti per aiutare a facilitare la creazione e il mantenimento del curriculum basato su progetti di freeCodeCamp.

## Creare un nuovo progetto

Esegui `npm run create-project`. Questo apre un'interfaccia utente a linea di comando che ti guida attraverso il processo. Una volta finito, dovrebbe esserci una nuova sfida nel curriculum inglese che puoi usare come primo passo del progetto. Ad esempio, se hai creato un progetto chiamato `test-project` nella certificazione Web Design Responsivo, sarebbe in `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se vuoi creare nuovi passi, i seguenti strumenti semplificano quel processo.

## create-next-step

A one-off script that will automatically add the next step based on the last step in the project. The challenge seed code will use the previous step's challenge seed code.

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run create-next-step
```

## create-empty-steps

A one-off script that automatically adds a specified number of steps. The challenge seed code for all steps created will be empty.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run create-empty-steps X # where X is the number of steps to create.
```

## insert-step

A one-off script that automatically adds a new step at a specified position, incrementing all subsequent steps (both their titles and in their meta.json). The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### Come eseguire lo script:

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run insert-step X # where X is the position to insert the new step.
```

## delete-step

A one-off script that deletes an existing step, decrementing all subsequent steps (both their titles and in their meta.json)

**Note:** This script also runs [update-step-titles](#update-step-titles).

### Come eseguire lo script

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run delete-step X # where X is the step number to be deleted.
```

## update-step-titles

A one-off script that automatically updates the frontmatter in a project's markdown files so that they are consistent with the project's meta.json. It ensures that each step's title (and dashedName) match the meta's challengeOrder.

### How to run script

1. Vai alla directory del progetto.
2. Esegui il seguente comando npm:

```bash
npm run update-step-titles
```
