# Política de segurança do freeCodeCamp.org

Este documento descreve a nossa política de segurança para as bases de código, para as plataformas que operamos, além de mostrar como relatar vulnerabilidades.

## Relatando uma vulnerabilidade

> [!NOTE] Se achar que encontrou uma vulnerabilidade, **reporte-a de modo responsável**. Não crie issues no GitHub para problemas de segurança. Em vez disso, siga este guia.

### Diretrizes

Apreciamos a divulgação responsável de vulnerabilidades que possa impactar a integridade de nossas plataformas e usuários. No interesse de poupar o tempo de todos, recomendamos que você relate as vulnerabilidades com isso em mente:

1. Certifique-se de estar usando as versões **mais recentes**, **estáveis** e **atualizadas** do sistema operacional e do navegador da web disponível para você em sua máquina.
2. Consideramos o uso de ferramentas e utilitários on-line para relatar issues com SPF e configurações DKIM, testes de servidor SSL e outros na categoria de ["recompensas por migalhas"](https://www.troyhunt.com/beg-bounties) e não responderemos a estes relatórios.
3. Embora não possamos oferecer nenhuma recompensa ou troca no momento, ficaremos felizes em listar seu nome em nossa [Lista dos famosos](security-hall-of-fame.md), contanto que os relatórios não sejam de baixo esforço.

### Relatórios

Depois de confirmar as diretrizes acima, fique à vontade para enviar um e-mail para `possible-security-issue [at] freecodecamp.org`. Você também pode nos enviar uma mensagem criptografada com PGP para `flowcrypt.com/me/freecodecamp`.

Ao reportar uma vulnerabilidade, vamos analisá-la e garantir que ela não é um falso positivo. Se precisarmos esclarecer alguns pormenores, entraremos em contato com você. Você pode enviar relatórios separados para cada issue que encontrar. Lembre-se de que não poderemos responder a issues que entendermos que se encontram fora das diretrizes.

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

### Outras plataformas

Além dos itens acima, também aceitamos relatórios para repositórios hospedados no GitHub, da organização do freeCodeCamp.

### Outras aplicações auto-hospedadas

Hospedamos algumas de nossas próprias plataformas usando softwares de código aberto, como o Ghost e o Discourse. Se você está relatando uma vulnerabilidade, certifique-se de que não é um erro no software do upstream.
