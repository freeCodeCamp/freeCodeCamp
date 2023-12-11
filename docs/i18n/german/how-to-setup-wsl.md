# freeCodeCamp auf dem Windows Subsystem für Linux (WSL) einrichten

> [!NOTE] Before you follow these instructions make sure your system meets the requirements.
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Build 19041 oder höher) - verfügbar für alle Distributionen einschließlich Windows 10 Home.
> 
> **Docker Desktop für Windows**: Siehe entsprechende Anforderungen für [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) und [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Dieser Leitfaden behandelt einige allgemeine Schritte bei der Einrichtung von WSL2. Sobald einige der üblichen Probleme mit WSL2 behoben sind, solltest du in der Lage sein, [diesem Leitfaden zur lokalen Einrichtung](how-to-setup-freecodecamp-locally.md) zu folgen, um mit freeCodeCamp unter Windows und einer WSL-Distribution wie Ubuntu zu arbeiten.

## WSL aktivieren

Follow the instructions on the [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install WSL2.

## Ubuntu installieren

1. Wir empfehlen Ubuntu-18.04 oder höher mit WSL2.

   > [!NOTE]
   > 
   > While you may use other non-Debian-based distributions, they all come with their own 'gotchas' that are beyond the scope of this guide.

   As of November 2023, Ubuntu and Debian are the only Linux distributions [officially supported by Playwright](https://playwright.dev/docs/intro#system-requirements), the end-to-end testing library used by freeCodeCamp.

2. Abhängigkeiten (Dependencies) für das Betriebssystem aktualisieren

   ```bash
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

Wir empfehlen wärmstens, [Visual Studio Code](https://code.visualstudio.com) auf Windows 10 zu installieren. It has great support for WSL and automatically installs all the necessary extensions on your WSL distribution.

Im Wesentlichen bearbeitest und speicherst du deinen Code auf Ubuntu-18.04, während VS Code auf Windows installiert ist.

If you use [IntelliJ Idea](https://www.jetbrains.com/idea/), you may need to update your Node interpreter and npm package manager to what is installed on your WSL distro.

You can check these settings by going to Settings > Languages & Frameworks > Node.js and npm.

## Docker Desktop installieren

**Docker Desktop für Windows** ermöglicht es dir, Datenbanken wie MongoDB und andere Dienste wie NGINX und mehr zu installieren und auszuführen. Dies ist nützlich, um häufige Fallstricke bei der Installation von MongoDB oder anderen Diensten direkt auf Windows oder WSL2 zu vermeiden.

Follow the instructions on the [official documentation](https://docs.docker.com/docker-for-windows/install) and install Docker Desktop for your Windows distribution.

Es gibt einige Mindestanforderungen an die Hardware für das beste Erlebnis.

## Docker Desktop für WSL konfigurieren

Sobald Docker Desktop installiert ist, [folgst du dieser Anleitung](https://docs.docker.com/docker-for-windows/wsl) und konfigurierst es so, dass es die Ubuntu-18.04-Installation als Backend verwendet.

Dadurch laufen die Container auf der WSL-Seite und nicht unter Windows. Du kannst sowohl unter Windows als auch unter Ubuntu über `http://localhost` auf die Dienste zugreifen.

## MongoDB vom Docker Hub aus installieren

Sobald du Docker Desktop für die Zusammenarbeit mit WSL2 konfiguriert hast, befolge diese Schritte, um einen MongoDB-Dienst zu starten:

1. Launch a new Ubuntu terminal

2. Pull MongoDB from Docker Hub. Please refer to the [Prerequisites](how-to-setup-freecodecamp-locally.md#Prerequisites) table for the current version of MongoDB used by freeCodeCamp. For example, if the version number is `5.0.x`, replace `<x.y>` with `5.0` in the following two code snippets.

   ```bash
   docker pull mongo:<x.y>
   ```

3. Starte den MongoDB-Dienst an Port `27017` und konfiguriere ihn so, dass er bei Systemneustarts automatisch ausgeführt wird

   ```bash
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:<x.y>
   ```

4. Du kannst jetzt sowohl von Windows als auch von Ubuntu aus auf den Dienst unter `mongodb://localhost:27017` zugreifen.

## Installing Node.js and pnpm

Wir empfehlen dir, die LTS-Version für Node.js mit einem Node-Versionsmanager zu installieren - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Once installed use this command to install and use the latest Node.js LTS version:

```bash
nvm install --lts
```

For instructions on installing and using a different version of Node.js, please refer to the [nvm docs](https://github.com/nvm-sh/nvm#usage).

Node.js comes bundled with `npm`, which you can use to install `pnpm`:

```bash
npm install -g pnpm
```

## Set up freeCodeCamp Locally

Now that you have installed the pre-requisites, follow [our local setup guide](how-to-setup-freecodecamp-locally.md) to clone, install and set up freeCodeCamp locally on your machine.

> [!WARNING]
> 
> Please note, at this time the setup for Cypress tests (and related GUI needs) is a work in progress. Du solltest immer noch in der Lage sein, an den meisten Teilen der Codebasis zu arbeiten.

## Optimize Windows and WSL

   > [!NOTE]
   > 
   > The following tips were collected from across the web and have not gone through vigorous testing. Your mileage may vary.

### Adjust processer scheduling for background services

This may reduce incidents of Docker containers crashing due to lack of resources.

Open the System Properties control panel by pressing <kbd>Win + R</kbd> and entering `sysdm.cpl`

<details>
    <summary>
      Enter <code>sysdm.cpl</code> in the Run dialog (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/run-sysdm.png" alt="Enter `sysdm.cpl` in the Run dialog" />
</details>
<br>

Go to Advanced -> Performance -> Settings…

<details>
    <summary>
      Performance Settings button under Advanced tab in System Properties (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-performance-settings.png" alt="Performance Settings button under Advanced tab in System Properties" />
</details>
<br>

Under Advanced -> Processor scheduling, choose "Background services". Do not close the window. Continue to the next tip.

<details>
    <summary>
      Background services radio button under Advanced tab in Performance Options (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/background-services.png" alt="Background services radio button under Advanced tab in Performance Options" />
</details>

### Increase the size of Windows paging file for the system drive

Under Advanced -> Virtual memory, click "Change…"

<details>
    <summary>
      Change virtual memory button under Advanced tab in Performance Options (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-virtual-memory.png" alt="Change virtual memory button under Advanced tab in Performance Options" />
</details>
<br>

Choose "Custom size". Set the initial size to 1.5x and the maximum size to 3x of your physical memory. Then click "Set".

<details>
    <summary>
      Set custom size button in Virtual Memory window (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/set-custom-size.png" alt="Set custom size button in Virtual Memory window" />
</details>

### Increase the size of memory allocated to WSL

Create a [`.wslconfig` file](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) in your [`%UserProfile%` directory](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig) (typically `C:\Users\<UserName>\.wslconfig`). Please read the [WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) carefully and replace `x` with values that suit your own needs:

```ini
# Settings apply across all Linux distros running on WSL 2
[wsl2]

# How much memory to assign to the WSL 2 VM. The default value might not be enough
memory=xGB

# How much swap space to add to the WSL 2 VM, default is 25% of available RAM
swap=xGB
```

### Increase Node.js max old space size

This fixes the ["JavaScript heap out of memory" error](https://stackoverflow.com/a/54456814) with ESLint. Add the following to your `~/.bashrc` or `~/.zshrc`:

```sh
export NODE_OPTIONS="--max-old-space-size=4096"
```

### Avoid `pnpm run test`

Instead, use the script [appropriate to your PR](https://forum.freecodecamp.org/t/wsl-performance-issues-while-working-on-the-codebase/644215/2#:~:text=usually%2C%20you%20just%20want%20to%20test%20something%20specific%20to%20either%20the%20curriculum%20or%20the%20client%20or%20the%20api%20-%20almost%20never%20all%203.); either `pnpm run test:api`, `pnpm run test:curriculum`, or `pnpm run test-client`.

## Useful Links

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code, and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - an article by Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Häufig gestellte Fragen zu:
  - [Windows Subsystem für Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop für Windows](https://docs.docker.com/docker-for-windows/faqs)
