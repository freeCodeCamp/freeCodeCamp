---
title: SQL Create View Statement
localeTitle: SQL Create View Statement
---
## SQL Create View Statement

### O que é uma visão?

Uma Visualização é um objeto de banco de dados que apresenta dados existentes em uma ou mais tabelas. As visualizações são usadas de maneira semelhante às tabelas, mas não contêm dados. Eles apenas "apontam" para os dados que existem em outro lugar (tabelas ou visualizações, por exemplo).

### Por que nós gostamos deles?

*   As visualizações são uma maneira de limitar os dados apresentados. Por exemplo, os dados do departamento de recursos humanos foram filtrados para apresentar apenas informações não sensíveis. As informações confidenciais, nesse caso, podem ser números de seguridade social, sexo do funcionário, taxa de pagamento, endereço residencial, etc.
*   Dados complexos em mais de uma tabela podem ser combinados em uma única "visualização". Isso pode facilitar a vida de seus analistas e programadores de negócios.

### Dicas importantes de segurança

*   As visualizações são gerenciadas pelo sistema. Quando os dados nas tabelas relacionadas são alterados, adicionados ou atualizados, a Visualização é atualizada pelo sistema. Queremos usá-los somente quando necessário para gerenciar o uso dos recursos do sistema.
*   No MySQL, as mudanças no design da tabela (ou seja, colunas novas ou descartadas) feitas após a criação de uma visão não são atualizadas na visão em si. A visão teria que ser atualizada ou recriada.
*   As exibições são um dos quatro tipos de objeto de banco de dados padrão. Os outros são tabelas, procedimentos armazenados e funções.
*   As visualizações geralmente podem ser tratadas como você faria com uma tabela, mas as atualizações são limitadas ou não estão disponíveis quando a visualização contém mais de uma tabela.
*   Há muitos outros detalhes sobre visualizações que estão além do escopo deste guia introdutório. Gastar tempo com seu manual de gerenciadores de banco de dados e se divertir com este poderoso objeto SQL.

### Sintaxe da instrução Create View (MySQL)

```sql
CREATE 
    [OR REPLACE] 
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] 
    [DEFINER = { user | CURRENT_USER }] 
    [SQL SECURITY { DEFINER | INVOKER }] 
    VIEW view_name [(column_list)] 
    AS select_statement 
    [WITH [CASCADED | LOCAL] CHECK OPTION] 
```

_Este guia irá cobrir esta parte da declaração…._

```sql
CREATE 
    VIEW view_name [(column_list)] 
    AS select_statement 
```

### Criação de amostra de visualização das tabelas dos alunos

Notas:

*   O nome da visualização tem um "v" no final. É recomendável que o nome da visualização indique que é uma visão de alguma forma para facilitar a vida de programadores e administradores de banco de dados. Sua loja de TI deve ter suas próprias regras para nomear objetos.
    
*   As colunas na exibição são limitadas pelo SELECT e pelas linhas de dados pela cláusula WHERE.
    
*   o caractere "\` "em torno dos nomes da visualização é necessário devido ao" - "nos nomes. MySQL relata um erro sem eles.
    

```sql
create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
 
 select * from `programming-students-v`; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement01.JPG?raw=true)

### Exemplo de uso de uma visualização para combinar dados de mais de uma tabela

Uma tabela de dados demográficos do aluno foi adicionada ao banco de dados para demonstrar esse uso. Essa visão combinará essas tabelas.

Notas:

*   Para "unir" tabelas, as tabelas devem ter campos em comum (geralmente chaves primárias) que identificam exclusivamente cada linha. Neste caso, é o ID do aluno. (Mais sobre isso no guia [SQL Joins](../sql-joins/index.md) .)
*   Observe o "alias" dado a cada tabela ("s" para aluno e "sc" para contato do aluno). Esta é uma ferramenta para encurtar os nomes das tabelas e facilitar a identificação de qual tabela está sendo usada. É mais fácil do que digitar nomes extensos de tabela repetidamente. Neste exemplo, foi necessário porque studentID é o mesmo nome de coluna nas duas tabelas e o sistema apresentaria um "erro de nome de coluna ambíguo" sem especificar qual tabela usar.

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement02.JPG?raw=true)

_Como com todas essas coisas, há MUITO MAIS para Views. Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes._