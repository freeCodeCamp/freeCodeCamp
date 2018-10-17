---
title: Penetration Testing
localeTitle: Teste de penetração
---
O Teste de penetração é um método que muitas empresas seguem para minimizar suas violações de segurança. Esta é uma maneira controlada de contratar um profissional que tentará hackear seu sistema e mostrar as lacunas que você deve corrigir. O teste de penetração pode, ocasionalmente, derrubar sistemas e fazer com que a empresa perca tempo de atividade, é uma prática recomendada para testes de penetração em uma versão de pré-produção do ambiente de produção.

Antes de fazer um teste de penetração, é obrigatório ter um acordo que mencione explicitamente os seguintes parâmetros -

*   qual será o tempo do teste de penetração,
*   onde será a fonte de IP do ataque, e
*   quais serão os campos de penetração do sistema.

O teste de penetração é conduzido por hackers profissionais éticos que usam principalmente ferramentas comerciais de código aberto, ferramentas automatizadas e verificações manuais. Não há restrições; O objetivo mais importante aqui é descobrir tantas falhas de segurança quanto possível. Muitas grandes empresas oferecem recompensas para qualquer um que possa apontar vulnerabilidades de segurança em seus sistemas, através do que é chamado de [programas de recompensas de bugs](https://en.wikipedia.org/wiki/Bug_bounty_program) . O Google, por exemplo, oferecerá dezenas de milhares de dólares por meio de seu Programa de Recompensa de Vulnerabilidade.

## Fases do Teste de Penetração

Existem cinco fases principais de testes de penetração. Eles são:

1.  **Reconhecimento**
    *   É aqui que um testador de penetração reúne o máximo de informações sobre seus alvos em potencial. Alguns métodos usados ​​neste estágio são pesquisas do Google / Bing, pesquisas whois, varreduras Netcraft e engenharia social.
2.  **Digitalização**
    *   Uma vez que o testador de penetração tenha reunido todas as informações e decidido em qual (is) alvo (s) eles gostariam de atacar, eles precisam garantir que o (s) alvo (s) esteja ativo e verificando coisas como portas abertas, serviços ativos e quaisquer vulnerabilidades atuais que o sistema de destino está aberto.
3.  **Exploração**
    *   Depois que a verificação for concluída e as vulnerabilidades tiverem sido avaliadas, o testador de penetração poderá usar essas informações para descobrir seu vetor de ataque. Nessa fase, o testador de penetração procura uma exploração que use uma das vulnerabilidades encontradas no estágio anterior para obter acesso ao sistema de destino.
4.  **Acesso Maintaing**
    *   Essa fase é onde o testador de penetração garante que eles terão tempo suficiente para testar o sistema de destino. Eles podem tentar contornar qualquer contramedidas de detecção / prevenção de intrusão para concluir seus testes.
5.  **Cobrindo faixas**
    *   Depois que o ataque é concluído, o testador de pentração pode tomar medidas para ocultar sua intrusão e possivelmente deixar meios de acesso persistente para permitir uma prova de conceito para seu cliente.

## Tipos de teste de penetração

Nós temos cinco tipos de testes de penetração -

1.  **Black Box** - Aqui, o hacker ético não tem nenhuma informação sobre a infraestrutura ou a rede da organização que ele está tentando penetrar. Nos testes de penetração de caixa preta, o hacker tenta encontrar as informações por seus próprios meios.
    
2.  **Caixa Cinza** - É um tipo de teste de penetração onde o hacker ético tem um conhecimento parcial da infraestrutura, como seu servidor de nomes de domínio.
    
3.  **Caixa Branca** - Nos testes de penetração de caixa branca, o hacker ético é fornecido com todas as informações necessárias sobre a infraestrutura e a rede da organização que ele precisa penetrar.
    
4.  **Teste de penetração externa** - Esse tipo de teste de penetração enfoca principalmente a infraestrutura de rede ou servidores e seu software operando sob a infraestrutura. Nesse caso, o hacker ético tenta o ataque usando redes públicas através da Internet. O hacker tenta invadir a infraestrutura da empresa atacando suas páginas da Web, servidores da Web, servidores DNS públicos etc.
    
5.  **Teste de Penetração Interna** - Neste tipo de teste de penetração, o hacker ético está dentro da rede da empresa e realiza seus testes a partir daí.
    

O teste de penetração também pode causar problemas, como mau funcionamento do sistema, falha do sistema ou perda de dados. Portanto, uma empresa deve assumir riscos calculados antes de prosseguir com os testes de penetração. O risco é calculado da seguinte forma e é um risco de gestão.

**RISCO = Vulnerabilidade de Ameaça ×**

## Exemplo

Você tem um site de comércio eletrônico on-line que está em produção. Você quer fazer um teste de penetração antes de fazê-lo ao vivo. Aqui, você tem que pesar os prós e contras primeiro. Se você prosseguir com o teste de penetração, isso poderá causar a interrupção do serviço. Pelo contrário, se você não deseja realizar um teste de penetração, pode correr o risco de ter uma vulnerabilidade não corrigida que permanecerá como uma ameaça o tempo todo. Antes de fazer um teste de penetração, é recomendável que você descreva o escopo do projeto por escrito. Você deve ser claro sobre o que vai ser testado. Por exemplo -

*   Sua empresa tem uma VPN ou qualquer outra técnica de acesso remoto e você deseja testar esse ponto específico.
*   Seu aplicativo tem servidores da Web com bancos de dados, portanto, talvez você queira testá-lo quanto a ataques de injeção de SQL, que é um dos testes mais importantes em um servidor da Web. Além disso, você pode verificar se o seu servidor está imune a ataques DoS.

## Dicas rápidas

Antes de prosseguir com um teste de penetração, você deve manter os seguintes pontos em mente - Primeiro entenda seus requisitos e avalie todos os riscos.

*   Contrate uma pessoa certificada para realizar o teste de penetração, porque eles são treinados para aplicar todos os métodos e técnicas possíveis para descobrir possíveis brechas em uma rede ou aplicativo da web.
*   Sempre assine um contrato antes de fazer um teste de penetração.

## Recursos

[Teste de penetração](https://en.wikipedia.org/wiki/Penetration_test)