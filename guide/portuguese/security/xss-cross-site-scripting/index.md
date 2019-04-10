---
title: XSS Cross Site Scripting
localeTitle: XSS Cross Site Scripting
---
## XSS Cross Site Scripting

Cross Site Scripting (XSS) é um tipo de injeção de código. É uma das vulnerabilidades mais comuns na web.

O XSS geralmente envolve inserir código em um formulário, parâmetro de url ou em qualquer outro lugar que aceite entrada do usuário que é exibida de volta para os usuários. Por exemplo, imagine um site que mostrasse seu perfil de usuário e você inseriu o `<script>alert("HELLO!");</script>` como seu nome de usuário. Se o site não impedisse o XSS, todas as pessoas que visitaram seu perfil receberiam um pop-up de alerta.

#### Diferentes tipos de XSS

Existem 3 tipos diferentes de XSS.

*   XSS armazenado
*   XSS reflexivo
*   XSS baseado em DOM

#### Perigos do XSS

Naturalmente, o exemplo acima não apresenta nenhum perigo imediato para quem visualiza seu perfil. Mas, e se você tivesse intenções mais sinistras? Você pode executar algum javascript para mostrar uma página de login falsa e coletar nomes de usuários e senhas para outros usuários do site, ou simplesmente ler o cookie da sessão se não for seguro. Você pode forçá-los a visitar outros sites ou realizar uma ação.

#### Defenda-se contra o XSS

*   Nunca confie nos dados do usuário
*   Validar dados não confiáveis ​​(verificar dados válidos, se inválidos, rejeitar em vez de processar)
*   Valores seguros da lista de permissões (em vez da lista negra)
*   Sempre codifique a saída
*   Codificar para o contexto correto (atributos HTML / HTML / CSS / JSS são todos diferentes)
*   Proteger cookies (somente HTTP e seguro só podem ser lidos pelo servidor)
*   Implementar uma política de segurança de conteúdo

#### Mais Informações:

Leia mais informações sobre o XSS e os passos que você pode tomar para se proteger são:

[Scripting entre sites (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS) )

[Folha de referência de prevenção OWASP XSS (Cross Site Scripting)](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)

[Lição XSS de Hacksplaining](https://www.hacksplaining.com/exercises/xss-stored)