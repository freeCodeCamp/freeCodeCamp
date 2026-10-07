# [![xterm.js logo](images/logo-full.png)](https://xtermjs.org)

Xterm.js is a front-end component written in TypeScript that lets applications bring fully-featured terminals to their users in the browser. It's used by popular projects such as VS Code, Hyper and Theia.

## Features

- **Terminal apps just work**: Xterm.js works with most terminal apps such as `bash`, `vim`, and `tmux`, including support for curses-based apps and mouse events.
- **Performant**: Xterm.js is *really* fast, it even includes a GPU-accelerated renderer.
- **Rich Unicode support**: Supports CJK, emojis, and IMEs.
- **Self-contained**: Requires zero dependencies to work.
- **Accessible**: Screen reader and minimum contrast ratio support can be turned on.
- **And much more**: Links, theming, addons, well documented API, etc.

## What xterm.js is not

- Xterm.js is not a terminal application that you can download and use on your computer.
- Xterm.js is not `bash`. Xterm.js can be connected to processes like `bash` and let you interact with them (provide input, receive output).

## Getting Started

First, you need to install the module, we ship exclusively through [npm](https://www.npmjs.com/), so you need that installed and then add xterm.js as a dependency by running:

```bash
npm install @xterm/xterm
```

To start using xterm.js on your browser, add the `xterm.js` and `xterm.css` to the head of your HTML page. Then create a `<div id="terminal"></div>` onto which xterm can attach itself. Finally, instantiate the `Terminal` object and then call the `open` function with the DOM object of the `div`.

```html
<!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="node_modules/@xterm/xterm/css/xterm.css" />
      <script src="node_modules/@xterm/xterm/lib/xterm.js"></script>
    </head>
    <body>
      <div id="terminal"></div>
      <script>
        var term = new Terminal();
        term.open(document.getElementById('terminal'));
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
      </script>
    </body>
  </html>
```

### Importing

The recommended way to load xterm.js is via the ES6 module syntax:

```javascript
import { Terminal } from '@xterm/xterm';
```

### Addons

⚠️ *This section describes the new addon format introduced in v3.14.0, see [here](https://github.com/xtermjs/xterm.js/blob/3.14.2/README.md#addons) for the instructions on the old format*

Addons are separate modules that extend the `Terminal` by building on the [xterm.js API](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts). To use an addon, you first need to install it in your project:

```bash
npm i -S @xterm/addon-web-links
```

Then import the addon, instantiate it and call `Terminal.loadAddon`:

```ts
import { Terminal } from '@xterm/xterm';
import { WebLinksAddon } from '@xterm/addon-web-links';

const terminal = new Terminal();
// Load WebLinksAddon on terminal, this is all that's needed to get web links
// working in the terminal.
terminal.loadAddon(new WebLinksAddon());
```

The xterm.js team maintains the following addons, but anyone can build them:

- [`@xterm/addon-attach`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-attach): Attaches to a server running a process via a websocket
- [`@xterm/addon-clipboard`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-clipboard): Access the browser's clipboard
- [`@xterm/addon-fit`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-fit): Fits the terminal to the containing element
- [`@xterm/addon-image`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-image): Adds image support
- [`@xterm/addon-search`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-search): Adds search functionality
- [`@xterm/addon-serialize`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-serialize): Serializes the terminal's buffer to a VT sequences or HTML
- [`@xterm/addon-unicode11`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-unicode11): Updates character widths to their unicode11 values
- [`@xterm/addon-web-links`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-web-links): Adds web link detection and interaction
- [`@xterm/addon-webgl`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-webgl): Renders xterm.js using a `canvas` element's webgl2 context

## Browser Support

Since xterm.js is typically implemented as a developer tool, only modern browsers are supported officially. Specifically the latest versions of *Chrome*, *Edge*, *Firefox*, and *Safari*.

Xterm.js works seamlessly in [Electron](https://electronjs.org/) apps and may even work on earlier versions of the browsers. These are the versions we strive to keep working.

### Node.js Support

We also publish [`xterm-headless`](https://www.npmjs.com/package/xterm-headless) which is a stripped down version of xterm.js that runs in Node.js. An example use case for this is to keep track of a terminal's state where the process is running and using the serialize addon so it can get all state restored upon reconnection.

## API

The full API for xterm.js is contained within the [TypeScript declaration file](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts), use the branch/tag picker in GitHub (`w`) to navigate to the correct version of the API.

Note that some APIs are marked *experimental*, these are added to enable experimentation with new ideas without committing to support it like a normal [semver](https://semver.org/) API. Note that these APIs can change radically between versions, so be sure to read release notes if you plan on using experimental APIs.

## Releases

Xterm.js follows a monthly release cycle roughly.

All current and past releases are available on this repo's [Releases page](https://github.com/sourcelair/xterm.js/releases), you can view the [high-level roadmap on the wiki](https://github.com/xtermjs/xterm.js/wiki/Roadmap) and see what we're working on now by looking through [Milestones](https://github.com/sourcelair/xterm.js/milestones).

### Beta builds

Our CI releases beta builds to npm for every change that goes into master. Install the latest beta build with:

```bash
npm install -S @xterm/xterm@beta
```

These should generally be stable, but some bugs may slip in. We recommend using the beta build primarily to test out new features and to verify bug fixes.

## Contributing

You can read the [guide on the wiki](https://github.com/xtermjs/xterm.js/wiki/Contributing) to learn how to contribute and set up xterm.js for development.

## Real-world uses
Xterm.js is used in several world-class applications to provide great terminal experiences.

- [**SourceLair**](https://www.sourcelair.com/): In-browser IDE that provides its users with fully-featured Linux terminals based on xterm.js.
- [**Microsoft Visual Studio Code**](http://code.visualstudio.com/): Modern, versatile, and powerful open source code editor that provides an integrated terminal based on xterm.js.
- [**ttyd**](https://github.com/tsl0922/ttyd): A command-line tool for sharing terminal over the web, with fully-featured terminal emulation based on xterm.js.
- [**Eclipse Che**](http://www.eclipse.org/che): Developer workspace server, cloud IDE, and Eclipse next-generation IDE.
- [**Codenvy**](http://www.codenvy.com): Cloud workspaces for development teams.
- [**CoderPad**](https://coderpad.io): Online interviewing platform for programmers. Run code in many programming languages, with results displayed by xterm.js.
- [**WebSSH2**](https://github.com/billchurch/WebSSH2): A web based SSH2 client using xterm.js, socket.io, and ssh2.
- [**Spyder Terminal**](https://github.com/spyder-ide/spyder-terminal): A full fledged system terminal embedded on Spyder IDE.
- [**Cloud Commander**](https://cloudcmd.io "Cloud Commander"): Orthodox web file manager with console and editor.
- [**Next Tech**](https://next.tech "Next Tech"): Online platform for interactive coding and web development courses. Live container-backed terminal uses xterm.js.
- [**RStudio**](https://www.rstudio.com/products/RStudio "RStudio"): RStudio is an integrated development environment (IDE) for R.
- [**Terminal for Atom**](https://github.com/jsmecham/atom-terminal-tab): A simple terminal for the Atom text editor.
- [**Eclipse Orion**](https://orionhub.org): A modern, open source software development environment that runs in the cloud. Code, deploy, and run in the cloud.
- [**Gravitational Teleport**](https://github.com/gravitational/teleport): Gravitational Teleport is a modern SSH server for remotely accessing clusters of Linux servers via SSH or HTTPS.
- [**Hexlet**](https://en.hexlet.io): Practical programming courses (JavaScript, PHP, Unix, databases, functional programming). A steady path from the first line of code to the first job.
- [**Selenoid UI**](https://github.com/aerokube/selenoid-ui): Simple UI for the scalable golang implementation of Selenium Hub named Selenoid. We use XTerm for streaming logs over websockets from docker containers.
- [**Portainer**](https://portainer.io): Simple management UI for Docker.
- [**SSHy**](https://github.com/stuicey/SSHy): HTML5 Based SSHv2 Web Client with E2E encryption utilising xterm.js, SJCL & websockets.
- [**JupyterLab**](https://github.com/jupyterlab/jupyterlab): An extensible computational environment for Jupyter, supporting interactive data science and scientific computing across all programming languages.
- [**Theia**](https://github.com/theia-ide/theia): Theia is a cloud & desktop IDE framework implemented in TypeScript.
- [**Opshell**](https://github.com/ricktbaker/opshell) Ops Helper tool to make life easier working with AWS instances across multiple organizations.
- [**Proxmox VE**](https://www.proxmox.com/en/proxmox-ve): Proxmox VE is a complete open-source platform for enterprise virtualization. It uses xterm.js for container terminals and the host shell.
- [**Script Runner**](https://github.com/ioquatix/script-runner): Run scripts (or a shell) in Atom.
- [**Whack Whack Terminal**](https://github.com/Microsoft/WhackWhackTerminal): Terminal emulator for Visual Studio 2017.
- [**VTerm**](https://github.com/vterm/vterm): Extensible terminal emulator based on Electron and React.
- [**electerm**](http://electerm.html5beta.com): electerm is a terminal/ssh/sftp client(mac, win, linux) based on electron/node-pty/xterm.
- [**Kubebox**](https://github.com/astefanutti/kubebox): Terminal console for Kubernetes clusters.
- [**Azure Cloud Shell**](https://shell.azure.com): Azure Cloud Shell is a Microsoft-managed admin machine built on Azure, for Azure.
- [**atom-xterm**](https://atom.io/packages/atom-xterm): Atom plugin for providing terminals inside your Atom workspace.
- [**rtty**](https://github.com/zhaojh329/rtty): Access your terminals from anywhere via the web.
- [**Pisth**](https://github.com/ColdGrub1384/Pisth): An SFTP and SSH client for iOS.
- [**abstruse**](https://github.com/bleenco/abstruse): Abstruse CI is a continuous integration platform based on Node.JS and Docker.
- [**Azure Data Studio**](https://github.com/Microsoft/azuredatastudio): A data management tool that enables working with SQL Server, Azure SQL DB and SQL DW from Windows, macOS and Linux.
- [**FreeMAN**](https://github.com/matthew-matvei/freeman): A free, cross-platform file manager for power users.
- [**Fluent Terminal**](https://github.com/felixse/FluentTerminal): A terminal emulator based on UWP and web technologies.
- [**Hyper**](https://hyper.is): A terminal built on web technologies.
- [**Diag**](https://diag.ai): A better way to troubleshoot problems faster. Capture, share and reapply troubleshooting knowledge so you can focus on solving problems that matter.
- [**GoTTY**](https://github.com/sorenisanerd/gotty): A simple command line tool that shares your terminal as a web application based on xterm.js.
- [**genact**](https://github.com/svenstaro/genact): A nonsense activity generator.
- [**cPanel & WHM**](https://cpanel.com): The hosting platform of choice.
- [**Nutanix**](https://github.com/nutanix): Nutanix Enterprise Cloud uses xterm in the webssh functionality within Nutanix Calm, and is also looking to move our old noserial (termjs) functionality to xterm.js.
- [**SSH Web Client**](https://github.com/roke22/PHP-SSH2-Web-Client): SSH Web Client with PHP.
- [**Juno**](http://junolab.org/): A flexible Julia IDE, based on Atom.
- [**webssh**](https://github.com/huashengdun/webssh): Web based ssh client.
- [**info-beamer hosted**](https://info-beamer.com): Uses xterm.js to manage digital signage devices from the web dashboard.
- [**Jumpserver**](https://github.com/jumpserver/luna): Jumpserver Luna project, Jumpserver is a bastion server project, Luna use xterm.js for web terminal emulation.
- [**LxdMosaic**](https://github.com/turtle0x1/LxdMosaic): Uses xterm.js to give terminal access to containers through LXD
- [**CodeInterview.io**](https://codeinterview.io): A coding interview platform in 25+ languages and many web frameworks. Uses xterm.js to provide shell access.
- [**Bastillion**](https://www.bastillion.io): Bastillion is an open-source web-based SSH console that centrally manages administrative access to systems.
- [**PHP App Server**](https://github.com/cubiclesoft/php-app-server/): Create lightweight, installable almost-native applications for desktop OSes.  ExecTerminal (nicely wraps the xterm.js Terminal), TerminalManager, and RunProcessSDK are self-contained, reusable ES5+ compliant Javascript components.
- [**NgTerminal**](https://github.com/qwefgh90/ng-terminal): NgTerminal is a web terminal that leverages xterm.js on Angular 7+. You can easily add it into your application by adding `<ng-terminal></ng-terminal>` into your component.
- [**tty-share**](https://tty-share.com): Extremely simple terminal sharing over the Internet.
- [**Ten Hands**](https://github.com/saisandeepvaddi/ten-hands): One place to run your command-line tasks.
- [**WebAssembly.sh**](https://webassembly.sh): A WebAssembly WASI browser terminal
- [**Gus**](https://gus.jp): A shared coding pad where you can run Python with xterm.js
- [**Linode**](https://linode.com): Linode uses xterm.js to provide users a web console for their Linode instances.
- [**FluffOS**](https://www.fluffos.info): Active maintained LPMUD driver with websocket support.
- [**x-terminal**](https://atom.io/packages/x-terminal): Atom plugin for providing terminals inside your Atom workspace.
- [**CoCalc**](https://cocalc.com/): Lots of free software pre-installed, to chat, collaborate, develop, program, publish, research, share, teach, in C++, HTML, Julia, Jupyter, LaTeX, Markdown, Python, R, SageMath, Scala, ...
- [**Dank Domain**](https://www.DDgame.us/): Open source multiuser medieval game supporting old & new terminal emulation.
- [**DockerStacks**](https://docker-stacks.com/): Local LAMP/LEMP development studio
- [**Codecademy**](https://codecademy.com/): Uses xterm.js in its courses on Bash.
- [**Laravel Ssh Web Client**](https://github.com/roke22/Laravel-ssh-client): Laravel server inventory with ssh web client to connect at server using xterm.js
- [**Replit**](https://replit.com): Collaborative browser based IDE with support for 50+ different languages.
- [**TeleType**](https://github.com/akshaykmr/TeleType): cli tool that allows you to share your terminal online conveniently. Show off mad cli-fu, help a colleague, teach, or troubleshoot.
- [**Intervue**](https://www.intervue.io): Pair programming for interviews. Multiple programming languages are supported, with results displayed by xterm.js.
- [**TRASA**](https://trasa.io): Zero trust access to Web, SSH, RDP, and Database services.
- [**Commas**](https://github.com/CyanSalt/commas): Commas is a hackable terminal and command runner.
- [**Devtron**](https://github.com/devtron-labs/devtron): Software Delivery Workflow For Kubernetes.
- [**NxShell**](https://github.com/nxshell/nxshell): An easy to use new terminal for SSH.
- [**gifcast**](https://dstein64.github.io/gifcast/): Converts an asciinema cast to an animated GIF.
- [**WizardWebssh**](https://gitlab.com/mikeramsey/wizardwebssh): A terminal with Pyqt5 Widget for embedding, which can be used as an ssh client to connect to your ssh servers. It is written in Python, based on tornado, paramiko, and xterm.js.
- [**Wizard Assistant**](https://wizardassistant.com/): Wizard Assistant comes with advanced automation tools, preloaded common and special time-saving commands, and a built-in SSH terminal. Now you can remotely administer, troubleshoot, and analyze any system with ease.
- [**ucli**](https://github.com/tsadarsh/ucli): Command Line for everyone :family_man_woman_girl_boy: at [www.ucli.tech](https://www.ucli.tech).
- [**Tess**](https://github.com/SquitchYT/Tess/): Simple Terminal Fully Customizable for Everyone. Discover more at [tessapp.dev](https://tessapp.dev)
- [**HashiCorp Nomad**](https://www.nomadproject.io/): A container orchestrator with the ability to connect to remote tasks via a web interface using websockets and xterm.js.
- [**TermPair**](https://github.com/cs01/termpair): View and control terminals from your browser with end-to-end encryption
- [**gdbgui**](https://github.com/cs01/gdbgui): Browser-based frontend to gdb (gnu debugger)
- [**goormIDE**](https://ide.goorm.io/): Run almost every programming languages with real-time collaboration, live pair programming, and built-in messenger.
- [**FleetDeck**](https://fleetdeck.io): Remote desktop & virtual terminal
- [**OpenSumi**](https://github.com/opensumi/core): A framework helps you quickly build Cloud or Desktop IDE products.
- [**KubeSail**](https://kubesail.com): The Self-Hosting Company - uses xterm to allow users to exec into kubernetes pods and build github apps
- [**WiTTY**](https://github.com/syssecfsu/witty): Web-based interactive terminal emulator that allows users to easily record, share, and replay console sessions.
- [**libv86 Terminal Forwarding**](https://github.com/hello-smile6/libv86-terminal-forwarding): Peer-to-peer SSH for the web, using WebRTC via [Bugout](https://github.com/chr15m/bugout) for data transfer and [v86](https://github.com/copy/v86) for web-based virtualization.
- [**hack.courses**](https://hack.courses): Interactive Linux and command-line classes using xterm.js to expose a real terminal available for everyone.
- [**Render**](https://render.com): Platform-as-a-service for your apps, websites, and databases using xterm.js to provide a command prompt for user containers and for streaming build and runtime logs.
- [**CloudTTY**](https://github.com/cloudtty/cloudtty): A Friendly Kubernetes CloudShell (Web Terminal).
- [**Go SSH Web Client**](https://github.com/wuchihsu/go-ssh-web-client): A simple SSH web client using Go, WebSocket and Xterm.js.
- [**web3os**](https://web3os.sh): A decentralized operating system for the next web
- [**Cratecode**](https://cratecode.com): Learn to program for free through interactive online lessons. Cratecode uses xterm.js to give users access to their own Linux environment.
- [**Super Terminal**](https://github.com/bugwheels94/super-terminal): It is a http based terminal for developers who dont like repetition and save time.
- [**graSSHopper**](https://grasshopper.coding.kiwi): A simple SSH client with file explorer, history and many more features.
- [**DomTerm**](https://domterm.org/xtermjs.html): Tiles and tabs. Detachable sessions (like tmux). [Remote connections](https://domterm.org/Remoting-over-ssh.html) using a nice ssh wrapper with predictive echo. Qt, Electron, Tauri/Wry, or desktop browser front-ends. Choose between xterm.js engine (faster) or native DomTerm (more functionality and graphics) - or both.
- [**Cloudtutor.io**](https://cloudtutor.io): innovative online learning platform that offers users access to an interactive lab.
- [**Helix Editor Playground**](https://github.com/tomgroenwoldt/helix-editor-playground): Online playground for the terminal based helix editor.
- [**Coder**](https://github.com/coder/coder): Self-Hosted Remote Development Environments
- [**Wave Terminal**](https://waveterm.dev): An open-source, ai-native, terminal built for seamless workflows.
- [**eva**](https://github.com/info24/eva): Eva is a web application for SSH remote login, developed in Go.
- [**OpenSFTP**](https://opensftp.com): Super beautiful SSH and SFTP integrated workspace client.
- [**balena**](https://www.balena.io/): Balena is a full-stack solution for developing, deploying, updating, and troubleshooting IoT Edge devices. We use xterm.js to manage & debug devices on [balenaCloud](https://www.balena.io/cloud).
- [**Filet Cloud**](https://github.com/fuglaro/filet-cloud): The lean and powerful personal cloud ⛅.
- [**pyTermTk**](https://github.com/ceccopierangiolieugenio/pyTermTk): Python Terminal Toolkit - a Spiced Up Cross Compatible TUI Library 🌶️, use xterm.js for the [HTML5 exporter](https://ceccopierangiolieugenio.github.io/pyTermTk/sandbox/sandbox.html).
- [**ecmaOS**](https://ecmaos.sh): A kernel and suite of applications tying modern web technologies into a browser-based operating system.
- [**LabEx**](https://labex.io): Interactive learning platform with hands-on labs and xterm.js-based online terminals, focused on learn-by-doing approach.
- [**EmuDevz**](https://afska.github.io/emudevz): A free coding game where players learn how to build an emulator from scratch.
- [And much more...](https://github.com/xtermjs/xterm.js/network/dependents?package_id=UGFja2FnZS0xNjYzMjc4OQ%3D%3D)

Do you use xterm.js in your application as well? Please [open a Pull Request](https://github.com/sourcelair/xterm.js/pulls) to include it here. We would love to have it on our list. Note: Please add any new contributions to the end of the list only.

## License Agreement

If you contribute code to this project, you implicitly allow your code to be distributed under the MIT license. You are also implicitly verifying that all code is your original work.

Copyright (c) 2017-2022, [The xterm.js authors](https://github.com/xtermjs/xterm.js/graphs/contributors) (MIT License)<br>
Copyright (c) 2014-2017, SourceLair, Private Company ([www.sourcelair.com](https://www.sourcelair.com/home)) (MIT License)<br>
Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
