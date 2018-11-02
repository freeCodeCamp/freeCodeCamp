---
title: How to download files using the "wget" utility in Linux
localeTitle: Como baixar arquivos usando o utilitário "wget" no Linux
---
## Como baixar arquivos usando o utilitário "wget" no Linux

Este artigo é um tutorial rápido sobre como usar o utilitário `wget` no SO baseado em Unix. O GNU Wget é um utilitário gratuito para download não interativo de arquivos da Web. Suporta protocolos HTTP, HTTPS e FTP, bem como recuperação através de proxies HTTP.

### Instalando o `wget`

O utilitário wget é um pacote disponível gratuitamente e licenciado sob a licença GNU GPL. Este utilitário pode ser instalado em qualquer sistema operacional semelhante ao Unix, incluindo Windows e MacOS.

### Sintaxe básica

A sintaxe básica do `wget` é…
```
wget [option]... [URL]... 
```

### Detalhes do wget
```
wget --version 
```

```
wget --help 
```

### Baixando um único arquivo
```
wget http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
```

### Download de FTP
```
wget ftp://ftp.gnu.org/gnu/wget/wget-1.10.1.tar.gz.sig 
```

### Restringir limites de velocidade de download
```
wget --limit-rate=100k http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
```

Você pode jogar com os recursos restantes do utilitário `wget`