# Wie man an Praxisprojekten arbeitet

Der Ordner `tools/challenge-helper-scripts` enthält Tools, die die Erstellung und Pflege des projektbasierten Studienplans von freeCodeCamp erleichtern.

## Erstelle ein neues Projekt

Führe `npm run create-project` aus. Dadurch öffnet sich eine Kommandozeilenoberfläche, die dich durch den Prozess führt. Wenn das erledigt ist, sollte es eine neue Aufgabe im englischen Studienplan geben, die du für den ersten Schritt des Projekts nutzen kannst. Wenn du zum Beispiel ein Projekt mit dem Namen `test-project` in der Responsive-Webdesign-Zertifizierung erstellt hast, befindet es sich in `curriculum/challenges/english/01-responsive-web-design/test-project`.

Wenn du neue Schritte erstellen willst, vereinfachen die folgenden Tools diesen Prozess.

## Nächsten Schritt erstellen

A one-off script that will automatically add the next step based on the last step in the project. The challenge seed code will use the previous step's challenge seed code.

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run create-next-step
```

## leere Schritte erstellen

A one-off script that automatically adds a specified number of steps. The challenge seed code for all steps created will be empty.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run create-empty-steps X # where X is the number of steps to create.
```

## insert-step

A one-off script that automatically adds a new step at a specified position, incrementing all subsequent steps (both their titles and in their meta.json). The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run insert-step X # where X is the position to insert the new step.
```

## Lösche eine Schritt

A one-off script that deletes an existing step, decrementing all subsequent steps (both their titles and in their meta.json)

**Note:** This script also runs [update-step-titles](#update-step-titles).

### So führst du das Skript aus

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run delete-step X # where X is the step number to be deleted.
```

## update-step-titles

A one-off script that automatically updates the frontmatter in a project's markdown files so that they are consistent with the project's meta.json. It ensures that each step's title (and dashedName) match the meta's challengeOrder.

### How to run script

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run update-step-titles
```
