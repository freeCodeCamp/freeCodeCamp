---
title: How to authenticate with GitHub using SSH
---

# How to authenticate with GitHub using SSH

Check that there are no `rsa` files here before continuing, use:

```shell
ls -al ~/.ssh
```

If there is nothing to list (i.e. `: No such file or directory`) then use:

```shell
mkdir $HOME/.ssh
```

If there's nothing there then generate a new keygen with:

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com
```

Now using `ls -al ~/.ssh` will show our `id_rsa.pub` file.

Add the SSH key to the SSH agent:

```shell
eval "$(ssh-agent -s)" # for mac and Linux from bash
```

```shell
eval `ssh-agent -s`
ssh-agent -s # for Windows
```

Add RSA key to SHH with:

```shell
ssh-add ~/.ssh/id_rsa
```

Copy your key to clipboard

```shell
clip < ~/.ssh/id_rsa.pub # Windows
```

```shell
cat ~/.ssh/id_rsa.pub # Linux
```

Go to your GitHub [settings](https://github.com/settings/keys) page and click the 'New SSH key' button paste in your generated key.

Then authenticate with:

```shell
ssh -T git@github.com
```
