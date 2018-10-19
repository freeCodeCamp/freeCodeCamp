---
tittrêsle: Acceptance Testing
localeTitle: Teste de aceitação
---
## Teste de aceitação

Teste de aceitação, uma técnica de teste executada para determinar se o sistema de software atendeu ou não às especificações do requisito. O principal objetivo deste teste é avaliar a conformidade do sistema com os requisitos de negócios e verificar se ele atende aos critérios exigidos para entrega aos usuários finais.

Existem várias formas de teste de aceitação:

\->um Teste de aceitação do usuário

\->dois Teste de aceitação de negócios

\->três Teste Alfa

\->quatro Testes Beta

# Critérios de aceitação

Os critérios de aceitação são definidos com base nos seguintes atributos

\-> Correção Funcional e Completude

\-> Integridade de dados

\-> Conversão de dados

\-> Usabilidade

\-> Desempenho

\-> Pontualidade

\-> Confidencialidade e Disponibilidade

\-> Capacidade de instalação e atualização

\-> Escalabilidade

\-> Documentação

# Plano de Teste de Aceitação - Atributos

As atividades de teste de aceitação são realizadas em fases. Em primeiro lugar, os testes básicos são executados e, se os resultados do teste são satisfatórios, a execução de cenários mais complexos é realizada.

O plano de teste de aceitação possui os seguintes atributos:

\-> Introdução

\-> Categoria de teste de aceitação

\-> ambiente de operação

\-> ID do caso de teste

\-> título do teste

\-> Objetivo do Teste

\-> Procedimento de Teste

\-> Horário de teste

\-> Recursos

\=> As atividades de teste de aceitação são projetadas para chegar a uma das conclusões:

Aceite o sistema como entregue

Aceite o sistema após as modificações solicitadas terem sido feitas

Não aceite o sistema

# Relatório de Teste de Aceitação - Atributos

O Relatório de teste de aceitação possui os seguintes atributos:

\-> Identificador de relatório

\-> Resumo dos Resultados

\-> Variações

\-> Recomendações

\-> Resumo da lista To-DO

# \-> Decisão de Aprovação

O Teste de Aceitação se concentra em verificar se o software desenvolvido atende a todos os requisitos. Seu principal objetivo é verificar se a solução desenvolvida atende às expectativas do usuário.

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

O teste de aceitação é uma prática bem estabelecida no desenvolvimento de software. O teste de aceitação é uma parte importante do teste funcional do seu código.

Um Teste de Aceitação testa que o código executa conforme o esperado, ou seja, produz a saída esperada, dadas as entradas esperadas.

Um Teste de Aceitação é usado para testar blocos funcionais relativamente maiores de software, conhecidos como Recursos.

### Exemplo

Você criou uma página que exige que o usuário insira primeiro seu nome em uma caixa de diálogo antes de poder ver o conteúdo. Você tem uma lista de usuários convidados, portanto, qualquer outro usuário receberá um erro.

Existem vários cenários aqui, como:

*   Toda vez que você carregar a página, você precisa digitar seu nome.
*   Se o seu nome estiver na lista, a caixa de diálogo desaparecerá e você verá o artigo.
*   Se o seu nome não estiver na lista, a caixa de diálogo mostrará um erro.

Você pode escrever Testes de Aceitação para cada um desses sub-recursos do recurso de caixa de diálogo maior

Além do código que lida com a infraestrutura de como o teste será executado, seu teste para o primeiro cenário poderia ser semelhante (no pseudocódigo):

Dado que a página está aberta A caixa de diálogo deve estar visível E a caixa de diálogo deve conter uma caixa de entrada E a caixa de entrada deve ter um texto de espaço reservado "Seu nome, por favor!"

### Notas

Os Testes de Aceitação podem ser escritos em qualquer idioma e executados usando várias ferramentas disponíveis que cuidariam da infraestrutura mencionada acima, por exemplo, Abrindo um navegador, carregando uma página, fornecendo os métodos para acessar elementos na página, bibliotecas de asserção e assim por diante.

Toda vez que você escreve um software que será usado novamente (até sozinho), é útil escrever um teste para ele. Quando você ou outra pessoa fizer alterações nesse código, a execução dos testes garantirá que você não quebrou a funcionalidade existente.

Geralmente é realizado pelos usuários ou pelos especialistas no assunto. Também é chamado de teste de aceitação do usuário (UAT). A UAT envolve os cenários mais comuns da vida real. Ao contrário do teste do sistema, ele não se concentra nos erros ou falhas, mas na funcionalidade. O UAT é feito no final do ciclo de vida do teste e decide se o software é movido para o próximo ambiente ou não.

Uma boa maneira de definir quais testes de aceitação devem ser escritos é adicionar critérios de aceitação a uma história do usuário. Com os critérios de aceitação, você pode definir quando uma história de usuário está pronta para ser implantada e o problema é concluído de acordo com seus desejos.

Em um projeto Ágil, é importante que a equipe tenha critérios de aceitação definidos para todas as histórias de usuários. O trabalho de Teste de Aceitação utilizará os critérios definidos para avaliar a funcionalidade entregue. Quando uma história pode passar por todos os critérios de aceitação, ela está completa.

O teste de aceitação também pode validar se uma epopéia / história / tarefa concluída atende aos critérios de aceitação definidos. Em contraste com a definição de concluído, esse critério pode abranger casos de negócios específicos que a equipe deseja resolver. Isso fornece uma boa medição da qualidade do trabalho.

#### Mais Informações:

*   [Conselho Internacional de Qualificações para Testes de Software](http://www.istqb.org/)
