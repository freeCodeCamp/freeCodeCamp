---
title: How to authenticate with GitHub using SSH
localeTitle: Как проверить подлинность с помощью GitHub с помощью SSH
---
# Как проверить подлинность с помощью GitHub с помощью SSH

Убедитесь, что здесь нет файлов `rsa` прежде чем продолжить, используйте:

```shell
ls -al ~/.ssh 
```

Если список не отображается (т `: No such file or directory` ), используйте:

```shell
mkdir $HOME/.ssh 
```

Если там ничего нет, создайте новый кейген с:

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com 
```

Теперь, используя `ls -al ~/.ssh` увидите наш файл `id_rsa.pub` .

Добавьте SSH-ключ к агенту SSH:

```shell
eval "$(ssh-agent -s)" # for mac and Linux from bash 
```

```shell
eval `ssh-agent -s` 
 ssh-agent -s # for Windows 
```

Добавьте ключ RSA в SHH с:

```shell
ssh-add ~/.ssh/id_rsa 
```

Скопируйте свой ключ в буфер обмена

```shell
clip < ~/.ssh/id_rsa.pub # Windows 
```

```shell
cat ~/.ssh/id_rsa.pub # Linux 
```

Перейдите на страницу [настроек](https://github.com/settings/keys) GitHub и нажмите кнопку «Новый SSH-ключ», вставьте в сгенерированный ключ.

Затем выполните аутентификацию с помощью:

```shell
ssh -T git@github.com 

```