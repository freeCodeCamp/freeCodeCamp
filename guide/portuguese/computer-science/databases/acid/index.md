---
title: ACID
localeTitle: ÁCIDO
---
## ÁCIDO

Na ciência da computação, o ACID (Atomicidade, Consistência, Isolamento, Durabilidade) é um conjunto de propriedades para modificações no banco de dados. Eles ajudam a garantir a validade de uma transação, mesmo com erros ou falhas.

Uma **transação** é qualquer sequência de operações do banco de dados que satisfaça as propriedades do ACID e pode ser visualizada como uma única operação lógica nos dados. Um exemplo é uma transferência de fundos de uma conta bancária para outra. Isso envolve várias alterações, como debitar uma conta e creditar outra, mas é considerado uma única transação.

### Atomicidade

Isso significa que uma transação complexa é processada completamente ou não é de todo. Se uma parte da transação falhar, a transação inteira não será concluída e o banco de dados permanecerá inalterado. Dessa forma, se houver um travamento, falha de energia ou erro, o banco de dados não terminará em um estado em que apenas partes de uma transação serão concluídas.

### Consistência

Isso significa que os dados serão consistentes. Quaisquer dados inseridos no banco de dados devem ser válidos e permitidos com base em quaisquer restrições especificadas. Ele garante que qualquer transação altere o banco de dados de um estado válido para outro estado válido.

### Isolamento

Isso significa que, se duas transações forem executadas ao mesmo tempo, uma transação não poderá ler dados de uma transação que ainda não foi concluída. Cada transação verá o banco de dados como se as transações estivessem executando sequencialmente. Se uma transação precisar ler os dados que o outro está gravando, ela terá que esperar até que a outra transação seja concluída. Os efeitos de uma transação incompleta não afetarão outra transação.

### Durabilidade

Isso significa que, uma vez concluída a transação, ela permanecerá assim, mesmo no caso de perda de energia ou outros erros. Ele garante que todas as alterações sejam registradas em um meio de armazenamento não volátil (como um disco rígido) e faz um registro da transação concluída.

### Mais Informações:

*   Artigo ACID: [Wikipedia](https://en.wikipedia.org/wiki/ACID)
*   Visão geral do vídeo: [YouTube](https://www.youtube.com/watch?v=LSB4eceRsw8)