---
title: Angular Socketio
localeTitle: Socketio Angular
---
Se você chegou ao Projeto Stock Charting Back End, você deve ter notado que o critério de bônus é ter sua lista de ações atualizada em todos os clientes. Isso pode ser feito com o SocketIO, mas isso não é tudo que o SocketIO pode fazer. Lembre-se anteriormente, eu mencionei que ao usar _$ http.post_ você tinha que atualizar sua matriz local com a versão do item que você estava postando no banco de dados? O SocketIO mantém o ambiente do navegador do usuário sincronizado com seu banco de dados em tempo real. Isto tem dois resultados práticos:

1.  Você não precisa mais atualizar manualmente seus dados locais com dados do banco de dados; tudo é gerenciado automaticamente
2.  Você pode enviar as alterações do banco de dados ao vivo para usuários em diferentes máquinas, tudo ao mesmo tempo

Melhor ainda, se você incluir apenas SocketIO quando solicitado durante a configuração angular-fullstack yeoman, não há absolutamente nenhum trabalho envolvido para incluí-lo. Ele funciona imediatamente, tem uma demo de trabalho no **main /** route, e você pode aprender como usá-lo sozinho, simplesmente olhando como eles o incluem em **main.controller.js** (então eu não vou mais adiante detalhe).