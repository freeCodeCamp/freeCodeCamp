---
title: Installing Go in Windows using the MSI Installer
localeTitle: Instalando o Go no Windows usando o instalador MSI
---
### Instalando o Go no Windows usando o instalador MSI

Na [página de download do golang](https://golang.org/dl/) , obtenha o instalador do Windows MSI e execute-o. Você terá que escolher entre as versões de 64 bits e 32 bits. Se você não sabe qual arquitetura sua versão do Windows está executando, basta fazer uma rápida pesquisa no Google para descobrir.

> A maioria das versões atuais do Windows é de 64 bits, então você deve estar ok recebendo a versão de 64 bits na seção de downloads em destaque, mas se o seu computador é muito antigo, a versão de 32 bits deve ser a aposta mais segura.

##### Instalador Windodows de 64 bits

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx64.jpg "x64 link do instalador do Windows msi")

##### Instalador Windodows de 32 bits

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx86.jpg "Link do instalador do Windows msi x86")

#### Verifique a instalação e a versão do go

Para verificar se foi instalado com sucesso, abra seu prompt de comando e use:
```
> go version 
```

Isso deve imprimir no console a versão do go e, ao mesmo tempo, garantir que a instalação corra bem.