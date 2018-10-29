---
title: Introduction to NLP
localeTitle: Introdução ao PNL
---
## Esboço

*   Motivação
*   Casos de uso
*   Modelagem de Linguagem
*   Outras leituras

## Motivação

Sempre foi nosso sonho fazer as máquinas entenderem a nossa linguagem. Desde que Chomsky criou gramáticas livres de Contexto, os linguistas têm procurado soluções para entender as gramáticas dependentes do contexto. Portanto, é natural que um discípulo acadêmico tenha evoluído em torno deste tópico.

## Casos de uso

As pessoas usaram esse conceito em muitas aplicações interessantes. Alguns dos mais interessantes incluem as sugestões de resposta automática do Google Tradutor, do Siri ou do Gmail. No entanto, as pessoas estão trabalhando em maneiras de melhorar essas previsões, e pesquisas de ponta estão sendo feitas sobre como fazer com que as máquinas respondam às perguntas com mais segurança.

## Como funciona o processamento de linguagem natural

Anteriormente, a PNL empregava uma abordagem baseada em regras, ou seja, todas as regras eram codificadas (por exemplo, escrever a gramática). No entanto, isso não foi muito afetivo para as variações nos modelos de linguagem. Atualmente, os processos de PNL são realizados usando Inteligência Artificial. Eles dependem principalmente do Deep Learning, uma IA que determina padrões nos dados e os usa para treinar o modelo. Esse método é melhor do que os métodos anteriores usados ​​porque, ao aprender com os enormes dados presentes, a máquina pode se concentrar nos casos mais comuns, o que não é fácil com as regras escritas à mão, porque não se sabe onde devem ser feitos os esforços. . Além disso, esses modelos tornam-se mais confiáveis ​​com o aumento de dados, mas nas abordagens anteriores só se torna preciso aumentando a complexidade das regras, o que é uma tarefa mais difícil. O modelo aprende as regras da linguagem através da análise de grandes corpora de exemplos típicos do mundo real. Este método requer uma enorme quantidade de dados rotulados, o que é um grande obstáculo para a PNL.

## Modelagem de Linguagem

Para aqueles que procuram entrar neste campo, pretendo começar com dois conceitos.

#### Tokenização

Aqui a tarefa parece simples. Dado um corpus (um conjunto de dados de sentenças), gere tokens individuais (palavras significativas). Precisamos separar palavras e frases. A primeira abordagem que vem à mente é dividir por período e espaço. Isso, no entanto, não funciona. Considere o Sr. John. São "Mr" e "John" 2 frases? Claro que não. Agora considere palavras separadas por hífen. Você gostaria de dividi-los como 2 palavras ou como 1 palavra? Essas questões difíceis tornam a tarefa da tokenização não tão direta. Vá em frente e escolha um corpus de nltk e construa seu próprio regex para o seu próprio tokeniser!

#### modelos n-gram

A próxima tarefa é criar um modelo de linguagem. Aqui consideramos uma suposição de que a enésima palavra depende apenas das palavras n-1 anteriores. Modelos de 2 e 3 gramas são mais comumente usados. Para construir um modelo de 3 gramas, apenas agrupe 3 fichas e conte sua freqüência no corpus. Agora você está pronto para prever a probabilidade de um grupo de três palavras!

## Outras leituras

O campo da PNL é enorme. Se você leu até aqui e implementou o acima, você certamente adorou isso. Vá em frente e leia o livro de Jurafsky para aprender mais alguns conceitos novos. Lembre-se, é importante implementá-los também.