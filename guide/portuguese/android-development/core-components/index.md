---
title: Android core components
localeTitle: Componentes principais do Android
---
# Componentes principais do Android

Os componentes principais são os elementos essenciais dos quais um aplicativo para o Android consiste. Cada um deles tem seu próprio propósito e ciclo de vida, mas nem todos são independentes. Eles são:

*   actividades
*   Serviços
*   Receptores de radiodifusão
*   Provedores de conteúdo

## [actividades](https://developer.android.com/guide/components/activities/)

Uma _atividade_ é um componente que possui uma interface de usuário e representa uma única tela. Um aplicativo pode ter várias atividades, cada uma delas pode ser um ponto de entrada para o próprio aplicativo para o usuário ou o sistema (uma atividade do aplicativo que deseja abrir outra atividade que pertença ao mesmo aplicativo ou a outra diferente).

## [Serviços](https://developer.android.com/guide/components/services)

Um _serviço_ é um componente sem interface de usuário para executar operações de longa duração em segundo plano. Existem dois tipos de serviços:

*   serviços de _primeiro plano_ : eles estão estritamente relacionados à interação do usuário (por exemplo, reprodução de música), por isso é mais difícil para o sistema eliminá-los.
*   serviços de _segundo plano_ : eles não estão diretamente relacionados às atividades do usuário, então eles podem ser mortos se mais RAM for necessária.

## [Receptores de radiodifusão](https://developer.android.com/guide/components/broadcasts)

Um _receptor de difusão_ é outro componente sem interface de usuário (exceto uma notificação de barra de status opcional) que permite ao sistema entregar eventos de / para o aplicativo, mesmo quando este não foi lançado anteriormente.

## [Provedores de conteúdo](https://developer.android.com/guide/topics/providers/content-providers)

Um _provedor de conteúdo_ é um componente usado para gerenciar um conjunto de dados do aplicativo para compartilhar com outros aplicativos. Cada item salvo no provedor de conteúdo é identificado por um esquema de URI.

Para obter informações detalhadas sobre o tópico, consulte a documentação oficial dos [fundamentos do Android](https://developer.android.com/guide/components/fundamentals) .
Colocar dicas para LOT
