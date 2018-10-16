---
title: Behavior Driven Development
localeTitle: Desenvolvimento Orientado por Comportamento
---
## Desenvolvimento Orientado por Comportamento

Behavior Driven Development (BDD) é um processo de desenvolvimento de software que surgiu ![Test Driven Development (TDD)](../test-driven-development/index.md) . O Behavior Driven Development combina as técnicas e princípios gerais do TDD com ideias de design orientado a domínio e análise e design orientados a objetos para fornecer às equipes de desenvolvimento e gerenciamento de software ferramentas compartilhadas e um processo compartilhado para colaborar no desenvolvimento de software. É uma metodologia de desenvolvimento de software na qual um aplicativo é especificado e projetado descrevendo como seu comportamento deve aparecer para um observador externo.

Embora o BDD seja principalmente uma ideia de como o desenvolvimento de software deve ser gerenciado por interesses comerciais e insight técnico, a prática do BDD pressupõe o uso de ferramentas de software especializadas para dar suporte ao processo de desenvolvimento.

Embora essas ferramentas geralmente sejam desenvolvidas especificamente para uso em projetos de BDD, elas podem ser vistas como formas especializadas de ferramentas que suportam o desenvolvimento orientado a testes. As ferramentas servem para adicionar automação à linguagem onipresente que é um tema central do BDD.

O BDD se concentra em:

*   Onde começar no processo
*   O que testar e o que não testar
*   Quanto para testar de uma só vez
*   O que chamar os testes
*   Como entender por que um teste falha

No coração do BDD está um repensar da abordagem do teste de unidade e do teste de aceitação que surgem naturalmente com esses problemas. Por exemplo, o BDD sugere que os nomes de teste de unidade sejam sentenças completas começando com um verbo condicional ("deveria" em inglês, por exemplo) e devem ser escritas em ordem de valor de negócios. Os testes de aceitação devem ser escritos usando a estrutura ágil padrão de uma história do usuário: "Como uma _função que_ eu quero _recurso_ para que _benefício_ ". Os critérios de aceitação devem ser escritos em termos de cenários e implementados como classes: Dado _o contexto inicial_ , quando o _evento ocorre_ , _assegure alguns resultados_ .

Exemplo
```
Story: Returns go to stock 
 
 As a store owner 
 In order to keep track of stock 
 I want to add items back to stock when they're returned. 
 
 Scenario 1: Refunded items should be returned to stock 
 Given that a customer previously bought a black sweater from me 
 And I have three black sweaters in stock. 
 When he returns the black sweater for a refund 
 Then I should have four black sweaters in stock. 
 
 Scenario 2: Replaced items should be returned to stock 
 Given that a customer previously bought a blue garment from me 
 And I have two blue garments in stock 
 And three black garments in stock. 
 When he returns the blue garment for a replacement in black 
 Then I should have three blue garments in stock 
 And two black garments in stock. 
```

Junto com isso estão alguns Benefícios:

1.  Todo o trabalho de desenvolvimento pode ser rastreado diretamente aos objetivos de negócios.
2.  O desenvolvimento de software atende às necessidades do usuário. Usuários satisfeitos = bons negócios.
3.  Priorização eficiente - os recursos essenciais aos negócios são entregues primeiro.
4.  Todas as partes têm uma compreensão compartilhada do projeto e podem estar envolvidas na comunicação.
5.  Uma linguagem compartilhada garante que todos (técnicos ou não) tenham uma visibilidade completa da progressão do projeto.
6.  Design de software resultante que corresponde a existente e suporta necessidades de negócios futuras.
7.  Melhoria no código de qualidade, reduzindo os custos de manutenção e minimizando o risco do projeto.

## Mais Informações

*   Wiki no [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
*   Um conhecido framework de Behavior Driven Development (BDD) é o [Pepino](https://cucumber.io/) . Pepino suporta muitas linguagens de programação e pode ser integrado com um número de frameworks; por exemplo, [Ruby on Rails](http://rubyonrails.org/) , [Spring Framework](http://spring.io/) e [Selenium](http://www.seleniumhq.org/)
*   https://inviqa.com/blog/bdd-guide