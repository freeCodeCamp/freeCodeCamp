---
title: Lambda Expressions 
localeTitle: Expressões Lambda
---
## Expressões Lambda

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/quadratic-equations/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

O Stream Api é usado em java para permitir o encadeamento de operações sequenciais e agregadas. As operações de fluxo são de natureza intermediária ou terminal.

Neste pequeno exemplo você pode ver que um dos utilitários de um fluxo é receber uma certa propriedade de todos os objetos em uma lista e retorná-la em outra lista usando operações intermediárias e de terminal.

Suponha que você tenha uma classe de objeto de Student. \`\` java estudante de classe pública { int studentId; String studentName;

public String getStudentName () { return this.studentName; }

public int getStudentId () { return this.studentId; } // setters } \`\`

Agora, suponha que em algum método você tenha uma lista de todos os alunos e queira obter uma lista de todos os nomes dos alunos. Tradicionalmente, isso pode ser algo assim.

\`\` java Lista students = some list of student objects

Lista studentNames = new ArrayList <> (); para (aluno estudante: alunos) { studentNames.add (student.getStudentName ()); } \`\` Embora isso não seja terrível, pode ser simplificado. Usando fluxos isso é possível com uma linha de código.

\`\` java Lista students = some list of student objects

Lista studentNames = students.stream (). map (String :: getStudentName) .collect (Collectors.toList ()); \`\`

A API de fluxo de alunos examina a lista de alunos e usa a função de mapa intermediário para retornar uma nova lista de fluxos usando o método que estiver à direita do:

A operação de coleta do terminal coleta o fluxo como uma lista de cadeias.

Este é apenas um uso da API do Streams usada no java 8. Existem muitos outros aplicativos de fluxos que utilizam as outras operações, como visto aqui na documentação. [Fluxos api doc](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

#### Mais Informações: