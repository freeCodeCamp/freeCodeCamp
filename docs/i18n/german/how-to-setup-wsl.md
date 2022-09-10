# freeCodeCamp auf dem Windows Subsystem für Linux (WSL) einrichten

> [!HINWEIS] Bevor Sie diesen Anweisungen folgen, stellen Sie sicher, dass Ihr System die Anforderungen erfüllt
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Build 19041 oder höher) - verfügbar für alle Distributionen einschließlich Windows 10 Home.
> 
> **Docker Desktop für Windows**: Siehe entsprechende Anforderungen für [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) und [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Dieser Leitfaden behandelt einige allgemeine Schritte bei der Einrichtung von WSL2. Sobald einige der üblichen Probleme mit WSL2 behoben sind, solltest du in der Lage sein, [diesem Leitfaden zur lokalen Einrichtung](how-to-setup-freecodecamp-locally.md) zu folgen, um mit freeCodeCamp unter Windows und einer WSL-Distribution wie Ubuntu zu arbeiten.

## WSL aktivieren

Folge den Anweisungen in der [offiziellen Dokumentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10), um WSL1 zu installieren und anschließend auf WSL2 zu aktualisieren.

## Ubuntu installieren

1. Wir empfehlen Ubuntu-18.04 oder höher mit WSL2.

   > [!NOTE]
   > 
   > Du kannst zwar auch andere, nicht auf Debian basierende Distributionen verwenden, aber die haben alle ihre eigenen Tücken und werden in diesem Leitfaden nicht behandelt.

2. Abhängigkeiten (Dependencies) für das Betriebssystem aktualisieren

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Git einrichten

Git ist bei Ubuntu 18.04 vorinstalliert. Überprüfe deine Git-Version mit `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Optional, aber empfohlen) Du kannst jetzt mit dem [Einrichten deiner SSH-Schlüssel](https://help.github.com/articles/generating-an-ssh-key) bei GitHub fortfahren.

## Installation eines Code-Editors

Wir empfehlen wärmstens, [Visual Studio Code](https://code.visualstudio.com) auf Windows 10 zu installieren. Es bietet eine hervorragende Unterstützung für WSL und installiert automatisch alle notwendigen Erweiterungen auf deiner WSL-Distribution.

Im Wesentlichen bearbeitest und speicherst du deinen Code auf Ubuntu-18.04, während VS Code auf Windows installiert ist.

Wenn du [IntelliJ Idea](https://www.jetbrains.com/idea/) verwendest, musst du eventuell deinen Node-Interpreter und Npm-Paketmanager auf den Stand deiner WSL-Distribution bringen.

Du kannst diese Einstellungen überprüfen, indem du zu Einstellungen > Sprachen & Frameworks > Node.js und NPM gehst.

## Docker Desktop installieren

**Docker Desktop für Windows** ermöglicht es dir, Datenbanken wie MongoDB und andere Dienste wie NGINX und mehr zu installieren und auszuführen. Dies ist nützlich, um häufige Fallstricke bei der Installation von MongoDB oder anderen Diensten direkt auf Windows oder WSL2 zu vermeiden.

Folge der Anleitung in der [offiziellen Dokumentation](https://docs.docker.com/docker-for-windows/install) und installiere Docker Desktop für deine Windows-Distribution.

Es gibt einige Mindestanforderungen an die Hardware für das beste Erlebnis.

## Docker Desktop für WSL konfigurieren

Sobald Docker Desktop installiert ist, [folgst du dieser Anleitung](https://docs.docker.com/docker-for-windows/wsl) und konfigurierst es so, dass es die Ubuntu-18.04-Installation als Backend verwendet.

Dadurch laufen die Container auf der WSL-Seite und nicht unter Windows. Du kannst sowohl unter Windows als auch unter Ubuntu über `http://localhost` auf die Dienste zugreifen.

## MongoDB vom Docker Hub aus installieren

Sobald du Docker Desktop für die Zusammenarbeit mit WSL2 konfiguriert hast, befolge diese Schritte, um einen MongoDB-Dienst zu starten:

1. Starte ein neues Ubuntu-18.04 Terminal

2. Rufe `MongoDB 4.0.x` von dockerhub ab

   ```console
   docker pull mongo:4.0
   ```

3. Starte den MongoDB-Dienst an Port `27017` und konfiguriere ihn so, dass er bei Systemneustarts automatisch ausgeführt wird

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. Du kannst jetzt sowohl von Windows als auch von Ubuntu aus auf den Dienst unter `mongodb://localhost:27017` zugreifen.

## Installiere Node.js und npm

Wir empfehlen dir, die LTS-Version für Node.js mit einem Node-Versionsmanager zu installieren - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Nach der Installation kannst du mit den folgenden Befehlen die Node.js-Version installieren und verwenden, falls nötig

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js wird mit `npm` ausgeliefert. Du kannst wie folgt auf die neuesten Versionen von `npm` aktualisieren:

```console
npm install -g npm@latest
```

## FreeCodeCamp lokal einrichten

Nachdem du nun die Voraussetzungen erfüllt hast, folge [unserem Leitfaden zur lokalen Einrichtung](how-to-setup-freecodecamp-locally.md), um freeCodeCamp zu klonen, zu installieren und lokal auf deinem Rechner einzurichten.

> [!WARNING]
> 
> Bitte beachte, dass die Einrichtung der Cypress-Tests (und die damit verbundenen Anforderungen an die Benutzeroberfläche) derzeit noch nicht abgeschlossen ist. Du solltest immer noch in der Lage sein, an den meisten Teilen der Codebasis zu arbeiten.

## Nützliche Links

- [Ein WSL2 Dev Setup mit Ubuntu 20.04, Node.js, MongoDB, VS Code und Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - ein Artikel von Mrugesh Mohapatra (Staff Developer bei freeCodeCamp.org)
- Häufig gestellte Fragen zu:
  - [Windows Subsystem für Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop für Windows](https://docs.docker.com/docker-for-windows/faqs)
