---
title: Spark
localeTitle: Faísca
---
## Faísca

[O Spark](http://spark.apache.org/) é um sistema de computação de cluster rápido e geral para Big Data. Ele fornece APIs de alto nível em Scala, Java, Python e R e um mecanismo otimizado que suporta gráficos gerais de computação para análise de dados. Ele também suporta um conjunto avançado de ferramentas de nível superior, incluindo o Spark SQL para SQL e DataFrames, MLlib para aprendizado de máquina, GraphX ​​para processamento de gráficos e Spark Streaming para processamento de fluxo.

## Principais recursos

O Spark 2.0 possui muitos novos recursos:

*   Fonte de dados CSV nativo, com base no módulo spark-csv do Databricks
*   Gerenciamento de memória fora do heap para armazenamento em cache e execução em tempo de execução
*   Suporte ao balde de estilo colmeia
*   Estatísticas resumidas aproximadas usando esboços, incluindo quantil aproximado, filtro Bloom e esboço de contagem min.

## Como é usado para Data Science

O Spark tornou-se uma ferramenta padrão na caixa de ferramentas de muitos cientistas de dados. Com sua flexibilidade nas opções de API, qualquer programador pode trabalhar com o Spark no idioma de sua preferência. Conforme observado por [Cloudera](https://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists) , o Spark ganhou popularidade por vários motivos:

*   Sendo baseado em Scala, o Spark se incorpora em qualquer sistema operacional baseado em JVM, mas também pode ser usado interativamente em um REPL de uma maneira que pareça familiar aos usuários de R e Python.
*   Para programadores Java, o Scala ainda apresenta uma curva de aprendizado. Mas pelo menos, qualquer biblioteca Java pode ser usada dentro do Scala. A abstração RDD (Resilient Distributed DataSet) do Spark se assemelha à PCollection do Crunch, que provou ser uma abstração útil no Hadoop que já será familiar aos desenvolvedores do Crunch. (Crunch pode até ser usado em cima do Spark.)
*   O Spark imita a API e o estilo funcional das coleções do Scala, o que é um benefício para os desenvolvedores de Java e Scala, mas também um pouco familiar para os desenvolvedores que vêm do Python. O Scala também é uma opção atraente para a computação estatística.
*   A própria Spark e o Scala, por baixo, não são específicos da aprendizagem automática. Eles fornecem APIs que suportam tarefas relacionadas, como acesso a dados, ETL e integração. Assim como no Python, todo o pipeline de ciência de dados pode ser implementado dentro desse paradigma, não apenas o ajuste e a análise do modelo.
*   Código que é implementado no ambiente REPL pode ser usado principalmente como está em um contexto operacional.
*   As operações de dados são distribuídas de maneira transparente no cluster, mesmo quando você digita.

#### Mais Informações

*   [Página do Spark Github](https://github.com/apache/spark)
*   [Wikipedia](https://en.wikipedia.org/wiki/Apache_Spark)