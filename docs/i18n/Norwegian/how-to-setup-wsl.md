# Sett opp freeCodeCamp på Windows Subsystem for Linux (WSL)

> Før du følger disse instruksjonene må du forsikre deg om at systemet oppfyller kravene
> 
> **WSL 2**: Windows 10 64-bit (versjon 2004, Build 19041 eller høyere) - tilgjengelig for alle distribusjoner, inkludert Windows 10 hjem.
> 
> **Docker Desktop for Windows**: Se respektive krav for [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) og [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Denne veiledningen dekker noen felles trinn med oppsett av WSL2. Så snart noen av de vanlige problemene med WSL2 er tatt opp, du bør kunne følge vår lokale oppsettsveiledning til å arbeide med freeCodeCamp på Windows som kjører en WSL-distro som Ubuntu.

## Aktiver WSL

Følg instruksjonene på [den offisielle dokumentasjonen](https://docs.microsoft.com/en-us/windows/wsl/install-win10) for å installere WSL1 og etterfulgt av oppgradering til WSL2.

## Install Ubuntu

1. Vi anbefalte med Ubuntu-18.04 eller mer med WSL2.

   > [!MERKNAD]
   > 
   > Selv om du kan bruke andre ikke-biefaserte distroer, kommer de alle med sin egen gotchas og ligger utenfor denne veiledningens virkeområde.

2. Oppdater avhengighetene for OS

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove
   ```

## Sett opp Git

Git kommer forhåndsinstallert med Ubuntu 18.04, bekreft at din Git versjon med `git --version`.

```output
~
″git --version
git versjon 2.25.1
```

(Valgfri, men anbefales) Du kan nå fortsette til [sette opp dine ssah-nøkler](https://help.github.com/articles/generating-an-ssh-key) med GitHub.

## Installere en kodingseditor

Vi anbefaler på det sterkeste å installere [Visual Studio Code](https://code.visualstudio.com) i Windows 10. Det har stor støtte for WSL og automatisk installerer alle nødvendige utvidelser på WSL distro.

Essensielt vil du redigere og lagre koden din på Ubuntu-18.04 med VS Code installert i Windows.

## Installerer Docker skrivebord

**Docker Desktop for Windows** lar deg installere og kjøre database og tjenester som MongoDB, NGINX, osv. Dette er nyttig for å unngå vanlige pitfalls ved installering av MongoDB, eller andre tjenester direkte på Windows eller WSL2.

Følg instruksjonene på [den offisielle dokumentasjonen](https://docs.docker.com/docker-for-windows/install) og installer Docker Desktop for din Windows distribusjon.

Det er noen minimumskrav til maskinvare for den beste erfaringen.

## Konfigurer Docker skrivebord for WSL

Når Docker Desktop er installert, [følg denne bruksanvisningen](https://docs.docker.com/docker-for-windows/wsl) og konfigurer den for å bruke Ubuntu-18.04 installasjonen som backend.

Dette gjør at beholderen springer på WSL-siden i stedet for å løpe på Windows. Du vil få tilgang til tjenestene via `http://localhost` både på Windows og Ubuntu.

## Installer MongoDB fra Docker HUL

Når du har konfigurert Docker Desktop til å arbeide med WSL2, følg disse trinnene for å starte en MongoDB-tjeneste:

1. Start en ny Ubuntu-18.04 terminal

2. Trekk `MongoDB 3.6` fra dockerhub

   ```console
   docker pull mongo:3
   ```

3. Start MongoDB-tjenesten ved port `27017`, og konfigurer den for å kjøre automatisk ved omstart av systemet

   ```console
   docker kjør -det \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Nå får du tilgang til tjenesten fra både Windows eller Ubuntu på `mongodb://localhost: 27017`.

## Installere Node.js og npm

Vi anbefaler at du installerer LTS utgivelsen for Node.js med en node-versjonsbehandler - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Når du er installert, bruk disse kommandoene for å installere og bruke Node.js versjonen etter behov

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Bruk
# nvm bruk <version>

nvm bruk 12
```

Node.js kommer sammen med `npm`, du kan oppdatere til de siste versjonene av `npm` med:

```console
npm install -g npm@latest
```

## Sett opp freeCodeCamp lokalt

Nå som du har installert pre-requisittene, følg [vår lokale oppsettsveiledning](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) å klene, installere og sette opp freeCodeCamp lokalt på din maskin.

> [!ADVARSEL]
> 
> Vær oppmerksom på at settet opp for cypress tester (og relaterte GUI behov) er et pågående arbeid. Du bør fortsatt være i stand til å jobbe på mesteparten av kodebase

## Nyttige lenker

- [A WSL2 Dev Setup med Ubuntu 20.04, Node.js, MongoDB, VS Code og Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - en artikkel av Mrugesh Mohapatra (Staff Developer på freeCodeCamp.org)
- Ofte stilte spørsmål på:
  - [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker skrivebord for Windows](https://docs.docker.com/docker-for-windows/faqs)
