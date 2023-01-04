# Como funciona o fluxo de trabalho do token do usuário

Os tokens de usuário são usados para identificar os usuários para terceiros. Assim, os desafios concluídos usando esses serviços podem ser salvos na conta de um usuário.

## Como eles são criados

No momento, os tokens são usados apenas para enviar os desafios de Bancos de dados relacionais. Um token é criado quando um usuário conectado clica em "Clique aqui para iniciar o curso" ou "Clique aqui para iniciar o projeto" para iniciar um dos cursos ou projetos de Banco de dados relacionais.

## Quando eles forem excluídos ou deletados ou removidos

Um token de usuário será excluído quando um usuário sai do freeCodeCamp, redefine seu progresso, exclui a conta ou exclui manualmente o token usando o widget na página de configurações.

## Como eles funcionam

Os tokens são armazenados em uma coleção chamada `UserToken` no banco de dados. Cada registro tem um `_id` único, que é o token, e um `user_id` que se vincula à conta do usuário da coleção `user`. O token é codificado utilizando JWT e enviado para o cliente quando ele é criado. Esse token codificado é então enviado aos serviços de terceiros que precisam dele e para a nossa API por eles quando um desafio é concluído. Quando nossa API o receber, ele é decodificado para que possamos identificar o usuário que está enviando um desafio e salvar o desafio completo em seus `completedChallenges`.
