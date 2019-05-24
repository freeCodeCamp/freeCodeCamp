---
title: GnuPG
---

__Gnu Privacy Guard (GnuPG)__ is a free software implementation of the [OpenPGP Standard](https://www.openpgp.org/about/standard/). Most people use GnuPG or GPG to encrypt and sign files and messages while some also use it for Secure Shell (SSH) authentication and signing their Git commits and tags.

## Installation

### Linux
GnuPG is part of Debian. To install on Debian or its derivatives:
```text
sudo apt install gnupg
```
For non-Debian Linux distributions, consult the appropriate guide for the distro of your choice.

### macOS
To install GnuPG on a Mac, you can use [Homebrew](https://brew.sh):
```text
brew install gnupg
```

### Windows
To install GnuPG on Windows, you can download the [Gpg4win Installer](https://gpg4win.org/download.html).

## Generating keys
Before you can start using GPG, you need to first generate a key pair. To do so, key in the command in your terminal or command prompt:
```text
gpg --gen-key
```
Follow the prompts by entering your name, email, and passphrase and you are done. Congratulations!

## Resources
- [GnuPG Manual](https://www.gnupg.org/documentation/manuals.html)
