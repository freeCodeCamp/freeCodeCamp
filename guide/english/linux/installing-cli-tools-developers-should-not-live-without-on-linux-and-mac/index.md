---
title: Installing CLI Tools Developers Should not Live Without on Linux and Mac
---
This article is a short description on how to install key command line utilities that developers use everyday on Macintosh and Linux environments. The main CLI tools that will be shown are: Homebrew (Mac), Node and NPM, Bower, Gulp, Grunt and Tmux.

## Installing Homebrew (Macintosh Systems)

Homebrew is 'The missing package manager for OS X'. It is a great tool for downloading and installing packages straight from your command line. This is not needed on Linux distributions because they already have package managers installed by default such as `apt-get` or `pacman`. To install Homebrew, simply paste the following command in your terminal:

*   `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

In case you run into "Xcode Command Line Tools Missing" use the following to install it:

* `xcode-select --install`

## Installing NPM

`NPM`, or Node Package Manager, is another useful package manager for downloading mostly web tools. Downloading `NPM` will also install the Node.js framework.

### Mac:

*   Using `Homebrew` type: `brew install node` and `NPM` should have been installed.

### Linux:

*   Using `apt-get` first type: `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`, then `sudo apt-get install nodejs`
*   Using `pacman` type: `pacman -S nodejs npm`
*   Using `yum` type: `sudo yum install nodejs npm`
*   Using `dnf` type: `sudo dnf install nodejs`
*   Using `zypper` type: `sudo zypper install nodejs6`

## Installing Bower

Bower is a popular package manager that allows you to install front-end libraries. You can install it on Linux and Macintosh systems using `npm` with the following command:

*   `npm install -g bower` (Same command for both Linux and OS X)

## Installing Gulp

`Gulp` is a framework and CLI tool that makes development faster and more enjoyable by automating tasks developers find themselves doing over, and over again. Also, you can install `Gulp` through `npm`:

*   `npm install -g gulp-cli`

And in individual project folders:

*   `npm install --save-dev gulp`

## Installing Grunt

`Grunt` is another popular automation tool similar to `Gulp`. To install it, use `npm` again:

*   `npm install -g grunt-cli`

## Installing Tmux

`Tmux` is a terminal multiplexer for Linux and Mac. It gives you the ability to have multiple sessions and windows in the same Bash window, and also lets you "detach" sessions that you can connect to through SSH, leaving all programs that were currently running, running. 

To install on Linux:

*   `sudo apt install tmux`

And that's that! With these tools your development process and content will be enjoyable and efficient. As you can see, the main tool to install is `npm` and it allows you to install many other great web oriented CLI tools.
