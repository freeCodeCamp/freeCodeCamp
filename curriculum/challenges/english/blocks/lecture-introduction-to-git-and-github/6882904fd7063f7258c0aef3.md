---
id: 6882904fd7063f7258c0aef3
title: How Do You Handle Security Requirements Like SSH and GPG Keys?
challengeType: 19
dashedName: how-do-you-handle-security-requirements-like-ssh-and-gpg-keys
---

# --description--

Before you can push your repository to GitHub, you will need to be authenticated. Both SSH and GPG keys use a public-private pair. This means that you keep a private key on your local machine, which you use to authenticate yourself. You share a public key with the people or services that need to validate your auth. In other words, the private key is required to perform an action, and the public key is used to verify the action.

GPG, or Gnu Privacy Guard, keys are typically used to sign files or commits. Someone can then use your public GPG key to verify that the file signature is from your key and that the contents of the file have not been modified or tampered with. SSH, or Secure SHell, keys are typically used to authenticate a remote connection to a server - via the `ssh` utility. However, as you'll learn in this lesson, you can also use an SSH key to sign commits.

To generate a GPG key, you'll need to run:

```sh
gpg --full-generate-key
```

For an SSH key, you'll run:

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Make sure to provide your actual email.

Both of these commands should request a passphrase to secure the key. These are optional, but strongly recommended.

For SSH keys, you'll get two files - one for your private key, and one for your public. Public key filenames will end in `.pub`, so you do not accidentally share your private key. These files will be in `~/.ssh`.

GPG keys, however, will be in a hidden and encrypted directory. Instead, to list your public keys, you'll run:

```sh
gpg --list-secret-keys --keyid-format=long
```

Then, to get the public key, use:

```sh
gpg --armor --export "<key id>"
```

But what can you do with these new keys? Well, we've talked about signing your commits, and that's something you can use either of these keys for.

In order to sign your commits with your GPG key, you'll need to upload your public key, not the private key, to your GitHub account. Then, take the short ID you got from listing the keys earlier, and run this command to set it as your git signing key:

```sh
git config --global user.signingkey <your_gpg_key_id>
```

Then, you can pass the `-S` flag to your `git commit` command to sign a specific commit - you'll need to provide your passphrase. Alternatively, if you want to sign every commit automatically, you can set the autosign config to `true`:

```sh
git config --global commit.gpgsign true
```

To sign with an SSH key, which is a relatively new feature on GitHub, you'll need to start by uploading the key to your GitHub account. Then you'll need to set the signing mode for git to use SSH:

```sh
git config --global gpg.format ssh
```

Then, to set the signing key, you'll pass the file path instead of an ID:

```sh
git config --global user.signingkey <path_to_your_ssh_keys>
```

Finally, you can enable auto signing as you would for a GPG key.

With either of these approaches set up, you're now set to have verified commits which will get a special badge on GitHub.

# --questions--

## --text--

What is the fundamental difference between private and public keys in SSH and GPG key pairs?

## --answers--

The private key is longer than the public key.

### --feedback--

Think about who has access to each key and where they're stored.

---

The private key stays on your local machine while the public key is shared.

---

The public key is used to encrypt data while the private key decrypts it.

### --feedback--

Think about who has access to each key and where they're stored.

---

The private key expires after a certain time period.

### --feedback--

Think about who has access to each key and where they're stored.

## --video-solution--

2

## --text--

Which command would you use to enable automatic signing of all commits with your GPG key?

## --answers--

```sh
git config --global gpg.autosign true
```

### --feedback--

Look at the configuration command mentioned in the lesson for automatically signing all commits.

---

```sh
git config --global commit.sign always
```

### --feedback--

Look at the configuration command mentioned in the lesson for automatically signing all commits.

---

```sh
git config --global commit.gpgsign true
```

---

```sh
git --enable-auto-signing
```

### --feedback--

Look at the configuration command mentioned in the lesson for automatically signing all commits.

## --video-solution--

3

## --text--

What's required to set up SSH key signing for Git commits on GitHub?

## --answers--

Only upload your public SSH key to GitHub.

### --feedback--

Think about the configuration steps mentioned for SSH signing.

---

Set the signing format to SSH and configure your signing key path.

---

Generate a special SSH signing key separate from your regular SSH key.

### --feedback--

Think about the configuration steps mentioned for SSH signing.

---

Enable a special GitHub feature in your account settings.

### --feedback--

Think about the configuration steps mentioned for SSH signing.

## --video-solution--

2
