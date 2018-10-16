---
title: Flink
localeTitle: Flink
---
## Flink

O Apache Flink é uma estrutura de processamento de fluxo de código aberto com recursos poderosos de processamento em fluxo e em lote.

O núcleo do Apache Flink é um mecanismo de fluxo de dados de fluxo contínuo distribuído em Java e Scala. O Flink executa programas de fluxo de dados arbitrários de maneira paralela aos dados e pipeline. O sistema de tempo de execução pipeline do Flink permite a execução de programas de processamento em massa / lote e fluxo. Além disso, o tempo de execução do Flink suporta a execução de algoritmos iterativos nativamente. O Flink fornece um mecanismo de streaming de alta produtividade e baixa latência, além de suporte para processamento em tempo de evento e gerenciamento de estado. Os aplicativos Flink são tolerantes a falhas no caso de falha da máquina e suportam semânticas exatamente uma vez. Os programas podem ser escritos em Java, Scala, Python e SQL e são automaticamente compilados e otimizados em programas de fluxo de dados que são executados em um ambiente de cluster ou de nuvem.

O Flink não fornece seu próprio sistema de armazenamento de dados e fornece conectores de fontes e coletores de dados para sistemas como o Amazon Kinesis, o Apache Kafka, o HDFS, o Apache Cassandra e o ElasticSearch.

![Fluxo de trabalho do Flink](https://flink.apache.org/img/flink-home-graphic-update.svg)

**O que há de novo no Apache Flink?**

*   O Flink implementa o processamento de streaming real e não o imita com o processamento de micro-lotes. No streaming do Spark, há um caso especial de envio em lote, enquanto no batching do Flink é um caso especial de streaming (fluxo de um tamanho finito)
*   O Flink tem melhor suporte para processamento cíclico e iterativo
*   Flink tem menor latência e maior taxa de transferência
*   Flink tem operadores de janelas mais poderosos
*   O Flink implementa snapshots distribuídos leves, com baixa sobrecarga e processamento de apenas uma vez, garantindo o processamento de fluxo, sem usar micro-lotes, pois o Spark não
*   Flink suporta estado mutável no processamento de fluxo

### Características

*   Um tempo de execução de fluxo inicial que suporta programas de processamento em lote e de fluxo de dados
*   APIs elegantes e fluentes em Java e Scala
*   Um tempo de execução que suporta alta taxa de transferência e baixa latência de eventos ao mesmo tempo
*   Suporte para o _tempo do evento_ e processamento _fora de ordem_ na API do DataStream, com base no _modelo do Dataflow_
*   Janelas flexíveis (tempo, contagem, sessões, gatilhos personalizados) em diferentes semânticas de tempo (hora do evento, tempo de processamento)
*   Tolerância a falhas com garantias de processamento _exatamente uma vez_
*   Contrapressão natural em programas de streaming
*   Bibliotecas para processamento de gráficos (lote), Aprendizado de Máquina (lote) e Processamento de Eventos Complexos (fluxo)
*   Suporte embutido para programas iterativos (BSP) na API DataSet (batch)
*   Gerenciamento de memória personalizado para comutação eficiente e robusta entre algoritmos de processamento de dados in-memory e out-of-core
*   Camadas de compatibilidade para Apache Hadoop MapReduce e Apache Storm
*   Integração com YARN, HDFS, HBase e outros componentes do ecossistema Apache Hadoop

### Uso Flink

Pré-requisitos para a construção do Flink:

*   Ambiente semelhante ao Unix (Usamos Linux, Mac OS X, Cygwin)
*   git
*   Maven (recomendamos a versão 3.0.4)
*   Java 7 ou 8
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
```

## Desenvolvendo o Flink

Os commiters do Flink usam o IntelliJ IDEA para desenvolver a base de código do Flink. Recomendamos o IntelliJ IDEA para desenvolver projetos que envolvam o código Scala.

Requisitos mínimos para um IDE são:

*   Suporte para Java e Scala (também projetos mistos)
*   Suporte para Maven com Java e Scala

#### Mais Informações:

*   Site do Flink: [Apache Flink](https://flink.apache.org/)
*   Documentação do Flink: [flinkdocs](https://ci.apache.org/projects/flink/flink-docs-release-1.3/)
*   Tutorial de Quick Flink: [Início Rápido](https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/)
*   Como orientar: [howto](https://data-artisans.com/blog/kafka-flink-a-practical-how-to)
*   Flink vs Spark: [comparação](http://www.developintelligence.com/blog/2017/02/comparing-contrasting-apache-flink-vs-spark/)