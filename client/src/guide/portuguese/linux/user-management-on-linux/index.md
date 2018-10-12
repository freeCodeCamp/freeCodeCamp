---
title: User management on Linux
localeTitle: Gerenciamento de usuários no Linux
---
#### Nota: Para executar um comando como `sudo` você deve ter uma conta de usuário sudo (Administrador)

## Como criar um usuário

#### Use o comando `adduser` ou `useradd` para incluir um novo usuário em seu sistema.
```
$ sudo adduser username 
```

Certifique-se de substituir o `username` usuário pelo usuário que você deseja criar.

#### Use o comando `passwd` para atualizar a senha do novo usuário.
```
$ sudo passwd username 
```

Uma senha forte é altamente recomendada!

## Como criar um usuário Sudo

Para criar um usuário `sudo` , você precisa criar um usuário regular primeiro usando o comando acima e depois adicionar esse usuário ao grupo de `sudoers` usando o comando `usermod` .

##### Em sistemas Debian (Ubuntu / LinuxMint / ElementryOS), membros do `sudo` grupo têm privilégios sudo.
```
$ sudo usermod -aG sudo username 
```

##### Em syatems baseados em RHEL (Fedora / CentOs), os membros do grupo `wheel` possuem privilégios sudo.
```
$ sudo usermod -aG wheel username 
```

## Como excluir um usuário

##### Para o Debian (Ubuntu)
```
$ sudo deluser username 
```

##### Para o RHEL (Fedora / CentOS)
```
$ sudo userdel username 
```

##### Criando grupos e adicionando usuários
```
$ sudo groupadd editorial 
 $ sudo usermod -a -G editorial username 
```

#### Nota: Todos os comandos acima podem ser executados sem sudo no modo `root`

Para mudar para root no Ubuntu, execute o comando `su -i` seguido pela senha do usuário logado. Prompt changes to `#` insted of `$`

##### Em sistemas Debian (Ubuntu / LinuxMint / ElementryOS), membros do `sudo` grupo têm privilégios sudo.
```
$ sudo usermod -aG sudo username 
```

## Como criar um grupo

Para criar um grupo, use o comando `groupadd`
```
$ sudo groupadd groupname 
```

## Como excluir o grupo

Para excluir um grupo, use o comando 'groupdel'

`` ` $ sudo groupdel grouname``

#### Referências

[Debian (Ubuntu)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-16-04)

[RHEL (CentOS / Fedora)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-a-centos-7-server)