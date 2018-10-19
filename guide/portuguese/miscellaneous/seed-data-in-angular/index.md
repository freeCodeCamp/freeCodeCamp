---
title: Seed Data in Angular
localeTitle: Dados de sementes em angular
---
As _coisas_ que aparecem na visualização principal do seu aplicativo fazem parte de alguns dados iniciais que são adicionados ao seu banco de dados (incluindo seus usuários de teste e admin) toda vez que você reiniciar o aplicativo (executando o `grunt serve` na linha de comando). Esses dados são definidos em **/server/config/seed.js** .

Você pode adicionar, remover ou alterar dados neste arquivo, e ele será gravado em seu banco de dados, sobrescrevendo quaisquer duplicatas na próxima vez que você executar o `grunt serve` . Se um objeto definido em **seed.js** for sobrescrito, o banco de dados atribuirá um novo _._ propriedade ID\_ a ele (vamos _cobrir._ ID\_ propriedades na próxima seção), o que pode dar-lhe alguns problemas mais tarde no teste. Para evitar isso, você pode desativar a propagação configurando `seedDB: false` em **/server/config/environment/development.js** .