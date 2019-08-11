---
title: Installing Go in Mac OS X using a tarball
localeTitle: Instalando o Go no Mac OS X usando um tarball
---
### Instalando o Go no Mac OS X usando um tarball

#### Link para o tarball

Você pode obter o link para o arquivo tar do Mac OS na seção Stable mais recente da [página de download](https://golang.org/dl/) do [golang](https://golang.org/dl/) .

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/mac_tarball.jpg "Link de tarball do Mac")

#### Processo de Instalação

> Neste processo de instalação, usaremos a versão estável mais recente até o momento da criação deste documento (go 1.9.1). Para uma versão mais nova ou mais antiga, basta substituir o link na primeira etapa. Verifique a [página de download](https://golang.org/dl/) do [golang](https://golang.org/dl/) para ver quais versões estão disponíveis no momento.

##### Instalando o Go 1.9.1
```
$ curl -O https://storage.googleapis.com/golang/go1.9.1.darwin-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.darwin-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### Verifique a instalação e a versão do go

Para verificar se foi instalado com sucesso, use:

```shell
$ go version 
```

Isso deve imprimir no console a versão do go e, ao mesmo tempo, garantir que a instalação corra bem.