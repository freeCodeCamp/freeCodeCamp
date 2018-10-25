---
title: Continuous Integration
localeTitle: Integração contínua
---
## Integração contínua

Em sua forma mais básica, a integração contínua (CI) é uma metodologia de desenvolvimento ágil em que os desenvolvedores mesclam regularmente seu código diretamente à fonte principal, geralmente uma ramificação `master` remota. A fim de assegurar que nenhuma alteração de quebra seja introduzida, um conjunto completo de testes é executado em cada build potente para testar a regressão do novo código, isto é, testar se o novo código não quebra os recursos de trabalho existentes.

Essa abordagem requer uma boa cobertura de teste da base de código, o que significa que a maioria, se não todos, do código possui testes que garantem que seus recursos sejam totalmente funcionais. Idealmente, a integração contínua seria praticada em conjunto com o [Desenvolvimento Orientado](https://guide.freecodecamp.org/agile/test-driven-development) a [Testes](https://guide.freecodecamp.org/agile/test-driven-development) .

### Etapas Principais

As seguintes etapas básicas são necessárias para fazer a abordagem atual mais padrão à integração contínua.

1.  Manter um repositório central e um branch `master` ativo.

Tem que haver um repositório de código para que todos possam se fundir e extrair alterações. Isso pode estar no Github ou em qualquer outro serviço de armazenamento de código.

2.  Automatize a construção.

Usando scripts NPM ou ferramentas de compilação mais complexas como Yarn, Grunt, Webpack ou [Gulp](https://guide.freecodecamp.org/developer-tools/gulp) , automatize a compilação para que um único comando possa criar uma versão totalmente funcional do produto, pronta para ser implantada em um ambiente de produção. Melhor ainda, inclua a implantação como parte da construção automatizada!

3.  Faça a compilação executar todos os testes.

Para verificar se nada no novo código quebra a funcionalidade existente, o conjunto de testes completo precisa ser executado e a compilação precisa falhar se qualquer teste dentro dele falhar.

4.  Todo mundo tem que mesclar as mudanças para `master` todos os dias.
    
5.  Todas as fusões no `master` devem ser construídas e totalmente testadas.
    

### Melhores práticas

Existem outras práticas recomendadas que fazem o melhor uso do que a CI tem a oferecer e os desafios que apresenta, como:

1.  Mantenha a compilação rápida, para que o tempo do desenvolvedor não seja desperdiçado esperando por uma compilação.
    
2.  Teste a compilação em um clone completo do ambiente de produção.
    

Se você tiver, por exemplo, um aplicativo implantado em algo como Heroku ou Digital Ocean, tenha uma implantação de teste separada na qual possa implantar compilações de teste, para garantir que elas funcionem não apenas em testes, mas em um ambiente de produção real. Esse ambiente de teste deve ser funcionalmente idêntico ao ambiente de produção real, para garantir que o teste seja preciso.

3.  Torne fácil manter-se atualizado.

Os codificadores devem puxar regularmente da ramificação `master` para manter a integração do código com as alterações da equipe. O repositório também deve ser disponibilizado para as partes interessadas, como gerentes de produto, executivos da empresa ou, às vezes, clientes-chave, para que todos possam facilmente ver o progresso.

4.  Mantenha registros de compilações, para que todos possam ver os resultados de qualquer construção, se ela foi bem-sucedida ou não, e quem ou o que introduziu novas alterações.
    
5.  Automatize a implantação.
    

Mantenha seu aplicativo totalmente atualizado com novas alterações, automatizando a implantação no ambiente de produção como o estágio final do processo de criação, uma vez que todos os testes tenham passado e a implantação de teste no clone do ambiente de produção tenha sido bem-sucedida.

### Serviços de CI

Muitos serviços existem para lidar com o processo de integração contínua para você, o que pode facilitar muito o estabelecimento de um pipeline de CI sólido ou um processo de criação. Ao avaliar isso, leve em consideração fatores como orçamento, velocidade de construção e em que tipo de projeto você está trabalhando. Alguns serviços, como o [Travis CI,](https://travis-ci.org) oferecem serviços gratuitos para projetos de código aberto, o que pode torná-los uma opção fácil para projetos como esse, mas podem ter construções mais lentas do que outros serviços, como [Circle CI](https://circleci.com/) ou [Codeship](https://codeship.com/) , para citar apenas alguns.

#### Mais Informações:

A entrada da Wikipedia na [Integração Contínua](https://en.wikipedia.org/wiki/Continuous_integration) .