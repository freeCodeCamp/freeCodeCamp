---
title: How to authenticate with GitHub using SSH
localeTitle: Como autenticar com o GitHub usando o SSH
---
# Como autenticar com o GitHub usando o SSH

Verifique se não há arquivos `rsa` aqui antes de continuar, use:

```shell
ls -al ~/.ssh 
```

Se não houver nada para listar (ou seja, `: No such file or directory` ), use:

```shell
mkdir $HOME/.ssh 
```

Se não houver nada, então gere um novo keygen com:

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com 
```

Agora usando `ls -al ~/.ssh` mostrará nosso arquivo `id_rsa.pub` .

Adicione a chave SSH ao agente SSH:

```shell
eval "$(ssh-agent -s)" # for mac and Linux from bash 
```

```shell
eval `ssh-agent -s` 
 ssh-agent -s # for Windows 
```

Adicione a chave RSA ao SHH com:

```shell
ssh-add ~/.ssh/id_rsa 
```

Copie sua chave para a área de transferência

```shell
clip < ~/.ssh/id_rsa.pub # Windows 
```

```shell
cat ~/.ssh/id_rsa.pub # Linux 
```

Vá para a página de [configurações do](https://github.com/settings/keys) GitHub e clique no botão 'Nova chave SSH' e cole na chave gerada.

Então autentique com:

```shell
ssh -T git@github.com 

```