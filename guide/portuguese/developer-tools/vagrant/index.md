---
title: Vagrant
localeTitle: Vagabundo
---
## Vagabundo

O Vagrant é uma ferramenta para construir e gerenciar ambientes de máquina virtual (VM). As máquinas virtuais podem ser usadas por qualquer motivo, mas são particularmente úteis para desenvolvedores e DevOps.

### Por que o Vagrant é útil?

Como desenvolvedor, usando uma VM, você pode ter um ambiente local para testar o código, que é o mesmo que o ambiente de produção, independentemente do ambiente usado para codificação.

Para DevOps, as VMs são muito úteis para ter uma máquina descartável e altamente configurável para testar infra-estrutura, configurações, scripts ou qualquer outra coisa.

Com o Vagrant, para usar uma VM você precisa apenas de um único arquivo, chamado de `VagrantFile` , que contém a VM, assim como toda a configuração necessária. Dessa forma, você pode criar facilmente um ambiente de desenvolvimento específico e isolado, que é muito portátil e pode ser compartilhado e usado por todos os membros de uma equipe.

O Vagrant também possui `boxes` pré-definidas que são VMs básicas, que podem ser facilmente clonadas e expandidas.

Outro recurso muito legal do Vagrant é o uso de `synced folders` . É possível sincronizar as pastas da VM, com pastas na máquina convidada. Ao fazer isso, você pode usar seu editor favorito em arquivos locais e, simultaneamente, ter esses arquivos sincronizados com a VM em execução.

#### Mais Informações:

[Site do Vagrant](https://www.vagrantup.com/)

### Instale o Vagrant

Para instalar o Vagrant, primeiro encontre o [pacote apropriado](https://www.vagrantup.com/downloads.html) para o seu sistema e baixe-o. O Vagrant é empacotado como um pacote específico de operação. Execute o instalador do seu sistema. O instalador irá adicionar automaticamente vagrant ao seu caminho do sistema para que ele esteja disponível nos terminais. Se não for encontrado, por favor, tente sair e entrar novamente no seu sistema (isto é particularmente necessário, por vezes, para o Windows).

### Verificar a instalação

Depois de instalar o Vagrant, verifique se a instalação funcionou abrindo um novo prompt de comandos ou console e verificando se o vagrant está disponível:

```bash
$ vagrant 
 Usage: vagrant [options] <command> [<args>] 
 
    -v, --version                    Print the version and exit. 
    -h, --help                       Print this help. 
 
 # ... 
```

### Começando

```bash
$ vagrant init hashicorp/precise64 
 $ vagrant up 
```

### Caixas

Caixas são adicionadas ao Vagrant com add box vagrant. Isso armazena a caixa sob um nome específico para que vários ambientes do Vagrant possam reutilizá-la. Se você ainda não adicionou uma caixa, pode fazê-lo agora:

```bash
$ vagrant box add hashicorp/precise64 
```

### Encontrando mais caixas

O melhor lugar para encontrar mais caixas é [o catálogo da caixa Vagrant Cloud da HashiCorp](https://vagrantcloud.com/boxes/search) .

### Comum

Youtube: [Começando com Vagrant](https://www.youtube.com/watch?v=LyIyyFDgO4o) por [Codecourse](https://www.youtube.com/user/phpacademy)

#### Mais Informações:

O site do Vagrant: [vagrantup.com](https://www.vagrantup.com)