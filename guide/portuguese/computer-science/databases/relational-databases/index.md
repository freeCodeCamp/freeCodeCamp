---
title: Relational Databases
localeTitle: Bancos de dados relacionais
---
Como um banco de dados é uma maneira de armazenar dados, os bancos de dados relacionais são um modelo de como os dados estão sendo armazenados. Os dados são organizados em tabelas, também conhecidas como relações. As tabelas contêm um registro para cada instância dos dados, conhecidos como registros ou tuplas. Identificadores exclusivos identificam cada registro para descrevê-lo no banco de dados.

## Tabelas

Como a folha no excel, as tabelas são compostas de colunas e linhas. Cada linha é uma instância de dados com atributos na coluna da tabela conhecida como campos. Pode haver várias tabelas para cada categoria para entidades. Um exemplo poderia ser uma tabela de usuários. Cada linha seria um usuário e cada campo seria detalhes sobre o usuário, como e-mail, senha e detalhes de contato para esse usuário específico. Na Figura 1 você pode ver o diagrama do exemplo.

| | usuário | email | Telefone | | ------------- | ------------ | ------------------ | --- ----------------------------------- | | fila 1 | Jerry | j@j.uk.za | 771447444121 | | fila 2 | Sally | batgirl@gh.co.za | 771447444121 | | fileira 3 | Alex | samwis@tty.fe | 771447444121 | | linha 4 | Doug | 4sure@dam.us | 745151515152 |

Figura 1 - Exemplo de tabela de usuários.

## Registros

Um registro é uma entidade única de dados. Como no exemplo acima, pode ser um usuário, uma conta, um dispositivo ou qualquer coisa que os dados possam representar. Os registros precisam de um identificador exclusivo, às vezes chamado de chave. Essa chave deve ser exclusiva, pois é usada para descrever os relacionamentos que um registro possui com outros registros em outras tabelas. Na Figura 1, podemos adicionar chaves a cada linha que identifica cada usuário com uma chave e a tabela agora se parece com a Figura 2.

| CHAVE | usuário | email | Telefone | | ----------- | ------------ | ------------------ | ----- --------------------------------- | | u1 | Jerry | j@j.uk.za | 771447444121 | | u2 | Sally | batgirl@gh.co.za | 771447444121 | | u3 | Alex | samwis@tty.fe | 771447444121 | | u4 | Doug | 4sure@dam.us | 745151515152 |

Figura 2 - Exemplo de banco de dados do usuário com o campo KEY.

## Campos

Campos descrevem o registro. Isso poderia conter qualquer informação sobre a entidade que o registro simboliza. Na Figura 3 você pode ver uma tabela que mostra animais de estimação. As colunas (campos) descrevem cada pet (registro) com p\_nome, p\_age, p\_type e p\_owner. O p é uma abreviação de pet e a última coluna será explicada na próxima seção sobre relacionamentos.

| CHAVE | p\_nome | p\_age | p\_owner | | ----------- | ------------ | ------------------ | ----- ---------- | | p1 | Suzy | j@j.uk.za | u1 | | p2 | Little Dip | batgirl@gh.co.za | u1 | | p3 | Amillë | samwis@tty.fe | u2 | | p4 | Doug | 4sure@dam.us | u3 |

Figura 3 - Exemplo da tabela Pet.

## Relacionamentos

Os bancos de dados relacionais permitem descrever as relações que as entidades têm umas com as outras. Às vezes, esse é o tópico mais difícil dos bancos de dados relacionais para entender. Se tomarmos nossas tabelas de exemplo, poderemos ver o relacionamento que nossa tabela de usuários tem com a tabela de pet. Se você ler o campo p\_owner, pode ver que também pode ser como na Figura 4. Isso explica a relação que cada animal de estimação tem com um usuário. O relacionamento pode ter tipos diferentes.

| CHAVE | p\_nome | p\_age | p\_owner | | ----------- | ------------ | ------------------ | ----- ---------- | | p1 | Suzy | j@j.uk.za | Jerry | | p2 | Little Dip | batgirl@gh.co.za | Jerry | | p3 | Amillë | samwis@tty.fe | Sally | | p4 | Doug | 4sure@dam.us | Doug |

Figura 4 - Exemplo de tabela Pet com o campo do proprietário vinculado.

Um relacionamento um-para-muitos é um registro ligado a muitos outros registros, sendo o exemplo o usuário Jerry ter dois animais de estimação. Também poderia ser um relacionamento muitos-para-muitos, em que as tabelas poderiam ser livros e autores, já que os autores poderiam co-escrever muitos livros. Finalmente, o tipo de relacionamento mais comum é o de um para um, um registro que pode ser vinculado a apenas um, e apenas um, outro registro.

## Conclusão

Esta é apenas uma breve introdução aos bancos de dados relacionais. Abaixo, links são fornecidos para recursos que podem ajudá-lo a estudar o assunto.

#### Mais Informações:

*   Bancos de dados relacionais na [wikipedia](https://en.wikipedia.org/wiki/Relational_database)
*   Um-para-muitos na [wikipedia](https://en.wikipedia.org/wiki/One-to-many_(data_model) )
*   Muitos-para-muitos na [wikipedia](https://en.wikipedia.org/wiki/Many-to-many_(data_model) )
*   Um a um na [wikipedia](https://en.wikipedia.org/wiki/One-to-one_(data_model) )
*   Modelo de relacionamento na [wikipedia](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)