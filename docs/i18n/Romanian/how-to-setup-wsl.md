# Configurați freeCodeCamp pe un subsistem Windows pentru Linux (WSL)

> [!NOTĂ] Înainte să urmaţi aceste instrucţiuni asiguraţi-vă că sistemul dumneavoastră îndeplineşte cerinţele
> 
> **WSL 2**: Windows 10 64-bit (Versiunea 2004, Build 19041 sau mai mult) - disponibil pentru toate distribuțiile, inclusiv Windows 10 Home.
> 
> **Docker Desktop pentru Windows**: Vezi cerințele respective pentru [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) și [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Acest ghid acoperă câțiva pași comuni cu configurarea WSL2. odată ce unele dintre problemele comune cu WSL2 sunt soluționate, ar trebui să puteți urmări ghidul nostru local de configurare pentru a lucra cu freeCodeCamp pe Windows care rulează un distro WSL ca Ubuntu.

## Activează WSL

Urmați instrucțiunile de pe [documentația oficială](https://docs.microsoft.com/en-us/windows/wsl/install-win10) pentru a instala WSL1 și apoi pentru a trece la WSL2.

## Install Ubuntu

1. Am recomandat sa utilizam Ubuntu-18.04 sau mai mult cu WSL2.

   > [!NOTĂ]
   > 
   > În timp ce puteți utiliza alte distanțe pe bază de debieni, acestea vin cu ajutorul propriei aruncări și sunt dincolo de domeniul acestui ghid.

2. Actualizează dependențele pentru OS

   ```console
   actualizare apt
   sudo apt upgrade -y

   # curățare
   sudo apt autoremove -y
   ```

## Configurare Git

Git vine pre-instalat cu Ubuntu 18.04, verifică dacă versiunea Git cu `git --version`.

```output
~
!git --version
git versiunea 2.25.1
```

(Opțional, dar recomandat) Acum puteți trece la [configurarea cheilor ssh](https://help.github.com/articles/generating-an-ssh-key) cu GitHub.

## Instalarea unui Editor de cod

Vă recomandăm să instalați [Visual Studio Code](https://code.visualstudio.com) pe Windows 10. Are suport mare pentru WSL și instalează automat toate extensiile necesare pe distanța WSL.

În esență, îți vei edita și păstra codul pe Ubuntu-18.04 cu codul VS instalat pe Windows.

## Instalarea desktopului Docker

**Docker Desktop pentru Windows** vă permite să instalați și să rulați baze de date și servicii precum MongoDB, NGINX, etc. Acest lucru este util pentru a evita capcanele comune cu instalarea MongoDB sau a altor servicii direct pe Windows sau WSL2.

Urmărește instrucțiunile de pe documentația oficială [](https://docs.docker.com/docker-for-windows/install) și instalează Docker Desktop pentru distribuția ta Windows.

Există unele cerințe minime de hardware pentru cea mai bună experiență.

## Configurați desktop-ul Docker pentru WSL

Odată ce Docker Desktop este instalat, [urmați aceste instrucțiuni](https://docs.docker.com/docker-for-windows/wsl) și configurați-o pentru a utiliza instalarea Ubuntu-18.04 ca backend.

Asta face ca containerele să ruleze pe partea WSL în loc să ruleze pe Windows. Veţi putea accesa serviciile prin `http://localhost` atât pe Windows cât şi pe Ubuntu.

## Instalează MongoDB din Docker Hub

Odată ce ai configurat Docker Desktop să lucrezi cu WSL2, urmează acești pași pentru a începe un serviciu MongoDB:

1. Lansați un nou terminal Ubuntu-18.04

2. Trage `MongoDB 3.6` din dockerhub

   ```console
   docker pull mongo:3
   ```

3. Porniți serviciul MongoDB în portul `27017`, și configurați-l pentru a rula automat la repornirile sistemului

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unlless stopped \
     -d mongo:3
   ```

4. Acum puteţi accesa serviciul atât din Windows cât şi din Ubuntu la `mongodb://localhost:27017`.

## Instalând Node.js şi npm

Vă recomandăm să instalați versiunea LTS pentru Node.js cu un manager de versiuni node - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

După instalare, utilizaţi aceste comenzi pentru a instala şi utiliza versiunea Node.js după cum este necesar

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Utilizare
# nvm utilizarea <version>

nvm 12
```

Node.js vine pachetul cu `npm`, puteți actualiza la ultimele versiuni de `npm` cu:

```console
npm instalare -g npm@latest
```

## Configurați tabăra freeCodep local

Acum că ați instalat condițiile prealabile, urmați [ghidul nostru local de configurare](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) pentru a clona, instala și instala freeCodeCamp local pe calculatorul dvs.

> [!ATENŢIE]
> 
> Rețineți că, în acest moment, configurația pentru testele Cypress (și nevoile GUI aferente) este în curs de desfășurare. Ar trebui să mai puteţi lucra la cea mai mare parte a codebazului.

## Link-uri utile

- [O configurare WSL2 Dev cu Ubuntu 20.04, Node.js, MongoDB, VS Code și Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - un articol de Mrugesh Mohapatra (Staff Developer la freeCodeCamp.org)
- Întrebări frecvente privind:
  - [Subsistemul Windows pentru Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop pentru Windows](https://docs.docker.com/docker-for-windows/faqs)
