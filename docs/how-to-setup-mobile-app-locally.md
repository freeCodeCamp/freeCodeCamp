# Setup freeCodeCamp's mobile app locally

## System requirements

These are the different requirements needed to contribute to the mobile application for the different operating systems. These specifications are based of running a Flutter project and two installed emulators.

#### Windows

- Microsoft Windows 7/8/10 (64-bit)
- 4 GB RAM minimum, 8 GB RAM recommended
- 25 GB of available disk space minimum
- 1200 x 800 minimum screen resolution

#### Mac

- Mac® OS X® 10.10 (Yosemite) or higher, up to 10.14 (macOS Mojave)
- 4 GB RAM minimum, 8 GB RAM recommended
- 25 GB of available disk space minimum
- 1200 x 800 minimum screen resolution

#### Linux

- GNOME or KDE desktop - Tested on gLinux based on Debian.
- 64-bit distribution capable of running 32-bit applications
- GNU C Library (glibc) 2.19 or later
- 4 GB RAM minimum, 8 GB RAM recommended
- 25 GB of available disk space minimum
- 1280 x 800 minimum screen resolution

# Getting started

Follow these guidelines for setting up the freeCodeCamp mobile app locally on your system.

## Forking the repository

Forking is a step where you get your own copy of freCodeCamp's mobile app on GitHub.

This is essential, as it allows you to work on your own copy of the Mobile App on GitHub. Later, you will be able to request changes to be pulled into the main repository from your for via a pull request.

Follow these steps to fork the repository:

1. Go to the freeCodeCamp mobile repository on GitHub: https://github.com/freeCodeCamp/mobile/
2. Click the "Fork" button in the upper rught-hand corner of the interface
3. After the repository has been forked, you will be taken to your copy of the freeCodeCamp mobile app

## Cloning your fork from GitHub

Cloning is where you download a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case this remote location is your `fork` of the freeCodeCamp mobile app. That should be availible at: `https://github.com/YOUR_USER_NAME/mobile` (`YOUR_USER_NAME` would be replaced with your GitHub user name)

Run these commands on your local machine:

1. Open a Terminal / Command Prompt / Shell in your projects directory
   i.e. `/yourprojectsdirectory/`
2. Clone your fork of freeCodeCamp, replacing YOUR_USER_NAME with your GitHub Username

```
 git clone https://github.com/YOUR_USER_NAME/mobile.git
```

Next change the directory:

```
cd mobile
```

Next set the upstream branch to:

```
git remote add upstream https://github.com/freeCodeCamp/mobile.git
```

Make sure everything looks correct:

```
git remote -v
```

The output should look somehting like below (replacing `YOUR_USER_NAME` with your Github username):

```
origin    https://github.com/YOUR_USER_NAME/mobile.git (fetch)
origin    https://github.com/YOUR_USER_NAME/mobile.git (push)
upstream    https://github.com/freeCodeCamp/mobile.git (fetch)
upstream    https://github.com/freeCodeCamp/mobile.git (push)
```

## Setting up IDE and Flutter

1. first you will have to install Flutter on your local machine - https://docs.flutter.dev/get-started/install, we currently make use of Flutter `2.5.x`. Follow the instructions carefully.
2. Next set up (or install) an IDE to make developing the app a faster experience. - We mainly make use of Visual Studio Code but installing Android Studio is also recommended to have easy access to the AVD-manager. (The manager where you access your installed emulators)
3. Make sure to install the recommended Flutter plugin if you use VsCode. To do this:
   - Start VsCode
   - Invoke `View > Command Palette`
   - Type `install`, and select `Extensions: Install Extensions`
4. Now validate your setup with the Flutter doctor.
   To do this: - `Invoke View > Command Palette` - Type `doctor`, and select the `Flutter: Run Flutter Doctor`

It should look something like this:

```
Doctor summary (to see all details, run flutter doctor -v):
[√] Flutter (Channel stable, 2.5.3, on Microsoft Windows [Version 10.0.19042.1415], locale nl-NL)
[√] Android toolchain - develop for Android devices (Android SDK version 30.0.3)
[√] Chrome - develop for the web
[√] Android Studio (version 4.1)
[√] VS Code, 64-bit edition (version 1.60.1)
[√] Connected device (2 available)

• No issues found!
```

if not go to the trouble shoot section.

## Installing emulators

When installing an emulator from `Android studio` we recommend using the `Pixel 3a XL` and `Nexus One` for smaller screens. If you use any other IDE, we recommend installing the emulators from `Android Studio`.

The installing of a new emulator is pretty straightforward. Firstly you will have to open up `Android Studio`. Make sure you have cloned the repository from the `freeCodeCamp` organization. Open up the project in `Android studio`. Now search for the 3rd icon in the top-right corner. It looks like a mobile phone with a green Android next to it. When hovering over it, it should say `AVD manager.

Now that you have located the manager open it up. A screen should appear with the text `Your virtual devices`. In the bottom-left corner, a button should be present that says `Create Virtual Device...`. Now a screen should appear with the text `Select hardware`. In the search bar search for the emulator `Pixel 3a XL` and the `Nexus one`. Make sure you have at least 25 GB of space available.

When selecting the emulator press the `Next` button and select the latest release `R`. After this press `Next` again and directly after press `finish`

Congratiulations you have installed the emulators.

## Starting development

before you run the flutter project for the first time, you need to make sure you have copied the environment values from the `sample.env`.

to do this:

```
cd mobile-app
```

Next copy the sample.env file to a new one named .env

```
cp sample.env .env
```
