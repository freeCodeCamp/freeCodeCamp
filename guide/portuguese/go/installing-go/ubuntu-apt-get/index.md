---
title: Installing Go in Ubuntu using apt-get
localeTitle: Instalando o Go no Ubuntu usando o apt-get
---
### Instalando o Go no Ubuntu usando o apt-get

Usar o Gerenciador de Pacotes do Ubuntu (apt-get) é a maneira mais fácil de instalar o Go. Você não terá a versão estável mais recente, mas para o propósito de aprender isso deve ser o suficiente.

> Como desta escrita, a versão do go do Ubuntu Xenial é 1.6.1, enquanto o mais recente versão estável é 1.9.1

```shell
$ sudo apt-get update 
 $ sudo apt-get install golang-go 
```

#### Verifique a instalação e a versão do go

Para verificar se foi instalado com sucesso, use:

```shell
$ go version 
 > go version go1.9.1 linux/amd64 
```

Isso imprimirá no console a versão do go e, ao mesmo tempo, garantirá que a instalação corra bem.