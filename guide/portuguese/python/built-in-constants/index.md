---
title: Python Built in Constants
localeTitle: Python construído em constantes
---
[Constantes](https://docs.python.org/3/library/constants.html)

Três constantes internas comumente usadas:

*   `True` : O verdadeiro valor do tipo de _bool_ . Atribuições para `True` levantam um _SyntaxError_ .
*   `False` : o valor falso do tipo _bool_ . Atribuições para `False` _geram_ um _SyntaxError_ .
*   `None` : o único valor do tipo _NoneType_ . Nenhum é freqüentemente usado para representar a ausência de um valor, como quando argumentos padrão não são passados ​​para uma função. Atribuições para `None` _geram_ um _SyntaxError_ .

Outras constantes internas:

*   `NotImplemented` : Valor especial que deve ser retornado pelos métodos especiais binários, como `__eg__()` , `__add__()` , `__rsub__()` , etc.) para indicar que a operação não está implementada com relação ao outro tipo.
*   `Ellipsis` : Valor especial usado principalmente em conjunto com a sintaxe de fatiamento estendida para tipos de dados de contêiner definidos pelo usuário.
*   `__debug__` : Verdadeiro se o Python não foi iniciado com uma opção -o.

Constantes adicionadas pelo módulo do site O módulo do site (que é importado automaticamente durante a inicialização, exceto se a opção de linha de comando -S é fornecida) adiciona várias constantes ao namespace interno. Eles são úteis para o shell do interpretador interativo e não devem ser usados ​​em programas.

Objetos que, quando impressos, imprimem uma mensagem como “Use quit () ou Ctrl-D (ou seja, EOF) para sair”, e quando chamado, eleve SystemExit com o código de saída especificado:

*   sair (código = nenhum)
*   exit (code = nenhum)

Objetos que, quando impressos, imprimem uma mensagem como “Digite license () para ver o texto completo da licença” e, quando chamados, exibem o texto correspondente de maneira semelhante ao pager (uma tela por vez):

*   direito autoral
*   licença
*   créditos