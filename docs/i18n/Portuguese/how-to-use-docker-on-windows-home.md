# Como usar o Docker no Windows Home

Há alguns problemas a evitar quando se configurou o docker no Windows Home. Primeiro de tudo que você tem que usar [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) como Administrador. Infelizmente, o Windows Home não suporta o Docker para Windows Desktop, então o Toolbox deve ser usado. Ele tem que ser executado como Administrador, já que a instalação utiliza links simbólicos, o que não pode ser criado caso contrário.

Uma vez que você instalou a caixa de ferramentas, execute o Terminal Docker como Administrador. Isso criará uma `máquina virtual padrão` se já não existir. Quando isso acontecer, feche o terminal e abra o VirtualBox (também como Administrador). Você deve ser capaz de ver a máquina `padrão`. O site é bastante intensivo de recursos, então pare a máquina virtual e aumente as configurações o máximo possível - memória em particular. Foi confirmado que trabalhava com 4 GB de ruído.

Uma vez que você esteja feliz que o Docker está funcionando, clone o repositório freeCodeCamp para um diretório dentro de `C:\Users`. Estes diretórios são compartilhados, dando acesso ao Docker aos diretórios locais, que ele precisa durante a instalação.

Se você ver mensagens como

```shell
bash: change_volumes_owner.sh: Nenhum arquivo ou diretório
```

quando você `npm run docker:init` isso é provavelmente o culpado.
