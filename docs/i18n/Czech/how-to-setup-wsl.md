# Nastavit freeCodeCamp na Windows Subsystem pro Linux (WSL)

> [!POZNÁMKA] Dříve než budete postupovat podle těchto pokynů, ujistěte se, že váš systém splňuje požadavky
> 
> **WSL 2**: Windows 10 64-bit (verze 2004, Build 19041 nebo vyšší) - k dispozici pro všechny distribuce včetně Windows 10 Domů.
> 
> **Docker Desktop pro Windows**: Viz příslušné požadavky pro [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) a [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Tento návod pokrývá některé společné kroky s nastavením WSL2. jakmile se řeší některé společné problémy s WSL2, byste měli být schopni sledovat náš místní průvodce nastavením a pracovat s freeCodeCamp na systému Windows a běžet tak jako Ubuntu.

## Povolit WSL

Postupujte podle pokynů na [oficiální dokumentaci](https://docs.microsoft.com/en-us/windows/wsl/install-win10) a nainstalujte WSL1 a poté přejděte na WSL2.

## Install Ubuntu

1. Doporučujeme používat Ubuntu-18.04 nebo vyšší s WSL2.

   > [!POZNÁMKA]
   > 
   > I když můžete použít jiné nedebianské distros, všechny přicházejí s jejich vlastními gotchas a jsou mimo rámec tohoto průvodce.

2. Aktualizovat závislosti pro OS

   ```console
   sudo apt update
   sudo apt upgrade -y

   # čištění
   sudo apt autoremove -y
   ```

## Nastavit Git

Git přichází předinstalovaný s Ubuntu 18.04, ověřte, zda vaše Git verze s `git --version`.

```output
~
<unk> git --version
git verze 2.25.1
```

(Volitelné, ale doporučeno) Nyní můžete pokračovat v [nastavení ssh klíče](https://help.github.com/articles/generating-an-ssh-key) pomocí GitHub.

## Instalace editoru kódu

Důrazně doporučujeme nainstalovat [Visual Studio Code](https://code.visualstudio.com) na Windows 10. Má velkou podporu pro WSL a automaticky nainstaluje všechna potřebná rozšíření do distro.

V podstatě upravíte a uložíte svůj kód na Ubuntu-18.04 s VS kódem nainstalovaným v Windows.

## Instalace Docker Desktop

**Docker Desktop pro Windows** umožňuje instalovat a spouštět databázi a služby jako MongoDB, NGINX, atd. To je užitečné, abychom se vyhnuli běžným nástrahám při instalaci MongoDB nebo jiných služeb přímo na Windows nebo WSL2.

Postupujte podle instrukcí na [oficiální dokumentaci](https://docs.docker.com/docker-for-windows/install) a nainstalujte Docker Desktop pro vaši distribuci Windows.

Existují minimální požadavky na hardware pro nejlepší zážitky.

## Konfigurace Docker pro WSL

Jakmile je Docker Desktop nainstalován, [postupujte podle těchto instrukcí](https://docs.docker.com/docker-for-windows/wsl) a nastavte jej tak, aby byla jako backend použita instalace Ubuntu-18.04.

To znamená, že kontejnery běží na WSL místo běhu na Windows. Budete mít přístup ke službám přes `http://localhost` jak na Windows, tak na Ubuntu.

## Instalovat MongoDB z Docker Hub

Jakmile jste nakonfigurovali Docker pro práci s WSL2, postupujte podle těchto kroků pro spuštění služby MongoDB:

1. Spustit nový terminál Ubuntu-18.04

2. Pull `MongoDB 3.6` z dockerhub

   ```console
   docker pull mongo:3
   ```

3. Spusťte službu MongoDB na portu `27017`a nastavte ji tak, aby běžela automaticky při restartování systému

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Nyní máte přístup ke službě jak z Windows tak z Ubuntu na `mongodb://localhost:27017`.

## Instalace Node.js a npm

Doporučujeme nainstalovat verzi LTS pro Node.js se správcem verzí uzlu - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Po instalaci použijte tyto příkazy k instalaci a použijte podle potřeby verzi Node.js

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js přichází s `npm`, můžete aktualizovat na nejnovější verze `npm` pomocí:

```console
npm install -g npm@latest
```

## Nastavit volný CodeCamp lokálně

Nyní, když jste nainstalovali předběžné požadavky, postupujte podle [našeho místního průvodce nastavením](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) pro klonování, instalaci a nastavení freeCodeCamp lokálně na vašem počítači.

> [!VAROVÁNÍ]
> 
> Mějte prosím na paměti, že právě probíhá nastavení Cypress testů (a související potřeby GUI). Měli byste být stále schopni pracovat na většině kódu.

## Užitečné odkazy

- [WSL2 Dev Setup s Ubuntu 20.04, Node.js, MongoDB, VS Code a Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - článek Mrugesh Mohapatra (Staff Developer na freeCodeCamp.org)
- Často kladené otázky na:
  - [Podsystém Windows pro Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker pro Windows](https://docs.docker.com/docker-for-windows/faqs)
