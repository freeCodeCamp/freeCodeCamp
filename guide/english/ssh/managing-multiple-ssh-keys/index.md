---
title: Managing multiple SSH keys
---
# Managing multiple SSH keys

It is safe to say that most developers in the Web sphere have at some point encountered SSH. SSH is one of the most used protocols for safe data exchange. You use SSH for connecting to remote servers, which also includes managing your code using git and syncing with remote repositories.

Even though it is considered a good practice to have one private-public key pair per device, sometimes you need to use multiple keys and/or you have unorthodox key names. You might be using one SSH key-pair for working on your company's internal projects but you might be using a different key for accessing some corporate client's servers. You might even be using a different key for accessing your own private server.

Managing SSH keys can become cumbersome as soon as you need to use a second key. I hope this article will be of help to anyone who is having issues with SSH key management.

I assume the reader has basic knowledge of git and SSH. Most examples throughout the article will be using git. Of course, all of this will apply to any other SSH communication. That being said, there are some git-specific tricks included.

Strap in, here we go!

## Status quo

First, let us see what your workflow might look like before having multiple keys to worry about.

You have one private key stored in `~/.ssh/id_rsa` with a corresponding public key `~/.ssh/id_rsa.pub`.

Let us imagine that you want to push/pull code changes to/from a remote git server; say GitHub, whynot. To do so, you first have to add your public key to GitHub. I will not go over that step, it should be easy enough to find out how to do that. I have also assumed that your name is Steve and you are working on a top-secret project which uses Raspberry Pies to sniff network traffic.

To start your work, you have to clone a git repository using SSH:
```bash
git clone git@github.com:steve/raspberry-spy.git
```
At this moment GitHub will be like: "Yo, this a private repository! We need to encrypt traffic using this public key I have here and your private key"

You have added the public key to your profile on GitHub, but SSH has to somehow figure out where your corresponding private key is located. Since we have no clue which private key should be used when SSH-ing into `git@github.com`, SSH client tries to find a key in default location, which is `~/.ssh/id_rsa` - it's his best guess. If there is no file in that location, you will get an error:
```bash
Cloning into 'raspberry-spy'...
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

If you have *some* private key stored in file `~/.ssh/id_rsa`, SSH client will use that private key for communication encryption. If that key is passworded (as it should be), you will be prompted for a password, like so:
```bash
Enter passphrase for key '/Users/steve/.ssh/id_rsa':
```
If you enter the correct passphrase and if that private key indeed is the one which corresponds to the public key which you attached to your profile, all will go fine and the repository will be cloned successfully.

But what if you named your key differently (ex. `~/.ssh/_id_rsa`)? SSH client will not be able to determine where the private key is stored. You will get the same `Permission denied ...` error as before.

If you want to use a private key that you named differently, you have to add it manually:
```bash
ssh-add ~/.ssh/_id_rsa
```
After entering the passphrase you can check if the key was added to `ssh-agent` (SSH client) by executing `ssh-add -l`. This command will list all keys which are currently available to the SSH client.

If you try cloning the repository now, it will be successful.

## So far, so good?

If you are keen-eyed, you might start noticing some potential issues. 

Firstly, if you restart your computer, `ssh-agent` will restart and you will have to add your not-default-named keys using `ssh-add` all over again, typing passwords and all that tedious stuff.

Can we automate adding keys or somehow specify which key to use when accessing certain servers?

Can we somehow save passwords so we don't have to type them in every time? If only there was something like a *keychain* for saving password-protected SSH keys 🤔.

Rest assured, there are answers to all those questions.

## Enter, SSH `config`

As it turns out, <a href='https://linux.die.net/man/5/ssh_config' target='_blank' rel='nofollow'>SSH configuration file</a> is a thing, a thing which can help us out. It is a per-user configuration file for SSH communication. Create a new file: `~/.ssh/config` and open it for editing.

### Managing custom-named SSH keys

First thing we are going to solve using this `config` file is avoid having to add custom-named SSH keys using `ssh-add`. Assuming your SSH key is named `~/.ssh/_id_rsa`, add following to the `config` file:
```bash
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/_id_rsa
  IdentitiesOnly yes
```

Now make sure that `~/.ssh/_id_rsa` is not in `ssh-agent` by executing `ssh-add -D`. This command will remove all keys from currently active `ssh-agent` session. The session gets reset every time you log out or reboot (or if you kill `ssh-agent` process manually). We can "simulate" rebooting by executing the mentioned command.

If you try cloning your GitHub repository now, it will be the same as if we added the key manually (like we did before). You will be asked for password:
```bash
git clone git@github.com:steve/raspberry-spy.git
Cloning into 'raspberry-spy'...
Enter passphrase for key '/Users/steve/.ssh/_id_rsa':
```

You will have noticed that the key for whose password we are prompted for is the same key which we specified in our `config` file. After entering the correct SSH key password, repository will be successfully cloned.

Note: if, after successful cloning, you try `git pull`, you will be prompted for password again. We will solve that later.

It is important that `Host github.com` from `config` and `github.com` from URI `git@github.com:steve/raspberry-spy.git` match. You can also change `config` to be `Host mygithub` and clone using URI `git@mygithub:steve/raspberry-spy.git`.

This opens the floodgates. As you are reding this, your mind is racing and thinking about how all your troubles with SSH keys are over. Here are some useful configuration examples:

```bash
Host bitbucket-corporate
        HostName bitbucket.org
        User git
        IdentityFile ~/.ssh/id_rsa_corp
        IdentitiesOnly yes
```
Now you can use `git clone git@bitbucket-corporate:company/project.git`

```bash
Host bitbucket-personal
        HostName bitbucket.org
        User git
        IdentityFile ~/.ssh/id_rsa_personal
        IdentitiesOnly yes
```
Now you can use `git clone git@bitbucket-personal:steve/other-pi-project.git`

```
Host myserver
        HostName ssh.steve.com
        Port 1111
        IdentityFile ~/.ssh/id_rsa_personal
        IdentitiesOnly yes
        User steve
        IdentitiesOnly yes
```
Now you can SSH into your server using `ssh myserver`. How cool is that? You do not need to enter port and username manually every time you execute `ssh` command.

#### Bonus: Per-repository settings

You can also define which specific key should be used for certain repository, overriding anything in SSH `config`. Specific SSH command can be defined by setting `sshCommand` under `core` in `<project>/.git/config`. Example:
```bash
[core]
        sshCommand = ssh -i ~/.ssh/id_rsa_corp
```
This is possible with git 2.10 or later. You can also use this command to avoid editing the file manually:
```bash
git config core.sshCommand 'ssh -i ~/.ssh/id_rsa_corp'
```

### Password managemet

Last piece of the puzzle is managing passwords. We want to avoid having to enter password every time when SSH connection is initiating. To do so, we can utilize keychain management software that comes with MacOS and various Linux distributions.

Start by adding your key to the keychain by passing `-K` option to the `ssh-add` command:
```bash
ssh-add -K ~/.ssh/id_rsa_whatever
```

Now you can see your SSH key in the keychain. On MacOS it looks something like this:
![Keychain Access](https://raw.githubusercontent.com/fvoska/guides/master/static/images/pages/ssh/managing-multiple-ssh-keys/keychain-access.png "Keychain Access")

If you remove the keys from `ssh-agent` via `ssh-add -D` (this will happen when you restart your computer, as mentioned before) and try SSH-ing, you will be prompted for password again. Why? We just added the the key to the keychain. If you check Keychain Access again, you will notice that the key you added using `ssh-add -K` is still in the keychain. Weird, huh?

It turns out there is one more hoop to jump through. Open your SSH `config` file and add the following:

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
```

Now, SSH will look for key in keychain and if it finds it you will not be prompted for password. Key will also be added to `ssh-agent`. On MacOS this will work on MacOS Sierra 10.12.2 or later. On Linux you can use something like `gnome-keyring` and it might work even without this last modification to SSH `config`. As for Windows - who knows, right?

I hope someone found this useful. Now go and configure your SSH `config` file!
