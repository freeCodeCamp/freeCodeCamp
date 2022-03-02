# Wie man an Praxisprojekten arbeitet

Der Ordner `tools/challenge-helper-scripts` enthält Tools, die die Erstellung und Pflege des projektbasierten Studienplans von freeCodeCamp erleichtern.

## Erstelle ein neues Projekt

Führe `npm run create-project` aus. Dadurch öffnet sich eine Kommandozeilenoberfläche, die dich durch den Prozess führt. Wenn das erledigt ist, sollte es eine neue Aufgabe im englischen Studienplan geben, die du für den ersten Schritt des Projekts nutzen kannst. Wenn du zum Beispiel ein Projekt mit dem Namen `test-project` in der Responsive-Webdesign-Zertifizierung erstellt hast, befindet es sich in `curriculum/challenges/english/01-responsive-web-design/test-project`.

Wenn du neue Schritte erstellen willst, vereinfachen die folgenden Tools diesen Prozess.

## Nächsten Schritt erstellen

Ein einmaliges Skript, das automatisch den nächsten Schritt hinzufügt, basierend auf dem letzten Schritt, der als `step-xxx.md` nummeriert ist, wobei `xxx` die dreistellige Schrittnummer des letzten Schritts darstellt. Der Aufgaben-Seed-Code (initialer Startcode im Editor) verwendet den Aufgaben-Seed-Code des vorherigen Schritts, wobei die Editable Region Markers (ERMs) entfernt werden.

**Hinweis:** Dieses Skript führt auch [reorder-steps](#reorder-steps) aus.

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run create-next-step
```

## leere Schritte erstellen

Ein einmaliges Skript, das automatisch eine bestimmte Anzahl von Schritten bei einer bestimmten Startschrittnummer hinzufügt. Der Aufgaben-Seed-Code für alle erstellten Schritte wird leer sein.

**Hinweis:** Dieses Skript führt auch [reorder-steps](#reorder-steps) aus.

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run create-empty-steps start=X num=Y # wobei X die Startschrittnummer und Y die Anzahl der zu erstellenden Schritte ist.
```

## Zwischenschritt erstellen

Ein einmaliges Skript, das automatisch einen neuen Schritt zwischen zwei bestehenden, aufeinanderfolgenden Schritten einfügt. Der Aufgaben-Seed-Code verwendet den bestehenden Aufgaben-Seed-Code des Startschritts, wobei die ERMs (Editable Region Markers) entfernt werden.

**Hinweis:** Dieses Skript führt auch [reorder-steps](#reorder-steps) aus.

### So führst du das Skript aus:

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run create-step-between start=X # wobei X die Nummer des Anfangsschritts ist
```

## Lösche eine Schritt

Ein einmaliges Skript, das einen bestehenden Schritt löscht und dann die verbleibenden Schrittdateien im Projektordner neu anordnet sowie das Eigenschaftsarray `challengeOrder` in der `meta.json` des Projekts mit der neuen Reihenfolge der Schritte aktualisiert.

### So führst du das Skript aus

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run delete-step num=x # wobei x die Schrittnummer ist, die gelöscht werden soll.
```

## Schritte neu ordnen

Ein einmaliges Skript, das die Schrittdateien in den Markdown-Dateien eines Projekts automatisch anhand des Dateinamens neu anordnet. Außerdem wird das `challengeOrder` Eigenschaftsarray in der `meta.json` des Projekts mit der neuen Reihenfolge der Schritte aktualisiert.

### Praxisbeispiel

Nehmen wir an, du beginnst mit der folgenden Projektstruktur:

```bash
step-001.md
step-002.md
step-003.md
step-004.md
step-005.md
step-006.md
```

Irgendwann entscheidest du, dass du `Schritt-002.md` löschen musst, weil du diesen Schritt nicht mehr brauchst. Außerdem entscheidest du dich, `Schritt-004.md` in drei Schritte aufzuteilen, statt nur in einen.

Um diese Umstrukturierung zu erreichen, musst du `step-002.md` löschen und dann eine `step-004a.md` und eine `step-004b.md` hinzufügen. Die neue Ordnerstruktur würde wie folgt aussehen:

```bash
step-001.md
step-003.md
step-004.md
step-004a.md
step-004b.md
step-005.md
step-006.md
```

Die Dateinamen müssen jetzt `step-001.md` bis `step-007.md` lauten, denn du hast eine Datei entfernt, aber zwei weitere hinzugefügt, so dass die Differenz nur eine Datei beträgt. Außerdem muss das Frontmatter jeder Datei unterhalb eines gelöschten oder hinzugefügten Schritts geändert werden, indem der Schlüsselwert `title` an die neue Schrittnummer angepasst wird. Wenn du zum Beispiel `step-3.md` in `step-2.md` umbenannt hast, musst du den Titel von `step-2.md` von `Step 03` in `Step 02` ändern.

Weiter unten findest du die erforderlichen Änderungen am Projektordner:

```bash
step-001.md
step-003.md renamed to step-002.md and title changes to "Step 2"
step-004.md renames to step-003.md and title changes to "Step 3"
step-004a.md renames to step-004.md and title changes to "Step 4"
step-004b.md renames to step-005.md and title changes to "Step 5"
step-005.md renames to step-006.md and title changes to "Step 6"
step-006.md renames to step-007.md and title changes to "Step 7"
```

Zusammen mit den oben genannten Änderungen muss der Schlüssel `challengeOrder` in der Datei `meta.json` des Projekts die neue Schrittreihenfolge widerspiegeln. Das ist notwendig, weil jeder Schritt, der gelöscht und/oder hinzugefügt wird, den `title` ändert, der mit jeder der betroffenen Schritt-Aufgabe `id` verbunden ist.

### Wie man das Skript ausführt

1. Wechsle in das Verzeichnis des Projekts.
2. Führe den folgenden npm-Befehl aus:

```bash
npm run reorder-steps
```
