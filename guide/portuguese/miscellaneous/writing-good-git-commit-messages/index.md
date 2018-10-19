---
title: Writing Good Git Commit Messages
localeTitle: Escrevendo boas mensagens de commit do Git
---
1.  Assunto separado do corpo com uma linha em branco
2.  Limite a linha de assunto para 50 caracteres
3.  Capitalize a linha de assunto
4.  Não termine a linha de assunto com um período
5.  Use o humor imperativo na linha de assunto
6.  Enrole o corpo em 72 caracteres
7.  Use o corpo para explicar o que e porque vs. como

**Uma linha de assunto commit commit formada corretamente deve sempre poder completar a seguinte frase:**

> Se aplicado, este commit será _`<<your subject line here>>`_

**Por exemplo:**

*   Se aplicado, este commit irá **_Refatorar o subsistema X para legibilidade_**
*   Se aplicado, este commit **_atualizará a documentação inicial_**
*   Se aplicado, essa confirmação **_removerá os métodos reprovados_**
*   Se aplicado, este commit lançará a **_versão 1.0.0_**
*   Se aplicado, essa confirmação **_mesclará solicitação de solicitação \# 123 do usuário / filial_**

**Observe como isso não funciona para as outras formas não imperativas:**

*   Se aplicado, este commit _corrigirá um bug com Y_
*   Se aplicado, este commit mudará o _comportamento de X_
*   Se aplicado, este commit vai _mais correções para coisas quebradas_
*   Se aplicado, esse commit vai _adotar novos métodos de API_

**Lembre-se: O** _uso do imperativo é importante apenas na linha de assunto. Você pode relaxar essa restrição quando estiver escrevendo o corpo._

**Referência:** [http://chris.beams.io/posts/git-commit](http://chris.beams.io/posts/git-commit)