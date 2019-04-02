---
title: Quality Assurance
localeTitle: Garantia da Qualidade
---
## Garantia da Qualidade

Garantia de qualidade (comumente conhecido como QA) é o meio pelo qual um produto em desenvolvimento é verificado para garantir que ele funcione como deveria. Os métodos atuais usados ​​nos processos de controle de qualidade variam enormemente dependendo do tamanho e da natureza do produto.

Para um projeto pessoal, você provavelmente só testará conforme for indo, pedindo a outras pessoas que forneçam feedback nos estágios apropriados. Por outro lado, um aplicativo bancário deve ter todos os aspectos de cada recurso exaustivamente verificados e documentados para garantir que ele seja funcional e seguro.

Independentemente de quão formal ou detalhado seja um processo de QA, seu objetivo é identificar bugs para que possam ser resolvidos antes que o produto seja liberado.

### Metodologias

#### Ágil

Em uma abordagem Ágil ao desenvolvimento, o objetivo é que cada ciclo de trabalho ('sprint') produza software funcional que possa ser adicionado e aprimorado de forma iterativa. Isso faz com que o controle de qualidade processe uma parte intrínseca do ciclo de desenvolvimento. Ao testar componentes de software em cada estágio de sua produção, você reduz o risco de erros estarem presentes no lançamento.

### Terminologia

#### Teste de automação

Testes feitos com scripts pré-escritos projetados para controlar a execução de testes.

#### Caixa preta

Esses testes não olham dentro do sistema em teste, mas o tratam como "fechado" da mesma maneira que o usuário final o experimentará.

#### Defeito

Qualquer desvio das especificações de um aplicativo; muitas vezes referido como um "bug".

#### Teste exploratório

Uma abordagem improvisada para testes, que se baseia na criatividade exclusiva do testador, em um esforço para encontrar bugs desconhecidos e identificar regressões.

#### Teste de integração

Testando componentes / módulos individuais juntos para garantir que eles se conectem e interajam bem uns com os outros.

#### Teste de caminho negativo

Um cenário de teste projetado para produzir um estado de erro em um recurso / aplicativo e verificar se o erro é tratado normalmente. Um exemplo disso é inserir uma série de números no campo de email em um formulário de registro do usuário e verificar se o registro não é aceito até que um endereço de email real seja fornecido.

#### Teste de regressão

Teste feito em uma nova compilação para garantir que a nova funcionalidade não tenha quebrado involuntariamente a funcionalidade testada anteriormente.

#### Testes de fumaça

Uma abordagem minimalista para testes destinados a garantir a funcionalidade básica está funcionando antes que ocorram testes mais detalhados. Geralmente ocorre no início do processo de teste.

#### Caso de teste

Pré-condições, etapas e resultados esperados especificados referidos por um testador / engenheiro de QA para determinar se um recurso realiza ou não sua tarefa conforme o esperado.

#### Caixa branca

Refere-se a testes realizados em um nível estrutural, dentro da base de código. Programadores verificando se as entradas e saídas de funções ou componentes específicos seriam testes de caixa branca.

Também conhecido como 'Caixa de Vidro', 'Caixa Clara', 'Caixa Transparente' porque o testador pode 'ver dentro' do sistema em teste.

As principais categorias são

*   **Testes unitários** (unidades individuais de código fazem o que devem)
*   **Testes de integração** (unidades / componentes interagem uns com os outros corretamente)
*   **Testes de regressão** (reaplicação de testes em estágios posteriores de desenvolvimento para garantir que eles ainda funcionem)

Existem três técnicas principais:

*   **Partição de equivalência** (os valores de entrada testados são representativos de conjuntos de dados de entrada maiores)
*   **Análise de valor limite** (o sistema é testado com entradas escolhidas onde o comportamento e, portanto, a saída deve mudar)
*   **Gráficos de efeito-causa** (os testes são projetados a partir de uma visualização das relações de entrada-saída)

### Outros recursos

[Desenvolvimento orientado a testes (freeCodeCamp Guide)](https://guide.freecodecamp.org/agile/test-driven-development)

# [Testes de unidade (freeCodeCamp Guide)](https://guide.freecodecamp.org/software-engineering/unit-tests/)

[Fundamentos de teste de software](http://softwaretestingfundamentals.com/)