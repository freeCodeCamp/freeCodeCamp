# Pull-Request (PR) öffnen

Ein Pull-Request ermöglicht dir, Änderungen von deinem Fork auf GitHub in das Hauptrepository von FreeCodeCamp.org zu senden. Sobald Sie Änderungen am Code oder an den Herausforderungen der Kodierung vorgenommen haben, sollten Sie diese Richtlinien befolgen, um einen PR zu senden.

## Bereite einen guten PR-Titel vor

Wir empfehlen [konventionellen Titel und Nachrichten](https://www.conventionalcommits.org/) für Commits und Pull-Requests zu verwenden. Die Konvention hat folgendes Format:

> `<type>([optionaler Umfang(s)]): <description>`
> 
> Zum Beispiel:
> 
> `fix(learn): Tests für die Do...während Schleife Challenge`

Beim Öffnen einer Pull-Request(PR) können Sie den Typ, den Umfang (optional) und die Beschreibung der Pull-Request(PR) festlegen.

**Typ:**

| Typ      | Wann wählen                                                                               |
|:-------- |:----------------------------------------------------------------------------------------- |
| fixieren | Geändert oder aktualisiert/verbessert Funktionalität, Tests, Verbiage einer Lektion, etc. |
| fieber   | Nur wenn Sie neue Funktionalität, Tests, etc. hinzufügen.                                 |
| chore    | Änderungen, die sich nicht auf Code, Tests oder Verbiage einer Lektion beziehen.          |
| doc      | Ändert das Verzeichnis `/docs` oder die Richtlinien zum Beitrag usw.                      |

**Bereich:**

Sie können einen Bereich aus [dieser Liste der Labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope) auswählen.

**Beschreibung:**

Halten Sie es kurz (weniger als 30 Zeichen) und einfach können Sie weitere Informationen in die PR-Beschreibungsbox und Kommentare.

Einige Beispiele für Titel guter PRs wären folgendes:

- `fix(a11y): verbesserter Kontrast der Suchleiste`
- `feat: Füge mehr Tests zu HTML-und CSS-Herausforderungen hinzu`
- `fix(api,client): Verhindere CORS-Fehler bei der Formularabgabe`
- `docs(i18n): Chinesische Übersetzung des lokalen Setups`

## Vorschlag einer Pull-Anfrage

1. Sobald die Änderungen vorgenommen wurden, werden Sie aufgefordert, einen Pull-Request auf der GitHub Seite Ihrer Fork zu erstellen.

   ![Bild - Vergleiche Pull-Request Prompt auf GitHub](./images/github/compare-pull-request-prompt.png)

2. Standardmäßig sollten alle Pull Requests gegen das FreeCodeCamp Hauptrepo `Master` Branch sein.

   Vergewissern Sie sich, dass Ihre Basis-Fork auf FreeCodeCamp/FreeCodeCamp gesetzt ist, wenn Sie eine Pull Anfrage hochziehen.

   ![Bild - Vergleiche Gabelungen beim Pull Request](./images/github/comparing-forks-for-pull-request.png)

3. Senden Sie den Pull-Request aus Ihrer Filiale an freeCodeCamps `Master` Branch.

4. In Ihrem PR enthalten eine detailliertere Zusammenfassung der Änderungen, die Sie vorgenommen haben und warum.

   - Ihnen wird eine Pull-Request-Vorlage angezeigt. Dies ist eine Checkliste, die du vor dem Öffnen des Pull-Requests verfolgen solltest.

   - Füllen Sie die Details, wie Sie sehen passend. Diese Informationen werden überprüft und die Prüfer werden entscheiden, ob Ihr Pull-Request akzeptiert wird oder nicht.

   - Wenn der PR ein bestehendes GitHub Problem beheben soll, dann am Ende von der Beschreibungstext deines PR verwenden Sie das Schlüsselwort _Schließt_ mit der Ticketnummer zu [automatisch schließen, wenn der PR akzeptiert und zusammengeführt wird](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Beispiel: `Schließt #123` beendet das Problem 123

5. Geben Sie an, ob Sie auf einer lokalen Kopie der Website getestet haben oder nicht.

   Dies ist sehr wichtig, wenn Sie Änderungen vornehmen, die nicht nur Änderungen an Textinhalten wie Dokumentation oder einer Challenge-Beschreibung sind. Beispiele für Änderungen, die lokal getestet werden müssen, sind JavaScript, CSS oder HTML, die die Funktionalität oder das Layout einer Seite ändern könnten.

## Feedback zu Pull-Requests

> Herzlichen Glückwunsch! :tada: auf eine PR-Arbeit und vielen Dank, dass Sie sich die Zeit genommen haben, um zu spenden.

Unsere Moderatoren werden nun einen Blick werfen und dir Feedback geben. Bitte haben Sie Geduld mit den Moderatoren und respektieren Sie ihre Zeit. Alle Pull-Requests werden zu gegebener Zeit überprüft.

Wenn Sie Hilfe benötigen, besprechen Sie bitte im [Mitwirkenden Chatraum](https://gitter.im/FreeCodeCamp/Contributors), wir helfen Ihnen gerne weiter.

> [!TIPP] Wenn du mehr Pull-Requests beisteuern möchtest, wir empfehlen Ihnen, die [Änderungen durchzuführen und](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) Richtlinien zu synchronisieren, um zu vermeiden, dass Sie Ihren Fork löschen müssen.

## Konflikte bei Pull-Requests

Konflikte können auftreten, weil viele Mitwirkende an dem Repository arbeiten, und Änderungen können Ihre PR beschädigen, die noch nicht überprüft und zusammengeführt wurden.

Häufig benötigen Sie keine Rebase, da wir alle Commits zerquetschen, aber wenn hier eine Rebase angefordert wird, ist das, was Sie tun sollten.

### Für übliche Fehlerbehebungen und Funktionen

When you are working on regular bugs and features on our development branch `master`, you are able to do a simple rebase:

1. Rebasere deine lokale Kopie:

   ```console
   git checkout <pr-branch>
   git pull --rebase Upstream Master
   ```

2. Konflikte lösen und Commits hinzufügen / bearbeiten

   ```console
   # Entweder
   git add .
   # Entweder
   git add .
   git commit -m "chore: resolve conflicts"

   # Oder
   git add .
   git commit --amend --no-edit
   git commit --amend --no-edit
   ```

3. Änderungen an die PR zurückschieben

   ```console
   git Push --force Ursprung <pr-branch>
   ```

### Für anstehende Lehrpläne und Funktionen

Wenn du an Funktionen für unseren kommenden Lehrplan `als nächstes*` arbeitest, hast du eine Kirschauswahl:

1. Stelle sicher, dass dein Upstream mit deinem Lokal synchronisiert wird:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next python-projects
   git reset --hard upstream/next t-python-projects
   ```

2. Backup machen

   a. Entweder löschen Sie Ihren lokalen Branch, nachdem Sie ein Backup gemacht haben (falls Sie es noch lokal haben):

      ```console
      git checkout <pr-branch-name>

      # Beispiel:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # Beispiel:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. Oder nur eine Sicherung Ihres Pr Zweiges (wenn Sie ihn nicht lokal haben):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # Beispiel:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/feat/add-numpy-video-question
      ```

4. Beginnen Sie mit einem sauberen Schiefer:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Lösen Sie alle Konflikte und bereinigen, installieren Sie Ausführungstests

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # Beispiel:

   # npm run test:curriculum --superblock=python-for-everyone

   ```

6. Wenn alles gut aussieht zurück zur PR

   ```console
   git Push --force Ursprung <pr-branch-name>
   ```
