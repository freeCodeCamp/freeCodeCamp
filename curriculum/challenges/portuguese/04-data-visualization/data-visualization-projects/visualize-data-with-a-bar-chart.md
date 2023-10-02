---
id: bd7168d8c242eddfaeb5bd13
title: Visualizar dados com um gráfico de barras
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**Objetivo:** criar uma aplicação que funcione de modo semelhante ao que vemos em: <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a>.

Atenda às histórias de usuário abaixo e faça com que todos os testes passem. Use quaisquer bibliotecas ou APIs de que você precisar. Dê ao projeto o seu próprio estilo pessoal.

Você pode usar HTML, JavaScript, CSS e a biblioteca de visualização D3, baseada em svg. Os testes requerem que os eixos sejam gerados usando a propriedade de eixos do D3, que geram automaticamente marcações ao longo do eixo. Essas marcações são exigidas para passar nos testes do D3 porque suas posições são usadas para determinar o alinhamento dos elementos do gráfico. Você vai encontrar informações sobre a geração de eixos em <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Os elementos DOM necessários são consultados no momento de cada teste. Se você usar um framework de front-end (como o Vue por exemplo), os resultados dos testes podem ser imprecisos para conteúdo dinâmico. Esperamos dar suporte a eles um dia, mas atualmente esses frameworks não são suportados para os projetos de D3.

**História de usuário nº 1:** meu gráfico deve ter um título com um `id="title"` correspondente.

**História de usuário nº 2:** meu gráfico deve ter um elemento `g` no eixo x com um `id="x-axis"` correspondente.

**História de usuário nº 3:** meu gráfico deve ter um elemento `g` no eixo y com um `id="y-axis"` correspondente.

**História de usuário nº 4:** ambos os eixos devem conter múltiplos rótulos (labels) de marcação, cada um com uma `class="tick"` correspondente.

**História de usuário nº 5:** meu gráfico deve ter um elemento `rect` para cada ponto com uma classe `class="bar"` correspondente exibindo os dados.

**História de usuário nº 6:** cada `.bar` deve ter as propriedades `data-date` e `data-gdp`, contendo os valores `date` e `GDP`, respectivamente.

**História de usuário nº 7:** as propriedades `data-date` das `.bar` devem corresponder à ordem fornecida pelos dados.

**História de usuário nº 8:** as propriedades `data-gdp` das `.bar` devem corresponder à ordem fornecida pelos dados.

**História de usuário nº 9:** a altura de cada `.bar` deve representar corretamente os dados de `GDP` correspondentes.

**História de usuário nº 10:** o atributo `data-date` e sua `.bar` correspondente devem estar alinhados com o seu valor correspondente no eixo x.

**História de usuário nº 11:** o atributo `data-gdp` e sua `.bar` correspondente devem estar alinhados com o seu valor correspondente no eixo y.

**História de usuário nº 12:** eu posso passar o mouse sobre uma área e ver uma dica com uma `id="tooltip"` correspondente, que exibe mais informações sobre a área.

**História de usuário nº 13:** minha ferramenta de dica (tooltip) deve ter uma propriedade `data-date` que corresponda à `data-date` da área ativa.

Aqui está o dataset de que você precisará para completar este projeto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Ou você pode usar este link da CDN para executar os testes em qualquer ambiente que você preferir: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Quando tiver terminado, envie o URL do seu projeto depois de ele haver passado em todos os testes.

# --solutions--

```js
// solution required
```
