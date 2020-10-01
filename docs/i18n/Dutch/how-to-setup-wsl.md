# Installeer freeCodeCamp op Windows Subsysteem voor Linux (WSL)

> [!NOT] Zorg ervoor dat uw systeem voldoet aan de vereisten voordat u deze instructies opvolgt.
> 
> **WSL 2**: Windows 10 64-bit (versie 2004, Build 19041 of hoger) - beschikbaar voor alle distributies, inclusief Windows 10 Home.
> 
> **Docker Desktop voor Windows**: Zie de betreffende vereisten voor [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) en [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Deze handleiding bestrijkt enkele algemene stappen met de installatie van WSL2. Zodra sommige van de gemeenschappelijke kwesties met WSL2 zijn aangepakt, u moet in staat zijn om onze lokale installatiehandleiding te volgen om met freeCodeCamp op Windows te werken met een WSL distro zoals Ubuntu.

## WSL inschakelen

Volg de instructies op de [officiële documentatie](https://docs.microsoft.com/en-us/windows/wsl/install-win10) om WSL1 te installeren en daarna te upgraden naar WSL2.

## Install Ubuntu

1. We hebben Ubuntu-18.04 of hoger aanbevolen met WSL2.

   > [!NOT]
   > 
   > Hoewel je andere niet-debiaanse ditis mag gebruiken, komen ze allemaal met hun eigen gotchas en vallen ze buiten het bereik van deze handleiding.

2. Werk de afhankelijkheden van het besturingssysteem bij

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Git instellen

Git wordt vooraf geïnstalleerd met Ubuntu 18.04, controleer of je Git versie met `git --versie`.

```output
~
± git --versie
git versie 2.25.1
```

(Optioneel maar aanbevolen) U kunt nu doorgaan naar [uw ssh toetsen instellen](https://help.github.com/articles/generating-an-ssh-key) met GitHub.

## Een Code-Editor installeren

We raden ten zeerste aan [Visual Studio Code](https://code.visualstudio.com) te installeren op Windows 10. Het heeft geweldige ondersteuning voor WSL en installeert automatisch alle benodigde extensies op je WSL distro.

In wezen zal je de code bewerken en opslaan op Ubuntu-18.04 met VS code geïnstalleerd op Windows.

## Installeren Docker Desktop

**Docker Desktop for Windows** stelt u in staat om database en services zoals MongoDB, NGINX, etc. te installeren en uitvoeren. Dit is handig om veelvoorkomende valkuilen te voorkomen bij het installeren van MongoDB of andere diensten rechtstreeks op Windows of WSL2.

Volg de instructuction op de [officiële documentatie](https://docs.docker.com/docker-for-windows/install) en installeer Docker Desktop voor uw Windows-distributie.

Er zijn enkele minimale hardware vereisten voor de beste ervaring.

## Configureer Docker Desktop voor WSL

Zodra Docker Desktop is geïnstalleerd, [volg deze instructies](https://docs.docker.com/docker-for-windows/wsl) en configureer het zodat de Ubuntu-18.04 installatie als een backend.

Dit maakt het zo dat de containers op WSL lopen in plaats van op Windows te draaien. U kunt toegang krijgen tot de diensten via `http://localhost` op zowel Windows als Ubuntu.

## MongoDB installeren van Docker Hub

Zodra u de Docker Desktop hebt geconfigureerd om met WSL2 te werken, volg dan deze stappen om een MongoDB service te starten:

1. Start een nieuwe Ubuntu-18.04 terminal

2. Trek `MongoDB 3.6` van dockerhub

   ```console
   docker pull mongo:3
   ```

3. Start de MongoDB-service op poort `27017`, en stel in dat deze automatisch wordt uitgevoerd op het systeem herstart

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --herstart unless-stop \
     -d mongo:3
   ```

4. U kunt nu de service openen vanaf Windows of Ubuntu via `mongodb://localhost:27017`.

## Node.js en npm installeren

Wij raden u aan om de LTS release voor Node.js te installeren met een node versie manager - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Eenmaal geïnstalleerd gebruik deze commando's om de Node.js versie te installeren en gebruiken indien nodig

```console
nvm install --lts

# OF
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js wordt gebundeld met `npm`, je kunt updaten naar de laatste versies van `npm` met:

```console
npm installatie -g npm@latest
```

## Een freeCodeCamp lokaal instellen

Nu dat u de vereiste vereisten hebt geïnstalleerd, volgt u [onze lokale setup-gids](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) om freeCodeCamp lokaal te klonen, installeren en installeren op uw computer.

> [!WAARSCHUWING]
> 
> Let op, op dit moment zijn de instellingen voor Cypress tests (en de bijbehorende GUI behoeften) een werk in uitvoering. Je zou toch aan het grootste deel van de codebase moeten kunnen werken.

## Nuttige links

- [Een WSL2 Dev Setup met Ubuntu 20.04, Node.js, MongoDB, VS Code en Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - een artikel van Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Veel gestelde vragen op:
  - [Windows Subsysteem voor Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop voor Windows](https://docs.docker.com/docker-for-windows/faqs)
