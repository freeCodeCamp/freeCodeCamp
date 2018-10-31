---
title: How to authenticate with GitHub using SSH
localeTitle: 如何使用SSH对GitHub进行身份验证
---
# 如何使用SSH对GitHub进行身份验证

在继续之前检查这里没有`rsa`文件，使用：

```shell
ls -al ~/.ssh 
```

如果没有要列出的内容（即`: No such file or directory` ），那么使用：

```shell
mkdir $HOME/.ssh 
```

如果那里什么也没有，那么生成一个新的keygen：

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com 
```

现在使用`ls -al ~/.ssh`将显示我们的`id_rsa.pub`文件。

将SSH密钥添加到SSH代理：

```shell
eval "$(ssh-agent -s)" # for mac and Linux from bash 
```

```shell
eval `ssh-agent -s` 
 ssh-agent -s # for Windows 
```

将SHA密钥添加到SHH：

```shell
ssh-add ~/.ssh/id_rsa 
```

将密钥复制到剪贴板

```shell
clip < ~/.ssh/id_rsa.pub # Windows 
```

```shell
cat ~/.ssh/id_rsa.pub # Linux 
```

转到GitHub [设置](https://github.com/settings/keys)页面，然后在生成的密钥中单击“新建SSH密钥”按钮。

然后通过身份验证：

```shell
ssh -T git@github.com 

```