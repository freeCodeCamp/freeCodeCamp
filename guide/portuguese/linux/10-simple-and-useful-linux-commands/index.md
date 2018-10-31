---
title: 10 Simple and Useful Linux Commands
localeTitle: 10 Comandos Linux Simples e Úteis
---
# 10 Comandos Linux Simples e Úteis

Os comandos listados aqui são básicos e ajudarão você a começar rapidamente. Mas eles também são poderosos e continuarão a ser úteis à medida que sua experiência em Linux se expandir.

1.  `echo` Isso pega o texto que você dá e o envia para algum lugar - para voltar para a tela, para um arquivo ou para outro comando. Exemplo: `echo "hello!"`
2.  `cat` Para exibir o conteúdo de um arquivo de texto, basta digitar `cat myfile` .
3.  `find` Ele faz o que diz, e é bom nisso. Use-o para localizar arquivos por caminho, tamanho, data, proprietário e vários outros filtros úteis. Exemplo: `find . -type f -mtime -1h # List files in this directory modified in the past hour` .
4.  `date` Basta digitar a data quando quiser saber que horas são. Exemplo: `date "+It's %l:%m%p on %A"` . Use-o em um script para nomear arquivos de acordo com a data atual.
5.  `ls` O que há neste diretório? Combine `ls` com alguns sinalizadores úteis para exibir e classificar o conteúdo do diretório por data e tamanho. Também oferece muitas opções para formatar a saída.
6.  `pwd` Onde eu estou? O Linux pode ser implacável, principalmente quando você exclui algo. Certifique-se de saber antes de emitir seus comandos.
7.  `mail` O programa de correio do Linux não é bonito, mas pode ser muito útil. Você pode criar uma mensagem e adicionar texto, destinatários e anexos em um único comando. Exemplo: `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
8.  `cut` Quando você tiver uma string com separadores, use `cut` para filtrar determinados campos. Exemplo: `echo "this, that, and the other" | cut -d, -f2 # "that"`
9.  `grep` Para encontrar linhas de texto que contenham uma certa string, use grep. Exemplo: `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
10.  `sed` Use sed para localizar e alterar uma substring em um trecho de texto. Exemplo: `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
11.  `shutdown` usar desligar o sistema e desligue a energia. Exemplo: `shutdown -h now` desliga o sistema imediatamente. `shutdown -h +5` desliga o sistema após cinco minutos.

Use esses comandos em scripts e na linha de comando. Eles são todos comandos muito poderosos, e a man page do Linux tem muito mais informações sobre cada um deles.

* * *

Além disso, os comandos importantes usados ​​pelos administradores do sistema são os seguintes:

1.  Comando `uptime` No comando uptime do Linux mostra desde há quanto tempo o seu sistema está rodando e o número de usuários está logado atualmente e também exibe a média de carga para intervalos de 1,5 e 15 minutos.
    
2.  Comando `w` Ele exibe os usuários atualmente conectados e seu processo junto com as médias de carga. também mostra o nome de login, tty name, host remoto, tempo de login, tempo ocioso, JCPU, PCPU, comando e processos.
    
3.  Comando `users` O comando Usuários exibe usuários atualmente conectados. Este comando não possui outros parâmetros além de ajuda e versão.
    
4.  `who` comanda Quem comandar simplesmente retorna o nome do usuário, data, hora e informações do host. Quem comando é semelhante ao comando w. Ao contrário do comando w, que não imprime o que os usuários estão fazendo. Vamos ilustrar e ver a diferença entre quem e os comandos w.
    
5.  Comando `whoami` comando whoami imprime o nome do usuário atual. Você também pode usar o comando “who am i” para exibir o usuário atual. Se você está logado como root usando o comando sudo “whoami”, retorne root como usuário atual. Use o comando "who am i" se você quiser saber exatamente o usuário logado.
    
6.  Comando `ls` O comando ls exibe uma lista de arquivos em formato legível por humanos.
    
7.  Comando `crontab` Listar trabalhos de planejamento para o usuário atual com o comando crontab e a opção -l.
    
8.  `less` Comando Menos comando permite visualizar rapidamente o arquivo. Você pode paginar para cima e para baixo. Pressione 'q' para sair de menos janela.
    
9.  `more` Comando mais comando permite visualizar rapidamente o arquivo e mostra detalhes em porcentagem. Você pode paginar para cima e para baixo. Pressione 'q' para sair de mais janela.
    
10.  Comando `cp` Copie o arquivo da origem para o destino preservando o mesmo modo.
    

Aqui está a lista de comandos freqüentemente usados ​​pelo editor. Isto não é completo, mas é uma lista compacta de comandos para se referir quando necessário.