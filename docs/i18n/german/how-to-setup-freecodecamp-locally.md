Befolge diese Richtlinien, um freeCodeCamp lokal auf deinem System einzurichten. Das ist sehr empfehlenswert, wenn du regelmäßig einen Beitrag leisten willst.

Für einige dieser Arbeitsabläufe - wie das Beheben von Fehlern in der Codebasis oder im Studienplan - musst du freeCodeCamp lokal auf deinem Computer ausführen.

> [!TIP] Wenn du kein Interesse daran hast, das freeCodeCamp lokal einzurichten, kannst du auch Gitpod nutzen, eine kostenlose Online-Entwicklungsumgebung.
> 
> [![In Gitpod öffnen](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Startet eine Entwicklungsumgebung für freeCodeCamp in deinem Browser.)

### Wie du deinen lokalen Rechner vorbereitest

Beginne mit der Installation der erforderlichen Software für dein Betriebssystem.

Wir unterstützen vor allem die Entwicklung auf Linux- und Unix-basierten Systemen. Unsere Mitarbeiter und Community-Mitglieder arbeiten regelmäßig mit der Codebasis und nutzen dafür Tools, die auf Ubuntu und macOS installiert sind.

Wir unterstützen auch Windows 10 über WSL2, das du einrichten kannst, indem du [diesen Leitfaden liest](how-to-setup-wsl.md).

Einige Community-Mitglieder entwickeln auch unter Windows 10 mit Git für Windows (Git Bash) und anderen unter Windows installierten Tools. Zurzeit gibt es keine offizielle Unterstützung für eine solche Konfiguration, wir empfehlen stattdessen die Verwendung von WSL2.

#### Voraussetzungen:

| Voraussetzung                                                                                 | Version | Notizen                                                                                              |
| --------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `16.x`  | Wir verwenden die "Active LTS"-Version, siehe [LTS Schedule](https://nodejs.org/en/about/releases/). |
| npm (wird mit Node mitgeliefert)                                                              | `8.x`   | Wir verwenden die Version, die mit Node.js Active LTS ausgeliefert wird.                             |
| [MongoDB Community-Server](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                                    |

> [!ATTENTION] Wenn du eine andere Version hast, installiere bitte die empfohlene Version. Wir können nur Installationsprobleme für empfohlene Versionen unterstützen. Siehe [Problembehebung](#troubleshooting) für Details.

Wenn Node.js bereits auf deinem Rechner installiert ist, führe die folgenden Befehle aus, um die Versionen zu überprüfen:

```console
node -v
npm -v
```

> [!TIP] Wir empfehlen dringend, die neuesten stabilen Versionen der oben aufgeführten Software zu aktualisieren, auch bekannt als Long Term Support (LTS) Releases.

Sobald du die erforderlichen Ressourcen installiert hast, musst du deine Entwicklungsumgebung vorbereiten. Das ist für viele Entwicklungsworkflows üblich, und du musst das nur einmal machen.

##### Befolge diese Schritte, um deine Entwicklungsumgebung vorzubereiten:

1. Installiere [Git](https://git-scm.com/) oder deinen bevorzugten Git-Client, falls du das nicht schon getan hast. Aktualisiere auf die neueste Version; die Version, die mit deinem Betriebssystem mitgeliefert wurde, ist möglicherweise veraltet.

2. (Optional, aber empfohlen) [Richte einen SSH-Schlüssel](https://help.github.com/articles/generating-an-ssh-key/) für GitHub ein.

3. Installiere einen Code-Editor deiner Wahl.

   Wir empfehlen die Verwendung von [Visual Studio Code](https://code.visualstudio.com/) oder [Atom](https://atom.io/). Dies sind große, kostenlose Open Source Code-Editoren.

4. Richte Linting für deinen Code-Editor ein.

   Du solltest [ESLint in deinem Editor laufen lassen](http://eslint.org/docs/user-guide/integrations.html) und es wird alles markieren, was nicht dem [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) entspricht.

   > [!TIP] Bitte ignorieren Sie keine Verlinkungsfehler. They are meant to **help** you and to ensure a clean and simple codebase.

## Forke das Repository auf GitHub

[Forking](https://help.github.com/articles/about-forks/) ist ein Schritt, bei dem du deine eigene Kopie des freeCodeCamp-Hauptrepository (auch bekannt als _repo_) auf GitHub bekommst.

Das ist wichtig, denn so kannst du an deiner eigenen Kopie von freeCodeCamp auf GitHub arbeiten oder dein Repository herunterladen (klonen), um lokal daran zu arbeiten. Später kannst du über einen Pull Request (PR) beantragen, dass Änderungen aus deinem Fork in das Haupt-Repository gezogen werden.

> [!TIP] Das Hauptrepository unter `https://github.com/freeCodeCamp/freeCodeCamp` wird oft als das `Upstream` Repository bezeichnet.
> 
> Dein Fork unter `https://github.com/YOUR_USER_NAME/freeCodeCamp` wird oft als `origin`-Repository bezeichnet. `YOUR_USER_NAME` wird durch deinen GitHub-Benutzernamen ersetzt.

**Folge diesen Schritten, um das `https://github.com/freeCodeCamp/freeCodeCamp` Repository zu forken:**

1. Gehe zum freeCodeCamp Repository auf GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Klicke auf den "Fork"-Button in der oberen rechten Ecke der Benutzeroberfläche ([Mehr Details hier](https://help.github.com/articles/fork-a-repo/))

3. Nachdem das Repository geforkt wurde, wirst du zu deiner Kopie des freeCodeCamp Repository unter `https://github.com/YOUR_USER_NAME/freeCodeCamp` weitergeleitet (`YOUR_USER_NAME` wird durch deinen GitHub-Benutzernamen ersetzt).

<details>
   <summary>
      So forkst du freeCodeCamp auf GitHub (Screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Wie man freeCodeCamp auf GitHub forkt" />
</details>

## Klone deinen Fork von GitHub

Beim [Klonen](https://help.github.com/articles/cloning-a-repository/) **downloadest ** du eine Kopie eines Repositorys von einem `remote`- Ort, der entweder dir oder einer anderen Person gehört. In deinem Fall ist dieser Remote-Speicherort dein `Fork` des freeCodeCamp-Repositorys, das unter `https://github.com/YOUR_USER_NAME/freeCodeCamp` verfügbar sein sollte. (`YOUR_USER_NAME` wird durch deinen GitHub-Benutzernamen ersetzt).

> [!WARNING] Wenn du auf einer WSL2 Linux Distribution arbeitest, kann es zu Leistungs- und Stabilitätsproblemen kommen, wenn du dieses Projekt in einem Ordner ausführst, der von Windows und WSL2 gemeinsam genutzt wird (z.B. `/mnt/c/Users/`). Deshalb empfehlen wir dir, dieses Repo in einen Ordner zu klonen, der hauptsächlich von deiner WSL2 Linux Distribution genutzt wird und nicht direkt mit Windows geteilt wird (z.B. `~/PROJECTS/`).
> 
> Siehe [diesen GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) für weitere Informationen zu diesem Problem.

Führe diese Anweisungen auf deinem lokalen Rechner aus:

1. Öffne ein Terminal / Command Prompt / Shell in deinem Projektverzeichnis

   _z.B.: `/yourprojectsdirectory/`_

2. Klone deinen Fork von freeCodeCamp und ersetze `YOUR_USER_NAME` durch deinen GitHub Benutzernamen

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Dadurch wird das gesamte freeCodeCamp-Repository in dein Projektverzeichnis heruntergeladen.

Hinweis: `--depth=1` erstellt einen oberflächlichen Klon deines Forks, der nur den jüngsten Verlauf/Commit enthält.

## Synchronisation vom Elternteil (parent) konfigurieren

Jetzt, wo du eine Kopie deines Forks heruntergeladen hast, musst du einen `upstream` zum übergeordneten Repository einrichten.

[Wie bereits erwähnt](#fork-the-repository-on-github), wird das Haupt-Repository als `upstream`-Repository bezeichnet. Dein Fork wird als `origin`-Repository bezeichnet.

Du brauchst eine Referenz von deinem lokalen Klon auf das `upstream`-Repository zusätzlich zum `origin`-Repository. So kannst du Änderungen aus dem Haupt-Repository synchronisieren, ohne dass du wiederholt forken und klonen musst.

1. Wechsle das Verzeichnis auf das neue freeCodeCamp-Verzeichnis:

   ```console
   cd freeCodeCamp
   ```

2. Füge eine Remote-Referenz zum Haupt-Repository von freeCodeCamp hinzu:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Stelle sicher, dass die Konfiguration korrekt erscheint:

   ```console
   git remote -v
   ```

   Der Output sollte ungefähr so aussehen wie unten (ersetze `YOUR_USER_NAME` durch deinen GitHub Benutzernamen):

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## FreeCodeCamp lokal ausführen

Jetzt, wo du eine lokale Kopie von freeCodeCamp besitzt, kannst du diese Anweisungen befolgen, um es lokal auszuführen. Das ermöglicht dir:

- Vorschau von Änderungen an Seiten, wie sie auf der Lernplattform erscheinen würden.
- Arbeite an Problemen und Verbesserungen im Zusammenhang mit der Benutzeroberfläche.
- Debugge und behebe Probleme mit den Anwendungsservern und Client-Anwendungen.

Wenn du auf Probleme stößt, führe zuerst eine Websuche nach deinem Problem durch und schaue nach, ob es bereits beantwortet wurde. Wenn du keine Lösung findest, suche bitte auf unserer [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues)-Seite nach einer Lösung und melde das Problem, falls es noch nicht gemeldet wurde.

Und wie immer kannst du Fragen in der [Kategorie 'Contributors' in unserem Forum](https://forum.freecodecamp.org/c/contributors) oder [auf unserem Chat-Server](https://discord.gg/PRyKn3Vbay) stellen.

> [!TIP] Du kannst darauf verzichten, freeCodeCamp lokal auszuführen, wenn du nur Dateien bearbeitest. Du kannst zum Beispiel ein `rebase` durchführen oder `merge`-Konflikte beheben.
> 
> Du kannst später jederzeit zu diesem Teil der Anleitung zurückkehren. Du solltest diesen Schritt **nur** überspringen, wenn du die Apps nicht auf deinem Rechner ausführen musst.
> 
> [Überspringen, um Änderungen vorzunehmen](#making-changes-locally).

### Konfiguriere Abhängigkeiten

#### Schritt 1: Einrichten der Umgebungsvariablendatei

Die Standard-API-Schlüssel und Umgebungsvariablen sind in der Datei `sample.env` gespeichert. Diese Datei muss in eine neue Datei namens `.env` kopiert werden, auf die während des Installationsschritts dynamisch zugegriffen wird.

```console
# Erstelle eine Kopie der "sample.env" und nenne sie ".env".
# Befülle sie mit den notwendigen API-Schlüsseln und Secrets:
```

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

Die Schlüssel in der `.env` Datei müssen _nicht_ geändert werden, um die App lokal auszuführen. Du kannst die Standardwerte, die du aus `sample.env` kopiert hast, so lassen, wie sie sind.

> [!TIP] Denk daran, wenn du Dienste wie Auth0 oder Algolia nutzen willst, musst du deine eigenen API-Schlüssel für diese Dienste erwerben und die Einträge in der `.env`-Datei entsprechend bearbeiten.

#### Schritt 2: Abhängigkeiten installieren

In diesem Schritt werden die Abhängigkeiten installiert, die erforderlich sind, damit die Anwendung läuft:

```console
npm ci
```

#### Schritt 3: MongoDB starten und die Datenbank initialisieren

Bevor du die Anwendung lokal ausführen kannst, musst du den MongoDB-Dienst starten.

> [!NOTE] Wenn du MongoDB nicht in einem anderen Setup als dem Standard-Setup laufen hast, sollte die URL, die als `MONGOHQ_URL`-Wert in der `.env`-Datei gespeichert ist, funktionieren. Wenn du eine benutzerdefinierte Konfiguration verwendest, ändere diesen Wert nach Bedarf.

Starte den MongoDB-Server in einem separaten Terminal:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- Unter Windows musst du den vollständigen Pfad zur `mongod`-Binärdatei angeben

```console
"C:\Program Files\MongoDB\Server\3.6\bin\mongod"
```

Stelle sicher, dass du `3.6` durch die installierte Version ersetzt

  <!-- tabs:end -->

> [!TIP] Du kannst vermeiden, dass du MongoDB jedes Mal starten musst, indem du es als Hintergrunddienst installierst. Du kannst [mehr darüber in der Dokumentation für dein Betriebssystem erfahren](https://docs.mongodb.com/manual/administration/install-community/)

Als Nächstes wollen wir die Datenbank initialisieren (seeden). In diesem Schritt führen wir den folgenden Befehl aus, der den MongoDB-Server mit einigen anfänglichen Datensätzen füllt, die von den Diensten benötigt werden. Dazu gehören unter anderem ein paar Schemata.

```console
npm run seed
```

#### Schritt 4: Starte die freeCodeCamp Client-Anwendung und den API-Server

Du kannst jetzt den API-Server und die Client-Anwendungen starten.

```console
npm run develop
```

Mit diesem einzigen Befehl werden alle Dienste gestartet, einschließlich des API-Servers und der Client-Anwendungen, an denen du arbeiten kannst.

> [!NOTE] Sobald du bereit bist, öffne einen Webbrowser und **besuche <http://localhost:8000>**. Wenn die App geladen wird, melde dich an. Herzlichen Glückwunsch - Du bist bereit! Du hast jetzt eine Kopie der gesamten Lernplattform von freeCodeCamp auf deinem lokalen Rechner laufen.

> [!TIP] Der API-Server bedient APIs unter `http://localhost:3000`. Die Gatsby-App bedient die Client-Anwendung unter `http://localhost:8000`

> Wenn du eingeloggt bist und <http://localhost:3000/explorer> besuchst, solltest du die verfügbaren APIs sehen.

> [!WARNING] Wenn du deine Cookies löschst oder `npm run seed:certified-user` ausführst, wirst du ausgeloggt und musst dich neu anmelden.

## Mit einem lokalen Benutzer anmelden

Deine lokale Einrichtung legt automatisch einen lokalen Benutzer in der Datenbank an. Wenn du auf den Button `Sign In` klickst, wirst du automatisch in der lokalen Anwendung authentifiziert.

Der Zugriff auf die Benutzerportfolio-Seite ist jedoch etwas knifflig. Bei der Entwicklung übernimmt Gatsby das Serving der clientseitigen Seiten und daher bekommst du eine `404`-Seite für das Benutzerportfolio, wenn du lokal arbeitest.

Wenn du auf den Button **"Preview Custom 404 Page"** klickst, wirst du auf die richtige Seite weitergeleitet.

<details>
   <summary>
      So meldest du dich an, wenn du lokal arbeitest ( Screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Wie man sich anmeldet, wenn man lokal arbeitet" />
</details>

## Lokale Änderungen vornehmen

Du kannst jetzt Änderungen an Dateien vornehmen und deine Änderungen an deinen lokalen Klon deines Forks übertragen.

Befolge diese Schritte:

1. Überprüfe, ob du dich auf dem `main`-Branch befindest:

   ```console
   git status
   ```

   Du solltest einen Output wie diesen erhalten:

   ```console
   Auf dem main-Branch
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   Wenn du nicht auf main bist oder dein Arbeitsverzeichnis nicht sauber ist, löse alle ausstehenden Dateien/Commits auf und checke `main` aus:

   ```console
   git checkout main
   ```

2. Synchronisiere die letzten Änderungen aus dem freeCodeCamp upstream-Branch `main` mit deinem lokalen Haupt-Branch:

   > [!WARNING] Wenn du noch ausstehende Pull Requests aus dem `main`-Branch deines Forks hast, verlierst du sie am Ende dieses Schrittes.
   > 
   > Du solltest sicherstellen, dass dein Pull-Request von einem Moderator zusammengeführt wird, bevor du diesen Schritt ausführst. Um dieses Szenario zu vermeiden, solltest du **immer** auf einem anderen Branch als dem `main` arbeiten.

   Dieser Schritt **synchronisiert die letzten Änderungen** aus dem Haupt-Repository von freeCodeCamp. Es ist wichtig, dass du deinen Branch so oft wie möglich auf den neuesten `upstream/main` zurücksetzt, um spätere Konflikte zu vermeiden.

   Aktualisiere deine lokale Kopie des freeCodeCamp upstream-Repository:

   ```console
   git fetch upstream
   ```

   Führe einen Hard Reset deines Hauptbranch mit dem freeCodeCamp main durch:

   ```console
   git reset --hard upstream/main
   ```

   Schiebe deinen Hauptbranch in deinen origin, um einen sauberen Verlauf deines Forks auf GitHub zu haben:

   ```console
   git push origin main --force
   ```

   Du kannst überprüfen, ob dein aktuelles Main mit dem upstream/main übereinstimmt, indem du einen Diff durchführst:

   ```console
   git diff upstream/main
   ```

   Die resultierende Ausgabe sollte leer sein.

3. Erstelle einen neuen Branch:

   Die Arbeit an einem separaten Branch für jedes Problem hilft dir, deine lokale Arbeitskopie sauber zu halten. Du solltest niemals am `main` arbeiten. Dadurch wird deine Kopie von freeCodeCamp verunreinigt und du musst eventuell mit einem neuen Klon oder Fork neu beginnen.

   Vergewissere dich, dass du auf `main` bist, wie zuvor erklärt, und zweige von dort ab:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Dein Branchname sollte mit `fix/`, `feat/`, `docs/` usw. beginnen. Vermeide die Verwendung von Issue-Nummern in Branches. Halte sie kurz, aussagekräftig und einzigartig.

   Einige Beispiele für gute Branchennamen sind:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Bearbeite die Seiten und den Code in deinem bevorzugten Texteditor.

5. Wenn du mit den Änderungen zufrieden bist, solltest du freeCodeCamp optional lokal ausführen, um die Änderungen zu überprüfen.

6. Stelle sicher, dass du alle Fehler korrigierst und die Formatierung deiner Änderungen überprüfst.

7. Überprüfe und bestätige die Dateien, die du aktualisierst:

   ```console
   git status
   ```

   Dies sollte eine Liste `unstaged`-Dateien anzeigen, die du verändert hast.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Führe die Änderungen durch und mache einen Commit:

   In diesem Schritt solltest du nur Dateien markieren, die du selbst bearbeitet oder hinzugefügt hast. Bei Bedarf kannst du einen Reset durchführen und Dateien lösen, die du nicht ändern wolltest.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Oder du kannst alle `unstaged`-Dateien zum Staging-Bereich hinzufügen:

   ```console
   git add .
   ```

   Nur die Dateien, die in den Staging-Bereich verschoben wurden, werden hinzugefügt, wenn du einen Commit machst.

   ```console
   git status
   ```

   Output:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Jetzt kannst du deine Änderungen mit einer kurzen Nachricht wie dieser übertragen:

   ```console
   git commit -m "fix: meine kurze Commit-Nachricht"
   ```

   Einige Beispiele:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Optional:

   Wir empfehlen dringend eine konventionelle Commit-Nachricht. Das ist eine gute Praxis, die du bei einigen beliebten Open-Source-Repositories sehen wirst. Das ermutigt dich als Entwickler, Standardverfahren zu befolgen.

   Einige Beispiele für konventionelle Commit-Nachrichten sind:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Halte sie kurz, nicht länger als 50 Zeichen. Du kannst jederzeit zusätzliche Informationen in der Beschreibung der Commit-Nachricht hinzufügen.

   Das dauert nicht länger als eine unkonventionelle Meldung wie "update file" oder "add index.md".

   Du kannst [hier](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits) mehr darüber erfahren, warum du konventionelle Commits  verwenden solltest.

9. Wenn du feststellst, dass du eine Datei bearbeiten oder die Commit-Nachricht aktualisieren musst, nachdem du einen Commit gemacht hast, kannst du das nach der Bearbeitung der Dateien wie folgt tun:

   ```console
   git commit --amend
   ```

   Dadurch öffnet sich ein Standard-Texteditor wie `nano` oder `vi`, in dem du den Titel der Commit-Nachricht bearbeiten und die Beschreibung hinzufügen/bearbeiten kannst.

10. Als nächstes kannst du deine Änderungen in deinen Fork schieben:

    ```console
    git push origin branch/name-here
    ```

## Einen Pull Request (PR) vorschlagen

Nachdem du deine Änderungen übertragen hast, kannst du hier nachlesen, [wie man einen Pull Request erstellt](how-to-open-a-pull-request.md).

## Schnellreferenz der Befehle

Eine Schnellreferenz für die Befehle, die du brauchst, wenn du lokal arbeitest.

| Befehl                                                         | Beschreibung                                                                                  |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installiert / reinstalliert alle Abhängigkeiten und bootet die verschiedenen Dienste.         |
| `npm run seed`                                                 | Analysiert alle Aufgaben-Markdown-Dateien und fügt sie in MongoDB ein.                        |
| `npm run develop`                                              | Startet den freeCodeCamp API Server und die Client-Anwendungen.                               |
| `npm run storybook`                                            | Startet Storybook für die Entwicklung der Komponentenbibliothek.                              |
| `npm test`                                                     | Führt alle JS-Tests im System aus, einschließlich Client-, Server-, Lint- und Aufgaben-Tests. |
| `npm run test-client`                                          | Führt die Client-Test-Suite aus.                                                              |
| `npm run test:curriculum`                                      | Führt die Curriculum-Test-Suite aus.                                                          |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | Testet einen bestimmten Block.                                                                |
| `npm run test:curriculum --superblock='responsive-web-design'` | Testet einen bestimmten SuperBlock.                                                           |
| `npm run test-curriculum-full-output`                          | Führt die Curriculum-Test-Suite aus, ohne nach dem ersten Fehler abzubrechen                  |
| `npm run test-server`                                          | Führt die Server-Test-Suite aus.                                                              |
| `npm run e2e`                                                  | Führt die Cypress End-to-End-Tests durch.                                                     |
| `npm run clean`                                                | Deinstalliert alle Abhängigkeiten und bereinigt die Caches.                                   |

## Fehlerbehebung

### Probleme bei der Installation der empfohlenen Voraussetzungen

Wir entwickeln regelmäßig auf den neuesten oder beliebtesten Betriebssystemen wie macOS 10.15 oder höher, Ubuntu 18.04 oder höher und Windows 10 (mit WSL2).

Es wird empfohlen, dein spezifisches Problem auf Ressourcen wie Google, Stack Overflow und Stack Exchange zu recherchieren. Die Wahrscheinlichkeit ist groß, dass jemand mit demselben Problem konfrontiert war und es bereits eine Antwort auf deine spezielle Frage gibt.

Wenn du ein anderes Betriebssystem verwendest und/oder immer noch Probleme hast, siehe [Hilfe bekommen](#getting-help).

> [!WARNING]
> 
> Bitte vermeide es, GitHub Issues für Issues mit Vorbedingungen zu erstellen. Sie liegen außerhalb des Rahmens dieses Projekts.

### Probleme mit der Benutzeroberfläche, Schriftarten, Build-Fehler usw.

Wenn du Probleme mit der Benutzeroberfläche oder den Schriftarten hast oder Build-Fehler siehst, kann eine Bereinigung nützlich sein:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

Oder

Benutze den Shortcut

```
npm run clean-and-develop
```

Wenn du weiterhin Probleme mit dem Build hast, solltest du den Arbeitsbereich aufräumen.

Verwende `git clean` im interaktiven Modus:

```
git clean -ifdX
```

<details>
   <summary>
      So bereinigst du nicht verfolgte Git-Dateien (Screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Wie man nicht verfolgte Git-Dateien bereinigt" />
</details>

### Probleme mit der API, dem Login, der Einreichung von Aufgaben, etc.

Wenn du dich nicht anmelden kannst und stattdessen ein Banner mit einer Fehlermeldung siehst, dass es an freeCodeCamp gemeldet wird, überprüfe bitte, ob dein lokaler Port `3000` nicht von einem anderen Programm verwendet wird.

<!-- tabs:start -->

#### **macOS/Linux/WSL unter Windows - Über Terminal:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

#### **Unter Windows - Von der erweiterten PowerShell aus:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

<!-- tabs:end -->

---

### Probleme beim Installieren von Abhängigkeiten

Wenn du bei der Installation der Abhängigkeiten Fehler erhältst, vergewissere dich bitte, dass du dich nicht in einem eingeschränkten Netzwerk befindest oder dass deine Firewall-Einstellungen den Zugriff auf die Ressourcen nicht verhindern.

Die Ersteinrichtung kann je nach Netzwerkbandbreite eine Weile dauern. Sei geduldig, und wenn du immer noch nicht weiterkommst, empfehlen wir dir, GitPod statt eines Offline-Setups zu verwenden.

> [!NOTE] Wenn du Apple-Geräte mit M1-Chip verwendest, um die Anwendung lokal auszuführen, wird empfohlen, Node v14.7 oder höher zu verwenden. Andernfalls kann es zu Problemen mit Abhängigkeiten wie Sharp kommen.

## Hilfe erhalten

Wenn du nicht weiterkommst und Hilfe brauchst, kannst du deine Fragen in der [Kategorie "Contributors" in unserem Forum](https://forum.freecodecamp.org/c/contributors) oder im ["Contributors "Chatraum](https://discord.gg/PRyKn3Vbay) stellen.

In der Konsole deines Browsers oder in der Bash / Terminal / Kommandozeile kann eine Fehlermeldung erscheinen, die dir hilft, das Problem zu identifizieren. Gib diese Fehlermeldung in deiner Problembeschreibung an, damit andere das Problem leichter identifizieren und dir bei der Suche nach einer Lösung helfen können.
