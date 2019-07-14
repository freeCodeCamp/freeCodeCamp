---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
localeTitle: Configurando Repositórios do Yum no RedHat / CentOS Linux
---
YUM Repositórios são armazéns de software Linux (arquivos de pacotes RPM).

O arquivo do pacote RPM é um arquivo do Red Hat Package Manager e permite a instalação rápida e fácil de software no Red Hat / CentOS Linux.

## Configurando Repositórios do Yum no RedHat CentOS Linux

Passo 1: Verifique se existem repositórios existentes ou não.

```shell
#yum repolist 
```

Você vai descobrir que não há repositórios.

Etapa 2: alterar o diretório para

```shell
#cd /etc/yum.repos.d 
```

Etapa 3: criar novo arquivo

```shell
#vim myrepo.repo 
```

Etapa 4: digite as seguintes linhas no arquivo

```shell
[file-name] 
 name=filename 
 baseurl="location of yum repositories" 
 gpgcheck=0 
```

Etapa 5: Salvar e Sair

Etapa 6: repita a etapa 1

```shell
You Will find repositories 

```