# Konfigurer freeCodeCamp på Windows Undersystem til Linux (WSL)

> [!BEMÆRK] Før du følger disse instruktioner, skal du sørge for, at dit system opfylder kravene
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Byg 19041 eller højere) - tilgængelig for alle distributioner, herunder Windows 10 Home.
> 
> **Docker Desktop til Windows**: Se de respektive krav til [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) og [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Denne vejledning dækker nogle fælles trin med opsætningen af WSL2. Når nogle af de fælles problemer med WSL2 er løst, du bør være i stand til at følge vores lokale setup guide til at arbejde med freeCodeCamp på Windows, der kører en WSL distro som Ubuntu.

## Aktiver WSL

Følg instruktionerne på den [officielle dokumentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) for at installere WSL1 og efterfulgt af opgradering til WSL2.

## Install Ubuntu

1. Vi anbefalede at bruge Ubuntu-18.04 eller derover med WSL2.

   > [!BEMÆRK]
   > 
   > Mens du kan bruge andre ikke-debiske baserede distros, de alle kommer med deres egen gotchas og er uden for rækkevidden af denne guide.

2. Opdater afhængighederne for OS

   ```console
   sudo apt update
   sudo apt upgrade -y

   # oprydning
   sudo apt autoremove -y
   ```

## Opsæt Git

Git leveres forudinstalleret med Ubuntu 18.04, verificer at din Git-version med `git --version`.

```output
~
~git --version
git version 2.25.1
```

(Valgfri, men anbefales) Du kan nu gå videre til [opsætning af dine ssh-nøgler](https://help.github.com/articles/generating-an-ssh-key) med GitHub.

## Installerer en kodeeditor

Vi anbefaler stærkt at installere [Visual Studio Code](https://code.visualstudio.com) på Windows 10. Det har stor støtte til WSL og installerer automatisk alle de nødvendige udvidelser på din WSL distro.

Essentielt vil du redigere og gemme din kode på Ubuntu-18.04 med VS-kode installeret på Windows.

## Installerer Docker- Skrivebord

**Docker Desktop til Windows** giver dig mulighed for at installere og køre database og tjenester som MongoDB, NGINX osv. Dette er nyttigt for at undgå almindelige faldgruber med at installere MongoDB eller andre tjenester direkte på Windows eller WSL2.

Følg instruktionen på den [officielle dokumentation](https://docs.docker.com/docker-for-windows/install) og installer Docker Desktop til din Windows-distribution.

Der er nogle minimale hardwarekrav til den bedste oplevelse.

## Indstil Docker- skrivebord til WSL

Når Docker Desktop er installeret, [følg disse instruktioner](https://docs.docker.com/docker-for-windows/wsl) og konfigurér den til at bruge Ubuntu-18.04 installation som en backend.

Dette gør det, så containerne kører på WSL side i stedet for at køre på Windows. Du vil kunne tilgå tjenesterne via `http://localhost` på både Windows og Ubuntu.

## Installer MongoDB fra Docker Hub

Når du har konfigureret Docker Desktop til at arbejde med WSL2, skal du følge disse trin for at starte en MongoDB tjeneste:

1. Start en ny Ubuntu-18.04 terminal

2. Træk `MongoDB 3.6` fra dockerhub

   ```console
   docker pull mongo:3
   ```

3. Start MongoDB-tjenesten på port `27017`og konfigurér den til automatisk at køre på systemgenstart

   ```console
   docker run - it \
     - v mongodata:/data/db \
     - p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Du kan nu få adgang til tjenesten fra både Windows eller Ubuntu på `mongodb://localhost:27017`.

## Installerer node.js og npm

Vi anbefaler, at du installerer LTS-udgivelsen til Node.js med en node version manager - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Når det er installeret bruge disse kommandoer til at installere og bruge Node.js version efter behov

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js kommer bundtet med `npm`, du kan opdatere til de nyeste versioner af `npm` med:

```console
npm install -g npm@latest
```

## Konfigurer freeCodeCamp lokalt

Nu hvor du har installeret forudsætningerne, så følg [vores lokale installationsguide](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) for at klone, installere og opsætte freeCodeCamp lokalt på din maskine.

> [!WARNING]
> 
> Bemærk, at på dette tidspunkt er opsætningen til Cypress tests (og relaterede GUI behov) et arbejde i gang. Du bør stadig være i stand til at arbejde på det meste af kodebasen.

## Nyttige Links

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code and Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - en artikel af Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Ofte stillede spørgsmål om:
  - [Windows-delsystem til Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop til Windows](https://docs.docker.com/docker-for-windows/faqs)
