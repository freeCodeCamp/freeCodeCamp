---
title: Ansible
localeTitle: Ansible
---
## Ansible

Ansible é um simples de usar ferramenta de automação. O Ansible pode ser usado para automatizar implementações, atualizações, segurança, gerenciamento de sistemas, provisionamento de contêineres e muito mais. Os arquivos de configuração são fáceis de gerenciar arquivos YAML escritos em inglês simples. A instalação é simples e devido ao seu formato Master-Push, não há agentes necessários em máquinas remotas. Comunicações com máquinas remotas são via SSH.

### Instalação no Ubuntu Servers 14.04 ou mais recente

Recomenda-se a instalação através do Ansible PPA nos servidores Ubuntu.

Primeiro, verifique se seu sistema está atualizado.
```
$ sudo apt-get update 
 $ sudo apt-get upgrade 
```

Em seguida, você vai querer adicionar o seguinte pacote ao seu sistema
```
$ sudo apt-get install software-properties-common 
```

Adicione o ppa: ansible / ansible ao seu sistema
```
$ sudo apt-add-repository ppa:ansible/ansible 
```

Atualize seus repos novamente
```
$ sudo apt-get update 
```

Geralmente, há algumas etapas envolvidas na implantação do seu código na produção (para o site ativo). O número de etapas aumenta à medida que seu Site / Aplicativo / Webapp se torna maior e mais complexo.

A solução para isso é a implantação automatizada. A automação vem na forma de scripts que funcionam como um conjunto de instruções (assim como todo código faz) descrevendo cada uma dessas etapas.

Ansible é uma ferramenta de automação, geralmente usada para implantação, como mencionado acima, mas cada vez mais usada para outras automações complexas.

Ele usa uma linguagem chamada [YAML](https://en.wikipedia.org/wiki/YAML) que permite que você descreva as instuções perto do inglês simples, como você pode ver neste exemplo do módulo Ansible:

```YAML
--- 
 - yum: name={{contact.item}} state=installed 
 with_items: 
 - app_server 
 - acme_software 
 
 
 - service: name=app_server state=running enabled=yes 
```

Finalmente, instale o pacote
```
$ sudo apt-get install ansible 
```

Um benefício significativo do uso do Ansible é que ele usa SSH (Secure SHell) por padrão, e os módulos podem residir em qualquer máquina (computador) que não exija servidores, daemons ou bancos de dados.

O verdadeiro poder da Ansible está no uso de livros didáticos. Leia mais sobre configuração e uso do Ansible na [documentação oficial da Ansible](https://docs.ansible.com/ansible/latest/index.html) .

Módulos Ansible, que são pequenos programas específicos de tarefas. Uma vez que eles servem a finalidade pretendida, por exemplo, executando o script de implantação, esses módulos são removidos pelo Ansible.

#### Mais Informações:

*   [Saiba mais sobre como funciona o Ansible](https://www.ansible.com/how-ansible-works/)
*   [Documentação Ansible](http://docs.ansible.com/)