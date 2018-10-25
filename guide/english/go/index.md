---
title: Go
---
## Go
![Go bumper](https://golang.org/doc/gopher/bumper320x180.png)

**Go** (or **golang**) is a programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a compiled, statically-typed language in the tradition of Algol and C. It has garbage collection, limited structural typing, memory safety, and CSP-style concurrent programming features added. The compiler and other language tools originally developed by Google are all free and open source. Its popularity is increasing fast. It is a great choice for building web applications.

For more information head to [Go's Homepage](https://golang.org/)

Want a quick [Tour of Go?](https://tour.golang.org/welcome/1)

## Pre-Installations:
-----------

#### Install Golang with Homebrew:

```bash
$ brew update
$ brew install golang
```
#### When installed, try to run go version to see the installed version of Go.

### Setup the workspace:
------

#####  Add Environment variables:

First, you'll need to tell Go the location of your workspace.

We'll add some environment variables into shell config. One of does files located at your home directory bash_profile, bashrc or .zshrc (for Oh My Zsh Army)

```bash
$ vi .bashrc
````

then add those lines to export the required variables

#### This is actually your .bashrc file

```bash
export GOPATH=$HOME/go-workspace # don't forget to change your path correctly!
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin
```

#### Create your workspace:
--------
##### Create the workspace directories tree:
```bash
$ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin
$GOPATH/src : Where your Go projects / programs are located
$GOPATH/pkg : contains every package objects
$GOPATH/bin : The compiled binaries home
```

### Quickstart
For a quickstart and boilerplate Go project, try <a href='https://www.growthmetrics.io/open-source/alloy' target='_blank' rel='nofollow'>Alloy</a>

1. Clone Alloy repository
```
git clone https://github.com/olliecoleman/alloy
cd alloy
```
2. Install the dependencies
```
glide install
npm install
```
3. Start the development server
```
go install
alloy dev
```
4. Visit website at `http://localhost:1212`

*Alloy uses Node, NPM, and Webpack*

### Go Playground

  [Go Playground](https://play.golang.org/)

Learning how to install go on your local machine is important, but if want to start playing with go right in your browser, then Go Playground is the perfect sandbox to get started right away! To learn more about the Go Playground see their article titled [Inside the Go Playground](https://blog.golang.org/playground)
