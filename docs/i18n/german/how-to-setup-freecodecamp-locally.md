Befolge diese Richtlinien, um freeCodeCamp lokal auf deinem System einzurichten. Das ist sehr empfehlenswert, wenn du regelmäßig einen Beitrag leisten willst.

Für einige dieser Arbeitsabläufe - wie das Beheben von Fehlern in der Codebasis oder im Studienplan - musst du freeCodeCamp lokal auf deinem Computer ausführen.

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

> [!ATTENTION] If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting](#troubleshooting) for details.

Wenn Node.js bereits auf deinem Rechner installiert ist, führe die folgenden Befehle aus, um die Versionen zu überprüfen:

```console
node -v
npm -v
```

> [!TIP] We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

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

> [!TIP] The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository.
> 
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as the `origin` repository. `YOUR_USER_NAME` would be replaced with your GitHub username.

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

> [!WARNING] If you are working on a WSL2 Linux Distro, you might get performance and stability issues by running this project in a folder which is shared between Windows and WSL2 (e.g. `/mnt/c/Users/`). Therefore we recommend to clone this repo into a folder which is mainly used by your WSL2 Linux Distro and not directly shared with Windows (e.g. `~/PROJECTS/`).
> 
> See [this GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) for further Information about this problem.

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

### Konfiguriere Abhängigkeiten

We have automated the process of setting up the development environment in Gitpod for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

(You will still need to create your own fork and branch.)

#### Schritt 1: Einrichten der Umgebungsvariablendatei

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

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

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP] Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### Schritt 2: Abhängigkeiten installieren

This step will install the dependencies required for the application to run:

```console
npm ci
```

#### Schritt 3: MongoDB starten und die Datenbank initialisieren

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. If you are using a custom configuration, modify this value as needed.
> 
> If you followed along with the [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), then you should be able to skip this step if the MongoDB server from that guide is already running. You can confirm this by checking that you can reach `http://localhost:27017` on your local machine.

Start the MongoDB server in a separate terminal:

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

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
npm run seed
```

#### Schritt 4: Starte die freeCodeCamp Client-Anwendung und den API-Server

You can now start up the API server and the client applications.

```console
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `npm run seed:certified-user` will log you out, and you will have to sign in again.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md)

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| Befehl            | Beschreibung                                                                          |
| ----------------- | ------------------------------------------------------------------------------------- |
| `npm ci`          | Installiert / reinstalliert alle Abhängigkeiten und bootet die verschiedenen Dienste. |
| `npm run seed`    | Analysiert alle Aufgaben-Markdown-Dateien und fügt sie in MongoDB ein.                |
| `npm run develop` | Startet den freeCodeCamp API Server und die Client-Anwendungen.                       |
| `npm run clean`   | Uninstalls all dependencies and cleans up caches.                                     |
