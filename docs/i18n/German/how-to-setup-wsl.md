# FreeCodeCamp auf Windows Subsystem für Linux (WSL) einrichten

> [!HINWEIS] Bevor Sie diesen Anweisungen folgen, stellen Sie sicher, dass Ihr System die Anforderungen erfüllt
> 
> **WSL 2**: Windows 10 64-Bit (Version 2004, Build 19041 oder höher) - verfügbar für alle Distributionen, einschließlich Windows 10 Home.
> 
> **Docker Desktop für Windows**: Siehe die jeweiligen Voraussetzungen für [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) und [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Diese Anleitung behandelt einige häufige Schritte mit dem Setup von WSL2. Sobald einige der häufigen Probleme mit WSL2 behoben sind, Sie sollten in der Lage sein, unserem lokalen Setup-Guide zu folgen, um mit FreeCodeCamp unter Windows mit einer WSL-Distribution wie Ubuntu zu arbeiten.

## WSL aktivieren

Folgen Sie den Anweisungen in der [-offiziellen Dokumentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) um WSL1 zu installieren und dann auf WSL2 zu aktualisieren.

## Install Ubuntu

1. Wir empfehlen Ubuntu-18.04 oder höher mit WSL2.

   > [!HINWEIS]
   > 
   > Während Sie andere nicht-debian-basierte Distributionen verwenden können, kommen sie alle mit ihren eigenen Gotchas und sind außerhalb des Geltungsbereichs dieser Anleitung.

2. Abhängigkeiten für das Betriebssystem aktualisieren

   ```console
   sudo apt update
   sudo apt upgrade -y

   # bereinigen
   sudo apt autoremove -y
   ```

## Git einrichten

Git kommt vorinstalliert mit Ubuntu 18.04, überprüfen Sie, dass Ihre Git-Version mit `git --version`.

```output
~
<unk> git --version
git Version 2.25.1
```

(Optional, aber empfohlen) Sie können nun mit [fortfahren und Ihre SSH-Schlüssel](https://help.github.com/articles/generating-an-ssh-key) mit GitHub einrichten.

## Installation eines Code Editors

Wir empfehlen dringend, [Visual Studio Code](https://code.visualstudio.com) unter Windows 10 zu installieren. Es hat große Unterstützung für WSL und installiert automatisch alle notwendigen Erweiterungen auf Ihrem WSL Distribut.

Grundsätzlich werden Sie Ihren Code auf Ubuntu-18.04 bearbeiten und speichern, wobei VS Code unter Windows installiert ist.

## Docker Desktop installieren

**Docker Desktop für Windows** ermöglicht die Installation und Ausführung von Datenbanken und Diensten wie MongoDB, NGINX, etc. Dies ist nützlich, um häufige Fallstricke bei der Installation von MongoDB oder anderen Diensten direkt unter Windows oder WSL2 zu vermeiden. Dies ist nützlich, um häufige Fallstricke bei der Installation von MongoDB oder anderen Diensten direkt unter Windows oder WSL2 zu vermeiden.

Folgen Sie der Anleitung in der [-offiziellen Dokumentation](https://docs.docker.com/docker-for-windows/install) und installieren Sie Docker Desktop für Ihre Windows-Distribution.

Es gibt einige minimale Hardwareanforderungen für die beste Erfahrung.

## Docker Desktop für WSL konfigurieren

Sobald Docker Desktop installiert ist, [folgen Sie diesen Anweisungen](https://docs.docker.com/docker-for-windows/wsl) und konfigurieren Sie sie so, dass sie die Ubuntu-18.04 Installation als Backend verwenden.

Dies macht es so, dass die Container auf der WSL-Seite laufen, anstatt unter Windows zu laufen. Sie können auf die Dienste über `http://localhost` unter Windows und Ubuntu zugreifen.

## MongoDB von Docker Hub installieren

Sobald Sie Docker Desktop für die Arbeit mit WSL2 konfiguriert haben, folgen Sie diesen Schritten, um einen MongoDB-Dienst zu starten:

1. Starte ein neues Ubuntu-18.04 Terminal

2. Ziehe `MongoDB 3.6` von Dockerhub

   ```console
   docker pull mongo:3
   ```

3. Starten Sie den MongoDB-Dienst am Port `27017`und konfigurieren Sie ihn so, dass er automatisch beim System-Neustart ausgeführt wird

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stop \
     -d mongo:3
   ```

4. Sie können nun auf den Dienst von Windows oder Ubuntu unter `mongodb://localhost:27017` zugreifen.

## Installiere Node.js und npm

Wir empfehlen Ihnen, das LTS-Release für Node.js mit einem Knotenversionsmanager zu installieren - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Sobald installiert, verwenden Sie diese Befehle um die Node.js Version zu installieren und bei Bedarf zu verwenden

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js wird mit `npm`gebündelt, Sie können auf die neueste Version von `npm` aktualisieren mit:

```console
npm Installation -g npm@latest
```

## FreeCodeCamp lokal einrichten

Nachdem Sie die Voraussetzungen installiert haben, folgen Sie [unserem lokalen Setup-Leitfaden](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) um FreeCodeCamp lokal auf Ihrem Rechner zu klonen, zu installieren und einzurichten.

> [!WARNUNG]
> 
> Bitte beachten Sie, dass zu diesem Zeitpunkt die Einrichtung für Cypress Tests (und verwandte GUI erforderlich) in Arbeit sind. Sie sollten immer noch in der Lage sein, an den meisten der Codebase zu arbeiten.

## Nützliche Links

- [Ein WSL2 Dev Setup mit Ubuntu 20.04, Node.js, MongoDB, VS Code und Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - ein Artikel von Mrugesh Mohapatra (Mitarbeiter Entwickler auf freeCodeCamp.org)
- Häufig gestellte Fragen am:
  - [Windows Subsystem für Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop für Windows](https://docs.docker.com/docker-for-windows/faqs)
