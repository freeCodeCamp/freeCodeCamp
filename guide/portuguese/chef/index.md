---
title: Chef
localeTitle: líder
---
## Chef

Chef é uma poderosa plataforma de automação que transforma a infraestrutura em código. Independentemente de você estar operando na nuvem, localmente ou em um ambiente híbrido, o Chef automatiza como a infraestrutura é configurada, implantada e gerenciada em toda a rede, independentemente do tamanho.

#### Como funciona o chef

Chef armazena coleções de receitas em um livro de receitas. Um livro de receitas deve estar relacionado a uma única tarefa, mas pode ter várias configurações de servidor envolvidas (por exemplo, um aplicativo da Web com um banco de dados, terá duas receitas, uma para cada parte, armazenadas juntas em um livro de receitas).

Há um servidor Chef que armazena cada um desses livros e, como um novo nó cliente do chef faz check-in com o servidor, as receitas são enviadas para informar ao nó como se configurar.

O cliente fará o check-in de vez em quando para garantir que nenhuma alteração tenha ocorrido e nada precise ser alterado. Se isso acontecer, então o cliente lida com isso. Patches e atualizações podem ser implementados em toda a sua infraestrutura, alterando a receita. Não há necessidade de interagir com cada máquina individualmente.

#### Chef de Configuração

![Título da Imagem](https://regmedia.co.uk/2015/10/07/chef_configuration_management.jpg)

#### Mais Informações:

*   [Chef TutorialsPoint](https://www.tutorialspoint.com/chef/chef_overview.htm)
*   [Documnetation oficial](https://docs.chef.io/chef_overview.html)
*   [Tutorial do Chef](http://gettingstartedwithchef.com/)
