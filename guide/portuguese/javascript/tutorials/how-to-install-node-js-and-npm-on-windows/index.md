---
title: How to Install Node Js and Npm on Windows
localeTitle: Como instalar o Node Js e Npm no Windows
---
## Como instalar o Node Js e Npm no Windows

Instalar Node.js e Npm no Windows é muito simples.

Primeiro, baixe o instalador do Windows no [site](https://nodejs.org/) do [Node.js.](https://nodejs.org/) Você terá a escolha entre o **LTS** (Long Term Support) ou a versão **atual** .

*   A versão **atual** recebe os mais recentes recursos e atualizações mais rapidamente
*   A versão **LTS** foregos apresenta alterações para melhorar a estabilidade, mas recebe patches como correções de bugs e atualizações de segurança

Depois de selecionar uma versão que atenda às suas necessidades, execute o instalador. Siga os prompts para selecionar um caminho de instalação e garantir que o recurso do **gerenciador de pacotes npm** seja incluído junto com o **tempo de execução** do **Node.js.** Essa deve ser a configuração padrão.

Reinicie seu computador após a conclusão da instalação.

Se você instalou sob a configuração padrão, o Node.js agora deve ser adicionado ao seu PATH. Execute o prompt de comando ou o powershell e insira o seguinte para testá-lo:
```
> node -v 
```

O console deve responder com uma string de versão. Repita o processo para Npm:
```
> npm -v 
```

Se ambos os comandos funcionarem, sua instalação foi um sucesso e você pode começar a usar o Node.js!

#### Mais Informações:

Para mais informações e guias, visite a [página de documentos](https://nodejs.org/en/docs/) do [Node.js.](https://nodejs.org/en/docs/)