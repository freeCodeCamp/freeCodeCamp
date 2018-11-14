---
title: Security
localeTitle: Segurança
---
## Segurança

Ao escrever código PHP, é muito importante ter em mente os conceitos de segurança para evitar escrever código vulnerável.

### Tipos de vulnerabilidades

*   [Falsificação de Solicitação de Site Cruzado](/php/security/cross-site-request-forgery) Uma vulnerabilidade no aplicativo causada pelo programador que não verifica de onde uma solicitação foi enviada - esse ataque é enviado a um usuário de alto nível de privilégio para obter acesso de nível mais alto ao aplicativo.
*   [Cross Site Scripting](/php/security/cross-site-scripting) Uma vulnerabilidade no aplicativo causada pelo programador que não limpa a entrada antes de enviar a entrada para o navegador (por exemplo, um comentário em um blog). É comumente usado para executar JavaScript mal-intencionado no navegador para fazer ataques como roubar cookies de sessão entre outras ações maliciosas para obter privilégios de nível superior no aplicativo.
*   [Inclusão de Arquivos Locais](/php/security/local-file-inclusion) Uma vulnerabilidade no aplicativo causada pelo programador que requer uma entrada de arquivo fornecida pelo usuário e não desinfetando a entrada antes de acessar o arquivo solicitado. Isso resulta em um arquivo sendo incluído onde não deveria estar.
*   [Inclusão remota de arquivos](/php/security/remote-file-inclusion) Uma vulnerabilidade no aplicativo causada pelo programador que requer uma entrada de arquivo fornecida pelo usuário e não desinfecta a entrada antes de acessar o arquivo solicitado. Isso resulta em um arquivo sendo extraído de um servidor remoto e incluído onde não deveria estar.
*   [Sequestramento de Sessão](/php/security/session-hijacking) Uma vulnerabilidade causada por um invasor que obtém acesso ao identificador de sessão de um usuário e pode usar a conta de outro usuário representando-o. Isso geralmente é usado para obter acesso a uma conta de usuário administrativo.
*   [Identificação de sessão Identificador de sessão de aquisição O](/php/security/session-identifier-acquirement) identificador é uma vulnerabilidade causada por um invasor que pode adivinhar o identificador de sessão de um usuário ou explorar vulnerabilidades no próprio aplicativo ou no navegador do usuário para obter um identificador de sessão.
*   [Injeção SQL](/php/security/sql-injection) Uma vulnerabilidade no aplicativo causada pelo programador que não limpa a entrada antes de incluí-la em uma consulta no banco de dados. Isso faz com que o invasor tenha leitura completa e, com mais frequência, não tenha acesso de gravação ao banco de dados. Com esse tipo de acesso, um invasor pode fazer coisas muito ruins.

#### Mais Informações:

[Página de Ataques do Wiki do OWASP](https://www.owasp.org/index.php/Category:Attack)