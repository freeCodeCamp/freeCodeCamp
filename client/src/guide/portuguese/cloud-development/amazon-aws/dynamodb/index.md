---
title: Amazon DynamoDB
localeTitle: Amazon DynamoDB
--- ## Amazon DynamoDB

O Amazon DynamoDB é um serviço da Amazon Web Services (AWS) que oferece um banco de dados NoSQL totalmente gerenciado. Sua principal característica é a capacidade de dimensionar infinitamente, dependendo da carga de trabalho necessária. Ele é totalmente gerenciado, e o usuário não precisa se preocupar com a infraestrutura subjacente, como escalar para cima ou para baixo, dependendo da carga de trabalho. Suporta armazenamento baseado em documentos e valor-chave.

Os componentes básicos do serviço DynamoDB são:

*   **Tabela** : O DynamoDB armazena dados em tabelas, que são semelhantes em bancos de dados relacionais. A principal diferença é que é sem esquema, não tem uma estrutura fixa desde o momento de sua criação.
    
*   **Item** : Um item é os dados armazenados em uma tabela e uma tabela pode ter um número indefinido de itens. Comparando com um banco de dados relacional, um item seria uma linha na tabela.
    
*   **Atributo** : Um item possui atributos, que são como uma coluna em bancos de dados relacionais. No entanto, como o DynamoDB não tem esquema, um item não precisa ter os mesmos atributos. Além disso, os atributos podem ser um único valor ou um documento semelhante a JSON com outros campos que também podem ser consultados.
    

Embora o DynamoDB não precise de uma estrutura fixa para suas tabelas, ele precisa de uma chave primária para cada item da tabela. A chave primária, como em bancos de dados relacionais, deve ser exclusiva. A chave primária pode ser simples ou composta. Uma chave primária simples é composta apenas por uma chave de partição. A chave primária composta, por sua vez, é composta por uma chave de partição e uma chave de classificação. Em uma chave primária simples, a chave de partição deve ser única, enquanto que em uma chave composta, a chave de partição pode ser igual, mas a chave de classificação deve ser diferente.

O conceito de chave de partição e chave de classificação é muito importante porque se relaciona com a maneira como o DynamoDB armazena dados. O DynamoDB armazena dados em partições e a chave de partição é a chave da partição. O DynamoDB usa o valor na chave de partição como entrada para uma função hash para saber onde ele armazena os dados. No caso de uma chave composta, todos os itens com a mesma chave de partição são armazenados na mesma partição, mas são classificados pela chave de classificação.

O Amazon DynamoDB também tem alta disponibilidade. Ele replica os dados para muitos servidores em diferentes zonas de disponibilidade em uma região. Zonas de disponibilidade são centros de dados fisicamente separados por uma distância segura. No caso de um desastre em um servidor, outros servidores terão os dados replicados a uma distância segura e inalterados.

Devido à sua facilidade de configuração e sua capacidade infinita de dimensionamento, é bom para muitos casos de uso. É mais adequado para cenários em que a carga necessária não é conhecida ou há picos repentinos. Alguns dos casos de uso são como armazenamento de dados para aplicativos sem servidor, microsserviços, back-end móvel, jogos, IoT e muito mais.

### Recursos:

*   [Bancos de dados de valor-chave](https://guide.freecodecamp.org/computer-science/databases/key-value-databases)
*   [Bancos de dados relacionais](https://guide.freecodecamp.org/computer-science/databases/relational-databases)

### Mais Informações:

*   "O que é o Amazon DynamoDB?" da [documentação](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html?shortFooter=true) do [AWS DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html?shortFooter=true)
*   "Componentes principais do DynamoDB" da [documentação](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html?shortFooter=true) do [AWS DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html?shortFooter=true)