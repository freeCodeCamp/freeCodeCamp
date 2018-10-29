---
title: Docker rmi
localeTitle: Docker rmi
---
## Docker rmi

`docker rmi` remove imagens pelo seu ID.

Para remover a imagem, primeiro você precisa listar todas as imagens para obter os IDs da imagem, o nome da imagem e outros detalhes. Executando `docker images -a` simples do `docker images -a` comando `docker images -a` ou `docker images` .

Depois disso, certifique-se de qual imagem deseja remover, para fazer isso executando este simples comando `docker rmi <your-image-id>` . Então você pode confirmar que a imagem foi removida ou não pela lista de todas as imagens e verifique.

### Remover várias imagens

Existe uma maneira de remover mais de uma imagem por vez, quando você deseja remover várias imagens específicas. Então, para fazer isso primeiro, obtenha IDs de imagem simplesmente listando as imagens e, em seguida, execute o comando seguido simples.

`docker rmi <your-image-id> <your-image-id> ...`

Escreva IDs de Imagens no comando seguido pelos espaços entre eles.

### Remova todas as imagens de uma só vez

Para remover todas as imagens, há um comando simples para fazer isso. `docker rmi $(docker images -q)`

Aqui no comando acima, há dois comandos: o primeiro que executa o `$()` é a sintaxe do shell e retorna os resultados executados naquela sintaxe. Então, neste `-q- is a option is used to provide to return the unique IDs,` $ () retorna os resultados dos IDs das imagens e, em seguida, o `docker rmi` remove todas essas imagens.

#### Para maiores informações:

*   [Documentos do Docker CLI: rmi](https://docs.docker.com/engine/reference/commandline/rm/)