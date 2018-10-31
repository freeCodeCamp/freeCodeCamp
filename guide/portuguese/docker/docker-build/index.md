---
title: Docker build
localeTitle: Construção do Docker
---
## Construção do Docker

`docker build` criou uma imagem do docker a partir de um Dockerfile e de um "contexto". Um contexto pode ser um URL ou um PATH local. Você pode nomear a imagem usando a tag `-t` opcional.

Um Dockerfile instalará dependências durante o comando de compilação, a partir de uma URL especificada ou PATH local. Quaisquer dependências necessárias em seus contêineres devem ser especificadas no Dockerfile.

Sua imagem agora está armazenada no registro local de imagens do Docker de sua máquina.

Quando você tem contêineres do Docker construídos, você pode executar seu aplicativo usando os comandos de execução apropriados.

#### Mais Informações:

*   [Documentos do Docker CLI: build](https://docs.docker.com/engine/reference/commandline/rm/)
*   [Docker Construindo Seu Aplicativo](https://docs.docker.com/get-started/part2/#build-the-app)