---
title: connecting-to-firebase
localeTitle: conexão para firebase
---
# Pré-requisitos

1.  A versão mais recente do Android Studio

A maneira mais fácil de se conectar ao Firebase é usar o assistente do Firebase.

# 1\. Conectando usando o Firebase Assistant

1.  Crie uma conta no [Firebase Console](https://console.firebase.google.com) . Clique em adicionar projeto para adicionar seu projeto do Android Studio a ele.
    
2.  Instalar o Repositório do Google Você pode fazer isso adicionando a dependência em seu arquivo build.gradle no nível do projeto da seguinte forma:
    

```java
allprojects{ 
  repositories { 
        maven { 
            url "https://maven.google.com" // Google's Maven repository 
        } 
    } 
 } 
```

Alternativamente, você poderia fazer isso [usando a GUI](https://developer.android.com/studio/write/firebase) .

3.  Vá para Ferramentas> Firebase e selecione Conectar ao Firebase

Se você deseja se conectar ao firebase manualmente, instruções detalhadas estão disponíveis [aqui](https://firebase.google.com/docs/android/setup) . Ao conectar seu projeto do Android Studio ao Firebase, você pode

1.  clique em um produto no assistente do Firebase e leve-o aos documentos do Google, onde será informado sobre como proceder
2.  vá até o produto desejado em **Visão Geral do Projeto** no Console e clique em **Começar**
3.  acesse os [documentos](https://www.firebase.com/docs/android/quickstart.html) do [Firebase](https://www.firebase.com/docs/android/quickstart.html) para ver como configurar produtos individuais em seu projeto

A leitura de uma combinação dos três permitirá que você configure o produto, o que inclui a adição de dependências adequadas ao seu arquivo build.gradle.

**Se você encontrar Gradle Sync** Tente alterar a versão do Firebase-core ou a versão do banco de dados do Firebase