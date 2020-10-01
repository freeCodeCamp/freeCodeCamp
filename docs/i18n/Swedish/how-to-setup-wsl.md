# Konfigurera freeCodeCamp på Windows Subsystem för Linux (WSL)

> [!NOTE] Innan du följer dessa instruktioner se till att ditt system uppfyller kraven
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Bygg 19041 eller högre) - tillgänglig för alla distributioner, inklusive Windows 10 Home.
> 
> **Docker Desktop för Windows**: Se respektive krav för [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) och [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Denna guide täcker några vanliga steg med installationen av WSL2. När några av de gemensamma problem med WSL2 behandlas, du bör kunna följa vår lokala installationsguide för att arbeta med freeCodeCamp på Windows kör en WSL distro som Ubuntu.

## Aktivera WSL

Följ instruktionerna på [officiella dokumentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) för att installera WSL1 och sedan uppgradera till WSL2.

## Install Ubuntu

1. Vi rekommenderar att du använder Ubuntu-18.04 eller senare med WSL2.

   > [!OBS]
   > 
   > Även om du kan använda andra icke-Debianbaserade distros, kommer de alla med sina egna gotchas och ligger utanför den här guidens räckvidd.

2. Uppdatera beroenden för OS

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Ställ in Git

Git kommer förinstallerat med Ubuntu 18.04, verifiera att din Git-version med `git --version`.

```output
~
<unk> git --version
git version 2.25.1
```

(Valfritt men rekommenderat) Du kan nu fortsätta till [att sätta upp dina ssh nycklar](https://help.github.com/articles/generating-an-ssh-key) med GitHub.

## Installera en kodredigerare

Vi rekommenderar starkt att installera [Visual Studio-kod](https://code.visualstudio.com) på Windows-10. Den har bra stöd för WSL och installerar automatiskt alla nödvändiga tillägg på din WSL distro.

I huvudsak kommer du att redigera och lagra din kod på Ubuntu-18.04 med VS-kod installerad på Windows.

## Installerar Docker-skrivbordet

**Docker Desktop för Windows** låter dig installera och köra databas och tjänster som MongoDB, NGINX, etc. Detta är användbart för att undvika vanliga fallgropar med att installera MongoDB eller andra tjänster direkt på Windows eller WSL2.

Följ instruktionerna på [officiella dokumentation](https://docs.docker.com/docker-for-windows/install) och installera Docker Desktop för din Windows-distribution.

Det finns några minimikrav på hårdvara för bästa upplevelse.

## Konfigurera Docker-skrivbordet för WSL

När Docker Desktop är installerat, [följ dessa instruktioner](https://docs.docker.com/docker-for-windows/wsl) och konfigurera den för att använda installationen Ubuntu-18.04 som en backend.

Detta gör det så att behållarna körs på WSL-sidan istället för att köras på Windows. Du kommer att kunna komma åt tjänsterna över `http://localhost` på både Windows och Ubuntu.

## Installera MongoDB från Docker Hub

När du har konfigurerat Docker Desktop för att arbeta med WSL2, följ dessa steg för att starta en MongoDB tjänst:

1. Starta en ny Ubuntu-18.04 terminal

2. Dra `MongoDB 3.6` från dockerhub

   ```console
   docker pull mongo:3
   ```

3. Starta MongoDB-tjänsten vid port `27017`och konfigurera den så att den körs automatiskt vid omstart av systemet

   ```console
   docker kör -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Du kan nu komma åt tjänsten från både Windows eller Ubuntu på `mongodb://localhost:27017`.

## Installerar Node.js och npm

Vi rekommenderar att du installerar LTS-versionen för Node.js med en nodversionshanterare - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

En gång installerat använda dessa kommandon för att installera och använda Node.js versionen efter behov

```console
nvm install --lts

# ELLER
# nvm install <version>

nvm install 14

# Användning
# nvm use <version>

nvm use 12
```

Node.js levereras med `npm`, du kan uppdatera till de senaste versionerna av `npm` med:

```console
npm installation -g npm@senaste
```

## Konfigurera freeCodeCamp lokalt

Nu när du har installerat förutsättningarna, följ [vår lokala installationsguide](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) för att klona, installera och installera freeCodeCamp lokalt på din maskin.

> [!VARNING]
> 
> Vänligen notera, vid denna tid uppsättningen för Cypress tester (och relaterade GUI behov) är ett pågående arbete. Du bör fortfarande kunna arbeta på de flesta av kodbasen.

## Användbara länkar

- [En WSL2 Dev Setup med Ubuntu 20.04, Node.js, MongoDB, VS-kod och Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - en artikel av Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Vanliga frågor om:
  - [Windows Subsystem för Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Skrivbord för Windows](https://docs.docker.com/docker-for-windows/faqs)
