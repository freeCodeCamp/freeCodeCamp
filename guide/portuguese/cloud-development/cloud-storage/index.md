---
title: Cloud Storage
localeTitle: Armazenamento na núvem
---
## ARMAZENAMENTO COMO SERVIÇO (StAAS)

Quando usamos o armazenamento da nuvem, esse é o StAAS. Neste, o sistema em nuvem tem armazenamento e o usuário usa esse armazenamento em seu sistema e pode usá-lo para armazenar dados. O sistema em nuvem deve ter a capacidade de dimensionamento de armazenamento. Podemos integrar todo o armazenamento. Por exemplo, se tivermos vários pen-drives, podemos integrar todos os armazenamentos de pen drive em um único.

Existem basicamente dois tipos de armazenamento

1.  Objeto
2.  Quadra

### Armazenamento de Objetos

*   Nós não podemos fazer uma partição no armazenamento em nuvem. Nós só podemos armazenar arquivos e pastas lá. Isso é chamado de armazenamento de objetos. Não podemos instalar o sistema operacional, pois não há partições.
*   **Exemplo**
    *   Google drive (mecanismo de cálculo do Google, GCE), OneDrive, caixa de depósito, Microsoft azure.
    *   A Amazon tem seu próprio serviço de nuvem AWS. O S3 (Simple Storage Service, SSS) é o produto da amazon que fornece o StAAS. É uma nuvem pública. Qualquer um pode usar seus serviços.
    *   O OpenStack é a maior nuvem privada. O OpenStack tem produto rápido (armazenamento de objetos).

### Armazenamento em bloco

*   Se conseguirmos fazer partições no armazenamento fornecido, poderemos instalar o sistema operacional. Temos um disco rígido e podemos fazer partições neles, esse tipo de armazenamento é conhecido como armazenamento em bloco.
*   **Exemplo**
    *   Bloqueie o serviço de armazenamento do AWS - EBS (Elastic Block Storage)
    *   A nuvem oferece facilidade de armazenamento em escala que é a propriedade elástica da nuvem.
    *   Bloquear armazenamento do OpenStack - Cinder