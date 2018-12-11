---
title: Setting up Firebase Realtime Database
localeTitle: Configurando o Firebase Realtime Database
---
# Pré-requisitos

1.  A versão mais recente do Android Studio
2.  Conecte-se ao Firebase manualmente ou por meio do Firebase Assistant (consulte [Conexão ao Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ). É recomendável que você faça isso para não ser confundido com instruções parciais relacionadas a isso nos documentos mencionados abaixo.

# Configurando com o Android Studio

Depois de adicionar o Firebase ao seu projeto, você precisará adicionar dependências extras e fazer algumas outras coisas para configurar o banco de dados em tempo real. Existem duas documentações sobre isso:

1.  Firebase quickstart [docs](https://www.firebase.com/docs/android/quickstart.html)
2.  Google [docs](https://firebase.google.com/docs/database/android/start/)

Existem algumas discrepâncias entre os dois. Para compensar isso, você pode seguir os documentos do Firebase, mas, em vez de usar apenas as dependências do gradle listadas, use a lista a seguir. Dessa forma, você não perderá nenhuma etapa da documentação.

**Adicionar Dependências Gradle** 1 No seu arquivo build.gradle no nível do aplicativo, adicione o seguinte

```java
dependencies { 
    implementation 'com.firebase:firebase-client-android:2.5.2+' 
    implementation 'com.google.firebase:firebase-database:15.0.0' 
 } 
```

# Instalação do Firebase Android SDK, permissões e código de configuração

Instruções detalhadas para estas podem ser encontradas [aqui](https://www.firebase.com/docs/android/quickstart.html) .

# Recursos

Para aprender sobre como ler e gravar no banco de dados em seu aplicativo Android, consulte os dois documentos listados em Referências. Você também pode descobrir como usar os produtos do Firebase na documentação do Google, mas provavelmente é uma boa ideia consultar também os documentos do Firebase ou qualquer coisa que possa ser útil.

# Referências

*   FIREBASE, _Android Quickstart_ , 17/04/2018, 07/05/2018, https://www.firebase.com/docs/android/quickstart.html
*   GOOGLE, _Configurar Firebase Realtime Database para Android_ , 04/05/2018, 07/05/2018, https://firebase.google.com/docs/database/android/start/

# Nota de rodapé

A primeira linha vem dos [documentos](https://www.firebase.com/docs/android/quickstart.html) do Firebase sobre como configurar o banco de dados em tempo real no Android Studio. Nos docs, 'compile' é usado, mas é obsoleto e substituído por 'implementação'. A segunda linha vem dos [documentos](https://firebase.google.com/docs/database/android/start/) do Google sobre a configuração do banco de dados em tempo real no Android Studio. Se for realmente redundante adicionar ambos, corrija este artigo.