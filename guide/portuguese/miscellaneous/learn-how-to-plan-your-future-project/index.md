---
title: Learn How to Plan Your Future Project
localeTitle: Aprenda como planejar seu projeto futuro
---
Um grama de preparação vale um quilo de cura. Isso é verdade na medicina, e isso é definitivamente verdade no desenvolvimento de software.

Aqui está um fluxo de trabalho estruturado de 10 etapas que o guiará pelo processo de planejamento de aplicativos, com o objetivo de evitar que você grave muitos códigos desnecessários.

Juntos, planejaremos um aplicativo da Web de página simples "To-do" simples. Também planejaremos um back-end de API para um futuro aplicativo para dispositivos móveis.

## 1) Crie o nosso quadro Trello

[O Trello](https://trello.com/) é uma maneira divertida e gratuita de dividir seu processo de planejamento e desenvolvimento em pequenas tarefas que podem ser rastreadas.

![Imagem do quadro Trello](https://lh3.googleusercontent.com/EI4AQ4NINm3B2DHR_YIS29JyKVa5dTPiT3RtITylmndFlpshTHepsKuO8_1KQNfdPDSBjslDReHCuPFeH1GNrDtgOwTyq6ZtGf3DFBmq1AsAhPHKt_0pLXQLf0o4ZbDuKVj4-Bo)

[Aqui está a aparência da nossa prancha Trello](https://trello.com/b/O9MZcYyY/todo-app) . Eu prefiro dividir minhas tarefas em 3 colunas (dependendo da complexidade do projeto):

*   Para fazer - o que resta fazer
*   Em andamento - tarefas nas quais as pessoas estão trabalhando atualmente
*   Concluído - tarefas concluídas e prontas para teste

## 2) Escreva histórias de usuários

Aqui estão alguns exemplos de histórias de usuários. Estes irão orientar a forma como pensamos sobre as funcionalidades e funcionalidades da nossa aplicação. Note que todos eles seguem uma estrutura similar: como [pessoa\] eu posso \[fazer alguma coisa\].](https://lh5.googleusercontent.com/2v6iIMbCrLSKVfqttEToum7OA3YGQCBKWUHcSCB1KEbEcijXxQtKJKY6fhLXeecJiO27P4icOuPlkVc9_uNXolzlzNXOo_TPh09GZsAqRH-JISqPrpx0PZdtbHOr0RIuQUbTbaw)

*   como usuário logado, posso ver a lista das minhas tarefas.
*   como usuário logado, posso adicionar uma nova tarefa.
*   como usuário logado, posso excluir uma tarefa (somente minhas tarefas - não de outros usuários).
*   como usuário logado, posso completar uma tarefa (somente minhas tarefas - não outros usuários).
*   Como usuário anônimo, posso me inscrever para uma nova conta, recuperar minha senha ou fazer login no aplicativo com uma conta existente.

## 3) Crie nosso modelo de casos de uso

Nosso modelo de caso de uso nos ajudará a visualizar nossas histórias de usuário para que possamos entender melhor como implementá-las.

! \[Diagrama de caso de usuário anônimo

![Diagrama de caso de usuário autenticado](https://lh6.googleusercontent.com/3V6dVvAcyjqFkaOukimucYOX0CfwBBYNN9SvjmnVy40Pdhs4Wtrr34i3E-9pbV7tFsp4jHm77IFQvFupjq6OWyxqEgCzcQ995Ayh52Msczu6TfwKeNhL9PYHyxSgmPYA1TR6l6Q)

## 4) Crie nosso diagrama de atividades

Nosso diagrama de atividades mostrará os diferentes caminhos que nossos usuários podem seguir em nosso aplicativo.

![Imagem de diagrama de atividade](https://lh6.googleusercontent.com/jAQL4myqWOPA3gk2iTpGyAQBrO6p1GlPe8BQQ1Se6a-Di40X3Zw1p0wfJewZUL-YyDmedYzX5Lxvo2GW2Qnr6I-6kuKe1sDb9_5F_n46cKoawWReWW_ZoZCIJO6Semc4fvsiuHc)

Um usuário acessa nosso aplicativo de tarefas.

*   Se o usuário não estiver logado, ela verá a nossa página de login.
    
*   Se ela já tiver uma conta, ela poderá fazer login.
    
*   Se ela tiver uma conta, mas ela esqueceu sua senha, ela pode recuperar sua senha.
    
*   Se ela não tiver uma conta, ela poderá criar uma.
    
*   Tanto "criar uma conta" quanto "recuperar minha senha" exigirão validação de e-mail. Um usuário pode fazer login em nosso aplicativo somente depois de confirmar seu endereço de e-mail.
    
*   Se ela estiver conectada, ela verá sua lista de tarefas (isso pode ficar vazio se ela não tiver adicionado nenhuma tarefa ainda).
    
*   Um usuário logado:
    
    *   é capaz de ver sua lista de tarefas
        
    *   é capaz de marcar uma tarefa de sua lista como concluída
        
    *   é capaz de pesquisar dentro de sua lista de tarefas
        
    *   é capaz de excluir uma tarefa da lista dela
        
    *   pode sair.
        
*   O usuário pode sair do aplicativo a qualquer momento.
    

## 5) Crie nossos maquetes

Nossos modelos mostram como deve ser nosso aplicativo. É muito mais rápido fazer uma iteração em uma maquete do que em código de trabalho.

![Imagem de maquete](https://lh3.googleusercontent.com/GBFhmBkfr-xM5YSXlR0Fm9y8b24ivdRlUtRWQOHJ8skNxEgjTkAef0e5nZ-CcHKNUq2p4V4hgDuAm9LSEuvbovlVborH1ZioAUXVlEblWZ4hN_d2tGEpxhfTkKH9os2JS1pab4w)

## 6) Escolha as tecnologias certas para o nosso projeto

Como esse é um aplicativo de página única, vamos nos basear fortemente - ou, neste caso, exclusivamente - no JavaScript. Vamos usar uma das pilhas JavaScript mais populares: a pilha MEAN. Um grande benefício da pilha MEAN é que todos os seus componentes são livres e de código aberto. Também há toneladas de recursos disponíveis para aprender a pilha MEAN e para depurá-la quando você inevitavelmente encontra erros.

Você pode ter um [ambiente de desenvolvimento de pilha MEAN](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) instalado e funcionando na nuvem em menos de uma hora, gratuitamente.

Aqui estão os componentes que usaremos:

1.  [MongoDB](http://mongodb.org/) para nosso banco de dados
2.  [Node.js](http://nodejs.org/) e [Express.js](http://expressjs.com/) para implementar nossa API
3.  [AngularJS](http://angularjs.org/) , juntamente com HTML e CSS (e Bootstrap) para o nosso aplicativo do lado do cliente
4.  [Mangusto](http://mongoosejs.com/) para conectar nosso aplicativo ao MongoDB

## 7) Projete nosso esquema de banco de dados

Vale a pena o esforço para projetar um esquema de banco de dados, mesmo para o nosso aplicativo simples.

Teremos duas coleções: nossa coleção "Usuários" hospedará nossos dados de usuário, e nossa coleção "ToDo" abrigará nossas tarefas que precisam ser realizadas. Um usuário pode ter zero, uma ou muitas tarefas em sua lista de tarefas, portanto, teremos um relacionamento de um para muitos (1: m) entre nossas duas coleções.

![Diagrama do Esquema do Banco de Dados](https://lh6.googleusercontent.com/5uSb_xnSSc5CWXJD0yyUGVJsL92RRZl3Bex_3wjuzl5Xr69Ks0j3od-yFju24SAd5wWMBNy9uqBrvOzdrUWluOkbcr4H5zFg-ZemJX3ZRWS12D42OowuvWnxA7wWIGrhhzaQ0aw)

## 8) Definir nossos casos de uso

1.  O que acontece com as tarefas relacionadas a um usuário que exclui a conta dela? Quando o usuário exclui sua conta, as tarefas relacionadas a esse usuário também devem ser excluídas.
2.  Nenhuma tarefa pode ser adicionada sem estar vinculada a um usuário confirmado.
3.  Uma tarefa só pode ser excluída pelo seu proprietário.
4.  Nenhum usuário pode ser adicionado com um nome de usuário ou senha vazia.
5.  Nenhuma tarefa pode ser adicionada com uma tarefa vazia.

Coisas para manter em mente:

1.  Use o middleware Mongoose para remover documentos dependentes como tarefas quando um usuário exclui sua conta.
2.  Use regras de validação do Mongoose nos modelos para evitar que campos vazios sejam adicionados ao nosso banco de dados.

## 9) Projete e teste nossa API

Eu usei um produto gratuito chamado Apiary [para documentar nossa API](http://docs.fcctodoapp.apiary.io/) .

Aqui está a sintaxe que usei para [criar este BluePrint simples](https://jsapi.apiary.io/apis/fcctodoapp.apib) .

Eu recomendo que você crie uma conta e comece a jogar com ela. Se você vincular sua conta do [GitHub](http://github.com/) ao Apiary, poderá garantir que sua documentação permaneça sempre atualizada. Você também poderá testar seus dados visualmente sem a necessidade de realmente atingir seus endpoints da API. Se você preferir testar sua API na linha de comando, [aqui está um exemplo de como fazer isso](http://docs.agendor.apiary.io/) .

Posteriormente, depois de implementar sua API com Node.js e Express.js, você precisará definir seu URL no Apiary. Então você pode começar a testar suas chamadas. Nossa URL atual do host ( [http://fcctodoapp.apiblueprint.org/](http://fcctodoapp.apiblueprint.org/) ) será substituída pelo URL da sua API.

![App demo picture](https://lh6.googleusercontent.com/hU3ilG_y9FqtL_zajQ_KOjWy8Qx590Go8nkNvA1j0oR50YJTpjJhL1lAPgjyeLTAS06tq6V62EcJrLQyT_TR2BK49DYiX6kksU6s9cqJDvvaS6jvepIM6uiO4JMbXuu-oXhdsas)

## 10) Comece a escrever o código!

Essa é a parte divertida e vai ocupar a maior parte do tempo do seu projeto. Se você precisar de ajuda com isso, junte-se a nós e aprenda a codificar.