---
title: Docker detached mode
localeTitle: Modo desanexado do Docker
---
## Modo desanexado do Docker

O modo `--detach` , mostrado pela opção `--detach` ou `-d` , significa que um contêiner do Docker é executado no plano de fundo do seu terminal. Não recebe entrada ou exibição de saída.
```
docker run -d IMAGE 
```

Se você executar contêineres em segundo plano, poderá descobrir seus detalhes usando o `docker ps` e, em seguida, reconectar seu terminal à sua entrada e saída.

#### Mais Informações:

*   [Conecte e desconecte de um contêiner em funcionamento | Docker Docs](https://docs.docker.com/engine/reference/commandline/attach/#examples)
*   [Separado vs primeiro plano | Docker docs](https://docs.docker.com/engine/reference/run/#detached-vs-foreground)