---
title: Managing multiple SSH keys
localeTitle: 管理多个SSH密钥
---
# 管理多个SSH密钥

可以肯定地说，Web领域的大多数开发人员在某些时候都遇到过SSH。 SSH是最常用的安全数据交换协议之一。您使用SSH连接到远程服务器，其中还包括使用git管理代码以及与远程存储库同步。

尽管每个设备有一个私钥 - 公钥对被认为是一种好习惯，但有时您需要使用多个密钥和/或您有非正统的密钥名称。您可能正在使用一个SSH密钥对来处理公司的内部项目，但您可能使用不同的密钥来访问某些公司客户端的服务器。您甚至可能使用不同的密钥来访问您自己的私人服务器。

只要需要使用第二个密钥，管理SSH密钥就会变得很麻烦。我希望这篇文章对任何遇到SSH密钥管理问题的人都有所帮助。

我假设读者具有git和SSH的基本知识。整篇文章中的大多数示例都将使用git。当然，所有这些都适用于任何其他SSH通信。话虽如此，还有一些特定于git的技巧。

带进去，我们走吧！

## 现状

首先，让我们先看看您的工作流程在看多个密钥之前的样子。

您有一个私钥存储在`~/.ssh/id_rsa`并带有相应的公钥`~/.ssh/id_rsa.pub` 。

让我们假设您想要将代码更改推送到远程git服务器/从远程git服务器拉出代码更改。说GitHub，whynot。为此，您首先必须将您的公钥添加到GitHub。我不会重复这一步，应该很容易找到如何做到这一点。我还假设你的名字是史蒂夫，你正在开展一个使用Raspberry Pies来嗅探网络流量的绝密项目。

要开始工作，您必须使用SSH克隆git存储库：

```bash
git clone git@github.com:steve/raspberry-spy.git 
```

此时GitHub将会像：“哟，这是一个私有存储库！我们需要使用此处的公钥和您的私钥来加密流量”

您已在GitHub上将公钥添加到您的配置文件，但SSH必须以某种方式确定您的相应私钥所在的位置。由于我们不知道SSH到`git@github.com`时应该使用哪个私钥，SSH客户端会尝试在默认位置找到一个密钥，即`~/.ssh/id_rsa` - 这是他最好的猜测。如果该位置没有文件，您将收到错误消息：

```bash
Cloning into 'raspberry-spy'... 
 Permission denied (publickey). 
 fatal: Could not read from remote repository. 
 
 Please make sure you have the correct access rights 
 and the repository exists. 
```

如果您有_一些_私钥存储在文件`~/.ssh/id_rsa` ，SSH客户端将使用该私钥进行通信加密。如果该密钥是passworded（应该是），系统将提示您输入密码，如下所示：

```bash
Enter passphrase for key '/Users/steve/.ssh/id_rsa': 
```

如果输入正确的密码短语，并且该私钥确实与您附加到配置文件的公钥对应，那么一切都会正常，并且将成功克隆存储库。

但是如果你以不同的方式命名你的密钥（例如`~/.ssh/_id_rsa` ）怎么办？ SSH客户端将无法确定私钥的存储位置。您将获得与以前相同的`Permission denied ...`错误。

如果要使用不同名称的私钥，则必须手动添加：

```bash
ssh-add ~/.ssh/_id_rsa 
```

输入密码后，您可以通过执行`ssh-add -l`检查密钥是否已添加到`ssh-agent` （SSH客户端）。此命令将列出SSH客户端当前可用的所有密钥。

如果您现在尝试克隆存储库，它将会成功。

## 到现在为止还挺好？

如果你眼睛敏锐，你可能会开始注意到一些潜在的问题。

首先，如果你重新启动计算机， `ssh-agent`将重新启动，你将不得不再次使用`ssh-add`添加你的默认命名密钥，输入密码和所有繁琐的东西。

我们可以自动添加密钥或以某种方式指定访问某些服务器时使用的密钥吗？

我们可以以某种方式保存密码，这样我们就不必每次都输入密码吗？如果只有类似_钥匙串的_东西来保存受密码保护的SSH密钥🤔。

请放心，所有这些问题都有答案。

## 输入，SSH `config`

事实证明， [SSH配置文件](https://linux.die.net/man/5/ssh_config)是一件事，可以帮助我们。它是SSH通信的每用户配置文件。创建一个新文件： `~/.ssh/config`并打开它进行编辑。

### 管理自定义命名的SSH密钥

我们要使用此`config`文件解决的第一件事是避免使用`ssh-add`添加自定义命名的SSH密钥。假设您的SSH密钥名为`~/.ssh/_id_rsa` ，请在`config`文件中添加以下内容：

```bash
Host github.com 
  HostName github.com 
  User git 
  IdentityFile ~/.ssh/_id_rsa 
  IdentitiesOnly yes 
```

现在通过执行`ssh-add -D`确保`~/.ssh/_id_rsa`不在`ssh-agent` 。此命令将从当前活动的`ssh-agent`会话中删除所有密钥。每次注销或重新启动时（或者如果手动`ssh-agent`进程），会话都会重置。我们可以通过执行上述命令来“模拟”重启。

如果你现在尝试克隆你的GitHub存储库，它就像我们手动添加密钥一样（就像我们之前做的那样）。系统会要求您输入密码：

```bash
git clone git@github.com:steve/raspberry-spy.git 
 Cloning into 'raspberry-spy'... 
 Enter passphrase for key '/Users/steve/.ssh/_id_rsa': 
```

您将注意到我们提示输入密码的密钥与我们在`config`文件中指定的密钥相同。输入正确的SSH密钥密码后，将成功克隆存储库。

注意：如果在成功克隆后尝试`git pull` ，则会再次提示您输入密码。我们稍后会解决。

重要的是， `Host github.com`从`config`和`github.com`从URI `git@github.com:steve/raspberry-spy.git`比赛。您还可以使用URI `git@mygithub:steve/raspberry-spy.git`将`config`更改为`Host mygithub`并进行克隆。

这打开了闸门。正如你所说的那样，你的思维正在竞争并思考如何解决SSH密钥的所有问题。以下是一些有用的配置示例：

```bash
Host bitbucket-corporate 
        HostName bitbucket.org 
        User git 
        IdentityFile ~/.ssh/id_rsa_corp 
        IdentitiesOnly yes 
```

现在你可以使用`git clone git@bitbucket-corporate:company/project.git`

```bash
Host bitbucket-personal 
        HostName bitbucket.org 
        User git 
        IdentityFile ~/.ssh/id_rsa_personal 
        IdentitiesOnly yes 
```

现在你可以使用`git clone git@bitbucket-personal:steve/other-pi-project.git`
```
Host myserver 
        HostName ssh.steve.com 
        Port 1111 
        IdentityFile ~/.ssh/id_rsa_personal 
        IdentitiesOnly yes 
        User steve 
        IdentitiesOnly yes 
```

现在，您可以使用`ssh myserver` SSH到您的服务器。多么酷啊？每次执行`ssh`命令时，都不需要手动输入端口和用户名。

#### 额外奖励：每个存储库设置

您还可以定义哪个特定密钥应该用于某个存储库，覆盖SSH `config`任何内容。具体SSH命令可以通过设置来限定`sshCommand`下`core`在`<project>/.git/config` 。例：

```bash
[core] 
        sshCommand = ssh -i ~/.ssh/id_rsa_corp 
```

这可以使用git 2.10或更高版本。您也可以使用此命令来避免手动编辑文件：

```bash
git config core.sshCommand 'ssh -i ~/.ssh/id_rsa_corp' 
```

### 密码管理

最后一块拼图是管理密码。我们希望每次启动SSH连接时都不必输入密码。为此，我们可以利用MacOS附带的钥匙串管理软件和各种Linux发行版。

首先将您的密钥添加到钥匙串，方法是将`-K`选项传递给`ssh-add`命令：

```bash
ssh-add -K ~/.ssh/id_rsa_whatever 
```

现在，您可以在钥匙串中看到您的SSH密钥。在MacOS上，它看起来像这样： ![Keychain Access](https://raw.githubusercontent.com/fvoska/guides/master/static/images/pages/ssh/managing-multiple-ssh-keys/keychain-access.png "钥匙串访问")

如果您通过`ssh-add -D`从`ssh-agent`删除密钥（这将在您重新启动计算机时发生，如前所述）并尝试SSH-ing，系统将再次提示您输入密码。为什么？我们刚刚将密钥添加到钥匙串中。如果再次检查Keychain Access，您会注意到使用`ssh-add -K`添加的密钥仍在钥匙串中。很奇怪，是吗？

事实证明，还有一个可以跳过的箍。打开SSH `config`文件并添加以下内容：

```bash
Host * 
  AddKeysToAgent yes 
  UseKeychain yes 
```

现在，SSH将在钥匙串中查找密钥，如果找到密钥，则不会提示您输入密码。密钥也将添加到`ssh-agent` 。在MacOS上，这将适用于MacOS Sierra 10.12.2或更高版本。在Linux上，您可以使用类似`gnome-keyring`东西，即使没有对SSH `config`最后修改，它也可以工作。至于Windows--谁知道，对吧？

我希望有人发现这很有用。现在去配置你的SSH `config`文件吧！