---
title: Installing Go in Ubuntu using a tarball
localeTitle: Instalando o Go no Ubuntu usando um tarball
---
### Instalando o Go no Ubuntu usando um tarball

> Esta é a maneira recomendada de instalar o go, se você deseja obter a última versão estável disponível no site do golang.

#### Verifique o seu sistema Arquitetura

Antes de continuar, verifique se seu sistema é de 32 ou 64 bits. Se você não sabe, execute o seguinte comando para descobrir:

```shell
$ lscpu | grep Architecture 
```

Se você `Architecture: x86_64` seu sistema é 64bit; caso contrário, se você obtiver `Architecture: i686` , seu sistema será 32bit. Agora que você conhece a arquitetura do seu sistema, vamos prosseguir.

#### Escolhendo o tarball certo

A partir da [página de download](https://golang.org/dl/) do [golang](https://golang.org/dl/) , você precisará obter o link para o arquivo de tarball correto (.tar.gz) para o seu sistema.

Se o seu sistema tiver 64 bits, copie o link para o arquivo .tar.gz para sistemas Linux com arquitetura x86\_64. Por exemplo, a versão estável mais recente para sistemas de 64 bits, até o momento desta publicação, é `go1.9.1.linux-amd64.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux64.jpg "link de tarball x64")

Se o seu sistema é de 32 bits, copie o link para o arquivo .tar.gz para sistemas Linux com arquitetura x86. No momento em que escrevo, o arquivo mais recente é `go1.9.1.linux-386.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux86.jpg "link de tarball x86")

Depois de copiar o link, simplesmente substitua o link no processo de instalação encontrado abaixo com o link que você obteve da página de download.

#### Processo de Instalação

> Neste processo de instalação, usaremos os links para os tarballs do go 1.9.1 como exemplo. Para uma versão mais nova ou mais antiga, basta substituir o link na primeira etapa. Verifique a [página de download](https://golang.org/dl/) do [golang](https://golang.org/dl/) para ver quais versões estão disponíveis no momento.

##### Go 1.9.1 para sistemas de 64 bits:
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

##### Go 1.9.1 para sistemas de 32 bits:
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-386.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-386.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### Verifique a instalação e a versão do go

Para verificar se foi instalado com sucesso, use:

```shell
$ go version 
 > go version go1.9.1 linux/amd64 
```

Isso imprimirá no console a versão do go e, ao mesmo tempo, garantirá que a instalação corra bem.