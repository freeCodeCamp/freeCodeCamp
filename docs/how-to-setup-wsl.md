## Seting up freeCodeCamp locally on WSL2

1) Follow the instructions given in the documentation by Microsoft to install WSL2 (Recommended Distro: Ubuntu18.04):
[Installing WSL2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2#install-windows-10-insider-preview-build)

2) On the same page, ensure to follow the instructions about installing Nodejs and NPM through the NVM.

**NOTE:** If step 2 does not work for you, skip to the next step, and return afterwards

3) Setup Git on your distro:
 - It is likely you will be unable to clone your fork of freeCodeCamp, without running these steps, but there is no harm in trying. Just follow the instructions on [the Contributors Site](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally).
 - If you run into any issues, follow through with one alternative in this step:

### ALTERNATIVE 1 - Use apt-get to Install the Latest Version of Git

 - Update your distrobution:

```sh
sudo apt update && sudo apt upgrade
```

 - Download and install Git:

```sh
sudo apt install git
```

 - Verify the installed version:

```sh
git --version
```

### ALTERNATIVE 2 - Use SSH to Work on Your Fork

 - Follow the instructions on [GitHub](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) to generate a new SSH key, and add it to your account.

 - If you encounter an error similar to this, perform the rest of this alternative:

 >ssh: connect to host `github.com` port 22: Connection refused

 - CD into the `.ssh` folder, and create a config file:

```sh
cd ~/.ssh && touch config
```

 - Open the file with your favourite text editor:

Open VS Code: `code .`

Alternatively, open the folder in the explorer, and use the Windows built-in text editor: `explorer.exe .`

**NOTE:** This command works for VS Code, and you might be asked to install an extension for this to work

 - Add this to the config file to allow GitHub's domain through your firewall:

```
# GitHub Account
Host github.com
    HostName ssh.github.com
    Port 443
    PreferredAuthentications publickey
    IdentityFile ./id_rsa.pub
```

**NOTE:** Provided you have note deviated from the default setup, the `IdentityFile` will be as above.

 - Return to the GitHub SSH setup to test your connection

### ALTERNATIVE 3 - Last Resort

 - Install build-essential, fakeroot and dpkg-dev using the following command:

```sh
sudo apt-get install build-essential fakeroot dpkg-dev
```

 - Create a directory named git-rectify in the home folder using the following command:

```sh
mkdir ~/git-rectify
```

 - Change directory to the `get-rectify` directory and get the git source files:

```sh
cd ~/git-rectify
```

 - This command creates a copy of your `sources.list` file, for safe keeping.

```sh
sudo cp /etc/apt/sources.list /etc/apt/sources.list~
```

**Note:** If you encounter any errors with the directory not existing, or the file being copied to already existing, follow this step:
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

 - Now, you need to uncomment the sources in the ../ file

```sh
sudo sed -Ei 's/^# deb-src /deb-src /' /etc/apt/sources.list
```

 - Get the source files from the list:

```sh
apt-get source git
```

 - Install all the git dependencies:

```sh
sudo apt-get build-dep git
```

 - Install libcurl with all development files:

```sh
sudo apt-get install libcurl4-openssl-dev
```

 - Unpack all the source packages using the following command:

Note: The name `git_2.17.1-1ubuntu0.1` could vary based on the lastest version. So look in to the directory for the correct version name.

```sh
dpkg-source -x git_2.17.1-1ubuntu0.1
```

 - Change directory in to `git_2.17.1` folder and open the control file located inside debian folder (git_2.17.1/debian/control) in a text editor. Replace all the occurences of “libcurl4-gnutls-dev” to “libcurl4-openssl-dev”. Also open “debian/rules” file and delete the line “TEST=test”

 - Build the package files using the following command.

```sh
sudo dpkg-buildpackage -rfakeroot -b
```

 - Install the package:

```sh
sudo dpkg -i git_2.17.1_amd64.deb
```

---

**NOTE:** Remember to return to step 2, if you skipped it.

4) Setup MongoDB on WSL

You might find that setting up MongoDB Server on Windows to be the easiest, but connecting to the server from WSL might lead to permission denied errors.

 - Follow the instructions on the [Microsoft Documentation](https://docs.microsoft.com/en-us/windows/nodejs/databases) for setting up MongoDB on WSL.

If you encounter any errors similar to this:
>NonExistentPath: Data directory /data/db not found.

Follow these steps:

 - Create the path for the database:

```sh
sudo mkdir -p /data/db
```

 - Try to start the server again. If you encounter a `permission denied` error, start the server with:

```sh
sudo mongod
```

If you encounter another `path` error, manually tell MongoDB where to store the database:

```sh
mongod --dbpath=data/db
```

**NOTE:** The path `data/db` must exist beforehand.