---
title: Eigen Faces
localeTitle: Rostos Próprios
---
## Eigen Faces

### Esboço

*   Problema
*   Abordagem da Solução
*   Conjunto de dados
*   Analise matemática
*   Reconstrução de Imagem

### Problema

Usamos tipicamente os autovalores e autovetores da matriz de covariância dos dados para computar nossos principais componentes. E se você não conseguir calcular a matriz de covariância devido a problemas de memória?

### Abordagem da Solução

Nós agora usamos um truque. Em vez de usar dimensões de imagem para a matriz de covariância, usamos o número de imagens. Isso abre outra vantagem. Agora que temos os vetores de recursos de todas as nossas imagens, tudo o que precisamos é dessas imagens para reconstruir qualquer imagem no mundo.

### Definindo o conjunto de dados

Considere que temos imagens em escala de cinza de tamanho nx n. m é da ordem de 100 en é da ordem 10000. Nosso objetivo é selecionar k componentes que representam corretamente todos os recursos da imagem. Agora criamos uma matriz X, onde armazenamos as imagens planas (n ^ 2 x 1) em linha. Portanto X é de dimensão n ^ 2 x m.

### Analise matemática

A computação da covariância dessa matriz é onde as coisas ficam interessantes. Covariância de uma matriz X é definida como ponto (X, XT), cuja dimensão é n ^ 2 xn ^ 2.Isso obviamente ficará sem memória para um conjunto de dados tão grande. Agora, considere o seguinte conjunto de equações. ponto (XT, X) V = λ V onde V é o autovetor e λ é os autovalores correspondentes. Pré-multiplicação com X, ponto (ponto (X, XT), ponto (X, V)) = ponto λ (X. V) Assim, descobrimos que o autovetor da matriz de covariância é simplesmente o produto escalar da matriz da imagem e o autovetor do ponto (XT, X).

Portanto, calculamos o ponto (XT, X), cuja dimensão é apenas mxm, e usamos o autovetor dessa matriz para construir o autovetor de a matriz original. Os autovalores de ponto (XT, X) (juntamente com seus autovetores correspondentes) correspondem aos m maiores autovalores de ponto (X, XT) (juntamente com seus autovetores correspondentes). Nosso exigido Os autovetores são apenas os primeiros autovetores k e seus autovalores correspondentes. Agora calculamos uma matriz de eigenfaces, que nada mais é do que as imagens ponderadas autovetores. Os pesos para cada imagem k serão agora ponto (XT, eigenfaces (primeiros valores k)).

### Reconstrução de Imagem

Este método nos ajuda a representar qualquer imagem usando apenas k características de m imagens. Qualquer imagem pode ser reconstruída usando esses pesos. Para obter qualquer imagem, Imagem (i) = ponto (eigenface (k), peso \[i,:\]. T)