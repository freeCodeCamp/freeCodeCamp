---
title: Electron
---
## Electron - Build Cross Platform Desktop Apps with JavaScript, HTML, and CSS

Electron lets you build cross-platform desktop apps using web technology. You
can build desktop apps for Windows, Mac, and most common flavors of Linux.

### What is Electron, exactly?

Electron is actually built on two technologies: Node.js (or simply Node) and Chromium (the open-sourced version of Google Chrome). You use web technologies like HTML, JavaScript, and CSS to build Electron apps. That means you can use most any web technology you want to build your native desktop app. For example, you could use [React](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c) or [Angular](https://scotch.io/tutorials/creating-desktop-applications-with-angularjs-and-github-electron) to build your first desktop app.
Thus, any web application you have written can run on Electron. Similarly, any Node application you have written
can run on Electron. But the power of Electron is that you can use both solutions together. Note that this also means that any code Chrome can run, Electron can run, which reduces the cross-browser compatability issues which keep many a developer up at night.

Additionally, Electron comes with support for auto-updating, crash reporting, and native menus.

Core features can be explored using the [Electron API demos](https://github.com/electron/electron-api-demos)

### Advantages of Electron
Electron applications are similar to any other desktop applications as they are installed locally on users hard drive. They can be launched directly from the OSX Dock or Windows taskbar, and there is no need to launch a browser and navigate to some url to run your application. When you need to open or save a file, the dialogs are native in appearance and interaction. Electron application can support full drag-and-drop interaction with a local file system, or even associate itself with a file type, so when a user double-clicks the associated file, our app will open.

Electron also gives us the ability to have custom application menus that conform to each platform’s user interface guidelines. Contextual menus are available that allow user to control-click or right-click to display custom menu. If we need to trigger a system-wide notification, we can leverage Chromium’s Notification API to do so. Electron will go even further than traditional window desktop applications, and create applications that only live in the menubar or system tray. In short Electron provides a solid framework that will allow you to develop first-class desktop applications.

### Disadvantages of Electron
It essentially creates a full instance of Chromium, which can be quite a memory hog.

Some apps built using Electron include:
* [Atom](https://atom.io/) (GitHub's open-source text-editor)
* [Visual Studio Code](https://code.visualstudio.com) (Microsoft's open-source text-editor)
* [Skype](https://www.skype.com/) (Microsoft's popular video chat application)
* [Slack](https://slack.com/) (A messaging app for teams)
* [Discord](https://discordapp.com) (A popular messaging app for gamers)
* [Github Desktop](https://desktop.github.com/) (Official Github Desktop Client)

### Boilerplates
- [Electron and React](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

### Additional info references
- [Official site](https://electronjs.org/)
- [Video - What is Electron](https://www.youtube.com/watch?v=8YP_nOCO-4Q&feature=youtu.be)
- [Popular Electron Modules](https://github.com/electron-userland)
- [Electron and React](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)
- [Electron and Vue](https://medium.com/@kswanie21/electron-vue-js-f6c40abeb625)
- [Electron and Angular](https://scotch.io/tutorials/creating-desktop-applications-with-angularjs-and-github-electron)

