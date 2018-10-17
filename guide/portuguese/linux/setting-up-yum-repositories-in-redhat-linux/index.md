---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
localeTitle: Configurando Repositórios do Yum no RedHat / CentOS Linux
---
YUM Repositórios são armazéns de software Linux (arquivos de pacotes RPM).

O arquivo do pacote RPM é um arquivo do Red Hat Package Manager e permite a instalação rápida e fácil de software no Red Hat / CentOS Linux.

## Configurando Repositórios do Yum no RedHat CentOS Linux

Passo 1: Verifique se existem repositórios existentes ou não.

```sh
#yum repolist 
```

Você vai descobrir que não há repositórios.

Etapa 2: alterar o diretório para

```sh
#cd /etc/yum.repos.d 
```

Etapa 3: criar novo arquivo

```sh
#vim myrepo.repo 
```

Etapa 4: digite as seguintes linhas no arquivo

```sh
[file-name] 
 name=filename 
 baseurl="location of yum repositories" 
 gpgcheck=0 
```

Etapa 5: Salvar e Sair

Etapa 6: repita a etapa 1

```sh
You Will find repositories 

```