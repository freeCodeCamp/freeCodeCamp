# Operações de Desenvolvedor em freeCodeCamp.org

Este guia irá ajudá-lo a entender a nossa pilha de infraestrutura e como mantemos nossas plataformas. Embora este guia não tenha detalhes exaustivos para todas as operações, pode ser usado como referência para a sua compreensão dos sistemas.

Sejamos informados, se tiverem resposta ou dúvidas, e teremos todo o prazer em esclarecer.

## Como é que vamos construir, testar e implantar o código?

Este repositório é continuamente criado, testado e implantado em **conjuntos de infraestrutura (Servers, Databases, CDNs, etc.)**.

Isto implica três passos a seguir em sequência:

1. Novas alterações (correções e recursos) são mescladas em nosso branch de desenvolvimento primário (`master`) através de pull requests.
2. Estas alterações são executadas por uma série de testes automatizados.
3. Uma vez que os testes passem, liberamos as alterações (ou atualizá-las se necessário) para implantações em nossa infraestrutura.

#### Construindo a base de código - Mapeando Branches Git para implantações.

Normalmente, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (o ramo de desenvolvimento padrão) é mesclado com o branch [`de produção de`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) uma vez por dia e é liberado em uma infraestrutura isolada.

Esta é uma versão intermediária para nossos desenvolvedores e colaboradores voluntários. É também conhecido como a nossa versão "staging" ou "beta".

É idêntico ao nosso ambiente de produção ao vivo em `freeCodeCamp.org`, além de usar um conjunto separado de bancos de dados, servidores, web-proxies, etc. Este isolamento nos permite testar o desenvolvimento contínuo e as funcionalidades em uma "produção" como um cenário, sem afetar os usuários regulares da plataforma principal do freeCodeCamp.org.

Uma vez que a equipe de desenvolvedores [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) está feliz com as mudanças na plataforma de preparo, essas alterações são movidas a cada poucos dias para o branch [`de produção -atual`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current).

Esta é a versão final que move mudanças para nossas plataformas de produção em freeCodeCamp.org.

#### Testando alterações - Teste de integração e de aceitação de usuário.

Empregamos vários níveis de testes de integração e aceitação para verificar a qualidade do código. Todos os nossos testes são feitos por software como [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) e [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Temos testes unitários para testar nossas soluções desafiais, APIs do Servidor e interfaces de Usuário do Cliente. Eles nos ajudam a testar a integração entre diferentes componentes.

> [!NOTE] Também estamos escrevendo testes de usuário finais que ajudarão a replicar cenários do mundo real, como atualizar um e-mail ou fazer uma chamada para a API ou serviços de terceiros.

Juntos esses testes ajudam a evitar que problemas se repitam e garantir que não introduzimos um erro enquanto trabalhamos em outro bug ou em um recurso.

#### Implementando Alterações - Enviando alterações para os servidores.

Nós configuramos software de entrega contínua para fazer push de mudanças no nosso servidor de desenvolvimento e produção.

Uma vez que as alterações são enviadas para os branches de lançamento protegidos, um pipeline de construção é automaticamente acionado para o branch. Os pipelines de construção são responsáveis pela construção de artefatos e guardá-los em um armazenamento frio para uso posterior.

O pipeline de construção prossegue para acionar um pipeline de lançamento correspondente se ele completar uma execução bem-sucedida. Os pipelines de lançamento são responsáveis por coletar os artefatos de construção, movendo-os para os servidores e indo ao vivo.

Status de compilações e lançamentos estão [disponíveis aqui](#build-test-and-deployment-status).

## Desencadeando uma compilação, teste e implantação.

Atualmente, somente membros na equipe de desenvolvedores podem empurrar para os branches de produção. As alterações nas ramificações de `produção-*` podem pousar apenas por meio de uma fusão rápida para o [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] Nos próximos dias nós melhoraríamos este fluxo a ser feito por meio de pedidos pully, para melhor gerenciamento de acesso e transparência.

### Enviando alterações para aplicativos de Staging.

1. Configure os seus controles remotos corretamente.

   ```sh
   git remoto -v
   ```

   **Resultados:**

   ```
   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Certifique-se de que o seu branch `master` é imaculado e sincronizado com o upstream.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Verifique se o Travis CI está passando o `master` branch para upstream.

   Os [testes de integração contínua](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) devem ser verdes e PASSING para o `branch` principal.

    <details> <summary> Verificando status no Travis CI (captura de tela) </summary>
      <br>
      ![Verificar status de construção no Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Se isso está a falhar, você deve parar e investigar os erros.

4. Confirme se você consegue criar o repositório localmente.

   ```
   npm run clean-and-develop
   ```

5. Mover alterações de `master` para `production-staging` através de uma rápida merge

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   > [!NOTE] Você não será capaz de forçar o push e, se você reescreveu o histórico de qualquer forma, esses comandos irão falhar.
   > 
   > Se o fizerem, você pode ter feito algo errado e você deve apenas começar de novo.

As etapas acima ativarão automaticamente uma execução de compilação do pipeline para o branch</code> de produção de `. Uma vez que a compilação é concluída, os artefatos são salvos como arquivos <code>.zip` em um armazenamento frio para serem recuperados e usados mais tarde.

O pipeline de lançamento é acionado automaticamente quando um novo artefato está disponível a partir do pipeline de compilação conectada. Para plataformas de staging, este processo não envolve aprovação manual e os artefatos são empurrados para os servidores de CDN do cliente e API.

> [!TIP├label:Estimates] Normalmente a execução de compilação leva ~20-25 minutos para completar seguida pela execução do lançamento, que leva ~15-20 minutos para o cliente, e ~5-10 mins para a API estar disponível ao vivo. De código push para ser vivo nas plataformas de staging todo o processo leva **~35-45 minutos** no total.

### Empurrando alterações para Aplicações de Produção.

O processo é principalmente o mesmo que as plataformas de preparo, com algumas verificações extras no lugar. Só para garantir, não quebramos nada no freeCodeCamp.org que possa ver centenas de usuários usá-lo a qualquer momento.

| NÃO execute esses comandos a menos que tenha verificado que tudo está funcionando na plataforma de preparo. Não deve ignorar ou ignorar qualquer teste no teste antes de prosseguir com o processo. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                     |


1. Certifique-se de que seu branch</code> de produção de `é imaculado e em sincronia com o stream.
<pre><code class="sh">   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
`</pre>

2. Mover alterações de `production-staging` para `production-current` por meio de uma rápida merge

   ```
   git checkout production-corrente
   git merge production-staging
   git push upstream
   ```

   > [!NOTE] Você não será capaz de forçar o push e, se você reescreveu o histórico de qualquer forma, esses comandos irão falhar.
   > 
   > Se o fizerem, você pode ter feito algo errado e você deve apenas começar de novo.

The above steps will automatically trigger a run on the build pipeline for the `production-current` branch. Assim que um artefato de compilação estiver pronto, ele acionará uma execução no release pipeline.

> [!TIP├label:Estimates] Normalmente a execução de compilação leva ~20-25 minutos para ser concluída.

**Etapas adicionais para ação do pessoal**

Um release run é acionado, membros da equipe de desenvolvedores receberão um e-mail manual de intervenção automático. Eles podem _aprovar_ ou _rejeitar_ a versão executar.

Se as alterações estão funcionando bem e foram testadas na plataforma de preparo, então podem ser aprovadas. A aprovação deve ser dada no prazo de 4 horas após a liberação ser acionada antes de ser automaticamente rejeitada. Uma equipe pode acionar novamente a execução de lançamento manualmente para execuções rejeitadas ou esperar pelo próximo ciclo de lançamento.

Para uso de funcionários:

| Verifique seu e-mail para obter um link direto ou [vá para o painel de liberação](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) depois que a execução da compilação estiver concluída. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                        |


Uma vez que um dos membros da equipe aprove uma liberação, o pipeline irá empurrar as mudanças ao vivo para o CDN de produção do freeCodeCamp.org. Eles normalmente levam cerca de 15 a 20 minutos para o cliente e ~5 mins para que os servidores API estejam disponíveis ao vivo.

> [!TIP├label:Estimates] A execução do lançamento geralmente leva ~15-20 minutos para cada instância do cliente, e ~5-10 minutos para que cada instância da API esteja disponível ao vivo. De código a ser vivo nas plataformas de produção, todo o processo leva **~90-120 minutos** no total (não contando o tempo de espera para a aprovação de funcionários).

## Status de Construção, Teste e Implantação

Aqui está o status atual de teste, compilação e implantação do código.

| tipo               | Filial                                                                                      | SItuação                                                                                                                                                                                                                                                    | Painel                                                                                      |
|:------------------ |:------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------- |
| Testes de CI       | [`mestre`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                        | ![Status de compilação Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Ir para Painel de Status](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Testes de CI       | [`preparo-produção`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | ![Status de compilação Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Ir para Painel de Status](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Construir Pipeline | [`preparo-produção`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | [![Estado da compilação](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Ir para Painel de Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Lançar Pipeline    | [`preparo-produção`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  |                                                                                                                                                                                                                                                             | [Ir para Painel de Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| Testes de CI       | [`produção-corrente`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Status de compilação Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Ir para Painel de Status](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Construir Pipeline | [`produção-corrente`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Estado da compilação](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Ir para Painel de Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Lançar Pipeline    | [`produção-corrente`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                             | [Ir para Painel de Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Acesso antecipado e teste beta

Bem-vindo a você para testar estes lançamentos em um modo **de "beta testing"** e obter acesso antecipado às plataformas que estão por vir. Às vezes, esses recursos/mudanças são referidos como **próxima, beta, estágio,** etc. interligadamente.

Suas contribuições por meio de comentários e relatórios de issues nos ajudarão a fazer as plataformas de produção no `freeCodeCamp. rg` mais **resiliente**, **consistente** e **estável** para todos.

Agradecemos por relatar erros que você encontra e ajuda para melhorar o freeCodeCamp.org. Você deita!

### Identificando a próxima versão das plataformas

Atualmente uma versão pública de testes de beta está disponível em:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTE] O nome de domínio é diferente de **`freeCodeCamp.org`**. Isso é intencional para evitar a indexação de mecanismos de busca e evitar confusão para usuários regulares da plataforma.

### Identificando a versão atual das plataformas

**A versão atual da plataforma está sempre disponível em [`freeCodeCamp.org`](https://www.freecodecamp.org).**

A equipe dev-team mescla mudanças do `branch` de produção de staging para `produção-corrente` quando eles lançam mudanças. O commit principal deve ser o que você ver ao vivo no site.

Você pode identificar a versão exata implantada visitando os logs de compilação e implantação disponíveis na seção de status. Como alternativa, você também pode nos pingar no chat dos [colaboradores](https://gitter.im/FreeCodeCamp/Contributors) para uma confirmação.

### Limitações conhecidas

Existem algumas limitações e compromissos conhecidos ao usar a versão beta da plataforma.

- #### All data / personal progress on these beta platforms `will NOT be saved or carried over` to production.

  **Os usuários na versão beta terão uma conta separada da produção.** A versão beta usa um banco de dados fisicamente separado da produção. Isso nos dá a capacidade de evitar qualquer perda acidental de dados ou modificações. A equipe de desenvolvimento pode limpar o banco de dados nesta versão beta conforme necessário.

- #### Não há garantias no uptime e confiabilidade das plataformas beta.

  Espera-se que a implantação seja frequente e em iterações rápidas, às vezes várias vezes ao dia. Como resultado, haverá tempos de inatividade inesperados ou funcionalidades quebradas na versão beta.

- #### Não enviar usuários regulares para este site como uma medida de confirmar uma correção

  O site beta é e sempre foi para melhorar o desenvolvimento e os testes locais, nada mais. Não é uma promessa do que está por vir, mas um vislumbre do que está sendo trabalhado.

- #### A página de sinais pode parecer diferente da produção

   Nós usamos um inquilino de teste para freecodecamp.dev no Auth0 e, portanto, não temos a capacidade de definir um domínio personalizado. Isso faz com que todas as callbacks de redirecionamento e a página de login apareçam em um domínio padrão como: `https://freecodecamp-dev.auth0.com/`. Isso não afeta que a funcionalidade esteja tão próxima da produção quanto podemos obter.

## Relatar problemas e deixar feedback

Por favor, abra novos problemas para discussões e reportar erros. Você pode rotulá-los como uma **[`versão: próxima/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** para triagem.

Você pode enviar um e-mail para `desenvolvimento[at]freecodecamp.org` se você tiver alguma dúvida. Como sempre, todas as vulnerabilidades de segurança devem ser relatadas à `segurança[at]freecodecamp.org` em vez do rastreador público e fórum.
