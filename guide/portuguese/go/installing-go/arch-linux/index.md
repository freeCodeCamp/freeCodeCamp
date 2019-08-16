---
title: Installing Go in Arch Linux using pacman
localeTitle: Instalando o Go no Arch Linux usando o pacman
---
### Instalando o Go no Arch Linux usando o pacman

Usar o Gerenciador de Pacotes do Arch Linux (pacman) é a maneira mais fácil de instalar o Go. Com base na filosofia Arch Linux de fornecer novas versões de software muito rapidamente, você terá uma versão muito atual do go. Antes de instalar o pacote go, você precisa atualizar o sistema.

```shell
$ sudo pacman -Syu 
 $ sudo pacman -S go 
```

#### Verifique a instalação e a versão do go

Para verificar se foi instalado com sucesso, use:

```shell
$ go version 
 > go version go2.11.1 linux/amd64 
```

Isso imprimirá no console a versão do go e, ao mesmo tempo, garantirá que a instalação corra bem.