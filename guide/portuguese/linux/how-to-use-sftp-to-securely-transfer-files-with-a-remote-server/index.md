---
title: How to Use SFTP to Securely Transfer Files with a Remote Server
localeTitle: Como usar o SFTP para transferir arquivos com segurança com um servidor remoto
---
## Como usar o SFTP para transferir arquivos com segurança com um servidor remoto

Este artigo é um tutorial rápido sobre como usar o protocolo SFTP para trocar arquivos com um servidor. Isso é útil para programação, pois permite que você codifique e teste localmente e depois envie seu trabalho para o servidor quando terminar.

### Testando SSH

Se ainda não o fez, teste que você é capaz de acessar o SSH no servidor. O SFTP usa o protocolo Secure Shell (SSH), portanto, se você não puder usar o SSH, provavelmente não será capaz de fazer SFTP.

```unix
ssh your_username@hostname_or_ip_address 
```

### Iniciar Sessão SFTP

Isso usa a mesma sintaxe do SSH e abre uma sessão na qual você pode transferir arquivos.

```unix
sftp your_username@hostname_or_ip_address 
```

Para listar comandos úteis:

```unix
help 
```

### Transferir arquivos e pastas

Para baixar um arquivo:

```unix
get <filename> 
```

Para baixar uma pasta e seu conteúdo, use o sinalizador "-r" (também funciona para upload):

```unix
get -r <foldername> 
```

Para fazer upload de um arquivo:

```unix
put <filename> 
```

### Alterar pastas

Para alterar a pasta local:

```unix
lcd <path/to/folder> 
```

Para alterar a pasta remota:

```unix
cd <path/to/folder> 

```