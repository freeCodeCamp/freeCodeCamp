---
title: Normal Form
localeTitle: Forma normal
---
## Forma normal

A normalização foi introduzida pela primeira vez como parte do modelo relacional. É o processo de organizar tabelas de dados e colunas de uma maneira que reduz redundâncias e melhora a integridade. Isso pode ser feito através de:

*   síntese: cria um design de banco de dados normalizado com base em um conjunto conhecido de dependências.
*   decomposição: utiliza um design de banco de dados existente (insuficientemente normalizado) e o aprimora com base no conjunto conhecido de dependências

Existem três formas normais comuns (1ª, 2ª e 3ª) mais uma forma bastante avançada chamada BCNF. Eles são progressivos: para se qualificar para a terceira forma normal, um esquema de banco de dados deve satisfazer as regras da segunda forma normal e assim por diante para a primeira forma normal.

*   **1a forma normal** : as informações são armazenadas em uma tabela, cada coluna contém valores atômicos e não há grupos repetidos de colunas. Este :

1.  Elimina grupos repetidos em tabelas individuais.
2.  Cria uma tabela separada para cada conjunto de dados relacionados.
3.  Identifica cada conjunto de dados relacionados com uma chave primária

##### Exemplo

Um design que viola a primeira forma normal, a coluna "telefone" não contém valores atômicos

| ID do cliente | Primeiro nome | Sobrenome | Telefone | | ------------- | ------------ | ----------- | ---------- ---------------------------- | | 123 | Pooja | Singh | 555-861-2025, 192-122-1111 | | 789 | John | Doe | 555-808-9633 | | 456 | San | Zhang | (555) 403-1659, ramal 53; 182-929-2929 |

Uma solução seria ter uma coluna extra para cada número de telefone. Mas então, isso irá repetir conceitualmente o mesmo atributo (número de telefone). Além disso, adicionar um número de telefone extra exigirá a reorganização da tabela adicionando mais colunas. Isso definitivamente não é uma prática.

Outra solução é ter uma tabela separada para o cliente da associação <-> Telefone: Isso respeita o primeiro formulário normal e pode haver tantas linhas por cliente quantas forem necessárias.

| ID do cliente | Primeiro nome | Sobrenome | | ------------- | ------------ | ----------- | | 123 | Pooja | Singh | | 789 | John | Doe | | 456 | San | Zhang |

| ID do cliente | Telefone | | ------------- | ------------------------ | | 123 | 555-861-2025 | | 123 | 192-122-1111 | | 789 | 555-808-9633 | | 456 | (555) 403-1659, ramal 53 | | 456 | 182-929-2929 |

*   **2ª forma normal** : A tabela está na primeira forma normal e todas as colunas não chave dependem da chave primária da tabela. Isso estreita o propósito da mesa.

##### Exemplo

Um design que viola a segunda forma normal. O nome completo do modelo é a chave primária, existem outras chaves candidatas como {manufacturer, model}. A coluna "País do fabricante" depende de uma coluna sem chave (o fabricante).

| Fabricante | Modelo | Nome Completo do Modelo | País fabricante | | --------------------- | -------------- | ------------ ---------- | ---------------------- | | Forte | X-Prime | Forte X-Prime | Itália | | Forte | Ultraclean | Forte Ultraclean | Itália | | Dent-o-Fresh | EZbrush | EZbrush Dent-o-Fresh | EUA | | Kobayashi | ST-60 | Kobayashi ST-60 | Japão | | Hoch | Mestre dos dentes | Hoch Toothmaster | Alemanha | | Hoch | X-Prime | Hoch X-Prime | Alemanha |

O design normalizado seria dividido em duas tabelas como as seguintes:

| Fabricante | País fabricante | | --------------------- | ---------------------- | | Forte | Itália | | Dent-o-Fresh | EUA | | Kobayashi | Japão | | Hoch | Alemanha |

| Fabricante | Modelo | Nome Completo do Modelo | | --------------------- | -------------- | ------------ ---------- | | Forte | X-Prime | Forte X-Prime | | Forte | Ultraclean | Forte Ultraclean | | Dent-o-Fresh | EZbrush | EZbrush Dent-o-Fresh | | Kobayashi | ST-60 | Kobayashi ST-60 | | Hoch | Mestre dos dentes | Hoch Toothmaster | | Hoch | X-Prime | Hoch X-Prime |

*   **3a forma normal** : A tabela está na segunda forma normal e todas as suas colunas não dependem transitivamente da chave primária. Diz-se que uma coluna depende de outra coluna, se puder ser derivada dela, por exemplo, a idade pode ser derivada do aniversário. Transitividade significa que essa dependência pode envolver outras colunas. por exemplo, se considerarmos três colunas `PersonID BodyMassIndex IsOverweight` , a coluna 'IsOverweight' é transitivamente dependente de 'personID' por meio de 'BodyMassIndex'.

##### Exemplo

Um design que viola a terceira forma normal. {Torneio, Ano} é a chave primária para a tabela e a coluna 'Vencedor Data de Nascimento' depende transitivamente dela.

| Torneio | Ano | Vencedor | Data de nascimento do vencedor | | ---------------------- | ------------- | ------------ ---- | ---------------------- | | Indiana Invitational | 1998 | Al Fredrickson | 21 de julho de 1975 | | Cleveland Open | 1999 | Bob Albertson | 28 de setembro de 1968 | | Des Moines Masters | 1999 | Al Fredrickson | 21 de julho de 1975 | | Indiana Invitational | 1999 | Chip Masterson | 14 de março de 1977 |

Um projeto compatível com a terceira forma normal seria:

| Torneio | Ano | Vencedor |  
| ---------------------- | ------------- | ------------ ---- | | Indiana Invitational | 1998 | Al Fredrickson | | Cleveland Open | 1999 | Bob Albertson | | Des Moines Masters | 1999 | Al Fredrickson | | Indiana Invitational | 1999 | Chip Masterson |

| Vencedor | Data de Nascimento | | ---------------- | ------------------- | | Chip Masterson | 14 de março de 1977 | | Al Fredrickson | 21 de julho de 1975 | | Bob Albertson | 28 de setembro de 1968 |

#### Mais Informações:

*   normalização de banco de dados na [wikipedia](https://en.wikipedia.org/wiki/Database_normalization)
*   primeira forma normal na [wikipedia](https://en.wikipedia.org/wiki/First_normal_form)
*   segunda forma normal na [wikipedia](https://en.wikipedia.org/wiki/Second_normal_form)
*   terceira forma normal na [wikipedia](https://en.wikipedia.org/wiki/Third_normal_form)