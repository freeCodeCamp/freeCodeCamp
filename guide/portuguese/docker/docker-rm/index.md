---
title: Docker rm
localeTitle: Docker rm
---
## Docker rm

`docker rm` remove contêineres por seu nome ou ID.

Quando você tem contêineres do Docker em execução, primeiro você precisa pará-los antes de excluí-los.

*   Parar todos os contêineres em execução: `docker stop $(docker ps -a -q)`
*   Excluir todos os contêineres parados: `docker rm $(docker ps -a -q)`

### Remover vários contêineres

Você pode parar e excluir vários contêineres transmitindo aos comandos uma lista dos contêineres que você deseja remover. A sintaxe do shell `$()` retorna os resultados de tudo o que é executado dentro dos colchetes. Assim, você pode criar sua lista de contêineres dentro desta para ser passada para os comandos `stop` e `rm` .

##### Aqui está um detalhamento do docker ps -a -q

*   contêineres de lista do `docker ps`
*   `-a` opção de listar todos os contêineres, até mesmo os interrompidos. Sem isso, o padrão é listar apenas contêineres em execução
*   `-q` a opção silenciosa para fornecer apenas IDs numéricos de contêiner, em vez de uma tabela inteira de informações sobre contêineres

#### Mais Informações:

*   [Documentos do Docker CLI: rm](https://docs.docker.com/engine/reference/commandline/rm/)