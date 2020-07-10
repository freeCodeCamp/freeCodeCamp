# Setting up WSL for Working with freeCodeCamp Locally

> [!NOTE]
> Requirements:
> 
> **WSL 1**: Windows 10 64-bit, version 1607
> 
> **WSL 2**: Windows 10 64-bit, version 2004, Build 19041 or higher

Follow these guidelines for setting up WSL to set up freeCodeCamp locally.

This guide covers some common issues encountered with the setup of WSL.

## Enable WSL & Download a Distro

1) Follow the instructions given in the documentation by Microsoft to install WSL2 (Recommended Distro: Ubuntu18.04):
[Installing WSL2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2#install-windows-10-insider-preview-build)

> [!NOTE]
> You can download a different distro, but the setup might differ.

2) On the same page, ensure to follow the instructions about installing Nodejs and NPM through the NVM.

**NOTE:** If you encounter errors on step 2, skip to the next step, and return when prompted

## Setting Up Git

It is likely you will be unable to clone your fork of freeCodeCamp, without running these steps, but there is no harm in trying. Just follow the instructions on [the Contributors Site](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally).

If you run into any issues related to Git, follow through with one of the following alternatives. If that does not resolve the issue, try the next alternative:

### ALTERNATIVE 1 - Use apt-get to Install the Latest Version of Git

1) Update your distribution:

```sh
sudo apt update && sudo apt upgrade
```

2) Download and install Git:

```sh
sudo apt install git
```

3) Verify the installed version:

```sh
git --version
```

### ALTERNATIVE 2 - Use SSH to Work on Your Fork

1) Follow the instructions on [GitHub](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) to generate a new SSH key, and add it to your account.

2) If you encounter an error similar to this, perform the rest of this alternative:

 >ssh: connect to host `github.com` port 22: Connection refused

3) `cd` into the `.ssh` folder, and create a config file:

```sh
cd ~/.ssh && touch config
```

4) Open the file with your favourite text editor:

Open VS Code: `code .`

Alternatively, open the folder in the explorer, and use the Windows built-in text editor: `explorer.exe .`

> [!NOTE]
> This command works for VS Code, and you might be asked to install an extension for this to work

5) Add this to the config file to allow GitHub's domain through your firewall:

```
# GitHub Account
Host github.com
    HostName ssh.github.com
    Port 443
    PreferredAuthentications publickey
    IdentityFile ./id_rsa.pub
```

> [!DANGER]
> Provided you have not deviated from the default setup, the `IdentityFile` will be as above.

6) Return to the GitHub SSH setup to test your connection

### ALTERNATIVE 3 - Last Resort

1) Install build-essential, fakeroot and dpkg-dev using the following command:

```sh
sudo apt-get install build-essential fakeroot dpkg-dev
```

2) Create a directory named git-rectify in the home folder using the following command:

```sh
mkdir ~/git-rectify
```

3) Change directory to the `get-rectify` directory and get the git source files:

```sh
cd ~/git-rectify
```

4) This command creates a copy of your `sources.list` file, for safe keeping.

```sh
sudo cp /etc/apt/sources.list /etc/apt/sources.list~
```

> [!NOTE]
> If you encounter any errors with the directory not existing, or the file being copied to already existing, follow this step:

 - Enter the directory

```sh
cd ~/git-rectify/etc/apt
```

 - Open your file explorer

```sh
explorer.exe .
```

 - Manually create a copy of the `sources.list` file, and save it with a different name.
 - Change directory back to `git-rectify`

```sh
cd ../..
```

Continue from these steps:

5) Now, you need to uncomment the sources in the ../ file

```sh
sudo sed -Ei 's/^# deb-src /deb-src /' /etc/apt/sources.list
```

6) Get the source files from the list:

```sh
apt-get source git
```

7) Install all the git dependencies:

```sh
sudo apt-get build-dep git
```

8) Install libcurl with all development files:

```sh
sudo apt-get install libcurl4-openssl-dev
```

9) Unpack all the source packages using the following command:

> [!NOTE]
> The name `git_2.17.1-1ubuntu0.1` could vary based on the latest version. So look into the directory for the correct version name.

```sh
dpkg-source -x git_2.17.1-1ubuntu0.1
```

10) Change directory in to `git_2.17.1` folder and open the control file located inside debian folder (git_2.17.1/debian/control) in a text editor. Replace all the occurrences of _“libcurl4-gnutls-dev”_ to _“libcurl4-openssl-dev”_.

11) Also open _“debian/rules”_ file and delete the line _“TEST=test”_

12) Build the package files using the following command.

```sh
sudo dpkg-buildpackage -rfakeroot -b
```

13) Install the package:

```sh
sudo dpkg -i git_2.17.1_amd64.deb
```

---

## Setup MongoDB on WSL

> [!NOTE]
> Remember to return to **step 2** of [Enabling WSL](#enable-wsl-amp-download-a-distro), if you skipped it.

You might find that setting up MongoDB Server on Windows to be the easiest, but connecting to the server from WSL might lead to permission denied errors.

1) Follow the instructions on the [Microsoft Documentation](https://docs.microsoft.com/en-us/windows/nodejs/databases) for setting up MongoDB on WSL.

If you encounter any errors similar to this:
>NonExistentPath: Data directory /data/db not found.

Follow these steps:

2) Create the path for the database:

```sh
sudo mkdir -p /data/db
```

3) Try to start the server again. If you encounter a `permission denied` error, start the server with:

```sh
sudo mongod
```

If you encounter another `path` error, manually tell MongoDB where to store the database:

```sh
mongod --dbpath=data/db
```

> [!NOTE]
> The path `data/db` must exist beforehand.

## Other Possible Issues

> ERR! build error gyp ERR! stack Error: not found: make

- Install missing dependencies

```sh
sudo apt-get install -yq /
gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 /
libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 /
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1libxcursor1 /
libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates /
fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```
