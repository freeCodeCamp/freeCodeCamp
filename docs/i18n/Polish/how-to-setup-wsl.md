# Skonfiguruj freeCodeCamp w podsystemie Windows dla Linux (WSL)

> [!UWAGA] Przed wykonaniem tych instrukcji upewnij się, że Twój system spełnia wymagania
> 
> **WSL 2**: Windows 10 64-bit (wersja 2004, Build 19041 lub nowszy) - dostępny dla wszystkich dystrybucji, w tym Windows 10 Home.
> 
> **Docker Desktop dla Windows**: Zobacz odpowiednie wymagania dla [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) i [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Przewodnik ten obejmuje pewne wspólne kroki z konfiguracją WSL2. Po rozwiązaniu niektórych wspólnych problemów z WSL2 powinieneś być w stanie postępować zgodnie z naszym lokalnym przewodnikiem konfiguracyjnym, aby pracować z freeCodeCamp na Windowsie, w którym działa WSL distro jak Ubuntu.

## Włącz WSL

Postępuj zgodnie z instrukcjami zawartymi w [oficjalnej dokumentacji](https://docs.microsoft.com/en-us/windows/wsl/install-win10) aby zainstalować WSL1, a następnie aktualizuj do WSL2.

## Install Ubuntu

1. Zalecamy użycie Ubuntu-18,04 lub więcej z WSL2.

   > [!UWAGA]
   > 
   > Podczas gdy pacjent może stosować inne distropy niezwiązane z debianem, wszyscy wychodzą z własnymi gośćmi i wykraczają poza zakres tego przewodnika.

2. Aktualizuj zależności dla systemu operacyjnego

   ```console
   aktualizacja sudo apt
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Skonfiguruj Git

Git jest wstępnie zainstalowany z Ubuntu 18.04, sprawdź czy wersja Git z `git --version`.

```output
~
<unk> git --version
git wersja 2.25.1
```

(Opcjonalne, ale zalecane) Możesz teraz przejść do [konfiguracji kluczy ssh](https://help.github.com/articles/generating-an-ssh-key) z GitHub.

## Instalowanie edytora kodu

Zalecamy zainstalowanie [Visual Studio Code](https://code.visualstudio.com) w systemie Windows 10. Ma on ogromne wsparcie dla WSL i automatycznie instaluje wszystkie niezbędne rozszerzenia na Twoim distro.

Zasadniczo będziesz edytować i przechowywać swój kod na Ubuntu-18.04 z VS Code zainstalowanym w Windows.

## Instalacja pulpitu dokującego

**Docker Desktop dla Windows** pozwala zainstalować i uruchomić bazę danych i usługi takie jak MongoDB, NGINX itp. Jest to przydatne do uniknięcia wspólnych pułapek z instalacją MongoDB lub innych usług bezpośrednio w systemie Windows lub WSL2.

Śledź brak struktury na [oficjalnej dokumentacji](https://docs.docker.com/docker-for-windows/install) i zainstaluj Docker Desktop dla Twojej dystrybucji Windows.

Istnieją pewne minimalne wymagania dotyczące sprzętu, aby uzyskać najlepsze doświadczenie.

## Skonfiguruj pulpit dokujący dla WSL

Po zainstalowaniu pulpitu Docker, [postępuj zgodnie z poniższymi instrukcjami](https://docs.docker.com/docker-for-windows/wsl) i skonfiguruj go, aby użyć instalacji Ubuntu-18.04 jako zaplecza.

Dzięki temu kontenery działają po stronie WSL zamiast na Windows. Będziesz mógł uzyskać dostęp do usług przez `http://localhost` zarówno na Windowsie, jak i Ubuntu.

## Zainstaluj MongoDB z Docker Hub

Po skonfigurowaniu pulpitu dokującego do pracy z WSL2, wykonaj następujące kroki, aby uruchomić usługę MongoDB:

1. Uruchomienie nowego terminalu w Ubuntu-18.04

2. Pull `MongoDB 3.6` z dockerhub

   ```console
   docker pull mongo:3
   ```

3. Uruchom usługę MongoDB w porcie `27017`i skonfiguruj ją automatycznie po ponownym uruchomieniu systemu

   ```console
   docker uruchom -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Teraz możesz uzyskać dostęp do usługi zarówno z Windows jak i Ubuntu pod adresem `mongodb://localhost:27017`.

## Instalowanie Node.js i npm

Zalecamy zainstalowanie wersji LTS dla Node.js z menadżerem wersji węzła - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Po zainstalowaniu użyj tych poleceń, aby zainstalować i użyć wersji Node.js w razie potrzeby

```console
nvm install --lts

# LUB
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js łączy się z `npm`, możesz zaktualizować do najnowszych wersji `npm` z:

```console
npm zainstaluj -g npm@latest
```

## Skonfiguruj darmowy CodeCamp lokalnie

Teraz, gdy zainstalowałeś warunki wstępne, postępuj zgodnie z [naszym lokalnym przewodnikiem konfiguracyjnym](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) , aby sklonować, zainstalować i skonfigurować freeCodeCamp lokalnie na swoim komputerze.

> [!OSTRZEŻENIE]
> 
> Pamiętaj, że w tej chwili konfiguracja testów Cypress (i związanych z nimi potrzeb GUI) to praca w toku. Nadal powinieneś być w stanie pracować nad większością bazy.

## Przydatne linki

- [The WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code and Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - artykuł Mrugesh Mohapatra (Developer Personel at freeCodeCamp.org)
- Najczęściej zadawane pytania dotyczące:
  - [Podsystem Windows dla Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Pulpit dokujący dla Windows](https://docs.docker.com/docker-for-windows/faqs)
