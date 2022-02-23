# Política de segurança

Este documento descreve a nossa política de segurança para as bases de código, para as plataformas que operamos, além de mostrar como relatar vulnerabilidades.

## Relatando uma vulnerabilidade

Se você acha que encontrou uma vulnerabilidade, _reporte-a de modo responsável_. Não crie issues no GitHub para problemas de segurança. Em vez disso, envie um e-mail para `security@freecodecamp.org` e investigaremos isso imediatamente.

Certifique-se de estar usando a versão **mais recente**, **estável** e **atualizada** do sistema operacional e do navegador da web disponível para você em sua máquina.

Apreciamos qualquer divulgação responsável de vulnerabilidades que possa impactar a integridade de nossas plataformas e usuários.

Ao reportar uma vulnerabilidade, vamos analisá-la e garantir que ela não é um falso positivo. Voltaremos a entrar em contato, caso seja necessário esclarecer alguns detalhes. Você pode enviar relatórios separados para cada issue que encontrar.

Embora não possamos oferecer nenhuma recompensa ou troca no momento, ficaremos felizes em listar seu nome em nossa [Lista dos famosos](security-hall-of-fame.md), contanto que os relatórios não sejam de baixo esforço.

Consideramos o uso de ferramentas e utilitários on-line para relatar issues com SPF e configurações DKIM, testes de servidor SSL etc. na categoria de ["recompensas por migalhas"](https://www.troyhunt.com/beg-bounties/) e não responderemos a estes relatórios.

## Plataformas e bases de código

Aqui está uma lista das plataformas e bases de código para as quais estamos aceitando relatórios:

### Plataforma de aprendizagem

| Versão          | Branch         | Suportado | Site da web ativo        |
| --------------- | -------------- | --------- | ------------------------ |
| produção        | `prod-current` | Sim       | `freecodecamp.org/learn` |
| staging         | `prod-staging` | Sim       | `freecodecamp.dev/learn` |
| desenvolvimento | `main`         | Não       |                          |

### Plataforma de publicação

| Versão     | Suportado | Site da web ativo                      |
| ---------- | --------- | -------------------------------------- |
| produção   | Sim       | `freecodecamp.org/news`                |
| localizado | Sim       | `freecodecamp.org/<idioma>/news` |

### Aplicativo móvel

| Versão   | Suportado | Site da web ativo                                                |
| -------- | --------- | ---------------------------------------------------------------- |
| produção | Sim       | `https://play.google.com/store/apps/details?id=org.freecodecamp` |

Além dos itens acima, também aceitamos relatórios para repositórios hospedados no GitHub, da organização do freeCodeCamp.

Hospedamos algumas de nossas próprias plataformas usando softwares de código aberto, como o Ghost e o Discourse. Se você está relatando uma vulnerabilidade, certifique-se de que não é um erro no software do upstream.
