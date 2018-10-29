---
title: Version Control System
localeTitle: Sistema de Controle de Versão
---
## Sistema de Controle de Versão

Sistemas de controle de versão (VCS), também chamados de Source Code Management (SCM), são ferramentas usadas para rastrear mudanças nos arquivos, gerenciar a versão e facilitar a edição colaborativa de arquivos. Existem principalmente 2 tipos de VCS:

*   Sistema de Controle de Versão Centralizado Onde um repositório central é autoritativo. A arquitetura associada é cliente / servidor. Os primeiros VCS (CVS, SVN…) foram Centralized Version Control System.
*   Sistema de Controle de Versão Distribuída Onde várias modificações de troca de repositório. A arquitetura associada é principalmente peer to peer, mas um repo pode ser declarado como autoritativo. O VCS moderno mais utilizado (Git, Mercurial…) é o Distributed Version Control System.

### Por que usar isso?

*   **Histórico de alterações** - O VCS permite ao usuário navegar e pesquisar todas as alterações que são gravadas automaticamente com informações úteis (data, autor ...) e
*   **Versões / tags** - o usuário pode pesquisar / recuperar o estado específico dos arquivos que foram rotulados com tags e nomes de versão
*   **Ramificação / Mesclagem** - O Distributed Version Control System facilita a manutenção da ramificação paralela de arquivos e a mescla parcial ou totalmente quando necessário.
*   **Operações atômicas** - Todos os VCS modernos fornecem operações atômicas: todas as modificações são garantidas para ter sucesso ou falhar como um todo, garantindo que os arquivos estejam sempre em um estado consistente.

### Sistema de Controle de Versão mais popular

*   Git

_O Git_ é um Sistema de Controle de Versão Distribuído e provavelmente o VCS mais usado atualmente com o _Mercurial_ .

*   Mercurial

_Mercurial_ é um sistema de controle de versão distribuído e provavelmente o mais usado VCS usado hoje em dia com o _Git_ .

*   CVS

_O CVS_ é um antigo SCM que era proeminente antes do _SVN_ generalizado. _O CVS_ e o _SVN_ agora estão obsoletos em favor do Distributed Version Control System, como o _Git_ e o _Mercurial_ .

*   SVN / Subversion

_O SVM_ é um antigo SCM que sucedeu o _CVS_ . Eventualmente, o _SVN_ foi preterido pela ampla adoção do Distributed Version Control System, como o _Git_ e o _Mercurial._

### Mais Informações:

[CVS](http://savannah.nongnu.org/projects/cvs)

[Git](https://git-scm.com/)

[Mercurial](https://www.mercurial-scm.org/)

[SVN](http://subversion.tigris.org/)

[Controle de versão na Wikipedia](https://en.wikipedia.org/wiki/Version_control)