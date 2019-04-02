---
title: Identify Basic Internet Problems with Ping
localeTitle: Identificar problemas básicos da Internet com ping
---
![Tela Sonar](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b1bfc671722851eed4adfe2d4ec24eb9ab8a875b.png)

Da próxima vez que ligar para o seu help desk, você quer impressioná-los com seu conhecimento de rede? Usar um comando chamado "ping", integrado em seu computador Mac, Windows ou Linux existente, ajudará a identificar problemas básicos de conexão. Ok, isso pode não ser o suficiente para "impressionar" os membros de sua equipe, mas eles perceberão que você iniciou o processo de depuração. E lembre-se de que sua equipe de suporte é especialista em depuração, portanto, siga suas instruções ao guiá-lo pela sequência de solução de problemas.

## TL; DR:

Você pode usar o comando `ping` incorporado em seu computador Mac OS X, Windows ou Linux para identificar problemas básicos de conectividade de rede. Isso pode ajudá-lo a resolver o problema e / ou obter informações valiosas de depuração como primeiro passo antes de chamar o suporte. Leia abaixo para obter detalhes sobre como iniciar uma janela de linha de comando e executar o `ping` em sua máquina com Mac OS X ou Windows.

## O comando `ping` :

O comando `ping` é uma maneira simples de verificar se outro computador pode receber informações de você. O autor original, [Mike Muuss](https://en.wikipedia.org/wiki/Mike_Muuss) , [nomeou o programa depois do som "ping"](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29#History) que um submarino envia para detectar objetos na água. Se um eco do ping volta, significa que há algo lá fora. Na verdade, o `ping` usa a " [Solicitação de Eco do Protocolo de Controle de Mensagens da Internet](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) " como parte de seu design de software subjacente.

Em sua forma mais simples, o comando `ping` fornece duas informações valiosas, se a mensagem foi ecoada de volta ( `64 bytes from…` ) e quanto tempo leva para receber a mensagem de volta (por exemplo, `time=6.396 ms` ). Dependendo do tipo de computador que você está usando, você pode até obter um resumo contendo mínimo, máximo, média e mais. O tempo de resposta é mostrado em "ms", ou milissegundo, que é 1/1000 de segundo. Um tempo de resposta de 10 ms ou menos é bastante rápido, no entanto, os valores geralmente estão no intervalo de 100 ms. Muito acima de 200ms, você provavelmente notará que tem uma conexão lenta.

## Quando tudo estiver bem:

Esta é a aparência da minha resposta de `ping` no meu computador Mac OS X quando tudo está funcionando normalmente aqui na Malásia:
```
MacBook-Pro:~ ajm$ ping Google.com 
 PING google.com (216.58.196.46): 56 data bytes 
 64 bytes from 216.58.196.46: icmp\_seq=0 ttl=55 time=6.396 ms 
 64 bytes from 216.58.196.46: icmp\_seq=1 ttl=55 time=6.368 ms 
 64 bytes from 216.58.196.46: icmp\_seq=2 ttl=55 time=26.773 ms 
 64 bytes from 216.58.196.46: icmp\_seq=3 ttl=55 time=6.984 ms 
 ^C 
 --- google.com ping statistics --- 
 4 packets transmitted, 4 packets received, 0.0% packet loss 
 round-trip min/avg/max/stddev = 6.368/11.630/26.773/8.746 ms 
```

Esta é a aparência da minha resposta de `ping` em um computador Windows quando tudo está funcionando bem:
```
C:\Users\BJM>ping Google.com 
 Pinging google.com [216.58.196.46] with 32 bytes of data: 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=15ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Ping statistics for 216.58.196.46: 
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), 
 Approximate round trip times in milli-seconds: 
    Minimum = 6ms, Maximum = 15ms, Average = 8ms 
```

Você pode ver nesses exemplos que a conexão é muito boa com tempos médios de resposta inferiores a 10 ms.

### Quando algo está errado (três exemplos):

Então, o que aconteceria se eu não conseguisse me conectar ao `Google.com` ? Por exemplo, \# 1 , simulei uma conexão de rede quebrada ao meu Mac desconectando meu roteador da parede e executei novamente o comando. A primeira coisa que noto é que leva _muito_ mais tempo para o comando responder:
```
MacBook-Pro:~ ajm$ ping google.com 
 ping: cannot resolve google.com: Unknown host 
 MacBook-Pro:~ ajm$ 
```

Ou, por exemplo, nº 2 , dependendo exatamente de como a conexão está falhando:
```
PING google.com (216.58.196.46): 56 data bytes 
 Request timeout for icmp\_seq 0 
 Request timeout for icmp\_seq 1 
 Request timeout for icmp\_seq 2 
 ^C 
```

E, às vezes, se tenho uma conexão particularmente esquisita, vejo uma mistura dessas mensagens. Por exemplo, \# 3 , posso simular isso conectando meu computador Mac a uma conexão Wi-Fi pública que fica do outro lado da rua:
```
PING google.com (216.58.196.206): 56 data bytes 
 64 bytes from 216.58.196.206: icmp\_seq=0 ttl=57 time=273.655 ms 
 64 bytes from 216.58.196.206: icmp\_seq=1 ttl=57 time=808.546 ms 
 64 bytes from 216.58.196.206: icmp\_seq=2 ttl=57 time=179.613 ms 
 Request timeout for icmp\_seq 3 
 Request timeout for icmp\_seq 4 
 64 bytes from 216.58.196.206: icmp\_seq=5 ttl=57 time=374.612 ms 
 Request timeout for icmp\_seq 6 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 7 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 8 
 ^C 
```

No primeiro teste, o `ping` me disse que minha máquina nem encontraria o endereço da Internet (IP `216.58.196.46` ) para o `Google.com` . No segundo teste, meu computador lembrou-se do endereço IP do Google, mas não conseguiu acessar os servidores do Google (Tempo `Request timeout` ). No terceiro teste, `sendto: No route to host` significa que o dispositivo de rede sabe onde os servidores do Google estão, mas algo ao longo do caminho digital está quebrado.

## Usuários Mac: Como executar o comando `ping` :

Em um Mac, você normalmente executa `ping` na linha de comando do terminal. Para iniciar o terminal, clique no ícone de lupa do OS X Spotlight no canto superior direito da área de trabalho:

![Mac Spotlight](//discourse-user-assets.s3.amazonaws.com/original/2X/9/924e9346b5f92fe41127f6b3e403f454773edae9.png)

Quando a janela de pesquisa aparecer, digite "terminal", selecione "Terminal - Utilitários" e clique duas vezes (ou pressione

Retorna

): ![Lançamento do Mac Terminal](//discourse-user-assets.s3.amazonaws.com/original/2X/9/976e1fb628c0d0bf2a6a9b57504305fd844716d4.png)

Isso iniciará a janela de comando do terminal e você poderá inserir o comando `ping Google.com` mostrado nos meus exemplos: ![Linha de Comando Mac](//discourse-user-assets.s3.amazonaws.com/original/2X/0/05d1e4d360c14921f7bd7ab871358b956f1e7d03.png)

**Importante Dica do Mac** : O comando `ping` será executado para sempre se você não disser para parar. Para fazer isso, pressione o

`control`

tecla (inferior direito no teclado) e

`c`

chave. Isso interromperá o teste com um Control-C ( `^C` ) e retornará o controle da linha de comando. Para o usuário do Windows, o comando será interrompido após algumas iterações.

## Usuários do Windows: Como executar o comando `ping` :

Abrir o Prompt de Comando difere entre as versões 10, 8.1, 8 e 7 do Windows; aqui está um ótimo guia em [Como Abrir o Prompt de Comando](http://pcsupport.about.com/od/commandlinereference/f/open-command-prompt.htm) . Em uma máquina com Windows 7, por exemplo, clique no ícone "Iniciar" do Windows inferior esquerdo, selecione "Prompt de comando" e clique duas vezes (ou pressione

`enter`

):

![Win Terminal Launch](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4e0b18755930ad0d64e6e38763f0b96054fd76fb.png)

Isso iniciará a janela de comando e você poderá inserir o comando `ping Google.com` mostrado nos exemplos:

![Win Command Line](//discourse-user-assets.s3.amazonaws.com/original/2X/9/94d8ed91d29574497ad0f2eb2cd235050132851e.png)

Agora que você sabe como usar o comando `ping` , você pode fazer uma solução básica de problemas na sua conexão de rede. Com um pouco de criatividade, você pode trabalhar com seu pessoal de suporte de TI local ou conhecer sua topologia de rede e endereço IP (por exemplo, `ping` no roteador, `ping` seu ISP) para identificar problemas de rede.