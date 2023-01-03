# Como funciona o fluxo de trabalho do token do usuário

Os tokens de usuário são usados para identificar os usuários para terceiros. Assim, os desafios concluídos usando esses serviços podem ser salvos na conta de um usuário.

## Como eles são criados

No momento, os tokens são usados apenas para enviar os desafios de Bancos de dados relacionais. A token gets created when a signed-in user clicks the "Click here to start the course" or "Click here to start the project" buttons to start one of the Relational Database courses or projects.

## Quando eles forem excluídos ou deletados ou removidos

Um token de usuário será excluído quando um usuário sai do freeCodeCamp, redefine seu progresso, exclui a conta ou exclui manualmente o token usando o widget na página de configurações.

## Como eles funcionam

Os tokens são armazenados em uma coleção chamada `UserToken` no banco de dados. Cada registro tem um `_id` único, que é o token, e um `user_id` que se vincula à conta do usuário da coleção `user`. O token é codificado utilizando JWT e enviado para o cliente quando ele é criado. That encoded token is then given to third-party services that need it and sent to our API by them when a challenge is completed. Quando nossa API o receber, ele é decodificado para que possamos identificar o usuário que está enviando um desafio e salvar o desafio completo em seus `completedChallenges`.
