---
title: Free Code Camp Style Guide for Algorithms
localeTitle: Guia de Estilo Livre do Camp Code para Algoritmos
---
Escrever desafios de Algoritmo é uma ótima maneira de exercitar suas próprias habilidades de resolução de problemas e testes. Siga este processo atentamente para maximizar as chances de aceitarmos seu Algoritmo.

*   `seed_data/Algorithms.json` repositório Free Code Camp e abra o `seed_data/Algorithms.json` para se familiarizar com o formato dos nossos Algoritmos.
*   Independentemente da dificuldade do Algoritmo, coloque-o como o último Algoritmo no arquivo JSON. Altere um dos números no ID para garantir que seu Algoritmo tenha um ID exclusivo.
*   No terminal, execute o `node seed_data/seed.js` Execute `gulp` . Você deve poder navegar para o seu novo Algoritmo no mapa de desafios. Sempre que você fizer uma alteração no Algorithm.json, precisará replantar novamente para ver essas alterações no navegador.
*   Resolva seu próprio algoritmo. Confirme se seus testes funcionam conforme o esperado e se suas instruções estão suficientemente claras.
*   Envie uma solicitação de recebimento para a ramificação Preparatória do Free Code Camp e, no corpo da solicitação de recebimento, vincule a uma essência que tenha sua solução algorítmica.

Aqui está uma descrição de cada um dos campos dos Algoritmos.

*   Nome - O nome do seu desafio. Tudo bem que isso seja engraçado, mas deve ser breve e relevante para a tarefa.
*   Dificuldade - Tente classificar a dificuldade comparada com os desafios do Algoritmo existente. Um bom proxy para a dificuldade de um Algoritmo é quanto tempo você leva para resolvê-lo. Para cada 15 minutos, aumente a dificuldade. Por exemplo, um Algoritmo de uma hora deve ser provavelmente um 4.
*   Descrição - parágrafos separados com uma quebra de linha. Somente o primeiro parágrafo é visível antes de um usuário antes de clicar no botão "Mais informações". Todas as informações necessárias devem ser incluídas no primeiro parágrafo. Escreva este primeiro parágrafo da forma mais sucinta possível. Os parágrafos subseqüentes devem oferecer dicas ou detalhes, se necessário. Se o seu assunto exigir uma compreensão mais profunda, você poderá vincular-se à Wikipedia.
*   Desafio Semente - É aqui que você configura o que estará no editor quando o campista iniciar o Algoritmo.
*   Testes - Esses testes são o que trazem seu desafio à vida. Sem eles, não podemos confirmar a precisão da resposta enviada pelo usuário. Escolha seus testes com sabedoria. Testes de algoritmo são escritos usando a biblioteca de asserção Chai.js. Por favor, use o dever e espere a sintaxe para a legibilidade do usuário final. Como um exemplo do que não fazer, muitos dos desafios originais do Algorithm são escritos com a sintaxe assert e muitos dos casos de teste são difíceis de ler. Se a sua pergunta Algoritmo tiver muitos casos de borda, você precisará escrever muitos testes para cobertura total. Se você se encontrar escrevendo mais testes do que deseja, talvez considere simplificar os requisitos do seu desafio de Algoritmo. Para o nível de dificuldade 1 a 3, você geralmente precisará apenas de 2 a 4 testes.
*   MDNlinks - Dê uma olhada no `seed_data/bonfireMDNlinks.js` . Se algum desses conceitos for relevante para seu Algoritmo, inclua-os. Se você souber de um artigo do MDN que não esteja vinculado aqui, adicione-o ao arquivo bonfireMDNlinks.js antes de adicioná-lo ao seu algoritmo.