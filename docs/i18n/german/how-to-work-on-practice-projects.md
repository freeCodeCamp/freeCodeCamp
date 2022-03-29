# Wie person an Praxisprojekten arbeitet

Der Ordner `tools/challenge-helper-scripts` enthält Tools, die die Erstellung und Pflege des projektbasierten Studienplans von freeCodeCamp erleichtern.

## Erstelle ein neues Projekt

Führe `npm run create-project` aus. Dadurch öffnet sich eine Kommandozeilenoberfläche, die dich durch den Prozess führt. Wenn das erledigt ist, sollte es eine neue Aufgabe im englischen Studienplan geben, die du für den ersten Schritt des Projekts nutzen kannst. Wenn du zum Beispiel ein Projekt mit dem Namen `test-project` in der Responsive-Webdesign-Zertifizierung erstellt hast, befindet es sich in `curriculum/challenges/english/01-responsive-web-design/test-project`.

Wenn du neue Schritte erstellen willst, vereinfachen die folgenden Tools diesen Prozess.

## Nächsten Schritt erstellen

Ein einmaliges Skript, das automatisch den nächsten Schritt basierend auf dem letzten Schritt des Projekts hinzufügt. Der Aufgaben-Startcode verwendet den Startcode aus der vorherigen Aufgabe.

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run create-next-step
```

## leere Schritte erstellen

Ein einmaliges Skript, das automatisch eine bestimmte Anzahl von Schritten hinzufügt. Der Aufgaben-Seed-Code für alle erstellten Schritte wird leer sein.

**Hinweis:** Dieses Skript führt auch [update-step-titles](#update-step-titles) aus.

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run create-empty-steps X # wobei X die Anzahl der zu erstellenden Schritte ist.
```

## insert-step

Ein Einmal-Skript, das automatisch einen neuen Schritt an einer bestimmten Stelle hinzufügt und alle nachfolgenden Schritte (sowohl ihre Titel als auch in ihrem meta.json) erhöht. Der Aufgaben-Seed-Code (initialer Startcode im Editor) verwendet den Aufgaben-Seed-Code des vorherigen Schritts, wobei die Editable Region Markers (ERMs) entfernt werden.

**Hinweis:** Dieses Skript führt auch [update-step-titles](#update-step-titles) aus.

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run insert-step X # wobei X die Position ist, an der der neue Schritt eingefügt werden soll.
```

## Lösche eine Schritt

Ein einmaliges Skript, das einen bestehenden Schritt löscht und alle nachfolgenden Schritte dekrementiert (sowohl ihre Titel als auch in ihrer meta.json)

**Hinweis:** Dieses Skript führt auch [update-step-titles](#update-step-titles) aus.

### So führst du das Skript aus

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run delete-step X # wobei X die Schrittnummer ist, die gelöscht werden soll.
```

## update-step-titles

Ein einmaliges Skript, das automatisch die Frontmatter in den Markdown-Dateien eines Projekts aktualisiert, damit sie mit der meta.json des Projekts übereinstimmen. Es stellt sicher, dass der Titel (und der dashedName) jedes Schritts mit der challengeOrder des Metas übereinstimmt.

### Wie person das Skript ausführt

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run update-step-titles
```
