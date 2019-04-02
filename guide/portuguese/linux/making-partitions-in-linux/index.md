---
title: Partitions
localeTitle: Partições
---## PARTIÇÕES

*   Sem criar partições no disco rígido, não podemos criar pastas.
    
*   Partições no Linux-
    
    *   **df**
    *   **df -h** (legível para humanos)
*   Mostra o tamanho em MiB, GiB
    
*   **lvdisplay**
    
*   Mostra informações sobre a partição do disco -
    
*   **fdisk -l**
    
*   **fdisk -l / dev / sda** (sda é o nome do disco rígido)
    
*   Para praticar a partição, insira o disco rígido virtual no Linux usando a caixa virtual.
    
*   Alguns pontos para lembrar
    
*   O disco rígido não entende GB ou MB, é unidade é setorial.  
    1 setor = 512 bytes.  
    Para encontrar o tamanho real do disco rígido, encontre o número de setores \* 512.  
    Aloca espaço no disco rígido em setores.
    
*   Apenas 4 partições podem ser criadas em um único disco rígido.
    

  

## FAZENDO PARTIÇÕES EM DISCO RÍGIDO

1.  Abre o prompt do disco rígido.
    
    *   **fdisk / dev / sdb**
2.  Imprime informações de partições do disco rígido.
    
    *   **p**
3.  Crie uma nova partição.
    
    *   **n**
4.  Escolha a partição principal.
    
5.  Pressione 1 (primeira partição)
    
6.  Inicial alguns setores (0-2047 = 2048 setores = 1 MB) são reservados no disco rígido.
    
7.  O espaço real começa no 2048º setor.
    
8.  **\+ 1G**
    
9.  Crie 4 partições como esta.
    
10.  Após a 4ª partição você não pode criar mais partições.
    
11.  Pressione **w** para salvar.
    
12.  Pressione **q** para sair sem salvar nenhuma partição. Isto irá Remover todas as partições feitas porque isso foi temporário.
    
13.  Para excluir a partição -
    
    *   **d**

  

## PORQUE HÁ LIMITE DE 4?

*   Porque onde nós armazenamos as informações das partições, os metadados das partições, são fixos e de 64 bytes. Esta informação é armazenada na tabela de partições.
*   1 partição requer 16 bytes para que apenas 4 partições possam ser criadas.
*   Em 1 MB (2048 setores) reservado no disco rígido, 64 bytes são reservados para armazenar essas informações.
*   Para ver tabelas de partições
*   **fdisk -l**
*   Quando usamos pela primeira vez o disco rígido, ele é inicializado ou formatado. Esse formato decide o número de partições no disco rígido.
*   O sistema operacional cria um formato de disco rígido quando foi inicializado pela primeira vez e esse formato decide o número de partições.
*   Formato da partição que usamos é o formato DOS = 64 bytes
*   Formato GPT = 128 partições podem ser criadas.
*   Tabela de partições -> formato: DOS -> 4 partições
*   Tabela de partições -> formato: GPT -> 128 partições

  

## AUMENTANDO O NÚMERO DE PARTIÇÕES

*   Crie uma nova tabela de partições no disco rígido.
    
*   A partição P4 será criada de forma que seja um disco rígido separado.
    
*   Esta partição é a partição estendida em que podemos criar mais partições.
    
*   A partição lógica ocupa espaço na partição estendida. Informações ou a tabela de partições serão armazenadas na partição estendida.
    
*   Crie 3 primária e última 1 partição estendida.
    
*   Total de 64 partições podem ser feitas agora. 3 primárias + 60 lógicas + 1 estendidas.
    
*   Mas 63 partições podem ser usadas para armazenamento de dados (remova 1 partição estendida).
    
*   Não há diferença entre a partição primária e a lógica, exceto que ninguém controla o primário, mas o lógico é controlado por estendido. Portanto, se removermos a partição estendida, todas as partições lógicas serão removidas.
    
*   Para ver informações sobre partições -
    
*   **lsblk** (lista de dispositivos de bloco)
    
*   O disco rígido também é conhecido como dispositivos de bloco
    
*   A partição estendida não pode ser usada para armazenamento de dados apenas lógico e primário pode ser usado.
    
*   Se a partição tiver que ser usada para armazenamento, siga estas 3 etapas -
    

1.  Crie uma partição física.
2.  Formate-o.
3.  Ativar / montar.

  

## PARTIÇÃO DE FORMATO

*   A partição deve criar um índice para cada novo arquivo para processamento mais rápido.
    
*   Sempre que um arquivo for aberto, localize esse arquivo no índice.
    
*   Este índice é formado em partição quando é formatado pela primeira vez. É também chamado de sistema de arquivos.
    
*   Essa tabela de índice é conhecida como tabela inode (nó de índice).  Então, toda partição tem que ser formatada.
    
*   OS lê apenas tabela de inode para mostrar tamanhos de pastas, arquivos, drives etc.
    
*   Esta tabela de inodes pode ser alterada, e o sistema operacional mostrará tamanhos diferentes do tamanho real.
    
*   Quando removemos um arquivo, ele apenas remove a entrada do inode desse arquivo.
    
*   Por exemplo, remova um arquivo de tamanho 1 GB e 100 GB, o tempo será o mesmo.
    
*   Quando formamos uma partição, ela apenas remove a página de índice, os dados não serão removidos. Assim, podemos recuperar dados dessa partição.
    
*   O sistema de arquivos cria uma tabela de inodes para gerenciar arquivos.
    
*   Para formatar a partição -
    
*   **mkfs.ext4 / dev / sdb1**
    
*   Exemplo - NTFS, ext2, ext3, ext4, xfs etc.
    

  

## Montagem ou Ativação

*   Apenas dois tipos de coisa podem ser usados ​​em um sistema operacional - Arquivo e pasta
    
*   Nós não podemos ir diretamente em um dispositivo. Assim, o dispositivo criado tem que ser convertido em uma pasta ou link com uma pasta ou montar com uma pasta, a fim de usá-lo.
    
*   **mkdir / data**
    
*   **mount / dev / sdb1 / data** (Esses dados são como um pen drive montado e desmontado)
    
*   **cd / data**
    
*   **cat> adarsh.txt**
    
*   **umount / dev / sdb1**
    
*   **cd / data /**
    
*   **ls**
    
*   Monte novamente
    
*   Para saber qual partição está montada em qual pasta.
    
*   **df -h**
    
*   Mostra a tabela de inodes.
    
*   **ls -l**
    
*   Mostra o número do inode.
    
*   ls -il