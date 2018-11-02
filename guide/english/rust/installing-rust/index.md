---
title: Installing Rust
---

# Installing Rust

Using `rustup` is preferred for Rust installation. `rustup` installs and manages Rust for your system.

## Installing Rust in Windows

Visit the [rustup website](https://rustup.rs) and download the `rustup-init.exe`. Install it and then you should be ready to go!

## Installing Rust in other operating systems (Mac OS X, Linux, BSD, Unix)

Open up your terminal and type in this command:

```sh
curl https://sh.rustup.rs -sSf | sh
```

This will fetch the `rustup` installer and in turn fetch everything you need.

### Mac OS X (Homebrew)

Mac OS X users can also use [Homebrew](https://brew.sh/) to install rust:
```sh
brew install rust
```

# Verifying installation

Installing `rustup` will install all things relevant to rust, but most relevantly this means installing the compiler and the package manager. To verify that everything is installed, run this command:

```sh
cargo version
```

You will now be able to use Rust!

# More information

To learn more about the install process, visit
https://www.rust-lang.org/en-US/install.html
