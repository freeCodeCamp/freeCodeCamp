# Como usar o Docker no Windows Home

Há alguns contratempos a serem evitados ao configurar o Docker no Windows Home. Primeiramente, você deve usar o [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) como Administrador.  Infelizmente, o Windows Home não suporta o Docker para Windows Desktop, então o Toolbox deve ser usado. Ele tem que ser executado como Administrador, já que a instalação utiliza links simbólicos, que não podem ser criados caso contrário.

Uma vez que você instalou o Toolbox, execute o Terminal Docker como Administrador. Isso criará uma maquina virtual `default` se ainda não houver uma. Quando isso acontecer, feche o terminal e abra o VirtualBox (também como Administrador). Você deve ser capaz de ver a máquina `default`. O site consome bastante recurso, então pare a máquina virtual e aumente as configurações o máximo que puder - da memória em particular. Foi confirmado que usa 4 GB de RAM.

Uma vez que você esteja feliz que o Docker está funcionando, clone o repositório freeCodeCamp para um diretório dentro de `C:\Users`. Estes diretórios são compartilhados, dando acesso ao Docker aos diretórios locais, que ele precisa durante a instalação.

Se você ver mensagens como

```shell
bash: change_volumes_owner.sh: No such file or directory
```

quando você usar `pnpm run docker:init`, esse é provavelmente o culpado.
