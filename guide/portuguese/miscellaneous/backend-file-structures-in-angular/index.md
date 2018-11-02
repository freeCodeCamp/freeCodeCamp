---
title: Backend File Structures in Angular
localeTitle: Estruturas de arquivos de back-end em angular
---
A API de back-end de seu aplicativo que interage com seu banco de dados está localizada em **/ server / api**  
Vamos dar uma olhada em **/ server / api / thing** :

1.  **index.js** : esse arquivo roteia as solicitações da API $ http feitas a partir do front-end do seu aplicativo para a função apropriada em **thing.controller.js**
2.  **thing.controller.js** : Aqui é onde realmente lidamos com o banco de dados! Tome um minuto para olhar por aqui e descobrir o que está acontecendo. Estas funções irão: retornar todos os itens em uma coleção, retornar um único item de uma coleção quando passado seu id, postar um item em uma coleção, atualizar um item na coleção (isso não funciona como planejado fora da caixa, vamos consertar isso em um minuto) e, claro, excluir um item da coleção.
3.  **thing.model.js** : Aqui, a estrutura real de um objeto _thing_ é definida. Você pode adicionar ou remover quaisquer campos que deseja a partir do modelo de _coisa,_ e enquanto eles são sintaticamente corretas que não vai quebrar nada, mesmo se há _coisas_ com diferentes esquemas no seu banco de dados já. Mas! Você não precisa apenas editar o modelo das _coisas_ para fazer um novo tipo de coleção, porque gerador-angular-fullstack pode fazer isso por você!